!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=t,n.c=e,n.p="http://localhost:8080/dist",n(0)}([function(t,e,n){"function"!=typeof Promise&&(window.Promise=n(1));var o={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};t.exports=o},function(t,e,n){(function(e){!function(n){var o=setTimeout;function i(){}var r="function"==typeof e&&e||function(t){o(t,0)},a=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};function s(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function c(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,r((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void l(e.promise,t)}u(e.promise,o)}else(1===t._state?u:l)(e.promise,t._value)}))):t._deferreds.push(e)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof s)return t._state=3,t._value=e,void d(t);if("function"==typeof n)return void h((o=n,i=e,function(){o.apply(i,arguments)}),t)}t._state=1,t._value=e,d(t)}catch(e){l(t,e)}var o,i}function l(t,e){t._state=2,t._value=e,d(t)}function d(t){2===t._state&&0===t._deferreds.length&&r((function(){t._handled||a(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)c(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t((function(t){n||(n=!0,u(e,t))}),(function(t){n||(n=!0,l(e,t))}))}catch(t){if(n)return;n=!0,l(e,t)}}s.prototype.catch=function(t){return this.then(null,t)},s.prototype.then=function(t,e){var n=new this.constructor(i);return c(this,new f(t,e,n)),n},s.all=function(t){var e=Array.prototype.slice.call(t);return new s((function(t,n){if(0===e.length)return t([]);var o=e.length;function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(r,t)}),n)}e[r]=a,0==--o&&t(e)}catch(t){n(t)}}for(var r=0;r<e.length;r++)i(r,e[r])}))},s.resolve=function(t){return t&&"object"==typeof t&&t.constructor===s?t:new s((function(e){e(t)}))},s.reject=function(t){return new s((function(e,n){n(t)}))},s.race=function(t){return new s((function(e,n){for(var o=0,i=t.length;o<i;o++)t[o].then(e,n)}))},s._setImmediateFn=function(t){r=t},s._setUnhandledRejectionFn=function(t){a=t},void 0!==t&&t.exports?t.exports=s:n.Promise||(n.Promise=s)}(this)}).call(e,n(2).setImmediate)},function(t,e,n){(function(t,o){var i=n(3).nextTick,r=Function.prototype.apply,a=Array.prototype.slice,s={},c=0;function u(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new u(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new u(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},e.setImmediate="function"==typeof t?t:function(t){var n=c++,o=!(arguments.length<2)&&a.call(arguments,1);return s[n]=!0,i((function(){s[n]&&(o?t.apply(null,o):t.call(null),e.clearImmediate(n))})),n},e.clearImmediate="function"==typeof o?o:function(t){delete s[t]}}).call(e,n(2).setImmediate,n(2).clearImmediate)},function(t,e){var n,o,i=t.exports={};!function(){try{n=setTimeout}catch(t){n=function(){throw new Error("setTimeout is not defined")}}try{o=clearTimeout}catch(t){o=function(){throw new Error("clearTimeout is not defined")}}}();var r,a=[],s=!1,c=-1;function u(){s&&r&&(s=!1,r.length?a=r.concat(a):c=-1,a.length&&l())}function l(){if(!s){var t=n(u);s=!0;for(var e=a.length;e;){for(r=a,a=[];++c<e;)r&&r[c].run();c=-1,e=a.length}r=null,s=!1,o(t)}}function d(t,e){this.fun=t,this.array=e}function f(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];a.push(new d(t,e)),1!==a.length||s||n(l,0)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){var o=n(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(t){return o.extend(this,t)},init:function(t,e){var n=this;return this.oldContainer=t,this._newContainerPromise=e,this.deferred=o.deferred(),this.newContainerReady=o.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then((function(t){n.newContainer=t,n.newContainerReady.resolve()})),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};t.exports=i},function(t,e){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(t){return t.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(t){var e=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?e.resolve(n.responseText):e.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return e.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",t),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),e.promise},extend:function(t,e){var n=Object.create(t);for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this))}},getPort:function(t){var e=void 0!==t?t:window.location.port,n=window.location.protocol;return""!=e?parseInt(e):"http:"===n?80:"https:"===n?443:void 0}};t.exports=n},function(t,e,n){var o=n(7),i=n(5),r={namespace:null,extend:function(t){return i.extend(this,t)},init:function(){var t=this;o.on("initStateChange",(function(e,n){n&&n.namespace===t.namespace&&t.onLeave()})),o.on("newPageReady",(function(e,n,o){t.container=o,e.namespace===t.namespace&&t.onEnter()})),o.on("transitionCompleted",(function(e,n){e.namespace===t.namespace&&t.onEnterCompleted(),n&&n.namespace===t.namespace&&t.onLeaveCompleted()}))},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};t.exports=r},function(t,e){var n={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){t in this.events!=0&&this.events[t].splice(this.events[t].indexOf(e),1)},trigger:function(t){if(t in this.events!=0)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}};t.exports=n},function(t,e,n){var o=n(5),i={data:{},extend:function(t){return o.extend(this,t)},set:function(t,e){this.data[t]=e},get:function(t){return this.data[t]},reset:function(){this.data={}}};t.exports=i},function(t,e){var n={history:[],add:function(t,e){e||(e=void 0),this.history.push({url:t,namespace:e})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var t=this.history;return t.length<2?null:t[t.length-2]}};t.exports=n},function(t,e,n){var o=n(5),i=n(7),r=n(11),a=n(8),s=n(9),c={Dom:n(12),History:s,Cache:a,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var t=this.Dom.getContainer();this.Dom.getWrapper().setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(t)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},t,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return o.cleanLink(o.getCurrentUrl())},goTo:function(t){window.history.pushState(null,null,t),this.onStateChange()},forceGoTo:function(t){window.location=t},load:function(t){var e,n=o.deferred(),i=this;return(e=this.Cache.get(t))||(e=o.xhr(t),this.Cache.set(t,e)),e.then((function(t){var e=i.Dom.parseResponse(t);i.Dom.putContainer(e),i.cacheEnabled||i.Cache.reset(),n.resolve(e)}),(function(){i.forceGoTo(t),n.reject()})),n.promise},getHref:function(t){if(t)return t.getAttribute&&"string"==typeof t.getAttribute("xlink:href")?t.getAttribute("xlink:href"):"string"==typeof t.href?t.href:void 0},onLinkClick:function(t){for(var e=t.target;e&&!this.getHref(e);)e=e.parentNode;if(this.preventCheck(t,e)){t.stopPropagation(),t.preventDefault(),i.trigger("linkClicked",e,t);var n=this.getHref(e);this.goTo(n)}},preventCheck:function(t,e){if(!window.history.pushState)return!1;var n=this.getHref(e);return!(!e||!n||t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||e.target&&"_blank"===e.target||window.location.protocol!==e.protocol||window.location.hostname!==e.hostname||o.getPort()!==o.getPort(e.port)||n.indexOf("#")>-1||e.getAttribute&&"string"==typeof e.getAttribute("download")||o.cleanLink(n)==o.cleanLink(location.href)||e.classList.contains(this.ignoreClassLink))},getTransition:function(){return r},onStateChange:function(){var t=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(t),this.History.currentStatus().url===t)return!1;this.History.add(t);var e=this.load(t),n=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var o=n.init(this.Dom.getContainer(),e);e.then(this.onNewContainerLoaded.bind(this)),o.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(t){this.History.currentStatus().namespace=this.Dom.getNamespace(t),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),t,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};t.exports=c},function(t,e,n){var o=n(4).extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});t.exports=o},function(t,e){var n={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(t){this.currentHTML=t;var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(e)},getWrapper:function(){var t=document.getElementById(this.wrapperId);if(!t)throw new Error("Barba.js: wrapper not found!");return t},getContainer:function(t){if(t||(t=document.body),!t)throw new Error("Barba.js: DOM not ready!");var e=this.parseContainer(t);if(e&&e.jquery&&(e=e[0]),!e)throw new Error("Barba.js: no container found");return e},getNamespace:function(t){return t&&t.dataset?t.dataset[this.dataNamespace]:t?t.getAttribute("data-"+this.dataNamespace):null},putContainer:function(t){t.style.visibility="hidden",this.getWrapper().appendChild(t)},parseContainer:function(t){return t.querySelector("."+this.containerClass)}};t.exports=n},function(t,e,n){var o=n(5),i=n(10),r={ignoreClassLink:"no-barba-prefetch",init:function(){if(!window.history.pushState)return!1;document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),document.body.addEventListener("touchstart",this.onLinkEnter.bind(this))},onLinkEnter:function(t){for(var e=t.target;e&&!i.getHref(e);)e=e.parentNode;if(e&&!e.classList.contains(this.ignoreClassLink)){var n=i.getHref(e);if(i.preventCheck(t,e)&&!i.Cache.get(n)){var r=o.xhr(n);i.Cache.set(n,r)}}}};t.exports=r}])},t.exports=o()},function(t,e,n){n(4),n(2)},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=function(t){window.open(t,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600")},a=function(){document.querySelectorAll(".share__link").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=t.dataset.socialNetwork,o=escape(window.location.href),i=document.title;return"twitter"===n?function(t,e){r("https://twitter.com/share?url=".concat(t,"&text=").concat(e))}(o,i):"facebook"===n?function(t,e){r("https://www.facebook.com/sharer/sharer.php?href=".concat(t,"&title=").concat(e))}(o,i):"linkedin"===n&&r("https://www.linkedin.com/sharing/share-offsite/?url=".concat(o)),!1}))}))};window.addEventListener("load",a),i.a.Dispatcher.on("transitionCompleted",a)},,function(t,e,n){"use strict";n.r(e);var o,i,r,a,s,c=n(0),u=n.n(c),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),d=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},f=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function t(e){var n=e.targetModal,o=e.triggers,i=void 0===o?[]:o,r=e.onShow,a=void 0===r?function(){}:r,s=e.onClose,c=void 0===s?function(){}:s,u=e.openTrigger,l=void 0===u?"data-micromodal-trigger":u,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.disableScroll,p=void 0!==v&&v,m=e.disableFocus,g=void 0!==m&&m,w=e.awaitCloseAnimation,y=void 0!==w&&w,b=e.debugMode,C=void 0!==b&&b;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.modal=document.getElementById(n),this.config={debugMode:C,disableScroll:p,openTrigger:l,closeTrigger:h,onShow:a,onClose:c,awaitCloseAnimation:y,disableFocus:g},i.length>0&&this.registerTriggers.apply(this,d(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return l(t,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];n.forEach((function(e){e.addEventListener("click",(function(){return t.showModal()}))}))}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",(function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)}),!1):t.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(e.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),t.preventDefault())}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.maintainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(o);return Object.keys(t).map((function(e){return t[e]}))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var t=this.getFocusableNodes();t.length&&t[0].focus()}}},{key:"maintainFocus",value:function(t){var e=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}else e[0].focus()}}]),t}(),r=null,a=function(t){if(!document.getElementById(t))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+t+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+t+'"></div>'),!1},s=function(t,e){if(function(t){t.length<=0&&(console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(t),!e)return!0;for(var n in e)a(n);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=[].concat(d(document.querySelectorAll("["+e.openTrigger+"]"))),o=function(t,e){var n=[];return t.forEach((function(t){var o=t.attributes[e].value;void 0===n[o]&&(n[o]=[]),n[o].push(t)})),n}(n,e.openTrigger);if(!0!==e.debugMode||!1!==s(n,o))for(var r in o){var a=o[r];e.targetModal=r,e.triggers=[].concat(d(a)),new i(e)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===a(t)||(r=new i(n)).showModal()},close:function(){r.closeModal()}});function h(){document.body.classList.remove("modal-open")}function v(){document.body.classList.add("modal-open")}var p=function(){document.querySelector(".modal")&&f.init({onShow:v,onClose:h,awaitCloseAnimation:!0,disableFocus:!0})},m=document.body,g=u.a.BaseTransition.extend({reloadHowdy:function(){if(document.querySelector("form")){var t=document.getElementById("howdy-script"),e=t.parentNode;e.removeChild(t);var n=document.createElement("script");n.setAttribute("id",t.id),n.setAttribute("src",t.src),e.appendChild(n)}},trackVirtualPageView:function(){var t=window.location.pathname;window.gtag?(gtag("config","UA-62036216-1",{page_path:t}),console.log('Tracked virtual page view "'+t+'"')):console.log('Could not track page view "'+t+'"')},initialiseBannerAndModal:function(){m.classList.remove("modal-open"),function(){var t=document.querySelector(".banner__close");if(t){var e=window.location,n=e.pathname;e.origin;n.match(/blog/)?t.href="/blog":n.match(/careers/)?t.href="/careers":t.href="/case-studies"}}(),p()},addTransitionOutClass:function(t){m.classList.remove("transition-in"),m.classList.add("transition-out"),t&&setTimeout(t,450)},addTransitionInClass:function(t){m.classList.remove("transition-out"),m.classList.add("transition-in"),t&&setTimeout(t,450)},start:function(){var t=this;console.log("Starting transition");var e=this.newContainerLoading;this.addTransitionOutClass((function(){window.scrollTo(0,0),e.then((function(){t.done(),t.initialiseBannerAndModal(),t.addTransitionInClass(),t.trackVirtualPageView(),t.reloadHowdy(),console.log("Ended transition")}))}))}});window.addEventListener("load",(function(){g.addTransitionInClass(),g.initialiseBannerAndModal()})),u.a.Pjax.originalPreventCheck=u.a.Pjax.preventCheck,u.a.Pjax.preventCheck=function(t,e){return!!u.a.Pjax.originalPreventCheck(t,e)&&"#"!==e.href.toLowerCase()},u.a.Pjax.getTransition=function(){return g},u.a.Pjax.start()}]);