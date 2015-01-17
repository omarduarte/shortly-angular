angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
     Links.then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();

})
.factory('Links', function($http) {
  return $http.get("/api/links")
  .then(function(resp) {
    return resp.data;
  });
});
