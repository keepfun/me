webpackJsonp([1],{"3L1Q":function(t,e){t.exports={"0000":{msg:[{type:"me",content:"很高兴见到你"},{type:"me",content:"你有什么想了解的呢？"},{type:"me",content:"哈哈哈哈"}],res:"0001"},"0001":{msg:[{type:"user",content:"哈哈哈",res:"0000"},{type:"user",content:"...",res:"0000"}]}}},NHnr:function(t,e,n){"use strict";function o(t){n("hNMq")}function s(t){n("yDT9")}function a(t){n("Ud6/")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("TWX9"),c={name:"app"},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},h=[],d={render:r,staticRenderFns:h},u=d,l=n("/Xao"),m=o,_=l(c,u,!1,m,null,null),f=_.exports,p=n("zO6J"),v={data:function(){return{}},props:["data","show","disabled"],methods:{handleClick:function(t,e){this.$emit("itemClick",t,e)}}},y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{"action-sheet":!0,show:t.show}},[n("div",{staticClass:"head"},[t._v("的撒大大")]),t._v(" "),t._l(t.data,function(e,o){return n("div",{staticClass:"question",on:{click:function(n){t.handleClick(e.res,o)}}},[t._v(t._s(e.content)+"\n    ")])})],2),t._v(" "),n("div",{class:{"action-mask":!0,"action-mask-show":t.show},on:{click:function(e){t.handleClick("mask")}}})])},w=[],g={render:y,staticRenderFns:w},C=g,k=n("/Xao"),b=s,x=k(v,C,!1,b,null,null),T=x.exports,F=n("3L1Q"),A=n.n(F),E={name:"me",data:function(){return{footer_text:"hahaha",chat_msgs:[],action_show:!1,action_data:[],footer_disabled:!0}},components:{"action-sheet":T},mounted:function(){var t=A.a["0000"];this.chat_from_me(t)},methods:{chat_from_me:function(t){this.chat_delay(t.msg),this.action_data=A.a[t.res].msg},chat_from_user:function(t){this.chat_delay(t)},receiveFromChild:function(t,e){"mask"==t&&(this.action_show=!1),this.action_show=!1;var n=[],o=this.action_data[e];n.push(o),this.chat_from_user(n),this.chat_from_me(A.a[t])},chat_push:function(t){this.chat_msgs.push(t);var e=document.getElementById("chatContent");setTimeout(function(){e.scrollTo(0,e.scrollHeight)},0)},chat_delay:function(t){var e=this,n=t.length;if("me"==t[0].type){this.footer_disabled=!0;for(var o=0;o<n;o++)!function(n){e.footer_text="正在输入...",setTimeout(function(){e.chat_push(t[n])},1e3*(n+1))}(o);setTimeout(function(){e.footer_text="hahaha",e.footer_disabled=!1},1e3*n)}else this.chat_push(t[0])},showActions:function(){this.footer_disabled||(this.action_show=!0)}}},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"phone"}},[n("div",{staticClass:"me-container"},[n("div",{staticClass:"me-head"},[t._v("\n      与他聊天中...\n    ")]),t._v(" "),n("div",{staticClass:"me-body",attrs:{id:"chatContent"}},t._l(t.chat_msgs,function(e,o){return n("div",{key:"item",staticClass:"msg-box"},[n("div",{class:{msg:!0,"msg-left":"me"==e.type,"msg-right":"user"==e.type}},[t._v(t._s(e.content)+"\n        ")])])})),t._v(" "),n("div",{class:{"me-footer":!0,"me-footer-disabled":t.footer_disabled},on:{click:t.showActions}},[t._v("\n      "+t._s(t.footer_text)+"\n    ")]),t._v(" "),n("action-sheet",{attrs:{show:t.action_show,data:t.action_data},on:{itemClick:t.receiveFromChild}})],1)])},X=[],$={render:N,staticRenderFns:X},q=$,D=n("/Xao"),H=a,M=D(E,q,!1,H,null,null),R=M.exports;i.a.use(p.a);var J=new p.a({routes:[{path:"/",name:"me",component:R}]}),L=n("iDdd"),O=n.n(L);i.a.config.productionTip=!1,O.a.attach(document.body),new i.a({el:"#app",router:J,template:"<App/>",components:{App:f}})},"Ud6/":function(t,e){},hNMq:function(t,e){},yDT9:function(t,e){}},["NHnr"]);