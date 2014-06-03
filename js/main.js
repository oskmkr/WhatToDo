var app = angular.module('whatToDoApp', []);

app.controller('ContentController', ['$scope', function ($scope) {
    // Contorller
    $scope.todos = [
    {
        'index' : 1,
        'subject' : 'study english',
        'done' : true
    },

    {
        'index' : 2,
        'subject' : 'write code',
        'done' : false
    },

    {
        'index' : 3,
        'subject' : 'hard training',
        'done' : false
    }
    ];

    $scope.change = function() {
        console.log('$scope.change..', this);
    };

    
}]);

app.controller('TitleController', ['$scope', '$http', function ($scope, $http) {
    // Contorller
    $scope.greeting = 'Todd Motto';
    $scope.yourName = '';
    
    
    $http({
        method: 'GET',
        url: '//localhost:8081/mock/memberInfo.json'
    }).success(function (data, status, headers, config) {
        // 서버로부터 받아온 사용자 이름을 모델에 할당!
        $scope.user = {};
        $scope.user.username = data.memberInfo[0].name;
    }).error(function (data, status, headers, config) {
        // 이런. 뭔가 잘못되었음! :(
        console.log(data);
    });

}]);

app.filter('reverse', function () {
    return function (input, uppercase) {
        var out = '';

        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }

        return out;
    }
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        'templateUrl' : 'main.html'
    }).otherwise({
        'redirectTo' : './views/index.html'
    });

}]);