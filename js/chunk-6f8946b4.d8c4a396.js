(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f8946b4"],{"128a":function(t,e,a){"use strict";var s=a("17e9"),o=a.n(s);o.a},"17e9":function(t,e,a){},3160:function(t,e,a){"use strict";var s=a("b1ab"),o=a.n(s);o.a},5437:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{staticClass:"top"}),a("div",{staticClass:"left"}),a("div",{staticClass:"center"},[a("OperationFloor",{ref:"operationFloor"})],1),a("div",{staticClass:"right"},[a("div",{staticClass:"save",on:{click:t.saveHotSpotInfo}},[t._v("\n      保存\n    ")]),a("div",{staticClass:"preview",on:{click:function(e){return t.$router.push("/preview")}}},[t._v("\n      预览\n    ")]),a("div",{staticClass:"preview",on:{click:t.clearHotSpotInfo}},[t._v("\n      清空所有\n    ")])])])},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operationFloor"},[s("div",{staticClass:"imgBox",on:{mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.changeStop())}}},[s("div",{staticClass:"container"},[s("img",{ref:"backgroundImg",attrs:{src:a("7bbd"),ondragstart:"return false;",oncontextmenu:"return false;",onselect:"document.selection.empty();",alt:""},on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseDown(e))}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.caseShow,expression:"caseShow"}],staticClass:"area",style:{width:t.areaWidth+"px",height:t.areaHeight+"px",left:t.starX+"px",top:t.starY+"px"}}),t._l(t.areaData,(function(e,a){return s("AreaBox",{key:a,attrs:{id:a,"area-init":e},on:{"update:areaInit":function(t){e=t},"update:area-init":function(t){e=t},DelAreaBox:t.DelAreaBox,addURL:t.addURL}})}))],2)])])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"areaBox",style:{width:t.areaInit.areaWidth+"px",height:t.areaInit.areaHeight+"px",left:t.areaInit.starX+"px",top:t.areaInit.starY+"px"},on:{dblclick:function(e){t.editBoxShow=!0},mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseDown(e))},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseUp(e))}}},[a("span",{staticClass:"promptText"},[t._v(t._s(t.promptText))]),a("div",{staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.del()}}}),a("div",{staticClass:"shape",on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.shapeDown(e))},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseUp(e))}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editBoxShow,expression:"editBoxShow"}],staticClass:"editBox",on:{mousedown:function(t){t.stopPropagation()}}},[a("div",{staticClass:"editCase"},[a("div",{staticClass:"caseTitle"},[a("span",[t._v("热区设置")]),a("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.editBoxShow=!1}}})]),a("div",{staticClass:"caseContent"},[a("div",{staticClass:"urlMethod"},[a("div",{class:{active:0===t.urlMessage.methods},on:{click:function(e){t.urlMessage.methods=0}}},[t._v("\n            选择商品\n          ")]),a("div",{class:{active:1===t.urlMessage.methods},on:{click:function(e){t.urlMessage.methods=1}}},[t._v("\n            输入链接\n          ")])]),a("div",{staticClass:"selectBox"},[a("div",{staticClass:"openWay",on:{click:function(e){t.urlMessage.select="_blank"}}},[a("div",{class:["dot",{active:"_blank"===t.urlMessage.select}]}),a("div",{staticClass:"text"},[t._v("\n              新窗口打开\n            ")])]),a("div",{staticClass:"openWay",on:{click:function(e){t.urlMessage.select="_self"}}},[a("div",{class:["dot",{active:"_self"===t.urlMessage.select}]}),a("div",{staticClass:"text"},[t._v("\n              当前窗口打开\n            ")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.urlMessage.methods,expression:"urlMessage.methods===0"}],staticClass:"contentBox"},[a("div",{staticClass:"searchBox"},[a("span",[t._v("输入查询：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("div",{staticClass:"btn"},[t._v("\n              查询\n            ")])]),a("div",{staticClass:"searchList"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",height:"300"}},[a("el-table-column",{attrs:{label:"选择",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleSelect(e.$index,e.row,e)}}},[t._v("\n                    "+t._s(0===t.urlMessage.methods&&e.row.shopNo===t.urlMessage.sign?"已选":"选择")+"\n                  ")])]}}])}),a("el-table-column",{attrs:{prop:"shopName",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"shopNo",label:"商品货号",width:"150"}}),a("el-table-column",{attrs:{prop:"shopSize",label:"规格",width:"150"}}),a("el-table-column",{attrs:{prop:"shopPrice",label:"价格",width:"100"}})],1),a("el-pagination",{staticStyle:{padding:"30px 0 10px 20px"},attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":t.pageSizeChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.urlMessage.methods,expression:"urlMessage.methods===1"}],staticClass:"contentBox"},[a("div",{staticClass:"searchBox handle"},[a("span",[t._v("链接地址：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.urlMessage.url,expression:"urlMessage.url"}],staticClass:"urlInput",attrs:{type:"text",placeholder:"请输入URL链接地址（如http://www.baidu.com)"},domProps:{value:t.urlMessage.url},on:{input:function(e){e.target.composing||t.$set(t.urlMessage,"url",e.target.value)}}})])]),a("div",{staticClass:"btnBox"},[a("div",{staticClass:"yes",on:{click:t.addURL}},[t._v("\n            确定\n          ")]),a("div",{staticClass:"no",on:{click:function(e){t.editBoxShow=!1}}},[t._v("\n            取消\n          ")])])])])])])},c=[],l=(a("c5f6"),{name:"AreaBox",props:{areaInit:{type:Object,default:function(){}},id:{type:Number,default:null}},data:function(){return{editBoxShow:!1,search:"小黄人",promptText:"双击设置热区",move:{startX:0,starY:0,start1X:0,start1Y:0},urlMessage:{methods:1,select:"_blank",url:"",sign:null},tableData:[{shopName:"Iphone666",shopNo:"146666",shopSize:"土豪金",shopPrice:"$1"},{shopName:"Iphone666",shopNo:"146666",shopSize:"土豪金",shopPrice:"$1"},{shopName:"Iphone666",shopNo:"146666",shopSize:"土豪金",shopPrice:"$1"},{shopName:"Iphone666",shopNo:"146666",shopSize:"土豪金",shopPrice:"$1"},{shopName:"Iphone666",shopNo:"146666",shopSize:"土豪金",shopPrice:"$1"}]}},methods:{del:function(){this.$emit("DelAreaBox",this.id)},addURL:function(){""===this.urlMessage.url?alert("请输入"):(this.$emit("addURL",this.id,this.urlMessage),this.editBoxShow=!1)},mouseDown:function(t){var e=this;if(this.starX=t.clientX,this.starY=t.clientY,!document.onmousemove){var a=this.areaInit.starX,s=this.areaInit.starY;document.onmousemove=function(t){e.areaInit.starX=a+t.clientX-e.starX,e.areaInit.starY=s+t.clientY-e.starY}}},mouseUp:function(){document.onmousemove=null},shapeDown:function(t){var e=this;if(this.star1X=t.clientX,this.star1Y=t.clientY,!document.onmousemove){var a=this.areaInit.areaWidth,s=this.areaInit.areaHeight;document.onmousemove=function(t){e.areaInit.areaWidth=a+t.clientX-e.star1X,e.areaInit.areaHeight=s+t.clientY-e.star1Y}}},handleSelect:function(t,e,a){this.urlMessage.sign=e.shopNo,console.log(t),console.log(e),console.log(a)},pageSizeChange:function(t){console.log(t)}}}),u=l,p=(a("7c6c"),a("2877")),h=Object(p["a"])(u,r,c,!1,null,"49049feb",null),d=h.exports,f={name:"OperationFloor",components:{AreaBox:d},data:function(){return{starX:0,starY:0,areaWidth:0,areaHeight:0,caseShow:!1,nowImgWidth:null,areaData:[]}},mounted:function(){var t=JSON.parse(localStorage.getItem("areaData"));t&&t.length&&(this.areaData=t)},methods:{mouseDown:function(t){var e=this;this.caseShow=!0,this.starX=t.layerX,this.starY=t.layerY,document.onmousemove||(document.onmousemove=function(t){e.areaWidth=t.layerX-e.starX,e.areaHeight=t.layerY-e.starY})},changeStop:function(){if(document.onmousemove=null,this.caseShow&&this.areaWidth>10&&this.areaHeight>10){var t={starX:this.starX,starY:this.starY,areaWidth:this.areaWidth,areaHeight:this.areaHeight,nowImgWidth:this.$refs.backgroundImg.width,url:null,target:"_self"};this.areaData.push(t)}this.caseShow=!1,this.starX=0,this.starY=0,this.areaWidth=0,this.areaHeight=0},DelAreaBox:function(t){this.areaData.splice(t,1)},addURL:function(t,e){this.areaData[t].url=e.url,this.areaData[t].target=e.select,this.$message.success("添加成功"),console.log(this.areaData)},saveAreaData:function(){this.areaData===[]?this.$message.error("没有可保存的信息"):(localStorage.setItem("areaData",JSON.stringify(this.areaData)),this.$message.success("保存成功"))},clearHotSpotInfo:function(){localStorage.removeItem("areaData"),this.areaData=[]}}},v=f,m=(a("3160"),Object(p["a"])(v,n,i,!1,null,"01e80789",null)),g=m.exports,b={name:"Layout",components:{OperationFloor:g},methods:{saveHotSpotInfo:function(){this.$refs.operationFloor.saveAreaData()},clearHotSpotInfo:function(){this.$refs.operationFloor.clearHotSpotInfo()}}},w=b,x=(a("128a"),Object(p["a"])(w,s,o,!1,null,"16ab15d0",null));e["default"]=x.exports},"5dbc":function(t,e,a){var s=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&s(n)&&o&&o(t,n),t}},"7bbd":function(t,e,a){t.exports=a.p+"img/hotAreaImage.b88d9caa.png"},"7c6c":function(t,e,a){"use strict";var s=a("bfbc"),o=a.n(s);o.a},"8b97":function(t,e,a){var s=a("d3f4"),o=a("cb7c"),n=function(t,e){if(o(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:s(t,a),t}}({},!1):void 0),check:n}},aa77:function(t,e,a){var s=a("5ca1"),o=a("be13"),n=a("79e5"),i=a("fdef"),r="["+i+"]",c="​",l=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),p=function(t,e,a){var o={},r=n((function(){return!!i[t]()||c[t]()!=c})),l=o[t]=r?e(h):i[t];a&&(o[a]=l),s(s.P+s.F*r,"String",o)},h=p.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},b1ab:function(t,e,a){},bfbc:function(t,e,a){},c5f6:function(t,e,a){"use strict";var s=a("7726"),o=a("69a8"),n=a("2d95"),i=a("5dbc"),r=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,p=a("86cc").f,h=a("aa77").trim,d="Number",f=s[d],v=f,m=f.prototype,g=n(a("2aeb")(m))==d,b="trim"in String.prototype,w=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():h(e,3);var a,s,o,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:s=2,o=49;break;case 79:case 111:s=8,o=55;break;default:return+e}for(var i,c=e.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>o)return NaN;return parseInt(c,s)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(g?c((function(){m.valueOf.call(a)})):n(a)!=d)?i(new v(w(e)),a,f):w(e)};for(var x,y=a("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)o(v,x=y[_])&&!o(f,x)&&p(f,x,u(v,x));f.prototype=m,m.constructor=f,a("2aba")(s,d,f)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6f8946b4.d8c4a396.js.map