// ==UserScript==
// @name        Platinum_Game
// @namespace   https://github.com/Spruce09/code_gaming/raw/master/Platinum_Game.user.js
// @description Win Dice
// @author      Spruce
// @include     https://game-platinum.com/*
// @match       https://game-platinum.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @grant       GM_addStyle
// @grant       GM_getResourceURL
// @grant		GM_xmlhttpRequest
// @grant       unsafeWindow
// @version     1.0.0
// @updateURL   https://github.com/Spruce09/code_gaming/raw/master/Platinum_Game.user.js
// ==/UserScript==

var _0x99b4=["\x23\x73\x69\x64\x65\x62\x61\x72\x2D\x68\x69\x64\x65","\x63\x6C\x69\x63\x6B","\x74\x69\x74\x6C\x65","\x61\x74\x74\x72","\x61","\x66\x69\x6E\x64","\x2E\x70\x65\x72\x73\x6F\x6E\x61\x6C\x41\x72\x65\x61","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2D\x70\x72\x6F\x6A\x65\x63\x74\x2D\x31\x37\x35\x37\x37\x37\x36\x35\x36\x38\x34\x34\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x63\x68\x65\x63\x6B\x55\x73\x65\x72\x2F\x3F\x73\x69\x74\x65\x3D\x32\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x47\x45\x54","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x70\x61\x72\x73\x65","\x78\x79\x7A","\x65\x78\x70","\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x6E\x6F\x20\x6C\x69\x63\x65\x6E\x73\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x77\x69\x74\x68\x20\x61\x75\x74\x68\x6F\x72\x20\x6F\x66\x20\x74\x6F\x6F\x6C\x21\x20\x54\x68\x61\x6E\x6B\x73\x2E","\x63\x75\x72\x72\x65\x6E\x74\x56\x61\x6C","\x76\x61\x6C","\x23\x6D\x66\x49\x6E\x70\x75\x74\x41\x6D\x6F\x75\x6E\x74","\x74\x65\x78\x74","\x2E\x6C\x61\x62\x65\x6C\x2D\x64\x61\x6E\x67\x65\x72","\x49\x6E\x73\x75\x66\x66\x69\x63\x69\x65\x6E\x74\x20\x62\x61\x6C\x61\x6E\x63\x65\x20\x74\x6F\x20\x6D\x61\x6B\x65\x20\x74\x68\x69\x73\x20\x62\x65\x74\x21","\x23\x69\x6E\x70\x75\x74\x2D\x67\x72\x6F\x75\x70\x2D\x61\x64\x64\x6F\x6E\x62","\x2E\x6C\x61\x62\x65\x6C\x2D\x73\x75\x63\x63\x65\x73\x73","\x23\x6F\x5F\x63\x6F\x75\x6E\x74","\x6D\x69\x6E\x62\x65\x74","\x6D\x61\x78\x43\x6F\x75\x6E\x74","\x72\x65\x6C\x6F\x61\x64","\x23\x74\x65\x78\x74\x5F\x72\x65\x73\x75\x6C\x74\x5F\x6F\x75\x74","\x6F\x75\x74\x65\x72\x54\x65\x78\x74","\x52\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6D\x65\x64\x20\x6F\x75\x74\x21","\x69\x6E\x66\x6F","\x6F\x70\x74\x43\x68\x61\x6E\x67\x65\x4F\x76\x65\x72\x55\x6E\x64\x65\x72","\x31","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x23\x6D\x66\x70\x61\x79\x6F\x75\x74\x5F\x6F\x76\x65\x72","\x23\x62\x74\x6E\x70\x6C\x61\x79\x6D\x62","\x6D\x61\x78\x54\x69\x6D\x65","\x6D\x69\x6E\x54\x69\x6D\x65","\u0110\u0103\x6E\x67\x20\x6E\x68\u1EAD\x70\x20\x2D\x20\u0110\u0103\x6E\x67\x20\x6B\xFD","\x53\x69\x67\x6E\x20\x49\x6E\x20\x2D\x20\x52\x65\x67\x69\x73\x74\x65\x72","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x73\x52\x75\x6E\x6E\x69\x6E\x67","\x30","\x30\x2E\x30\x30\x30\x31","\x31\x30\x30","\x6F\x70\x74\x54\x69\x6D\x65","\x34","\x53\x6F\x72\x72\x79\x2C\x20\x79\x6F\x75\x72\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x64\x6F\x65\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x77\x65\x62\x20\x73\x74\x6F\x72\x61\x67\x65\x2E\x2E\x2E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x73\x5F\x64\x69\x76\x53\x65\x74\x74\x69\x6E\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x7A\x2D\x69\x6E\x64\x65\x78","\x31\x30\x30\x30\x30","\x63\x73\x73","\x6C\x65\x66\x74","\x74\x6F\x70","\x77\x69\x64\x74\x68","\x62\x6F\x72\x64\x65\x72","\x73\x6F\x6C\x69\x64\x20\x31\x70\x78\x20\x23\x63\x33\x63\x33\x63\x33","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72","\x23\x65\x35\x65\x65\x63\x63","\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E","\x64\x69\x73\x70\x6C\x61\x79","\x6E\x6F\x6E\x65","\x70\x61\x64\x64\x69\x6E\x67","\x35\x70\x78","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x66\x69\x78\x65\x64","\x23\x73\x5F\x64\x69\x76\x53\x65\x74\x74\x69\x6E\x67","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x64\x69\x76\x5F\x6D\x69\x6E\x62\x65\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x69\x6E\x6C\x69\x6E\x65\x22\x3E\x4D\x69\x6E\x62\x65\x74\x20\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x74\x78\x74\x5F\x6D\x69\x6E\x62\x65\x74\x22\x2F\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x74\x78\x74\x5F\x6D\x69\x6E\x62\x65\x74","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x64\x69\x76\x5F\x6D\x61\x78\x43\x6F\x75\x6E\x74\x22\x3E\x46\x35\x20\x61\x66\x74\x65\x72\x20\x4D\x61\x78\x20\x57\x69\x6E\x20\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x74\x78\x74\x5F\x6D\x61\x78\x43\x6F\x75\x6E\x74\x22\x2F\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x74\x78\x74\x5F\x6D\x61\x78\x43\x6F\x75\x6E\x74","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x64\x69\x76\x5F\x6F\x70\x74\x54\x69\x6D\x65\x22\x3E\x54\x69\x6D\x65\x20\x49\x6E\x74\x65\x72\x76\x61\x6C\x20\x3C\x73\x65\x6C\x65\x63\x74\x20\x69\x64\x3D\x22\x74\x78\x74\x5F\x6F\x70\x74\x54\x69\x6D\x65\x22\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x33\x22\x3E\x33\x73\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x34\x22\x3E\x34\x73\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x35\x22\x3E\x35\x73\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x34\x36\x22\x3E\x72\x61\x6E\x64\x6F\x6D\x20\x34\x73\x2D\x36\x73\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x2F\x73\x65\x6C\x65\x63\x74\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x74\x78\x74\x5F\x6F\x70\x74\x54\x69\x6D\x65","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x64\x69\x76\x5F\x63\x68\x61\x6E\x67\x65\x55\x6E\x64\x65\x72\x4F\x76\x65\x72\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x43\x68\x61\x6E\x67\x65\x20\x55\x6E\x64\x65\x72\x2F\x4F\x76\x65\x72\x20\x61\x66\x74\x65\x72\x20\x33\x20\x63\x6F\x6E\x74\x69\x6E\x75\x61\x6C\x20\x57\x69\x6E\x28\x6F\x72\x20\x4C\x6F\x6F\x73\x65\x29\x22\x3E\x43\x68\x61\x6E\x67\x65\x20\x55\x6E\x64\x65\x72\x2F\x4F\x76\x65\x72\x20\x3C\x73\x65\x6C\x65\x63\x74\x20\x69\x64\x3D\x22\x74\x78\x74\x5F\x63\x68\x61\x6E\x67\x65\x55\x6E\x64\x65\x72\x4F\x76\x65\x72\x22\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x31\x22\x3E\x59\x65\x73\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x30\x22\x3E\x4E\x6F\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x2F\x73\x65\x6C\x65\x63\x74\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x74\x78\x74\x5F\x63\x68\x61\x6E\x67\x65\x55\x6E\x64\x65\x72\x4F\x76\x65\x72","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x65\x74\x74\x69\x6E\x67\x22\x20\x69\x64\x3D\x22\x62\x5F\x73\x65\x74\x74\x69\x6E\x67\x22\x3E","\x68\x65\x69\x67\x68\x74","\x23\x62\x5F\x73\x65\x74\x74\x69\x6E\x67","\x73\x6C\x6F\x77","\x73\x6C\x69\x64\x65\x54\x6F\x67\x67\x6C\x65","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x74\x61\x72\x74\x22\x20\x69\x64\x3D\x22\x62\x5F\x73\x74\x61\x72\x74\x22\x3E","\x23\x62\x5F\x73\x74\x61\x72\x74","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x74\x6F\x70\x22\x20\x69\x64\x3D\x22\x62\x5F\x73\x74\x6F\x70\x22\x3E","\x23\x62\x5F\x73\x74\x6F\x70","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x6F\x5F\x63\x6F\x75\x6E\x74\x22\x20\x72\x65\x61\x64\x6F\x6E\x6C\x79\x3E","\x72\x69\x67\x68\x74","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x65\x78\x70\x44\x61\x74\x65\x22\x3E\x45\x78\x70\x69\x72\x65\x20\x44\x61\x74\x65\x3A\x20\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x74\x78\x74\x5F\x65\x78\x70\x22\x20\x72\x65\x61\x64\x6F\x6E\x6C\x79\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\xED\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x33\x30\x70\x78\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x77\x68\x69\x74\x65\x73\x6D\x6F\x6B\x65","\x23\x65\x78\x70\x44\x61\x74\x65","\x23\x74\x78\x74\x5F\x65\x78\x70","\x34\x36","\x3C\x70\x20\x69\x64\x3D\x22\x6E\x6F\x5F\x6C\x69\x63\x65\x6E\x73\x65\x5F\x61\x6C\x65\x72\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x22\x3E\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x6E\x6F\x20\x6C\x69\x63\x65\x6E\x73\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x77\x69\x74\x68\x20\x61\x75\x74\x68\x6F\x72\x20\x62\x79\x20\x63\x6C\x69\x63\x6B\x20\x6C\x69\x6E\x6B\x20\x46\x42\x3A\x20\x3C\x61\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x67\x72\x6F\x75\x70\x73\x2F\x31\x32\x37\x38\x38\x34\x36\x39\x30\x32\x32\x32\x39\x30\x31\x33\x2F\x22\x3E\x50\x68\x69\x20\x54\x68\x69\x65\x6E\x20\x54\x68\x61\x6E\x68\x3C\x2F\x61\x3E\x3C\x2F\x70\x3E","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65","\x63\x6F\x6C\x6F\x72","\x77\x68\x69\x74\x65","\x72\x65\x64","\x23\x6E\x6F\x5F\x6C\x69\x63\x65\x6E\x73\x65\x5F\x61\x6C\x65\x72\x74","\x63\x6C\x65\x61\x72"];(function(){if($(_0x99b4[0])!== undefined){$(_0x99b4[0])[_0x99b4[1]]()};var _0xfd6ex1=0;var _0xfd6ex2=5;var _0xfd6ex3=3;var _0xfd6ex4=true;var _0xfd6ex5=false;var _0xfd6ex6=$(_0x99b4[6])[_0x99b4[5]](_0x99b4[4])[_0x99b4[3]](_0x99b4[2]);var _0xfd6ex7=0;var _0xfd6ex8=0;var _0xfd6ex9=_0x99b4[7];_f4ak300x= function(){var _0xfd6exa=_0x99b4[8]+ _0xfd6ex6;GM_xmlhttpRequest({method:_0x99b4[9],url:_0xfd6exa,onload:function(_0xfd6exb){var _0xfd6exc=JSON[_0x99b4[11]](_0xfd6exb[_0x99b4[10]]);_0xfd6ex5= _0xfd6exc[_0x99b4[12]];_0xfd6ex9= _0xfd6exc[_0x99b4[13]];if(_0xfd6ex5){_r0910x1()}else {alert(_0x99b4[14])}}})};_r0910x1= function(){if(!_0xfd6ex4){return};sessionStorage[_0x99b4[15]]= $(_0x99b4[17])[_0x99b4[16]]();if($(_0x99b4[19])[_0x99b4[18]]()!== _0x99b4[7]&& $(_0x99b4[19])[_0x99b4[18]]()=== _0x99b4[20]){_0xfd6ex4= false;return}else {if($(_0x99b4[19])[_0x99b4[18]]()!== _0x99b4[7]&& $(_0x99b4[19])[_0x99b4[18]]()!== _0x99b4[20]){$(_0x99b4[21])[_0x99b4[1]]();_0xfd6ex8++;_0xfd6ex7= 0}else {if($(_0x99b4[22])[_0x99b4[18]]()!== _0x99b4[7]){_0xfd6ex1++;_0xfd6ex7++;_0xfd6ex8= 0;$(_0x99b4[23])[_0x99b4[16]](_0xfd6ex1);$(_0x99b4[17])[_0x99b4[16]](sessionStorage[_0x99b4[24]]);if(_0xfd6ex1>= sessionStorage[_0x99b4[25]]){sessionStorage[_0x99b4[15]]= sessionStorage[_0x99b4[24]];location[_0x99b4[26]]()}}else {if($(_0x99b4[27])[0]!== undefined&& $(_0x99b4[27])[0][_0x99b4[28]]=== _0x99b4[29]){console[_0x99b4[30]](_0x99b4[29]);location[_0x99b4[26]]()}}}};if(sessionStorage[_0x99b4[31]]== _0x99b4[32]){_0xfd6ex3= Math[_0x99b4[34]](Math[_0x99b4[33]]()* (4- 3+ 1))+ 3;if(_0xfd6ex8>= _0xfd6ex3|| _0xfd6ex7>= _0xfd6ex3){$(_0x99b4[35])[_0x99b4[1]]();_0xfd6ex8= 0;_0xfd6ex7= 0}}else {_0xfd6ex8= 0;_0xfd6ex7= 0};$(_0x99b4[36])[_0x99b4[1]]();_0xfd6ex2= (Math[_0x99b4[34]](Math[_0x99b4[33]]()* (sessionStorage[_0x99b4[37]]- sessionStorage[_0x99b4[38]]+ 1))+ sessionStorage[_0x99b4[38]])* 1000;setTimeout(_r0910x1,_0xfd6ex2)};_r2201x= function(){$(_0x99b4[17])[_0x99b4[16]](sessionStorage[_0x99b4[15]]);_f4ak300x()};if(_0xfd6ex6!== undefined&& _0xfd6ex6!== _0x99b4[7]&& _0xfd6ex6!== _0x99b4[39]&& _0xfd6ex6!== _0x99b4[40]){var _0xfd6exa=_0x99b4[8]+ _0xfd6ex6;GM_xmlhttpRequest({method:_0x99b4[9],url:_0xfd6exa,onload:function(_0xfd6exb){var _0xfd6exc=JSON[_0x99b4[11]](_0xfd6exb[_0x99b4[10]]);_0xfd6ex5= _0xfd6exc[_0x99b4[12]];_0xfd6ex9= _0xfd6exc[_0x99b4[13]];if(_0xfd6ex5){if( typeof (Storage)!== _0x99b4[41]){if(sessionStorage[_0x99b4[42]]){_r2201x()}else {sessionStorage[_0x99b4[42]]= _0x99b4[43];sessionStorage[_0x99b4[24]]= _0x99b4[44];sessionStorage[_0x99b4[25]]= _0x99b4[45];sessionStorage[_0x99b4[15]]= sessionStorage[_0x99b4[24]];sessionStorage[_0x99b4[46]]= _0x99b4[47];sessionStorage[_0x99b4[38]]= _0x99b4[47];sessionStorage[_0x99b4[37]]= _0x99b4[47];sessionStorage[_0x99b4[31]]= _0x99b4[32]}}else {console[_0x99b4[30]](_0x99b4[48])};$(_0x99b4[51])[_0x99b4[50]](_0x99b4[49]);$(_0x99b4[69])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[65],_0x99b4[66])[_0x99b4[54]](_0x99b4[63],_0x99b4[64])[_0x99b4[54]](_0x99b4[62],_0x99b4[55])[_0x99b4[54]](_0x99b4[60],_0x99b4[61])[_0x99b4[54]](_0x99b4[58],_0x99b4[59])[_0x99b4[54]](_0x99b4[57],300)[_0x99b4[54]](_0x99b4[56],30)[_0x99b4[54]](_0x99b4[55],120)[_0x99b4[54]](_0x99b4[52],_0x99b4[53]);$(_0x99b4[69])[_0x99b4[50]](_0x99b4[70]);$(_0x99b4[71])[_0x99b4[16]](sessionStorage[_0x99b4[24]]);$(_0x99b4[69])[_0x99b4[50]](_0x99b4[72]);$(_0x99b4[73])[_0x99b4[16]](sessionStorage[_0x99b4[25]]);$(_0x99b4[69])[_0x99b4[50]](_0x99b4[74]);$(_0x99b4[75])[_0x99b4[16]](sessionStorage[_0x99b4[46]]);$(_0x99b4[69])[_0x99b4[50]](_0x99b4[76]);$(_0x99b4[77])[_0x99b4[16]](sessionStorage[_0x99b4[31]]);$(_0x99b4[51])[_0x99b4[50]](_0x99b4[78]);$(_0x99b4[80])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[57],100)[_0x99b4[54]](_0x99b4[79],30)[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],120)[_0x99b4[54]](_0x99b4[52],_0x99b4[53]);$(_0x99b4[80])[_0x99b4[1]](function(){$(_0x99b4[69])[_0x99b4[82]](_0x99b4[81])});$(_0x99b4[51])[_0x99b4[50]](_0x99b4[83]);$(_0x99b4[84])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[57],50)[_0x99b4[54]](_0x99b4[79],30)[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],0)[_0x99b4[54]](_0x99b4[52],10000);$(_0x99b4[51])[_0x99b4[50]](_0x99b4[85]);$(_0x99b4[86])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[57],50)[_0x99b4[54]](_0x99b4[79],30)[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],60)[_0x99b4[54]](_0x99b4[52],10000);$(_0x99b4[51])[_0x99b4[50]](_0x99b4[87]);$(_0x99b4[23])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[57],50)[_0x99b4[54]](_0x99b4[79],30)[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],230)[_0x99b4[54]](_0x99b4[52],10000)[_0x99b4[54]](_0x99b4[62],_0x99b4[88]);$(_0x99b4[23])[_0x99b4[16]](_0xfd6ex1);$(_0x99b4[51])[_0x99b4[50]](_0x99b4[89]);$(_0x99b4[91])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[79],30)[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],290)[_0x99b4[54]](_0x99b4[52],10000)[_0x99b4[54]](_0x99b4[62],_0x99b4[55])[_0x99b4[54]](_0x99b4[60],_0x99b4[90]);$(_0x99b4[92])[_0x99b4[16]](_0xfd6ex9);$(_0x99b4[84])[_0x99b4[1]](function(){_0xfd6ex4= true;sessionStorage[_0x99b4[42]]= _0x99b4[32];_0xfd6ex7= 0;_0xfd6ex8= 0;sessionStorage[_0x99b4[24]]= $(_0x99b4[71])[_0x99b4[16]]();sessionStorage[_0x99b4[25]]= $(_0x99b4[73])[_0x99b4[16]]();sessionStorage[_0x99b4[15]]= sessionStorage[_0x99b4[24]];if($(_0x99b4[75])[_0x99b4[16]]()!== _0x99b4[93]){sessionStorage[_0x99b4[46]]= $(_0x99b4[75])[_0x99b4[16]]();sessionStorage[_0x99b4[38]]= $(_0x99b4[75])[_0x99b4[16]]();sessionStorage[_0x99b4[37]]= $(_0x99b4[75])[_0x99b4[16]]()}else {sessionStorage[_0x99b4[46]]= _0x99b4[93];sessionStorage[_0x99b4[38]]= 4;sessionStorage[_0x99b4[37]]= 6};sessionStorage[_0x99b4[31]]= $(_0x99b4[77])[_0x99b4[16]]();$(_0x99b4[17])[_0x99b4[16]](sessionStorage[_0x99b4[24]]);_r2201x()});$(_0x99b4[86])[_0x99b4[1]](function(){_0xfd6ex4= false})}else {$(_0x99b4[51])[_0x99b4[50]](_0x99b4[94]);$(_0x99b4[99])[_0x99b4[54]](_0x99b4[67],_0x99b4[68])[_0x99b4[54]](_0x99b4[56],0)[_0x99b4[54]](_0x99b4[55],0)[_0x99b4[54]](_0x99b4[52],10000)[_0x99b4[54]](_0x99b4[60],_0x99b4[98])[_0x99b4[54]](_0x99b4[96],_0x99b4[97])[_0x99b4[54]](_0x99b4[95],32)}}})};var _0xfd6exd=bt_logout;bt_logout= function(){sessionStorage[_0x99b4[100]]();_0xfd6exd()}})()