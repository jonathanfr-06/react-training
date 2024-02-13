"use strict";(self._cf=self._cf||[]).push([[61198],{261198:(e,t,n)=>{n.d(t,{J:()=>ie});var o=n(615919),a=n(840506),l=n(822464),r=n(213064),i=n(302573),s=n(482997),c=n(529321),d=n(49313),u=n(872342),f=n(747472),g=n(656099),h=n(452044),m=n(628963),p=n(272178),v=n(568846),I=n(230475),y=n(627521),k=n(582463),S=n(147771),b=n(614889),E=n(894280),w=n(495302),T=n(725790),C=n(310773),P=n(228151),x=n(570489),$=n(734233),F=n(756106),Z=n(487696),M=n(37453),_=n(636306),R=n(834306),U=n(264339),N=n(635441),A=n(997331),K=n(450874),D=n(977281);n(702061);const H="mediaProvider unavailable, must use initialAuth",L=({contentId:e,isExternalShare:t,mediaToken:n})=>async o=>{if(e){const{viewMediaClientConfig:a}=await(0,R.Pp)({contentId:e,isExternalShare:t,mediaToken:n});return a.authProvider(o)}throw new Error(H)},B=e=>{if(window.__SSR_RENDERED__)return(e=>({mode:"client",config:{authProvider:L(e),initialAuth:window.__MEDIA_CONFIG__}}))(e)};var j=n(794864),O=n(778248),q=n(265603),W=n(688763),Q=n(133494),V=n(478710),G=n(272471),X=n(760725),J=n(493321),z=n(634065),Y=n(940155);const ee=(0,Y.tM)({__loadable_id__:"2cKTC",name:"LinkCardsLoader",loader:async()=>(await Promise.all([n.e(12705),n.e(11216),n.e(35824),n.e(33963),n.e(29583),n.e(87828),n.e(5946),n.e(99031),n.e(18761),n.e(13770),n.e(24182)]).then(n.bind(n,516119))).LinkCards});(0,Y.ZR)({__loadable_id__:"3G7T9",name:"LazyLinkCardsLoader",loader:async()=>(await Promise.all([n.e(12705),n.e(11216),n.e(35824),n.e(33963),n.e(29583),n.e(87828),n.e(5946),n.e(99031),n.e(18761),n.e(13770),n.e(24182)]).then(n.bind(n,516119))).LinkCards});var te=n(849397),ne=n(784569),oe=n(720515);var ae=n(70082);const le=["document","dataProviders","extensionHandlers","getExtensionHandlers","eventHandlers","appearance","adfStage","portal","onComplete","onRendered","renderWhenReady","allowStickyHeaders","allowPlaceholderText","isTruncatedContent","maxHeight","fadeOutHeight","flags","offsetTop","mediaToken","onError","isPageSubTypeEmbed"],re=((0,b.j)("ADFRenderer"),(0,a.memo)((e=>{const{document:t,dataProviders:n,extensionHandlers:l={},getExtensionHandlers:r=(()=>({})),eventHandlers:i,appearance:s,adfStage:c="stage0",portal:d,onComplete:b,onRendered:H,renderWhenReady:L,allowStickyHeaders:Y=!0,allowPlaceholderText:re=!1,isTruncatedContent:ie,maxHeight:se,fadeOutHeight:ce,flags:de,offsetTop:ue,mediaToken:fe,onError:ge,isPageSubTypeEmbed:he}=e,me=(0,u.Z)(e,le),pe=(0,f.Z)(),ve=window.__SSR_SMARTLINKS__,Ie=(0,X.xQ)(),ye=(0,X.r6)(ve,Ie),ke=Ie&&!(0,I.O)(),{cloudId:Se,userId:be,featureFlagClient:Ee,featureFlags:we,isLicensed:Te,isLoggedIn:Ce}=(0,k.D)(),{spaceKey:Pe,contentId:xe}=(0,a.useContext)(Z.z1),{openCoreInvites:$e,userRole:Fe}=(0,a.useContext)(O.l),[Ze,Me]=(0,a.useState)(!1),_e=e.contentId||xe,{canViewUserProfile:Re,error:Ue}=(0,W.t)(),Ne=(0,S.Z)("confluence.frontend.task.batching.interval",3e3),Ae=Ee.getBooleanValue("confluence.frontend.fabric.renderer.code-block-wrapping",{default:!1}),Ke=(0,a.useRef)(new K.u(Ne)),De=(0,E.M)(),He=(0,a.useCallback)((e=>{((e,t)=>{const n={contentId:e,tasks:t.map((e=>{const{objectKey:t,state:n}=e,o="DONE"===n?"CHECKED":"UNCHECKED";return{taskId:t.localId,status:o}})),trigger:"VIEW_PAGE"};return(0,ne.WQ)().mutate({mutation:oe.u,variables:n}).catch((e=>{(0,te.getAnalyticsWebClient)().then((t=>{t.sendOperationalEvent({source:"page",action:"batchTaskUpdate",actionSubject:"checkbox",attributes:{error:e.message||String(e),stack:e.stack}})}))}))})(_e,e).then((()=>Me(!0)))}),[_e,Me]),Le=(0,a.useCallback)(((e,t)=>{Ke.current.add({objectKey:e,state:t})}),[Ke]);(0,a.useEffect)((()=>(t&&(0,ae.a)(),H&&H(),Ke.current.onFlush(He),()=>{t&&(0,ae.X)()})),[_e,Ke,He]);(0,a.useEffect)((()=>{Me(!1)}),[_e]);const Be=(0,a.useMemo)((()=>{if(Se)return(0,_.nM)({cloudId:Se,userId:be,isLicensed:Te,isLoggedIn:Ce})}),[Se,be,Te,Ce]),je=(0,a.useMemo)((()=>{if(Be)return(0,j.bJ)(Be.cloudId,Be.userId,Be.disableUpload,Be.emojiSSRConfig)}),[Be]),{isExternalShareRequest:Oe}=(0,a.useContext)(q.k),{push:qe}=(0,a.useContext)($.M);let We=l;r&&(We=Object.assign(r(),l)),We=(0,o.Z)((0,o.Z)((0,o.Z)({},We),((e,t)=>{const n={};return n[z.T7]=e?e=>a.createElement(ee,{extensionNode:e,contentId:t}):()=>a.createElement(a.Fragment,null),n})(we[z.j6],_e)),{},{"com.atlassian.confluence.project-linker":()=>a.createElement(a.Fragment,null)});const Qe="mobile"!==s&&Y,{shimAdfUrls:Ve}=(0,F.f)(),Ge=(0,G.L)(),Xe=(0,J.J)("renderer"),Je=(0,a.useCallback)((e=>{b&&b(e)}),[b]);if(!t)return null;const ze=(({hasViewUserProfilePermission:e,handleProfileCardActions:t,handleActionToggle:n,handleInviteItemClick:o,getDataProviders:a,providerFactory:l,isExternalShare:r,contentId:i,spaceKey:s,push:c,cloudId:d,userId:u,userRole:f,flags:g,featureFlags:h,intl:I,mediaToken:y,emojiResourceParams:k})=>{const S={};if(a&&Object.assign(S,a()),(i||y)&&(S.mediaProvider=(0,R.Pp)({contentId:i,isExternalShare:r,mediaToken:y}),S.taskDecisionProvider=Promise.resolve(new U.Y(I,g,i,n))),d&&u&&(S.mentionProvider=(0,N.Z)(d,u,void 0,void 0,o,f).then((e=>e.mentionResource)).catch((e=>Promise.reject()))),k&&d&&(S.emojiProvider=(0,j.T5)(p.ZP,k)),d&&e&&(S.profilecardProvider=(0,A.t)(d,t(c,u),h)),i&&s&&(S.contextIdentifierProvider=Promise.resolve({containerId:s,objectId:i,product:"confluence"})),S.cardProvider=Promise.resolve(new m.V),Object.keys(S).length){l=l||v.Z.create({});for(const e of Object.keys(S))l.setProvider(e,S[e])}return l})({contentId:_e,spaceKey:Pe,cloudId:Se,userId:be,flags:de,featureFlags:we,push:qe,intl:pe,providerFactory:n,isExternalShare:Oe,handleActionToggle:Le,handleProfileCardActions:(e,t)=>n=>{var o;const l=(0,w.p)(n,null,x.b),r=!(!n||null==De||null===(o=De.followedUsers)||void 0===o||!o.includes(n));return[{label:pe.formatMessage({id:"view.profile"}),callback:()=>{e((0,w.p)(n,null,x.b))},link:l},{label:a.createElement(T.w,{followed:r}),id:"feed-follow-user",callback:De.getToggleFollowUser(n,r,"adf-renderer"),shouldRender:e=>De.renderFeedFollow&&Boolean(n)&&n!==t&&"active"===(null==e?void 0:e.status)}]},hasViewUserProfilePermission:Re,handleInviteItemClick:$e,userRole:Fe,mediaToken:fe,emojiResourceParams:Be}),Ye=Ve(t);return a.createElement(h.G,(0,o.Z)((0,o.Z)((0,o.Z)({},(0,M.z)()),ye),{},{featureFlags:Xe}),("full-page"===s||"full-width"===s)&&a.createElement(Q.D,{"data-testid":"pageLoadMarkTestId",name:"onBeforeAkRenderer"}),a.createElement(V.A,{featureFlags:we,objectId:_e},a.createElement(g.ZP,(0,o.Z)((0,o.Z)({enableSsrInlineScripts:Boolean(!1),adfStage:c,document:Ye,appearance:s,stickyHeaders:Qe&&{offsetTop:ue},extensionHandlers:We,eventHandlers:i,featureFlags:Ge,dataProviders:ze,portal:d,onComplete:Je,allowColumnSorting:!0,allowHeadingAnchorLinks:{allowNestedHeaderLinks:!0,activeHeadingId:e.queryHash},allowAltTextOnImages:!0,media:{allowLinking:!0,allowCaptions:!0,featureFlags:(0,D.N)(we),ssr:B({contentId:_e,isExternalShare:Oe,mediaToken:fe})},emojiResourceConfig:je,allowCopyToClipboard:!0,allowWrapCodeBlock:Ae},me),{},{useSpecBasedValidator:!0,truncated:ie,maxHeight:se,fadeOutHeight:ce,analyticsEventSeverityTracking:(e=>{if(!e)return;const t=e["confluence.frontend.fabric.renderer.ttr-severity-tracking"];if("string"==typeof t)try{return JSON.parse(t)}catch(n){0}})(we),unsupportedContentLevelsTracking:(e=>{if(!e)return;const t=e["confluence.frontend.fabric.renderer.unsupported-content-levels-tracking"];if("string"==typeof t)try{return JSON.parse(t)}catch(n){0}})(we),allowPlaceholderText:re,allowCustomPanels:!0,smartLinks:(0,o.Z)({ssr:ke,showAuthTooltip:!0,showServerActions:!0},he&&{frameStyle:"hide"}),onError:e=>{ge&&ge(e)}})),L&&L()),a.createElement(P.N,{contentId:_e,shouldRefetch:Ze}),Ue&&a.createElement(y.X,{error:Ue}),a.createElement(C.K,{feedConfigError:De.feedConfigError,mutationError:De.mutationError,showErrorFlag:!0}))}))),ie=(0,a.memo)((e=>{const{includeTopNav:t}=(0,a.useContext)(i.D),{atlGeneralWebPanelHeight:n}=(0,d.P)();return a.createElement(l.xs,{to:[r.Q,s.S,c.f]},((l,r,i)=>{const s=r.getTotalHeight(t)+i.getFloatingHeight()+(e.isContentHeaderFixedAtTop?55+n:0);return a.createElement(re,(0,o.Z)({flags:l,offsetTop:s},e))}))}));ie.displayName="ADFRenderer"},70082:(e,t,n)=>{n.d(t,{X:()=>s,a:()=>i});var o=n(453966);const a=new Map,l=e=>{if(!e.isUserCollection){return a.get(null==e?void 0:e.fileId)||(()=>{const t=fetch("/wiki/rest/internal/1.0/eventnotifier/notify",{method:"POST",body:JSON.stringify({attachmentViewed:{fileStoreId:e.fileId}}),headers:{"Content-Type":"application/json"}});var n,o;return n=e.fileId,o=t,a.set(n,o)&&setTimeout((()=>a.delete(n)),3e3),t})()}};let r=!1;const i=()=>{r||(o.h.on("media-viewed",l),r=!0)},s=()=>{o.h.off("media-viewed",l),r=!1}},529321:(e,t,n)=>{n.d(t,{f:()=>i});var o=n(615919),a=n(199009),l=n(822464),r=n(482997);class i extends l.W2{constructor(...e){super(...e),(0,a.Z)(this,"state",{floatingBanners:[]}),(0,a.Z)(this,"showFloating",((e,t)=>{const n=(0,r.f)(e,this.state.floatingBanners);-1===n?this.setState((n=>{const a=[...n.floatingBanners];return a.push({name:e,height:t}),(0,o.Z)((0,o.Z)({},n),{},{floatingBanners:a})})):this.state.floatingBanners[n].height!==t&&this.setState((e=>{const a=[...e.floatingBanners];return a[n].height=t,(0,o.Z)((0,o.Z)({},e),{},{floatingBanners:a})}))})),(0,a.Z)(this,"hideFloating",(e=>{const t=(0,r.f)(e,this.state.floatingBanners);t>-1&&this.setState((e=>{const n=[...e.floatingBanners];return n.splice(t,1),(0,o.Z)((0,o.Z)({},e),{},{floatingBanners:n})}))})),(0,a.Z)(this,"getFloatingHeightBefore",(e=>{const t=(0,r.f)(e,this.state.floatingBanners);return-1===t?0:this.state.floatingBanners.slice(0,t).reduce(((e,t)=>e+t.height),0)})),(0,a.Z)(this,"getFloatingHeight",(()=>this.state.floatingBanners.reduce(((e,t)=>e+t.height),0)))}}},228151:(e,t,n)=>{n.d(t,{N:()=>d});var o=n(840506),a=n(78300),l=n(386188),r=n(435248),i=n(784569),s=n(734233),c=n(487696);const d=({contentId:e,shouldRefetch:t,refetchImmediately:n,onRefetchComplete:d})=>{const{history:u}=(0,o.useContext)(s.M),{contentType:f}=(0,o.useContext)(c.z1),g=(0,r.u)();return(0,o.useEffect)((()=>{let o,r=a.P;if("blogpost"===f&&(r=l.W),t&&e){const t=async()=>{try{await(0,i.WQ)().query({query:r,context:{single:!0},fetchPolicy:"network-only",variables:{contentId:e,spaceKey:g}})}catch(t){}d&&d()};n?t():o=null==u?void 0:u.listen(t)}return()=>{o&&o()}}),[t]),null}},760725:(e,t,n)=>{n.d(t,{r6:()=>l,xQ:()=>a});var o=n(840506);const a=()=>Boolean(window.__SSR_RENDERED__),l=(e,t)=>(0,o.useMemo)((()=>e&&t?{storeOptions:{initialState:e}}:{}),[e,t])},634065:(e,t,n)=>{n.d(t,{T7:()=>o,dV:()=>r,i1:()=>l,j6:()=>a,un:()=>i});const o="com.atlassian.confluence.link-cards",a="confluence.frontend.custom-sites.cards-extension",l="confluence.frontend.custom-sites.cards-extension-visual-cards",r="confluence.frontend.custom-sites.cards-extension-ga-mvp-bug-fix",i="confluence.frontend.custom-sites.cards-extension-image-upload"},267182:(e,t,n)=>{n.d(t,{M:()=>o});const o=n(779076).ZP`fragment UserPermissionFragment on Query{user(current:true){id confluence{permissionType}}}`},565867:(e,t,n)=>{n.d(t,{S:()=>l});var o=n(779076),a=n(267182);const l=o.ZP`query GlobalOperationsUserPermissionTypeQuery{...UserPermissionFragment}${a.M}`},140576:(e,t,n)=>{n.d(t,{n:()=>o});let o=function(e){return e.ANONYMOUS="ANONYMOUS",e.APP="APP",e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e.JSD="JSD",e}({})},980452:(e,t,n)=>{n.d(t,{F:()=>o});const o=e=>{var t;return null==e||null===(t=e.user)||void 0===t||null===(t=t.confluence)||void 0===t?void 0:t.permissionType}},611246:(e,t,n)=>{n.d(t,{KN:()=>a,W4:()=>i,d1:()=>r,pA:()=>o,xu:()=>l});const o="confluence.frontend.enable.external.collab",a="confluence.frontend.enable.external.collab.single.space",l="confluence.frontend.external-collaboration.guest-access.request-to-upgrade.experiment",r="confluence.frontend.external-collaboration.guest-access.request-to-upgrade.no-space-access-page",i="https://support.atlassian.com/confluence-cloud/docs/what-can-guests-see-and-do-on-confluence/"},815037:(e,t,n)=>{n.d(t,{Q:()=>d});var o=n(167347),a=n(179640),l=n(565867),r=n(140576),i=n(611246),s=n(980452);let c;const d=(e=!1)=>{const t=(0,a.T)(i.pA),{data:n,loading:d,error:u}=(0,o.aM)(l.S,{errorPolicy:"all",skip:!t||void 0!==c||e,onCompleted(e){c=c||(0,s.F)(e)===r.n.EXTERNAL}});return{isExternalCollaborator:c||(0,s.F)(n)===r.n.EXTERNAL,loading:d,error:u}}},478710:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(840506),a=n(263043),l=n(328338),r=n(705179);const i=e=>{const{objectId:t,featureFlags:n={},children:i,source:s}=e,c=(0,o.useCallback)((e=>{const o=n["confluence.frontend.fabric.editor.analytics-instance-name-attribute"];e.update((e=>{let n=(0,r.m)(e,{objectId:t,rendererSource:s});return o&&(n=(0,r.m)(n,{instance:o})),n}))}),[t,n,s]);return o.createElement(a.Z,{onEvent:c,channel:l.XD.editor},o.createElement(a.Z,{onEvent:c,channel:l.XD.media},i))};i.displayName="RendererAnalyticsListener"},705179:(e,t,n)=>{n.d(t,{m:()=>a,r:()=>l});var o=n(615919);function a(e,t){return(0,o.Z)((0,o.Z)({},e),{},{attributes:(0,o.Z)((0,o.Z)({},e.attributes),t)})}const l=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Math.round(e+t):void 0},636306:(e,t,n)=>{n.d(t,{MP:()=>a,nM:()=>r,r8:()=>l});var o=n(615919);const a=(e,t)=>`/gateway/api/emoji/${e}/${t}/path`,l=e=>{const{isSSR:t,hasCloudId:n,isGuestUser:o}=e;return!(!t||!n||o)},r=e=>{var t,n,r;const i=!!window.__SSR_RENDERED__,s=!e.isLicensed||!e.isLoggedIn,c=null!==(t=null==e?void 0:e.cloudId)&&void 0!==t?t:"",d=null!==(n=null==e?void 0:e.userId)&&void 0!==n?n:void 0,u=null==e?void 0:e.disableUpload,f=null!==(r=null==e?void 0:e.emojiSSRConfig)&&void 0!==r?r:{},g=l({isSSR:i,hasCloudId:!!c,isGuestUser:s}),h=g?(0,o.Z)({optimisticImageApi:{getUrl:e=>a(c,(e=>{const{id:t,shortName:n}=e,o=new RegExp(/:([^:]+):/g);return t||(o.test(n)?n.replaceAll(":",""):n)})(e))}},f):void 0;return(0,o.Z)({cloudId:c,userId:d,disableUpload:u},g&&{emojiSSRConfig:h})}},834306:(e,t,n)=>{n.d(t,{Sy:()=>w,Xj:()=>Z,Pp:()=>F,j7:()=>T,hx:()=>$});var o=n(453966),a=n(880470),l=n(128108),r=n(653206),i=n.n(r),s=n(784569),c=n(649233),d=n(634554),u=n(779076);const f=u.ZP`query ExternalShareMediaDownloadTokenQuery($contentId:ID!){singleContent(id:$contentId){id body{atlas_doc_format{mediaToken{token}}}}mediaConfiguration{clientId fileStoreUrl}}`,g=u.ZP`mutation FileUploadMutation($size:Int!$contentType:String!$mimeType:String!$fileName:String!$pageId:String!$fileStoreId:String!$minorEdit:Boolean$renderEditorHTML:Boolean$collectionName:String!$uploadSource:String)@experimental{experimentalFileUpload(size:$size contentType:$contentType mimeType:$mimeType fileName:$fileName pageId:$pageId fileStoreId:$fileStoreId minorEdit:$minorEdit renderEditorHTML:$renderEditorHTML collectionName:$collectionName uploadSource:$uploadSource)}`,h=u.ZP`query MediaDownloadTokenQuery($contentId:ID$status:[String]$missingContentId:Boolean=false){content(id:$contentId status:$status)@skip(if:$missingContentId){nodes{id body{atlas_doc_format{mediaToken{token}}}}}mediaConfiguration{clientId fileStoreUrl}}`,m=u.ZP`query MediaUploadTokenQuery($contentId:ID!){contentMediaSession(contentId:$contentId){token{value}configuration{clientId fileStoreUrl}collection}}`;let p=!0;const v=e=>(0,s.WQ)().query({query:h,variables:{contentId:e,status:["current","draft","archived"],missingContentId:!e},context:{allowOnExternalPage:!0},fetchPolicy:p?"cache-first":"network-only"}).then((t=>{p=!1;try{I(e)(null==t?void 0:t.errors)}catch(n){}return t}),(t=>{try{I(e)(null==t?void 0:t.graphQLErrors,null==t?void 0:t.networkError)}catch(n){}throw t})),I=i()((e=>{let t;return(e,n)=>{if(n&&(e=(e||[]).concat(n)),e){const n={};for(const l of e){var o;const e=l.message||String(l)||(null===(o=l.originalError)||void 0===o?void 0:o.message)||String(l.originalError),{path:r}=l,i=Array.isArray(r)&&r.join(".")||e;if(i){const o=(0,d.e9)(l)||e;var a;if(o)n[i]=o,(null===(a=t)||void 0===a?void 0:a[i])===o&&(0,c.Xb)(l)}}t=n}else t=void 0}})),y=e=>(0,s.WQ)().query({query:f,variables:{contentId:e},context:{allowOnExternalPage:!0},fetchPolicy:"network-only"}),k=()=>{},S=e=>e.contentId&&e.contentType?t=>{const{id:n,name:o,size:a,mimeType:l}=t,{contentId:r,contentType:i}=e;(e=>{(0,s.WQ)().mutate({mutation:g,variables:e})})({size:a,contentType:i,mimeType:l,fileName:o,pageId:r,fileStoreId:n,minorEdit:!0,renderEditorHTML:!1,collectionName:`contentId-${r}`,uploadSource:"fabric-editor"})}:k,b={clientId:"",fileStoreUrl:""},E=(0,a.c)((async({contentId:e,isExternalShare:t})=>{var n,o;const a=await(t?y:v)(e),l=null==a?void 0:a.data,r=t?null==l?void 0:l.singleContent:null==l||null===(n=l.content)||void 0===n||null===(n=n.nodes)||void 0===n?void 0:n[0];return{token:(null==r||null===(o=r.body)||void 0===o||null===(o=o.atlas_doc_format)||void 0===o||null===(o=o.mediaToken)||void 0===o?void 0:o.token)||"",config:(null==l?void 0:l.mediaConfiguration)||b}}),(e=>e.token)),w=e=>async()=>{const t=await e();return{token:t.token||"",clientId:t.config.clientId||"",baseUrl:t.config.fileStoreUrl||""}},T=async e=>{var t,n;const{collectionId:o,templateId:a,spaceKey:r}=(0,l.K5)(e);if(o||a)return(0,l.n0)({collectionId:o,spaceKey:r,templateId:a});const i=await v(e),{clientId:s="",fileStoreUrl:c=""}=(null==i||null===(t=i.data)||void 0===t?void 0:t.mediaConfiguration)||{};return{clientId:s,token:(null==i||null===(n=i.data)||void 0===n||null===(n=n.content)||void 0===n||null===(n=n.nodes)||void 0===n||null===(n=n[0])||void 0===n||null===(n=n.body)||void 0===n||null===(n=n.atlas_doc_format)||void 0===n||null===(n=n.mediaToken)||void 0===n?void 0:n.token)||"",baseUrl:c||""}},C=(0,a.c)((async e=>{var t,n;const o=await(a=e.contentId,(0,s.WQ)().query({query:m,variables:{contentId:a},fetchPolicy:"no-cache"}));var a;const l=null==o||null===(t=o.data)||void 0===t?void 0:t.contentMediaSession;return{token:(null==l||null===(n=l.token)||void 0===n?void 0:n.value)||"",config:(null==l?void 0:l.configuration)||b,collectionId:(null==l?void 0:l.collection)||""}}),(e=>e.token)),P=async e=>(await C.getValue(e)).collectionId,x=async e=>({authProvider:w((()=>C.getValue(e))),getAuthFromContext:T}),$=async e=>({authProvider:w((async()=>{let t=await E.getValue(e);return e.mediaToken&&(t.token=e.mediaToken),t.token||(t=await E.forceGetValue(e)),t})),getAuthFromContext:T}),F=async e=>({viewMediaClientConfig:await $(e)}),Z=async e=>{_(e);const[t,n,o]=await Promise.all([$(e),x(e),P(e)]);return{viewMediaClientConfig:t,uploadParams:{collection:o,onUploadRejection:e.onUploadRejection},uploadMediaClientConfig:n}};let M;const _=e=>{M&&o.h.off("file-added",M),M=S(e),o.h.on("file-added",M)}},997331:(e,t,n)=>{n.d(t,{t:()=>a});var o=n(675845);function a(e,t,n){return Promise.resolve({cloudId:e,resourceClient:(0,o.F)(e,n),getActions:t})}},720515:(e,t,n)=>{n.d(t,{u:()=>o});const o=n(779076).ZP`mutation SetBatchedTaskStatus($contentId:ID!$tasks:[InlineTask]!$trigger:PageUpdateTrigger=VIEW_PAGE){setBatchedTaskStatus(batchedInlineTasksInput:{contentId:$contentId tasks:$tasks trigger:$trigger}){success}}`},450874:(e,t,n)=>{n.d(t,{u:()=>a});var o=n(199009);class a{constructor(e){this.flushIntervalMs=e,(0,o.Z)(this,"flushIntervalId",void 0),(0,o.Z)(this,"onFlushCallback",void 0),(0,o.Z)(this,"currentBatch",[]),(0,o.Z)(this,"add",(e=>{this.scheduleFlush(),this.currentBatch=this.currentBatch.filter((t=>t.objectKey.localId!==e.objectKey.localId)),this.currentBatch.push(e)})),(0,o.Z)(this,"flush",(()=>{const e=this.renewBatch();if(this.unscheduleFlush(),0!==e.length)try{this.onFlushCallback&&this.onFlushCallback(e)}catch(t){setTimeout((()=>{throw console.error('"onFlush" callback threw the below error. Please make sure your callbacks have proper error handling'),t}),0)}}))}onFlush(e){if(!(e instanceof Function))throw new Error(`"onFlush" callback is supposed to be a function; saw ${typeof e} instead`);this.onFlushCallback=e}forceFlush(){this.flush()}renewBatch(){const e=this.currentBatch;return this.currentBatch=[],e}scheduleFlush(){this.flushIntervalId||(this.flushIntervalId=window.setInterval(this.flush,this.flushIntervalMs))}unscheduleFlush(){this.flushIntervalId&&(window.clearInterval(this.flushIntervalId),this.flushIntervalId=void 0)}}},264339:(e,t,n)=>{n.d(t,{Y:()=>i});var o=n(199009),a=n(784569);const l=n(779076).ZP`mutation SetTaskStatusMutation($contentId:ID!$taskId:ID!$status:TaskStatus!){setTaskStatus(inlineTasksInput:{cid:$contentId taskId:$taskId status:$status trigger:VIEW_PAGE}){success}}`;const r=(0,n(93972).defineMessages)({flagTitle:{id:"fabric-media-support.tasklist.error.flag.title",defaultMessage:"Something went wrong"},flagDescription:{id:"fabric-media-support.tasklist.error.flag.description",defaultMessage:"An error occurred while trying to change a task's status. Please try again later."}});class i{constructor(e,t,n,a){this.intl=e,this.flags=t,this.contentId=n,this.toggleTaskCallback=a,(0,o.Z)(this,"_toggleTaskCallback",void 0),this._toggleTaskCallback=a}toggleTask(e,t){return this._toggleTaskCallback?(this._toggleTaskCallback(e,t),Promise.resolve(t)):(0,a.WQ)().mutate({mutation:l,variables:{contentId:this.contentId,taskId:e.localId,status:"DONE"===t?"CHECKED":"UNCHECKED"}}).then((e=>{var n;return(null==e||null===(n=e.data)||void 0===n||null===(n=n.setTaskStatus)||void 0===n?void 0:n.success)||!1||this.showErrorFlag(),t})).catch((e=>{this.showErrorFlag()}))}showErrorFlag(){this.flags.showErrorFlag({title:this.intl.formatMessage(r.flagTitle),description:this.intl.formatMessage(r.flagDescription)})}notifyRecentUpdates(e){}subscribe(e,t){}unsubscribe(e,t){}unsubscribeRecentUpdates(e){}}},128108:(e,t,n)=>{n.d(t,{j_:()=>E,Dq:()=>w,n0:()=>k,K5:()=>y,$m:()=>I});var o=n(615919),a=n(880470),l=n(834306),r=n(784569),i=n(649233),s=n(804929),c=n(9019),d=n(779076);const u=d.ZP`query TemplateMediaSessionDownloadQuery($spaceKey:String$templateIds:[String]!$collectionId:String){templateMediaSession(spaceKey:$spaceKey templateIds:$templateIds collectionId:$collectionId){collections{key value}configuration{fileStoreUrl clientId}downloadToken{value duration}}}`,f=d.ZP`query TemplateMediaSessionUploadQuery($spaceKey:String$templateIds:[String]!$collectionId:String){templateMediaSession(spaceKey:$spaceKey templateIds:$templateIds collectionId:$collectionId){collections{key value}configuration{fileStoreUrl clientId}uploadToken{value duration}}}`,g=async({spaceKey:e,templateIds:t,collectionId:n=null})=>(0,r.WQ)().query({query:u,variables:{spaceKey:e||null,templateIds:t,collectionId:n},fetchPolicy:"network-only"}).catch((e=>{(0,s.UJ)().submitError(e,{attribution:c.x.TAILORED_EXPERIENCES}),(0,i.Xb)(e)})),h=e=>e.length,m=(e,t,n)=>(e=>!e||""===e)(e)||(e=>!/^[0-9]+$/.test(e))(e)&&n||!t?[]:[e],p=(0,a.c)((async e=>{var t,n,o;const a=await(async({spaceKey:e,templateIds:t,collectionId:n=null})=>(0,r.WQ)().query({query:f,variables:{spaceKey:e||null,templateIds:t,collectionId:n},fetchPolicy:"no-cache"}).catch((e=>{(0,s.UJ)().submitError(e,{attribution:c.x.TAILORED_EXPERIENCES}),(0,i.Xb)(e)})))({spaceKey:e.spaceKey,templateIds:e.templateIds,collectionId:e.collectionId}),l=null==a||null===(t=a.data)||void 0===t?void 0:t.templateMediaSession,d=(null==l||null===(n=l.collections)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.value)||"";return{token:(null==l||null===(o=l.uploadToken)||void 0===o?void 0:o.value)||"",config:(null==l?void 0:l.configuration)||{fileStoreUrl:"",clientId:""},collectionId:d}}),(e=>e.token)),v=(0,a.c)((async e=>{var t,n;const o=await g({spaceKey:e.spaceKey,templateIds:e.templateIds,collectionId:e.collectionId});return{token:(null==o||null===(t=o.data)||void 0===t||null===(t=t.templateMediaSession)||void 0===t||null===(t=t.downloadToken)||void 0===t?void 0:t.value)||"",config:(null==o||null===(n=o.data)||void 0===n||null===(n=n.templateMediaSession)||void 0===n?void 0:n.configuration)||{fileStoreUrl:"",clientId:""}}}),(e=>e.token)),I=async e=>{const t=m(e.templateId,!e.collectionId,!0);return(await p.getValue((0,o.Z)((0,o.Z)({},e),{},{templateIds:t,collectionId:h(t)?null:e.collectionId}))).collectionId},y=e=>{let t,n,o=null;try{({collectionId:t,templateId:n,spaceKey:o}=JSON.parse(e))}catch(a){}return{collectionId:t,templateId:n,spaceKey:o}},k=async({templateId:e,collectionId:t,spaceKey:n})=>{var o,a;const l=await g({templateIds:e?[e]:[],collectionId:e?null:t,spaceKey:n}),{clientId:r="",fileStoreUrl:i=""}=(null==l||null===(o=l.data)||void 0===o||null===(o=o.templateMediaSession)||void 0===o?void 0:o.configuration)||{};return{clientId:r,token:(null==l||null===(a=l.data)||void 0===a||null===(a=a.templateMediaSession)||void 0===a||null===(a=a.downloadToken)||void 0===a?void 0:a.value)||"",baseUrl:i}},S=async e=>{const{collectionId:t,templateId:n,spaceKey:o}=y(e);return"string"!=typeof t&&"string"!=typeof n?(0,l.j7)(e):k({collectionId:t,spaceKey:o,templateId:n})},b=e=>({authProvider:(0,l.Sy)((async()=>v.getValue(e))),getAuthFromContext:S}),E=e=>Promise.resolve({viewMediaClientConfig:b(e)}),w=async e=>{let t=!0,n=e.collectionId;const a=(r=e,{authProvider:(0,l.Sy)((async()=>{const e=m(r.templateId,t,!1);return t=!1,v.getValue((0,o.Z)((0,o.Z)({},r),{},{templateIds:e,collectionId:h(e)?null:n}))})),getAuthFromContext:e=>(t=!1,S(e))});var r;const i=(e=>({authProvider:(0,l.Sy)((()=>{const t=m(e.templateId,!n,!0);return p.getValue((0,o.Z)((0,o.Z)({},e),{},{templateIds:t,collectionId:h(t)?null:n}))})),getAuthFromContext:e=>S(e)}))(e),s=await I(e);return n=s||null,{viewMediaClientConfig:a,uploadParams:{collection:s,onUploadRejection:e.onUploadRejection},uploadMediaClientConfig:i}}},880470:(e,t,n)=>{n.d(t,{c:()=>s});var o=n(963235),a=n(443037),l=n.n(a);const r=6e4,i=[-1/0,null,null];function s(e,t,n=r){const a={};async function s(r,s){let c="";try{c=JSON.stringify(r)}catch(g){}const[d,u,f]=a[c]||i;if(s||d<=Date.now()||!l()(u,r)){const l=await e(r);let s=null;try{s=t(l)}catch(h){0}let d=null;if(s)if(isNaN(s))if("string"==typeof s)try{d=1e3*(0,o.Z)(s).exp-n}catch(h){0}else 0;else d=Number(s);return a[c]=null===d?i:[d,r,l],l}return f}return{forceGetValue:e=>s(e,!0),getValue:e=>s(e,!1)}}},977281:(e,t,n)=>{n.d(t,{N:()=>a,U:()=>l});var o=n(179640);function a(e){return e?{folderUploads:Boolean(e["confluence.frontend.media.picker.folder.uploads"]),captions:Boolean(e["confluence.frontend.fabric.editor.media.captions"]),mediaInline:Boolean(e["confluence.frontend.fabric.editor.media.inline"])}:{}}const l=()=>({folderUploads:(0,o.T)("confluence.frontend.media.picker.folder.uploads"),captions:(0,o.T)("confluence.frontend.fabric.editor.media.captions")})},688763:(e,t,n)=>{n.d(t,{t:()=>a});var o=n(815037);const a=()=>{const{isExternalCollaborator:e,loading:t,error:n}=(0,o.Q)();return{canViewUserProfile:!e,loading:t,error:n}}},49313:(e,t,n)=>{n.d(t,{P:()=>s});var o=n(840506),a=n(477958),l=n(179640),r=n(273155),i=n(382188);const s=()=>{const[e,t]=(0,o.useState)(0),{panels:n}=(0,i.q)({location:a._K}),s=(0,r.N)(),c=(0,l.T)("confluence.frontend.fixed-page-header")&&n.length>0&&!s;return(0,o.useEffect)((()=>{const e=()=>{const e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--atl-general-webpanel-height"));t(e)};return c&&document.addEventListener("atlGeneralWebPanelHeightUpdated",e),()=>{c&&document.removeEventListener("atlGeneralWebPanelHeightUpdated",e)}}),[c]),{isATLGeneralWebPanelFixed:c,atlGeneralWebPanelHeight:e}}},382188:(e,t,n)=>{n.d(t,{q:()=>s});var o=n(840506),a=n(167347),l=n(734233),r=n(357261),i=n(827685);const s=({spaceKey:e,contentId:t,location:n,fetchPolicy:s="cache-and-network",onCompleted:c})=>{const{getQueryParams:d}=(0,o.useContext)(l.M),u=d(),f=e||(0,r.r)(u,"spaceKey")||(0,r.r)(u,"key"),g=t||(0,r.r)(u,"pageId"),h=g?{contentId:g,location:n}:{spaceKey:f,location:n},{loading:m,data:p,error:v}=(0,a.aM)(i.f,{variables:h,fetchPolicy:s,onCompleted:c});return{panels:((null==p?void 0:p.webPanels)||[]).filter((e=>e)),loading:m,error:v}}}}]);
//# sourceMappingURL=61198.xtajLzC9i8.js.map