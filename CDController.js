var MyApp = angular.module("MyApp", [])
                           .controller("MyController", function ($scope) {

                               $scope.CDObjects = [{
                                   CDId : "001",
                                   CDTitle : "AngularJS",
                                   CDPrice : "399" 
                               }];
                               $scope.getAllDetails = function (id, title, price) {

                                   $scope.CDObjects.push({ CDId: id, CDTitle: title, CDPrice: price });
                               };
                           });