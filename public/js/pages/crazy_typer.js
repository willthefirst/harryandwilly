// Defaults
var smallest_size = 20;
var variations = 50;

angular.module('crazyTyper', [])
    .controller('CrazyController', function($scope) {
        $scope.crazy_text = [];

        // Not worrying about delete for now
        $scope.crazyFunction = function($event) {
            var new_letter = {
                character: "",
                color: "#000",
                size: smallest_size,
                margin: 0,
                randomizeStyle: randomizeStyle
            };

            // If spacebar, insert some blank spacebar
            if ($event.which === 32) {
                new_letter.margin = "0 15px";
            } else {
                // Append a crazy character
                new_letter.character = String.fromCharCode($event.which);
                new_letter.randomizeStyle();
            }
            $scope.crazy_text.push(new_letter);
        };
    });

var randomizeStyle = function() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.size = Math.floor(Math.random() * variations) + smallest_size + "px"
};
