// MODULE
var myApp = angular.module('myApp', []);

var encodedKey = "QkxJZzNadWlhZ21zaEZHY3dIcjBiMmNWemVVM3AxQ092VUtqc25NeHRkS284N1kyOHU";
// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.class = "Choose a class above.";
    $scope.cards = '';
    $scope.search = "";
    $scope.lookup = function(){
        console.log("lookup is working");
        $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + $scope.class,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                console.log("Retrieving class cards");
                console.log(json);
                $scope.$apply(function(){
                    $scope.cards = json;
                });
                console.log("Set $scope.cards to json object");
                //cardObj = json[0];
                //console.dir(cardObj);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting class data!");
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", atob(encodedKey)); // Enter here your Mashape key
            }
        });
    };
    $scope.clickMe = function(nameId){
        console.log(nameId);
        console.log($scope.search.rarity);
    };
}]);