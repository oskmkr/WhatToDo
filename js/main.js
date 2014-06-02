var app = angular.module('whatToDoApp', []);

var Status = {
    'NOTCOMPLETE' : 0,
    'COMPLETE' : 1
    
};

app.controller('ContentController', ['$scope', function ($scope) {
    // Contorller
    $scope.todos = [
    {
        'index' : 1,
        'subject' : 'study english',
        'status' : Status.NOTCOMPLETE
    },

    {
        'index' : 2,
        'subject' : 'write code',
        'status' : Status.NOTCOMPLETE
    },

    {
        'index' : 3,
        'subject' : 'hard training',
        'status' : Status.NOTCOMPLETE
    }
    ];
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

app.controller('ContentsController', ['$scope', '$http', function ($scope, $http) {
    // Contorller
    $scope.contents = [{
        'title' : 'back-end',
        'description' : 'back-end 기술에 대해 정리합니다.',
        'url' : '#'
    }, {
        'title' : 'front-end',
        'description' : 'front-end 기술에 대해 정리합니다.',
        'url' : '#'
    }, {
        'title' : 'TDD',
        'description' : 'TDD 기술에 대해 정리합니다.',
        'url' : '#'
    }];
    
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