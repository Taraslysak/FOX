(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{633:function(t,e,r){"use strict";var n=r(1),o=r.n(n),c=r(95),a=r(165);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y(t);if(e){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(r,t);var e=s(r);function r(){var t;i(this,r);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return m(p(t=e.call.apply(e,[this].concat(c))),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),m(p(t),"render",(function(){var e,r=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(a.U,null,o.a.createElement(a.k,null,o.a.createElement(a.f,null,o.a.createElement(a.i,{className:"d-flex justify-content-between"},o.a.createElement(a.j,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(a.L,{className:"btn btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(a.g,null,o.a.createElement(a.o,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,footer:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},m(e,r,(function(e){return o.a.createElement("td",null,o.a.createElement(a.e,{color:"link",onClick:function(r){t.alertOnClick(e.id,r)}},e[r]))})),m(e,"project_name",(function(e){return o.a.createElement("td",null,o.a.createElement(a.e,{color:"link",onClick:function(r){t.alertOnClick(e.id,r)}},e.project_name))})),e)})))))})),t}return r}(n.Component);e.a=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(b)},668:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));r(633);var n=r(1),o=r.n(n),c=r(95),a=r(29),u=r(166),i=r(165),l=r(60);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,c=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,o,c,a){try{var u=t[c](a),i=u.value}catch(t){return void r(t)}u.done?e(i):Promise.resolve(i).then(n,o)}var y=new a.a,m=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],b=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.value,o=e.props,t.next=3,y.patchEntityOf("projects",o.item.id,{status:n}).then((function(){o.getProjectList()}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){p(c,n,o,a,u,"next",t)}function u(t){p(c,n,o,a,u,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}(),d=Object(c.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(u.h)())}}}))((function(t){return"CliAdm"===t.role&&"Application processing"!==t.item.work_status?o.a.createElement(i.p,null,o.a.createElement(i.s,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(i.r,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},m.map((function(e,r){var n=s(Object.entries(e)[0],2),c=n[0],a=n[1];return o.a.createElement(i.q,{key:r,value:c,onClick:function(e){return b({value:c,props:t},e)}},a)})))):null}));function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=P(t);if(e){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?E(t):e}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(r,t);var e=j(r);function r(){var t;w(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return _(E(t=e.call.apply(e,[this].concat(c))),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),_(E(t),"render",(function(){return o.a.createElement(i.U,null,o.a.createElement(i.k,null,o.a.createElement(i.f,null,o.a.createElement(i.i,{className:"d-flex justify-content-between"},o.a.createElement(i.j,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(i.L,{className:"btn btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(i.g,null,o.a.createElement(i.o,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,footer:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:{name:function(e){return o.a.createElement("td",null,o.a.createElement(i.L,{to:"".concat(t.props.match.url,"/").concat(e.id)},e.name))},application_status:function(e){return o.a.createElement("td",null,o.a.createElement(i.a,{color:t.props.getBadge(e.application_status)},e.application_status))},work_status:function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(i.a,{color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(d,v({key:e.id,item:e},t.props)))}}})))))})),t}return r}(n.Component),k=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(S)},736:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),c=r(95),a=r(668),u=r(166);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e,r,n,o,c,a){try{var u=t[c](a),i=u.value}catch(t){return void r(t)}u.done?e(i):Promise.resolve(i).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){s(c,n,o,a,u,"next",t)}function u(t){s(c,n,o,a,u,"throw",t)}a(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w=function(t){switch(t){case"Created":return"secondary";case"Submitted":return"warning";case"Approved":return"success";case"Rejected":return"danger";case"Application processing":return"secondary";case"Ready to start":return"success";case"Works started":return"info";case"Works finished":return"warning";case"Extended":return"primary";case"Closed":return"dark";default:return"primary"}},g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,t);var e=m(r);function r(){var t;p(this,r);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return v(d(t=e.call.apply(e,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.setProjectId(t.props.match.params.id),e.next=3,t.props.getProfileFetch().then((function(){return t.props.getProjectList()}));case 3:case"end":return e.stop()}}),e)})))),v(d(t),"render",(function(){return o.a.createElement(a.a,l({},t.props,{tableName:"Projects",fields:t.props.projectTable.fields,getBadge:w,tableData:t.props.projectTable.tableData}))})),t}return r}(n.Component);e.default=Object(c.b)((function(t){return{projectTable:t.entityListTable}}),(function(t){return{getProfileFetch:function(){return t(Object(u.g)())},getProjectList:function(){return t(Object(u.h)())},setProjectId:function(){return t(Object(u.m)())}}}))(g)}}]);
//# sourceMappingURL=8.main.js.map