(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,r){t.exports=r(36)},33:function(t,e,r){},34:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"SET_DAT",function(){return S}),r.d(a,"setDat",function(){return E});var n={};r.r(n),r.d(n,"SET_RESULT",function(){return f}),r.d(n,"setResult",function(){return j});var s={};r.r(s),r.d(s,"SET_CLEAR",function(){return O}),r.d(s,"ClearDat",function(){return y});var u=r(0),c=r.n(u),o=r(18),i=r(10),l=r(3),d=r(4),b=r(6),p=r(5),h=r(7),m=(r(30),r(33),function(t){function e(){return Object(l.a)(this,e),Object(b.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"onDatBtnClick",value:function(){this.props.setDat(this.props.value)}},{key:"render",value:function(){return c.a.createElement("button",{onClick:this.onDatBtnClick.bind(this),className:this.props.className},this.props.value)}}]),e}(c.a.Component)),v=r(1),S="SET_DAT";function E(t){return{type:S,payload:t}}var f="SET_RESULT";function j(t){return{type:"SET_RESULT",payload:t}}var O="SET_CLEAR";function y(t){return{type:O,payload:t}}r(34);var g=function(t){function e(){return Object(l.a)(this,e),Object(b.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"renderSquare",value:function(t,e,r){return c.a.createElement(m,{value:t,setDat:e,className:r})}},{key:"render",value:function(){var t=this.props.pageActions.setDat,e=this.props.ResultActions.setResult,r=this.props.ClearActions.ClearDat;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",className:"result-cls",placeholder:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",value:this.props.result,readonly:!0}),c.a.createElement("div",{className:"status"},"\u0412\u0435\u0434\u0438\u0442\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0432\u0442\u043e\u0440\u043e\u0435 \u0447\u0438\u0441\u043b\u043e  \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ="),c.a.createElement("div",{className:"board-row"},this.renderSquare(1,t,"but-class1"),this.renderSquare(2,t,"but-class1"),this.renderSquare(3,t,"but-class1"),this.renderSquare("+",t,"mdc-button mdc-button--primary mdc-button--raised")),c.a.createElement("div",{className:"board-row"},this.renderSquare(4,t,"but-class1"),this.renderSquare(5,t,"but-class1"),this.renderSquare(6,t,"but-class1"),this.renderSquare("-",t,"mdc-button mdc-button--primary mdc-button--raised")),c.a.createElement("div",{className:"board-row"},this.renderSquare(7,t,"but-class1"),this.renderSquare(8,t,"but-class1"),this.renderSquare(9,t,"but-class1"),this.renderSquare("*",t,"mdc-button mdc-button--primary mdc-button--raised")),c.a.createElement("div",{className:"board-row"},this.renderSquare(0,t,"but-class1"),this.renderSquare("<",r,"but-class2"),this.renderSquare("=",e,"but-class2"),this.renderSquare("/",t,"mdc-button mdc-button--primary mdc-button--raised")))}}]),e}(c.a.Component);var q=Object(i.b)(function(t){return{result:t.result}},function(t){return{pageActions:Object(v.b)(a,t),ResultActions:Object(v.b)(n,t),ClearActions:Object(v.b)(s,t)}})(g),w=(r(35),function(t){function e(){return Object(l.a)(this,e),Object(b.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(q,null))}}]),e}(u.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=r(11),C="SET_RESULT",k="SET_DAT",A="SET_CLEAR",D={result:"0"};function R(t){var e=t,r=e.split("+");return r.length>1?(parseFloat(r[0])+parseFloat(r[1])).toString():(r=e.split("-")).length>1?(parseFloat(r[0])-parseFloat(r[1])).toString():(r=e.split("*")).length>1?(parseFloat(r[0])*parseFloat(r[1])).toString():(r=e.split("/")).length>1?(parseFloat(r[0])/parseFloat(r[1])).toString():void 0}var _=r(20),N=r.n(_),F=Object(v.c)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(T.a)({},t,{result:t.result+e.payload});case C:return Object(T.a)({},t,{result:R(t.result)});case A:return Object(T.a)({},t,{result:t.result.substr(0,t.result.length-1)});default:return t}},{result:""},Object(v.a)(N.a));Object(o.render)(c.a.createElement(i.a,{store:F},c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.76bc4a6e.chunk.js.map