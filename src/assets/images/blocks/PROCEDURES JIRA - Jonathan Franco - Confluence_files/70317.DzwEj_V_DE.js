(self._cf=self._cf||[]).push([[70317],{296858:(e,t,o)=>{var r=o(394367),n=o(130575);e.exports=function(e,t,o){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(o)&&(a="leading"in o?!!o.leading:a,i="trailing"in o?!!o.trailing:i),r(e,t,{leading:a,maxWait:t,trailing:i})}},575863:(e,t,o)=>{"use strict";o.d(t,{Mw:()=>a,Ur:()=>r,aw:()=>n});(0,o(2142).JB)();const r=56,n=1280,a=1130},6632:(e,t,o)=>{"use strict";o.d(t,{M:()=>O});var r=o(39030),n=o(806640),a=o(24359),i=o(16728),s=o(575863),l=o(125551),c=o(871118),d=o(615919),u=o(840506),v=o(724093),p=o(752640),g=o(374159),m=o(614474);const h=(0,r.iv)({display:"flex",height:"100%",position:"relative",alignItems:"stretch",flexBasis:0,flexGrow:1,flexShrink:0,"& > *":{margin:"0 var(--ds-space-050, 4px)",flexShrink:0}}),C=(0,r.iv)({width:"100%",minWidth:"1px",margin:"0px",position:"relative",flexShrink:1}),b=({moreLabel:e,items:t,create:o,theme:n,testId:a})=>{const[i,s]=(0,u.useState)(!1),{updateWidth:l,visibleItems:c,overflowItems:b}=(0,g.vJ)(t),f=(0,u.useCallback)((()=>{s(!i)}),[i,s]),x=(0,u.useCallback)((()=>{s(!1)}),[]),S=(0,u.useCallback)((()=>{s(!0)}),[]),w=(0,u.useCallback)((t=>(0,r.tZ)(m.X,(0,d.Z)({onClick:f,isSelected:i,testId:a?`${a}-overflow-menu-trigger`:"overflow-menu-trigger"},t),e)),[e,f,i,a]),$=(0,u.useCallback)((()=>(0,r.tZ)(g.$J,{isVisible:!1,openOverflowMenu:S,closeOverflowMenu:x},b)),[b.length,S,x]);return(0,r.tZ)("div",{css:h,"data-testid":a&&`${a}-primary-actions`,role:"list"},(0,r.tZ)(g.$J,{isVisible:!0,openOverflowMenu:S,closeOverflowMenu:x},c),b.length>0&&(0,r.tZ)(v.Z,{placement:"bottom-start",content:$,isOpen:i,onClose:x,trigger:w,testId:a?`${a}-overflow-menu-popup`:"overflow-menu-popup"}),o&&(0,r.tZ)(o,null),(0,r.tZ)("div",{css:C},(0,r.tZ)(p.K,{offscreen:!0,setWidth:l})))};b.displayName="PrimaryItemsContainer";var f=o(723177),x=o(429762),S=o(957262),w=o(455113),$=o(25815);const k=(0,f.tu)({height:"100%"}),Z=(0,f.tu)({height:"100%",alignItems:"stretch",paddingInlineEnd:"space.050",gap:"space.100"}),y=(0,f.tu)({[w.B.above.sm]:{display:"none"}}),L=(0,f.tu)({display:"none",[w.B.above.sm]:{display:"flex"},[w.B.above.lg]:{display:"none"}}),I=(0,f.tu)({display:"none",[w.B.above.lg]:{display:"flex"}}),G=({moreLabel:e,testId:t,items:o})=>{const[r,n]=(0,u.useState)(!1),a=(0,u.useCallback)((()=>n(!1)),[]),i=(0,u.useCallback)((()=>n((e=>!e))),[]),s=(0,u.useCallback)((()=>n(!0)),[]),l=(0,u.useCallback)((o=>u.createElement(m.X,(0,d.Z)({onClick:i,isSelected:r,testId:t?`${t}-overflow-menu-trigger`:"overflow-menu-trigger"},o),e)),[e,i,r,t]),c=(0,u.useCallback)((()=>u.createElement(g.$J,{isVisible:!1,openOverflowMenu:s,closeOverflowMenu:a},o)),[o,s,a]);return u.createElement(v.Z,{placement:"bottom-start",isOpen:r,onClose:a,trigger:l,content:c,testId:t?`${t}-overflow-menu-popup`:"overflow-menu-popup"})};G.displayName="MoreItemsPopup";const E=(0,u.memo)((({moreLabel:e,items:t,create:o,theme:r,testId:n})=>{const[a,i]=(0,u.useState)(!1);(0,u.useEffect)((()=>{i(!0)}),[]);const s=(0,$.Q)("above.sm",(e=>c(e.matches))),[l,c]=(0,u.useState)(null==s?void 0:s.matches),d=(0,$.Q)("above.lg",(e=>p(e.matches))),[v,p]=(0,u.useState)(null==d?void 0:d.matches),g=(0,u.useMemo)((()=>u.Children.toArray(t).filter((e=>!!e))),[t]),m=(0,u.useMemo)((()=>({small:{navBarItems:[],overflowItems:g},medium:{navBarItems:g.slice(0,3),overflowItems:g.slice(3,g.length)},large:{navBarItems:g.slice(0,8),overflowItems:g.slice(8,g.length)}})),[g]),h=(0,u.useMemo)((()=>v?m.large:l&&!v?m.medium:m.small),[v,l,m.large,m.medium,m.small]);return u.createElement(u.Fragment,null,a?u.createElement(x.Z,{role:"list",xcss:k},u.createElement(S.Z,{testId:n&&`${n}-primary-actions`,xcss:Z},h.navBarItems,h.overflowItems.length>0&&u.createElement(G,{moreLabel:e,items:h.overflowItems,testId:n}))):u.createElement(x.Z,{role:"list",xcss:k},u.createElement(S.Z,{xcss:[Z,y]},g.length>0&&u.createElement(G,{moreLabel:e,testId:n})),u.createElement(S.Z,{xcss:[Z,L]},m.medium.navBarItems,m.medium.overflowItems.length>0&&u.createElement(G,{moreLabel:e,testId:n})),u.createElement(S.Z,{xcss:[Z,I]},m.large.navBarItems,m.large.overflowItems.length>0&&u.createElement(G,{moreLabel:e,testId:n}))),o&&u.createElement(o,null))})),M=(0,r.iv)({display:"flex",boxSizing:"border-box",height:s.Ur,position:"relative",alignItems:"center",justifyContent:"space-between",flexShrink:0,borderBlockEnd:`1px solid var(--ds-border, ${i.gt})`,paddingInlineEnd:"var(--ds-space-150, 12px)",paddingInlineStart:"var(--ds-space-150, 12px)"}),B=(0,r.iv)({display:"flex",minWidth:0,height:"inherit",alignItems:"center",flexGrow:1,"& > *":{flexShrink:0}}),A=(0,r.iv)({display:"flex",alignItems:"center",flexShrink:0,"& > *":{flexShrink:0,marginInlineEnd:"var(--ds-space-050, 4px)"}}),N=(0,r.iv)({marginInlineEnd:0}),R={attributes:{navigationLayer:"global"},componentName:"atlassianNavigation"},O=e=>{const{label:t,primaryItems:o=[],renderAppSwitcher:i,renderCreate:s,renderHelp:d,renderNotifications:u,renderProductHome:v,renderProfile:p,renderSearch:g,renderSignIn:m,renderSettings:h,moreLabel:C="…",theme:f=l.G,testId:x}=e;return(0,r.tZ)(c.f,{value:f},(0,r.tZ)(n.gA,{data:R},(0,r.tZ)("header",{style:f.mode.navigation,css:M,"data-testid":x&&`${x}-header`,role:"banner"},(0,r.tZ)("nav",{css:B,"aria-label":t},i&&(0,r.tZ)(i,null),v&&(0,r.tZ)(v,null),(0,a.e)("platform.design-system-team.navigation-v2-no-jank_5yhbd")?(0,r.tZ)(E,{testId:x,moreLabel:C,items:o,create:s,theme:f}):(0,r.tZ)(b,{testId:x,moreLabel:C,items:o,create:s,theme:f})),(0,r.tZ)("div",{css:A,"data-testid":x&&`${x}-secondary-actions`},g&&(0,r.tZ)(g,null),(0,r.tZ)("div",{role:"list",css:[A,N]},u&&(0,r.tZ)(u,null),d&&(0,r.tZ)(d,null),h&&(0,r.tZ)(h,null),m&&(0,r.tZ)(m,null),p&&(0,r.tZ)(p,null))))))};O.displayName="AtlassianNavigation"},816296:(e,t,o)=>{"use strict";o.d(t,{K:()=>h});var r=o(615919),n=o(872342),a=o(840506),i=o(39030),s=o(328167),l=o(332072),c=o(955307);const d=({mode:{primaryButton:e}})=>(t,o)=>{const{buttonStyles:n,spinnerStyles:a}=t(o);return{buttonStyles:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},n),e.default),o.isSelected&&e.selected),{},{fontWeight:500,padding:"0 var(--ds-space-050, 4px)",marginLeft:0,marginRight:0,":hover":o.isSelected?e.selectedHover:e.hover,":focus":e.focus,"&&":(0,r.Z)({},"active"===o.state&&e.active)}),spinnerStyles:a}},u=["children","testId","tooltip","isSelected","isHighlighted"],v="--button-selected-color",p="--button-selected-border-color",g=(0,i.iv)({display:"flex",height:"100%",position:"relative",alignItems:"center",justifyContent:"center",flexDirection:"column"}),m=(0,i.iv)({"&& > *":{color:`var(${v})`},"&:after":{height:3,position:"absolute",backgroundColor:`var(${p})`,borderStartEndRadius:"var(--ds-border-radius-050, 1px)",borderStartStartRadius:"var(--ds-border-radius-050, 1px)",content:'""',insetBlockEnd:0,insetInlineEnd:"var(--ds-space-050, 4px)",insetInlineStart:"var(--ds-space-050, 4px)"}}),h=(0,a.forwardRef)(((e,t)=>{const{children:o,testId:a,tooltip:h,isSelected:C,isHighlighted:b}=e,f=(0,n.Z)(e,u),x=(0,c.F)(),S=(0,i.tZ)("div",{style:{[v]:x.mode.primaryButton.selected.color,[p]:x.mode.primaryButton.selected.borderColor},css:[g,b&&m],role:"listitem"},(0,i.tZ)(s.Z,(0,r.Z)({appearance:"primary",testId:a,ref:t,isSelected:C,theme:d(x)},f),o));return h?(0,i.tZ)(l.Z,{content:h,hideTooltipOnClick:!0},S):S}))},614474:(e,t,o)=>{"use strict";o.d(t,{X:()=>u});var r=o(615919),n=o(840506),a=o(39030),i=o(293724),s=o(723177),l=o(259789),c=o(816296);const d=(0,s.tu)({marginInlineEnd:"var(--ds-space-negative-050, -0.25rem)"}),u=(0,n.forwardRef)(((e,t)=>(0,a.tZ)(c.K,(0,r.Z)({iconAfter:(0,a.tZ)(l.Z,{xcss:d,inline:"space.100"},(0,a.tZ)(i.default,{label:""})),ref:t},e))))},697206:(e,t,o)=>{"use strict";o.d(t,{Z:()=>I});var r=o(615919),n=o(872342),a=o(840506),i=o(39030),s=o(24359),l=o(575863),c=o(955307),d=o(800984);const u=["icon","logo","siteTitle","onClick","href","onMouseDown","testId","logoMaxWidth"],v="--logo-max-width",p="--product-home-color-active",g="--product-home-bg-color-active",m="--product-home-box-shadow-active",h="--product-home-color-focus",C="--product-home-bg-color-focus",b="--product-home-color-hover",f="--product-home-bg-color-hover",x="--product-home-box-shadow-hover",S=(0,i.iv)({display:"flex",padding:"var(--ds-space-050, 4px)",alignItems:"center",background:"none",border:0,borderRadius:"var(--ds-border-radius, 3px)",color:"inherit",cursor:"pointer","&::-moz-focus-inner":{border:0},"&:first-of-type":{marginLeft:0},"&:hover":{backgroundColor:`var(${f})`,boxShadow:`var(${x})`,color:`var(${b})`},"&:active":{backgroundColor:`var(${g})`,boxShadow:`var(${m})`,color:`var(${p})`},"&:focus-visible":{backgroundColor:`var(${C})`,color:`var(${h})`,outline:"var(--ds-border-width-outline, 2px) solid var(--ds-border-focused, #4C9AFF)"},"div&":{pointerEvents:"none"},[`@media (max-width: ${l.aw-.1}px)`]:{margin:"0 var(--ds-space-100, 8px)"},[`@media (min-width: ${l.aw}px)`]:{margin:"0 var(--ds-space-200, 16px)"}}),w=(0,i.iv)({display:"flex",maxWidth:`var(${v})`,"& > *":{maxHeight:24},"& > span > svg":{maxWidth:`var(${v})`},[`@media (max-width: ${l.aw-.1}px)`]:{display:"none"}}),$=(0,i.iv)({maxHeight:28}),k=(0,i.iv)({display:"flex","& > *":{maxHeight:24},[`@media (min-width: ${l.aw}px)`]:{display:"none"}}),Z=(0,i.iv)({display:"flex",marginRight:"var(--ds-space-050, 4px)",marginLeft:"var(--ds-space-050, 4px)",paddingRight:"var(--ds-space-200, 16px)",alignItems:"center"}),y=(0,i.iv)({marginRight:"var(--ds-space-100, 8px)",[`@media (max-width: ${l.aw-.1}px)`]:{display:"none"}}),L=e=>{let{icon:t,logo:o,siteTitle:l,onClick:L,href:I,onMouseDown:G,testId:E,logoMaxWidth:M=260}=e,B=(0,n.Z)(e,u);const A=(0,c.F)(),N=A.mode.primaryButton,{iconColor:R="inherit",iconGradientStart:O="inherit",iconGradientStop:_="inherit",textColor:X=A.mode.productHome.color}=A.mode.productHome,z=(0,d.h)(L,I),H={[p]:N.active.color,[g]:N.active.backgroundColor,[m]:N.active.boxShadow,[h]:N.focus.color,[C]:N.focus.backgroundColor,"--product-home-box-shadow-focus":N.focus.boxShadow,[b]:N.hover.color,[f]:N.hover.backgroundColor,[x]:N.hover.boxShadow,[v]:`${M}px`};return(0,i.tZ)(a.Fragment,null,(0,i.tZ)(z,(0,r.Z)({style:H,css:S,href:I,onClick:L,onMouseDown:e=>{e.preventDefault(),G&&G(e)},"data-testid":E&&`${E}-container`},B),(0,i.tZ)("div",{css:[$,w],"data-testid":E&&`${E}-logo`},(0,i.tZ)(o,{iconGradientStart:O,iconGradientStop:_,iconColor:R,textColor:X})),(0,i.tZ)("div",{css:[$,k],"data-testid":E&&`${E}-icon`},(0,i.tZ)(t,{iconGradientStart:O,iconGradientStop:_,iconColor:R}))),l&&(0,i.tZ)("div",{style:{borderRight:A.mode.productHome.borderRight},css:[Z,(0,s.e)("platform.design-system-team.navigation-v2-no-jank_5yhbd")&&y],"data-testid":E&&`${E}-site-title`},l))};L.displayName="ProductHome";const I=L},800984:(e,t,o)=>{"use strict";o.d(t,{h:()=>r});const r=(e,t)=>t?"a":e?"button":"div"},374159:(e,t,o)=>{"use strict";o.d(t,{$J:()=>d,Ik:()=>u,vJ:()=>v});var r=o(840506),n=o(296858),a=o.n(n),i=o(319754);const s=(e,t)=>e+"#"+t,l=(e,t)=>{e.unshift(t),e.length=3},c=(0,r.createContext)({isVisible:!0,openOverflowMenu:i.Z,closeOverflowMenu:i.Z}),d=({children:e,isVisible:t,openOverflowMenu:o,closeOverflowMenu:n})=>{const{Provider:a}=c,i=(0,r.useMemo)((()=>({isVisible:t,openOverflowMenu:o,closeOverflowMenu:n})),[t,o,n]);return r.createElement(a,{value:i},e)};d.displayName="OverflowProvider";const u=()=>(0,r.useContext)(c),v=e=>{const t=r.Children.toArray(e),[o,n]=(0,r.useState)(9999),[i,c]=(0,r.useState)(t.length),[d,u]=(0,r.useState)({}),v=(0,r.useRef)([]).current,p=(0,r.useRef)([]),g=(0,r.useCallback)(a()(n,64),[n]);return(0,r.useEffect)((()=>{const e=v[i]||0,r=e<0,n=s(o,i);if(p.current[0]===n){const e=setTimeout((()=>{l(p.current,""),u({})}),96);return()=>clearTimeout(e)}if(r){const t=Math.max(Math.min(o+e,140),70);v[i]=t}if(o<63&&i){const e=s(o,i-1);return void(-1===p.current.indexOf(e)&&(c(i-1),v[i-1]=-(o||1),l(p.current,e)))}const a=v[i]||0;if(o-a>77&&i<t.length){const e=s(o,i+1);-1===p.current.indexOf(e)&&(c(i+1),l(p.current,e))}else;}),[o,p,i,v,d,t.length]),{visibleItems:t.slice(0,i),overflowItems:t.slice(i),updateWidth:g}}},795598:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l,f:()=>s});var r=o(24359),n=o(16728),a=o(766920);const i={mode:{create:{active:{color:`var(--ds-text-inverse, ${n.N0})`,backgroundColor:`var(--ds-background-brand-bold-pressed, ${(0,a.E9)(n.AX,.8)})`,boxShadow:""},default:{color:`var(--ds-text-inverse, ${n.N0})`,backgroundColor:`var(--ds-background-brand-bold, ${n.AX})`,boxShadow:""},focus:{color:`var(--ds-text-inverse, ${n.N0})`,backgroundColor:"",boxShadow:""},hover:{color:`var(--ds-text-inverse, ${n.N0})`,backgroundColor:`var(--ds-background-brand-bold-hovered, ${(0,a.E9)(n.AX,.9)})`,boxShadow:""},selected:{color:"",backgroundColor:"",boxShadow:""}},iconButton:{active:{color:`var(--ds-text-subtle, ${n.AX})`,backgroundColor:`var(--ds-background-neutral-pressed, ${(0,a.E9)(n.BA,.6)})`,boxShadow:""},default:{color:`var(--ds-text-subtle, ${n.mg})`,backgroundColor:"transparent",boxShadow:""},focus:{color:`var(--ds-text-subtle, ${n.mg})`,backgroundColor:"",boxShadow:""},hover:{color:`var(--ds-text-subtle, ${n.AX})`,backgroundColor:`var(--ds-background-neutral-hovered, ${(0,a.E9)(n.BA,.9)})`,boxShadow:""},selected:{color:`var(--ds-text-selected, ${n.AX})`,backgroundColor:`var(--ds-background-selected, ${(0,a.E9)(n.BA,.6)})`,boxShadow:""},selectedHover:{color:`var(--ds-text-selected, ${n.AX})`,backgroundColor:`var(--ds-background-selected-hovered, ${(0,a.E9)(n.BA,.6)})`,boxShadow:""}},navigation:{backgroundColor:`var(--ds-surface, ${n.N0})`,color:`var(--ds-text-subtlest, ${n.iw})`},productHome:{backgroundColor:`var(--ds-text-brand, ${n.AX})`,color:`var(--ds-text, ${n.TG})`,borderRight:`1px solid var(--ds-border, ${(0,a.E9)(n.iw,.3)})`,iconGradientStart:n.AX,iconGradientStop:n.VY,iconColor:n.VY},primaryButton:{active:{color:`var(--ds-text-subtle, ${n.AX})`,backgroundColor:`var(--ds-background-neutral-pressed, ${(0,a.E9)(n.BA,.7)})`,boxShadow:""},default:{color:`var(--ds-text-subtle, ${n.mg})`,backgroundColor:"transparent",boxShadow:""},focus:{color:`var(--ds-text-subtle, ${n.mg})`,backgroundColor:"",boxShadow:""},hover:{color:`var(--ds-text-subtle, ${n.AX})`,backgroundColor:`var(--ds-background-neutral-hovered, ${(0,a.E9)(n.BA,.9)})`,boxShadow:""},selected:{color:`var(--ds-text-selected, ${n.AX})`,backgroundColor:`var(--ds-background-selected, ${(0,a.E9)(n.BA,.7)})`,boxShadow:"",borderColor:`var(--ds-border-selected, ${n.AX})`},selectedHover:{color:`var(--ds-text-selected, ${n.AX})`,backgroundColor:`var(--ds-background-selected-hovered, ${(0,a.E9)(n.BA,.6)})`,boxShadow:"",borderColor:`var(--ds-border-selected, ${n.AX})`}},search:{default:{backgroundColor:`var(--ds-background-input, ${n.N0})`,color:`var(--ds-text-subtlest, ${n.iw})`,borderColor:`var(--ds-border-input, ${(0,r.e)("platform.design-system-team.border-checkbox_nyoiu")?n.Y8:n.YS})`},focus:{borderColor:`var(--ds-border-focused, ${n.VY})`},hover:{backgroundColor:`var(--ds-background-input-hovered, ${n.N0})`}},skeleton:{backgroundColor:`var(--ds-background-neutral, ${n.IR})`,opacity:1}}},s="atlassian",l=i},163650:(e,t,o)=>{"use strict";o.d(t,{I:()=>l});var r=o(615919),n=o(795598),a=o(766920);const i=e=>"#000000"===e?.3:.6,s=(e,t)=>{const{backgroundColor:o,color:r,highlightColor:n}=e,s=i(r),l="create"===t;return{active:{backgroundColor:l?(0,a.E9)(o,.65):(0,a.RN)(.3,s,o),boxShadow:(0,a.Ke)("transparent"),color:r},default:{backgroundColor:o,boxShadow:(0,a.Ke)("transparent"),color:r},focus:{boxShadow:"none",color:r,backgroundColor:o},hover:{backgroundColor:l?(0,a.E9)(o,.8):(0,a.RN)(.1,s,o),boxShadow:(0,a.Ke)("transparent"),color:r},selected:{color:r,backgroundColor:(0,a.RN)(.3,s,o),borderColor:n,boxShadow:(0,a.Ke)("transparent")},selectedHover:{color:r,backgroundColor:(0,a.RN)(.3,s,o),borderColor:n,boxShadow:(0,a.Ke)("transparent")}}},l=e=>{const{backgroundColor:t,highlightColor:o,name:l}=e,c=(0,a.$h)(t),d=(0,r.Z)((0,r.Z)({},e),{},{color:c});return l===n.f?n.Z:{mode:{create:s((u=o,{backgroundColor:u,color:(0,a.$h)(u),highlightColor:u}),"create"),iconButton:s(d,"iconButton"),primaryButton:s(d,"primaryButton"),navigation:{backgroundColor:t,color:c},productHome:{color:c,backgroundColor:o,borderRight:`1px solid ${(0,a.E9)(c,.5)}`},search:{default:{backgroundColor:t,color:c,borderColor:(0,a.E9)(c,.5)},focus:{borderColor:(0,a.E9)(o,.8),boxShadow:(0,a.Ke)((0,a.E9)(o,.5))},hover:{backgroundColor:(0,a.RN)(.1,i(c),t),color:c}},skeleton:{backgroundColor:c,opacity:.08}}};var u}},766920:(e,t,o)=>{"use strict";o.d(t,{$h:()=>u,E9:()=>a,Ke:()=>i,RN:()=>v});var r=o(615919),n=o(711544);const a=(e,t=1)=>{const o=(0,r.Z)((0,r.Z)({},n.Z.convert(e).rgb),{a:t});return`rgba(${Object.values(o).join(", ")})`},i=e=>`0 0 0 2px ${e}`,s="[a-z0-9]",l=new RegExp(`#(${s})(${s})(${s})`,"i"),c=(e,t)=>[...Array(t)].map((()=>e)).join(""),d=e=>{if((e=>e&&4===e.length)(e)){const t=e.match(l);if(t){const e=t.slice(1,4);return(e=>e[0]===e[1]&&e[1]===e[2])(e)?(e=>`#${c(e[1],6)}`)(e):(e=>`#${e.map((e=>c(e,2))).join("")}`)(e)}}return e},u=e=>{const t=d(e);return n.Z.contrastRatio(t).hex},v=(e,t,o)=>a(n.Z.contrast(e,o).hex,t)},871118:(e,t,o)=>{"use strict";o.d(t,{N:()=>a,f:()=>i});var r=o(840506),n=o(125551);const a=(0,r.createContext)(n.G),i=a.Provider},125551:(e,t,o)=>{"use strict";o.d(t,{G:()=>i,u:()=>a});var r=o(16728),n=o(795598);const a=(0,o(163650).I)({name:n.f,backgroundColor:r.N0,highlightColor:r.AX}),i=a},955307:(e,t,o)=>{"use strict";o.d(t,{F:()=>a});var r=o(840506),n=o(871118);const a=()=>(0,r.useContext)(n.N)},293724:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=o(840506))&&r.__esModule?r:{default:r},a=o(340531);const i=e=>n.default.createElement(a.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));i.displayName="ChevronDownIcon";var s=i;t.default=s},167852:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ConfluenceIcon:()=>c});var r=o(840506),n=o(467220),a=o(47433),i=o(487269),s=o(383288);const l=({appearance:e,iconGradientStart:t,iconGradientStop:o,iconColor:r})=>{let a={iconGradientStart:t,iconGradientStop:o,iconColor:r},s=(0,n.h)({iconGradientStart:o});return e&&(a=(0,i.Z)(e)),`\n  <svg viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="60.6779047%" y1="137.626433%" x2="14.341981%" y2="112.08042%" id="${s}-1">\n        <stop stop-color="${a.iconGradientStart}" ${"inherit"===a.iconGradientStart?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${a.iconGradientStop}" offset="100%"></stop>\n      </linearGradient>\n      <linearGradient x1="12.3282701%" y1="-53.9760846%" x2="74.1300776%" y2="-33.2553066%" id="${s}-2">\n        <stop stop-color="${a.iconGradientStart}" ${"inherit"===a.iconGradientStart?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${a.iconGradientStop}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path fill="url(#${s}-1)" d="M5.21454927,22.0245336 C4.97082816,22.4219865 4.69711061,22.8831818 4.46463817,23.2506383 C4.25655728,23.602269 4.36826343,24.0557627 4.71585838,24.2705174 L9.59028054,27.2701618 C9.76138278,27.3758032 9.96774369,27.4083016 10.1630326,27.3603607 C10.3583215,27.3124197 10.5261749,27.1880564 10.6289074,27.015192 C10.8238843,26.6889807 11.0751045,26.2652809 11.3488221,25.8115847 C13.2798432,22.6244625 15.2221129,23.0144163 18.7241978,24.686718 L23.5573748,26.9851956 C23.7404243,27.0723219 23.9509502,27.0816253 24.1409716,27.0109854 C24.3309931,26.9403455 24.4843191,26.7957811 24.5660052,26.61024 L26.8869801,21.3608623 C27.0509607,20.9859459 26.8841076,20.5487907 26.5120245,20.3784788 C25.4921454,19.8985357 23.4636359,18.942399 21.6376024,18.0612535 C15.0683811,14.8741313 9.48529299,15.0841064 5.21454927,22.0245336 Z"></path>\n      <path fill="url(#${s}-2)" d="M27.0752616,9.74267061 C27.3190367,9.34512979 27.5928148,8.88383241 27.8253387,8.51629467 C28.0334656,8.1645861 27.9217347,7.71099215 27.5740629,7.4961899 L22.6985622,4.49588177 C22.5250856,4.3802891 22.3113292,4.3421035 22.1085604,4.39048341 C21.9057917,4.43886333 21.7323024,4.56944439 21.6297024,4.75090796 C21.4346824,5.07719147 21.1834066,5.50098499 20.9096284,5.9547816 C18.9781801,9.14260899 17.0354806,8.75256893 13.5326208,7.07989715 L8.71337588,4.78466143 C8.53028584,4.69751579 8.31971336,4.68821035 8.1296499,4.75886591 C7.93958645,4.82952147 7.78622651,4.97411777 7.70452227,5.15969994 L5.38303386,10.4102392 C5.21901692,10.7852385 5.38590698,11.2224905 5.75807237,11.3928401 C6.77817714,11.8728894 8.80713551,12.8292376 10.6335731,13.7105781 C17.2192494,16.8946551 22.8035729,16.6846336 27.0752616,9.74267061 Z"></path>\n    </g>\n  </svg>`},c=({appearance:e,label:t="Confluence",size:o=a._C.size,testId:n,iconColor:i=a._C.iconColor,iconGradientStart:c=a._C.iconGradientStart,iconGradientStop:d=a._C.iconGradientStop,textColor:u=a._C.textColor})=>r.createElement(s.Z,{appearance:e,label:t,svg:l({appearance:e,iconGradientStart:c,iconGradientStop:d,iconColor:i}),iconColor:i,iconGradientStart:c,iconGradientStop:d,size:o,testId:n,textColor:u});c.displayName="ConfluenceIcon"},575445:(e,t,o)=>{"use strict";o.d(t,{h:()=>c});var r=o(840506),n=o(467220),a=o(47433),i=o(487269),s=o(383288);const l=({appearance:e,iconGradientStart:t,iconGradientStop:o,iconColor:r,textColor:a})=>{let s={iconGradientStart:t,iconGradientStop:o,iconColor:r,textColor:a},l=(0,n.h)({iconGradientStart:o});return e&&(s=(0,i.Z)(e)),`\n  <svg viewBox="0 0 158 32" height="32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="99.140087%" y1="112.745465%" x2="33.8589812%" y2="37.7675389%" id="${l}-1">\n        <stop stop-color="${s.iconGradientStart}" ${"inherit"===s.iconGradientStart?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${s.iconGradientStop}" offset="100%"></stop>\n      </linearGradient>\n      <linearGradient x1="14.1838118%" y1="5.80047897%" x2="61.141783%" y2="70.9663868%" id="${l}-2">\n        <stop stop-color="${s.iconGradientStart}" ${"inherit"===s.iconGradientStart?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${s.iconGradientStop}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path fill="${s.textColor}" fill-rule="evenodd" d="M45.312,20.984 C44.064,21.608 42.66,22.024 40.866,22.024 C36.81,22.024 34.34,19.424 34.34,15.498 C34.34,11.572 36.732,8.92 40.736,8.92 C42.712,8.92 44.064,9.336 45.286,10.116 L45.286,7.854 C44.064,6.97 42.4,6.658 40.736,6.658 C35.172,6.658 32,10.298 32,15.498 C32,20.88 35.172,24.26 40.788,24.26 C42.556,24.26 44.246,23.948 45.312,23.246 L45.312,20.984 Z M53.918,24.26 C50.018,24.26 47.73,21.374 47.73,17.474 C47.73,13.574 50.018,10.74 53.918,10.74 C57.792,10.74 60.054,13.574 60.054,17.474 C60.054,21.374 57.792,24.26 53.918,24.26 Z M53.918,12.82 C51.136,12.82 49.914,15.004 49.914,17.474 C49.914,19.944 51.136,22.18 53.918,22.18 C56.674,22.18 57.87,19.944 57.87,17.474 C57.87,15.004 56.674,12.82 53.918,12.82 Z M73.704,16.382 C73.704,12.794 71.988,10.74 68.998,10.74 C67.256,10.74 65.722,11.598 64.89,13.132 L64.89,11 L62.654,11 L62.654,24 L64.89,24 L64.89,16.772 C64.89,14.146 66.32,12.768 68.4,12.768 C70.532,12.768 71.468,13.808 71.468,16.148 L71.468,24 L73.704,24 L73.704,16.382 Z M79.918,9.622 C79.918,8.452 80.594,7.646 81.972,7.646 C82.492,7.646 82.986,7.698 83.376,7.776 L83.376,5.722 C82.986,5.618 82.544,5.514 81.868,5.514 C79.086,5.514 77.734,7.152 77.734,9.57 L77.734,11 L75.628,11 L75.628,13.08 L77.734,13.08 L77.734,24 L79.918,24 L79.918,13.08 L83.272,13.08 L83.272,11 L79.918,11 L79.918,9.622 Z M90.318,23.974 L90.318,21.972 C90.058,21.998 89.902,21.998 89.668,21.998 C88.706,21.998 87.926,21.582 87.926,20.412 L87.926,5.566 L85.69,5.566 L85.69,20.672 C85.69,23.064 87.042,24.078 89.174,24.078 C89.746,24.078 90.136,24.026 90.318,23.974 Z M92.216,18.618 C92.216,22.206 93.932,24.26 96.922,24.26 C98.664,24.26 100.198,23.402 101.03,21.868 L101.03,24 L103.266,24 L103.266,11 L101.03,11 L101.03,18.228 C101.03,20.854 99.6,22.232 97.52,22.232 C95.388,22.232 94.452,21.192 94.452,18.852 L94.452,11 L92.216,11 L92.216,18.618 Z M116.89,23.48 C115.824,24.052 114.186,24.26 112.86,24.26 C107.998,24.26 105.866,21.452 105.866,17.474 C105.866,13.548 108.05,10.74 112.002,10.74 C116.006,10.74 117.618,13.522 117.618,17.474 L117.618,18.488 L108.128,18.488 C108.44,20.698 109.87,22.128 112.938,22.128 C114.446,22.128 115.72,21.842 116.89,21.426 L116.89,23.48 Z M111.898,12.768 C109.532,12.768 108.336,14.302 108.102,16.564 L115.356,16.564 C115.226,14.146 114.134,12.768 111.898,12.768 Z M131.32,16.382 C131.32,12.794 129.604,10.74 126.614,10.74 C124.872,10.74 123.338,11.598 122.506,13.132 L122.506,11 L120.27,11 L120.27,24 L122.506,24 L122.506,16.772 C122.506,14.146 123.936,12.768 126.016,12.768 C128.148,12.768 129.084,13.808 129.084,16.148 L129.084,24 L131.32,24 L131.32,16.382 Z M143.618,21.66 C142.812,21.946 141.98,22.128 140.654,22.128 C137.248,22.128 135.844,19.996 135.844,17.474 C135.844,14.952 137.222,12.82 140.602,12.82 C141.824,12.82 142.708,13.054 143.54,13.444 L143.54,11.364 C142.526,10.896 141.616,10.74 140.446,10.74 C135.818,10.74 133.66,13.548 133.66,17.474 C133.66,21.452 135.818,24.26 140.446,24.26 C141.642,24.26 142.838,24.078 143.618,23.662 L143.618,21.66 Z M156.41,23.48 C155.344,24.052 153.706,24.26 152.38,24.26 C147.518,24.26 145.386,21.452 145.386,17.474 C145.386,13.548 147.57,10.74 151.522,10.74 C155.526,10.74 157.138,13.522 157.138,17.474 L157.138,18.488 L147.648,18.488 C147.96,20.698 149.39,22.128 152.458,22.128 C153.966,22.128 155.24,21.842 156.41,21.426 L156.41,23.48 Z M151.418,12.768 C149.052,12.768 147.856,14.302 147.622,16.564 L154.876,16.564 C154.746,14.146 153.654,12.768 151.418,12.768 Z"></path>\n      <path fill="url(#${l}-1)" d="M0.85465057,21.7022581 C0.61090057,22.0783871 0.33715057,22.5148387 0.10465057,22.8625806 C-0.10345498,23.195346 0.00826440879,23.6245091 0.35590057,23.8277419 L5.23090057,26.6664516 C5.40202309,26.7664253 5.60840847,26.7971801 5.80372052,26.7518112 C5.99903257,26.7064423 6.16690583,26.5887513 6.26965057,26.4251613 C6.46465057,26.1164516 6.71590057,25.7154839 6.98965057,25.286129 C8.92090057,22.27 10.8634006,22.6390323 14.3659006,24.2216129 L19.1996506,26.3967742 C19.3827218,26.4792261 19.5932727,26.4880304 19.7833166,26.4211804 C19.9733605,26.3543303 20.1267047,26.2175221 20.2084006,26.0419355 L22.5296506,21.0741935 C22.6936507,20.7193919 22.5267777,20.3056906 22.1546506,20.1445161 C21.1346506,19.6903226 19.1059006,18.7854839 17.2796506,17.9516129 C10.7096506,14.9354839 5.12590057,15.1341935 0.85465057,21.7022581 Z"></path>\n      <path fill="url(#${l}-2)" d="M22.7130274,10.4325806 C22.9567774,10.0564516 23.2305274,9.62 23.4630274,9.27225806 C23.6711329,8.93949274 23.5594135,8.51032964 23.2117774,8.30709677 L18.3367774,5.4683871 C18.1633186,5.35902032 17.9495842,5.32289142 17.7468362,5.36866556 C17.5440883,5.4144397 17.3706168,5.53798759 17.2680274,5.70967742 C17.0730274,6.0183871 16.8217774,6.41935484 16.5480274,6.84870968 C14.6167774,9.86483871 12.6742774,9.49580645 9.17177736,7.91322581 L4.35302736,5.7416129 C4.16995613,5.65916098 3.95940527,5.65035674 3.76936133,5.71720675 C3.5793174,5.78405675 3.42597321,5.92086501 3.34427736,6.09645161 L1.02302736,11.0641935 C0.85902727,11.4189952 1.02590019,11.8326965 1.39802736,11.993871 C2.41802736,12.4480645 4.44677736,13.3529032 6.27302736,14.1867742 C12.8580274,17.1993548 18.4417774,17.0006452 22.7130274,10.4325806 Z"></path>\n    </g>\n  </svg>`},c=({appearance:e,label:t="Confluence",size:o=a._C.size,testId:n,iconColor:i=a._C.iconColor,iconGradientStart:c=a._C.iconGradientStart,iconGradientStop:d=a._C.iconGradientStop,textColor:u=a._C.textColor})=>r.createElement(s.Z,{appearance:e,label:t,iconColor:i,iconGradientStart:c,iconGradientStop:d,size:o,svg:l({appearance:e,iconGradientStart:c,iconGradientStop:d,iconColor:i,textColor:u}),testId:n,textColor:u});c.displayName="ConfluenceLogo"},47433:(e,t,o)=>{"use strict";o.d(t,{J7:()=>n,_C:()=>r});const r={iconColor:"inherit",iconGradientStart:"inherit",iconGradientStop:"inherit",label:"",size:"medium",textColor:"currentColor"},n={xsmall:16,small:24,medium:32,large:40,xlarge:48}},487269:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(16728);const n=e=>{let t,o,n,a,i;switch(e){case"brand":t=r.AX,o=r.VY,n=r.VY,a=`var(--ds-text, ${r.q2})`,i=r.AX;break;case"neutral":t=r.mg,o=r.Y8,n=r.Y8,a=r.zN,i=r.zN;break;case"inverse":t=r.uv,o=r.N0,n=r.N0,a=`var(--ds-text-inverse, ${r.N0})`,i=`var(--ds-text-inverse, ${r.N0})`}return{iconGradientStart:t,iconGradientStop:o,iconColor:n,textColor:a,atlassianLogoTextColor:i}}},383288:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var r=o(615919),n=o(872342),a=o(39030),i=o(47433);const s=["label","svg","size","appearance","iconGradientStart","iconGradientStop","iconColor","textColor","testId"],l="--logo-color",c="--logo-fill",d=(0,a.iv)({display:"inline-block",position:"relative",color:`var(${l})`,fill:`var(${c})`,lineHeight:1,userSelect:"none",whiteSpace:"normal","> svg":{height:"100%",fill:"inherit"}}),u=(0,a.iv)({stop:{stopColor:"currentColor"}}),v=Object.entries(i.J7).reduce(((e,[t,o])=>(e[t]=(0,a.iv)({height:`${o}px`}),e)),{}),p=e=>{let{label:t,svg:o,size:i,appearance:p,iconGradientStart:g,iconGradientStop:m,iconColor:h,textColor:C,testId:b}=e,f=(0,n.Z)(e,s);const x="inherit"===g&&"inherit"===m&&void 0===p,S=b&&`${b}--wrapper`;return(0,a.tZ)("span",(0,r.Z)({css:[d,x&&u,i&&v[i]],"data-testid":S,style:{[l]:h,[c]:C},"aria-label":t||void 0,role:t?"img":void 0,dangerouslySetInnerHTML:{__html:o}},f))};p.displayName="Wrapper";const g=p},259789:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o(840506),n=o(39030),a=o(723177);const i=(0,n.iv)({boxSizing:"border-box"}),s={"space.025":(0,n.iv)({marginBlock:"var(--ds-space-negative-025, -0.125rem)"}),"space.050":(0,n.iv)({marginBlock:"var(--ds-space-negative-050, -0.25rem)"}),"space.100":(0,n.iv)({marginBlock:"var(--ds-space-negative-100, -0.5rem)"}),"space.150":(0,n.iv)({marginBlock:"var(--ds-space-negative-150, -0.75rem)"}),"space.200":(0,n.iv)({marginBlock:"var(--ds-space-negative-200, -1rem)"})},l={"space.025":(0,n.iv)({marginInline:"var(--ds-space-negative-025, -0.125rem)"}),"space.050":(0,n.iv)({marginInline:"var(--ds-space-negative-050, -0.25rem)"}),"space.100":(0,n.iv)({marginInline:"var(--ds-space-negative-100, -0.5rem)"}),"space.150":(0,n.iv)({marginInline:"var(--ds-space-negative-150, -0.75rem)"}),"space.200":(0,n.iv)({marginInline:"var(--ds-space-negative-200, -1rem)"})},c=r.memo((({children:e,testId:t,inline:o,block:r,all:c,xcss:d})=>{const u=d&&(0,a.sM)(d);return(0,n.tZ)("div",{css:[i,(o||c)&&l[o||c],(r||c)&&s[r||c],u],"data-testid":t},e)}));c.displayName="Bleed";const d=c},752640:(e,t,o)=>{"use strict";o.d(t,{K:()=>a});var r=o(840506);const n=r.memo((({setWidth:e,offscreen:t})=>{const[o,n,a]=function(e={}){const t=r.useRef(),o=r.useRef(),[n,a]=r.useState({inView:!1,entry:void 0,target:void 0}),{threshold:i,root:s,rootMargin:l}=e,c=r.useCallback((e=>{o.current=new IntersectionObserver((t=>{if(t&&t.length){const o=t[0],{isIntersecting:r,intersectionRatio:n}=o;if(n>=0){let t=n>=(i||0);void 0!==r&&(t=t&&r),a({inView:t,entry:o,target:e})}}}),{threshold:i,root:s,rootMargin:l}),t.current&&o.current.unobserve(t.current),e&&o.current.observe(e),t.current=e}),[i,s,l]);return r.useEffect((()=>()=>{o.current&&t.current&&o.current.unobserve(t.current)}),[]),[c,n.inView,n.target,n.entry]}({threshold:0}),i=r.useRef((()=>"undefined"==typeof window?null:new ResizeObserver((t=>{if(!Array.isArray(t)||!t.length)return;const{width:o}=t[0].contentRect;e(Math.round(o))}))));return r.useEffect((()=>{const{current:e}=i,o=e();if(null!==o)return a&&(n||t?o.observe(a):o.unobserve(a)),()=>{o.disconnect()}}),[a,n,t]),r.createElement("div",{style:{display:"block",width:"100%",position:"absolute"},ref:o})})),a=r.memo((e=>r.createElement(n,{setWidth:e.setWidth,offscreen:e.offscreen})))}}]);
//# sourceMappingURL=70317.DzwEj_V_DE.js.map