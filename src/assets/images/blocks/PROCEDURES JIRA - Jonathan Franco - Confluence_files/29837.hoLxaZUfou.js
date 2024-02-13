"use strict";(self._cf=self._cf||[]).push([[29837,9580,57239],{253594:(e,t,a)=>{var n=a(150913);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}})},870797:(e,t,a)=>{a.d(t,{M:()=>m});var n=a(615919),o=a(840506),s=a(147760),r=a(678213),l=a(54685),i=a(9019),c=a(740223),u=a(229230),d=a(243578);const p=()=>{},h=(0,o.memo)((({customData:e={},metric:t,onComplete:a=p,stopTime:l,timing:i,augmentCustomDataAfterComplete:h})=>{const m=(0,o.useCallback)((()=>{if(t){let o;a(),o=h?h(e):e,s.n.getPageLoadMetric().mark(`${u.T}:${t.key}`),t.stop({customData:(0,n.Z)((0,n.Z)({},o),{},{previousRoute:d.x.previousRoute,previousContentId:d.x.previousContentId,pageLoadInfo:(0,r.aX)()}),stopTime:l})}}),[t,a]);return(0,c.G)(m,i),null})),m=(0,l.m)({attribution:i.x.BACKBONE})(h)},292139:(e,t,a)=>{a.d(t,{L:()=>d});var n=a(199009),o=a(615919),s=a(946972),r=a(840506),l=a(618305);const i={small:12,medium:26,large:36},c=(0,s.Z)("div",{target:"ewi4oqc0"})([],(e=>(0,o.Z)({width:"100%",height:"100%",position:"relative"},e.style)),""),u=(0,s.Z)("div",{target:"ewi4oqc1"})("position:absolute;left:50%;top:50%;margin-left:",(e=>e.marginLeft),"px;margin-top:",(e=>e.marginTop),"px;z-index:100;");class d extends r.PureComponent{render(){const{style:e,size:t}=this.props;return r.createElement(c,{style:e,"data-test-id":"wrapper-spinner"},r.createElement(u,{"data-test-id":"spinner",marginLeft:-i[t]/2,marginTop:-i[t]/2},r.createElement(l.Z,{size:i[t]})))}}d.displayName="CenteredSpinner",(0,n.Z)(d,"displayName","CenteredSpinner"),(0,n.Z)(d,"defaultProps",{size:"small"})},758370:(e,t,a)=>{a.d(t,{k:()=>n});let n=function(e){return e.SHARE_PAGE="share-page",e.PAGE_RESTRICTIONS="page-restrictions",e.COPY_LINK="copy-link",e.CONTENT_TOOLS="content-tools",e.PAGE_FAVOURITE="page-favourite",e.WATCH_PAGE="watch-page",e.EDIT_PAGE="edit-page",e.PAGE_COMMENTS="page-comments",e.OPEN_EMBEDDED_LINK="open-embedded-link",e}({})},865072:(e,t,a)=>{a.d(t,{F:()=>i});var n=a(615919),o=a(199009),s=a(822464),r=a(132464),l=a(400318);class i extends s.W2{constructor(...e){super(...e),(0,o.Z)(this,"state",{items:[],itemsLoaded:!1}),(0,o.Z)(this,"loadTimeout",null),(0,o.Z)(this,"addItem",(e=>{if(this.state.items.filter((t=>t.key===e)).length)return!1;const t={key:e,loaded:!1};return this.state.items.push(t),!0})),(0,o.Z)(this,"getItem",(e=>{const t=this.state.items.find((t=>t.key===e));return t?(0,n.Z)({},t):void 0})),(0,o.Z)(this,"markItem",(async e=>{var t;null!==(t=this.getItem(e))&&void 0!==t&&t.loaded||this.setState((t=>({items:t.items.map((t=>t.key!==e?t:{key:t.key,loaded:!0}))})),this.checkAllItems)})),(0,o.Z)(this,"checkAllItems",(()=>{let e=!0;this.state.items.length&&(this.state.items.forEach((t=>{t.loaded||(e=!1)})),e&&((0,r.OV)().succeed({name:l.eYX}),this.state.itemsLoaded||(this.setState((()=>({itemsLoaded:!0}))),clearTimeout(this.loadTimeout))))})),(0,o.Z)(this,"initItems",(()=>{this.state.items=[],this.state.itemsLoaded=!1,clearTimeout(this.loadTimeout),this.startTimer(),(0,r.OV)().start({name:l.eYX})})),(0,o.Z)(this,"startTimer",(()=>{this.loadTimeout=setTimeout((()=>{(0,r.OV)().fail({name:l.eYX,error:new Error("Grouped Page Buttons loading exceeded 5000 milliseconds")}),this.setState((()=>({itemsLoaded:!0})))}),5e3)}))}}},15325:(e,t,a)=>{a.r(t),a.d(t,{AI_MATE_SHORTCUT:()=>y,AUTOMATION_SHORTCUT:()=>x,BLOG_SHORTCUT:()=>l,BROWSER_SAVE_SHORTCUT:()=>o,CLOSE_INLINE_COMMENTS_SHORTCUT:()=>A,COMMENT_EDITOR_SHORTCUT:()=>s,CREATE_COMMENT_SHORTCUT:()=>u,EDITOR2_SHORTCUTS:()=>n,EDIT_SHORTCUT:()=>p,GLOBAL_CREATE_SHORTCUT:()=>i,GO_HOME_SHORTCUT:()=>O,GO_TO_RECENT_SHORTCUT:()=>v,HELP_SHORTCUT:()=>Z,INLINE_COMMENTS_SHORTCUT:()=>r,LABELS_SHORTCUT:()=>T,LINK_TO_THIS_PAGE_SHORTCUT:()=>d,NAVIGATION_SHORTCUT:()=>_,NAVIGATION_SLASH_SHORTCUT:()=>I,NEXT_COMMENT_SHORTCUT:()=>E,NEXT_TEMPLATE_SHORTCUT:()=>N,NOTIFICATIONS_SHORTCUT:()=>b,PRESENTATION_MODE_SHORTCUT:()=>h,PREV_COMMENT_SHORTCUT:()=>C,PREV_TEMPLATE_SHORTCUT:()=>W,SHARE_PAGE_SHORTCUT:()=>g,SIDE_NAVIGATION_SHORTCUT:()=>w,SIDE_NAVIGATION_SHORTCUT_IN_EDIT:()=>P,SPACE_OVERVIEW_SHORTCUT:()=>R,STAR_BUTTON_SHORTCUT:()=>c,SUBMIT_FEEDBACK_SHORTCUT:()=>S,UNDO_SHORTCUT:()=>U,VIEW_ATTACHMENTS_SHORTCUT:()=>f,WATCH_PAGE_SHORTCUT:()=>m});const n={PUBLISH:"mod+enter",PUBLISH_WITH_COMMENT:"mod+shift+enter",EDIT:"e",PREVIEW:"mod+shift+e"},o="mod+s",s="command+enter",r="mod+enter",l="b",i="c",c="f",u="m",d="k",p="e",h="r",m="w",g="s",T="l",f="t",E="n",C="p",S="g f",_="g g",O="g d",b="g n",v="g r",R="g s",y="g a",I="/",w="[",P="ctrl+[",A="]",U="mod+z",W="left",N="right",Z="?",x="a"},188225:(e,t,a)=>{a.d(t,{B:()=>r});var n=a(834232),o=a(944547);const s=(0,n.M)({initialState:{areKeyboardShortcutsEnabled:!1},actions:{setKeyboardShortcutsEnabled:e=>({setState:t})=>{t({areKeyboardShortcutsEnabled:e})}},name:"areKeyboardShortcutsEnabled"}),r=(0,o.Bi)(s,{selector:e=>e.areKeyboardShortcutsEnabled})},92347:(e,t,a)=>{a.r(t),a.d(t,{WatchDialog:()=>z});var n=a(199009),o=a(840506),s=a(822464),r=a(911492),l=a(430564),i=a(649233),c=a(419539),u=a(213064),d=a(234461),p=a(9019),h=a(722755),m=a(695219),g=a(430288),T=a(122529),f=a(724093),E=a(292139),C=a(940155),S=a(870797),_=a(776694),O=a(615919),b=a(872342),v=a(767001),R=a(93972),y=a(555687),I=a(821545),w=a(414358),P=a(332072),A=a(770144),U=a(301540),W=a(904148),N=a(197949),Z=a(15325);const x=["as","style"];a(679928);const k=(0,R.defineMessages)({startWatchingIconLabel:{id:"watch-dialog.watch-button.start.watching.label",defaultMessage:"Start watching"},stopWatchingIconLabel:{id:"watch-dialog.watch-button.stop.watching.label",defaultMessage:"Stop watching"},watchStopTooltip:{id:"watch-dialog.stop.button.tooltip",defaultMessage:"Stop watching"},watchStartTooltip:{id:"watch-dialog.start.button.tooltip",defaultMessage:"Watch"},followButtonText:{id:"watch-dialog.follow-button.text",defaultMessage:"Follow"},followingButtonText:{id:"watch-dialog.following-button.text",defaultMessage:"Following"},followStopTooltip:{id:"watch-dialog.stop.follow-button.tooltip",defaultMessage:"Stop following"},followStartTooltip:{id:"watch-dialog.start.follow-button.tooltip",defaultMessage:"Follow"}}),D=(0,o.forwardRef)(((e,t)=>{let{as:a=y.Z,style:n}=e,s=(0,b.Z)(e,x);return o.createElement(a,(0,O.Z)((0,O.Z)({},s),{},{style:n,ref:t,className:(0,v.Z)(["_701w1ul9",s.className])}))}));const M=(0,l.Z)()((0,T.ZP)(class extends o.PureComponent{constructor(...e){super(...e),(0,n.Z)(this,"handleClick",(()=>{this.clickAnalyticsEvent(),this.props.onClick()}))}componentDidMount(){var e;const{shouldSSRWatchButton:t}=this.props;t&&null!==(e=window)&&void 0!==e&&null!==(e=e.__SSR_EVENTS_CAPTURE__)&&void 0!==e&&e.watchButton&&(this.handleClick(),delete window.__SSR_EVENTS_CAPTURE__.watchButton)}clickAnalyticsEvent(){const{createAnalyticsEvent:e,isWatching:t}=this.props;e({type:"sendUIEvent",data:{action:t?"unwatched":"watched",actionSubject:"page-watch-button",source:"viewPageScreen"}}).fire()}render(){const{isSelected:e,intl:t,isDisabled:a,isWatching:n,onMouseOver:s,triggerProps:r,defaultTab:l,changeWatchForNewUsersExperimentCohort:i,changeWatchForEstablishedUsersExperimentCohort:c}=this.props,u=(m.A.PAGE,m.A.SPACE,l===m.A.PAGE&&(i===g.yd||c===g.BJ||c===g.bF));return o.createElement(A.Z,{name:"page-watch-spotlight"},o.createElement(P.Z,{tag:"span",content:o.createElement(N.oW,{shortcut:Z.WATCH_PAGE_SHORTCUT,contentBefore:n?u?t.formatMessage(k.followStopTooltip):t.formatMessage(k.watchStopTooltip):u?t.formatMessage(k.followStartTooltip):t.formatMessage(k.watchStartTooltip)})},!1,o.createElement(U.u,{metricName:W.yG},u?o.createElement(y.Z,(0,O.Z)({"data-id":"page-watch-button","data-test-id":"page-watch-button",isDisabled:a,isSelected:e,onClick:this.handleClick,onMouseOver:s,onFocus:s},r),n?t.formatMessage(k.followingButtonText):t.formatMessage(k.followButtonText)):o.createElement(D,(0,O.Z)({"data-id":"page-watch-button","data-test-id":"page-watch-button",appearance:"subtle",isDisabled:a,isSelected:e,onClick:this.handleClick,onMouseOver:s,onFocus:s,iconBefore:n?o.createElement(I.default,{label:t.formatMessage(k.stopWatchingIconLabel)}):o.createElement(w.default,{label:t.formatMessage(k.startWatchingIconLabel)})},r)))))}}));var H=a(74382);const L=(0,C.ui)({__loadable_id__:"wl5CC",name:"LazyWatchDialogContent",loader:async()=>(await Promise.all([a.e(12705),a.e(6944)]).then(a.bind(a,517198))).WatchDialogContent,loading:({shouldSSRWatchButton:e})=>o.createElement("div",{style:{width:"325px",height:"180px"}},!e&&o.createElement(E.L,{size:"medium"}))}),F=(0,C.ui)({__loadable_id__:"0YBl_",name:"LazyWatchDialogShortcut",loader:async()=>(await Promise.all([a.e(54936),a.e(61769),a.e(31038)]).then(a.bind(a,243410))).WatchDialogShortcut}),B=(0,T.ZP)(class extends o.PureComponent{constructor(...e){super(...e),(0,n.Z)(this,"state",{dialogOpen:!1}),(0,n.Z)(this,"toggleDialog",(()=>{this.props.isDisabled||this.setState((e=>({dialogOpen:!e.dialogOpen})))})),(0,n.Z)(this,"openDialog",(()=>{this.setState({dialogOpen:!0})})),(0,n.Z)(this,"closeDialog",(()=>{this.setState({dialogOpen:!1})})),(0,n.Z)(this,"updateQueryHandler",((e,t,a)=>{const{contentId:n}=this.props,o=e.readQuery({query:_.G,variables:{contentId:n}});"content"===t?o.singleContent.currentUserIsWatching=a:"space"===t?o.singleContent.space.currentUser.isWatched=a:o.singleContent.space.currentUser.isWatchingBlogs=a,e.writeQuery({query:_.G,data:o})})),(0,n.Z)(this,"renderPopupTrigger",(e=>{const{dialogOpen:t}=this.state,{isDisabled:a,customTrigger:n,shouldSSRWatchButton:s,defaultTab:r,contentId:l,changeWatchForNewUsersExperimentCohort:i,changeWatchForEstablishedUsersExperimentCohort:c}=this.props,u=n||M;return o.createElement(o.Fragment,null,o.createElement(u,{isDisabled:a,isWatching:this.isWatching(),isSelected:t,onMouseOver:L.preload,onClick:this.toggleDialog,triggerProps:e,shouldSSRWatchButton:s,defaultTab:r,changeWatchForNewUsersExperimentCohort:i,changeWatchForEstablishedUsersExperimentCohort:c}),o.createElement(S.M,{key:l,metric:H.V}))})),(0,n.Z)(this,"renderPopupContent",(()=>{const{contentId:e,spaceId:t,params:a,defaultTab:n,skipTrialDetailsQuery:s}=this.props;return o.createElement("div",{style:{padding:"var(--ds-space-300, 24px) var(--ds-space-200, 16px)"}},o.createElement(L,{contentId:e,spaceId:t,defaultTab:n,params:a,closeWatchDialog:this.closeDialog,updateQueryHandler:this.updateQueryHandler,skipTrialDetailsQuery:s}))}))}isWatching(){const{isDisabled:e,params:t}=this.props;return!e&&(t.isWatchingPage||t.isBlogPost&&t.isWatchingBlogs||t.isWatchingSpace)}render(){const{dialogOpen:e}=this.state,{contentId:t,params:a,flagsContainer:n,isDisabled:s,useShortcut:r,customPlacement:l}=this.props;return o.createElement(o.Fragment,null,r&&!s&&o.createElement(F,{contentId:t,params:a,flagsContainer:n,openDialog:this.openDialog,updateQueryHandler:this.updateQueryHandler}),o.createElement(f.Z,{isOpen:e,onClose:this.closeDialog,content:()=>this.renderPopupContent(),trigger:this.renderPopupTrigger,placement:l}))}});var G,V=a(324099);const z=(0,l.Z)()((G=class extends o.PureComponent{render(){const{contentId:e,defaultTab:t,customPlacement:a,onRender:n,customTrigger:l,compact:T,useShortcut:f,isPreloadingData:E,changeWatchForNewUsersExperimentCohort:C,changeWatchForEstablishedUsersExperimentCohort:S}=this.props;if(!e)return null;const O=Boolean(window.__SSR_RENDERED__&&(t===m.A.PAGE||t===m.A.SPACE));return o.createElement(d.S,{attribution:p.x.COLLABORATION},o.createElement(c.e,null,(({isLicensed:c,userId:d,edition:p,featureFlagClient:m})=>{if(!d)return null;const b=m.getBooleanValue(g.cY,{default:!1}),v=!c||!b||p===g.dE.FREE;return o.createElement(s.xs,{to:[u.Q]},(s=>o.createElement(r.AE,{query:_.G,variables:{contentId:e},skip:!c,fetchPolicy:E||O?"cache-first":"cache-and-network"},(({data:r,loading:u,error:d})=>{var m,g,E,_,R,y;if(d)return(0,h.T)(d)&&(0,i.Xb)(d),null;if(u)return o.createElement(V.z,{compact:T,changeWatchForNewUsersExperimentCohort:C,changeWatchForEstablishedUsersExperimentCohort:S});const I=null!=(y=r)&&null!=(y=y.singleContent)&&null!=(y=y.space)?y.id:y,w={isWatchingPage:null!=(R=r)&&null!=(R=R.singleContent)?R.currentUserIsWatching:R,isWatchingSpace:null!=(_=r)&&null!=(_=_.singleContent)&&null!=(_=_.space)&&null!=(_=_.currentUser)?_.isWatched:_,isBlogPost:"blogpost"===(null!=(E=r)&&null!=(E=E.singleContent)?E.type:E),isWatchingBlogs:null!=(g=r)&&null!=(g=g.singleContent)&&null!=(g=g.space)&&null!=(g=g.currentUser)?g.isWatchingBlogs:g,isAdmin:(P=(null!=(m=r)&&null!=(m=m.singleContent)&&null!=(m=m.space)?m.operations:m)||[],Boolean(P.find((e=>"space"===e.targetType&&"administer"===e.operation)))),edition:p,shutDownManageWatchersForUnpaid:b};var P;return n(),o.createElement(B,{contentId:e,spaceId:I,params:w,defaultTab:t,flagsContainer:s,customPlacement:a,isDisabled:!c,customTrigger:l,useShortcut:f,shouldSSRWatchButton:O,skipTrialDetailsQuery:v,changeWatchForNewUsersExperimentCohort:C,changeWatchForEstablishedUsersExperimentCohort:S})}))))})))}},(0,n.Z)(G,"defaultProps",{onRender:()=>{},useShortcut:!0}),G))},542152:(e,t,a)=>{a.r(t),a.d(t,{WatchDialogWrapper:()=>u});var n=a(199009),o=a(840506),s=a(822464),r=a(758370),l=a(865072),i=a(482997),c=a(92347);class u extends o.PureComponent{constructor(...e){super(...e),(0,n.Z)(this,"isItemMarked",!1),(0,n.Z)(this,"markItem",null),(0,n.Z)(this,"buttonRendered",(()=>{this.isItemMarked||(this.isItemMarked=!0,this.markItem(r.k.WATCH_PAGE))}))}render(){const{contentId:e,defaultTab:t,isPreloadingData:a,changeWatchForNewUsersExperimentCohort:n,changeWatchForEstablishedUsersExperimentCohort:u}=this.props;return o.createElement(s.xs,{to:[i.S,l.F]},((s,l)=>{const{addItem:i,markItem:d}=l,p=s.getTotalHeight(!1)?"bottom":"auto";return i(r.k.WATCH_PAGE),this.markItem=d,o.createElement(c.WatchDialog,{contentId:e,defaultTab:t,customPlacement:p,onRender:this.buttonRendered,isPreloadingData:a,changeWatchForNewUsersExperimentCohort:n,changeWatchForEstablishedUsersExperimentCohort:u})}))}}u.displayName="WatchDialogWrapper"},821545:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=a(840506))&&n.__esModule?n:{default:n},s=a(340531);const r=e=>o.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M11.983 15.984a4.005 4.005 0 01-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 014.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"/><circle cx="12" cy="12" r="2"/></g></svg>'},e));r.displayName="WatchFilledIcon";var l=r;t.default=l},791945:(e,t,a)=>{a.d(t,{ZW:()=>c,i5:()=>r,jC:()=>s});var n=a(840506),o=a(319754);const s=(0,n.createContext)(0),r=(0,n.createContext)({topLevelRef:{current:null},setTopLevel:o.Z}),l=({children:e,currentLevel:t})=>{const{setTopLevel:a}=(0,n.useContext)(r);return a(t),(0,n.useEffect)((()=>()=>{setTimeout((()=>{a(t-1)}),0)}),[a,t]),n.createElement(s.Provider,{value:t},e)};l.displayName="LevelProvider";const i=({children:e})=>{const t=(0,n.useRef)(0),a=(0,n.useMemo)((()=>({topLevelRef:t,setTopLevel:e=>{t.current=e}})),[t]);return n.createElement(r.Provider,{value:a},e)};i.displayName="LayeringProvider";const c=({children:e,isDisabled:t=!0})=>{const a=(0,n.useContext)(s);if(t)return n.createElement(n.Fragment,null,e);const o=a>0,r=n.createElement(l,{currentLevel:a+1},e);return o?r:n.createElement(i,null,r)}},259612:(e,t,a)=>{a.d(t,{J:()=>i,f:()=>l});var n=a(840506),o=a(393242),s=a(791945);const r="Escape";function l({onClose:e,isDisabled:t}){const a=(0,n.useRef)(!1),{isLayerDisabled:s}=i(),l=(0,n.useCallback)((n=>{const o=s();t||a.current||n.key!==r||o||(a.current=!0,e(n))}),[e,t,s]),c=(0,n.useCallback)((()=>{a.current=!1}),[]);(0,n.useEffect)((()=>(0,o.Ev)(document,[{type:"keydown",listener:l},{type:"keyup",listener:c}],{capture:!1})),[l,c])}function i(){const e=(0,n.useContext)(s.jC),{topLevelRef:t}=(0,n.useContext)(s.i5),a=(0,n.useCallback)((()=>!!t.current&&e!==t.current),[e,t]);return{currentLevel:e,topLevelRef:t,isLayerDisabled:a}}},770144:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(840506),o=a(253594),s=a(316612);const r=({children:e,name:t})=>n.createElement(s.l4,null,(a=>a?n.createElement(o.Z,{innerRef:a(t)},n.createElement(n.Fragment,null,e)):e));r.displayName="SpotlightTarget";const l=r},724093:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a(478201).G},478201:(e,t,a)=>{a.d(t,{G:()=>W});var n=a(840506),o=a(39030),s=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function r(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(n=e[a],o=t[a],!(n===o||s(n)&&s(o)))return!1;var n,o;return!0}var l=a(791945),i=a(129275),c=a(479198),u=a(136342),d=a(2142),p=a(615919),h=a(872342),m=a(259612),g=a(24359),T=a(379525),f=a(16728),E=a(507690);const C=({children:e,update:t})=>{const a=(0,n.useRef)(!0);return(0,n.useLayoutEffect)((()=>{a.current?a.current=!1:t()}),[t]),n.createElement(n.Fragment,null,e)};C.displayName="RepositionOnUpdate";var S=a(393242),_=a(319754);var O=a(747256),b=a.n(O);const v=["shouldRenderToParent","children"],R=(0,o.iv)({display:"block",boxSizing:"border-box",zIndex:d.ug.layer(),flex:"1 1 auto",backgroundColor:`var(--ds-surface-overlay, ${f.N0})`,borderRadius:"var(--ds-border-radius, 3px)",boxShadow:`var(--ds-shadow-overlay, 0 4px 8px -2px ${f.Nx}, 0 0 1px ${f.VG})`,[E.kO]:`var(--ds-surface-overlay, ${f.N0})`,":focus":{outline:"none"}}),y=(0,o.iv)({overflow:"auto"}),I=(0,o.iv)({"iframe:not([data-ds--level] iframe)":{pointerEvents:"none"}}),w=(0,n.forwardRef)(((e,t)=>{const{shouldRenderToParent:a,children:n}=e,s=(0,h.Z)(e,v);return(0,o.tZ)("div",(0,p.Z)((0,p.Z)({css:[R,!a&&y]},s),{},{ref:t}),n)}));function P({isOpen:e,id:t,offset:a,testId:s,content:r,fallbackPlacements:l,onClose:i,boundary:c,rootBoundary:u,shouldFlip:d,placement:p="auto",popupComponent:h=w,autoFocus:f=!0,triggerRef:E,shouldUseCaptureOnOutsideClick:O,shouldRenderToParent:v}){const[R,y]=(0,n.useState)(null),[P,A]=(0,n.useState)(null);(({initialFocusRef:e,popupRef:t})=>{(0,n.useEffect)((()=>{if(!t)return _.Z;const a={clickOutsideDeactivates:!0,escapeDeactivates:!0,initialFocus:e||t,fallbackFocus:t,returnFocusOnDeactivate:!0},n=b()(t,a);let o=null;return o=requestAnimationFrame((()=>{o=null,n.activate()})),()=>{null!=o&&(cancelAnimationFrame(o),o=null),n.deactivate()}}),[t,e])})({initialFocusRef:P,popupRef:R}),(({isOpen:e,onClose:t,popupRef:a,triggerRef:o,shouldUseCaptureOnOutsideClick:s})=>{const{isLayerDisabled:r}=(0,m.J)();(0,n.useEffect)((()=>{if(!e||!a)return _.Z;const n=e=>{t&&t(e)};return(0,S.Ev)(window,[{type:"click",listener:e=>{const{target:t}=e;if(!document.body.contains(t))return;const s=a&&a.contains(t),r=o&&o.contains(t);s||r||n(e)},options:{capture:s}},{type:"keydown",listener:e=>{if(r())return;const{key:t}=e;"Escape"!==t&&"Esc"!==t||n(e)}}])}),[e,t,a,o,s,r])})({isOpen:e,onClose:i,popupRef:R,triggerRef:E,shouldUseCaptureOnOutsideClick:O});const{currentLevel:U}=(0,m.J)(),W=(0,n.useMemo)((()=>[{name:"flip",enabled:d,options:{rootBoundary:u,boundary:c,fallbackPlacements:l}}]),[d,u,c,l]);return(0,o.tZ)(T.r,{placement:p,offset:a,modifiers:W},(({ref:a,style:n,placement:l,update:c})=>(0,o.tZ)(h,{id:t,"data-ds--level":U,"data-placement":l,"data-testid":s,ref:e=>{e&&("function"==typeof a?a(e):a.current=e,y(e))},style:n,tabIndex:f?0:void 0,shouldRenderToParent:v},(0,g.e)("platform.design-system-team.iframe_gojiv")&&(0,o.tZ)(o.xB,{styles:I}),(0,o.tZ)(C,{update:c},r({update:c,isOpen:e,onClose:i,setInitialFocusRef:A})))))}P.displayName="PopperWrapper";const A=P,U=d.ug.layer(),W=(0,n.memo)((({isOpen:e,id:t,offset:a,testId:s,trigger:d,content:p,onClose:h,boundary:m,rootBoundary:g="viewport",shouldFlip:T=!0,placement:f="auto",fallbackPlacements:E,popupComponent:C,autoFocus:S=!0,zIndex:_=U,shouldUseCaptureOnOutsideClick:O=!1,shouldRenderToParent:b=!1})=>{const[v,R]=(0,n.useState)(null),[y]=(0,n.useState)((()=>function(e,t){void 0===t&&(t=r);var a=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(a&&a.lastThis===this&&t(n,a.lastArgs))return a.lastResult;var s=e.apply(this,n);return a={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){a=null},n}(((e,t,a)=>n=>{n&&a&&("function"==typeof e?e(n):e&&(e.current=n),t(n))})))),I=(0,o.tZ)(l.ZW,{isDisabled:!1},(0,o.tZ)(A,{content:p,isOpen:e,placement:f,fallbackPlacements:E,boundary:m,rootBoundary:g,shouldFlip:T,offset:a,popupComponent:C,id:t,testId:s,onClose:h,autoFocus:S,shouldUseCaptureOnOutsideClick:O,shouldRenderToParent:b,triggerRef:v}));return(0,o.tZ)(i.dK,null,(0,o.tZ)(c.s,null,(({ref:a})=>d({ref:y(a,R,e),"aria-controls":t,"aria-expanded":e,"aria-haspopup":!0}))),e&&(b?I:(0,o.tZ)(u.Z,{zIndex:_},I)))}))}}]);
//# sourceMappingURL=29837.hoLxaZUfou.js.map