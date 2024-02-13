"use strict";(self._cf=self._cf||[]).push([[38593,98793],{140263:(e,n,t)=>{t.d(n,{U:()=>s});var r=t(840506),a=t(132464);class s extends r.Component{constructor(e){super(e),this.markExperienceStart()}markExperienceStart(){const{id:e,name:n,timeout:t,attributes:r,collect:s,onSuccess:o}=this.props;(0,a.OV)().start({attributes:r,name:n,timeout:t,id:e,collect:s,onSuccess:o})}render(){return null}}s.displayName="ExperienceStart"},195972:(e,n,t)=>{t.r(n),t.d(n,{StorageEnforcementBanner:()=>W});var r=t(840506),a=t(822464),s=t(486889),o=t(482997),i=t(722755),c=t(627521),l=t(234461),d=t(9019),u=t(649233),m=t(190206),g=t(400318),f=t(140263),E=t(415138),b=t(172543),p=t(346084);const M="StorageEnforcementBanner",S=7*p.ww;var h=t(107663),R=t(637418);const v=h.F.PERSISTED_STORAGE_ENFORCEMENT_BANNER,D=()=>"true"===String(null===R.LT||void 0===R.LT?void 0:R.LT.getItem(v));function C(e=null){const{currentUsage:n,loading:t,error:a,gracePeriodEndDate:s}=(0,E.T)(),o=n>=b.p6.FREE&&s;let i=n>=b.p6.FREE*b.jP&&n<b.p6.FREE;const{isDismissed:c,onDismiss:l}=(({currentUsage:e,skip:n})=>{const[t,a]=(0,r.useState)(D);(0,r.useEffect)((()=>{t&&(e<b.p6.FREE*b.jP||e>=b.p6.FREE)&&(R.LT.setItem(v,"false"),a(!1))}),[e,t]);const s=(0,r.useCallback)((()=>{R.LT.setItem(v,"true"),a(!0)}),[]);return{isDismissed:!n&&t,onDismiss:s}})({currentUsage:n,skip:!i});i&&(i=!c);const d=Boolean(o||i);return d?null==e||e.show(M,S):null==e||e.hide(M),{shouldRender:d,shouldRenderHard:o,currentUsage:n,onDismiss:l,error:a,loading:t}}var k=t(93972),F=t(747472),y=t(423128),A=t(827888),U=t(856389),T=t(155049),L=t(615919),w=t(872342),B=t(555687),N=t(829323),P=t(65301),I=t(89436),G=t(497242),_=t(451843);const x=(0,k.defineMessages)({learnMoreLink:{id:"storage-enforcement.banner.learn-more",defaultMessage:"Learn more"}}),H=["triggerRef"],j=(0,k.defineMessages)({dismiss:{id:"storage-enforcement.banner.button.dismiss",defaultMessage:"Dismiss"},moreIcon:{id:"storage-enforcement.icons.more",defaultMessage:"More icon"}}),Z=({handleDismiss:e=(()=>{}),showDismiss:n,onLearnMoreClick:t})=>{const{formatMessage:a}=(0,F.Z)();return r.createElement(P.ZP,{trigger:e=>{let{triggerRef:n}=e,t=(0,w.Z)(e,H);return r.createElement(B.Z,(0,L.Z)((0,L.Z)({},t),{},{appearance:"subtle",iconBefore:r.createElement(N.default,{label:a(j.moreIcon)}),ref:n}))}},r.createElement(I.Z,null,r.createElement(G.Z,{href:_.NG,target:"_blank",onClick:t},a(x.learnMoreLink)),n&&r.createElement(G.Z,{onClick:e},a(j.dismiss))))};Z.displayName="SiteAdminDropdownMenu";var O=t(506307);const Y=(0,t(940155).ui)({__loadable_id__:"zV5Ch",name:"PlanConsentDeepLink",loader:async()=>(await t.e(79195).then(t.bind(t,164644))).PlanConsentDeepLink});function z({children:e}){const{fireLearnMoreEvent:n}=(0,O.F)();return r.createElement(A.B,{onClick:n,href:_.NG,target:"_blank"},e)}z.displayName="LearnMoreLink";const q=(0,k.defineMessages)({adminHardMessage:{id:"storage-enforcement.banner.admin.hard.message",defaultMessage:"Action required. You won‘t be able to create in Confluence soon, unless you upgrade for more storage or delete {number} GB of files by {date}. <a>Upgrade to Standard</a>"},adminHardMessageV2:{id:"storage-enforcement.banner.admin.hard.message.v2",defaultMessage:"Action required. You won‘t be able to create in Confluence soon, unless you upgrade for more storage or delete <b>{number} GB</b> of files by {date}. <a>Upgrade to Standard</a>"},adminHardEnforceMessage:{id:"storage-enforcement.banner.admin.hard.enforced.message",defaultMessage:"Action required. You can‘t edit or create new content in Confluence until you upgrade for more storage or delete <b>{number} GB</b> GB of files. <a>Upgrade to Standard</a>"},nthUserHardMessage:{id:"storage-enforcement.banner.nth-user.hard.message",defaultMessage:"Action required. You won‘t be able to create in Confluence soon unless you delete files by {date}. <a>Learn more</a>"},nthUserHardEnforceMessage:{id:"storage-enforcement.banner.nth-user.hard.enforced.message",defaultMessage:"Action required. You can‘t edit or create new content in Confluence until you delete files. <a>Learn more</a>"}}),V=()=>{const{formatMessage:e,formatDate:n}=(0,F.Z)(),{currentUsage:t,gracePeriodEndDate:a,isStorageEnforcementGracePeriodComplete:s}=(0,E.T)(),{isSiteAdmin:o}=(0,r.useContext)(y.wu),{fireLearnMoreEvent:i,fireScreenEvent:c}=(0,O.F)(!0),l=n(new Date(a),{year:"numeric",month:"long",day:"2-digit"}),d=(0,b.ly)(t,U.m.FREE);(0,r.useEffect)((()=>{c()}),[c]);const u=s?q.adminHardEnforceMessage:q.adminHardMessage,m=s?q.nthUserHardEnforceMessage:q.nthUserHardMessage,f=o?e(u,{date:l,number:d,a:e=>r.createElement(Y,null,e),b:(...e)=>r.createElement("b",null,e)}):e(m,{date:l,number:d,a:e=>r.createElement(z,null,e)});return r.createElement(r.Fragment,null,r.createElement(T.F,{name:g.RzR}),r.createElement(A.o,{bannerHeight:S,description:f,rightSideComponent:o&&r.createElement(Z,{onLearnMoreClick:i,showDismiss:!1})}))};var X=t(558877);const Q=(0,k.defineMessages)({closeIcon:{id:"storage-enforcement.icons.close",defaultMessage:"Close icon"},softMessageOver:{id:"storage-enforcement.banner.soft.message.over",defaultMessage:"You‘ve exceeded the 2GB storage limit for your Free plan."},softMessageUnder:{id:"storage-enforcement.banner.soft.message.under",defaultMessage:"You‘ve used {number}% of the Free plan‘s 2 GB storage limit."},softMessageUnderV2:{id:"storage-enforcement.banner.soft.message.under.v2",defaultMessage:"You‘ve used <b>{number}%</b> of the Free plan‘s 2 GB storage limit."},upgradeForMoreStorage:{id:"storage-enforcement.banner.button.upgrade-for-more-storage",defaultMessage:"Upgrade for more storage"}}),J=({onDismiss:e})=>{const{formatMessage:n}=(0,F.Z)(),t=(0,r.useContext)(m.F),{currentUsage:a}=(0,E.T)(),{isSiteAdmin:s}=(0,r.useContext)(y.wu),{fireLearnMoreEvent:o,fireDismissEvent:i,fireScreenEvent:c}=(0,O.F)();(0,r.useEffect)((()=>{c()}),[c]);const l=()=>{t.start({name:g.TeR});try{i(),e(),t.succeed({name:g.TeR})}catch(n){t.stopOnError({name:g.TeR,error:n})}};return r.createElement(r.Fragment,null,r.createElement(T.F,{name:g.RzR}),r.createElement(A.o,{bannerHeight:S,description:n(Q.softMessageUnderV2,{number:(0,b.kP)(a,U.m.FREE),b:(...e)=>r.createElement("b",null,e)}),inlineDescriptionCTA:s?r.createElement(Y,null,n(Q.upgradeForMoreStorage)):r.createElement(z,null,n(x.learnMoreLink)),rightSideComponent:r.createElement(r.Fragment,null,s&&r.createElement(Z,{onLearnMoreClick:o,handleDismiss:l,showDismiss:!0}),!s&&r.createElement(B.Z,{appearance:"subtle",onClick:l,onMouseDown:e=>e.preventDefault(),iconBefore:r.createElement(X.default,{label:n(Q.closeIcon)})}))}))},K=(0,r.memo)((({bannerState:e})=>{const n=(0,r.useContext)(m.F),{shouldRender:t,shouldRenderHard:a,error:o,loading:l,onDismiss:d}=C(e),{createAnalyticsEvent:f}=(0,s._)();return o?(n.stopOnError({name:g.RzR,error:o,attributes:{shouldRender:t,shouldRenderHard:a,isSSR:!1}}),(0,i.T)(o)?((0,u.Xb)(o),null):(f({type:"sendOperationalEvent",data:{action:"errored",actionSubject:"storageEnforcementBanner",source:"onboarding",attributes:{message:o.message,stack:o.stack}}}).fire(),r.createElement(c.X,{error:o}))):t?a?r.createElement(V,null):r.createElement(J,{onDismiss:d}):(l||n.abort({name:g.RzR,reason:"under storage enforcement threshold"}),null)})),W=()=>r.createElement(l.S,{attribution:d.x.CC_ONBOARDING},r.createElement(f.U,{name:g.RzR}),r.createElement(a.xs,{to:[o.S]},(e=>r.createElement(K,{bannerState:e}))));W.displayName="StorageEnforcementBanner"},506307:(e,n,t)=>{t.d(n,{F:()=>u});var r=t(840506),a=t(486889),s=t(856389),o=t(423128),i=t(172543);let c=function(e){return e[e.MIN=90]="MIN",e[e.MAX=100]="MAX",e}({});var l=t(451843),d=t(415138);const u=(e=!1)=>{const{createAnalyticsEvent:n}=(0,a._)(),{currentUsage:t}=(0,d.T)(),{isSiteAdmin:u}=(0,r.useContext)(o.wu),m=((e,n)=>(0,i.MT)(e,n)?c.MAX:c.MIN)(t,s.m.FREE),g=(0,r.useCallback)((()=>{n({type:"sendScreenEvent",data:{name:"storageEnforcementBanner",attributes:{isSiteAdmin:u,threshold:m,isReleaseTwoEligible:e}}}).fire()}),[n,e,u,m]),f=(0,r.useCallback)((()=>{n({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"storageEnforcementBannerLearnMore",source:l.jf,attributes:{isSiteAdmin:u,threshold:m,isReleaseTwoEligible:e}}}).fire()}),[n,e,u,m]);return{fireUpgradeEvent:(0,r.useCallback)((()=>{n({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"storageEnforcementBannerUpgrade",source:l.jf,attributes:{isSiteAdmin:u,threshold:m,isReleaseTwoEligible:e}}}).fire()}),[n,e,u,m]),fireLearnMoreEvent:f,fireDismissEvent:(0,r.useCallback)((()=>{n({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"storageEnforcementBannerDismissed",source:l.jf,attributes:{isSiteAdmin:u,threshold:m,isReleaseTwoEligible:e}}}).fire()}),[n,e,u,m]),fireScreenEvent:g}}},415138:(e,n,t)=>{t.d(n,{T:()=>s});var r=t(167347);const a=t(779076).ZP`query GetCurrentStorageUsageQuery{storage{bytesUsed isStorageEnforcementGracePeriodComplete gracePeriodEndDate}}`,s=({skip:e}={})=>{var n,t,s;const{data:o,loading:i,error:c}=(0,r.aM)(a,{skip:e});return{currentUsage:null==o||null===(n=o.storage)||void 0===n?void 0:n.bytesUsed,isStorageEnforcementGracePeriodComplete:null==o||null===(t=o.storage)||void 0===t?void 0:t.isStorageEnforcementGracePeriodComplete,gracePeriodEndDate:null==o||null===(s=o.storage)||void 0===s?void 0:s.gracePeriodEndDate,loading:i,error:c}}},172543:(e,n,t)=>{t.d(n,{MT:()=>d,jP:()=>a,kP:()=>l,ly:()=>i,p6:()=>s,zf:()=>c});var r=t(856389);const a=.9;let s=function(e){return e[e.FREE=2e9]="FREE",e[e.STANDARD=25e10]="STANDARD",e}({});const o={[r.m.FREE]:s.FREE,[r.m.STANDARD]:s.STANDARD},i=(e,n)=>{const t=(e-o[n])/1e9;return(t<0?0:t).toFixed(1)},c=(e,n)=>{const t=o[n];return((e-t)/t*100).toFixed(1)},l=(e,n)=>{const t=o[n],r=Math.floor(e/t*100);return r>100?100:r},d=(e,n)=>e>o[n]}}]);
//# sourceMappingURL=38593.oZmAvqICNL.js.map