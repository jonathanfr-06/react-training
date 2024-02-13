"use strict";(self._cf=self._cf||[]).push([[54305],{169147:(e,t,r)=>{r.d(t,{x:()=>H});var n=r(872342),s=r(358383),o=r(615919),i=r(443037),a=r.n(i),l=r(713608),c=r(188228),h=r(93934),p=r(333725),u=r(737073),d=r(738941),f=r(919684),m=r(658820),g=r(941933),y=r(75119);const k={canOverrideUnsupportedMark:()=>!0},S={canOverrideUnsupportedMark:()=>!1};var w=r(710358);function v(e){let t=(0,o.Z)({},e);return delete t.marks,t}function $(e){return(0,w.f)(e,{text:e=>e&&Array.isArray(e.marks)?(0,o.Z)((0,o.Z)({},e),{},{marks:e.marks.filter((e=>"typeAheadQuery"!==e.type))}):e,status:e=>!(!e.attrs||!e.attrs.text)&&v(e),caption:e=>!!e.content&&e,emoji:v,mention:v,date:v,hardBreak:v,inlineCard:v})}let b=function(e){return e.FINAL="final",e.STAGE_0="stage0",e}({});const O=e=>t=>t.type.name===e,M=O("codeBlock"),N=O("media"),x=O("mediaInline"),J=O("mediaSingle"),I=O("mention"),F=O("paragraph"),E=O("heading"),B=O("table"),C=O("tableCell"),T=O("tableHeader"),A=O("link"),R=O("unsupportedMark"),D=O("unsupportedNodeAttribute"),j=O("expand"),z=O("nestedExpand"),Z=O("dataConsumer"),V=O("fragment"),L=e=>{let t=(0,o.Z)({},e);for(const r in t){const e=t[r];if(null===e){const{[r]:e}=t;t=(0,n.Z)(t,[r].map(s.Z))}else"object"!=typeof e||Array.isArray(e)||(t[r]=L(e))}return t},q=e=>({version:1,type:"doc",content:e||[]}),P=q([{type:"paragraph",content:[]}]),W=e=>{const t={type:e.type.name};if((e=>O("unsupportedBlock")(e)||O("unsupportedInline")(e))(e))return e.attrs.originalValue;if(N(e)?t.attrs=(0,l.au)(e).attrs:J(e)?t.attrs=(0,c.au)(e).attrs:x(e)?t.attrs=(0,l.au)(e).attrs:I(e)?t.attrs=(0,h.au)(e).attrs:M(e)?t.attrs=(0,p.a)(e).attrs:B(e)?t.attrs=(0,u.oc)(e).attrs:C(e)?t.attrs=(0,u.pp)(e).attrs:T(e)?t.attrs=(0,u.Ae)(e).attrs:j(e)||z(e)?t.attrs=(0,d.a)(e).attrs:e.attrs&&Object.keys(e.attrs).length&&(t.attrs=e.attrs),t.attrs&&(t.attrs=L(t.attrs)),e.isText?t.text=e.textContent:e.content.forEach((e=>{t.content=t.content||[],t.content.push(W(e))})),(F(e)||E(e))&&(t.content=t.content||[]),e.marks.length){const r=e.marks.map((t=>{if(R(t))return Y(t,e.marks)?null:t.attrs.originalValue;if(D(t))return null;if(A(t))return(0,f.a)(t);if(Z(t)){var r;const e=(0,m.a)(t);return e.attrs.sources&&0!==(null===(r=e.attrs.sources)||void 0===r?void 0:r.length)?e:null}if(V(t)){const e=(0,g.a)(t);return e.attrs.localId?e:null}return t.toJSON()})).filter((e=>null!==e));t.marks=(null==r?void 0:r.length)>0?r:void 0;const n=e.marks.find(D);n&&n.attrs.type.nodeType===t.type&&(t.attrs=(0,o.Z)({},G(e,n,t)))}return t},Y=(e,t)=>!!t.some((t=>e.attrs.originalValue.type===t.type.name))&&(e=>{switch(e){case"link":case"em":case"strong":case"strike":case"subsup":case"underline":case"code":case"textColor":case"confluenceInlineComment":case"breakout":case"alignment":case"indentation":case"border":return k;default:return S}})(e.attrs.originalValue.type).canOverrideUnsupportedMark(),G=(e,t,r)=>{const n=e.type.spec.attrs,s=(0,o.Z)((0,o.Z)({},t.attrs.unsupported),r.attrs);for(var i in r.attrs)if(r.attrs.hasOwnProperty(i)){const r=n?n[i]:null;if(r&&r.default===e.attrs[i]&&t.attrs.unsupported[i])return(0,o.Z)((0,o.Z)({},s),{},{[i]:t.attrs.unsupported[i]})}return s};class H{encode(e){const t=[];return e.content.forEach((e=>{t.push($(W(e)))})),!t||a()(t,P.content)?q([]):q(t)}internalParse(e,t=b.FINAL){const r=(0,y.kp)(t).nodeFromJSON(e);return r.check(),r}parse(e,t){if("doc"!==e.type)throw new Error("Expected content format to be ADF");return e.content&&0!==e.content.length?this.internalParse(e,t):this.internalParse(P,t)}encodeNode(e){return $(W(e))}}},158568:(e,t,r)=>{r.d(t,{Bd:()=>re,D$:()=>W,DT:()=>l,EG:()=>f,Eg:()=>le,G7:()=>J,Gh:()=>pe,H5:()=>g,Ht:()=>ee,IB:()=>u,In:()=>oe,Is:()=>c,J1:()=>O,Kv:()=>H,LB:()=>K,LI:()=>S,MJ:()=>P,Qd:()=>o,Qz:()=>ne,Rt:()=>h,UO:()=>te,Vt:()=>A,X$:()=>L,XV:()=>z,Xr:()=>ae,Y3:()=>G,Zr:()=>N,Zs:()=>B,_2:()=>Z,_J:()=>ie,aE:()=>b,aX:()=>E,cF:()=>F,cw:()=>q,dA:()=>_,dY:()=>p,fO:()=>y,iF:()=>ue,k2:()=>x,kI:()=>X,kx:()=>C,nM:()=>I,nm:()=>M,pV:()=>he,pX:()=>m,pt:()=>Q,qR:()=>k,qh:()=>U,qv:()=>d,r0:()=>$,re:()=>R,rh:()=>T,sF:()=>V,sM:()=>Y,ur:()=>ce,uz:()=>D,wX:()=>w,y:()=>a,yV:()=>v,zH:()=>se,zJ:()=>j,zd:()=>i});var n=r(16728),s=r(2142);const o=16,i=(0,s.Vj)(),a=n.YS,l=n.YS,c=n.r6,h="rgba(255, 189, 173, 0.5)",p=n.rt,u=n.$H,d=20,f=n.M5,m=n.BA,g=1,y=`${g}px solid var(--ds-border-selected, ${f})`,k=`0 0 0 ${g}px var(--ds-border-selected, ${f})`,S=2,w=1,v=2,$=11,b=$+1,O=1,M=s.ug.blanket(),N=s.ug.layer(),x=M+10,J=x-5,I=N+5,F=11,E=n.uv,B=n.IR,C="#F1F2F4",T=n.M5,A=680,R=760,D=960,j=1800,z=42,Z=96,V=32,L=720,q=48,P=128,W=12,Y=4,G="cubic-bezier(0.15, 1, 0.3, 1)",H=1024,X=1.33,K=1011,_=99*w,U=1.5*(0,s.ww)(),Q=1.714,ee=2,te=320,re="rgba(179, 212, 255, 0.3)",ne="rgba(255, 235, 230, 0.3)",se="0.75rem",oe=680,ie=480,ae=20,le="56px",ce="ak-editor-selected-node",he=({theme:e})=>e&&e.baseFontSize?e.baseFontSize:(0,s.JB)(),pe=e=>{if("string"==typeof e&&(e=parseInt(e)),isNaN(e))throw new Error(`Invalid font size: '${e}'`);return e/16+"rem"},ue=0;[["White","#000000"],["Light blue","#0C294F"],["Light teal","#0C343B"],["Light green","#052E21"],["Light yellow","#484123"],["Light red","#441C13"],["Light purple","#282249"],["Light gray","#202328"],["Blue","#0B3165"],["Teal","#044853"],["Green","#053927"],["Yellow","#6F5C25"],["Red","#582013"],["Purple","#3E327B"],["Gray","#475262"],["Dark blue","#003884"],["Dark teal","#055866"],["Dark green","#044932"],["Dark yellow","#82641C"],["Dark red","#6B2A19"],["Dark purple","#4D38B2"]].map((([e,t])=>function(e,t){return`\n  &[colorname="${e}"] {\n    background-color: ${t} !important; // !important to override default style color\n  }\n  `}(e,t))).join("\n")},443998:(e,t,r)=>{r.d(t,{Bs:()=>h,C1:()=>f,H$:()=>J,Sy:()=>M,Y1:()=>i,YW:()=>k,qv:()=>u,xm:()=>a,yy:()=>b});var n=r(731462),s=r(930487);const o=Object.create(null);class i{constructor(e,t,r){this.$anchor=e,this.$head=t,this.ranges=r||[new a(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=n.p2.empty){let r=t.content.lastChild,s=null;for(let n=0;n<t.openEnd;n++)s=r,r=r.lastChild;let o=e.steps.length,i=this.ranges;for(let a=0;a<i.length;a++){let{$from:l,$to:c}=i[a],h=e.mapping.slice(o);e.replaceRange(h.map(l.pos),h.map(c.pos),a?n.p2.empty:t),0==a&&y(e,o,(r?r.isInline:s&&s.isTextblock)?-1:1)}}replaceWith(e,t){let r=e.steps.length,n=this.ranges;for(let s=0;s<n.length;s++){let{$from:o,$to:i}=n[s],a=e.mapping.slice(r),l=a.map(o.pos),c=a.map(i.pos);s?e.deleteRange(l,c):(e.replaceRangeWith(l,c,t),y(e,r,t.isInline?-1:1))}}static findFrom(e,t,r=!1){let n=e.parent.inlineContent?new h(e):g(e.node(0),e.parent,e.pos,e.index(),t,r);if(n)return n;for(let s=e.depth-1;s>=0;s--){let n=t<0?g(e.node(0),e.node(s),e.before(s+1),e.index(s),t,r):g(e.node(0),e.node(s),e.after(s+1),e.index(s)+1,t,r);if(n)return n}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new f(e.node(0))}static atStart(e){return g(e,e,0,0,1)||new f(e)}static atEnd(e){return g(e,e,e.content.size,e.childCount,-1)||new f(e)}static fromJSON(e,t){if(!t||!t.type)throw new RangeError("Invalid input for Selection.fromJSON");let r=o[t.type];if(!r)throw new RangeError(`No selection type ${t.type} defined`);return r.fromJSON(e,t)}static jsonID(e,t){if(e in o)throw new RangeError("Duplicate use of selection JSON ID "+e);return o[e]=t,t.prototype.jsonID=e,t}getBookmark(){return h.between(this.$anchor,this.$head).getBookmark()}}i.prototype.visible=!0;class a{constructor(e,t){this.$from=e,this.$to=t}}let l=!1;function c(e){l||e.parent.inlineContent||(l=!0,console.warn("TextSelection endpoint not pointing into a node with inline content ("+e.parent.type.name+")"))}class h extends i{constructor(e,t=e){c(e),c(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(e,t){let r=e.resolve(t.map(this.head));if(!r.parent.inlineContent)return i.near(r);let n=e.resolve(t.map(this.anchor));return new h(n.parent.inlineContent?n:r,r)}replace(e,t=n.p2.empty){if(super.replace(e,t),t==n.p2.empty){let t=this.$from.marksAcross(this.$to);t&&e.ensureMarks(t)}}eq(e){return e instanceof h&&e.anchor==this.anchor&&e.head==this.head}getBookmark(){return new p(this.anchor,this.head)}toJSON(){return{type:"text",anchor:this.anchor,head:this.head}}static fromJSON(e,t){if("number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid input for TextSelection.fromJSON");return new h(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,r=t){let n=e.resolve(t);return new this(n,r==t?n:e.resolve(r))}static between(e,t,r){let n=e.pos-t.pos;if(r&&!n||(r=n>=0?1:-1),!t.parent.inlineContent){let e=i.findFrom(t,r,!0)||i.findFrom(t,-r,!0);if(!e)return i.near(t,r);t=e.$head}return e.parent.inlineContent||(0==n||(e=(i.findFrom(e,-r,!0)||i.findFrom(e,r,!0)).$anchor).pos<t.pos!=n<0)&&(e=t),new h(e,t)}}i.jsonID("text",h);class p{constructor(e,t){this.anchor=e,this.head=t}map(e){return new p(e.map(this.anchor),e.map(this.head))}resolve(e){return h.between(e.resolve(this.anchor),e.resolve(this.head))}}class u extends i{constructor(e){let t=e.nodeAfter,r=e.node(0).resolve(e.pos+t.nodeSize);super(e,r),this.node=t}map(e,t){let{deleted:r,pos:n}=t.mapResult(this.anchor),s=e.resolve(n);return r?i.near(s):new u(s)}content(){return new n.p2(n.HY.from(this.node),0,0)}eq(e){return e instanceof u&&e.anchor==this.anchor}toJSON(){return{type:"node",anchor:this.anchor}}getBookmark(){return new d(this.anchor)}static fromJSON(e,t){if("number"!=typeof t.anchor)throw new RangeError("Invalid input for NodeSelection.fromJSON");return new u(e.resolve(t.anchor))}static create(e,t){return new u(e.resolve(t))}static isSelectable(e){return!e.isText&&!1!==e.type.spec.selectable}}u.prototype.visible=!1,i.jsonID("node",u);class d{constructor(e){this.anchor=e}map(e){let{deleted:t,pos:r}=e.mapResult(this.anchor);return t?new p(r,r):new d(r)}resolve(e){let t=e.resolve(this.anchor),r=t.nodeAfter;return r&&u.isSelectable(r)?new u(t):i.near(t)}}class f extends i{constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=n.p2.empty){if(t==n.p2.empty){e.delete(0,e.doc.content.size);let t=i.atStart(e.doc);t.eq(e.selection)||e.setSelection(t)}else super.replace(e,t)}toJSON(){return{type:"all"}}static fromJSON(e){return new f(e)}map(e){return new f(e)}eq(e){return e instanceof f}getBookmark(){return m}}i.jsonID("all",f);const m={map(){return this},resolve:e=>new f(e)};function g(e,t,r,n,s,o=!1){if(t.inlineContent)return h.create(e,r);for(let i=n-(s>0?0:1);s>0?i<t.childCount:i>=0;i+=s){let n=t.child(i);if(n.isAtom){if(!o&&u.isSelectable(n))return u.create(e,r-(s<0?n.nodeSize:0))}else{let t=g(e,n,r+s,s<0?n.childCount:0,s,o);if(t)return t}r+=n.nodeSize*s}return null}function y(e,t,r){let n=e.steps.length-1;if(n<t)return;let o,a=e.steps[n];(a instanceof s.Pu||a instanceof s.FC)&&(e.mapping.maps[n].forEach(((e,t,r,n)=>{null==o&&(o=n)})),e.setSelection(i.near(e.doc.resolve(o),r)))}class k extends s.wx{constructor(e){super(e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}get selection(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection}setSelection(e){if(e.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=e,this.curSelectionFor=this.steps.length,this.updated=-3&(1|this.updated),this.storedMarks=null,this}get selectionSet(){return(1&this.updated)>0}setStoredMarks(e){return this.storedMarks=e,this.updated|=2,this}ensureMarks(e){return n.vc.sameSet(this.storedMarks||this.selection.$from.marks(),e)||this.setStoredMarks(e),this}addStoredMark(e){return this.ensureMarks(e.addToSet(this.storedMarks||this.selection.$head.marks()))}removeStoredMark(e){return this.ensureMarks(e.removeFromSet(this.storedMarks||this.selection.$head.marks()))}get storedMarksSet(){return(2&this.updated)>0}addStep(e,t){super.addStep(e,t),this.updated=-3&this.updated,this.storedMarks=null}setTime(e){return this.time=e,this}replaceSelection(e){return this.selection.replace(this,e),this}replaceSelectionWith(e,t=!0){let r=this.selection;return t&&(e=e.mark(this.storedMarks||(r.empty?r.$from.marks():r.$from.marksAcross(r.$to)||n.vc.none))),r.replaceWith(this,e),this}deleteSelection(){return this.selection.replace(this),this}insertText(e,t,r){let n=this.doc.type.schema;if(null==t)return e?this.replaceSelectionWith(n.text(e),!0):this.deleteSelection();{if(null==r&&(r=t),r=null==r?t:r,!e)return this.deleteRange(t,r);let s=this.storedMarks;if(!s){let e=this.doc.resolve(t);s=r==t?e.marks():e.marksAcross(this.doc.resolve(r))}return this.replaceRangeWith(t,r,n.text(e,s)),this.selection.empty||this.setSelection(i.near(this.selection.$to)),this}}setMeta(e,t){return this.meta["string"==typeof e?e:e.key]=t,this}getMeta(e){return this.meta["string"==typeof e?e:e.key]}get isGeneric(){for(let e in this.meta)return!1;return!0}scrollIntoView(){return this.updated|=4,this}get scrolledIntoView(){return(4&this.updated)>0}}function S(e,t){return t&&e?e.bind(t):e}class w{constructor(e,t,r){this.name=e,this.init=S(t.init,r),this.apply=S(t.apply,r)}}const v=[new w("doc",{init:e=>e.doc||e.schema.topNodeType.createAndFill(),apply:e=>e.doc}),new w("selection",{init:(e,t)=>e.selection||i.atStart(t.doc),apply:e=>e.selection}),new w("storedMarks",{init:e=>e.storedMarks||null,apply:(e,t,r,n)=>n.selection.$cursor?e.storedMarks:null}),new w("scrollToSelection",{init:()=>0,apply:(e,t)=>e.scrolledIntoView?t+1:t})];class ${constructor(e,t){this.schema=e,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=v.slice(),t&&t.forEach((e=>{if(this.pluginsByKey[e.key])throw new RangeError("Adding different instances of a keyed plugin ("+e.key+")");this.plugins.push(e),this.pluginsByKey[e.key]=e,e.spec.state&&this.fields.push(new w(e.key,e.spec.state,e))}))}}class b{constructor(e){this.config=e}get schema(){return this.config.schema}get plugins(){return this.config.plugins}apply(e){return this.applyTransaction(e).state}filterTransaction(e,t=-1){for(let r=0;r<this.config.plugins.length;r++)if(r!=t){let t=this.config.plugins[r];if(t.spec.filterTransaction&&!t.spec.filterTransaction.call(t,e,this))return!1}return!0}applyTransaction(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};let t=[e],r=this.applyInner(e),n=null;for(;;){let s=!1;for(let o=0;o<this.config.plugins.length;o++){let i=this.config.plugins[o];if(i.spec.appendTransaction){let a=n?n[o].n:0,l=n?n[o].state:this,c=a<t.length&&i.spec.appendTransaction.call(i,a?t.slice(a):t,l,r);if(c&&r.filterTransaction(c,o)){if(c.setMeta("appendedTransaction",e),!n){n=[];for(let e=0;e<this.config.plugins.length;e++)n.push(e<o?{state:r,n:t.length}:{state:this,n:0})}t.push(c),r=r.applyInner(c),s=!0}n&&(n[o]={state:r,n:t.length})}}if(!s)return{state:r,transactions:t}}}applyInner(e){if(!e.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");let t=new b(this.config),r=this.config.fields;for(let n=0;n<r.length;n++){let s=r[n];t[s.name]=s.apply(e,this[s.name],this,t)}return t}get tr(){return new k(this)}static create(e){let t=new $(e.doc?e.doc.type.schema:e.schema,e.plugins),r=new b(t);for(let n=0;n<t.fields.length;n++)r[t.fields[n].name]=t.fields[n].init(e,r);return r}reconfigure(e){let t=new $(this.schema,e.plugins),r=t.fields,n=new b(t);for(let s=0;s<r.length;s++){let t=r[s].name;n[t]=this.hasOwnProperty(t)?this[t]:r[s].init(e,n)}return n}toJSON(e){let t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(t.storedMarks=this.storedMarks.map((e=>e.toJSON()))),e&&"object"==typeof e)for(let r in e){if("doc"==r||"selection"==r)throw new RangeError("The JSON fields `doc` and `selection` are reserved");let n=e[r],s=n.spec.state;s&&s.toJSON&&(t[r]=s.toJSON.call(n,this[n.key]))}return t}static fromJSON(e,t,r){if(!t)throw new RangeError("Invalid input for EditorState.fromJSON");if(!e.schema)throw new RangeError("Required config field 'schema' missing");let s=new $(e.schema,e.plugins),o=new b(s);return s.fields.forEach((s=>{if("doc"==s.name)o.doc=n.NB.fromJSON(e.schema,t.doc);else if("selection"==s.name)o.selection=i.fromJSON(o.doc,t.selection);else if("storedMarks"==s.name)t.storedMarks&&(o.storedMarks=t.storedMarks.map(e.schema.markFromJSON));else{if(r)for(let n in r){let i=r[n],a=i.spec.state;if(i.key==s.name&&a&&a.fromJSON&&Object.prototype.hasOwnProperty.call(t,n))return void(o[s.name]=a.fromJSON.call(i,e,t[n],o))}o[s.name]=s.init(e,o)}})),o}}function O(e,t,r){for(let n in e){let s=e[n];s instanceof Function?s=s.bind(t):"handleDOMEvents"==n&&(s=O(s,t,{})),r[n]=s}return r}class M{constructor(e){this.spec=e,this.props={},e.props&&O(e.props,this,this.props),this.key=e.key?e.key.key:x("plugin")}getState(e){return e[this.key]}}const N=Object.create(null);function x(e){return e in N?e+"$"+ ++N[e]:(N[e]=0,e+"$")}class J{constructor(e="key"){this.key=x(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}}}}]);
//# sourceMappingURL=54305.KAziiQdNyq.js.map