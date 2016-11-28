(function(){'use strict';var aa=this;function l(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b};function m(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function p(){}var ba=0;function r(a){this.message="Assertion failed. See /doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}m(r,Error);var t="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||!a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function ca(a){for(var b in a)delete a[b]};function da(a){function b(b){var d=a.listener,e=a.H||a.target;a.J&&u(a);return d.call(e,b)}return a.I=b}function ea(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.H===c)return d&&(e.deleteIndex=f),e}function v(a,b){return(a=a.A)?a[b]:void 0}function w(a,b,c,d){var e,f=a.A;f||(f=a.A={});e=f;(f=e[b])||(f=e[b]=[]);(e=ea(f,c,d,!1))?e.J=!1:(e={H:d,J:!1,listener:c,target:a,type:b},a.addEventListener(b,da(e)),f.push(e));return e}
function fa(a,b,c,d){(a=v(a,b))&&(c=ea(a,c,d,!0))&&u(c)}function u(a){if(a&&a.target){a.target.removeEventListener(a.type,a.I);var b=v(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);if(0===b.length){var b=a.target,c=a.type,d=v(b,c);if(d){for(var e=0,f=d.length;e<f;++e)b.removeEventListener(c,d[e].I),ca(d[e]);d.length=0;if(d=b.A)delete d[c],0===Object.keys(d).length&&delete b.A}}}ca(a)}};function ga(){};function x(a){this.type=a;this.target=null}x.prototype.preventDefault=x.prototype.stopPropagation=function(){this.M=!0};function y(){this.v={};this.h={};this.u={}}m(y,ga);y.prototype.addEventListener=function(a,b){var c=this.u[a];c||(c=this.u[a]=[]);-1===c.indexOf(b)&&c.push(b)};function z(a,b){var c="string"===typeof b?new x(b):b;b=c.type;c.target=a;var d=a.u[b];if(d){b in a.h||(a.h[b]=0,a.v[b]=0);++a.h[b];for(var e=0,f=d.length;e<f&&!1!==d[e].call(a,c)&&!c.M;++e);--a.h[b];if(0===a.h[b]){c=a.v[b];for(delete a.v[b];c--;)a.removeEventListener(b,p);delete a.h[b]}}}
y.prototype.removeEventListener=function(a,b){var c=this.u[a];c&&(b=c.indexOf(b),a in this.v?(c[b]=p,++this.v[a]):(c.splice(b,1),0===c.length&&delete this.u[a]))};function A(){y.call(this);this.B=0}m(A,y);A.prototype.b=function(){++this.B;z(this,"change")};A.prototype.on=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=w(this,a[f],b,c);return e}return w(this,a,b,c)};function ha(a,b,c){x.call(this,a);this.key=b;this.oldValue=c}m(ha,x);function B(a){A.call(this);this.L||(this.L=++ba);this.j={};void 0!==a&&ia(this,a)}m(B,A);var ja={};function D(a){return ja.hasOwnProperty(a)?ja[a]:ja[a]="change:"+a}B.prototype.get=function(a){var b;this.j.hasOwnProperty(a)&&(b=this.j[a]);return b};B.prototype.set=function(a,b,c){c?this.j[a]=b:(c=this.j[a],this.j[a]=b,c!==b&&(b=D(a),z(this,new ha(b,a,c)),z(this,new ha("propertychange",a,c))))};
function ia(a,b){for(var c in b)a.set(c,b[c],void 0)};function E(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function ka(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]};var la=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function ma(a){this.radius=a}function na(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*oa.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
ma.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var oa=new ma(6370997);var F={};F.degrees=2*Math.PI*oa.radius/360;F.ft=.3048;F.m=1;F["us-ft"]=1200/3937;
function G(a){this.a=a.code;this.b=a.units;this.c=void 0!==a.extent?a.extent:null;this.g=void 0!==a.w?a.w:this.h;this.f=a.K;var b=pa,c=a.code,d=qa||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.K&&(this.f=e.to_meter);void 0===a.units&&(this.b=e.units);var f,g;for(f in b)if(a=d.defs(f),void 0!==a)if(b=H(f),a===e)ra([b,this]);else{g=d(f,c);a=g.forward;g=g.inverse;var b=H(b),h=H(this);I(b,h,sa(a));I(h,b,sa(g))}}}}G.prototype.l=function(){return this.c};
G.prototype.h=function(a,b){if("degrees"==this.b)return a;var c=ta(this,H("EPSG:4326"));a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=c(a,a,2);c=(na(a.slice(0,2),a.slice(2,4))+na(a.slice(4,6),a.slice(6,8)))/2;a=this.f||F[this.b];void 0!==a&&(c/=a);return c};G.prototype.w=function(a,b){return this.g(a,b)};var pa={},J={},qa=null;function ra(a){ua(a);a.forEach(function(b){a.forEach(function(a){b!==a&&I(b,a,va)})})}function wa(a){pa[a.a]=a;I(a,a,va)}
function ua(a){var b=[];a.forEach(function(a){b.push(wa(a))})}function I(a,b,c){a=a.a;b=b.a;a in J||(J[a]={});J[a][b]=c}function sa(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function H(a){var b;if(a instanceof G)b=a;else if("string"===typeof a){b=pa[a];var c=qa||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new G({code:a}),wa(b))}return b||null}function xa(a,b){a=H(a);b=H(b);return ta(a,b)}function ta(a,b){a=a.a;b=b.a;var c;a in J&&b in J[a]&&(c=J[a][b]);void 0===c&&(c=ya);return c}function ya(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}
function va(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};function K(){B.call(this);this.F=[Infinity,Infinity,-Infinity,-Infinity];this.G=-1}m(K,B);K.prototype.l=function(a){this.G!=this.B&&(this.F=this.D(this.F),this.G=this.B);var b=this.F;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};K.prototype.transform=function(a,b){this.C(xa(a,b));return this};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();function L(a){B.call(this);this.a="geometry";this.f=this.c=null;w(this,D(this.a),this.g,this);void 0!==a&&(a instanceof K||!a?this.set(this.a,a):ia(this,a))}m(L,B);L.prototype.clone=function(){var a=new L(t({},this.j));za(a,this.a);var b=this.get(this.a);b&&(b=b.clone(),a.set(a.a,b));(b=this.c)&&a.setStyle(b);return a};L.prototype.l=function(){this.b()};L.prototype.g=function(){this.f&&(u(this.f),this.f=null);var a=this.get(this.a);a&&(this.f=w(a,"change",this.l,this));this.b()};
L.prototype.setStyle=function(a){if((this.c=a)&&"function"!==typeof a&&!Array.isArray(a))throw new r(41);this.b()};function za(a,b){fa(a,D(a.a),a.g,a);a.a=b;w(a,D(a.a),a.g,a);a.g()};function Aa(){this.a=this.s=null};function M(){K.call(this);this.layout="XY";this.f=2;this.a=null}m(M,K);function Ba(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}M.prototype.D=function(a){var b=this.a,c=this.a.length,d=this.f;a=E(Infinity,Infinity,-Infinity,-Infinity,a);for(var e=0;e<c;e+=d){var f=a,g=b[e],h=b[e+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a};function N(a,b,c){a.f=Ba(b);a.layout=b;a.a=c}
function O(a,b,c,d){if(b)c=Ba(b);else{for(b=0;b<d;++b){if(0===c.length){a.layout="XY";a.f=2;return}c=c[0]}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.layout=b;a.f=c}M.prototype.C=function(a){this.a&&(a(this.a,this.a,this.f),this.b())};
M.prototype.rotate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.f,f=c?c:[],g=Math.cos(a);a=Math.sin(a);var h=b[0];b=b[1];for(var n=0,q=0;q<d;q+=e){var k=c[q]-h,C=c[q+1]-b;f[n++]=h+k*g-C*a;f[n++]=b+k*a+C*g;for(k=q+2;k<q+e;++k)f[n++]=c[k]}c&&f.length!=n&&(f.length=n);this.b()}};
M.prototype.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=ka(this.l()));if(c=this.a){b=c.length;for(var f=this.f,g=c?c:[],h=e[0],e=e[1],n=0,q=0;q<b;q+=f){var k=c[q]-h,C=c[q+1]-e;g[n++]=h+a*k;g[n++]=e+d*C;for(k=q+2;k<q+f;++k)g[n++]=c[k]}c&&g.length!=n&&(g.length=n);this.b()}};M.prototype.translate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.f,f=c?c:[],g=0,h,n;for(h=0;h<d;h+=e)for(f[g++]=c[h]+a,f[g++]=c[h+1]+b,n=h+2;n<h+e;++n)f[g++]=c[n];c&&f.length!=g&&(f.length=g);this.b()}};function Ca(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function Da(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Ca(a,b,c[g],d),e[f++]=b;e.length=f;return e};function P(a,b){M.call(this);this.g(a,b)}m(P,M);P.prototype.clone=function(){var a=new P(null);N(a,this.layout,this.a.slice());a.b();return a};P.prototype.g=function(a,b){a?(O(this,b,a,1),this.a||(this.a=[]),this.a.length=Ca(this.a,0,a,this.f)):N(this,"XY",null);this.b()};navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function Q(a,b){M.call(this);this.g(a,b)}m(Q,M);Q.prototype.clone=function(){var a=new Q(null);N(a,this.layout,this.a.slice());a.b();return a};Q.prototype.D=function(a){var b=this.a,c=b[0],b=b[1];return E(c,b,c,b,a)};Q.prototype.g=function(a,b){if(a){O(this,b,a,0);this.a||(this.a=[]);var c=b=this.a,d=0,e,f;e=0;for(f=a.length;e<f;++e)c[d++]=a[e];b.length=d}else N(this,"XY",null);this.b()};function R(a,b){M.call(this);this.c=[];this.g(a,b)}m(R,M);R.prototype.clone=function(){var a=new R(null),b=this.c.slice();N(a,this.layout,this.a.slice());a.c=b;a.b();return a};R.prototype.g=function(a,b){a?(O(this,b,a,2),this.a||(this.a=[]),a=Da(this.a,0,a,this.f,this.c),this.a.length=0===a.length?0:a[a.length-1]):(a=this.c,N(this,"XY",null),this.c=a);this.b()};function Ea(a){G.call(this,{code:a,units:"m",extent:Fa,global:!0,O:Ga})}m(Ea,G);Ea.prototype.w=function(a,b){return a/la(b[1]/6378137)};var S=6378137*Math.PI,Fa=[-S,-S,S,S],Ga=[-180,-85,180,85],Ha="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new Ea(a)});
function Ia(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=S*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>S?f=S:f<-S&&(f=-S);b[e+1]=f}return b}function Ja(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/S,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var Ka=new ma(6378137);function T(a,b){G.call(this,{code:a,units:"degrees",extent:La,P:b,global:!0,K:Ma,O:La})}m(T,G);T.prototype.w=function(a){return a};var La=[-180,-90,180,90],Ma=Math.PI*Ka.radius/180,Na=[new T("CRS:84"),new T("EPSG:4326","neu"),new T("urn:ogc:def:crs:EPSG::4326","neu"),new T("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new T("urn:ogc:def:crs:OGC:1.3:CRS84"),new T("urn:ogc:def:crs:OGC:2:84"),new T("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new T("urn:x-ogc:def:crs:EPSG:4326","neu")];ra(Ha);ra(Na);Na.forEach(function(a){Ha.forEach(function(b){I(a,b,Ia);I(b,a,Ja)})});var Oa=angular.module("ngeoSearchDirective",[]);
function Pa(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.ngeoSearch),e=a.$eval(c.ngeoSearchDatasets).slice();e.unshift(d);b.typeahead.apply(b,e);c=a.$eval(c.ngeoSearchListeners);var f=Pa.a(c);b.on("typeahead:open",function(){a.$apply(function(){f.open()})});b.on("typeahead:close",function(){a.$apply(function(){f.close()})});b.on("typeahead:cursorchange",function(b,c,d){a.$apply(function(){f.cursorchange(b,c,d)})});b.on("typeahead:select",function(b,c,d){a.$apply(function(){f.select(b,
c,d)})});b.on("typeahead:autocomplete",function(b,c,d){a.$apply(function(){f.autocomplete(b,c,d)})})}}}Pa.a=function(a){var b;a?b={open:void 0!==a.open?a.open:p,close:void 0!==a.close?a.close:p,cursorchange:void 0!==a.cursorchange?a.cursorchange:p,select:void 0!==a.select?a.select:p,autocomplete:void 0!==a.autocomplete?a.autocomplete:p}:b={open:p,close:p,cursorchange:p,select:p,autocomplete:p};return b};Oa.directive("ngeoSearch",Pa);function Qa(){Aa.call(this)}m(Qa,Aa);function Ra(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null};function U(a){K.call(this);this.a=a?a:null;Sa(this)}m(U,K);function Sa(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)w(a.a[b],"change",a.b,a)}U.prototype.clone=function(){var a=new U(null),b=this.a,c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());if(a.a)for(b=0,d=a.a.length;b<d;++b)fa(a.a[b],"change",a.b,a);a.a=c;Sa(a);a.b();return a};
U.prototype.D=function(a){E(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c){var e=a,f=b[c].l();f[0]<e[0]&&(e[0]=f[0]);f[2]>e[2]&&(e[2]=f[2]);f[1]<e[1]&&(e[1]=f[1]);f[3]>e[3]&&(e[3]=f[3])}return a};U.prototype.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.b()};U.prototype.scale=function(a,b,c){c||(c=ka(this.l()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.b()};
U.prototype.C=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].C(a);this.b()};U.prototype.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.b()};function V(a,b){M.call(this);this.c=[];this.g(a,b)}m(V,M);V.prototype.clone=function(){var a=new V(null),b=this.c.slice();N(a,this.layout,this.a.slice());a.c=b;a.b();return a};V.prototype.g=function(a,b){a?(O(this,b,a,2),this.a||(this.a=[]),a=Da(this.a,0,a,this.f,this.c),this.a.length=0===a.length?0:a[a.length-1]):(a=this.c,N(this,"XY",null),this.c=a);this.b()};function W(a,b){M.call(this);this.g(a,b)}m(W,M);W.prototype.clone=function(){var a=new W(null);N(a,this.layout,this.a.slice());a.b();return a};W.prototype.g=function(a,b){a?(O(this,b,a,1),this.a||(this.a=[]),this.a.length=Ca(this.a,0,a,this.f)):N(this,"XY",null);this.b()};function X(a,b){M.call(this);this.c=[];this.g(a,b)}m(X,M);X.prototype.clone=function(){for(var a=new X(null),b=this.c.length,c=Array(b),d=0;d<b;++d)c[d]=this.c[d].slice();N(a,this.layout,this.a.slice());a.c=c;a.b();return a};
X.prototype.g=function(a,b){if(a){O(this,b,a,3);this.a||(this.a=[]);b=this.a;var c=this.f,d=this.c,e=0,d=d?d:[],f=0,g,h;g=0;for(h=a.length;g<h;++g)e=Da(b,e,a[g],c,d[f]),d[f++]=e,e=e[e.length-1];d.length=f;0===d.length?this.a.length=0:(a=d[d.length-1],this.a.length=0===a.length?0:a[a.length-1])}else a=this.c,N(this,"XY",null),this.c=a;this.b()};function Ta(a){a=a?a:{};Aa.call(this);this.s=H(a.s?a.s:"EPSG:4326");a.i&&(this.a=H(a.i));this.b=a.geometryName}m(Ta,Qa);
function Ua(a,b){if(a){a=(0,Va[a.type])(a);var c=b?H(b.i):null;b=b?H(b.o):null;var d;if(d=c&&b)c===b?d=!0:(d=c.b===b.b,d=c.a===b.a?d:ta(c,b)===va&&d),d=!d;d&&(a instanceof K?a=a.transform(b,c):(c=xa(b,c),a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]],c(a,a,2),b=[a[0],a[2],a[4],a[6]],d=[a[1],a[3],a[5],a[7]],a=Math.min.apply(null,b),c=Math.min.apply(null,d),b=Math.max.apply(null,b),d=Math.max.apply(null,d),a=E(a,c,b,d,void 0)))}else a=null;return a}
var Va={Point:function(a){return new Q(a.coordinates)},LineString:function(a){return new P(a.coordinates)},Polygon:function(a){return new R(a.coordinates)},MultiPoint:function(a){return new W(a.coordinates)},MultiLineString:function(a){return new V(a.coordinates)},MultiPolygon:function(a){return new X(a.coordinates)},GeometryCollection:function(a,b){a=a.geometries.map(function(a){return Ua(a,b)});return new U(a)}};
function Wa(a,b,c){b="Feature"===b.type?b:{type:"Feature",geometry:b};c=Ua(b.geometry,c);var d=new L;a.b&&za(d,a.b);d.set(d.a,c);void 0!==b.id&&d.b();b.properties&&ia(d,b.properties);return d};var Xa=angular.module("ngeoSearchService",[]);
Xa.value("creategeojsonbloodhound",function(a,b,c,d,e,f){var g=new Ta;a={remote:{url:a,prepare:function(a,b){b.url=b.url.replace("%QUERY",a);return b},transform:function(a){void 0!==b&&(a={type:"FeatureCollection",features:a.features.filter(b)});var e=a,f={i:c,o:d};a=Ra(e);var k;if(f){if(f.o)k=f.o;else if(k=Ra(e).crs)if("name"==k.type)k=H(k.properties.name);else if("EPSG"==k.type)k=H("EPSG:"+k.properties.code);else throw new r(36);else k=g.s;k={o:k,i:f.i}}f=t({o:g.s,i:g.a},k);if("FeatureCollection"===
a.type){k=[];a=a.features;var C,e=0;for(C=a.length;e<C;++e)k.push(Wa(g,a[e],f))}else k=[Wa(g,a,f)];return k}},datumTokenizer:p,queryTokenizer:Bloodhound.tokenizers.whitespace};e=t({},e||{});f=t({},f||{});e.remote&&(t(f,e.remote),delete e.remote);t(a,e);t(a.remote,f);return new Bloodhound(a)});var Ya=angular.module("ngeoSearchModule",[Oa.name,Xa.name]);var Y=angular.module("ngeo",[Ya.name,"gettext","ui.date","floatThead"]);l("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});l("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});Y.directive("ngeoMap",function(){return{restrict:"A",link:function(a,b,c){a.$eval(c.ngeoMap).a(b[0])}}});Y.value("ngeoColorpickerTemplateUrl",function(a,b){a=b.ngeoColorpickerTemplateurl;return void 0!==a?a:"ngeo/colorpicker.html"});function Za(a){return{restrict:"A",scope:{colors:"<?ngeoColorpicker",color:"=?ngeoColorpickerColor"},controller:"NgeoColorpickerController",controllerAs:"ctrl",bindToController:!0,templateUrl:a}}Za.$inject=["ngeoColorpickerTemplateUrl"];Y.directive("ngeoColorpicker",Za);
var $a=["#F4EB37 #CDDC39 #62AF44 #009D57 #0BA9CC #4186F0 #3F5BA9 #7C3592 #A61B4A #DB4436 #F8971B #F4B400 #795046".split(" "),"#F9F7A6 #E6EEA3 #B7DBAB #7CCFA9 #93D7E8 #9FC3FF #A7B5D7 #C6A4CF #D698AD #EE9C96 #FAD199 #FFDD5E #B29189".split(" "),["#ffffff","#CCCCCC","#777","#000000"]];function Z(){this.colors=$a}l("ngeo.ColorpickerController",Z);Z.$inject=["$scope","$element","$attrs"];Z.prototype.N=function(a){this.color=a};Z.prototype.setColor=Z.prototype.N;
Y.controller("NgeoColorpickerController",Z);var ab=angular.module("app",["ngeo"]);ab.directive("appColorpicker",function(){return{restrict:"E",scope:!0,template:'<div ngeo-colorpicker="ctrl.colors" ngeo-colorpicker-color="mainCtrl.color"></div>',controllerAs:"ctrl",bindToController:!0,controller:"AppColorpickerController"}});ab.controller("AppColorpickerController",function(){this.colors=["red yellow green lightgreen lightblue orange purple".split(" "),["#ffffff","#f7f7f7","#c3c3c3","#000000"]]});function bb(){this.color="red"}bb.$inject=["$scope"];
ab.controller("MainController",bb);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];Y.run(a)})();}).call(window);
//# sourceMappingURL=colorpicker.js.map
