(function (){
  'use strict'

     angular
            .module('angular-keypress',[])
            .directive('angularKeypress',angularKeypress)
     
     angularKeypress.$inject = ['$timeout'];

     function angularKeypress($timeout){
                var directive  = {
                       restrict: 'A',
                       link: function(scope, elm, attrs, ctrl) {
                            var obj,keysAssot = [];
                            var keys,functions;
                            var regularExp = /[:,;/\n ]/gi;

                            //apply function
                            function applyFunc(func){
                                             $timeout(function() {
                                                      scope.$apply(function(s) {
                                                                s.$evalAsync(func);
                                                      });
                                              });
                            }

                            //wait for keydown
                            elm.bind('keydown', function(e){
                                      //готовим финкции
                                      obj = angular.fromJson(attrs.angularKeypress);
                                      keysAssot = [];
                                      obj.forEach(function(element){
                                                        keys = element['key-code'].split(regularExp);
                                                        functions = element['func'].split(regularExp);

                                                        keys.forEach(function(key){
                                                                functions.forEach(function(func){
                                                                        if(element.hasOwnProperty("is-true-expression" )){
                                                                                keysAssot.push({'key':key,'func':func,'is-true-expression':element['is-true-expression']});
                                                                        }else{
                                                                                keysAssot.push({'key':key,'func':func});  
                                                                        }
                                                                }); 
                                                        }); 
                                      });

                                      //проверка на совпадение
                                     keysAssot.forEach(function(k){
                                              if(e.keyCode == k['key']){
                                                        if(k.hasOwnProperty("is-true-expression")){
                                                                if(scope.$eval(k["is-true-expression"])){
                                                                        applyFunc(k['func']);
                                                                }
                                                        }else{
                                                                         applyFunc(k['func']);
                                                        } 
                                              }
                                     });
                              });
                       }
               }
               return directive;
     }
       
})();