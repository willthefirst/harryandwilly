angular.module('synonymAutocorrect' , [])
  .controller('Replacer', function( $scope ) {
    $scope.words = [];
    var word_to_add = "";
    $scope.replaceWord = function(e) {
      // if spacebar, replace the word
      if (e.charCode === 32 && $scope.initial !== "") {
        $scope.words.push($scope.initial);
        $scope.initial = "";
        console.log($scope.words);
      }
    }
  });
