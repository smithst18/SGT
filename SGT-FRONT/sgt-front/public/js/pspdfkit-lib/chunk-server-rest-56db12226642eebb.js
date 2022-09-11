/*!
 * PSPDFKit for Web 2022.4.1 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[4099],{82450:function(e,t,n){n.r(t),n.d(t,{RESTProvider:function(){return S}});var r=n(90484),a=n(81253),o=n(92137),s=n(6610),i=n(5991),c=n(96156),u=n(87757),l=n.n(u),d=n(35369),f=n(70545),h=n(41371),p=n(81928),k=n(10379),m=n(46070),v=n(77608);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,v.Z)(e);if(t){var a=(0,v.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,m.Z)(this,n)}}var b=function(e){(0,k.Z)(n,e);var t=y(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n)}(d.WV({alreadyLoadedPages:(0,d.D5)(),serverURL:null,authPayload:null,isLoaded:!1,isFormsEnabled:!0,loadBookmarksPromise:null,ignoredFormFieldNames:null})),w=n(11171),P=n(51983),F=n(14968),x=["id"],g=["id"],_=["id"],Z=["id"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var S=function(){function e(t,n,r){var a=this,o=r.isFormsEnabled;(0,s.Z)(this,e),(0,c.Z)(this,"canCreateBackendOrphanWidgets",!0),(0,c.Z)(this,"setDocumentHandleConflictCallback",(function(){})),this.state=new b({serverURL:t,authPayload:n,isFormsEnabled:o}),this._setReadStateCallbacksPromise=new Promise((function(e){a._setReadStateCallbacksPromiseResolve=e}))}var t,n,u,k,m,v,y,S,L,E,V,j,D,B;return(0,i.Z)(e,[{key:"load",value:(B=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=this.state.set("isLoaded",!0),!this.state.isFormsEnabled){e.next=4;break}return e.next=4,this._initializeFormFieldValues();case 4:return e.abrupt("return",this);case 5:case"end":return e.stop()}}),e,this)}))),function(){return B.apply(this,arguments)})},{key:"destroy",value:function(){}},{key:"setReadStateCallbacks",value:function(e){var t;this._readStateCallbacks=e,null===(t=this._setReadStateCallbacksPromiseResolve)||void 0===t||t.call(this)}},{key:"setAnnotationCallbacks",value:function(e){this.annotationCallbacks=e}},{key:"setBookmarkCallbacks",value:function(e){this.bookmarkCallbacks=e}},{key:"setFormFieldValueCallbacks",value:function(e){this.formFieldValueCallbacks=e}},{key:"createAnnotation",value:(D=(0,o.Z)(l().mark((function e(t,n){var r,o,s,i,c=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),r=(0,h.Hs)(t),o=r.id,s=(0,a.Z)(r,x),i={id:o,content:s},e.next=5,this._request("/annotations","POST",i).then((function(e){if(200!==e.status)throw new f.p2("PSPDFKit Server returned an error, when saving an annotation.");e.json().then((function(e){if("attachment_missing"===e.error){var t=O(i,n);return c._request("/annotations","POST",t).then((function(e){return e.json()}))}return e}))}));case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return D.apply(this,arguments)})},{key:"updateAnnotation",value:(j=(0,o.Z)(l().mark((function e(t){var n,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),n=(0,h.Hs)(t),r=n.id,o=(0,a.Z)(n,g),e.next=4,this._request("/annotations/".concat(r),"PUT",{id:r,content:o});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"deleteAnnotation",value:(V=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),e.next=3,this._request("/annotations/".concat(t.id),"DELETE");case 3:case"end":return e.stop()}}),e,this)}))),function(e){return V.apply(this,arguments)})},{key:"createBookmark",value:(E=(0,o.Z)(l().mark((function e(t){var n,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),e.next=3,this.loadBookmarks();case 3:return n=(0,p.a)(t),r=n.id,o=(0,a.Z)(n,_),e.next=6,this._request("/bookmarks","POST",{id:r,content:o});case 6:if(200===e.sent.status){e.next=9;break}throw new f.p2("PSPDFKit Server returned an error, when saving an bookmark.");case 9:case"end":return e.stop()}}),e,this)}))),function(e){return E.apply(this,arguments)})},{key:"updateBookmark",value:(L=(0,o.Z)(l().mark((function e(t){var n,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),e.next=3,this.loadBookmarks();case 3:return n=(0,p.a)(t),r=n.id,o=(0,a.Z)(n,Z),e.next=6,this._request("/bookmarks/".concat(r),"PUT",{id:r,content:o});case 6:case"end":return e.stop()}}),e,this)}))),function(e){return L.apply(this,arguments)})},{key:"deleteBookmark",value:(S=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),e.next=3,this.loadBookmarks();case 3:return e.next=5,this._request("/bookmarks/".concat(t),"DELETE");case 5:case"end":return e.stop()}}),e,this)}))),function(e){return S.apply(this,arguments)})},{key:"setFormFieldValue",value:(y=(0,o.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._verifyLoaded(),n={id:(0,w.X)(t),content:(0,h.kr)(t)},e.next=4,this._request("/form-field-values","POST",{formFieldValues:[n]});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"createFormFieldValue",value:(v=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)}))),function(){return v.apply(this,arguments)})},{key:"deleteFormFieldValue",value:(m=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)}))),function(){return m.apply(this,arguments)})},{key:"loadAnnotationsForPageIndex",value:(k=(0,o.Z)(l().mark((function e(t){var n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._verifyLoaded(),!this.state.alreadyLoadedPages.has(t)){e.next=5;break}return e.next=4,this.state.alreadyLoadedPages.get(t);case 4:return e.abrupt("return");case 5:return e.prev=5,n=this._request("/page-".concat(t,"-annotations"),"GET").then((function(e){return e.json()})).catch((function(e){throw e})),this.state=this.state.setIn(["alreadyLoadedPages",t],n),e.next=10,n;case 10:r=e.sent,this.state=this.state.setIn(["alreadyLoadedPages",t],Promise.resolve()),(a=(0,d.aV)().withMutations((function(e){r.annotations.forEach((function(t){try{e.push((0,h.vH)(t.id,t.content))}catch(e){(0,f.um)("Skipped creating annotation #".concat(t.id," from payload because an error occurred while deserializing."),t.content),(0,f.um)(e)}}))}))).size>0&&((0,f.kG)(this.annotationCallbacks),this.annotationCallbacks.createAnnotations(a,(0,d.D5)(),P.y)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),this._handleError(e.t0,"annotations");case 19:case"end":return e.stop()}}),e,this,[[5,16]])}))),function(e){return k.apply(this,arguments)})},{key:"loadBookmarks",value:(u=(0,o.Z)(l().mark((function e(){var t,n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._verifyLoaded(),!this.state.loadBookmarksPromise){e.next=5;break}return e.next=4,this.state.loadBookmarksPromise;case 4:return e.abrupt("return");case 5:return e.prev=5,t=this._request("/bookmarks","GET").then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(e){throw e})),this.state=this.state.set("loadBookmarksPromise",t),e.next=10,t;case 10:n=e.sent,this.state=this.state.set("loadBookmarksPromise",Promise.resolve()),(0,f.kG)(Array.isArray(n.bookmarks),"Unexpected reply from bookmarks endpoint."),(r=(0,d.aV)().withMutations((function(e){n.bookmarks.forEach((function(t){try{e.push((0,p.i)(t.id,t.content))}catch(e){(0,f.um)("Skipped creating bookmark #".concat(t.id," from payload because an error occurred while deserializing."),t),(0,f.um)(e)}}))}))).size>0&&((0,f.kG)(this.bookmarkCallbacks),this.bookmarkCallbacks.createBookmarks(r,P.y)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),this._handleError(e.t0,"bookmarks");case 20:case"end":return e.stop()}}),e,this,[[5,17]])}))),function(){return u.apply(this,arguments)})},{key:"syncChanges",value:(n=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"_initializeFormFieldValues",value:(t=(0,o.Z)(l().mark((function e(){var t,n,r,a=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._request("/form-field-values","GET");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,(0,f.kG)(Array.isArray(n.formFieldValues),"Unexpected reply from form-values endpoint."),r=(0,d.aV)(n.formFieldValues.map((function(e){var t=e.content;try{return(0,h.u9)(t)}catch(e){return(0,f.um)("Skipped form field value ".concat(t.name," from payload because an error occurred while deserializing."),t),(0,f.um)(e),null}})).filter(Boolean)),(0,f.kG)(this.formFieldValueCallbacks),this.state.ignoredFormFieldNames&&this.state.ignoredFormFieldNames.size?this.formFieldValueCallbacks.setFormFieldValues(r.filter((function(e){var t;return!(null!==(t=a.state.ignoredFormFieldNames)&&void 0!==t&&t.includes(e.name))}))):this.formFieldValueCallbacks.setFormFieldValues(r);case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_handleError",value:function(e,t){(0,f.vU)("Loading or updating ".concat(t," failed:\n\n").concat(e.message))}},{key:"_request",value:function(e,t,n){(0,f.kG)(null!=this.state.authPayload,"Cannot call request without authPayload");var a=n instanceof FormData||"object"!==(0,r.Z)(n)?null:{"Content-Type":"application/json"},o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"X-PSPDFKit-Token":this.state.authPayload.token,"PSPDFKit-Platform":"web","PSPDFKit-Version":(0,F.oM)()},a);return fetch("".concat(this.state.serverURL).concat(e),{method:t,headers:o,body:n instanceof FormData?n:"object"===(0,r.Z)(n)?JSON.stringify(n):void 0,credentials:"include"})}},{key:"_verifyLoaded",value:function(){if(!this.state.isLoaded)throw new Error("not loaded")}},{key:"setIgnoredFormFieldNames",value:function(e){this.state=this.state.set("ignoredFormFieldNames",e)}}]),e}();function O(e,t){var n=new FormData;return n.append("annotation",JSON.stringify(e)),t.forEach((function(e,t){t&&e.data&&n.append(t,e.data)})),n}}}]);