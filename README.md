angular-keypress directive by @ Maksym Dikhtiar
================

##How to :##
1) include angular-keypress js file 
```
<script type="text/javascript" src="../dist/angular-keypress.js"></script>
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
          type="text">
```
4) use directive with option
```
<input   angular-keypress='[
                            { "key-code":"13;27",
                              "func":"Function1(),Function2()",
                              "is-true-expression":"a<b"
                            },
                            { "key-code":"88;106",
                              "func":"Function3()"
                            }]'
          type="text">
```
<p><b>***u can split keycode and function use this symbols</b> </p>
<p>1)  ,</p>
<p>2)  :</p>
<p>3)  ;</p>
##Options:##

- <b>key-code</b> - which key user should press to call a functions (13 - Enter, 27 - Esc ...)
- <b>func</b> - function which will be called
- <b>is-true-expression</b> - here u can write exception and if this exception gives true then functions from 'func' will be called


