


var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope, $http) {
    {
        $http.get('api/people.json').success(function(data) {
            $scope.companies = data;
        });

    }


    $scope.removeRow = function(name) {
        var index = -1;
        var comArr = eval($scope.companies);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.companies.splice(index, 1);
    };



});



helloApp.controller('MyCtrl', ['$scope', function($scope) {
    var vm = this;
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
}]);
