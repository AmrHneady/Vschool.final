var app = angular.module("app.about", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./view/About/about.app.js",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
});