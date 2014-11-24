(function (){
  'use strict'

  /*
    *Test controller that must 
    *show how angular-keypress
    * directive works
   */
  angular
         .module('keypress')
         .controller('SiteCtrl', SiteCtrl);
         
          SiteCtrl.$inject = [];
         
          function SiteCtrl(){    
                       var site = this;
                       
                       site.is_work = 1;

                       site.testFunc = testFunc;
                       site.testFunc2 = testFunc2;
                       site.testFunc3 = testFunc3;


                       function testFunc(){
                                    site.msg = 'testFunc is run now';
                                    alert(site.msg);
                                   console.log(site.msg);
                       }

                       function testFunc2(){
                                     site.msg2 = 'testFunc2 is run now';
                                     alert(site.msg2);
                                    console.log(site.msg2);
                       }

                        function testFunc3(){
                                     site.msg3 = 'testFunc3 is run now';
                                     alert(site.msg3);
                                    console.log(site.msg3);
                       }
                     
                       

                                     
           }
                

})();