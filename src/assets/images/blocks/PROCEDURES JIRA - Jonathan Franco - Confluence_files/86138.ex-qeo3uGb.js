(self._cf=self._cf||[]).push([[86138],{576083:(e,t,r)=>{var s=r(294487);e.exports=function(e,t){return!!(null==e?0:e.length)&&s(e,t,0)>-1}},143637:e=>{e.exports=function(e,t,r){for(var s=-1,i=null==e?0:e.length;++s<i;)if(r(t,e[s]))return!0;return!1}},343047:e=>{e.exports=function(e,t,r,s){for(var i=e.length,n=r+(s?1:-1);s?n--:++n<i;)if(t(e[n],n,e))return n;return-1}},294487:(e,t,r)=>{var s=r(343047),i=r(356749),n=r(965551);e.exports=function(e,t,r){return t==t?n(e,t,r):s(e,i,r)}},356749:e=>{e.exports=function(e){return e!=e}},35371:(e,t,r)=>{var s=r(859126),i=r(576083),n=r(143637),o=r(200978),a=r(116742),l=r(505265);e.exports=function(e,t,r){var d=-1,c=i,h=e.length,u=!0,g=[],p=g;if(r)u=!1,c=n;else if(h>=200){var v=t?null:a(e);if(v)return l(v);u=!1,c=o,p=new s}else p=t?[]:g;e:for(;++d<h;){var f=e[d],m=t?t(f):f;if(f=r||0!==f?f:0,u&&m==m){for(var x=p.length;x--;)if(p[x]===m)continue e;t&&p.push(m),g.push(f)}else c(p,m,r)||(p!==g&&p.push(m),g.push(f))}return g}},116742:(e,t,r)=>{var s=r(204005),i=r(272786),n=r(505265),o=s&&1/n(new s([,-0]))[1]==1/0?function(e){return new s(e)}:i;e.exports=o},965551:e=>{e.exports=function(e,t,r){for(var s=r-1,i=e.length;++s<i;)if(e[s]===t)return s;return-1}},497507:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(615919),i=r(872342),n=r(840506),o=r(39030),a=r(483039),l=r(319754),d=r(24359),c=r(370679);const h=["component","cssFn","isDisabled","isSelected","onClick","testId","children","description","iconAfter","iconBefore","overrides","onMouseDown","shouldTitleWrap","shouldDescriptionWrap","className"],u=e=>{e.preventDefault()},g=(0,n.memo)((0,n.forwardRef)(((e,t)=>{let{component:r,cssFn:n=l.Z,isDisabled:g=!1,isSelected:p=!1,onClick:v,testId:f,children:m,description:x,iconAfter:w,iconBefore:b,overrides:Z,onMouseDown:$,shouldTitleWrap:k,shouldDescriptionWrap:z,className:H}=e,S=(0,i.Z)(e,h);const W=$;return r?((0,a.o)("platform-pkg","cssFn",n!==l.Z,""),(0,o.tZ)(c.Z,(0,s.Z)((0,s.Z)({className:(0,d.e)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:H},S),{},{overrides:Z,description:x,iconAfter:w,title:m,iconBefore:b,isSelected:p,isDisabled:g,shouldTitleWrap:k,shouldDescriptionWrap:z,css:(0,o.iv)(n({isDisabled:g,isSelected:p})),testId:f&&`${f}--primitive`}),(({children:e,className:i})=>(0,o.tZ)(r,(0,s.Z)((0,s.Z)({"data-testid":f},S),{},{className:i,ref:t,draggable:!1,onDragStart:u,onMouseDown:g?u:W,onClick:g?u:v,tabIndex:g?-1:void 0,"aria-disabled":g}),e)))):null})))},951650:(e,t,r)=>{"use strict";r.d(t,{NE:()=>d,UL:()=>n,ld:()=>l});var s=r(615919),i=r(16728);const n=(e,t=(()=>({})))=>r=>[e(r),t(r)],o={"&:hover":{color:`var(--ds-text-subtle, ${i.Mx})`,backgroundColor:`var(--ds-background-neutral-subtle-hovered, ${i.gt})`},"&:active":{color:`var(--ds-text-subtle, ${i.AX})`,backgroundColor:`var(--ds-background-neutral-subtle-pressed, ${i.BA})`}},a={backgroundColor:`var(--ds-background-selected, ${i.gt})`,color:`var(--ds-text-selected, ${i.AX})`,":visited":{color:`var(--ds-text-selected, ${i.AX})`},"&:hover":{backgroundColor:`var(--ds-background-selected-hovered, ${i.gt})`,color:`var(--ds-text-selected, ${i.Mx})`},"&:active":{backgroundColor:`var(--ds-background-selected-pressed, ${i.BA})`,color:`var(--ds-text-selected, ${i.AX})`}},l=({isSelected:e,isDisabled:t})=>(0,s.Z)((0,s.Z)((0,s.Z)({paddingBlock:"var(--ds-space-100, 8px)",paddingInline:"var(--ds-space-100, 8px)",borderRadius:"var(--ds-border-radius, 3px)",backgroundColor:"var(--ds-background-neutral-subtle, transparent)"},!t&&!e&&o),!t&&e&&a),{},{"& [data-item-elem-before]":{height:"var(--ds-space-300, 24px)",width:"var(--ds-space-300, 24px)"}}),d=()=>({paddingInline:"var(--ds-space-100, 8px)"})},408188:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(615919),i=r(872342),n=r(840506),o=r(497507),a=r(951650),l=r(193969);const d=["cssFn"],c=(0,n.forwardRef)(((e,t)=>{let{cssFn:r}=e,c=(0,i.Z)(e,d);const{shouldRender:h}=(0,l.mO)();if(!h)return null;const u=(0,a.UL)(a.ld,r);return n.createElement(o.Z,(0,s.Z)({ref:t,cssFn:u},c))}))},193969:(e,t,r)=>{"use strict";r.d(t,{m:()=>i,mO:()=>o,wC:()=>n});var s=r(840506);const i=(0,s.createContext)(void 0),n=()=>{const e=(0,s.useContext)(i);if(!e){throw new Error("")}return e},o=()=>{const e=(0,s.useContext)(i);return e?{shouldRender:e.currentStackId===e.parentId}:{shouldRender:!0}}},233006:(e,t,r)=>{"use strict";r.d(t,{$G:()=>a,AC:()=>g,Dq:()=>d,Mf:()=>f,aR:()=>l,lL:()=>h,pB:()=>v,pp:()=>c,qm:()=>p,uU:()=>u});var s=r(615919),i=r(16728),n=r(2142);const o=(e,t)=>({fontSize:e/(0,n.JB)()+"em",fontStyle:"inherit",lineHeight:t/e}),a={h900:{size:35,lineHeight:40},h800:{size:29,lineHeight:32},h700:{size:24,lineHeight:28},h600:{size:20,lineHeight:24},h500:{size:16,lineHeight:20},h400:{size:14,lineHeight:16},h300:{size:12,lineHeight:16},h200:{size:12,lineHeight:16},h100:{size:11,lineHeight:16}},l=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h900.size,a.h900.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.01em",marginTop:6.5*(0,n.ww)()+"px"}),d=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h800.size,a.h800.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.01em",marginTop:5*(0,n.ww)()+"px"}),c=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h700.size,a.h700.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.01em",marginTop:5*(0,n.ww)()+"px"}),h=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h600.size,a.h600.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.008em",marginTop:3.5*(0,n.ww)()+"px"}),u=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h500.size,a.h500.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.006em",marginTop:3*(0,n.ww)()+"px"}),g=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h400.size,a.h400.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.003em",marginTop:2*(0,n.ww)()+"px"}),p=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h300.size,a.h300.lineHeight)),{},{color:`var(--ds-text, ${(0,i.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",marginTop:2.5*(0,n.ww)()+"px",textTransform:"uppercase"}),v=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h200.size,a.h200.lineHeight)),{},{color:`var(--ds-text-subtlest, ${(0,i.Pe)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",marginTop:2*(0,n.ww)()+"px"}),f=(e={})=>(0,s.Z)((0,s.Z)({},o(a.h100.size,a.h100.lineHeight)),{},{color:`var(--ds-text-subtlest, ${(0,i.Pe)(e)})`,fontWeight:"var(--ds-font-weight-bold, 700)",marginTop:2*(0,n.ww)()+"px"})}}]);
//# sourceMappingURL=86138.ex-qeo3uGb.js.map