angular.module('shortly.links', ['shortly.services'])
.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.get().then(function(resp) {
      $scope.data.links = resp.data;
    });
  };

  $scope.getLinks();

});
