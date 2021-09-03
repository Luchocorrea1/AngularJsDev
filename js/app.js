"use strict";
var ngApp =
    angular.module('appPrueba', ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/Prueba', {
                    templateUrl: 'html/Prueba.html',
                    controller: 'PruebaController',
                })
                .otherwise('/Prueba');
        });
