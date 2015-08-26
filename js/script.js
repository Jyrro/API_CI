var app = angular.module('MyApp',[]);
var URL_Items = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=all&api_key=03f6088f-058e-4dca-8702-26af6fe23e46";
var URL_Item_by_id = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item/{id}";
var users = "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/jyrro?api_key=03f6088f-058e-4dca-8702-26af6fe23e46";


app.controller('Objets', function($scope,$http) {
    
    $http.get(URL_Items)
    .success(function(response) {
      $scope.objet = response.data;  console.log($scope.objet);
      
    });
    
  
});