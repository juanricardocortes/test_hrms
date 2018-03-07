angular.module("app", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/exam", {
                templateUrl: "views/exam.html",
            })
            .when("/dashboard", {
                templateUrl: "views/dashboard.html"
            })
            .when("/employee", {
                templateUrl: "views/login.html"
            })
            .when("/applicant", {
                templateUrl: "components/applicant_component/applicant.html",
                controller: ""
            })
            .when("/projects", {
                templateUrl: "views/login.html"
            })
            .when("/profile", {
                templateUrl: "views/login.html"
            })
            .when("/leaves", {
                templateUrl: "views/login.html"
            })
    })