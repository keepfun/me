webpackJsonp([1],{"06AJ":function(t,n){},NHnr:function(t,n,e){"use strict";function s(t){e("ullW")}function o(t){e("06AJ")}function i(t){e("YekP")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("TWX9"),c={name:"app"},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},h=[],l={render:r,staticRenderFns:h},u=l,d=e("/Xao"),f=s,m=d(c,u,!1,f,null,null),_=m.exports,p=e("zO6J"),v={data:function(){return{}},props:["data","show"],methods:{handleClick:function(t){this.$emit("itemClick")}}},g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{class:{"action-sheet":!0,show:t.show}},[e("div",{staticClass:"head"},[t._v(t._s(t.data.title))]),t._v(" "),t._l(t.data.questions,function(n){return e("div",{staticClass:"question",on:{click:function(e){t.handleClick(n.key)}}},[t._v(t._s(n.q)+"\n    ")])})],2),t._v(" "),e("div",{class:{"action-mask":!0,"action-mask-show":t.show}})])},w=[],k={render:g,staticRenderFns:w},y=k,x=e("/Xao"),C=o,b=x(v,y,!1,C,null,null),A=b.exports,q={name:"me",data:function(){return{footer_text:"hahaha",chat_msgs:[],action_show:!1,action_data:{title:"向我问点什么呢？",questions:[{q:"爱好",key:"hobby"}]}}},components:{"action-sheet":A},mounted:function(){var t=[{msg:"你好哇",position:"left",type:"text"},{msg:"很高兴认识你",position:"left",type:"text"},{msg:"现在我们开始对话吧",position:"left",type:"text"}];this.chat_delay(t)},methods:{chat:function(t){this.chat_msgs.push(t)},chat_delay:function(t){for(var n=this,e=t.length,s=0;s<e;s++)!function(e){n.footer_text="正在输入...",setTimeout(function(){n.chat(t[e])},1e3*e)}(s);setTimeout(function(){n.footer_text="hahaha"},1e3*(e-1))},test:function(){this.chat_msgs.push({msg:"呵呵",position:"right"})},showActions:function(){this.action_show=!0,console.log("hahah")},test1:function(){this.action_show=!1}}},J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"phone"}},[e("div",{staticClass:"me-container"},[e("div",{staticClass:"me-head"},[t._v("\n      与他聊天中...\n    ")]),t._v(" "),e("div",{staticClass:"me-body"},t._l(t.chat_msgs,function(n,s){return e("div",{key:"item",staticClass:"msg-box"},[e("div",{class:{msg:!0,"msg-left":"left"==n.position,"msg-right":"right"==n.position}},[t._v(t._s(n.msg)+"\n        ")])])})),t._v(" "),e("div",{staticClass:"me-footer",on:{click:t.showActions}},[t._v("\n      "+t._s(t.footer_text)+"\n    ")]),t._v(" "),e("action-sheet",{attrs:{show:t.action_show,data:t.action_data},on:{itemClick:t.test1}})],1)])},T=[],X={render:J,staticRenderFns:T},$=X,E=e("/Xao"),F=i,P=E(q,$,!1,F,null,null),R=P.exports;a.a.use(p.a);var W=new p.a({routes:[{path:"/",name:"me",component:R}]}),H=e("iDdd"),N=e.n(H);a.a.config.productionTip=!1,N.a.attach(document.body),new a.a({el:"#app",router:W,template:"<App/>",components:{App:_}})},YekP:function(t,n){},ullW:function(t,n){}},["NHnr"]);