angular-keypress
================

angular  keypress directive
<p><b>How to :</b></p>
                 <ol>
                         <li><b>include js file </b> <pre> src="../dist/angular-keypress.js" </pre></li>
                         <li><b>include angular-keypress module to u app </b> <pre>angular.module('keypress',
               ['angular-keypress']) </pre></li>
                         <li><b>simple use directive</b>
                               <pre> angular-keypress='[
                  {"key-code":"13;27",
                    "func":"site.testFunc(),site.testFunc2()"
                  }]' 
                                </pre></li>
                           <li><b>use directive with option </b>
                               <pre> angular-keypress='[
                  {"key-code":"13;27",
                    "func":"site.testFunc(),site.testFunc2()",
                    "is-true-expression":"site.is_work"
                  }]' 
                                </pre></li>

                  </ol>
            <p><b>Options</b></p>
                  <ul>
                         <li><b>key-code </b>- which key user should press to call a functions (13 - Enter, 27 - Esc ...)</li>
                         <li><b>func </b>- function which will be called</li>
                         <li><b>is-true-expression</b>- here u can write exception and if this exception gives true then functions from 'func' will be called</li>

                  </ul>
