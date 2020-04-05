webpackJsonp([1],{"+l7u":function(e,t){},"/b9y":function(e,t){e.exports={_from:"@twilio/webrtc@2.4.0",_id:"@twilio/webrtc@2.4.0",_inBundle:!1,_integrity:"sha512-o7Tm+5j+FYZn9t25cYHwTS87WXMkfubMFvmXtfFfrtSEJhQhxXwn7kWKjxnew/VmNm6hAVZbCrepPfTvQTyDuA==",_location:"/@twilio/webrtc",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"@twilio/webrtc@2.4.0",name:"@twilio/webrtc",escapedName:"@twilio%2fwebrtc",scope:"@twilio",rawSpec:"2.4.0",saveSpec:null,fetchSpec:"2.4.0"},_requiredBy:["/twilio-video"],_resolved:"https://registry.npmjs.org/@twilio/webrtc/-/webrtc-2.4.0.tgz",_shasum:"8757382ab49cc079c9c40ef507682cb082b25036",_spec:"@twilio/webrtc@2.4.0",_where:"/home/katheesh/live-class/node_modules/twilio-video",author:{name:"Manjesh Malavalli",email:"mmalavalli@twilio.com"},bugs:{url:"https://github.com/twilio/twilio-webrtc.js/issues"},bundleDependencies:!1,contributors:[{name:"Mark Roberts",email:"mroberts@twilio.com"},{name:"Ryan Rowland",email:"rrowland@twilio.com"}],deprecated:!1,description:"WebRTC-related APIs and shims used by twilio-video.js",devDependencies:{browserify:"^14.4.0",envify:"^4.1.0",eslint:"^4.4.1",istanbul:"^0.4.5",karma:"^1.7.0","karma-browserify":"^5.1.1","karma-chrome-launcher":"^2.2.0","karma-firefox-launcher":"^1.0.1","karma-mocha":"^1.3.0","karma-safari-launcher":"^1.0.0","karma-spec-reporter":"0.0.31",mocha:"^3.5.0","npm-run-all":"^4.0.2","release-tool":"^0.2.2",rimraf:"^2.6.1","travis-multirunner":"^4.2.3",watchify:"^3.9.0","webrtc-adapter":"^6.4.8"},homepage:"https://github.com/twilio/twilio-webrtc.js#readme",keywords:["shim","twilio","video","webrtc"],license:"BSD-3-Clause",main:"./lib/index.js",name:"@twilio/webrtc",repository:{type:"git",url:"git+https://github.com/twilio/twilio-webrtc.js.git"},scripts:{build:"npm-run-all clean lint test",clean:"rimraf coverage",lint:"eslint ./lib",test:"npm-run-all test:*","test:integration":"npm-run-all test:integration:*","test:integration:adapter":"karma start karma/integration.adapter.conf.js","test:integration:native":"karma start karma/integration.conf.js","test:unit":"istanbul cover node_modules/mocha/bin/_mocha -- ./test/unit/index.js"},version:"2.4.0"}},"1uuo":function(e,t){},"5EWS":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),i=r("+4za"),a=r.n(i),o=new s.default;s.default.use(a.a);var n={name:"AddRoom",data:function(){return{room_name:""}},methods:{createNewRoom:function(e){e?(this.room_name="",o.$emit("new_room",e)):s.default.$toast.open({message:"please provide a class name",type:"error"})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.createNewRoom(e.room_name)}}},[r("div",{staticClass:"form-group mb-2 classForm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.room_name,expression:"room_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Class Name"},domProps:{value:e.room_name},on:{input:function(t){t.target.composing||(e.room_name=t.target.value)}}})]),e._v(" "),r("li",[r("a",{on:{click:function(t){return e.createNewRoom(e.room_name)}}},[e._v(" \n             Add New Class\n           ")])])])])},staticRenderFns:[]};var c=r("VU/8")(n,l,!1,function(e){r("RujF")},null,null).exports,d={name:"Rooms",data:function(){return{rooms:[{id:1,name:"Common Class"}],roomCount:1,loading:!1}},components:{AddRoom:c},created:function(){var e=this;o.$on("new_room",function(t){e.roomCount++,e.rooms.push({id:e.roomCount,name:t})})},methods:{showRoom:function(e){o.$emit("show_room",e)}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar-container"},[r("div",{staticClass:"sidebar-logo"},[e._v("\n    Live-Class\n  ")]),e._v(" "),r("ul",{staticClass:"sidebar-navigation"},[r("AddRoom"),e._v(" "),r("li",{staticClass:"header"},[e._v("Classes")]),e._v(" "),e._l(e.rooms,function(t){return r("li",{key:t.id,on:{click:function(r){return e.showRoom(t.name)}}},[r("a",{attrs:{href:"#"}},[e._v("\n        "+e._s(t.name)+"\n      ")])])})],2)])},staticRenderFns:[]};var u=r("VU/8")(d,m,!1,function(e){r("hQIL")},"data-v-524f2ade",null).exports,p=r("c/Tr"),v=r.n(p),f=r("Xxa5"),h=r.n(f),w=r("exGp"),b=r.n(w),g=r("RKtl"),k=r.n(g),_=r("mtWM"),j=r.n(_),y={name:"Video",data:function(){return{loading:!1,data:{},localTrack:!1,remoteTrack:"",activeRoom:"",previewTracks:"",identity:"",roomName:null}},props:["username"],created:function(){var e=this;o.$on("show_room",function(t){e.createChat(t)}),window.addEventListener("beforeunload",this.leaveRoomIfJoined)},methods:{getAccessToken:function(){var e=this;return b()(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://live-class.herokuapp.com/token?identity="+e.username);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}))()},dispatchLog:function(e){o.$emit("new_log",e)},attachTracks:function(e,t){e.forEach(function(e){t.appendChild(e.attach())})},attachParticipantTracks:function(e,t){var r=v()(e.tracks.values());this.attachTracks(r,t)},detachTracks:function(e){e.forEach(function(e){e.detach().forEach(function(e){e.remove()})})},detachParticipantTracks:function(e){var t=v()(e.tracks.values());this.detachTracks(t)},leaveRoomIfJoined:function(){this.activeRoom&&this.activeRoom.disconnect()},createChat:function(e){var t=this;this.loading=!0;var r=this;this.getAccessToken().then(function(s){r.roomName=null;var i=s.data.token,a={name:e,audio:!0,video:{width:200}};t.leaveRoomIfJoined(),document.getElementById("remoteTrack").innerHTML="",k.a.connect(i,a).then(function(t){r.dispatchLog("Successfully joined a class: "+e),r.activeRoom=t,r.roomName=e,r.loading=!1,t.participants.forEach(function(e){var t=document.getElementById("remoteTrack");r.attachParticipantTracks(e,t)}),t.on("participantConnected",function(e){r.dispatchLog("Joining: '"+e.identity+"'")}),t.on("trackAdded",function(e,t){r.dispatchLog(t.identity+" added track: "+e.kind);var s=document.getElementById("remoteTrack");r.attachTracks([e],s)}),t.on("trackRemoved",function(e,t){r.dispatchLog(t.identity+" removed track: "+e.kind),r.detachTracks([e])}),t.on("participantDisconnected",function(e){r.dispatchLog("Participant '"+e.identity+"' left the class"),r.detachParticipantTracks(e)}),r.localTrack||Object(g.createLocalVideoTrack)().then(function(e){document.getElementById("localTrack").appendChild(e.attach()),r.localTrack=!0})})})}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-container"},[s("div",{staticClass:"roomTitle"},[e.loading?s("span",[e._v(" Loading... "+e._s(e.roomName))]):!e.loading&&e.roomName?s("span",[e._v(" Connected to "+e._s(e.roomName))]):s("span",[e._v("Select a class to get started "),s("br"),e._v(" "),s("img",{staticClass:"banerpic",attrs:{height:"200",src:r("Vg9C")}})])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"cols-sm-3"},[t("div",{staticClass:"remotevideoframe",attrs:{id:"remoteTrack"}})]),this._v(" "),t("div",{staticClass:"cols-sm-3"},[t("div",{staticClass:"localvideoframe",attrs:{id:"localTrack"}})])])}]};var x=r("VU/8")(y,C,!1,function(e){r("Y3yy")},null,null).exports;s.default.use(a.a);var T={name:"Logs",data:function(){return{logs:[],logCount:0}},created:function(){o.$on("new_log",function(e){s.default.$toast.open({message:e,type:"info",duration:5e3})})}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var E=r("VU/8")(T,R,!1,function(e){r("5EWS")},"data-v-0c3d877b",null).exports;s.default.use(a.a);var S={name:"App",data:function(){return{username:"",authenticated:!1}},components:{Rooms:u,Video:x,Logs:E,AddRoom:c},methods:{submitUsername:function(e){if(!e)return s.default.$toast.open({message:"please provide a username",type:"error"});this.authenticated=!0}}},A={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.authenticated?s("div",[s("Rooms"),e._v(" "),s("Video",{attrs:{username:e.username}}),e._v(" "),s("Logs")],1):s("div",[s("div",{staticClass:"username"},[s("center",[s("img",{attrs:{src:r("Vg9C"),height:"120"}}),e._v(" "),s("br"),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.submitUsername(e.username)}}},[s("div",{staticClass:"form-group mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group mb-2"},[s("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[e._v("Enter!")])])])])],1)])])},staticRenderFns:[]};var N=r("VU/8")(S,A,!1,function(e){r("+l7u")},null,null).exports,I=r("/ocq"),L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var V=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},L,!1,function(e){r("1uuo")},"data-v-d8ec41bc",null).exports;s.default.use(I.a);var P=new I.a({routes:[{path:"/",name:"HelloWorld",component:V}]});r("bmbJ");s.default.use(a.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:P,components:{App:N},template:"<App/>"})},RujF:function(e,t){},Vg9C:function(e,t,r){e.exports=r.p+"static/img/app-logo.c96542c.png"},XRh8:function(e,t){e.exports={_from:"twilio-video@1.20.1",_id:"twilio-video@1.20.1",_inBundle:!1,_integrity:"sha512-y79bvvB1jhSf6z0eAqGJewLUqpBd3SPEvJvFxpFWIkaMs9Z5vAffBoTf+uws2brGZnfE0aBZL4hVEaGfgdh7vg==",_location:"/twilio-video",_phantomChildren:{"async-limiter":"1.0.1","safe-buffer":"5.1.2",ultron:"1.1.1"},_requested:{type:"version",registry:!0,raw:"twilio-video@1.20.1",name:"twilio-video",escapedName:"twilio-video",rawSpec:"1.20.1",saveSpec:null,fetchSpec:"1.20.1"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/twilio-video/-/twilio-video-1.20.1.tgz",_shasum:"160df40ca55f3d69b583c8080ce670b028fddd95",_spec:"twilio-video@1.20.1",_where:"/home/katheesh/live-class",author:{name:"Mark Andrus Roberts",email:"mroberts@twilio.com"},browser:{ws:"./src/ws.js",xmlhttprequest:"./src/xmlhttprequest.js"},bugs:{url:"https://github.com/twilio/twilio-video.js/issues"},bundleDependencies:!1,contributors:[{name:"Ryan Rowland",email:"rrowland@twilio.com"},{name:"Manjesh Malavalli",email:"mmalavalli@twilio.com"},{name:"Makarand Patwardhan",email:"mpatwardhan@twilio.com"}],dependencies:{"@twilio/sip.js":"^0.7.7","@twilio/webrtc":"2.4.0",ws:"^3.3.1",xmlhttprequest:"^1.8.0"},deprecated:!1,description:"Twilio Video JavaScript library",devDependencies:{"@types/express":"^4.11.0","@types/node":"^8.5.1","@types/selenium-webdriver":"^3.0.8","@types/ws":"^3.2.1","babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1",browserify:"^14.3.0",cheerio:"^0.22.0",chromedriver:"2.28.0",electron:"^5.0.1",envify:"^4.0.0",eslint:"^4.9.0",express:"^4.16.2",geckodriver:"1.4.0","ink-docstrap":"^1.3.2",inquirer:"^7.0.0","is-docker":"^2.0.0",istanbul:"^0.4.5",jsdoc:"^3.5.5","json-loader":"^0.5.7",karma:"^1.6.0","karma-browserify":"^5.1.1","karma-chrome-launcher":"^2.0.0","karma-electron":"^6.1.0","karma-firefox-launcher":"^1.0.1","karma-htmlfile-reporter":"^0.3.8","karma-junit-reporter":"^1.2.0","karma-mocha":"^1.3.0","karma-safari-launcher":"^1.0.0","karma-spec-reporter":"0.0.32",mocha:"^3.2.0","npm-run-all":"^4.0.2",puppeteer:"^1.12.2","release-tool":"^0.2.2",requirejs:"^2.3.3",rimraf:"^2.6.1","selenium-webdriver":"3.3.0","simple-git":"^1.126.0",sinon:"^4.0.1","travis-multirunner":"^4.0.0","ts-node":"4.0.1",tslint:"5.8.0",twilio:"^2.11.1",typescript:"2.6.2","uglify-js":"^2.8.22","vinyl-fs":"^2.4.4","vinyl-source-stream":"^1.1.0",watchify:"^3.11.1","webrtc-adapter":"^4.1.1"},engines:{node:">=0.12"},homepage:"https://twilio.com",keywords:["twilio","webrtc","library","javascript","video","rooms"],license:"BSD-3-Clause",main:"./es5/index.js",name:"twilio-video",repository:{type:"git",url:"git+https://github.com/twilio/twilio-video.js.git"},scripts:{build:"npm-run-all clean lint docs cover test:integration build:es5 build:js build:min.js test:umd","build:es5":"rimraf ./es5 && babel lib -d es5","build:js":"node ./scripts/build.js ./src/twilio-video.js ./LICENSE.md ./dist/twilio-video.js","build:min.js":'uglifyjs ./dist/twilio-video.js -o ./dist/twilio-video.min.js --comments "/^! twilio-video.js/" -b beautify=false,ascii_only=true',"build:quick":"npm-run-all clean lint docs build:es5 build:js build:min.js","build:travis":"npm-run-all clean lint docs cover test:integration:travis build:es5 build:js build:min.js test:umd test:framework",clean:"rimraf ./coverage ./es5 ./dist",cover:"istanbul cover node_modules/mocha/bin/_mocha -- ./test/unit/index.js",docs:"node ./scripts/docs.js ./dist/docs",lint:"eslint ./lib ./test/*.js ./test/framework/*.js ./test/lib/*.js ./test/integration/** ./test/unit/**",test:"npm-run-all test:unit test:integration","test:crossbrowser":"npm-run-all test:crossbrowser:*","test:crossbrowser:build":"npm-run-all test:crossbrowser:build:*","test:crossbrowser:build:browser":"cd ./test/crossbrowser && browserify lib/crossbrowser/src/browser/index.js > src/browser/index.js","test:crossbrowser:build:clean":"rimraf ./test/crossbrowser/lib ./test/crossbrowser/src/browser/index.js","test:crossbrowser:build:lint":"cd ./test/crossbrowser && tslint --project tsconfig.json","test:crossbrowser:build:tsc":"cd ./test/crossbrowser && tsc","test:crossbrowser:test":"cd ./test/crossbrowser && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:framework":"npm-run-all test:framework:angular test:framework:no-framework test:framework:react","test:framework:angular":"npm-run-all test:framework:angular:*","test:framework:angular:install":"cd ./test/framework/twilio-video-angular && rimraf ./node_modules package-lock.json && npm install","test:framework:angular:run":"mocha ./test/framework/twilio-video-angular.js","test:framework:no-framework":"npm-run-all test:framework:no-framework:*","test:framework:no-framework:run":"mocha ./test/framework/twilio-video-no-framework.js","test:framework:react":"npm-run-all test:framework:react:*","test:framework:react:build":"cd ./test/framework/twilio-video-react && npm run build","test:framework:react:install":"cd ./test/framework/twilio-video-react && rimraf ./node_modules package-lock.json && npm install","test:framework:react:run":"mocha ./test/framework/twilio-video-react.js","test:framework:react:test":"node ./scripts/framework.js twilio-video-react","test:integration":"node ./scripts/karma.js karma/integration.conf.js","test:integration:adapter":"node ./scripts/karma.js karma/integration.adapter.conf.js","test:integration:travis":"node ./scripts/integration.js","test:sdkdriver":"npm-run-all test:sdkdriver:*","test:sdkdriver:build":"npm-run-all test:sdkdriver:build:*","test:sdkdriver:build:clean":"rimraf ./test/lib/sdkdriver/lib ./test/lib/sdkdriver/test/integration/browser/index.js","test:sdkdriver:build:lint":"cd ./test/lib/sdkdriver && tslint --project tsconfig.json","test:sdkdriver:build:tsc":"cd ./test/lib/sdkdriver && tsc --rootDir src","test:sdkdriver:test":"npm-run-all test:sdkdriver:test:*","test:sdkdriver:test:integration":"npm-run-all test:sdkdriver:test:integration:*","test:sdkdriver:test:integration:browser":"cd ./test/lib/sdkdriver/test/integration && browserify browser/browser.js > browser/index.js","test:sdkdriver:test:integration:run":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:sdkdriver:test:unit":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/unit/spec/**/*.ts","test:umd":"mocha ./test/umd/index.js","test:unit":"mocha ./test/unit/index.js"},title:"Twilio Video",version:"1.20.1"}},Y3yy:function(e,t){},bmbJ:function(e,t){},eJJr:function(e,t){e.exports={_args:[["@twilio/sip.js@0.7.7","/home/katheesh/live-class"]],_from:"@twilio/sip.js@0.7.7",_id:"@twilio/sip.js@0.7.7",_inBundle:!1,_integrity:"sha1-z/UPZvmyldRvIZc3tyeAx9Dm31I=",_location:"/@twilio/sip.js",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"@twilio/sip.js@0.7.7",name:"@twilio/sip.js",escapedName:"@twilio%2fsip.js",scope:"@twilio",rawSpec:"0.7.7",saveSpec:null,fetchSpec:"0.7.7"},_requiredBy:["/twilio-video"],_resolved:"https://registry.npmjs.org/@twilio/sip.js/-/sip.js-0.7.7.tgz",_spec:"0.7.7",_where:"/home/katheesh/live-class",author:{name:"OnSIP",email:"developer@onsip.com",url:"http://sipjs.com/authors/"},browser:{"./src/environment.js":"./src/environment_browser.js"},bugs:{url:"https://github.com/onsip/SIP.js/issues"},contributors:[{url:"https://github.com/onsip/SIP.js/blob/master/THANKS.md"}],description:"A simple, intuitive, and powerful JavaScript signaling library",devDependencies:{beefy:"^2.1.5",browserify:"^4.1.8",grunt:"~0.4.0","grunt-browserify":"^4.0.1","grunt-cli":"~0.1.6","grunt-contrib-copy":"^0.5.0","grunt-contrib-jasmine":"^1.0.3","grunt-contrib-jshint":">0.5.0","grunt-contrib-uglify":"~0.2.0","grunt-peg":"~1.3.1","grunt-trimtrailingspaces":"^0.4.0",pegjs:"^0.8.0","release-tool":"^0.2.2"},engines:{node:">=0.12"},homepage:"http://sipjs.com",keywords:["sip","websocket","webrtc","library","javascript"],license:"MIT",main:"src/index.js",name:"@twilio/sip.js",repository:{type:"git",url:"git+https://github.com/onsip/SIP.js.git"},scripts:{build:"grunt build",repl:"beefy test/repl.js --open",test:"grunt travis --verbose"},title:"SIP.js",version:"0.7.7"}},hQIL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a85fc4fb26f5fb1b10dc.js.map