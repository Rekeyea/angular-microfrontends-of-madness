(self.webpackChunkshell=self.webpackChunkshell||[]).push([[481],{1481:(We,P,E)=>{E.r(P),E.d(P,{BrowserModule:()=>_e,BrowserTransferStateModule:()=>je,By:()=>Ue,DomSanitizer:()=>re,EVENT_MANAGER_PLUGINS:()=>f,EventManager:()=>m,HAMMER_GESTURE_CONFIG:()=>T,HAMMER_LOADER:()=>O,HammerGestureConfig:()=>te,HammerModule:()=>Ve,Meta:()=>J,Title:()=>q,TransferState:()=>Fe,VERSION:()=>$e,bootstrapApplication:()=>ve,disableDebugTools:()=>Le,enableDebugTools:()=>Pe,makeStateKey:()=>Be,platformBrowser:()=>De,provideProtractorTestingSupport:()=>Se,\u0275BrowserDomAdapter:()=>y,\u0275BrowserGetTestability:()=>L,\u0275DomEventsPlugin:()=>G,\u0275DomRendererFactory2:()=>S,\u0275DomSanitizerImpl:()=>N,\u0275DomSharedStylesHost:()=>p,\u0275HammerGesturesPlugin:()=>ne,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>R,\u0275KeyEventsPlugin:()=>$,\u0275NAMESPACE_URIS:()=>v,\u0275SharedStylesHost:()=>_,\u0275TRANSITION_ID:()=>M,\u0275escapeHtml:()=>He,\u0275flattenStyles:()=>g,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>W,\u0275shimContentAttribute:()=>F,\u0275shimHostAttribute:()=>x});var l=E(8736),o=E(3185);class se extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class y extends se{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new y)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=function ie(){return h=h||document.querySelector("base"),h?h.getAttribute("href"):null}();return null==e?null:function ae(n){w=w||document.createElement("a"),w.setAttribute("href",n);const t=w.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){h=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,l.\u0275parseCookieValue)(document.cookie,t)}}let w,h=null;const M=new o.InjectionToken("TRANSITION_ID"),ue=[{provide:o.APP_INITIALIZER,useFactory:function le(n,t,e){return()=>{e.get(o.ApplicationInitStatus).donePromise.then(()=>{const r=(0,l.\u0275getDOM)(),s=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let i=0;i<s.length;i++)r.remove(s[i])})}},deps:[M,l.DOCUMENT,o.Injector],multi:!0}];class L{addToWindow(t){o.\u0275global.getAngularTestability=(r,s=!0)=>{const i=t.findTestabilityInTree(r,s);if(null==i)throw new Error("Could not find testability for element.");return i},o.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(r=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const u=function(c){a=a||c,i--,0==i&&r(a)};s.forEach(function(c){c.whenStable(u)})})}findTestabilityInTree(t,e,r){return null==e?null:t.getTestability(e)??(r?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}}let ce=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const f=new o.InjectionToken("EventManagerPlugins");let m=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(s=>s.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,s){return this._findPluginFor(r).addEventListener(e,r,s)}addGlobalEventListener(e,r,s){return this._findPluginFor(r).addGlobalEventListener(e,r,s)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const s=this._plugins;for(let i=0;i<s.length;i++){const a=s[i];if(a.supports(e))return this._eventNameToPlugin.set(e,a),a}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(f),o.\u0275\u0275inject(o.NgZone))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class D{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const s=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!s)throw new Error(`Unsupported event target ${s} for event ${e}`);return this.addEventListener(s,e,r)}}let _=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(s=>{this._stylesSet.has(s)||(this._stylesSet.add(s),r.add(s))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),p=(()=>{class n extends _{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,s){e.forEach(i=>{const a=this._doc.createElement("style");a.textContent=i,s.push(r.appendChild(a))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(H),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,s)=>{this._addStylesToHost(e,s,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(H))}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function H(n){(0,l.\u0275getDOM)().remove(n)}const v={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},A=/%COMP%/g,B="%COMP%",de=`_nghost-${B}`,fe=`_ngcontent-${B}`;function F(n){return fe.replace(A,n)}function x(n){return de.replace(A,n)}function g(n,t,e){for(let r=0;r<t.length;r++){let s=t[r];Array.isArray(s)?g(n,s,e):(s=s.replace(A,n),e.push(s))}return e}function j(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let S=(()=>{class n{constructor(e,r,s){this.eventManager=e,this.sharedStylesHost=r,this.appId=s,this.rendererByCompId=new Map,this.defaultRenderer=new C(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case o.ViewEncapsulation.Emulated:{let s=this.rendererByCompId.get(r.id);return s||(s=new he(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,s)),s.applyToHost(e),s}case 1:case o.ViewEncapsulation.ShadowDom:return new me(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const s=g(r.id,r.styles,[]);this.sharedStylesHost.addStyles(s),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(m),o.\u0275\u0275inject(p),o.\u0275\u0275inject(o.APP_ID))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class C{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,e){return e?document.createElementNS(v[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){(z(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(z(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,s){if(s){e=s+":"+e;const i=v[s];i?t.setAttributeNS(i,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const s=v[r];s?t.removeAttributeNS(s,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?t.style.setProperty(e,r,s&o.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&o.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,j(r)):this.eventManager.addEventListener(t,e,j(r))}}function z(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class he extends C{constructor(t,e,r,s){super(t),this.component=r;const i=g(s+"-"+r.id,r.styles,[]);e.addStyles(i),this.contentAttr=F(s+"-"+r.id),this.hostAttr=x(s+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class me extends C{constructor(t,e,r,s){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=g(s.id,s.styles,[]);for(let a=0;a<i.length;a++){const u=document.createElement("style");u.textContent=i[a],this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let G=(()=>{class n extends D{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,s){return e.addEventListener(r,s,!1),()=>this.removeEventListener(e,r,s)}removeEventListener(e,r,s){return e.removeEventListener(r,s)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const V=["alt","control","meta","shift"],Ee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},K={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},ye={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let $=(()=>{class n extends D{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,s){const i=n.parseEventName(r),a=n.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const r=e.toLowerCase().split("."),s=r.shift();if(0===r.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(r.pop());let a="";if(V.forEach(c=>{const oe=r.indexOf(c);oe>-1&&(r.splice(oe,1),a+=c+".")}),a+=i,0!=r.length||0===i.length)return null;const u={};return u.domEventName=s,u.fullKey=a,u}static getEventFullKey(e){let r="",s=function we(n){let t=n.key;if(null==t){if(t=n.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===n.location&&K.hasOwnProperty(t)&&(t=K[t]))}return Ee[t]||t}(e);return s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),V.forEach(i=>{i!=s&&(0,ye[i])(e)&&(r+=i+".")}),r+=s,r}static eventCallback(e,r,s){return i=>{n.getEventFullKey(i)===e&&s.runGuarded(()=>r(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ve(n,t){return(0,o.\u0275internalBootstrapApplication)({rootComponent:n,appProviders:[...X,...t?.providers??[]],platformProviders:R})}function Se(){return[...Y]}function W(){y.makeCurrent()}const R=[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:W,multi:!0},{provide:l.DOCUMENT,useFactory:function Me(){return(0,o.\u0275setDocument)(document),document},deps:[]}],De=(0,o.createPlatformFactory)(o.platformCore,"browser",R),Z=new o.InjectionToken(""),Y=[{provide:o.\u0275TESTABILITY_GETTER,useClass:L,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],X=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function Te(){return new o.ErrorHandler},deps:[]},{provide:f,useClass:G,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:f,useClass:$,multi:!0,deps:[l.DOCUMENT]},{provide:S,useClass:S,deps:[m,p,o.APP_ID]},{provide:o.RendererFactory2,useExisting:S},{provide:_,useExisting:p},{provide:p,useClass:p,deps:[l.DOCUMENT]},{provide:m,useClass:m,deps:[f,o.NgZone]},{provide:l.XhrFactory,useClass:ce,deps:[]},[]];let _e=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:o.APP_ID,useValue:e.appId},{provide:M,useExisting:o.APP_ID},ue]}}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(Z,12))},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[...X,...Y],imports:[l.CommonModule,o.ApplicationModule]}),n})(),J=(()=>{class n{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,r=!1){return e?this._getOrCreateElement(e,r):null}addTags(e,r=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,r)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const r=this._doc.querySelectorAll(`meta[${e}]`);return r?[].slice.call(r):[]}updateTag(e,r){if(!e)return null;r=r||this._parseSelector(e);const s=this.getTag(r);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,r=!1){if(!r){const a=this._parseSelector(e),u=this.getTags(a).filter(c=>this._containsAttributes(e,c))[0];if(void 0!==u)return u}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,r){return Object.keys(e).forEach(s=>r.setAttribute(this._getMetaKeyMap(s),e[s])),r}_parseSelector(e){const r=e.name?"name":"property";return`${r}="${e[r]}"`}_containsAttributes(e,r){return Object.keys(e).every(s=>r.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Ce[e]||e}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function Ae(){return new J((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),r},providedIn:"root"}),n})();const Ce={httpEquiv:"http-equiv"};let q=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function be(){return new q((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),r},providedIn:"root"}),n})();function Q(n,t){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[n]=t)}const d=typeof window<"u"&&window||{};class Oe{constructor(t,e){this.msPerTick=t,this.numTicks=e}}class Ne{constructor(t){this.appRef=t.injector.get(o.ApplicationRef)}timeChangeDetection(t){const e=t&&t.record,r="Change Detection",s=null!=d.console.profile;e&&s&&d.console.profile(r);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const u=I();e&&s&&d.console.profileEnd(r);const c=(u-i)/a;return d.console.log(`ran ${a} change detection cycles`),d.console.log(`${c.toFixed(2)} ms per check`),new Oe(c,a)}}function I(){return d.performance&&d.performance.now?d.performance.now():(new Date).getTime()}const ee="profiler";function Pe(n){return Q(ee,new Ne(n)),n}function Le(){Q(ee,null)}function He(n){const t={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return n.replace(/[&"'<>]/g,e=>t[e])}function Be(n){return n}let Fe=(()=>{class n{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,r){return void 0!==this.store[e]?this.store[e]:r}set(e,r){this.store[e]=r}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}onSerialize(e,r){this.onSerializeCallbacks[e]=r}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(){return(()=>{const t=(0,o.inject)(l.DOCUMENT),e=(0,o.inject)(o.APP_ID),r=new n;return r.store=function xe(n,t){const e=n.getElementById(t+"-state");let r={};if(e&&e.textContent)try{r=JSON.parse(function ke(n){const t={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return n.replace(/&[^;]+;/g,e=>t[e])}(e.textContent))}catch(s){console.warn("Exception while restoring TransferState for app "+t,s)}return r}(t,e),r})()},providedIn:"root"}),n})(),je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({}),n})();class Ue{static all(){return()=>!0}static css(t){return e=>null!=e.nativeElement&&function ze(n,t){return!!(0,l.\u0275getDOM)().isElementNode(n)&&(n.matches&&n.matches(t)||n.msMatchesSelector&&n.msMatchesSelector(t)||n.webkitMatchesSelector&&n.webkitMatchesSelector(t))}(e.nativeElement,t)}static directive(t){return e=>-1!==e.providerTokens.indexOf(t)}}const Ge={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},T=new o.InjectionToken("HammerGestureConfig"),O=new o.InjectionToken("HammerLoader");let te=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){const r=new Hammer(e,this.options);r.get("pinch").set({enable:!0}),r.get("rotate").set({enable:!0});for(const s in this.overrides)r.get(s).set(this.overrides[s]);return r}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),ne=(()=>{class n extends D{constructor(e,r,s,i){super(e),this._config=r,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Ge.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,r,s){const i=this.manager.getZone();if(r=r.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,u=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(u=this.addEventListener(e,r,s)):u=()=>{}}).catch(()=>{u=()=>{}})),()=>{u()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),u=function(c){i.runGuarded(function(){s(c)})};return a.on(r,u),()=>{a.off(r,u),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(T),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(O,8))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),Ve=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:f,useClass:ne,multi:!0,deps:[l.DOCUMENT,T,o.\u0275Console,[new o.Optional,O]]},{provide:T,useClass:te,deps:[]}]}),n})(),re=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new(e||n):o.\u0275\u0275inject(N),r},providedIn:"root"}),n})(),N=(()=>{class n extends re{constructor(e){super(),this._doc=e}sanitize(e,r){if(null==r)return null;switch(e){case o.SecurityContext.NONE:return r;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(r,"HTML")?(0,o.\u0275unwrapSafeValue)(r):(0,o.\u0275_sanitizeHtml)(this._doc,String(r)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(r,"Style")?(0,o.\u0275unwrapSafeValue)(r):r;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(r,"Script"))return(0,o.\u0275unwrapSafeValue)(r);throw new Error("unsafe value used in a script context");case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(r,"URL")?(0,o.\u0275unwrapSafeValue)(r):(0,o.\u0275_sanitizeUrl)(String(r));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(r,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(r);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function Ke(n){return new N(n.get(l.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),r},providedIn:"root"}),n})();const $e=new o.Version("14.1.2")}}]);