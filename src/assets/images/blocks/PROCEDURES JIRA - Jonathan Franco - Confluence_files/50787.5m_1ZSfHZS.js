"use strict";(self._cf=self._cf||[]).push([[50787],{102226:(e,o,a)=>{a.d(o,{Z:()=>u});var r=a(178825),t=a(254549),s=a(613576);function d(e,o){return e.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var n=a(840506),i=a(830665),c=a(780999),l=function(e,o){return e&&o&&o.split(" ").forEach((function(o){return r=o,void((a=e).classList?a.classList.remove(r):"string"==typeof a.className?a.className=d(a.className,r):a.setAttribute("class",d(a.className&&a.className.baseVal||"",r)));var a,r}))},b=function(e){function o(){for(var o,a=arguments.length,r=new Array(a),t=0;t<a;t++)r[t]=arguments[t];return(o=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},o.onEnter=function(e,a){var r=o.resolveArguments(e,a),t=r[0],s=r[1];o.removeClasses(t,"exit"),o.addClass(t,s?"appear":"enter","base"),o.props.onEnter&&o.props.onEnter(e,a)},o.onEntering=function(e,a){var r=o.resolveArguments(e,a),t=r[0],s=r[1]?"appear":"enter";o.addClass(t,s,"active"),o.props.onEntering&&o.props.onEntering(e,a)},o.onEntered=function(e,a){var r=o.resolveArguments(e,a),t=r[0],s=r[1]?"appear":"enter";o.removeClasses(t,s),o.addClass(t,s,"done"),o.props.onEntered&&o.props.onEntered(e,a)},o.onExit=function(e){var a=o.resolveArguments(e)[0];o.removeClasses(a,"appear"),o.removeClasses(a,"enter"),o.addClass(a,"exit","base"),o.props.onExit&&o.props.onExit(e)},o.onExiting=function(e){var a=o.resolveArguments(e)[0];o.addClass(a,"exit","active"),o.props.onExiting&&o.props.onExiting(e)},o.onExited=function(e){var a=o.resolveArguments(e)[0];o.removeClasses(a,"exit"),o.addClass(a,"exit","done"),o.props.onExited&&o.props.onExited(e)},o.resolveArguments=function(e,a){return o.props.nodeRef?[o.props.nodeRef.current,e]:[e,a]},o.getClassNames=function(e){var a=o.props.classNames,r="string"==typeof a,t=r?""+(r&&a?a+"-":"")+e:a[e];return{baseClassName:t,activeClassName:r?t+"-active":a[e+"Active"],doneClassName:r?t+"-done":a[e+"Done"]}},o}(0,s.Z)(o,e);var a=o.prototype;return a.addClass=function(e,o,a){var r=this.getClassNames(o)[a+"ClassName"],t=this.getClassNames("enter").doneClassName;"appear"===o&&"done"===a&&t&&(r+=" "+t),"active"===a&&e&&(0,c.Q)(e),r&&(this.appliedClasses[o][a]=r,function(e,o){e&&o&&o.split(" ").forEach((function(o){return r=o,void((a=e).classList?a.classList.add(r):function(e,o){return e.classList?!!o&&e.classList.contains(o):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+o+" ")}(a,r)||("string"==typeof a.className?a.className=a.className+" "+r:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+r)));var a,r}))}(e,r))},a.removeClasses=function(e,o){var a=this.appliedClasses[o],r=a.base,t=a.active,s=a.done;this.appliedClasses[o]={},r&&l(e,r),t&&l(e,t),s&&l(e,s)},a.render=function(){var e=this.props,o=(e.classNames,(0,t.Z)(e,["classNames"]));return n.createElement(i.ZP,(0,r.Z)({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(n.Component);b.defaultProps={classNames:""},b.propTypes={};const u=b},384746:(e,o,a)=>{a.d(o,{Z:()=>N});var r=a(615919),t=a(872342),s=a(840506),d=a(39030),n=a(219957),i=a(70397),c=a(24359),l=a(16728);const b=(0,a(2142).I8)(),u=(0,d.iv)({display:"grid",gridAutoColumns:"1fr",gridAutoRows:"min-content",color:`var(--ds-text, ${l.xA})`,cursor:"default",fontFamily:`var(--ds-font-family-sans, ${b})`}),p=(0,d.iv)({gap:"var(--ds-space-0, 0px) var(--ds-space-050, 4px)",gridTemplateColumns:"min-content auto"}),v=(0,d.iv)({color:`var(--ds-text-disabled, ${l.Bn})`,cursor:"not-allowed"}),h=(0,d.iv)({"--local-background":`var(--ds-background-input, ${l.YI})`,"--local-background-active":`var(--ds-background-input-pressed, ${l.BA})`,"--local-background-checked":`var(--ds-background-selected-bold, ${l.AX})`,"--local-background-checked-hover":`var(--ds-background-selected-bold-hovered, ${l.M5})`,"--local-background-disabled":`var(--ds-background-disabled, ${l.IR})`,"--local-background-hover":`var(--ds-background-input-hovered, ${l.gt})`,"--local-border":(0,c.e)("platform.design-system-team.update-border-radio-checkbox_7askv")?`var(--ds-border-bold, ${l.Y8})`:`var(--ds-border-input, ${l.YS})`,"--local-border-active":`var(--ds-border, ${l.BA})`,"--local-border-checked":`var(--ds-background-selected-bold, ${l.AX})`,"--local-border-checked-hover":`var(--ds-background-selected-bold-hovered, ${l.M5})`,"--local-border-checked-invalid":`var(--ds-border-danger, ${l.rt})`,"--local-border-disabled":`var(--ds-background-disabled, ${l.IR})`,"--local-border-focus":`var(--ds-border-focused, ${l.VY})`,"--local-border-hover":(0,c.e)("platform.design-system-team.update-border-radio-checkbox_7askv")?`var(--ds-border-bold, ${l.Y8})`:`var(--ds-border-input, ${l.YS})`,"--local-border-invalid":`var(--ds-border-danger, ${l.rt})`,"--local-tick-active":`var(--ds-icon-inverse, ${l.AX})`,"--local-tick-checked":`var(--ds-icon-inverse, ${l.YI})`,"--local-tick-disabled":`var(--ds-icon-disabled, ${l.n2})`,"--local-tick-rest":"transparent"});function g({children:e,isDisabled:o,testId:a,label:r,id:t}){return(0,d.tZ)("label",{css:[u,r&&p,o&&v,h],"data-testid":a,"data-disabled":o||void 0,id:t},e)}g.displayName="Label";var k=a(19173);const m=(0,s.memo)((({size:e,isIndeterminate:o,isChecked:a})=>{const r=(0,s.useMemo)((()=>function(e,o){return e?(0,d.tZ)("rect",{fill:"inherit",x:"8",y:"11",width:"8",height:"2",rx:"1"}):o?(0,d.tZ)("path",{d:"M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z",fill:"inherit"}):null}(o,a)),[o,a]);return(0,d.tZ)(k.Z,{label:"",size:e,primaryColor:"var(--checkbox-background-color)",secondaryColor:"var(--checkbox-tick-color)"},(0,d.tZ)("g",{fillRule:"evenodd"},(0,d.tZ)("rect",{fill:"currentColor",x:"6",y:"6",width:"12",height:"12",rx:"2"}),r))})),C=(0,d.iv)({alignSelf:"center",gridArea:"1 / 2 / 2 / 3"});function f({children:e}){return(0,d.tZ)("span",{css:C},e)}f.displayName="LabelText";const x=(0,d.iv)({paddingLeft:"var(--ds-space-025, 2px)",color:`var(--ds-text-danger, ${l.gR})`});function y(){return(0,d.tZ)("span",{css:x,"aria-hidden":!0},"*")}y.displayName="RequiredIndicator";const $=["isChecked","isDisabled","isInvalid","defaultChecked","isIndeterminate","size","onChange","analyticsContext","label","name","value","isRequired","testId"],Z=(0,d.iv)({width:"100%",height:"100%",margin:"var(--ds-space-0, 0px)",appearance:"none",border:"none",gridArea:"1 / 1 / 2 / 2",opacity:0,outline:"none","& + svg":{"--checkbox-background-color":"var(--local-background)","--checkbox-border-color":"var(--local-border)","--checkbox-tick-color":"var(--local-tick-rest)",color:"var(--checkbox-background-color)",fill:"var(--checkbox-tick-color)",gridArea:"1 / 1 / 2 / 2",pointerEvents:"none",transition:"color 0.2s ease-in-out, fill 0.2s ease-in-out","rect:first-of-type":{stroke:"var(--checkbox-border-color)",strokeWidth:(0,c.e)("platform.design-system-team.update-border-radio-checkbox_7askv")?"var(--ds-border-width, 1px)":2,transition:"stroke 0.2s ease-in-out"}},"&&:focus + svg, &&:checked:focus + svg":{"--checkbox-border-color":"var(--local-border-focus)"},"&:hover + svg":{"--checkbox-background-color":"var(--local-background-hover)","--checkbox-border-color":"var(--local-border-hover)"},"&:checked:hover + svg":{"--checkbox-background-color":"var(--local-background-checked-hover)","--checkbox-border-color":"var(--local-border-checked-hover)"},"&:checked + svg":{"--checkbox-background-color":"var(--local-background-checked)","--checkbox-border-color":"var(--local-border-checked)","--checkbox-tick-color":"var(--local-tick-checked)"},"&[data-invalid] + svg":{"--checkbox-border-color":"var(--local-border-invalid)"},"&:checked[data-invalid] + svg":{"--checkbox-border-color":"var(--local-border-checked-invalid)"},"&:active + svg":{"--checkbox-background-color":"var(--local-background-active)","--checkbox-border-color":"var(--local-border-active)"},"&:checked:active + svg":{"--checkbox-background-color":"var(--local-background-active)","--checkbox-border-color":"var(--local-border-active)","--checkbox-tick-color":"var(--local-tick-active)"},"&:disabled + svg, &:disabled:hover + svg, &:disabled:focus + svg, &:disabled:active + svg, &:disabled[data-invalid] + svg":{"--checkbox-background-color":"var(--local-background-disabled)","--checkbox-border-color":"var(--local-border-disabled)",cursor:"not-allowed",pointerEvents:"none"},"&:disabled:checked + svg":{"--checkbox-tick-color":"var(--local-tick-disabled)"},"@media screen and (forced-colors: active)":{"& + svg":{"--checkbox-background-color":"Canvas","--checkbox-border-color":"CanvasText","--checkbox-tick-color":"CanvasText"},"&:checked + svg, &:checked:hover + svg":{"--checkbox-background-color":"Canvas","--checkbox-border-color":"CanvasText","--checkbox-tick-color":"CanvasText"},"&:focus + svg rect:first-of-type":{stroke:"Highlight"},"&[data-invalid] + svg":{"--checkbox-border-color":"Highlight"},"&:checked[data-invalid] + svg":{"--checkbox-border-color":"Highlight"},"&:disabled + svg, &:disabled:hover + svg, &:disabled:focus + svg, &:disabled:active + svg, &:disabled[data-invalid] + svg":{"--checkbox-background-color":"Canvas","--checkbox-border-color":"GrayText","--checkbox-tick-color":"GrayText"}}}),w=(0,s.memo)((0,s.forwardRef)((function(e,o){const{isChecked:a,isDisabled:c=!1,isInvalid:l=!1,defaultChecked:b=!1,isIndeterminate:u=!1,size:p="medium",onChange:v,analyticsContext:h,label:k,name:C,value:x,isRequired:w,testId:N}=e,E=(0,t.Z)(e,$),[I,S]=(0,s.useState)(void 0!==a?a:b),R=(0,s.useCallback)(((e,o)=>{S(e.target.checked),v&&v(e,o)}),[v]),z=(0,n.B)({fn:R,action:"changed",analyticsData:h,componentName:"checkbox",packageName:"platform-pkg",packageVersion:"0.0.0-use.local"}),A=(0,s.useRef)(null),B=(0,i.Z)([A,o]),H=void 0===a?I:a;return(0,d.tZ)(g,{isDisabled:c,label:k,id:E.id?`${E.id}-label`:void 0,testId:N&&`${N}--checkbox-label`},(0,d.tZ)("input",(0,r.Z)((0,r.Z)({},E),{},{type:"checkbox",ref:B,disabled:c,checked:H,value:x,name:C,required:w,css:Z,onChange:z,"aria-checked":u?"mixed":H,"aria-invalid":l?"true":void 0,"data-testid":N&&`${N}--hidden-checkbox`,"data-invalid":l?"true":void 0})),(0,d.tZ)(m,{size:p,isIndeterminate:u,isChecked:H}),k&&(0,d.tZ)(f,null,k,w&&(0,d.tZ)(y,null)))})));w.displayName="Checkbox";const N=w},314121:(e,o,a)=>{a.d(o,{Z:()=>r});const r=(0,a(840506).createContext)(void 0)},132135:(e,o,a)=>{a.d(o,{De:()=>l,__:()=>c});var r=a(39030),t=a(16728),s=a(2142),d=a(233006);const n=(0,s.I8)(),i=(0,r.iv)([(0,d.pB)({theme:{mode:"light"}}),{display:"inline-block",marginTop:0,marginBottom:"var(--ds-space-050, 4px)",color:`var(--ds-text-subtle, ${t.iw})`,fontFamily:n}]),c=({children:e,htmlFor:o,id:a,testId:t})=>(0,r.tZ)("label",{css:i,id:a,htmlFor:o,"data-testid":t},e);c.displayName="Label";const l=({children:e})=>(0,r.tZ)("legend",{css:i},e);l.displayName="Legend"},79198:(e,o,a)=>{a.d(o,{Z:()=>n});var r=a(39030),t=a(16728);const s=(0,a(2142).I8)(),d=(0,r.iv)({paddingLeft:"var(--ds-space-025, 2px)",color:`var(--ds-text-danger, ${t.$H})`,fontFamily:s});function n(){return(0,r.tZ)("span",{css:d,"aria-hidden":"true",title:"required"},"*")}n.displayName="RequiredAsterisk"},344789:(e,o,a)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r,t=(r=a(840506))&&r.__esModule?r:{default:r},s=a(340531);const d=e=>t.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M7.356 10.942a.497.497 0 00-.713 0l-.7.701a.501.501 0 00-.003.71l3.706 3.707a.501.501 0 00.705.003l7.712-7.712a.493.493 0 00-.006-.708l-.7-.7a.504.504 0 00-.714 0l-6.286 6.286a.506.506 0 01-.713 0l-2.288-2.287z" fill="currentColor"/></svg>'},e));d.displayName="EditorDoneIcon";var n=d;o.default=n},161871:(e,o,a)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r,t=(r=a(840506))&&r.__esModule?r:{default:r},s=a(340531);const d=e=>t.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="18" r="1"/><path d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05" fill="inherit"/></g></svg>'},e));d.displayName="QuestionCircleIcon";var n=d;o.default=n},19173:(e,o,a)=>{a.d(o,{Z:()=>i});var r=a(840506),t=a(39030),s=a(921994),d=a(629799);const n=(0,t.iv)(d.xR),i=(0,r.memo)((function({size:e="medium",label:o,primaryColor:a="currentColor",secondaryColor:r,testId:i,children:c}){return(0,t.tZ)("svg",{viewBox:"0 0 24 24",style:{color:a,fill:r||(0,s.V)()},css:[n,d.V8[e]],"data-testid":i,"aria-label":o||void 0,role:o?"img":"presentation"},c)}))},463022:(e,o,a)=>{a.d(o,{Z:()=>M});var r=a(615919),t=a(199009),s=a(840506),d=a(39030);const n={comfortable:"var(--ds-space-500, 40px)",cosy:"var(--ds-space-200, 16px)",compact:"var(--ds-space-050, 4px)"},i="--ds--pt--sp",c="--ds--pt--ts",l="--ds--pt--td",b="--ds--pt--te",u="--ds--pt--mc",p="--ds--pt--bg",v="var(--ds-space-100, 8px)",h="var(--ds-space-300, 24px)";var g=a(16728);const k=(0,d.iv)({color:`var(--ds-text, ${g.q2})`,cursor:"pointer"}),m=({href:e,onClick:o,label:a,testId:r})=>(0,d.tZ)("a",{css:k,href:e,onClick:o,"data-testid":r},a);m.displayName="Link";const C=m;var f=a(102226),x=a(789085),y=a(723177),$=a(429762);const Z=(0,d.iv)({height:v,position:"absolute",left:"50%",backgroundColor:`var(--ds-background-brand-bold, ${g.M5})`,borderBottomRightRadius:v,borderTopRightRadius:v,transform:`translate(0, calc(-1 * ${h}))`,transition:`width var(${c}) var(${b})`,transitionDelay:`var(${l})`}),w=({percentageComplete:e,testId:o})=>(0,d.tZ)("div",{"data-testid":o,style:{width:`calc(${e}% + ${e/100} * calc(var(${i}, ${n.cosy}) + var(--ds-space-050, 4px)))`},css:Z});w.displayName="ProgressBar";const N=w,E=(0,d.iv)({width:v,height:v,position:"absolute",left:"50%",backgroundColor:`var(${p})`,borderRadius:v,transform:`translate(-50%, calc(-1 * ${h}))`,transition:`opacity var(${c}) var(${b}), background-color var(${c}) var(${b})`,transitionDelay:`var(${l})`,"&.fade-appear":{opacity:.01},"&.fade-appear.fade-appear-active":{opacity:1},"&.fade-enter":{backgroundColor:`var(${u})`},"&.fade-enter.fade-enter-active":{backgroundColor:`var(${p})`}}),I=({testId:e})=>(0,d.tZ)("div",{"data-testid":e,css:E});I.displayName="ProgressMarker";const S=I,R=e=>{switch(e){case"unvisited":return`var(--ds-icon-subtle, ${g.n2})`;case"current":case"visited":case"disabled":return`var(--ds-icon-brand, ${g.M5})`;default:return}},z=e=>{switch(e){case"unvisited":return"subtlest";case"current":return"brand";case"visited":return"color.text";case"disabled":return"disabled";default:return}},A=e=>{switch(e){case"unvisited":return"regular";case"current":case"visited":case"disabled":return"semibold";default:return}},B=(0,y.tu)({width:"100%",position:"relative"}),H=(0,d.iv)({margin:"var(--ds-space-0, 0px)",overflowWrap:"break-word"}),D=(0,d.iv)({marginTop:h,lineHeight:"16px",textAlign:"center","&.fade-appear":{opacity:.01},"&.fade-appear.fade-appear-active":{opacity:1,transition:`opacity var(${c}) cubic-bezier(0.2, 0, 0, 1)`}});class F extends s.PureComponent{constructor(e){super(e),(0,t.Z)(this,"onEntered",(()=>{this.setState({transitioning:!1,oldMarkerColor:R(this.props.item.status),oldPercentageComplete:this.props.item.percentageComplete})})),this.state={transitioning:!1,oldMarkerColor:R(this.props.item.status),oldPercentageComplete:0}}UNSAFE_componentWillMount(){this.setState((0,r.Z)((0,r.Z)({},this.state),{},{transitioning:!0}))}UNSAFE_componentWillReceiveProps(){this.setState((0,r.Z)((0,r.Z)({},this.state),{},{transitioning:!0}))}shouldShowLink(){return"visited"===this.props.item.status&&!this.props.item.noLink}render(){const{item:e,render:o,transitionDelay:a,transitionSpeed:r,transitionEasing:t,testId:s}=this.props,n="current"===e.status?"step":"false",i={[c]:`${r}ms`,[l]:`${a}ms`,[b]:t,[u]:this.state.oldMarkerColor,[p]:R(e.status)};return(0,d.tZ)("li",{"data-testid":s,style:i,css:H,"aria-current":n},(0,d.tZ)($.Z,{xcss:B},(0,d.tZ)(f.Z,{appear:!0,in:this.state.transitioning,onEntered:this.onEntered,timeout:a+r,classNames:"fade"},(0,d.tZ)(S,{testId:s&&`${s}-marker`})),(0,d.tZ)(f.Z,{appear:!0,in:this.state.transitioning,onEntered:this.onEntered,timeout:a+r,classNames:"fade"},(0,d.tZ)(N,{testId:s&&`${s}-bar`,percentageComplete:e.percentageComplete})),(0,d.tZ)(f.Z,{appear:!0,in:this.state.transitioning,onEntered:this.onEntered,timeout:a+r,classNames:"fade"},(0,d.tZ)("div",{css:D},(0,d.tZ)(x.Z,{fontSize:"size.100",lineHeight:"lineHeight.100",testId:s&&`${s}-title`,color:z(e.status),fontWeight:A(e.status)},this.shouldShowLink()?o.link({item:e}):e.label)))))}}F.displayName="ProgressTrackerStage";const _=(0,d.iv)({display:"grid",width:"100%",margin:"0 auto",padding:"var(--ds-space-0, 0px)",gap:`var(${i})`,listStyleType:"none","&&":{marginBlockStart:"var(--ds-space-500, 40px)"}});class M extends s.PureComponent{constructor(...e){super(...e),(0,t.Z)(this,"state",{prevStages:this.props.items.map((e=>(0,r.Z)((0,r.Z)({},e),{},{percentageComplete:0})))})}UNSAFE_componentWillReceiveProps(e){const o=e.items.map((e=>{const o=this.props.items.find((o=>o.id===e.id));return void 0!==o?o:e}));this.setState({prevStages:o})}render(){const{testId:e,label:o}=this.props,a=this.props.items.filter(((e,o)=>e.percentageComplete!==this.state.prevStages[o].percentageComplete)).length,r=this.props.items.filter(((e,o)=>e.percentageComplete>this.state.prevStages[o].percentageComplete)).length,t=this.props.items.filter(((e,o)=>e.percentageComplete<this.state.prevStages[o].percentageComplete)).length;let s=r,c=t;const l=this.props.items.map(((e,o)=>{let t=0,n=0;const i=a>1?"linear":"cubic-bezier(0.15,1,0.3,1)";return this.props.animated&&(t=a>1?50:300,e.percentageComplete<this.state.prevStages[o].percentageComplete?(n=(c-1)*t,c-=1):e.percentageComplete>this.state.prevStages[o].percentageComplete&&(n=(r-s)*t,s-=1)),(0,d.tZ)(F,{transitionSpeed:t,transitionDelay:n,transitionEasing:i,key:e.id,item:e,render:this.props.render})})),b={gridTemplateColumns:`repeat(${l.length}, 1fr)`,[i]:n[this.props.spacing],maxWidth:80*l.length*2};return(0,d.tZ)("ul",{"data-testid":e,style:b,css:_,"aria-label":o},l)}}M.displayName="ProgressTracker",(0,t.Z)(M,"defaultProps",{items:[],spacing:"cosy",render:{link:({item:e})=>(0,d.tZ)(C,(0,r.Z)({},e))},animated:!0,label:"Progress"})},411420:(e,o,a)=>{a.d(o,{Z:()=>d});var r=a(840506),t=a(555687);const s=(0,r.memo)((function({children:e,onClick:o,href:a,testId:s,linkComponent:d}){return o||a?r.createElement(t.Z,{testId:s,appearance:"link",spacing:"none",onClick:o,href:a,component:a?d:void 0},e):r.createElement(r.Fragment,null,e)}));s.displayName="SectionMessageAction";const d=s},539474:(e,o,a)=>{a.d(o,{Z:()=>ee});var r=a(615919),t=a(872342),s=a(840506),d=a(39030),n=a(219957),i=a(24359),c=a(2142),l=a(16728);const b=`var(--ds-background-disabled, ${l.IR})`,u=`var(--ds-border-disabled, ${l.YS})`,p=`var(--ds-border-danger, ${l.$H})`,v=`var(--ds-border-input, ${(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?l.Y8:l.YS})`,h=`var(--ds-border-focused, ${l.VY})`,g=`var(--ds-background-input, ${l.YI})`,k=`var(--ds-background-input-hovered, ${l.gt})`,m=`var(--ds-background-input-pressed, ${l.N0})`,C=`var(--ds-text-subtlest, ${l.iw})`,f=`var(--ds-text, ${l.xA})`,x="transparent",y={backgroundColor:b,backgroundColorFocus:b,backgroundColorHover:b,borderColor:u,borderColorFocus:h,textColor:`var(--ds-text-disabled, ${l.n2})`},$={borderColor:p,borderColorFocus:h,backgroundColor:g,backgroundColorFocus:m,backgroundColorHover:k},Z={standard:g,subtle:x,none:x},w={standard:m,subtle:m,none:x},N={standard:k,subtle:k,none:x},E={standard:v,subtle:x,none:x},I={standard:h,subtle:h,none:x},S={standard:v,subtle:"var(--ds-border-input, transparent)",none:x},R=(0,c.ww)(),z=2.5*R,A=2*R,B=R,H="0.2s",D=(0,c.JB)(),F=(0,c.I8)(),_=(0,c.Vj)(),M=(e,o)=>z*e+12+2*o,T=(e,o)=>A*e+4+2*o,L=e=>e&&(0,d.iv)((0,r.Z)({"&:focus":{backgroundColor:w[e],borderColor:I[e],boxShadow:(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 var(--ds-border-width, 1px) ${I[e]}`:void 0},"&:not(:focus)":{backgroundColor:Z[e],borderColor:E[e]},"&[data-invalid]:focus":{backgroundColor:$.backgroundColorFocus,borderColor:$.borderColorFocus,boxShadow:(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 var(--ds-border-width, 1px) ${$.borderColorFocus}`:void 0},"&[data-invalid]:not(:focus)":{backgroundColor:$.backgroundColor,borderColor:$.borderColor,boxShadow:(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 var(--ds-border-width, 1px) ${$.borderColor}`:void 0}},"standard"===e?{"&:disabled:focus":{backgroundColor:y.backgroundColorFocus,borderColor:y.borderColorFocus},"&:disabled:not(:focus)":{backgroundColor:y.backgroundColor,borderColor:y.borderColor}}:{})),P=e=>(0,d.iv)({"&::placeholder":{color:e}}),V=e=>e&&(0,d.iv)({"&:hover:not(:read-only):not(:focus)":{backgroundColor:N[e],borderColor:S[e],"&:disabled":{backgroundColor:y.backgroundColorHover},"&[data-invalid]":{backgroundColor:$.backgroundColorHover,borderColor:$.borderColor,boxShadow:(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 var(--ds-border-width, 1px) ${$.borderColor}`:void 0}}}),W=e=>"horizontal"===e||"vertical"===e?(0,d.iv)({resize:e}):"auto"===e?(0,d.iv)({resize:"both"}):(0,d.iv)({resize:"none"}),Y=e=>(0,d.iv)({borderStyle:"none"===e?"none":"solid"}),U=e=>(0,d.iv)({fontFamily:e?_:F}),q=(e=1,o)=>{const a=(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")&&"none"!==o?1:2,r=B-a,t=a;return(0,d.iv)({"&[data-compact]":{minHeight:T(e,t),padding:`2px ${r}px`,lineHeight:A/D},"&:not([data-compact])":{minHeight:M(e,t),padding:`6px ${r}px`,lineHeight:z/D}})},O=(0,d.iv)({display:"block",boxSizing:"border-box",width:"100%",minWidth:0,maxWidth:"100%",margin:0,position:"relative",flex:"1 1 100%",borderRadius:"var(--ds-border-radius, 3px)",borderWidth:(0,i.e)("platform.design-system-team.border-checkbox_nyoiu")?1:2,fontSize:D,outline:"none",overflow:"auto",transition:`background-color ${H} ease-in-out,\n               border-color ${H} ease-in-out`,wordWrap:"break-word","&:disabled":(0,r.Z)({cursor:"not-allowed"},{WebkitTextFillColor:"unset",WebkitOpacity:"1"}),"&::-ms-clear":{display:"none"},"&:invalid":{boxShadow:"none"}}),j=e=>(0,d.iv)([L(e),V(e),P(C),{color:f,"&:disabled":{color:y.textColor}}]),G=["resize","appearance","isCompact","isRequired","isReadOnly","isDisabled","isInvalid","isMonospaced","minimumRows","testId","maxHeight","onBlur","onFocus","onChange","value"],X={componentName:"textArea",packageName:"platform-pkg",packageVersion:"0.0.0-use.local"},Q=e=>{e.style.height="auto";const o=e.scrollHeight+4;e.style.height=`${o}px`},J=(0,s.forwardRef)(((e,o)=>{const a=(0,s.useRef)(null),{resize:i="smart",appearance:c="standard",isCompact:l=!1,isRequired:b=!1,isReadOnly:u=!1,isDisabled:p=!1,isInvalid:v=!1,isMonospaced:h=!1,minimumRows:g=2,testId:k,maxHeight:m="50vh",onBlur:C,onFocus:f,onChange:x,value:y}=e,$=(0,t.Z)(e,G);(0,s.useEffect)((()=>{const e=a.current;"smart"===i&&e&&Q(e)}),[i,y]);const Z=(0,n.B)((0,r.Z)({fn:e=>{C&&C(e)},action:"blurred"},X)),w=(0,n.B)((0,r.Z)({fn:e=>{f&&f(e)},action:"focused"},X)),N=(0,s.useCallback)((e=>{const o=a.current;"smart"===i&&o&&Q(o),x&&x(e)}),[x,i]),E={"data-invalid":v||void 0,"data-compact":l||void 0,"data-testid":k||void 0},I=(0,s.useMemo)((()=>(({minimumRows:e,resize:o,appearance:a,isMonospaced:r,maxHeight:t})=>(0,d.iv)([O,q(e,a),W(o),Y(a),U(r),{maxHeight:t}]))({minimumRows:g,resize:i,appearance:c,isMonospaced:h,maxHeight:m})),[g,i,c,h,m]),S=(0,d.iv)([I,j(c)]);return(0,d.tZ)("textarea",(0,r.Z)((0,r.Z)({},E),{},{value:y,disabled:p,readOnly:u,required:b,ref:e=>{a.current=e,o&&"object"==typeof o&&(o.current=e),o&&"function"==typeof o&&o(e)},onChange:N,onBlur:Z,onFocus:w,rows:g,css:S},$))})),K=(0,s.memo)((0,s.forwardRef)((function(e,o){return(0,d.tZ)(J,(0,r.Z)({ref:o},e))})));K.displayName="TextArea";const ee=K},293330:(e,o,a)=>{a.d(o,{Z:()=>Z});var r=a(615919),t=a(840506),s=a(39030),d=a(219957),n=a(319754),i=a(805643),c=a(344789),l=a(2142),b=a(16728);const u={backgroundColorChecked:`var(--ds-background-success-bold, ${b.ak})`,backgroundColorCheckedHover:`var(--ds-background-success-bold-hovered, ${b.VB})`,backgroundColorCheckedDisabled:`var(--ds-background-disabled, ${b.IR})`,backgroundColorUnchecked:`var(--ds-background-neutral-bold, ${b.iw})`,backgroundColorUncheckedHover:`var(--ds-background-neutral-bold-hovered, ${b.zN})`,backgroundColorUncheckedDisabled:`var(--ds-background-disabled, ${b.IR})`,borderColorFocus:`var(--ds-border-focused, ${b.VY})`,iconColorChecked:`var(--ds-icon-inverse, ${b.N0})`,iconColorDisabled:`var(--ds-icon-disabled, ${b.n2})`,iconColorUnchecked:`var(--ds-icon-inverse, ${b.N0})`,handleBackgroundColor:`var(--ds-icon-inverse, ${b.N0})`,handleBackgroundColorChecked:`var(--ds-icon-inverse, ${b.N0})`,handleBackgroundColorDisabled:`var(--ds-icon-inverse, ${b.N0})`},p=(0,l.ww)(),v={regular:{height:2*p,width:4*p},large:{height:2*p+p/2,width:5*p}},h=({size:e})=>v[e].height,g=({size:e})=>v[e].width,k=p/4,m="transform 0.2s ease",C=e=>{const o=u;return(0,s.iv)((0,r.Z)((0,r.Z)({boxSizing:"content-box",display:"inline-block",padding:2,margin:2,backgroundClip:"content-box",backgroundColor:o.backgroundColorUnchecked,borderRadius:`${h({size:e})}px`,border:"2px solid transparent",height:`${h({size:e})}px`,position:"relative",transition:`${m}`,width:`${g({size:e})}px`,"&[data-checked]":{backgroundColor:o.backgroundColorChecked,color:o.iconColorChecked},"&[data-disabled]:not([data-checked])":{backgroundColor:o.backgroundColorUncheckedDisabled},"&[data-disabled][data-checked],&[data-disabled][data-checked]:hover":{backgroundColor:o.backgroundColorCheckedDisabled},"&:focus-within":{border:`2px solid ${o.borderColorFocus}`},"&:hover":{backgroundColor:o.backgroundColorUncheckedHover,cursor:"pointer"},"&[data-disabled]:hover,&[data-disabled][data-checked]:hover,&[data-disabled]:not([data-checked]):hover":{cursor:"not-allowed"},"&[data-checked]:hover":{backgroundColor:o.backgroundColorCheckedHover},"&:not([data-checked]):hover":{backgroundColor:o.backgroundColorUncheckedHover},"&[data-disabled]:not([data-checked]):hover":{backgroundColor:o.backgroundColorCheckedDisabled},color:o.iconColorUnchecked,"&[data-disabled], &[data-disabled][data-checked], &[data-disabled][data-checked]:hover":{color:o.iconColorDisabled},'input[type="checkbox"]':{opacity:0,margin:0,padding:0,border:"none","&:focus":{outline:"none !important"}},"::before":{backgroundColor:o.handleBackgroundColor,borderRadius:"var(--ds-border-radius-circle, 50%)",content:'""',position:"absolute",transform:"initial",transition:m,insetBlockEnd:2*k+"px",height:h({size:e})-2*k+"px",width:h({size:e})-2*k+"px",insetInlineStart:2*k+"px"},"&[data-checked]::before":{backgroundColor:o.handleBackgroundColorChecked,transform:`translateX(${h({size:e})}px)`},"&[data-disabled]::before":{backgroundColor:o.handleBackgroundColorDisabled,zIndex:1},"> span":{position:"absolute",insetBlockStart:`${k}px`},">span:first-of-type":{insetInlineStart:"3px"},">span:last-of-type":{insetInlineEnd:"3px"}},"large"===e&&{"> span":{position:"absolute",height:"20px",width:"20px"}}),{},{"@media screen and (forced-colors: active)":{"::before":{filter:"grayscale(100%) invert(1)"},"&:focus-within":{outline:"1px solid"}}}))},f=e=>"large"===e?"large":"small",x=n.Z,y={componentName:"toggle",packageName:"platform-pkg",packageVersion:"0.0.0-use.local"},$=(0,t.memo)((0,t.forwardRef)(((e,o)=>{const{defaultChecked:a=!1,isDisabled:n=!1,onBlur:l=x,onChange:b=x,onFocus:u=x,size:p="regular",name:v="",value:h="",isChecked:g,analyticsContext:k,id:m,testId:$,label:Z,descriptionId:w}=e,N=void 0===g,[E,I]=(0,t.useState)(a),S=(0,d.B)((0,r.Z)({fn:l,action:"blur",analyticsData:k},y)),R=(0,d.B)((0,r.Z)({fn:u,action:"focus",analyticsData:k},y)),z=(0,d.B)((0,r.Z)({fn:(e,o)=>(N&&I((e=>!e)),b(e,o)),action:"change",analyticsData:k},y)),A=N?E:g,B={"data-checked":A||void 0,"data-disabled":n||void 0,"data-size":p,"data-testid":$||void 0},H=(0,t.useMemo)((()=>C(p)),[p]);return(0,s.tZ)("label",(0,r.Z)((0,r.Z)({},B),{},{css:H}),(0,s.tZ)("input",{ref:o,checked:A,disabled:n,id:m,name:v,onBlur:S,onChange:z,onFocus:R,type:"checkbox",value:h,"data-testid":$&&`${$}--input`,"aria-label":Z,"aria-describedby":w}),(0,s.tZ)(c.default,{label:"",size:f(p),testId:$&&`${$}--toggle-check-icon`}),(0,s.tZ)(i.default,{label:"",size:f(p),testId:$&&`${$}--toggle-cross-icon`}))})));$.displayName="Toggle";const Z=$}}]);
//# sourceMappingURL=50787.5m_1ZSfHZS.js.map