angular-keypress directive
================

angular  keypress directive
##How to :##
1) include angular-keypress js file 
```
<script type="text/javascript" src="../bower_components/angular/angular.min.js"></script>
```
2) include angular-keypress directive module to  app
```
angular.module('app-name',['angular-keypress']);
```
3) simple use directive
```
<input   angular-keypress='[
                            { "key-code":"13;27",
                              "func":"Function1(),Function2()"
                            }]'
          type="text"
>
```
4) use directive with option
```
<input   angular-keypress='[
                            { "key-code":"13;27",
                              "func":"Function1(),Function2()",
                              "is-true-expression":"a<b"
                            }]'
          type="text"
>
```
Options

- <b>key-code</b> - which key user should press to call a functions (13 - Enter, 27 - Esc ...)
- func - function which will be called
- is-true-expression- here u can write exception and if this exception gives true then functions from 'func' will be called


