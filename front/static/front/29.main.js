(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{736:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(166),c=n(95),l=n(165),i=n(632),u=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,l,"next",e)}function l(e){d(o,r,a,c,l,"throw",e)}c(void 0)}))}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=new(n(29).a),C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=_(n);function n(){var e;h(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return w(g(e=t.call.apply(t,[this].concat(o))),"state",{name:"",contractor:e.props.contractor,birthday:"",card_number_id:"",license_number:"",license_scan:"",passport:"",passport_scan:"",safety_green_card:"",safety_green_card_scan:"",position_in_company:"",safety_quiz_answer:"",personal_declaration:"",special_competency:"",special_competency_scan:"",registration_number:"",error:!1}),w(g(e),"handleChange",(function(t){e.setState(w({},t.target.name,t.target.value))})),w(g(e),"handleFileUpload",(function(t){e.setState(w({},t.target.name,t.target.files[0]))})),w(g(e),"handleSubmit",function(){var t=f(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=m(t,2),r=n[0],a=n[1];e.formData.append(r,a)})),t.next=7,v.createEntityWithFile("workers",e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Worker creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w(g(e),"componentDidMount",f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch();case 2:case"end":return t.stop()}}),t)})))),w(g(e),"render",(function(){return a.a.createElement(l.P,null,a.a.createElement(l.k,null,a.a.createElement(l.v,{onSubmit:e.handleSubmit},a.a.createElement(u.a,null),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"name"},"Name"),a.a.createElement(l.D,{id:"name",name:"name",placeholder:"Enter worker name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"birthday"},"Birthday"),a.a.createElement(l.D,{type:"date",id:"birthday",name:"birthday",value:e.state.birthday,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"card_number_id"},"Card number ID"),a.a.createElement(l.D,{id:"card_number_id",name:"card_number_id",placeholder:"Enter ID",value:e.state.card_number_id,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"license_number"},"License Number"),a.a.createElement(l.D,{id:"license_number",name:"license_number",placeholder:"Enter worker name",value:e.state.license_number,onChange:e.handleChange,required:!0}),a.a.createElement(l.K,{htmlFor:"license_scan"},"License scan"),a.a.createElement(l.F,{id:"license_scan",name:"license_scan",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"passport"},"Passport"),a.a.createElement(l.D,{id:"passport",name:"passport",placeholder:"Enter passport info",value:e.state.passport,onChange:e.handleChange,required:!0}),a.a.createElement(l.K,{htmlFor:"passport_scan"},"Passport scan"),a.a.createElement(l.F,{id:"passport_scan",name:"passport_scan",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"safety_green_card"},"Safety Green Card"),a.a.createElement(l.D,{id:"safety_green_card",name:"safety_green_card",placeholder:"Enter card info",value:e.state.safety_green_card,onChange:e.handleChange,required:!0}),a.a.createElement(l.K,{htmlFor:"safety_green_card_scan"},"Safety green card scan"),a.a.createElement(l.F,{id:"safety_green_card_scan",name:"safety_green_card_scan",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"special_competency"},"Special competency"),a.a.createElement(l.D,{id:"special_competency",name:"special_competency",placeholder:"Enter competency",value:e.state.special_competency,onChange:e.handleChange,required:!0}),a.a.createElement(l.K,{htmlFor:"special_competency_scan"},"Special competency scan"),a.a.createElement(l.F,{id:"special_competency_scan",name:"special_competency_scan",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"competency_issued_by"},"Competency issued by"),a.a.createElement(l.D,{id:"competency_issued_by",name:"competency_issued_by",placeholder:"Enter legal entity",value:e.state.competency_issued_by,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"registration_number"},"Registration number"),a.a.createElement(l.D,{id:"registration_number",name:"registration_number",placeholder:"Enter registration number",value:e.state.registration_number,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"position_in_company"},"Position in Company"),a.a.createElement(l.D,{id:"position_in_company",name:"position_in_company",placeholder:"Enter worker position",value:e.state.position_in_company,onChange:e.handleChange,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"safety_quiz_answer"},"Safety quiz answer"),a.a.createElement(l.F,{id:"safety_quiz_answer",name:"safety_quiz_answer",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.K,{htmlFor:"personal_declaration"},"Personal declaration"),a.a.createElement(l.F,{id:"personal_declaration",name:"personal_declaration",onChange:e.handleFileUpload,required:!0})),a.a.createElement(l.w,null,a.a.createElement(l.e,{type:"submit",color:"dark",variant:"outline",block:!0},"Create Worker")),e.state.error?a.a.createElement("p",null,e.state.error):null)))})),e}return n}(r.Component);t.default=Object(c.b)((function(e){return{contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(o.g)())}}}))(C)}}]);
//# sourceMappingURL=29.main.js.map