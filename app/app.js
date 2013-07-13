var app=angular.module("AlbertDriveApp",[]).
    config(function($routeProvider) {
        $routeProvider.
            when("/", {controller:HomeController, templateUrl:"/app/home/home.html"}).
            when("/home", {controller:HomeController, templateUrl:"/app/home/home.html"}).
            when("/know",{controller:KnownController,templateUrl:"app/know/know.html"}).
            when("/help",{controller:HelpController,templateUrl:"app/help/help.html"}).
            when("/connect",{controller:ConnectController,templateUrl:"app/connect/connect.html"}).
            otherwise({redirectTo:"/"});

        //$locationProvider.html5Mode(true);
    });

app.run(function($route){});

var cb = new Codebird();
cb.setConsumerKey("EBmEiAD1wlp5RCuGU1qQew", "QQKZlE9okih2ORjDRX2rC9XxCWWYhUBgKEs6TIck0c");
cb.setToken("19904136-3FvWv2oQiQcCRcERvXlURxp7Ruoqf1NN3Co5oZhFf", "6WYRK7roSX3bF9XUtvGrVTojHHAzZ2FT6vM7UPJwIw");

//function HomeController($scope)
//{
//    $scope.description="This is an app to support the Albert Drive programme";
//}
