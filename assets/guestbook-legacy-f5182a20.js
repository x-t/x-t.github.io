System.register(["./404-legacy-93f293d8.js"],(function(e,n){"use strict";return{setters:[null],execute:function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};function n(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function u(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}s((r=r.apply(e,n||[])).next())}))}function t(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(s){u=[6,s],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}function r(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError;var i,o,a="1.6.0";!function(e){e[e.Success=0]="Success",e[e.Undefined=-1]="Undefined",e[e.NotFunction=-2]="NotFunction",e[e.UnexpectedBehaviour=-3]="UnexpectedBehaviour",e[e.Null=-4]="Null"}(i||(i={})),function(e){e.Awesomium="awesomium",e.Cef="cef",e.CefSharp="cefsharp",e.CoachJS="coachjs",e.Electron="electron",e.FMiner="fminer",e.Geb="geb",e.NightmareJS="nightmarejs",e.Phantomas="phantomas",e.PhantomJS="phantomjs",e.Rhino="rhino",e.Selenium="selenium",e.Sequentum="sequentum",e.SlimerJS="slimerjs",e.WebDriverIO="webdriverio",e.WebDriver="webdriver",e.HeadlessChrome="headless_chrome",e.Unknown="unknown"}(o||(o={}));var u,s,c=function(n){function t(e,r){var i=n.call(this,r)||this;return i.state=e,i.name="BotdError",Object.setPrototypeOf(i,t.prototype),i}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,n),t}(Error);function d(e,n){return-1!==e.indexOf(n)}function f(e,n){return-1!==e.indexOf(n)}function l(e){return Object.getOwnPropertyNames(e)}function v(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var r=function(n){if("string"==typeof n){if(d(e,n))return{value:!0}}else if(null!=function(e,n){if("find"in e)return e.find(n);for(var t=0;t<e.length;t++)if(n(e[t],t,e))return e[t]}(e,(function(e){return n.test(e)})))return{value:!0}},i=0,o=n;i<o.length;i++){var a=r(o[i]);if("object"==typeof a)return a.value}return!1}function w(e){return e.reduce((function(e,n){return e+(n?1:0)}),0)}function p(){var e,n,t=window,r=navigator;return w(["webkitPersistentStorage"in r,"webkitTemporaryStorage"in r,0===r.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in t,"BatteryManager"in t,"webkitMediaStream"in t,"webkitSpeechGrammar"in t])>=5?u.Chromium:w(["ApplePayError"in t,"CSSPrimitiveValue"in t,"Counter"in t,0===r.vendor.indexOf("Apple"),"getStorageUpdates"in r,"WebKitMediaKeys"in t])>=4?u.Webkit:w(["buildID"in navigator,"MozAppearance"in(null!==(n=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==n?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4?u.Gecko:u.Unknown}function m(){var e,n=null===(e=navigator.userAgent)||void 0===e?void 0:e.toLowerCase();return f(n,"wechat")?s.WeChat:f(n,"firefox")?s.Firefox:f(n,"opera")||f(n,"opr")?s.Opera:f(n,"chrome")?s.Chrome:f(n,"safari")?s.Safari:f(n,"trident")||f(n,"msie")?s.IE:s.Unknown}!function(e){e.Unknown="unknown",e.Chromium="chromium",e.Gecko="gecko",e.Webkit="webkit"}(u||(u={})),function(e){e.Unknown="unknown",e.Chrome="chrome",e.Firefox="firefox",e.Opera="opera",e.Safari="safari",e.IE="internet_explorer",e.WeChat="wechat"}(s||(s={}));var h={detectAppVersion:function(e){var n=e.appVersion;return n.state===i.Success&&(/headless/i.test(n.value)?o.HeadlessChrome:/electron/i.test(n.value)?o.Electron:/slimerjs/i.test(n.value)?o.SlimerJS:void 0)},detectDocumentAttributes:function(e){var n=e.documentElementKeys;return n.state===i.Success&&(v(n.value,"selenium","webdriver","driver")?o.Selenium:void 0)},detectErrorTrace:function(e){var n=e.errorTrace;return n.state===i.Success&&(/PhantomJS/i.test(n.value)?o.PhantomJS:void 0)},detectEvalLengthInconsistency:function(e){var n=e.evalLength;if(n.state===i.Success){var t=n.value,r=m(),o=p();return 37===t&&!d([u.Webkit,u.Gecko],o)||39===t&&!d([s.IE],r)||33===t&&!d([u.Chromium],o)}},detectFunctionBind:function(e){if(e.functionBind.state===i.NotFunction)return o.PhantomJS},detectLanguagesLengthInconsistency:function(e){var n=e.languages;if(n.state===i.Success&&0===n.value.length)return o.HeadlessChrome},detectNotificationPermissions:function(e){var n=e.notificationPermissions;return m()===s.Chrome&&(n.state===i.Success&&n.value?o.HeadlessChrome:void 0)},detectPluginsArray:function(e){var n=e.pluginsArray;if(n.state===i.Success&&!n.value)return o.HeadlessChrome},detectPluginsLengthInconsistency:function(e){var n=e.pluginsLength;if(n.state===i.Success){var t=p();if(!(t===u.Chromium&&function(){var e=p(),n=e===u.Chromium,t=e===u.Gecko;if(!n&&!t)return!1;var r=window;return w(["onorientationchange"in r,"orientation"in r,n&&!("SharedWorker"in r),t&&/android/i.test(navigator.appVersion)])>=2}()||t===u.Webkit&&!function(){if(p()!==u.Webkit)return!1;var e=window;return w(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}()))return 0===n.value?o.HeadlessChrome:void 0}},detectProcess:function(e){var n,t=e.process;return t.state===i.Success&&("renderer"===t.value.type||null!=(null===(n=t.value.versions)||void 0===n?void 0:n.electron)?o.Electron:void 0)},detectUserAgent:function(e){var n=e.userAgent;return n.state===i.Success&&(/PhantomJS/i.test(n.value)?o.PhantomJS:/Headless/i.test(n.value)?o.HeadlessChrome:/Electron/i.test(n.value)?o.Electron:/slimerjs/i.test(n.value)?o.SlimerJS:void 0)},detectWebDriver:function(e){var n=e.webDriver;if(n.state===i.Success&&n.value)return o.HeadlessChrome},detectWebGL:function(e){var n=e.webGL;if(n.state===i.Success){var t=n.value,r=t.vendor,a=t.renderer;if("Brian Paul"==r&&"Mesa OffScreen"==a)return o.HeadlessChrome}},detectWindowExternal:function(e){var n=e.windowExternal;return n.state===i.Success&&(/Sequentum/i.test(n.value)?o.Sequentum:void 0)},detectWindowSize:function(e){var n=e.windowSize;if(n.state!==i.Success)return!1;var t=n.value,r=t.outerWidth,a=t.outerHeight;return void 0!==document.hasFocus&&document.hasFocus()&&0===r&&0===a?o.HeadlessChrome:void 0},detectMimeTypesConsistent:function(e){var n=e.mimeTypesConsistent;if(n.state===i.Success&&!n.value)return o.Unknown},detectProductSub:function(e){var n=e.productSub;if(n.state!==i.Success)return!1;var t=m();return t!==s.Chrome&&t!==s.Safari&&t!==s.Opera&&t!==s.WeChat||"20030107"===n.value?void 0:o.Unknown},detectDistinctiveProperties:function(e){var n=e.distinctiveProps;if(n.state!==i.Success)return!1;var t,r=n.value;for(t in r)if(r[t])return t}},g={userAgent:function(){return navigator.userAgent},appVersion:function(){var e=navigator.appVersion;if(null==e)throw new c(i.Undefined,"navigator.appVersion is undefined");return e},rtt:function(){if(void 0===navigator.connection)throw new c(i.Undefined,"navigator.connection is undefined");if(void 0===navigator.connection.rtt)throw new c(i.Undefined,"navigator.connection.rtt is undefined");return navigator.connection.rtt},windowSize:function(){return{outerWidth:window.outerWidth,outerHeight:window.outerHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight}},pluginsLength:function(){if(void 0===navigator.plugins)throw new c(i.Undefined,"navigator.plugins is undefined");if(void 0===navigator.plugins.length)throw new c(i.UnexpectedBehaviour,"navigator.plugins.length is undefined");return navigator.plugins.length},pluginsArray:function(){if(void 0===navigator.plugins)throw new c(i.Undefined,"navigator.plugins is undefined");if(void 0===window.PluginArray)throw new c(i.Undefined,"window.PluginArray is undefined");return navigator.plugins instanceof PluginArray},errorTrace:function(){try{null[0]()}catch(e){if(e instanceof Error&&null!=e.stack)return e.stack.toString()}throw new c(i.UnexpectedBehaviour,"errorTrace signal unexpected behaviour")},productSub:function(){var e=navigator.productSub;if(void 0===e)throw new c(i.Undefined,"navigator.productSub is undefined");return e},windowExternal:function(){if(void 0===window.external)throw new c(i.Undefined,"window.external is undefined");var e=window.external;if("function"!=typeof e.toString)throw new c(i.NotFunction,"window.external.toString is not a function");return e.toString()},mimeTypesConsistent:function(){if(void 0===navigator.mimeTypes)throw new c(i.Undefined,"navigator.mimeTypes is undefined");for(var e=navigator.mimeTypes,n=Object.getPrototypeOf(e)===MimeTypeArray.prototype,t=0;t<e.length;t++)n&&(n=Object.getPrototypeOf(e[t])===MimeType.prototype);return n},evalLength:function(){return eval.toString().length},webGL:function(){var e=document.createElement("canvas");if("function"!=typeof e.getContext)throw new c(i.NotFunction,"HTMLCanvasElement.getContext is not a function");var n=e.getContext("webgl");if(null===n)throw new c(i.Null,"WebGLRenderingContext is null");if("function"!=typeof n.getParameter)throw new c(i.NotFunction,"WebGLRenderingContext.getParameter is not a function");return{vendor:n.getParameter(n.VENDOR),renderer:n.getParameter(n.RENDERER)}},webDriver:function(){if(null==navigator.webdriver)throw new c(i.Undefined,"navigator.webdriver is undefined");return navigator.webdriver},languages:function(){var e,n=navigator,t=[],r=n.language||n.userLanguage||n.browserLanguage||n.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(n.languages))p()===u.Chromium&&w([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||t.push(n.languages);else if("string"==typeof n.languages){var i=n.languages;i&&t.push(i.split(","))}return t},notificationPermissions:function(){return n(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:if(void 0===window.Notification)throw new c(i.Undefined,"window.Notification is undefined");if(void 0===navigator.permissions)throw new c(i.Undefined,"navigator.permissions is undefined");if("function"!=typeof(e=navigator.permissions).query)throw new c(i.NotFunction,"navigator.permissions.query is not a function");t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e.query({name:"notifications"})];case 2:return n=t.sent(),[2,"denied"===window.Notification.permission&&"prompt"===n.state];case 3:throw t.sent(),new c(i.UnexpectedBehaviour,"notificationPermissions signal unexpected behaviour");case 4:return[2]}}))}))},documentElementKeys:function(){if(void 0===document.documentElement)throw new c(i.Undefined,"document.documentElement is undefined");var e=document.documentElement;if("function"!=typeof e.getAttributeNames)throw new c(i.NotFunction,"document.documentElement.getAttributeNames is not a function");return e.getAttributeNames()},functionBind:function(){if(void 0===Function.prototype.bind)throw new c(i.NotFunction,"Function.prototype.bind is undefined");return Function.prototype.bind.toString()},process:function(){if(void 0===window.process)throw new c(i.Undefined,"window.process is undefined");return window.process},distinctiveProps:function(){var e,n,t=((e={})[o.Awesomium]={window:["awesomium"]},e[o.Cef]={window:["RunPerfTest"]},e[o.CefSharp]={window:["CefSharp"]},e[o.CoachJS]={window:["emit"]},e[o.FMiner]={window:["fmget_targets"]},e[o.Geb]={window:["geb"]},e[o.NightmareJS]={window:["__nightmare","nightmare"]},e[o.Phantomas]={window:["__phantomas"]},e[o.PhantomJS]={window:["callPhantom","_phantom"]},e[o.Rhino]={window:["spawn"]},e[o.Selenium]={window:["_Selenium_IDE_Recorder","_selenium","calledSelenium",/^([a-z]){3}_.*_(Array|Promise|Symbol)$/],document:["__selenium_evaluate","selenium-evaluate","__selenium_unwrapped"]},e[o.WebDriverIO]={window:["wdioElectron"]},e[o.WebDriver]={window:["webdriver","__webdriverFunc","__lastWatirAlert","__lastWatirConfirm","__lastWatirPrompt","_WEBDRIVER_ELEM_CACHE","ChromeDriverw"],document:["__webdriver_script_fn","__driver_evaluate","__webdriver_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__fxdriver_unwrapped","__webdriver_script_fn","__webdriver_script_func","__webdriver_script_function","$cdc_asdjflasutopfhvcZLmcf","$cdc_asdjflasutopfhvcZLmcfl_","$chrome_asyncScriptInfo","__$webdriverAsyncExecutor"]},e[o.HeadlessChrome]={window:["domAutomation","domAutomationController"]},e),i={},a=l(window),u=[];for(n in void 0!==window.document&&(u=l(window.document)),t){var s=t[n];if(void 0!==s){var c=void 0!==s.window&&v.apply(void 0,r([a],s.window,!1)),d=!(void 0===s.document||!u.length)&&v.apply(void 0,r([u],s.document,!1));i[n]=c||d}}return i}},b=function(){function e(){this.components=void 0,this.detections=void 0}return e.prototype.getComponents=function(){return this.components},e.prototype.getDetections=function(){return this.detections},e.prototype.getSources=function(){return g},e.prototype.getDetectors=function(){return h},e.prototype.detect=function(){if(void 0===this.components)throw new Error("BotDetector.detect can't be called before BotDetector.collect");var e=this.components,n=this.getDetectors(),t={},r={bot:!1};for(var i in n){var a=(0,n[i])(e),u={bot:!1};"string"==typeof a?u={bot:!0,botKind:a}:a&&(u={bot:!0,botKind:o.Unknown}),t[i]=u,u.bot&&(r=u)}return this.detections=t,r},e.prototype.collect=function(){return n(this,void 0,void 0,(function(){var e,r,o,a=this;return t(this,(function(u){switch(u.label){case 0:return e=this.getSources(),r={},o=Object.keys(e),[4,Promise.all(o.map((function(o){return n(a,void 0,void 0,(function(){var n,a,u,s,d;return t(this,(function(t){switch(t.label){case 0:n=e[o],t.label=1;case 1:return t.trys.push([1,3,,4]),a=r,u=o,d={},[4,n()];case 2:return a[u]=(d.value=t.sent(),d.state=i.Success,d),[3,4];case 3:return s=t.sent(),r[o]=s instanceof c?{state:s.state,error:"".concat(s.name,": ").concat(s.message)}:{state:i.UnexpectedBehaviour,error:s instanceof Error?"".concat(s.name,": ").concat(s.message):String(s)},[3,4];case 4:return[2]}}))}))})))];case 1:return u.sent(),this.components=r,[2,this.components]}}))}))},e}(),y={load:function(e){var r=(void 0===e?{}:e).monitoring,i=void 0===r||r;return n(this,void 0,void 0,(function(){var e;return t(this,(function(n){switch(n.label){case 0:return i&&function(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{var e=new XMLHttpRequest;e.open("get","https://m1.openfpcdn.io/botd/v".concat(a,"/npm-monitoring"),!0),e.send()}catch(n){console.error(n)}}(),[4,(e=new b).collect()];case 1:return n.sent(),[2,e]}}))}))}};window.botdPromise=y.load()}}}));
