(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("64a9")},"44c9":function(e,t,a){},"4c4a":function(e,t,a){"use strict";a("44c9")},"56d7":function(e,t,a){"use strict";a.r(t);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation",{attrs:{"is-signed-in":e.isSignedIn},on:{signIn:e.signIn,signOut:e.signOut}}),a("AddPidFilter",{attrs:{"is-signed-in":e.isSignedIn,"auth-instance":e.authInstance}}),a("notifications",{attrs:{group:"app",position:"bottom left"}})],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticStyle:{width:"70%",padding:"20px","margin-left":"auto","margin-right":"auto","margin-top":"20px"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("label",{staticClass:"AddPidFilter__label",attrs:{for:"label"}},[e._v("GMail Label:")]),a("vue-simple-suggest",{staticClass:"AddPidFilter__input-select",attrs:{id:"label",name:"label",list:e.labelList,"max-suggestions":0,"filter-by-query":!0},model:{value:e.labelValue,callback:function(t){e.labelValue=t},expression:"labelValue"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:""===e.labelValue,expression:"labelValue === ''"}],staticClass:"AddPidFilter__error"},[e._v("* Select or enter a Gmail label for the filter to be applied to.")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isRealLabel,expression:"!isRealLabel"}],staticClass:"AddPidFilter__error"},[e._v("* Invalid label selected/entered.")]),a("v-text-field",{attrs:{label:"PID",placeholder:"ABCD",required:!0,required:""},model:{value:e.pidValue,callback:function(t){e.pidValue=t},expression:"pidValue"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:""===e.pidValue,expression:"pidValue === ''"}],staticClass:"AddPidFilter__error"},[e._v("* Must provide PID letters.")]),a("v-text-field",{attrs:{label:"Email list",placeholder:"email@gmail.com; email2@gmail.com",required:""},model:{value:e.emailListValue,callback:function(t){e.emailListValue=t},expression:"emailListValue"}}),e._e(),a("v-btn",{staticStyle:{"margin-top":"20px","background-color":"#62ae82 !important"},attrs:{"x-large":"",dark:"",color:"primary",disabled:!e.isSignedIn},on:{click:e.addToList}},[e._v("Add filter to List\n        ")]),a("v-btn",{staticStyle:{"margin-start":"20px","margin-top":"20px","background-color":"#ae6265 !important"},attrs:{"x-large":"",dark:"",disabled:!e.isSignedIn},on:{click:e.clearList}},[e._v("Clear Filter List\n        ")]),a("v-btn",{staticStyle:{"margin-start":"20px","margin-top":"20px","background-color":"#6278ae !important"},attrs:{"x-large":"",dark:"",disabled:!e.isSignedIn},on:{click:e.downloadFile}},[e._v("Download (.xml)\n        ")])],1),a("iframe",{staticStyle:{display:"none"},attrs:{id:"my_iframe"}}),a("v-spacer"),a("v-data-table",{attrs:{headers:e.headers,items:e.filterList,"items-per-page":10}})],1)],1)},s=[],l=a("a34a"),c=a.n(l),u=a("bc3a"),d=a.n(u),f=a("5111");a("c4c9");function p(e,t,a,n,i,r,o){try{var s=e[r](o),l=s.value}catch(c){return void a(c)}s.done?t(l):Promise.resolve(l).then(n,i)}function h(e){return function(){var t=this,a=arguments;return new Promise((function(n,i){var r=e.apply(t,a);function o(e){p(r,n,i,o,s,"next",e)}function s(e){p(r,n,i,o,s,"throw",e)}o(void 0)}))}}var g={name:"AddPidFilter",components:{VueSimpleSuggest:f["a"]},data:function(){return{labels:[],labelValue:"",pidValue:"",emailListValue:"",filterList:[],headers:[{text:"PID",align:"start",value:"pid"},{text:"Label",value:"label"},{text:"Emails",value:"email"}]}},props:["isSignedIn","authInstance"],watch:{authInstance:function(e){null!==e&&d.a.get("https://gmail.googleapis.com/gmail/v1/users/".concat(encodeURIComponent(e.currentUser.getBasicProfile().getEmail()),"/labels"),{headers:{Authorization:"Bearer ".concat(e.currentUser.getAuthResponse().access_token),"content-type":"application/json"}}).then(function(e){this.labels=e.data.labels}.bind(this)).catch((function(e){console.log(e)}))}},methods:{generateUniqueID:function(){var e=String.fromCharCode(Math.floor(25*Math.random()+65));do{var t=Math.floor(42*Math.random()+48);(t<58||t>64)&&(e+=String.fromCharCode(t))}while(e.length<32);return e},clearList:function(){this.filterList=[]},addToList:function(){this.verify()&&(this.filterList.push({label:this.fetchLabelobject().name,pid:this.pidValue,email:this.emailListValue}),this.labelValue="",this.pidValue="",this.emailListValue="",console.log(this.filterList))},addPidFilter:function(){var e=h(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.verify()){e.next=2;break}return e.abrupt("return");case 2:t=this.fetchLabelobject(),a=[],a.push({query:"".concat(this.pidValue)}),""!==this.emailListValue&&this.emailListValue.split("; ").forEach((function(e){a.push({to:"".concat(e)}),a.push({from:"".concat(e)})})),n=0;case 7:if(!(n<a.length)){e.next=13;break}return e.next=10,this.createFilter(t,a[n]);case 10:n++,e.next=7;break;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),verify:function(){return this.isRealLabel&&""!==this.labelValue&&""!==this.pidValue?!!this.authInstance||(this.sendNotification("Incorrect Login Details","error","Doesnt appear you are logged in, perhaps refreshing will fix?"),!1):(this.sendNotification("Form Not Filled out","error","Please fix errors in red before trying to create?"),!1)},fetchLabelobject:function(){var e=this,t={};return this.labels.forEach((function(a){a.name===e.labelValue&&(t=a)})),t},createFilter:function(){var e=h(c.a.mark((function e(t,a){var n=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.post("https://gmail.googleapis.com/gmail/v1/users/".concat(encodeURIComponent(this.authInstance.currentUser.getBasicProfile().getEmail()),"/settings/filters"),{id:this.generateUniqueID().toString(),criteria:a,action:{addLabelIds:["".concat(t.id)]}},{headers:{Authorization:"Bearer ".concat(this.authInstance.currentUser.getAuthResponse().access_token),"content-type":"application/json"}}).then((function(){n.sendNotification("Success!","success","Filter created for the following criteria: ".concat(JSON.stringify(a)))})).catch((function(e){n.sendNotification("Error code: ".concat(e.response.data.error.code),"error","Message: ".concat(e.response.data.error.message," >>> for filter criteria: ").concat(JSON.stringify(a)))})));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),sendNotification:function(e,t,a){console.log("Notification"),this.$notify({group:"app",title:e,type:t,duration:4e3,text:a})},downloadFile:function(){var e=this.filterList;if(0!==this.filterList.length){for(var t=[],a=function(a){t.push("<entry><category term=\"filter\"></category><apps:property name='hasTheWord' value='".concat(e[a].pid,"' />\n                   <apps:property name='label' value='").concat(e[a].label,"'/></entry>")),""!==e[a].email&&e[a].email.split("; ").forEach((function(n){t.push("<entry><category term=\"filter\"></category><apps:property name='to' value='".concat(n,"' />\n                   <apps:property name='label' value='").concat(e[a].label,"'/></entry>")),t.push("<entry><category term=\"filter\"></category><apps:property name='from' value='".concat(n,"' />\n                   <apps:property name='label' value='").concat(e[a].label,"'/></entry>"))}))},n=0;n<e.length;n++)a(n);var i="filters.xml",r=document.createElement("a"),o=new Blob(["<?xml version='1.0' encoding='UTF-8'?>\n<feed xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>\n".concat(t.join(""),"\n</feed>")],{type:"text/plain"});r.setAttribute("href",window.URL.createObjectURL(o)),r.setAttribute("download",i),r.dataset.downloadurl=["text/plain",r.download,r.href].join(":"),r.draggable=!0,r.classList.add("dragout"),r.click(),this.sendNotification("Success","success","File should have been downloaded as XML, please upload this document to your filters and add them or verify they are correct!")}else this.sendNotification("Error","error","Filter list is empty")}},computed:{labelList:function(){return this.labels.map((function(e){return e.name}))},isRealLabel:function(){var e=this,t=!1;return this.labels.forEach((function(a){a.name===e.labelValue&&(t=!0)})),t}}},m=g,b=(a("be35"),a("2877")),v=Object(b["a"])(m,o,s,!1,null,null,null),y=v.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{color:"#62ae82",dense:""}},[a("v-toolbar-title",{staticClass:"NavigationBar__title"},[e._v("GMail Filter Assistant")]),a("v-spacer"),e.isSignedIn?a("v-btn",{staticStyle:{"background-color":"#62ae82 !important"},attrs:{large:"",color:"success"},on:{click:e.signOut}},[e._v("Sign Out\n    ")]):a("v-btn",{staticStyle:{"background-color":"#62ae82 !important"},attrs:{large:""},on:{click:e.signIn}},[e._v("Sign In\n    ")])],1)],1)},x=[],L={name:"NavigationBar",props:["isSignedIn"],methods:{signIn:function(){this.$emit("signIn")},signOut:function(){this.$emit("signOut")}},computed:{signedIn:function(){return this.isSignedIn}}},I=L,_=(a("4c4a"),Object(b["a"])(I,w,x,!1,null,"bc1f3f20",null)),S=_.exports,k=(a("953f"),a("15fd")),V=a.n(k);n["default"].use(V.a,{apiKey:"AIzaSyA8aWGNiYwZUY8ArkeHy6V98QkqAJ1f2aA",clientId:"243568982452-6tqtb521vek7929r7uj54lh2tt7i2ol8.apps.googleusercontent.com",discoveryDocs:["https://gmail.googleapis.com/$discovery/rest?version=v1"],scope:"https://mail.google.com/ https://www.googleapis.com/auth/gmail.settings.basic"});var F={name:"app",components:{Navigation:S,AddPidFilter:y},data:function(){return{auth:null}},mounted:function(){this.signIn()},computed:{authInstance:function(){return this.auth},isSignedIn:function(){return null!==this.authInstance}},methods:{signIn:function(){var e=this;this.$gapi.login().then((function(t){e.auth=t}))},signOut:function(){var e=this;this.$gapi.logout().then((function(){e.auth=null}))}}},A=F,O=(a("034f"),Object(b["a"])(A,i,r,!1,null,null,null)),P=O.exports,j=a("5c96"),N=a("fcff"),C=a.n(N),M=a("4897"),$=a.n(M),B=(a("0fae"),[j["Button"],j["ButtonGroup"],j["Row"]]),E=function e(t){e.installed||($.a.use(C.a),B.map((function(e){t.component(e.name,e)})),t.use(j["Loading"].directive),t.prototype.$msgbox=j["MessageBox"],t.prototype.$alert=j["MessageBox"].alert,t.prototype.$prompt=j["MessageBox"].prompt,t.prototype.$confirm=j["MessageBox"].confirm,t.prototype.$message=j["Message"],t.prototype.$loading=j["Loading"].service,t.prototype.$notify=j["Notification"])},U={install:E},R=a("ee98"),D=a.n(R),q=a("ce5b"),T=a.n(q);a("bf40");n["default"].use(T.a);var G=new T.a({theme:{themes:{light:{primary:"#5C068C",secondary:"#8345A5",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),J=a("1f0b");n["default"].config.productionTip=!1,n["default"].use(U),n["default"].use(D.a),n["default"].use(J["a"]),new n["default"]({render:function(e){return e(P)},vuetify:G}).$mount("#app")},"64a9":function(e,t,a){},be35:function(e,t,a){"use strict";a("ceab")},ceab:function(e,t,a){}});
//# sourceMappingURL=app.1d8cc35e.js.map