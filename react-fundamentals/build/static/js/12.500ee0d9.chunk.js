/*! For license information please see 12.500ee0d9.chunk.js.LICENSE.txt */
(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[12],{205:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(1),s=n(208);function u(e){var t=e.onSubmitUsername,n=o.useState(""),u=Object(r.a)(n,2),a=u[0],c=u[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"usernameInput",children:"Username:"}),Object(s.jsx)("input",{id:"usernameInput",type:"text",onChange:function(e){c(e.target.value.toLowerCase())},value:a})]}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})}t.default=function(){return Object(s.jsx)("div",{style:{minWidth:400},children:Object(s.jsx)(u,{onSubmitUsername:function(e){return alert("You entered: ".concat(e))}})})}},208:function(e,t,n){"use strict";e.exports=n(209)},209:function(e,t,n){"use strict";n(43);var r=n(1),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,s={},i=null,f=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:f,props:s,_owner:u.current}}t.jsx=i,t.jsxs=i}}]);
//# sourceMappingURL=12.500ee0d9.chunk.js.map