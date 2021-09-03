var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.modelo = {};
    $scope.modelo.firstName = "John";
    $scope.modelo.lastName = "Doe";
    $scope.Datos = [];
    $scope.Guardar = function () {
        $scope.Datos.push($scope.modelo);
        $scope.modelo = {};
    }

    $scope.Edit = function (index) {
        $scope.modelo = $scope.Datos[index];
        $scope.Datos.splice(index, 1);
    }

    $scope.Delete = function (index) {
        $scope.Datos.splice(index, 1);
    }
});