(function(e){function t(t){for(var o,l,c=t[0],s=t[1],a=t[2],u=0,f=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},i=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0bb3356b"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var a=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=a;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"順番ワイヤ",active:""}},[r("SequenceWire")],1),r("b-tab",{attrs:{title:"複雑ワイヤ"}},[r("ComplicatedWire")],1)],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("b-row",[r("b-btn",{on:{click:e.clearSequenceWire}},[e._v("クリア")])],1),r("b-card-group",{staticClass:"sequence_wire",attrs:{deck:""}},[r("b-card",{attrs:{"border-variant":"light",header:"赤いワイヤの出現回数","header-bg-variant":"light"}},[r("b-container",{attrs:{fluid:"sm"}},[r("b-row",{staticClass:"text-center"},[r("b-col",[e._v("ワイヤの出現回数")]),r("b-col",[e._v("切るべき接続先")])],1),e._l(e.sequenceWire.red,(function(t,o){return r("b-row",{key:o,staticClass:"text-center",class:{activeColor:t.isColor},on:{click:function(e){t.isColor=!t.isColor}}},[r("b-col",[e._v(e._s(o+1)+"番目の出現（赤）")]),r("b-col",[e._v(e._s(t.text))])],1)}))],2)],1),r("b-card",{attrs:{"border-variant":"light",header:"赤いワイヤの出現回数","header-bg-variant":"light"}},[r("b-container",{attrs:{fluid:"sm"}},[r("b-row",[r("b-col",[e._v("ワイヤの出現回数")]),r("b-col",[e._v("切るべき接続先")])],1),e._l(e.sequenceWire.blue,(function(t,o){return r("b-row",{key:o,class:{activeColor:t.isColor},on:{click:function(e){t.isColor=!t.isColor}}},[r("b-col",[e._v(e._s(o+1)+"番目の出現（青）")]),r("b-col",[e._v(e._s(t.text))])],1)}))],2)],1),r("b-card",{attrs:{"border-variant":"light",header:"赤いワイヤの出現回数","header-bg-variant":"light"}},[r("b-container",{attrs:{fluid:"sm"}},[r("b-row",[r("b-col",[e._v("ワイヤの出現回数")]),r("b-col",[e._v("切るべき接続先")])],1),e._l(e.sequenceWire.black,(function(t,o){return r("b-row",{key:o,class:{activeColor:t.isColor},on:{click:function(e){t.isColor=!t.isColor}}},[r("b-col",[e._v(e._s(o+1)+"番目の出現（黒）")]),r("b-col",[e._v(e._s(t.text))])],1)}))],2)],1)],1)],1)},c=[],s=(r("159b"),{name:"SequenceWire",data:function(){return{sequenceWire:{red:[{isColor:!1,text:"C"},{isColor:!1,text:"B"},{isColor:!1,text:"A"},{isColor:!1,text:"AかC"},{isColor:!1,text:"B"},{isColor:!1,text:"AかC"},{isColor:!1,text:"AかBかC"},{isColor:!1,text:"AかB"},{isColor:!1,text:"B"}],blue:[{isColor:!1,text:"B"},{isColor:!1,text:"AかC"},{isColor:!1,text:"B"},{isColor:!1,text:"A"},{isColor:!1,text:"B"},{isColor:!1,text:"BかC"},{isColor:!1,text:"C"},{isColor:!1,text:"AかC"},{isColor:!1,text:"A"}],black:[{isColor:!1,text:"AかBかC"},{isColor:!1,text:"AかC"},{isColor:!1,text:"B"},{isColor:!1,text:"AかC"},{isColor:!1,text:"B"},{isColor:!1,text:"BかC"},{isColor:!1,text:"AかB"},{isColor:!1,text:"C"},{isColor:!1,text:"C"}]}}},methods:{clearSequenceWire:function(){var e=function(e){return e.isColor=!1};this.sequenceWire.red.forEach(e),this.sequenceWire.blue.forEach(e),this.sequenceWire.black.forEach(e)}}}),a=s,u=(r("f232"),r("2877")),d=Object(u["a"])(a,l,c,!1,null,"05d9f3fc",null),f=d.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("鋭意製作中")])},h=[],p={name:"ComplicatedWire",data:function(){return{selectedCase:[],selectedWire:[]}},computed:{},methods:{clearCheckboxCase:function(){this.selectedCase=[]},clearCheckboxWire:function(){this.selectedWire=[]},cut:function(){var e=this,t=function(t){return e.selectedWire.some((function(e){return console.log("t:",t,e),t.some((function(t){return e==t}))}))},r=function(t){return e.selectedCase.some((function(e){return e==t}))},o="切る",n="切らない",i=n;return 0==this.selectedWire.length&&(i=o),1==this.selectedWire.length&&t(["star"])&&(i=o),2==this.selectedWire.length&&t(r("battery"))&&(i=o),t(["red"])&&(1==this.selectedWire.length&&r("odd")&&(i=o),2==this.selectedWire.length&&t(["star"])&&(i=o),!t(["blue"])&&r("battery")&&(i=o)),t(["blue"])&&(1==this.selectedWire.length&&r("odd")&&(i=o),!t(["red"])&&r("parallel")&&(i=o)),t(["red","blue"])&&(!t(["star"])&&r("odd")&&(i=o),3==this.selectedWire.length&&t(["star"])&&r("parallel")&&(i=o)),i}}},C=p,v=Object(u["a"])(C,b,h,!1,null,null,null),m=v.exports,x={components:{SequenceWire:f,ComplicatedWire:m}},_=x,g=(r("5c0b"),Object(u["a"])(_,n,i,!1,null,null,null)),W=g.exports,y=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("SequenceWire")},k=[],q={name:"Home",components:{SequenceWire:f}},j=q,A=Object(u["a"])(j,w,k,!1,null,null,null),O=A.exports;o["default"].use(y["a"]);var B=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],S=new y["a"]({mode:"history",base:"/",routes:B}),E=S,P=r("2f62");o["default"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=r("5f5b");r("f9e3"),r("2dd8");o["default"].use($["a"]),o["default"].config.productionTip=!1,new o["default"]({router:E,store:T,render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},f232:function(e,t,r){"use strict";r("f8c7")},f8c7:function(e,t,r){}});
//# sourceMappingURL=app.eb0c82af.js.map