var app = angular.module('serverapp',[]);

app.controller('serverCtrl',function($scope,$http){
   
    $http.get('http://localhost:4560/countriesWithCaptials')
    .then(function(response){
       $scope.serverdata = response.data; 
    });
});