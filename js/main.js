var app = angular.module('whatToDoApp', []);



app.controller('ContentController', ['$scope', '$log', function ($scope, $log) {
    // Contorller
    $log.info('application started...');
    /*
    
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
    */
    
    $scope.add = function() {
        var elInputField = $('._input-field'), sSubject = elInputField.val();
        
        elInputField.val('');
        
        var oNewTodo = {
            'index' : $scope.todos.length + 1,
            'subject' : sSubject,
            'done' : false
        };
        
        $scope.todos.push(oNewTodo);
        
        console.log('added', oNewTodo);
        
        $scope.update();
    };
    
    $scope.update = function() {
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    
    $scope.load = function() {
        console.dir('todos', localStorage.getItem('todos'));
        $scope.todos = JSON.parse(localStorage.getItem('todos'));
        
        if(!$scope.todos) {
            $scope.todos = [];
        }
    };
    
    $scope.delete = function(index) {
        var y = $scope.todos;
        
        y.splice( $.inArray(index, y), 1 );
    }
    
    $scope.test = function() {
        console.log('test...');
    }
    
    $scope.load();
    
    $scope.$watch('todos', function(newVal, oldVal) {
        console.log(newVal, oldVal);
    });
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


app.directive('ngEnterKey', function() {
    return function(scope, element, attrs) {
        element.bind('keydown', function(event) {
            if(event.which === 13) {
                scope.$eval(attrs.ngEnterKey);
                scope.$apply();
            }
        });
        
        event.preventDefault();
    }
})

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
/*
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        'templateUrl' : 'main.html'
    }).otherwise({
        'redirectTo' : './views/index.html'
    });

}]);
*/