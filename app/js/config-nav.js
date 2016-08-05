var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/plans", {
            templateUrl: "plans.html"
        })
        .when("/payments", {
            templateUrl: "payments.html"
        })
        .when("/payouts", {
            templateUrl: "payouts.html"
        })
        .when("/more", {
            templateUrl: "more.html"
        });
});
