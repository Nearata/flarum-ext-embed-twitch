module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,r){t.exports=r(9)},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},,function(t,e){t.exports=flarum.core.compat["forum/components/Button"]},function(t,e){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["forum/components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};m[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(L([])));y&&y!==e&&r.call(y,o)&&(m=y);var v=p.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=v.constructor=p,p.constructor=h,h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(v),c(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},,function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.r(e);var a=r(0),i=r.n(a),c=r(1),u=r(4),l=r.n(u),s=r(5),f=r.n(s),h=r(6),p=r.n(h);function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=r(7),v=r.n(y),b=r(8),g=r.n(b),w=r(2),x=r.n(w),_=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,d(e,r);var o=n.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.content_type="channel",this.channel="",this.collection="",this.video="",this.layout="video-with-chat"},o.className=function(){return"EmbedTwitchModal Modal--small"},o.title=function(){return"Embed Twitch"},o.content=function(){var t=this;return[m(".Modal-body",[m(".Form",[m(".Form-group",[m("label",app.translator.trans("nearata-embed-twitch.forum.modal.label.type")),m(x.a,{options:{channel:app.translator.trans("nearata-embed-twitch.forum.modal.options.channel"),video:app.translator.trans("nearata-embed-twitch.forum.modal.options.video"),collection:app.translator.trans("nearata-embed-twitch.forum.modal.options.collection")},value:this.content_type,onchange:function(e){return t.content_type=e}})]),"channel"===this.content_type?m(".Form-group",[m("label",app.translator.trans("nearata-embed-twitch.forum.modal.label.channel")),m("input",{type:"name",name:"text",class:"FormControl",disabled:this.disabled,oninput:function(e){return t.channel=e.target.value},autocomplete:"off",placeholder:"lirik"})]):null,"collection"===this.content_type?m(".Form-group",[m("label",app.translator.trans("nearata-embed-twitch.forum.modal.label.collection")),m("input",{type:"name",name:"text",class:"FormControl",disabled:this.disabled,oninput:function(e){return t.channel=e.target.value},autocomplete:"off",placeholder:"GMEgKwTQpRQwyA"})]):null,["collection","video"].indexOf(this.content_type)>=0?m(".Form-group",[m("label",app.translator.trans("nearata-embed-twitch.forum.modal.label.video")),"collection"===this.content_type?m(".helpText","Optional"):null,m("input",{type:"name",name:"text",class:"FormControl",disabled:this.disabled,oninput:function(e){return t.channel=e.target.value},autocomplete:"off",placeholder:"124085610"})]):null,"channel"===this.content_type?m(".Form-group",[m("label",app.translator.trans("nearata-embed-twitch.forum.modal.label.layout")),m(x.a,{options:{"video-with-chat":"Video with Chat",video:"Video"},value:this.layout,onchange:function(e){return t.layout=e}})]):null,m(".Form-group",[m(v.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("nearata-embed-twitch.forum.modal.save_changes"))])])]),m(".Modal-footer",[m("span",["Powered by ",m("a",{href:"https://dev.twitch.tv/docs/embed",target:"_blank"},"Twitch Embed")])])]},o.onsubmit=function(t){t.preventDefault();var e=new Uint16Array(1),r='[embed-twitch id="'+window.crypto.getRandomValues(e)[0]+'" channel="'+this.channel+'" video="'+this.video+'" collection="'+this.collection+'" layout="'+this.layout+'" ]';this.attrs.editor.insertAtCursor(r),this.hide()},n}(g.a);function E(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}app.initializers.add("nearata-embed-twitch",(function(t){var e=!1;Object(c.extend)(p.a.prototype,"controlItems",(function(e){if(t.forum.attribute("nearataEmbedTwitchCanCreate")){var r=this.attrs.composer.editor;e.add("nearataEmbedTwitch",m(l.a,{icon:"fab fa-twitch",class:"Button Button--icon",onclick:function(){return t.modal.show(_,{editor:r})},oncreate:function(t){return $(t.dom).tooltip()}},t.translator.trans("nearata-embed-twitch.forum.button_tooltip_title")))}})),Object(c.extend)(f.a.prototype,"oncreate",(function(){var r=this.element.querySelectorAll(".embed-twitch-container");r.length&&new Promise((function(t){if(e)var r=setInterval(o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.Twitch&&(clearInterval(r),t());case 1:case"end":return e.stop()}}),e)}))),1e3);else{e=!0;var n=document.createElement("script");n.src="https://embed.twitch.tv/embed/v1.js",n.async=!0,n.onload=t,document.body.appendChild(n)}})).then((function(){return function(e){for(var r,n=E(e);!(r=n()).done;){var o=r.value,a=o.id,i=o.dataset.channel,c=o.dataset.video,u=o.dataset.collection,l=o.dataset.layout;new Twitch.Embed(a,{width:854,height:480,channel:i,video:c,collection:u,layout:l,theme:t.forum.attribute("darkMode")?"dark":"light",allowfullscreen:t.forum.attribute("embedTwitchAllowfullscreen"),autoplay:t.forum.attribute("embedTwitchAutoplay"),parent:["localhost"]})}}(r)}))}))}))}]);
//# sourceMappingURL=forum.js.map