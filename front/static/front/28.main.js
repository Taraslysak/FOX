<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{763:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(26),u=n(47),c=n(12),i=n(635),l=n.n(i),f=n(22),p=n(56);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){h(a,r,o,u,c,"next",e)}function c(e){h(a,r,o,u,c,"throw",e)}u(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=new f.a,j=[{id:1,name:"URL"},{id:2,name:"File upload"}],O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=g(n);function n(){var e;b(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return S(E(e=t.call.apply(t,[this].concat(a))),"state",{name:"",file:"",project:e.props.match.params.id,url_to_doc:"",upload_option:1,error:!1}),S(E(e),"handleChange",(function(t){e.setState(S({},t.target.name,t.target.value))})),S(E(e),"handleFileUpload",(function(t){e.setState(S({},t.target.name,t.target.files[0]))})),S(E(e),"handleSubmit",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.requestData=e.state,delete e.requestData.error,delete e.requestData.upload_option,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=m(t,2),r=n[0],o=n[1];e.formData.append(r,o)})),t.next=8,C.createEntityWithFile("documents",e.formData).then((function(){e.props.history.push("/projects/".concat(e.props.match.params.id,"/documents"))}),(function(t){console.error(t),e.setState({error:"Document creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(E(e),"componentDidMount",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch();case 2:case"end":return t.stop()}}),t)})))),S(E(e),"render",(function(){return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.B,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"name"},"Name"),o.a.createElement(c.J,{id:"name",name:"name",placeholder:"Enter document name",value:e.state.name,onChange:e.handleChange,required:!0})),o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"upload_option"},"File upload option"),o.a.createElement(c.bb,{id:"upload_option",name:"upload_option",placeholder:"Choose contractor",value:e.state.upload_option,onChange:e.handleChange,required:!0},j.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})))),1==e.state.upload_option?o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"url_to_doc"},"Url to document"),o.a.createElement(c.J,{type:"url",id:"url_to_doc",name:"url_to_doc",placeholder:"https://example.com",pattern:"https://.*",value:e.state.url_to_doc,onChange:e.handleChange,required:!0})):o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"file"},"File"),o.a.createElement(c.L,{id:"file",name:"file",onChange:e.handleFileUpload,required:!0})),o.a.createElement(c.C,null,o.a.createElement(c.e,{type:"submit",color:"dark",variant:"outline",block:!0},"Create Document")),e.state.error?o.a.createElement("p",null,e.state.error):null)))})),e}return n}(r.Component);t.default=Object(u.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(p.h)())}}}))(Object(a.h)(O))}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{763:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(24),u=n(95),c=n(165),i=n(635),l=n.n(i),f=n(26),p=n(166);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){h(a,r,o,u,c,"next",e)}function c(e){h(a,r,o,u,c,"throw",e)}u(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=new f.a,j=[{id:1,name:"URL"},{id:2,name:"File upload"}],O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=g(n);function n(){var e;b(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return S(E(e=t.call.apply(t,[this].concat(a))),"state",{name:"",file:"",project:e.props.match.params.id,url_to_doc:"",upload_option:1,error:!1}),S(E(e),"handleChange",(function(t){e.setState(S({},t.target.name,t.target.value))})),S(E(e),"handleFileUpload",(function(t){e.setState(S({},t.target.name,t.target.files[0]))})),S(E(e),"handleSubmit",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.requestData=e.state,delete e.requestData.error,delete e.requestData.upload_option,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=m(t,2),r=n[0],o=n[1];e.formData.append(r,o)})),t.next=8,C.createEntityWithFile("documents",e.formData).then((function(){e.props.history.push("/projects/".concat(e.props.match.params.id,"/documents"))}),(function(t){console.error(t),e.setState({error:"Document creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(E(e),"componentDidMount",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch();case 2:case"end":return t.stop()}}),t)})))),S(E(e),"render",(function(){return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.B,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"name"},"Name"),o.a.createElement(c.J,{id:"name",name:"name",placeholder:"Enter document name",value:e.state.name,onChange:e.handleChange,required:!0})),o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"upload_option"},"File upload option"),o.a.createElement(c.bb,{id:"upload_option",name:"upload_option",placeholder:"Choose contractor",value:e.state.upload_option,onChange:e.handleChange,required:!0},j.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})))),1==e.state.upload_option?o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"url_to_doc"},"Url to document"),o.a.createElement(c.J,{type:"url",id:"url_to_doc",name:"url_to_doc",placeholder:"https://example.com",pattern:"https://.*",value:e.state.url_to_doc,onChange:e.handleChange,required:!0})):o.a.createElement(c.C,null,o.a.createElement(c.Q,{htmlFor:"file"},"File"),o.a.createElement(c.L,{id:"file",name:"file",onChange:e.handleFileUpload,required:!0})),o.a.createElement(c.C,null,o.a.createElement(c.e,{type:"submit",color:"dark",variant:"outline",block:!0},"Create Document")),e.state.error?o.a.createElement("p",null,e.state.error):null)))})),e}return n}(r.Component);t.default=Object(u.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(p.h)())}}}))(Object(a.h)(O))}}]);
>>>>>>> develop
//# sourceMappingURL=28.main.js.map