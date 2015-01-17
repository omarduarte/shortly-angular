angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function (data) {
    Links.post(data).then(function(res) {
      // whaterver
    });
  };

});

