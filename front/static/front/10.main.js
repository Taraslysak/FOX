<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{633:function(t,e,r){"use strict";var n=r(1),o=r.n(n),a=r(47),c=r(22),i=r(56),u=r(12),l=r(63),s=r(167);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){m(a,n,o,c,i,"next",t)}function i(t){m(a,n,o,c,i,"throw",t)}c(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=j(t);if(e){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=new c.a,_=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(r,t);var e=g(r);function r(){var t;h(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return E(O(t=e.call.apply(e,[this].concat(a))),"state",{modal:!1}),E(O(t),"handleClick",function(){var e=d(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Extended"!==r){e.next=4;break}t.setModalVisibility(),e.next=6;break;case 4:return e.next=6,P.patchEntityOf("projects",t.props.item.id,{status:r}).then((function(){t.props.getProjectList()}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),E(O(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),E(O(t),"render",(function(){var e=t.state.modal;return"CliAdm"===t.props.role&&"Application processing"!==t.props.item.work_status?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.v,null,o.a.createElement(u.y,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(u.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},_.map((function(e,r){var n=y(Object.entries(e)[0],2),a=n[0],c=n[1];return o.a.createElement(u.w,{key:r,value:a,onClick:function(e){return t.handleClick(a,e)}},c)})))),o.a.createElement(s.a,p({show:e,setModalVisibility:t.setModalVisibility,projectId:t.props.item.id},t.props))):null})),t}return r}(n.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(i.i)())}}}))(k)},634:function(t,e,r){"use strict";var n=r(1),o=r.n(n),a=r(47),c=r(12),i=r(633);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(r,t);var e=p(r);function r(){var t;s(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return d(b(t=e.call.apply(e,[this].concat(a))),"state",{error:"",modal:!1}),d(b(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),d(b(t),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),d(b(t),"render",(function(){var e,r=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(c.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},d(e,r,(function(e){return o.a.createElement("td",null,o.a.createElement(c.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[r]))})),d(e,"application_status",(function(e){return o.a.createElement("td",null,o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),d(e,"work_status",(function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(i.a,l({key:e.id,item:e},t.props)))})),e)})))))})),t}return r}(n.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),null)(h)},636:function(t,e,r){"use strict";r.d(e,"a",(function(){return n.a})),r.d(e,"b",(function(){return S}));var n=r(634),o=r(1),a=r.n(o),c=r(47),i=r(12),u=r(63),l=r(633),s=r(22),f=r(56);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function d(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){d(a,n,o,c,i,"next",t)}function i(t){d(a,n,o,c,i,"throw",t)}c(void 0)}))}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=E(t);if(e){var o=E(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _=new s.a,k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(r,t);var e=w(r);function r(){var t;v(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return P(j(t=e.call.apply(e,[this].concat(o))),"state",{error:""}),P(j(t),"getEntityFromTableName",(function(){t.props.tableName.toLowercase()})),P(j(t),"callDeleteModal",(function(e){t.props.updateModal({modalType:"deleteModal",entity:"entity",confirmDelete:function(){return t.confirmDelete(e)}})})),P(j(t),"confirmDelete",function(){var e=h(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to delete"),n=t.props.tableName.toLowerCase().replace(" ","_"),e.next=4,_.deleteEntityOf(n,r).then((function(){t.props.updateList(t.props.role),t.props.updateModal("",{})})).catch((function(e){console.error(e),t.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P(j(t),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),P(j(t),"render",(function(){var e,r=t.props.fields?t.props.fields[0]:"username";return a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:a.a.createElement(i.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},P(e,r,(function(e){return a.a.createElement("td",null,a.a.createElement(i.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[r]))})),P(e,"application_status",(function(e){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),P(e,"work_status",(function(e){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),a.a.createElement(l.a,m({key:e.id,item:e},t.props)))})),P(e,"delete_item",(function(e,r){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return t.callDeleteModal(e.id)},block:!0},a.a.createElement(u.a,{name:"cilTrash"})))})),e)})))))})),t}return r}(o.Component),S=Object(c.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{updateModal:function(e){var r=e.modalType,n=y(e,["modalType"]);return t(Object(f.p)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({modalType:r},n)))}}}))(k)},751:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(636),c=r(56),i=r(47);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){s(a,n,o,c,i,"next",t)}function i(t){s(a,n,o,c,i,"throw",t)}c(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(t){switch(t){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,t);var e=b(r);function r(){var t;p(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return v(d(t=e.call.apply(e,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.setProjectId(t.props.match.params.id),e.next=3,t.props.getProfileFetch().then((function(){return t.props.getWorkerList(t.props.role)}));case 3:case"end":return e.stop()}}),e)})))),v(d(t),"render",(function(){return"Contr"==t.props.role?o.a.createElement(a.b,l({},t.props,{tableName:"Workers",fields:t.props.workerTable.fields,getBadge:g,tableData:t.props.workerTable.tableData,updateList:t.props.getWorkerList})):o.a.createElement(a.a,l({},t.props,{updateList:t.props.getWorkerList,tableName:"Workers",fields:t.props.workerTable.fields,getBadge:g,tableData:t.props.workerTable.tableData}))})),t}return r}(n.Component);e.default=Object(i.b)((function(t){return{workerTable:t.entityListTable,role:t.currentUser.role}}),(function(t){return{getProfileFetch:function(){return t(Object(c.h)())},getWorkerList:function(e){return t(Object(c.k)(e))},setProjectId:function(){return t(Object(c.o)())}}}))(w)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{632:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(26),i=n(166),u=n(165),l=n(60),s=n(634);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){b(a,r,o,c,i,"next",t)}function i(t){b(a,r,o,c,i,"throw",t)}c(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=new c.a,P=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(n,t);var e=w(n);function n(){var t;h(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return j(O(t=e.call.apply(e,[this].concat(a))),"state",{modal:!1}),j(O(t),"handleClick",function(){var e=d(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Extended"!==n){e.next=4;break}t.setModalVisibility(),e.next=6;break;case 4:return e.next=6,_.patchEntityOf("projects",t.props.item.id,{status:n}).then((function(){t.props.getProjectList()}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),j(O(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),j(O(t),"render",(function(){var e=t.state.modal;return"CliAdm"===t.props.role&&"Application processing"!==t.props.item.work_status?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.v,null,o.a.createElement(u.y,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(u.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},P.map((function(e,n){var r=y(Object.entries(e)[0],2),a=r[0],c=r[1];return o.a.createElement(u.w,{key:n,value:a,onClick:function(e){return t.handleClick(a,e)}},c)})))),o.a.createElement(s.b,p({show:e,setModalVisibility:t.setModalVisibility,projectId:t.props.item.id},t.props))):null})),t}return n}(r.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(i.i)())}}}))(S)},633:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(165),i=n(632);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=p(n);function n(){var t;s(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return d(m(t=e.call.apply(e,[this].concat(a))),"state",{error:"",modal:!1}),d(m(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),d(m(t),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),d(m(t),"render",(function(){var e,n=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(c.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},d(e,n,(function(e){return o.a.createElement("td",null,o.a.createElement(c.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[n]))})),d(e,"application_status",(function(e){return o.a.createElement("td",null,o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),d(e,"work_status",(function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(i.a,l({key:e.id,item:e},t.props)))})),e)})))))})),t}return n}(r.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),null)(h)},636:function(t,e,n){"use strict";n.d(e,"a",(function(){return r.a})),n.d(e,"b",(function(){return P}));var r=n(633),o=n(1),a=n.n(o),c=n(95),i=n(165),u=n(60),l=n(632),s=n(26),f=n(634);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){m(a,r,o,c,i,"next",t)}function i(t){m(a,r,o,c,i,"throw",t)}c(void 0)}))}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=new s.a,_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,t);var e=v(n);function n(){var t;d(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return E(g(t=e.call.apply(e,[this].concat(o))),"state",{delete_id:"",error:"",modal:!1}),E(g(t),"getEntityFromTableName",(function(){t.props.tableName.toLowercase()})),E(g(t),"callDeleteModal",(function(e){t.setState({delete_id:e},t.setModalVisibility)})),E(g(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),E(g(t),"confirmDelete",function(){var e=b(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.tableName.toLowerCase().replace(" ","_"),e.next=3,j.deleteEntityOf(r,n).then((function(){t.props.updateList(t.props.role),t.setModalVisibility()})).catch((function(e){console.error(e),t.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E(g(t),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),E(g(t),"render",(function(){var e,n=t.props.fields?t.props.fields[0]:"username",r=t.state,o=r.delete_id,c=r.modal;return a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:a.a.createElement(i.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},E(e,n,(function(e){return a.a.createElement("td",null,a.a.createElement(i.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[n]))})),E(e,"application_status",(function(e){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),E(e,"work_status",(function(e){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),a.a.createElement(l.a,y({key:e.id,item:e},t.props)))})),E(e,"delete_item",(function(e,n){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return t.callDeleteModal(e.id)},block:!0},a.a.createElement(u.a,{name:"cilTrash"})))})),e)}))),a.a.createElement(f.a,{setModalVisibility:t.setModalVisibility,danger:c,entity:"entity",confirmDelete:function(){return t.confirmDelete(o)}})))})),t}return n}(o.Component),P=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(_)},770:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(636),c=n(166),i=n(95);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){s(a,r,o,c,i,"next",t)}function i(t){s(a,r,o,c,i,"throw",t)}c(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){switch(t){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,t);var e=m(n);function n(){var t;p(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return v(d(t=e.call.apply(e,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return t.props.getSpecialCompetencyList({worker_id:t.props.match.params.id},t.props.role)}));case 2:case"end":return e.stop()}}),e)})))),v(d(t),"render",(function(){return"Contr"==t.props.role?o.a.createElement(a.b,l({},t.props,{tableName:"Worker Special Competencies",fields:t.props.specialCompetencyListTable.fields,getBadge:w,tableData:t.props.specialCompetencyListTable.tableData,updateList:t.props.getSpecialCompetencyList})):o.a.createElement(a.a,l({},t.props,{tableName:"Worker Special Competencies",fields:t.props.specialCompetencyListTable.fields,getBadge:w,tableData:t.props.specialCompetencyListTable.tableData}))})),t}return n}(r.Component);e.default=Object(i.b)((function(t){return{specialCompetencyListTable:t.entityListTable,role:t.currentUser.role}}),(function(t){return{getProfileFetch:function(){return t(Object(c.h)())},getSpecialCompetencyList:function(e,n){return t(Object(c.j)(e,n))}}}))(g)}}]);
>>>>>>> develop
//# sourceMappingURL=10.main.js.map