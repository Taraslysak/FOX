(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{642:function(e,t,n){"use strict";n.d(t,"d",(function(){return z})),n.d(t,"f",(function(){return ee})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h}));var r=n(1),a=n.n(r),o=n(12),l=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},c=function(e){return a.a.createElement(o.C,null,a.a.createElement(o.ab,null,a.a.createElement(o.q,{md:"6"},a.a.createElement(o.Q,{htmlFor:e.inputInfo},l(e.inputInfo)),a.a.createElement(o.K,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Enter ".concat(l(t)," info")),value:e.inputValue,onChange:e.handleChange,required:!0})),a.a.createElement(o.q,{md:"6"},a.a.createElement(o.Q,{htmlFor:e.uploadInfo},l(e.uploadInfo)),a.a.createElement(o.L,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload,required:!0}))));var t},i=function(e){return a.a.createElement(o.C,null,a.a.createElement(o.bb,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(t)," info")),value:e.inputValue,onChange:e.handleChange,required:!0},e.options.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.position)}))));var t},u=n(738),s=function(e,t){if(t)return t.find((function(t){return t.value===e}))},p=function(e){return a.a.createElement(o.C,null,a.a.createElement(u.a,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(t))),value:s(e.inputValue,e.options),onChange:e.handleChange,options:e.options,required:!0}));var t},f=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},m=function(e){return a.a.createElement(o.C,null,a.a.createElement(o.ab,null,a.a.createElement(o.q,{md:"5"},a.a.createElement(o.Q,{htmlFor:e.inputInfo},f(e.inputInfo)),a.a.createElement(o.K,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Enter ".concat(f(t)," info")),value:e.inputValue,onChange:e.handleChange})),a.a.createElement(o.q,{md:"2",className:"d-flex align-items-center"},a.a.createElement(o.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},"Download scan")),a.a.createElement(o.q,{md:"5"},a.a.createElement(o.Q,{htmlFor:e.uploadInfo},"New ".concat(f(e.uploadInfo))),a.a.createElement(o.L,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))));var t},d=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},h=function(e){return a.a.createElement(o.C,null,a.a.createElement(o.ab,null,a.a.createElement(o.q,{md:"1"},a.a.createElement(o.Q,{htmlFor:e.inputInfo},d(e.inputInfo))),a.a.createElement(o.q,{md:"2"},a.a.createElement(o.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},e.buttonText?e.buttonText:"Download scan")),a.a.createElement(o.q,{md:"5"},a.a.createElement(o.Q,{htmlFor:e.uploadInfo},"New ".concat(d(e.uploadInfo))),a.a.createElement(o.L,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))))},b=(n(651),n(47)),y=n(63),E=n(635),g=n.n(E),w=n(56);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,r,l=j(c);function c(){var e;O(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(N(e=l.call.apply(l,[this].concat(n))),"state",{showPassword:!1}),_(N(e),"toggleShowPassword",(function(){e.setState({showPassword:!e.state.showPassword})})),e}return t=c,(n=[{key:"render",value:function(){return this.state.showPassword?a.a.createElement(o.C,null,a.a.createElement(o.M,null,a.a.createElement(o.O,null,a.a.createElement(o.P,{className:"fox-input-before".concat(this.props.submitError?"-invalid":"")},a.a.createElement(y.a,{name:"cilLockLocked"}))),a.a.createElement(o.K,{id:this.props.inputName,name:this.props.inputName,placeholder:this.props.placeholder,value:this.props.password,onChange:this.props.handleChange,invalid:this.props.submitError,required:!0}),a.a.createElement(o.N,null,a.a.createElement(o.P,{onClick:this.toggleShowPassword,className:"fox-input-after".concat(this.props.submitError?"-invalid":"")},a.a.createElement(y.a,{name:"cilLowVision"}))))):a.a.createElement(o.C,null,a.a.createElement(o.M,null,a.a.createElement(o.O,null,a.a.createElement(o.P,{className:"fox-input-before".concat(this.props.submitError?"-invalid":"")},a.a.createElement(y.a,{name:"cilLockLocked"}))),a.a.createElement(o.K,{type:"password",id:this.props.inputName,name:this.props.inputName,placeholder:this.props.placeholder,value:this.props.password,onChange:this.props.handleChange,invalid:this.props.submitError,required:!0}),a.a.createElement(o.N,null,a.a.createElement(o.P,{onClick:this.toggleShowPassword,className:"fox-input-after".concat(this.props.submitError?"-invalid":"")},a.a.createElement(y.a,{name:"cilMagnifyingGlass"})))))}}])&&C(t.prototype,n),r&&C(t,r),c}(r.Component);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var a=V(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,n,r,l=U(c);function c(){var e;R(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(M(e=l.call.apply(l,[this].concat(n))),"state",{username:"",password:""}),A(M(e),"handleChange",(function(t){e.setState(A({},t.target.name,t.target.value))})),A(M(e),"showForgetPasswordModal",(function(){e.props.updateModal({modalType:"forgetPasswordModal"})})),A(M(e),"handleSubmit",(function(t){var n=e.state,r=n.username,a=n.password;t.preventDefault(),e.props.userLoginFetch({username:r,password:a})})),e}return t=c,(n=[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return a.a.createElement(o.ab,{alignHorizontal:"center"},a.a.createElement(o.q,{md:"6"},a.a.createElement(o.s,{fluid:!0},a.a.createElement(o.ab,{className:"mb-2"},a.a.createElement(o.q,{md:"8",className:"mx-auto"},a.a.createElement(o.J,{width:"100%",src:"/static/front/images/signed-logo.png",className:"mb-2"}))),a.a.createElement(o.ab,{className:"mt-2 mb-2",alignHorizontal:"center"},a.a.createElement(o.q,{className:"mx-auto"},a.a.createElement("h1",{className:"fox-login-welcome"},"Welcome to FOX!"),a.a.createElement("p",{className:"fox-login-welcome"}," Please log in to your account."))),a.a.createElement(o.ab,{className:"mt-2 mb-2"},a.a.createElement(o.q,{className:"mx-auto"},a.a.createElement(o.B,{onSubmit:this.handleSubmit},a.a.createElement(g.a,null),a.a.createElement(o.C,null,a.a.createElement(o.M,null,a.a.createElement(o.O,null,a.a.createElement(o.P,{invalid:!0,className:"fox-input-before".concat(this.props.loginError?"-invalid":"")},a.a.createElement(y.a,{name:"cilUser"}))),a.a.createElement(o.K,{id:"username",name:"username",placeholder:"Username",value:t,onChange:this.handleChange,invalid:this.props.loginError,required:!0}),a.a.createElement(o.N,null,a.a.createElement(o.P,{className:"fox-input-after".concat(this.props.loginError?"-invalid":"")},a.a.createElement(y.a,{name:"blank"}))))),a.a.createElement(I,{inputName:"password",password:n,placeholder:"Password",submitError:this.props.loginError,handleChange:this.handleChange}),this.props.loginError?a.a.createElement("p",{className:"fox-form-invalid-feedback"},"The username or password you have entered is invalid. Please try again."):null,a.a.createElement(o.C,null,a.a.createElement(o.e,{shape:"pill",type:"submit",value:"Submit",color:"dark",block:!0},"Login"))),a.a.createElement(o.e,{type:"link",size:"sm",className:"align-self-center",onClick:this.showForgetPasswordModal},"Forgot password?"))))))}}])&&T(t.prototype,n),r&&T(t,r),c}(r.Component),z=Object(b.b)((function(e){return{currentUser:e.currentUser,loginError:e.loginError}}),(function(e){return{userLoginFetch:function(t){return e(Object(w.q)(t))},updateModal:function(t){var n=t.modalType,r=F(t,["modalType"]);return e(Object(w.p)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({modalType:n},r)))}}}))(Q);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Y(e);if(t){var a=Y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(c,e);var t,n,r,l=G(c);function c(){var e;H(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Z(X(e=l.call.apply(l,[this].concat(n))),"state",{username:e.props.username,password:"",password2:""}),Z(X(e),"handleChange",(function(t){e.setState(Z({},t.target.name,t.target.value),(function(){e.state.password!==e.state.password2?e.props.registerError():e.props.allowRegistration(e.props.registrationToken)}))})),Z(X(e),"handleSubmit",(function(t){t.preventDefault(),e.props.userRegisterFetch({password:e.state.password,token:e.props.registrationToken,is_active:!0})})),e}return t=c,(n=[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,r=e.password2;return a.a.createElement(o.ab,{alignHorizontal:"center"},a.a.createElement(o.q,{md:"6"},a.a.createElement(o.s,{fluid:!0},a.a.createElement(o.ab,{className:"mb-2"},a.a.createElement(o.q,{md:"8",className:"mx-auto"},a.a.createElement(o.J,{width:"100%",src:"/static/front/images/signed-logo.png",className:"mb-2"}))),a.a.createElement(o.ab,{className:"mt-2 mb-2",alignHorizontal:"center"},a.a.createElement(o.q,{className:"mx-auto"},a.a.createElement("h1",{className:"fox-login-welcome"},"Welcome to FOX!"),a.a.createElement("p",{className:"fox-login-welcome"}," You are trying to register as ",a.a.createElement("strong",null,t),".  Please, fill this form to finish your registration."))),a.a.createElement(o.ab,{className:"mt-2 mb-2"},a.a.createElement(o.q,{className:"mx-auto"},a.a.createElement(o.B,{onSubmit:this.handleSubmit},a.a.createElement(g.a,null),a.a.createElement(o.C,null,a.a.createElement(I,{inputName:"password",password:n,placeholder:"Password",submitError:this.props.registerErrorFlag,handleChange:this.handleChange}),a.a.createElement(I,{inputName:"password2",password:r,placeholder:"Confirm password",submitError:this.props.registerErrorFlag,handleChange:this.handleChange}),this.props.registerErrorFlag?a.a.createElement("p",{className:"fox-form-invalid-feedback"},"The suggested password is inappropriate. Please, Try to choose more sophisticated password and try again."):null),a.a.createElement(o.C,null,a.a.createElement(o.e,{shape:"pill",block:!0,type:"submit",color:"dark",disabled:this.state.password!==this.state.password2},"Register"))))))))}}])&&J(t.prototype,n),r&&J(t,r),c}(r.Component),ee=Object(b.b)((function(e){return{registerErrorFlag:e.registerError,registrationToken:e.registrationToken,errorMessage:e.errorMessage}}),(function(e){return{userRegisterFetch:function(t){return e(Object(w.r)(t))},registerError:function(){return e(Object(w.n)())},allowRegistration:function(t){return e(Object(w.a)(t))}}}))($)},651:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(12);t.a=function(e){return a.a.createElement(o.f,null,a.a.createElement(o.g,null,a.a.createElement(o.C,{key:"fg-".concat(e.document.id)},a.a.createElement(o.Q,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},a.a.createElement("h5",null,e.document.name)," "),e.document.url_to_doc?a.a.createElement(o.ab,null,a.a.createElement(o.q,null,a.a.createElement(o.R,{key:"dl-".concat(e.document.id),href:e.document.url_to_doc,target:"_blank",className:"btn btn-ghost-primary"},"Open this document in Google Docs"))):a.a.createElement(o.ab,null,a.a.createElement(o.q,{md:"3"},a.a.createElement(o.e,{variant:"outline",color:"primary",key:"cb-".concat(e.document.id),id:e.document.id,name:e.document.id,value:e.document.filename,onClick:e.downloadFile},"Download template for this document")),a.a.createElement(o.q,{md:"5"},a.a.createElement(o.Q,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},a.a.createElement("strong",null,"Upload filled up document:")," "),a.a.createElement(o.L,{key:"of-".concat(e.document.id),id:"file-".concat(e.document.id),name:"".concat(e.document.id),onChange:e.handleFileUpload}))))))}}}]);
//# sourceMappingURL=2.main.js.map