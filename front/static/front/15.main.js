<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{673:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(1),o=n.n(r),c=n(12),u=n(22);n(47);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=new u.a,h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=l(n);function n(){var t;a(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return m(p(t=e.call.apply(e,[this].concat(u))),"state",{items:[],show:!1}),m(p(t),"handleClick",(function(){t.setState({show:!t.state.show})})),m(p(t),"componentDidMount",(function(){b.getEntityList("activities",{project_id:t.props.projectId}).then((function(e){t.setState({items:e})})).catch((function(t){return console.log(t)}))})),m(p(t),"render",(function(){var e=t.state,n=e.items,r=e.show;return o.a.createElement(c.f,null,o.a.createElement(c.i,null,o.a.createElement("strong",null,"Activity log"),o.a.createElement(c.e,{color:"link",onClick:t.handleClick},r?"Hide":"Show"),o.a.createElement(c.r,{show:r},o.a.createElement(c.g,null,o.a.createElement(c.S,{flush:!0},n?n.map((function(t){return o.a.createElement(c.T,{key:t.id},t.message)})):null)))))})),t}return n}(r.Component)},756:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(47),u=n(26),i=n(56),a=n(12),f=n(673);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,t);var e=y(n);function n(){var t;s(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return w(b(t=e.call.apply(e,[this].concat(c))),"componentDidMount",(function(){t.props.getProfileFetch()})),w(b(t),"render",(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.ab,null,o.a.createElement(a.q,null,o.a.createElement(f.a,{projectId:t.props.match.params.id}))),o.a.createElement(a.ab,null,o.a.createElement(a.q,null,t.props.username?o.a.createElement(a.z,{ratio:"16by9"},o.a.createElement("iframe",{src:"".concat(window.location.origin,"/api/ptw/").concat(t.props.match.params.id)})):o.a.createElement(u.a,{to:""}))))})),t}return n}(r.Component);e.default=Object(c.b)((function(t){return{username:t.currentUser.username}}),(function(t){return{getProfileFetch:function(){return t(Object(i.h)())}}}))(d)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{632:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(95),a=n(26),i=n(166),u=n(165),l=n(60),s=n(634);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){m(c,r,o,a,i,"next",t)}function i(t){m(c,r,o,a,i,"throw",t)}a(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=new a.a,S=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(n,t);var e=w(n);function n(){var t;h(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return E(O(t=e.call.apply(e,[this].concat(c))),"state",{modal:!1}),E(O(t),"handleClick",function(){var e=d(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Extended"!==n){e.next=4;break}t.setModalVisibility(),e.next=6;break;case 4:return e.next=6,P.patchEntityOf("projects",t.props.item.id,{status:n}).then((function(){t.props.getProjectList()}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E(O(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),E(O(t),"render",(function(){var e=t.state.modal;return"CliAdm"===t.props.role&&"Application processing"!==t.props.item.work_status?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.v,null,o.a.createElement(u.y,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(u.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},S.map((function(e,n){var r=y(Object.entries(e)[0],2),c=r[0],a=r[1];return o.a.createElement(u.w,{key:n,value:c,onClick:function(e){return t.handleClick(c,e)}},a)})))),o.a.createElement(s.b,p({show:e,setModalVisibility:t.setModalVisibility,projectId:t.props.item.id},t.props))):null})),t}return n}(r.Component);e.a=Object(c.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(i.i)())}}}))(_)},633:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(95),a=n(165),i=n(632);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=p(n);function n(){var t;s(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return d(b(t=e.call.apply(e,[this].concat(c))),"state",{error:"",modal:!1}),d(b(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),d(b(t),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),d(b(t),"render",(function(){var e,n=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(a.ab,null,o.a.createElement(a.q,null,o.a.createElement(a.f,null,o.a.createElement(a.i,{className:"d-flex justify-content-between"},o.a.createElement(a.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(a.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(a.g,null,o.a.createElement(a.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},d(e,n,(function(e){return o.a.createElement("td",null,o.a.createElement(a.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[n]))})),d(e,"application_status",(function(e){return o.a.createElement("td",null,o.a.createElement(a.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),d(e,"work_status",(function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(a.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(i.a,l({key:e.id,item:e},t.props)))})),e)})))))})),t}return n}(r.Component);e.a=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(h)},743:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(633),a=n(166),i=n(95);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){s(c,r,o,a,i,"next",t)}function i(t){s(c,r,o,a,i,"throw",t)}a(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){switch(t){case"Pending":return"primary";case"Approved":return"success";case"Rejected":return"danger";default:return"primary"}},g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,t);var e=b(n);function n(){var t;p(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return v(d(t=e.call.apply(e,[this].concat(a))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return t.props.getApprovalList()}));case 2:case"end":return e.stop()}}),e)})))),v(d(t),"render",(function(){return o.a.createElement(c.a,l({},t.props,{tableName:"Approvals",fields:t.props.projectTable.fields,getBadge:w,tableData:t.props.projectTable.tableData}))})),t}return n}(r.Component);e.default=Object(i.b)((function(t){return{projectTable:t.entityListTable}}),(function(t){return{getProfileFetch:function(){return t(Object(a.h)())},getApprovalList:function(){return t(Object(a.b)())},setApprovalId:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return t(setApprovalId())}))}}))(g)}}]);
>>>>>>> develop
//# sourceMappingURL=15.main.js.map