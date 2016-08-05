
var helloApp = angular.module("helloApp", []);

helloApp.controller("CompanyCtrl", function($scope, $http) {
    {
        $http.get('api/people.json').success(function(data) {
            $scope.companies = data;
        });
    }

// ============================Remove row=======================================



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

// ======================Modal show=============================================

helloApp.controller('MyCtrl', ['$scope', function($scope) {
    var vm = this;
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
}]);




// =========================Order by field=========================================



helloApp.controller('MyCtrl', function($scope) {
    $scope.orderByField = 'name';
    $scope.reverseSort = false;
    $scope.companies = data;


});


// ===========================Buttons==============================================


helloApp.controller('MyCtrl', function($scope) {
    $scope.companies = data;
    $scope.myFunction = function(val) {

    return (val.type != 2);
    };
});
