<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{671:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),o=n.n(r),c=n(12),u=function(e){return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(c.s,{fluid:!0},o.a.createElement(c.ab,{className:"login-canvas justify-content-center align-items-center"},o.a.createElement(c.q,{className:"login-left justify-content-center",md:"6"},e.children))))}},740:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=(n(12),n(47)),u=n(26),i=n(642),a=n(56),f=n(671);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,c=b(a);function a(){var e;s(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(d(e=c.call.apply(c,[this].concat(n))),"componentDidMount",(function(){e.props.userRegisterValidationFetch(e.props.token)})),e}return t=a,(n=[{key:"render",value:function(){return this.props.registerAllowed?o.a.createElement(f.a,null,o.a.createElement(i.f,{username:this.props.username})):o.a.createElement(u.a,{to:"/login"})}}])&&p(t.prototype,n),r&&p(t,r),a}(r.Component);t.default=Object(c.b)((function(e){return{userRegistered:e.userRegistered,registerAllowed:e.registerAllowed}}),(function(e){return{userRegisterValidationFetch:function(t){return e(Object(a.s)(t))}}}))(w)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{672:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(1),o=r.n(n),c=r(165);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,c=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){return o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,t.userRole," ",t.details.name," details"),o.a.createElement(c.R,{to:"".concat(t.location.pathname,"/edit")},"Edit ",t.userRole.toLowerCase())),o.a.createElement(c.g,null,o.a.createElement(c.S,{flush:!0},Object.entries(t.details).map((function(t){var e=a(t,2),r=e[0],n=e[1];return o.a.createElement(c.T,{key:r},o.a.createElement("strong",null,r.charAt(0).toUpperCase()+r.slice(1).replace("_"," "),":")," ",n)})))))}},749:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),c=r(166),a=r(95),i=r(165),u=r(26),f=r(672);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){b(c,n,o,a,i,"next",t)}function i(t){b(c,n,o,a,i,"throw",t)}a(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g(t);if(e){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=new u.a,E={SafeMan:"Safety Manager",SecMan:"Security Manager",SecOff:"Security Officer",SiteOwn:"Site Owner",WorkOwn:"Owner of Work",SecGrd:"Security Guards"},P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(r,t);var e=d(r);function r(){var t;h(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return j(w(t=e.call.apply(e,[this].concat(c))),"state",{username:"",name:"",email:"",position:"",company:t.props.company,role:"CliMan",department:""}),j(w(t),"componentDidMount",m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return S.getDetailsOf("client_managers",t.props.match.params.id)})).then((function(e){e.position=E[e.position],t.setState(y({},e))}));case 2:case"end":return e.stop()}}),e)})))),j(w(t),"render",(function(){var e=t.state;return["id","company","role"].forEach((function(t){delete e[t]})),o.a.createElement(i.ab,null,o.a.createElement(i.q,null,o.a.createElement(f.a,s({userRole:"Manager",details:e},t.props))))})),t}return r}(n.Component);e.default=Object(a.b)(null,(function(t){return{getProfileFetch:function(){return t(Object(c.h)())}}}))(P)}}]);
>>>>>>> develop
//# sourceMappingURL=19.main.js.map