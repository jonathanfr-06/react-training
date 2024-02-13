"use strict";(self._cf=self._cf||[]).push([[45159],{460818:(e,t,i)=>{i.d(t,{Ck:()=>b,Np:()=>P,_R:()=>V,bP:()=>h,i8:()=>L,u9:()=>f});var r=i(178825),n=i(254549),a=".".charCodeAt(0),u=/\\(\\)?/g,s=RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))","g"),o={},l=/[.[\]]+/,d=function(e){if(null==e||!e.length)return[];if("string"!=typeof e)throw new Error("toPath() expects a string");var t,i;return null==o[e]&&(e.endsWith("[]")?o[e]=e.split(l).filter(Boolean):o[e]=(i=[],(t=e).charCodeAt(0)===a&&i.push(""),t.replace(s,(function(e,t,r,n){var a=e;r?a=n.replace(u,"$1"):t&&(a=t.trim()),i.push(a)})),i)),o[e]},f=function(e,t){for(var i=d(t),r=e,n=0;n<i.length;n++){var a=i[n];if(null==r||"object"!=typeof r||Array.isArray(r)&&isNaN(a))return;r=r[a]}return r};function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var v=function e(t,i,a,u,s){if(i>=a.length)return u;var o=a[i];if(isNaN(o)){var l;if(null==t){var d,f=e(void 0,i+1,a,u,s);return void 0===f?void 0:((d={})[o]=f,d)}if(Array.isArray(t))throw new Error("Cannot set a non-numeric property on an array");var v=e(t[o],i+1,a,u,s);if(void 0===v){var m=Object.keys(t).length;if(void 0===t[o]&&0===m)return;return void 0!==t[o]&&m<=1?isNaN(a[i-1])||s?void 0:{}:(t[o],(0,n.Z)(t,[o].map(c)))}return(0,r.Z)({},t,((l={})[o]=v,l))}var b=Number(o);if(null==t){var S=e(void 0,i+1,a,u,s);if(void 0===S)return;var g=[];return g[b]=S,g}if(!Array.isArray(t))throw new Error("Cannot set a numeric property on an object");var h=e(t[b],i+1,a,u,s),y=[].concat(t);if(s&&void 0===h){if(y.splice(b,1),0===y.length)return}else y[b]=h;return y},m=function(e,t,i,r){if(void 0===r&&(r=!1),null==e)throw new Error("Cannot call setIn() with "+String(e)+" state");if(null==t)throw new Error("Cannot call setIn() with "+String(t)+" key");return v(e,0,d(t),i,r)},b="FINAL_FORM/form-error",S="FINAL_FORM/array-error";function g(e,t){var i=e.errors,r=e.initialValues,n=e.lastSubmittedValues,a=e.submitErrors,u=e.submitFailed,s=e.submitSucceeded,o=e.submitting,l=e.values,d=t.active,c=t.blur,v=t.change,m=t.data,b=t.focus,g=t.modified,h=t.modifiedSinceLastSubmit,y=t.name,p=t.touched,E=t.validating,F=t.visited,V=f(l,y),k=f(i,y);k&&k[S]&&(k=k[S]);var O=a&&f(a,y),j=r&&f(r,y),w=t.isEqual(j,V),L=!k&&!O;return{active:d,blur:c,change:v,data:m,dirty:!w,dirtySinceLastSubmit:!(!n||t.isEqual(f(n,y),V)),error:k,focus:b,initial:j,invalid:!L,length:Array.isArray(V)?V.length:void 0,modified:g,modifiedSinceLastSubmit:h,name:y,pristine:w,submitError:O,submitFailed:u,submitSucceeded:s,submitting:o,touched:p,valid:L,value:V,visited:F,validating:E}}var h=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","value","visited","validating"],y=function(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0};function p(e,t,i,r,n,a){var u=!1;return n.forEach((function(n){r[n]&&(e[n]=t[n],i&&(~a.indexOf(n)?y(t[n],i[n]):t[n]===i[n])||(u=!0))})),u}var E=["data"],F=function(e,t,i,r){var n={blur:e.blur,change:e.change,focus:e.focus,name:e.name};return p(n,e,t,i,h,E)||!t||r?n:void 0},V=["active","dirty","dirtyFields","dirtyFieldsSinceLastSubmit","dirtySinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","touched","valid","validating","values","visited"],k=["touched","visited"];function O(e,t,i,r){var n={};return p(n,e,t,i,V,k)||!t||r?n:void 0}var j=function(e){var t,i;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t&&n.length===t.length&&!n.some((function(e,i){return!y(t[i],e)}))||(t=n,i=e.apply(void 0,n)),i}},w=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},L="4.20.10",Z=function(e,t){return e===t},N=function e(t){return Object.keys(t).some((function(i){var r=t[i];return!r||"object"!=typeof r||r instanceof Error?void 0!==r:e(r)}))};function A(e,t,i,r,n,a){var u=n(i,r,t,a);return!!u&&(e(u),!0)}function C(e,t,i,r,n){var a=e.entries;Object.keys(a).forEach((function(e){var u=a[Number(e)];if(u){var s=u.subscription,o=u.subscriber,l=u.notified;A(o,s,t,i,r,n||!l)&&(u.notified=!0)}}))}function P(e){if(!e)throw new Error("No config specified");var t=e.debug,i=e.destroyOnUnregister,n=e.keepDirtyOnReinitialize,a=e.initialValues,u=e.mutators,s=e.onSubmit,o=e.validate,l=e.validateOnBlur;if(!s)throw new Error("No onSubmit function specified");var d={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{asyncErrors:{},dirtySinceLastSubmit:!1,modifiedSinceLastSubmit:!1,errors:{},initialValues:a&&(0,r.Z)({},a),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,resetWhileSubmitting:!1,valid:!0,validating:0,values:a?(0,r.Z)({},a):{}},lastFormState:void 0},c=0,v=!1,h=!1,p=!1,E=0,V={},k=function(e,t,i){var r=i(f(e.formState.values,t));e.formState.values=m(e.formState.values,t,r)||{}},L=function(e,t,i){if(e.fields[t]){var n,a;e.fields=(0,r.Z)({},e.fields,((n={})[i]=(0,r.Z)({},e.fields[t],{name:i,blur:function(){return K.blur(i)},change:function(e){return K.change(i,e)},focus:function(){return K.focus(i)},lastFieldState:void 0}),n)),delete e.fields[t],e.fieldSubscribers=(0,r.Z)({},e.fieldSubscribers,((a={})[i]=e.fieldSubscribers[t],a)),delete e.fieldSubscribers[t];var u=f(e.formState.values,t);e.formState.values=m(e.formState.values,t,void 0)||{},e.formState.values=m(e.formState.values,i,u),delete e.lastFormState}},P=function(e){return function(){if(u){for(var t={formState:d.formState,fields:d.fields,fieldSubscribers:d.fieldSubscribers,lastFormState:d.lastFormState},i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var a=u[e](r,t,{changeValue:k,getIn:f,renameField:L,resetFieldState:K.resetFieldState,setIn:m,shallowEqual:y});return d.formState=t.formState,d.fields=t.fields,d.fieldSubscribers=t.fieldSubscribers,d.lastFormState=t.lastFormState,R(void 0,(function(){D(),_()})),a}}},q=u?Object.keys(u).reduce((function(e,t){return e[t]=P(t),e}),{}):{},x=function(e){return Object.keys(e.validators).reduce((function(t,i){var r=e.validators[Number(i)]();return r&&t.push(r),t}),[])},R=function(e,t){if(v)return h=!0,void t();var i=d.fields,n=d.formState,a=(0,r.Z)({},i),u=Object.keys(a);if(o||u.some((function(e){return x(a[e]).length}))){var s=!1;if(e){var l=a[e];if(l){var c=l.validateFields;c&&(s=!0,u=c.length?c.concat(e):[e])}}var p,F={},k={},O={},j=[].concat(function(e){var t=[];if(o){var i=o((0,r.Z)({},d.formState.values));w(i)?t.push(i.then((function(t){return e(t,!0)}))):e(i,!1)}return t}((function(e,t){t?k=e||{}:F=e||{}})),u.reduce((function(e,t){return e.concat(function(e,t){var i,r=[],n=x(e);return n.length&&(n.forEach((function(n){var a=n(f(d.formState.values,e.name),d.formState.values,0===n.length||3===n.length?g(d.formState,d.fields[e.name]):void 0);if(a&&w(a)){e.validating=!0;var u=a.then((function(i){d.fields[e.name]&&(d.fields[e.name].validating=!1,t(i))}));r.push(u)}else i||(i=a)})),t(i)),r}(i[t],(function(e){O[t]=e})))}),[])),L=j.length>0,Z=++E,N=Promise.all(j).then((p=Z,function(e){return delete V[p],e}));L&&(V[Z]=N);var A=function(e){var t=(0,r.Z)({},s?n.errors:{},F,e?k:n.asyncErrors),l=function(e){u.forEach((function(r){if(i[r]){var n=f(F,r),u=f(t,r),l=x(a[r]).length,d=O[r];e(r,l&&d||o&&n||(n||s?void 0:u))}}))};l((function(e,i){t=m(t,e,i)||{}})),l((function(e,i){if(i&&i[S]){var r=f(t,e),n=[].concat(r);n[S]=i[S],t=m(t,e,n)}})),y(n.errors,t)||(n.errors=t),e&&(n.asyncErrors=k),n.error=F[b]};if(L&&(d.formState.validating++,t()),A(!1),t(),L){var C=function(){d.formState.validating--,t(),0===d.formState.validating&&d.lastFormState.validating&&_()};N.then((function(){E>Z||A(!0)})).then(C,C)}}else t()},D=function(e){if(!c){var t=d.fields,i=d.fieldSubscribers,n=d.formState,a=(0,r.Z)({},t),u=function(e){var t=a[e],r=g(n,t),u=t.lastFieldState;t.lastFieldState=r;var s=i[e];s&&C(s,r,u,F,void 0===u)};e?u(e):Object.keys(a).forEach(u)}},I=function(){Object.keys(d.fields).forEach((function(e){d.fields[e].touched=!0}))},U=function(){var e=d.fields,t=d.formState,i=d.lastFormState,n=(0,r.Z)({},e),a=Object.keys(n),u=!1,s=a.reduce((function(e,i){return!n[i].isEqual(f(t.values,i),f(t.initialValues||{},i))&&(u=!0,e[i]=!0),e}),{}),o=a.reduce((function(e,i){var r=t.lastSubmittedValues||{};return n[i].isEqual(f(t.values,i),f(r,i))||(e[i]=!0),e}),{});t.pristine=!u,t.dirtySinceLastSubmit=!(!t.lastSubmittedValues||!Object.values(o).some((function(e){return e}))),t.modifiedSinceLastSubmit=!(!t.lastSubmittedValues||!Object.keys(n).some((function(e){return n[e].modifiedSinceLastSubmit}))),t.valid=!(t.error||t.submitError||N(t.errors)||t.submitErrors&&N(t.submitErrors));var l=function(e){var t=e.active,i=e.dirtySinceLastSubmit,r=e.modifiedSinceLastSubmit,n=e.error,a=e.errors,u=e.initialValues,s=e.pristine,o=e.submitting,l=e.submitFailed,d=e.submitSucceeded,f=e.submitError,c=e.submitErrors,v=e.valid,m=e.validating,b=e.values;return{active:t,dirty:!s,dirtySinceLastSubmit:i,modifiedSinceLastSubmit:r,error:n,errors:a,hasSubmitErrors:!!(f||c&&N(c)),hasValidationErrors:!(!n&&!N(a)),invalid:!v,initialValues:u,pristine:s,submitting:o,submitFailed:l,submitSucceeded:d,submitError:f,submitErrors:c,valid:v,validating:m>0,values:b}}(t),c=a.reduce((function(e,t){return e.modified[t]=n[t].modified,e.touched[t]=n[t].touched,e.visited[t]=n[t].visited,e}),{modified:{},touched:{},visited:{}}),v=c.modified,m=c.touched,b=c.visited;return l.dirtyFields=i&&y(i.dirtyFields,s)?i.dirtyFields:s,l.dirtyFieldsSinceLastSubmit=i&&y(i.dirtyFieldsSinceLastSubmit,o)?i.dirtyFieldsSinceLastSubmit:o,l.modified=i&&y(i.modified,v)?i.modified:v,l.touched=i&&y(i.touched,m)?i.touched:m,l.visited=i&&y(i.visited,b)?i.visited:b,i&&y(i,l)?i:l},W=!1,z=!1,_=function e(){if(W)z=!0;else{if(W=!0,t&&t(U(),Object.keys(d.fields).reduce((function(e,t){return e[t]=d.fields[t],e}),{})),!(c||v&&p)){var i=d.lastFormState,r=U();r!==i&&(d.lastFormState=r,C(d.subscribers,r,i,O))}W=!1,z&&(z=!1,e())}},B=function(){return Object.keys(d.fields).forEach((function(e){return d.fields[e].modifiedSinceLastSubmit=!1}))};R(void 0,(function(){_()}));var K={batch:function(e){c++,e(),c--,D(),_()},blur:function(e){var t=d.fields,i=d.formState,n=t[e];n&&(delete i.active,t[e]=(0,r.Z)({},n,{active:!1,touched:!0}),l?R(e,(function(){D(),_()})):(D(),_()))},change:function(e,t){var i=d.fields,n=d.formState;if(f(n.values,e)!==t){k(d,e,(function(){return t}));var a=i[e];a&&(i[e]=(0,r.Z)({},a,{modified:!0,modifiedSinceLastSubmit:!!n.lastSubmittedValues})),l?(D(),_()):R(e,(function(){D(),_()}))}},get destroyOnUnregister(){return!!i},set destroyOnUnregister(e){i=e},focus:function(e){var t=d.fields[e];t&&!t.active&&(d.formState.active=e,t.active=!0,t.visited=!0,D(),_())},mutators:q,getFieldState:function(e){var t=d.fields[e];return t&&t.lastFieldState},getRegisteredFields:function(){return Object.keys(d.fields)},getState:function(){return U()},initialize:function(e){var t=d.fields,i=d.formState,a=(0,r.Z)({},t),u="function"==typeof e?e(i.values):e;n||(i.values=u);var s=n?Object.keys(a).reduce((function(e,t){return a[t].isEqual(f(i.values,t),f(i.initialValues||{},t))||(e[t]=f(i.values,t)),e}),{}):{};i.initialValues=u,i.values=u,Object.keys(s).forEach((function(e){i.values=m(i.values,e,s[e])||{}})),R(void 0,(function(){D(),_()}))},isValidationPaused:function(){return v},pauseValidation:function(e){void 0===e&&(e=!0),v=!0,p=e},registerField:function(e,t,r,n){void 0===r&&(r={}),d.fieldSubscribers[e]||(d.fieldSubscribers[e]={index:0,entries:{}});var a=d.fieldSubscribers[e].index++;d.fieldSubscribers[e].entries[a]={subscriber:j(t),subscription:r,notified:!1};var u=d.fields[e]||{active:!1,afterSubmit:n&&n.afterSubmit,beforeSubmit:n&&n.beforeSubmit,data:n&&n.data||{},isEqual:n&&n.isEqual||Z,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,name:e,touched:!1,valid:!0,validateFields:n&&n.validateFields,validators:{},validating:!1,visited:!1};u.blur=u.blur||function(){return K.blur(e)},u.change=u.change||function(t){return K.change(e,t)},u.focus=u.focus||function(){return K.focus(e)},d.fields[e]=u;var s=!1,o=n&&n.silent,l=function(){o&&d.fields[e]?D(e):(_(),D())};if(n){s=!(!n.getValidator||!n.getValidator()),n.getValidator&&(d.fields[e].validators[a]=n.getValidator);var c=void 0===f(d.formState.values,e);void 0===n.initialValue||!c&&f(d.formState.values,e)!==f(d.formState.initialValues,e)||(d.formState.initialValues=m(d.formState.initialValues||{},e,n.initialValue),d.formState.values=m(d.formState.values,e,n.initialValue),R(void 0,l)),void 0!==n.defaultValue&&void 0===n.initialValue&&void 0===f(d.formState.initialValues,e)&&c&&(d.formState.values=m(d.formState.values,e,n.defaultValue))}return s?R(void 0,l):l(),function(){var t=!1;d.fields[e]&&(t=!(!d.fields[e].validators[a]||!d.fields[e].validators[a]()),delete d.fields[e].validators[a]);var r=!!d.fieldSubscribers[e];r&&delete d.fieldSubscribers[e].entries[a];var n=r&&!Object.keys(d.fieldSubscribers[e].entries).length;n&&(delete d.fieldSubscribers[e],delete d.fields[e],t&&(d.formState.errors=m(d.formState.errors,e,void 0)||{}),i&&(d.formState.values=m(d.formState.values,e,void 0,!0)||{})),o||(t?R(void 0,(function(){_(),D()})):n&&_())}},reset:function(e){void 0===e&&(e=d.formState.initialValues),d.formState.submitting&&(d.formState.resetWhileSubmitting=!0),d.formState.submitFailed=!1,d.formState.submitSucceeded=!1,delete d.formState.submitError,delete d.formState.submitErrors,delete d.formState.lastSubmittedValues,K.initialize(e||{})},resetFieldState:function(e){d.fields[e]=(0,r.Z)({},d.fields[e],{active:!1,lastFieldState:void 0,modified:!1,touched:!1,valid:!0,validating:!1,visited:!1}),R(void 0,(function(){D(),_()}))},restart:function(e){void 0===e&&(e=d.formState.initialValues),K.batch((function(){for(var t in d.fields)K.resetFieldState(t),d.fields[t]=(0,r.Z)({},d.fields[t],{active:!1,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,touched:!1,valid:!0,validating:!1,visited:!1});K.reset(e)}))},resumeValidation:function(){v=!1,p=!1,h&&R(void 0,(function(){D(),_()})),h=!1},setConfig:function(e,r){switch(e){case"debug":t=r;break;case"destroyOnUnregister":i=r;break;case"initialValues":K.initialize(r);break;case"keepDirtyOnReinitialize":n=r;break;case"mutators":u=r,r?(Object.keys(q).forEach((function(e){e in r||delete q[e]})),Object.keys(r).forEach((function(e){q[e]=P(e)}))):Object.keys(q).forEach((function(e){delete q[e]}));break;case"onSubmit":s=r;break;case"validate":o=r,R(void 0,(function(){D(),_()}));break;case"validateOnBlur":l=r;break;default:throw new Error("Unrecognised option "+e)}},submit:function(){var e=d.formState;if(!e.submitting){if(delete e.submitErrors,delete e.submitError,e.lastSubmittedValues=(0,r.Z)({},e.values),d.formState.error||N(d.formState.errors))return I(),B(),d.formState.submitFailed=!0,_(),void D();var t=Object.keys(V);if(t.length)Promise.all(t.map((function(e){return V[Number(e)]}))).then(K.submit,console.error);else if(!Object.keys(d.fields).some((function(e){return d.fields[e].beforeSubmit&&!1===d.fields[e].beforeSubmit()}))){var i,n=!1,a=function(t){e.submitting=!1;var r=e.resetWhileSubmitting;return r&&(e.resetWhileSubmitting=!1),t&&N(t)?(e.submitFailed=!0,e.submitSucceeded=!1,e.submitErrors=t,e.submitError=t[b],I()):(r||(e.submitFailed=!1,e.submitSucceeded=!0),Object.keys(d.fields).forEach((function(e){return d.fields[e].afterSubmit&&d.fields[e].afterSubmit()}))),_(),D(),n=!0,i&&i(t),t};e.submitting=!0,e.submitFailed=!1,e.submitSucceeded=!1,e.lastSubmittedValues=(0,r.Z)({},e.values),B();var u=s(e.values,K,a);if(!n){if(u&&w(u))return _(),D(),u.then(a,(function(e){throw a(),e}));if(s.length>=3)return _(),D(),new Promise((function(e){i=e}));a(u)}}}},subscribe:function(e,t){if(!e)throw new Error("No callback given.");if(!t)throw new Error("No subscription provided. What values do you want to listen to?");var i=j(e),r=d.subscribers,n=r.index++;r.entries[n]={subscriber:i,subscription:t,notified:!1};var a=U();return A(i,t,a,a,O,!0),function(){delete r.entries[n]}}};return K}},645159:(e,t,i)=>{i.d(t,{q3:()=>c,Zd:()=>v,ZP:()=>m});var r=i(840506),n=i(460818),a=function(e){return!(!e||"function"!=typeof e.focus)},u=function(){return"undefined"==typeof document?[]:Array.prototype.slice.call(document.forms).reduce((function(e,t){return e.concat(Array.prototype.slice.call(t).filter(a))}),[])},s=function(e,t){return e.find((function(e){return e.name&&(0,n.u9)(t,e.name)}))},o=function(){};const l=function(e,t){return function(i){var r=function(i){e||(e=u),t||(t=s);var r=t(e(),i);r&&r.focus()},n=i.submit,a={},l=i.subscribe((function(e){a=e}),{errors:!0,submitErrors:!0}),d=function(){var e=a,t=e.errors,i=e.submitErrors;t&&Object.keys(t).length?r(t):i&&Object.keys(i).length&&r(i)};return i.submit=function(){var e=n.call(i);return e&&"function"==typeof e.then?e.then(d,o):d(),e},function(){l(),i.submit=n}}};var d=i(77266),f=i.n(d);const c=(0,r.createContext)({registerField:function(){return()=>{}},getCurrentValue:()=>{}}),v=(0,r.createContext)(!1);function m(e){const t=(0,r.useRef)(null),i=(0,r.useRef)(e.onSubmit);i.current=e.onSubmit;const[a]=(0,r.useState)((()=>{const e=(0,n.Np)({onSubmit:(...e)=>i.current(...e),destroyOnUnregister:!0,initialValues:{},mutators:{setDefaultValue:([e,t],i)=>{if(i.formState.initialValues){const r=i.formState.initialValues,n=i.formState.values,a=e&&"function"==typeof t?t(r[e]):t;f()(r,e,a),f()(n,e,a)}}}});return l((()=>t.current?Array.from(t.current.querySelectorAll("input")):[]))(e),e})),[u,s]=(0,r.useState)({dirty:!1,submitting:!1});(0,r.useEffect)((()=>{const e=a.subscribe((({dirty:e,submitting:t})=>{s({dirty:e,submitting:t})}),{dirty:!0,submitting:!0});return e}),[a]);const o=(0,r.useCallback)(((e,t,i,r,n)=>{a.pauseValidation();const u=a.registerField(e,i,r,n);return a.mutators.setDefaultValue(e,t),a.resumeValidation(),u}),[a]),{isDisabled:d=!1,children:m}=e,{dirty:b,submitting:S}=u,g=(0,r.useCallback)((e=>{const t=a.getState();return(null==t?void 0:t.values[e])||void 0}),[a]),h=(0,r.useMemo)((()=>({registerField:o,getCurrentValue:g})),[o,g]);return r.createElement(c.Provider,{value:h},r.createElement(v.Provider,{value:d},m({formProps:{onSubmit:e=>{e&&e.preventDefault(),a.submit()},ref:t,onKeyDown:e=>{if("Enter"===e.key&&(e.ctrlKey||e.metaKey)&&t.current){const i=t.current.querySelector('button:not([type]), button[type="submit"], input[type="submit"]');i&&i.click(),e.preventDefault()}}},dirty:b,reset:e=>{a.reset(e)},submitting:S,disabled:d,getState:()=>a.getState(),getValues:()=>a.getState().values,setFieldValue:a.change})))}m.displayName="Form"}}]);
//# sourceMappingURL=45159.QoeYG75KAG.js.map