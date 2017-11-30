var MyApp = angular.module("MyApp", [])
                           .controller("MyController", function ($scope) {
                             
                               $scope.CDParlorName = "CD_Technology";

                               $scope.CDHeadOfficeAddress = " ECC Road, Near HDFC Bank, Whitefield, Bengaluru, Karnataka";
   
                               $scope.CDObjects = [
                                   { CDTitle : "AngularJS", CDLanguage: "English", CDPrice: 399 },
                                   { CDTitle : "MVC",       CDLanguage: "French",  CDPrice: 299 },
                                   { CDTitle : "HTML",      CDLanguage: "English", CDPrice: 250 },
                                   { CDTitle : "CSS",       CDLanguage: "Spain",   CDPrice: 350 },
                                   { CDTitle : "Bootstrap", CDLanguage: "English", CDPrice: 450 },
                                   { CDTitle: "WCF",        CDLanguage: "French",  CDPrice: 400 },
                                   { CDTitle: "HTML5",      CDLanguage: "English", CDPrice: 250 }
                               ];
                              
                           });