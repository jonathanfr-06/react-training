"use strict";(self._cf=self._cf||[]).push([[9539],{528516:(e,t,a)=>{a.r(t),a.d(t,{RendererContentState:()=>_,RendererContentStateImpl:()=>f});var n=a(840506),r=a(167347),l=a(54685),s=a(9019),o=a(438809),c=a(207688),d=a(434853);let i=function(e){return e.GLOBAL="GLOBAL",e.MILLIS="MILLIS",e.USER="USER",e.USER_FRIENDLY="USER_FRIENDLY",e}({});const m=a(779076).ZP`query RendererContentState($contentId:ID!$isDraft:Boolean!$format:GraphQLDateFormat){singleContent(id:$contentId){id contentState(isDraft:$isDraft){id name color}contentStateLastUpdated(format:$format){value}}}`,f=({contentId:e,isPagePreview:t,hasSeparator:a})=>{var l,s;const{data:f,refetch:_}=(0,r.aM)(m,{fetchPolicy:"cache-and-network",variables:{contentId:e,isDraft:t,format:i.USER_FRIENDLY}});if(!f)return null;const u=null==f||null===(l=f.singleContent)||void 0===l||null===(l=l.contentStateLastUpdated)||void 0===l?void 0:l.value,Z=null==f||null===(s=f.singleContent)||void 0===s?void 0:s.contentState;return n.createElement(n.Fragment,null,Z&&n.createElement(d.R,{contentId:e,contentState:Z,lastUpdatedInfo:u,isPagePreview:t,hasSeparator:a}),n.createElement(o.h,{name:"content-state",types:[c.ai.content],reload:_}))};f.displayName="RendererContentStateImpl";const _=(0,l.m)({attribution:s.x.CONTENT_EXPERIENCE})(f)},434853:(e,t,a)=>{a.d(t,{w:()=>S,R:()=>h});var n=a(940155),r=a(615919),l=a(872342),s=a(840506),o=a(920839),c=a(767001),d=a(16728);const i=["as","style"],m=["as","style"],f=["as","style"],_=["as","style"],u=["as","style"];a(536980),a(145229),a(465206),a(500026),a(563952),a(654677),a(666842),a(163192),a(479865),a(672381),a(792010),a(374396),a(212809),a(234119),a(438641),a(696084),a(506840),a(456928),a(354326);const Z=(0,s.forwardRef)(((e,t)=>{let{as:a="li",style:n}=e,m=(0,l.Z)(e,i);return s.createElement(a,(0,r.Z)((0,r.Z)({},m),{},{style:(0,r.Z)((0,r.Z)({},n),{},{"--_1dixpwq":(0,o.Z)(`var(--ds-background-neutral, ${d.IR})`),"--_h7os2z":(0,o.Z)("var(--ds-space-100, 8px)")}),ref:t,className:(0,c.Z)(["_1e0c1txw _4cvr1h6o _80omtlke _1tkezwfg _bfhk135j _2rko1l7b _u5f31xra",m.className])}))}));const v=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,o=(0,l.Z)(e,m);return s.createElement(a,(0,r.Z)((0,r.Z)({},o),{},{style:n,ref:t,className:(0,c.Z)(["_k48pbfng _3um015vq",o.className])}))}));const R=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,i=(0,l.Z)(e,f);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:(0,r.Z)((0,r.Z)({},n),{},{"--_h7os2z":(0,o.Z)("var(--ds-space-100, 8px)"),"--_1dixpwq":(0,o.Z)(`var(--ds-background-neutral, ${d.IR})`)}),ref:t,className:(0,c.Z)(["_2rko1crf _4t3i1crf _1bsb1crf _18s8v38n _bfhk135j",i.className])}))}));const E=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,d=(0,l.Z)(e,_);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},n),{},{"--_fs18mb":(0,o.Z)("var(--ds-border-accent-gray, rgba(107, 119, 140, 0.3))"),"--_1nvt7kj":(0,o.Z)("var(--ds-space-050, 4px)")}),ref:t,className:(0,c.Z)(["_1kl7e7xz _1e0c1o8l _1bsbt94y _4t3i7vkz _18s8s5mh _1wpz1h6o",d.className])}))}));const p=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,o=(0,l.Z)(e,u);return s.createElement(a,(0,r.Z)((0,r.Z)({},o),{},{style:n,ref:t,className:(0,c.Z)(["_1e0c1txw",o.className])}))}));const y=({contentState:e,isPagePreview:t})=>s.createElement(p,null,s.createElement(Z,{"data-testid":"renderer-content-state-placeholder"},s.createElement(R,null),s.createElement(v,null,null==e?void 0:e.name)),!t&&s.createElement(E,{"data-testid":"placeholder-vertical-line"}));y.displayName="RendererContentStatePlaceholder";const S=(0,n.ZR)({__loadable_id__:"ouXfG",name:"LazyEditorContentStateComponent",loader:async()=>(await Promise.all([a.e(12705),a.e(11216),a.e(45159),a.e(84068),a.e(53224)]).then(a.bind(a,579682))).EditorContentStateComponent}),h=(0,n.ZR)({__loadable_id__:"RqDST",name:"LazyRendererContentStateComponent",loader:async()=>(await Promise.all([a.e(12705),a.e(82029)]).then(a.bind(a,682517))).RendererContentStateComponent,loading:y})},438809:(e,t,a)=>{a.d(t,{h:()=>r});var n=a(758771);const r=e=>((0,n.t)(e),null)},758771:(e,t,a)=>{a.d(t,{t:()=>l});var n=a(840506),r=a(207688);const l=e=>{const{contentId:t,registerReloader:a,unregisterReloader:l}=(0,n.useContext)(r.qC);(0,n.useEffect)((()=>(a(e),()=>{l(e)})),[t,e.reload,e.name])}}}]);
//# sourceMappingURL=9539.PVcRQiBETJ.js.map