// our own API key, technically would be better to not have this public
var API_key = "ec0c633730812be91bb91ce3a8fa2412";
var synonym_URL = "http://words.bighugelabs.com/api/2/" + API_key + "/";

angular.module('synonymAutocorrect', [])
    .controller('Replacer', function($scope, $http) {
        $scope.words = [];
        var temp = "";
        var available_synonyms = [];
        var wordObject = {};
        $scope.replaceWord = function(e) {
            // if spacebar, replace the word
            if (e.charCode === 32 && $scope.initial !== "") {
                temp = $scope.initial;
                $scope.initial = "";
                // $scope.initial = "";
                $scope.words.push({
                    initialWord: temp
                });
                $http.get(synonym_URL + temp + "/json").
                then(function(result) {
                    var key, keys = [];
                    for (var key in result.data) {
                        keys.push(key);
                    }
                    available_synonyms = result.data[keys[getRandomInt(keys.length - 1)]].syn;
                    $scope.words[$scope.words.length - 1].replacedWord = available_synonyms[getRandomInt(available_synonyms.length - 1)];
                }, function(error) {
                    console.log('error')
                });
            }
        }
    });

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

//
// http://words.bighugelabs.com/api/2/ec0c633730812be91bb91ce3a8fa2412/word/json
//
// Sample REST URLs
// Plain text
// http://words.bighugelabs.com/api/2/ec0c633730812be91bb91ce3a8fa2412/word/
// The trailing slash is required.
//
// XML
// http://words.bighugelabs.com/api/2/ec0c633730812be91bb91ce3a8fa2412/word/xml
//
// JSON
// http://words.bighugelabs.com/api/2/ec0c633730812be91bb91ce3a8fa2412/word/json
//
// Serialized PHP
// http://words.bighugelabs.com/api/2/ec0c633730812be91bb91ce3a8fa2412/word/php
