(function(){'use strict';var aa=this;function ba(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}function ca(a,b){function c(){}c.prototype=b.prototype;a.fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ea=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function h(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function m(){}var da=0;function n(a){this.message="Assertion failed. See /doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}h(n,Error);var p="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||!a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function ea(a){for(var b in a)delete a[b]};function fa(a){function b(b){var d=a.listener,e=a.O||a.target;a.R&&r(a);return d.call(e,b)}return a.P=b}function ga(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.O===c)return d&&(e.deleteIndex=f),e}function u(a,b){return(a=a.F)?a[b]:void 0}function v(a,b,c,d){var e,f=a.F;f||(f=a.F={});e=f;(f=e[b])||(f=e[b]=[]);(e=ga(f,c,d,!1))?e.R=!1:(e={O:d,R:!1,listener:c,target:a,type:b},a.addEventListener(b,fa(e)),f.push(e));return e}
function ha(a,b,c,d){(a=u(a,b))&&(c=ga(a,c,d,!0))&&r(c)}function r(a){if(a&&a.target){a.target.removeEventListener(a.type,a.P);var b=u(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);if(0===b.length){var b=a.target,c=a.type,d=u(b,c);if(d){for(var e=0,f=d.length;e<f;++e)b.removeEventListener(c,d[e].P),ea(d[e]);d.length=0;if(d=b.F)delete d[c],0===Object.keys(d).length&&delete b.F}}}ea(a)}};function ia(){};function w(a){this.type=a;this.target=null}w.prototype.preventDefault=w.prototype.stopPropagation=function(){this.aa=!0};function x(){this.v={};this.h={};this.u={}}h(x,ia);x.prototype.addEventListener=function(a,b){var c=this.u[a];c||(c=this.u[a]=[]);-1===c.indexOf(b)&&c.push(b)};function ja(a,b){var c="string"===typeof b?new w(b):b;b=c.type;c.target=a;var d=a.u[b];if(d){b in a.h||(a.h[b]=0,a.v[b]=0);++a.h[b];for(var e=0,f=d.length;e<f&&!1!==d[e].call(a,c)&&!c.aa;++e);--a.h[b];if(0===a.h[b]){c=a.v[b];for(delete a.v[b];c--;)a.removeEventListener(b,m);delete a.h[b]}}}
x.prototype.removeEventListener=function(a,b){var c=this.u[a];c&&(b=c.indexOf(b),a in this.v?(c[b]=m,++this.v[a]):(c.splice(b,1),0===c.length&&delete this.u[a]))};function y(){x.call(this);this.I=0}h(y,x);y.prototype.b=function(){++this.I;ja(this,"change")};y.prototype.on=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=v(this,a[f],b,c);return e}return v(this,a,b,c)};function ka(a,b,c){w.call(this,a);this.key=b;this.oldValue=c}h(ka,w);function z(a){y.call(this);this.U||(this.U=++da);this.j={};void 0!==a&&la(this,a)}h(z,y);var ma={};function A(a){return ma.hasOwnProperty(a)?ma[a]:ma[a]="change:"+a}z.prototype.get=function(a){var b;this.j.hasOwnProperty(a)&&(b=this.j[a]);return b};z.prototype.set=function(a,b,c){c?this.j[a]=b:(c=this.j[a],this.j[a]=b,c!==b&&(b=A(a),ja(this,new ka(b,a,c)),ja(this,new ka("propertychange",a,c))))};
function la(a,b){for(var c in b)a.set(c,b[c],void 0)};function B(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function na(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]};var oa=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function pa(a){this.radius=a}function qa(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*ra.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
pa.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var ra=new pa(6370997);var C={};C.degrees=2*Math.PI*ra.radius/360;C.ft=.3048;C.m=1;C["us-ft"]=1200/3937;
function D(a){this.a=a.code;this.b=a.units;this.f=void 0!==a.extent?a.extent:null;this.g=void 0!==a.D?a.D:this.h;this.c=a.S;var b=sa,c=a.code,d=ta||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.S&&(this.c=e.to_meter);void 0===a.units&&(this.b=e.units);var f,g;for(f in b)if(a=d.defs(f),void 0!==a)if(b=F(f),a===e)ua([b,this]);else{g=d(f,c);a=g.forward;g=g.inverse;var b=F(b),k=F(this);G(b,k,va(a));G(k,b,va(g))}}}}D.prototype.l=function(){return this.f};
D.prototype.h=function(a,b){if("degrees"==this.b)return a;var c=wa(this,F("EPSG:4326"));a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=c(a,a,2);c=(qa(a.slice(0,2),a.slice(2,4))+qa(a.slice(4,6),a.slice(6,8)))/2;a=this.c||C[this.b];void 0!==a&&(c/=a);return c};D.prototype.D=function(a,b){return this.g(a,b)};var sa={},H={},ta=null;function ua(a){xa(a);a.forEach(function(b){a.forEach(function(a){b!==a&&G(b,a,ya)})})}function za(a){sa[a.a]=a;G(a,a,ya)}
function xa(a){var b=[];a.forEach(function(a){b.push(za(a))})}function G(a,b,c){a=a.a;b=b.a;a in H||(H[a]={});H[a][b]=c}function va(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function F(a){var b;if(a instanceof D)b=a;else if("string"===typeof a){b=sa[a];var c=ta||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new D({code:a}),za(b))}return b||null}function Aa(a,b){a=F(a);b=F(b);return wa(a,b)}function wa(a,b){a=a.a;b=b.a;var c;a in H&&b in H[a]&&(c=H[a][b]);void 0===c&&(c=Ba);return c}function Ba(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}
function ya(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};function I(){z.call(this);this.M=[Infinity,Infinity,-Infinity,-Infinity];this.N=-1}h(I,z);I.prototype.l=function(a){this.N!=this.I&&(this.M=this.L(this.M),this.N=this.I);var b=this.M;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};I.prototype.transform=function(a,b){this.K(Aa(a,b));return this};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();function J(a){z.call(this);this.a="geometry";this.c=this.f=null;v(this,A(this.a),this.g,this);void 0!==a&&(a instanceof I||!a?this.set(this.a,a):la(this,a))}h(J,z);J.prototype.clone=function(){var a=new J(p({},this.j));Ca(a,this.a);var b=this.get(this.a);b&&(b=b.clone(),a.set(a.a,b));(b=this.f)&&a.setStyle(b);return a};J.prototype.l=function(){this.b()};J.prototype.g=function(){this.c&&(r(this.c),this.c=null);var a=this.get(this.a);a&&(this.c=v(a,"change",this.l,this));this.b()};
J.prototype.setStyle=function(a){if((this.f=a)&&"function"!==typeof a&&!Array.isArray(a))throw new n(41);this.b()};function Ca(a,b){ha(a,A(a.a),a.g,a);a.a=b;v(a,A(a.a),a.g,a);a.g()};function Da(){this.a=this.s=null};function K(){I.call(this);this.layout="XY";this.c=2;this.a=null}h(K,I);function Ea(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}K.prototype.L=function(a){var b=this.a,c=this.a.length,d=this.c;a=B(Infinity,Infinity,-Infinity,-Infinity,a);for(var e=0;e<c;e+=d){var f=a,g=b[e],k=b[e+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],k);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],k)}return a};function L(a,b,c){a.c=Ea(b);a.layout=b;a.a=c}
function M(a,b,c,d){if(b)c=Ea(b);else{for(b=0;b<d;++b){if(0===c.length){a.layout="XY";a.c=2;return}c=c[0]}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.layout=b;a.c=c}K.prototype.K=function(a){this.a&&(a(this.a,this.a,this.c),this.b())};
K.prototype.rotate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=Math.cos(a);a=Math.sin(a);var k=b[0];b=b[1];for(var q=0,t=0;t<d;t+=e){var l=c[t]-k,E=c[t+1]-b;f[q++]=k+l*g-E*a;f[q++]=b+l*a+E*g;for(l=t+2;l<t+e;++l)f[q++]=c[l]}c&&f.length!=q&&(f.length=q);this.b()}};
K.prototype.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=na(this.l()));if(c=this.a){b=c.length;for(var f=this.c,g=c?c:[],k=e[0],e=e[1],q=0,t=0;t<b;t+=f){var l=c[t]-k,E=c[t+1]-e;g[q++]=k+a*l;g[q++]=e+d*E;for(l=t+2;l<t+f;++l)g[q++]=c[l]}c&&g.length!=q&&(g.length=q);this.b()}};K.prototype.translate=function(a,b){var c=this.a;if(c){var d=c.length,e=this.c,f=c?c:[],g=0,k,q;for(k=0;k<d;k+=e)for(f[g++]=c[k]+a,f[g++]=c[k+1]+b,q=k+2;q<k+e;++q)f[g++]=c[q];c&&f.length!=g&&(f.length=g);this.b()}};function Fa(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],k;for(k=0;k<d;++k)a[b++]=g[k]}return b}function Ga(a,b,c,d,e){e=e?e:[];var f=0,g,k;g=0;for(k=c.length;g<k;++g)b=Fa(a,b,c[g],d),e[f++]=b;e.length=f;return e};function N(a,b){K.call(this);this.g(a,b)}h(N,K);N.prototype.clone=function(){var a=new N(null);L(a,this.layout,this.a.slice());a.b();return a};N.prototype.g=function(a,b){a?(M(this,b,a,1),this.a||(this.a=[]),this.a.length=Fa(this.a,0,a,this.c)):L(this,"XY",null);this.b()};navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function O(a,b){K.call(this);this.g(a,b)}h(O,K);O.prototype.clone=function(){var a=new O(null);L(a,this.layout,this.a.slice());a.b();return a};O.prototype.L=function(a){var b=this.a,c=b[0],b=b[1];return B(c,b,c,b,a)};O.prototype.g=function(a,b){if(a){M(this,b,a,0);this.a||(this.a=[]);var c=b=this.a,d=0,e,f;e=0;for(f=a.length;e<f;++e)c[d++]=a[e];b.length=d}else L(this,"XY",null);this.b()};function P(a,b){K.call(this);this.f=[];this.g(a,b)}h(P,K);P.prototype.clone=function(){var a=new P(null),b=this.f.slice();L(a,this.layout,this.a.slice());a.f=b;a.b();return a};P.prototype.g=function(a,b){a?(M(this,b,a,2),this.a||(this.a=[]),a=Ga(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,L(this,"XY",null),this.f=a);this.b()};function Ha(a){D.call(this,{code:a,units:"m",extent:Ia,global:!0,ca:Ja})}h(Ha,D);Ha.prototype.D=function(a,b){return a/oa(b[1]/6378137)};var Q=6378137*Math.PI,Ia=[-Q,-Q,Q,Q],Ja=[-180,-85,180,85],Ka="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new Ha(a)});
function La(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=Q*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>Q?f=Q:f<-Q&&(f=-Q);b[e+1]=f}return b}function Ma(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/Q,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var Na=new pa(6378137);function R(a,b){D.call(this,{code:a,units:"degrees",extent:Oa,da:b,global:!0,S:Pa,ca:Oa})}h(R,D);R.prototype.D=function(a){return a};var Oa=[-180,-90,180,90],Pa=Math.PI*Na.radius/180,Qa=[new R("CRS:84"),new R("EPSG:4326","neu"),new R("urn:ogc:def:crs:EPSG::4326","neu"),new R("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new R("urn:ogc:def:crs:OGC:1.3:CRS84"),new R("urn:ogc:def:crs:OGC:2:84"),new R("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new R("urn:x-ogc:def:crs:EPSG:4326","neu")];ua(Ka);ua(Qa);Qa.forEach(function(a){Ka.forEach(function(b){G(a,b,La);G(b,a,Ma)})});var Ra=angular.module("ngeoSearchDirective",[]);
function Sa(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.ngeoSearch),e=a.$eval(c.ngeoSearchDatasets).slice();e.unshift(d);b.typeahead.apply(b,e);c=a.$eval(c.ngeoSearchListeners);var f=Sa.a(c);b.on("typeahead:open",function(){a.$apply(function(){f.open()})});b.on("typeahead:close",function(){a.$apply(function(){f.close()})});b.on("typeahead:cursorchange",function(b,c,d){a.$apply(function(){f.cursorchange(b,c,d)})});b.on("typeahead:select",function(b,c,d){a.$apply(function(){f.select(b,
c,d)})});b.on("typeahead:autocomplete",function(b,c,d){a.$apply(function(){f.autocomplete(b,c,d)})})}}}Sa.a=function(a){var b;a?b={open:void 0!==a.open?a.open:m,close:void 0!==a.close?a.close:m,cursorchange:void 0!==a.cursorchange?a.cursorchange:m,select:void 0!==a.select?a.select:m,autocomplete:void 0!==a.autocomplete?a.autocomplete:m}:b={open:m,close:m,cursorchange:m,select:m,autocomplete:m};return b};Ra.directive("ngeoSearch",Sa);function Ta(){Da.call(this)}h(Ta,Da);function Ua(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null};function S(a){I.call(this);this.a=a?a:null;Va(this)}h(S,I);function Va(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)v(a.a[b],"change",a.b,a)}S.prototype.clone=function(){var a=new S(null),b=this.a,c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());if(a.a)for(b=0,d=a.a.length;b<d;++b)ha(a.a[b],"change",a.b,a);a.a=c;Va(a);a.b();return a};
S.prototype.L=function(a){B(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c){var e=a,f=b[c].l();f[0]<e[0]&&(e[0]=f[0]);f[2]>e[2]&&(e[2]=f[2]);f[1]<e[1]&&(e[1]=f[1]);f[3]>e[3]&&(e[3]=f[3])}return a};S.prototype.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.b()};S.prototype.scale=function(a,b,c){c||(c=na(this.l()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.b()};
S.prototype.K=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].K(a);this.b()};S.prototype.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.b()};function T(a,b){K.call(this);this.f=[];this.g(a,b)}h(T,K);T.prototype.clone=function(){var a=new T(null),b=this.f.slice();L(a,this.layout,this.a.slice());a.f=b;a.b();return a};T.prototype.g=function(a,b){a?(M(this,b,a,2),this.a||(this.a=[]),a=Ga(this.a,0,a,this.c,this.f),this.a.length=0===a.length?0:a[a.length-1]):(a=this.f,L(this,"XY",null),this.f=a);this.b()};function U(a,b){K.call(this);this.g(a,b)}h(U,K);U.prototype.clone=function(){var a=new U(null);L(a,this.layout,this.a.slice());a.b();return a};U.prototype.g=function(a,b){a?(M(this,b,a,1),this.a||(this.a=[]),this.a.length=Fa(this.a,0,a,this.c)):L(this,"XY",null);this.b()};function V(a,b){K.call(this);this.f=[];this.g(a,b)}h(V,K);V.prototype.clone=function(){for(var a=new V(null),b=this.f.length,c=Array(b),d=0;d<b;++d)c[d]=this.f[d].slice();L(a,this.layout,this.a.slice());a.f=c;a.b();return a};
V.prototype.g=function(a,b){if(a){M(this,b,a,3);this.a||(this.a=[]);b=this.a;var c=this.c,d=this.f,e=0,d=d?d:[],f=0,g,k;g=0;for(k=a.length;g<k;++g)e=Ga(b,e,a[g],c,d[f]),d[f++]=e,e=e[e.length-1];d.length=f;0===d.length?this.a.length=0:(a=d[d.length-1],this.a.length=0===a.length?0:a[a.length-1])}else a=this.f,L(this,"XY",null),this.f=a;this.b()};function Wa(a){a=a?a:{};Da.call(this);this.s=F(a.s?a.s:"EPSG:4326");a.i&&(this.a=F(a.i));this.b=a.geometryName}h(Wa,Ta);
function Xa(a,b){if(a){a=(0,Ya[a.type])(a);var c=b?F(b.i):null;b=b?F(b.o):null;var d;if(d=c&&b)c===b?d=!0:(d=c.b===b.b,d=c.a===b.a?d:wa(c,b)===ya&&d),d=!d;d&&(a instanceof I?a=a.transform(b,c):(c=Aa(b,c),a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]],c(a,a,2),b=[a[0],a[2],a[4],a[6]],d=[a[1],a[3],a[5],a[7]],a=Math.min.apply(null,b),c=Math.min.apply(null,d),b=Math.max.apply(null,b),d=Math.max.apply(null,d),a=B(a,c,b,d,void 0)))}else a=null;return a}
var Ya={Point:function(a){return new O(a.coordinates)},LineString:function(a){return new N(a.coordinates)},Polygon:function(a){return new P(a.coordinates)},MultiPoint:function(a){return new U(a.coordinates)},MultiLineString:function(a){return new T(a.coordinates)},MultiPolygon:function(a){return new V(a.coordinates)},GeometryCollection:function(a,b){a=a.geometries.map(function(a){return Xa(a,b)});return new S(a)}};
function Za(a,b,c){b="Feature"===b.type?b:{type:"Feature",geometry:b};c=Xa(b.geometry,c);var d=new J;a.b&&Ca(d,a.b);d.set(d.a,c);void 0!==b.id&&d.b();b.properties&&la(d,b.properties);return d};var $a=angular.module("ngeoSearchService",[]);
$a.value("creategeojsonbloodhound",function(a,b,c,d,e,f){var g=new Wa;a={remote:{url:a,prepare:function(a,b){b.url=b.url.replace("%QUERY",a);return b},transform:function(a){void 0!==b&&(a={type:"FeatureCollection",features:a.features.filter(b)});var e=a,f={i:c,o:d};a=Ua(e);var l;if(f){if(f.o)l=f.o;else if(l=Ua(e).crs)if("name"==l.type)l=F(l.properties.name);else if("EPSG"==l.type)l=F("EPSG:"+l.properties.code);else throw new n(36);else l=g.s;l={o:l,i:f.i}}f=p({o:g.s,i:g.a},l);if("FeatureCollection"===
a.type){l=[];a=a.features;var E,e=0;for(E=a.length;e<E;++e)l.push(Za(g,a[e],f))}else l=[Za(g,a,f)];return l}},datumTokenizer:m,queryTokenizer:Bloodhound.tokenizers.whitespace};e=p({},e||{});f=p({},f||{});e.remote&&(p(f,e.remote),delete e.remote);p(a,e);p(a.remote,f);return new Bloodhound(a)});var ab=angular.module("ngeoSearchModule",[Ra.name,$a.name]);var W=angular.module("ngeo",[ab.name,"gettext","ui.date","floatThead"]);ba("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});ba("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});function X(a){if(Error.captureStackTrace)Error.captureStackTrace(this,X);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ca(X,Error);X.prototype.name="CustomError";function bb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};function cb(a,b){b.unshift(a);X.call(this,bb.apply(null,b));b.shift()}ca(cb,X);cb.prototype.name="AssertionError";function db(a,b){throw new cb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};W.value("ngeoPopupTemplateUrl",function(a,b){a=b.ngeoPopupTemplateurl;return void 0!==a?a:"ngeo/popup.html"});function eb(a){return{restrict:"A",templateUrl:a,link:function(a,c){c.addClass("popover");a.close=function(a){a&&(a.stopPropagation(),a.preventDefault());c.addClass("hidden")};a.$watch("open",function(a){c.css("display",a?"block":"none")})}}}eb.$inject=["ngeoPopupTemplateUrl"];W.directive("ngeoPopup",eb);function Y(a,b,c,d){this.scope=b.$new(!0);this.scope.$watch(function(){return this.scope.open}.bind(this),function(a){!a&&this.b&&this.g(function(){this.destroy()}.bind(this))}.bind(this));this.c=c;this.g=d;this.a=angular.element("<div ngeo-popup></div>");this.b=!1;a(this.a)(this.scope);angular.element(document.body).append(this.a)}Y.prototype.V=function(){return this.scope.open};Y.prototype.getOpen=Y.prototype.V;Y.prototype.B=function(a){this.scope.open=a};Y.prototype.setOpen=Y.prototype.B;
Y.prototype.destroy=function(){this.scope.$destroy();this.a.remove()};Y.prototype.destroy=Y.prototype.destroy;Y.prototype.C=function(a){a=this.c.trustAsHtml(a);this.scope.title=a};Y.prototype.setTitle=Y.prototype.C;Y.prototype.A=function(a){this.scope.content=a};Y.prototype.setContent=Y.prototype.A;Y.prototype.J=function(a){a=this.c.trustAsHtml('<iframe src="'+a+'" width="100%" height="100%"></iframe>');this.A(a)};Y.prototype.setUrl=Y.prototype.J;
Y.prototype.H=function(a){this.a.width(a);this.a.css("max-width",a)};Y.prototype.setWidth=Y.prototype.H;Y.prototype.G=function(a){this.a.height(a)};Y.prototype.setHeight=Y.prototype.G;Y.prototype.T=function(a,b){this.H(a);this.G(b)};Y.prototype.setSize=Y.prototype.T;Y.prototype.w=function(a){this.b=a};Y.prototype.setAutoDestroy=Y.prototype.w;Y.prototype.addClass=function(a){this.a.addClass(a)};Y.prototype.addClass=Y.prototype.addClass;
Y.prototype.open=function(a){a.url?this.J(a.url):a.content?this.A(a.content):db('ngeo.Popup options requirest "url" or "content".');void 0!==a.autoDestroy&&this.w(a.autoDestroy);void 0!==a.cls&&this.addClass(a.cls);void 0!==a.height&&this.G(a.height);void 0!==a.title&&this.C(a.title);void 0!==a.width&&this.H(a.width);this.B(!0)};Y.prototype.open=Y.prototype.open;function fb(a,b,c,d){return function(){return new Y(a,b,c,d)}}fb.$inject=["$compile","$rootScope","$sce","$timeout"];
W.factory("ngeoCreatePopup",fb);var gb=angular.module("app",["ngeo"]);function Z(a,b){this.b=a;this.a=b;$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}Z.$inject=["$sce","ngeoCreatePopup"];Z.prototype.ba=function(){var a=this.a();a.w(!0);a.C("Simple popup");var b=this.b.trustAsHtml("This is a simple 400x300 px popup.");a.A(b);a.H("400px");a.G("300px");a.B(!0)};Z.prototype.simplePopup=Z.prototype.ba;
Z.prototype.X=function(){var a=this.a();a.w(!0);a.addClass("popup-with-iframe");a.C("Iframe popup");a.J("http://geomapfish.org/");a.T("400px","300px");a.B(!0)};Z.prototype.iframePopup=Z.prototype.X;
Z.prototype.W=function(){var a=this.a();a.w(!0);a.C("This is a popup with lots and lots of content and a very long title");var b=this.b.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egetquam at ex euismod bibendum et eget enim. Nulla sodales tortor acsagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc idmagna id risus malesuada elementum eget id purus. Curabitur vel augueblandit, faucibus nulla quis, consequat tellus. Phasellus commodo,tellus et vulputate ultricies, nulla libero ornare arcu, quisfermentum sem diam quis tellus. Aliquam ut sapien tristique, laciniaante et, lacinia arcu. Quisque sagittis eros at quam blanditgravida. Nulla sit amet enim semper, efficitur eros sit amet,porttitor libero. Fusce quis tellus est. Quisque ornare, ex egetluctus pharetra, nisl leo lobortis purus, sed tristique neque leo egetodio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risusconvallis. Donec ullamcorper sollicitudin maximus. Quisque bibendumelit sit amet ultrices ornare. Donec aliquam felis id urna ultricesscelerisque.");a.A(b);
a.B(!0)};Z.prototype.heavyPopup=Z.prototype.W;Z.prototype.Y=function(){var a=this.a(),b=this.b.trustAsHtml("This popup was opened using the <code>open</code> method.");a.open({autoDestroy:!0,content:b,height:"200px",title:'Opened with "open"',width:"300px"})};Z.prototype.openPopupWithContent=Z.prototype.Y;Z.prototype.Z=function(){this.a().open({autoDestroy:!0,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})};
Z.prototype.openPopupWithUrl=Z.prototype.Z;gb.controller("MainController",Z);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];W.run(a)})();}).call(window);
//# sourceMappingURL=popupservice.js.map
