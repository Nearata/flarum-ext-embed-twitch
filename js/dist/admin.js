module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t,n){"use strict";n.r(t);var r=n(5);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},5:function(e,t){app.initializers.add("nearata-embed-twitch",(function(e){e.extensionData.for("nearata-embed-twitch").registerSetting({setting:"nearata-embed-twitch.settings.allowfullscreen",label:e.translator.trans("nearata-embed-twitch.admin.allowfullscreen"),type:"boolean"}).registerSetting({setting:"nearata-embed-twitch.settings.autoplay",label:e.translator.trans("nearata-embed-twitch.admin.autoplay"),type:"boolean"}).registerPermission({icon:"fas fa-check",label:e.translator.trans("nearata-embed-twitch.admin.permissions.create_twitch"),permission:"nearata.embed-twitch.can_use",tagScoped:!0},"start")}))}});
//# sourceMappingURL=admin.js.map