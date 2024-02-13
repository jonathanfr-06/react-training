"use strict";(self._cf=self._cf||[]).push([[64213],{529321:(t,e,n)=>{n.d(e,{f:()=>a});var i=n(615919),s=n(199009),r=n(822464),o=n(482997);class a extends r.W2{constructor(...t){super(...t),(0,s.Z)(this,"state",{floatingBanners:[]}),(0,s.Z)(this,"showFloating",((t,e)=>{const n=(0,o.f)(t,this.state.floatingBanners);-1===n?this.setState((n=>{const s=[...n.floatingBanners];return s.push({name:t,height:e}),(0,i.Z)((0,i.Z)({},n),{},{floatingBanners:s})})):this.state.floatingBanners[n].height!==e&&this.setState((t=>{const s=[...t.floatingBanners];return s[n].height=e,(0,i.Z)((0,i.Z)({},t),{},{floatingBanners:s})}))})),(0,s.Z)(this,"hideFloating",(t=>{const e=(0,o.f)(t,this.state.floatingBanners);e>-1&&this.setState((t=>{const n=[...t.floatingBanners];return n.splice(e,1),(0,i.Z)((0,i.Z)({},t),{},{floatingBanners:n})}))})),(0,s.Z)(this,"getFloatingHeightBefore",(t=>{const e=(0,o.f)(t,this.state.floatingBanners);return-1===e?0:this.state.floatingBanners.slice(0,e).reduce(((t,e)=>t+e.height),0)})),(0,s.Z)(this,"getFloatingHeight",(()=>this.state.floatingBanners.reduce(((t,e)=>t+e.height),0)))}}},384025:(t,e,n)=>{n.r(e),n.d(e,{NotifyingStickyWrapper:()=>b,StickyBanner:()=>T});var i=n(615919),s=n(199009),r=n(840506),o=n(822464),a=n(430564),c=n(302573),l=n(482997),h=n(529321),d=n(946972),u=n(394367),f=n.n(u),p=n(16728),g=n(752640),m=n(692898);const S=({onBeforeExplicitScroll:t})=>(function(t){const{onBeforeExplicitScroll:e}=t;(0,r.useEffect)((()=>{const t=(0,m.rN)(e);return()=>t()}),[e])}({onBeforeExplicitScroll:t}),null);S.displayName="DocumentScrollListener";var k=n(134112);const y=(0,d.Z)("div",{target:"e1u05xh10"})("@keyframes stickyDisappear{0%{transform:",(t=>`translate3d(0px, ${t.offsetHeight}px, 0px)`),";}100%{transform:translate3d(0,-100%,0);}}@keyframes stickyAppear{0%{transform:translate3d(0px,-100px,0px);}100%{transform:translate3d(0px,0px,0px);}}animation-name:",(t=>"top"===t.stuckState?"stickyAppear":"hidden"===t.stuckState?"stickyDisappear":"none"),";animation-duration:0.25s;animation-timing-function:ease;animation-delay:0s;animation-iteration-count:1;animation-direction:normal;animation-fill-mode:forwards;animation-play-state:running;border-bottom:",(t=>"top"!==t.stuckState||t.isSideNavRefreshEnabled?"none":`1px solid var(--ds-border, ${p.gt})`),";width:",(t=>t.stuckState&&t.width?`${t.width}px`:"inherit"),";z-index:12;background-color:var(--ds-surface, #fff);margin-left:-10px;padding-left:10px;padding-bottom:10px;"),w=(0,d.Z)("div",{target:"e1u05xh11"})("position:",(t=>t.stuckState?"sticky":"initial"),";top:",(t=>"hidden"===t.stuckState?"-16px":`${t.offsetHeight}px`),";.sticky-header{background-color:var(--ds-surface, #fff);}z-index:10;");class v extends r.PureComponent{constructor(...t){super(...t),(0,s.Z)(this,"state",{stuckState:null,width:0}),(0,s.Z)(this,"containerRef",r.createRef()),(0,s.Z)(this,"isMounted",!1),(0,s.Z)(this,"lastDownwardTop",0),(0,s.Z)(this,"lastTop",0),(0,s.Z)(this,"repaintTimeout",null),(0,s.Z)(this,"notifyTableTimeout",null),(0,s.Z)(this,"height",0),(0,s.Z)(this,"preventNextScrollFromTriggeringStickyHeader",!1),(0,s.Z)(this,"ignoreNextScroll",(()=>{this.preventNextScrollFromTriggeringStickyHeader=!0,"top"===this.state.stuckState&&this.setState({stuckState:"hidden"},this.handleStickyStateChange)})),(0,s.Z)(this,"stick",f()((t=>{var e;if(!this.isMounted)return;const n=null===(e=this.containerRef)||void 0===e?void 0:e.current.parentNode;if(!(null==n?void 0:n.querySelector(`#${k.rz}`)))return void this.setState({stuckState:null},this.handleStickyStateChange);const i=t&&"scroll"===t.type,s=n.getBoundingClientRect().top,r=this.lastTop>=s;i&&(this.lastTop=s,r&&(this.lastDownwardTop=s));const{stuckState:o}=this.state;let a=o;s<0?(this.props.closeOpenDialogAndMenu(),i&&r&&"top"===o?a="hidden":i&&!r&&Math.abs(s-this.lastDownwardTop)>=50&&(this.preventNextScrollFromTriggeringStickyHeader?this.preventNextScrollFromTriggeringStickyHeader=!1:a="top")):a=null,a!=o&&this.setState({stuckState:a},this.handleStickyStateChange)}),50)),(0,s.Z)(this,"handleStickyStateChange",(()=>{const{stickyStateChangeHandler:t}=this.props,{stuckState:e}=this.state;"top"===e?(this.sendHeaderIsStickyAnalyticsEvent(),window.clearTimeout(this.notifyTableTimeout),this.notifyTableTimeout=window.setTimeout((()=>{const{stuckState:e}=this.state,n=this.containerRef&&this.containerRef.current.querySelector("[data-test-id='header-animated-box']"),i=n&&n.getBoundingClientRect()||{},s="top"===e&&i.height||0;t({stuckState:e,headerHeight:s})}),250)):t({stuckState:e,headerHeight:0})})),(0,s.Z)(this,"setWidth",f()((t=>{this.isMounted&&this.setState({width:t})}),100))}componentDidMount(){this.isMounted=!0,this.getHeaderComponent()&&window.addEventListener&&(window.addEventListener("scroll",this.stick),window.addEventListener("resize",this.stick),this.stick())}componentWillUnmount(){this.isMounted=!1,window.removeEventListener&&(window.removeEventListener("scroll",this.stick),window.removeEventListener("resize",this.stick),window.clearTimeout(this.repaintTimeout),window.clearTimeout(this.notifyTableTimeout))}getHeaderComponent(){const{children:t}=this.props;return t&&r.Children.only(t)?t:null}cloneHeader(){const t=this.getHeaderComponent();if(!t)return null;const{stuckState:e}=this.state;if(!e)return t;const n={className:`${t.props.className||""} sticky-header stuck-state-${e}`,isSticky:!0};return(0,r.cloneElement)(t,n)}sendHeaderIsStickyAnalyticsEvent(){const{createAnalyticsEvent:t}=this.props;t({type:"sendTrackEvent",data:{source:"viewPageScreen",action:"stuck",actionSubject:"contentHeader",attributes:{source:"v2"}}}).fire()}render(){const{stuckState:t,width:e}=this.state;return r.createElement(w,{offsetHeight:this.props.offsetHeight,ref:this.containerRef,stuckState:t,"data-testid":"with-sticky-header"},r.createElement(S,{onBeforeExplicitScroll:this.ignoreNextScroll}),r.createElement(y,{offsetHeight:this.props.offsetHeight,stuckState:t,width:e,"data-test-id":"header-animated-box",isSideNavRefreshEnabled:this.props.isSideNavRefreshEnabled},this.cloneHeader()),r.createElement(g.K,{setWidth:this.setWidth,offscreen:!0}))}}v.displayName="StickyWrapper",(0,s.Z)(v,"defaultProps",{stickyStateChangeHandler:()=>{},closeOpenDialogAndMenu:()=>{},offsetHeight:0});const E="StickyBanner";class b extends r.PureComponent{constructor(...t){super(...t),(0,s.Z)(this,"onStateChange",(t=>{const{stickyStateChangeHandler:e,floatingBanners:n}=this.props;n.showFloating(E,t.headerHeight),e&&e(t)}))}componentWillUnmount(){const{floatingBanners:t}=this.props;t.hideFloating(E)}render(){const{children:t}=this.props;return r.createElement(v,(0,i.Z)((0,i.Z)({"data-testid":"sticky-wrapper"},this.props),{},{offsetHeight:this.props.bannerHeight,stickyStateChangeHandler:this.onStateChange,isSideNavRefreshEnabled:this.props.isSideNavRefreshEnabled}),t)}}b.displayName="NotifyingStickyWrapper";const x=t=>{const{includeTopNav:e}=(0,r.useContext)(c.D);return r.createElement(o.xs,{to:[l.S,h.f]},((n,s)=>r.createElement(b,(0,i.Z)((0,i.Z)({},t),{},{bannerHeight:n.getTotalHeight(e)-s.getFloatingHeightBefore(E),bannerState:n,floatingBanners:s}))))};x.displayName="WithStateContainers";const T=(0,a.Z)()(x)},134112:(t,e,n)=>{n.d(e,{dE:()=>s,rz:()=>i});const i="content-header-container",s={FREE:"FREE",PREMIUM:"PREMIUM",STANDARD:"STANDARD"}},692898:(t,e,n)=>{n.d(e,{kI:()=>c,nK:()=>a,rN:()=>r});const i=(0,n(614889).j)("scroll-to-element"),s=new Set;function r(t){return s.add(t),()=>s.delete(t)}function o(){s.forEach((t=>{try{t()}catch(e){Promise.all([n.e(60007).then(n.bind(n,639655)),Promise.all([n.e(61769),n.e(61212)]).then(n.bind(n,885498))]).then((([{getMonitoringClient:t},{Attribution:n}])=>{t().submitError(e,{attribution:n.CONTENT_EXPERIENCE})})).catch((()=>{}))}}))}function a(t=!1){o(),t&&"scrollBehavior"in document.documentElement.style?window.scrollTo({top:0,left:0,behavior:"smooth"}):window.scrollTo(0,0)}function c(t,e,n,s){let r=0,a=t.offsetParent;for(;a instanceof HTMLElement;)r+=a.offsetTop,a=a.offsetParent;const c=n||s?60:0;let l=t.offsetTop+(e||0)+r-c;(null==t?void 0:t.closest(".pm-table-container td"))&&e&&(l+=1.25*e),o();try{window.scroll({top:l,behavior:"auto"})}catch(h){i.error`window.scroll() is not supported`}}},752640:(t,e,n)=>{n.d(e,{K:()=>r});var i=n(840506);const s=i.memo((({setWidth:t,offscreen:e})=>{const[n,s,r]=function(t={}){const e=i.useRef(),n=i.useRef(),[s,r]=i.useState({inView:!1,entry:void 0,target:void 0}),{threshold:o,root:a,rootMargin:c}=t,l=i.useCallback((t=>{n.current=new IntersectionObserver((e=>{if(e&&e.length){const n=e[0],{isIntersecting:i,intersectionRatio:s}=n;if(s>=0){let e=s>=(o||0);void 0!==i&&(e=e&&i),r({inView:e,entry:n,target:t})}}}),{threshold:o,root:a,rootMargin:c}),e.current&&n.current.unobserve(e.current),t&&n.current.observe(t),e.current=t}),[o,a,c]);return i.useEffect((()=>()=>{n.current&&e.current&&n.current.unobserve(e.current)}),[]),[l,s.inView,s.target,s.entry]}({threshold:0}),o=i.useRef((()=>"undefined"==typeof window?null:new ResizeObserver((e=>{if(!Array.isArray(e)||!e.length)return;const{width:n}=e[0].contentRect;t(Math.round(n))}))));return i.useEffect((()=>{const{current:t}=o,n=t();if(null!==n)return r&&(s||e?n.observe(r):n.unobserve(r)),()=>{n.disconnect()}}),[r,s,e]),i.createElement("div",{style:{display:"block",width:"100%",position:"absolute"},ref:n})})),r=i.memo((t=>i.createElement(s,{setWidth:t.setWidth,offscreen:t.offscreen})))}}]);
//# sourceMappingURL=64213.l1uX8KV3c-.js.map