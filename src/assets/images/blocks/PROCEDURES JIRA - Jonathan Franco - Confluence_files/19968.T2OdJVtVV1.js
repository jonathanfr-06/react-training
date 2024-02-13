/*! License: 19968.T2OdJVtVV1.js.LICENSE.txt */
(self._cf=self._cf||[]).push([[19968,48542],{777014:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},599854:(e,t,n)=>{var a=n(877099),r=n(109377)(a);r.push([e.id,".SpaceBaseComponent_leaveFadeOut_qXk{opacity:1}.SpaceBaseComponent_leaveActiveFadeOut_zxV{opacity:.01;transition:opacity .2s ease}.SpaceBaseComponent_leaveActiveFadeOutAndSlideUp_YAo{opacity:.01;transform:translateY(-50%);transition:opacity .2s ease,transform .2s ease}.SpaceBaseComponent_enterFadeIn_CXK{opacity:.01}.SpaceBaseComponent_enterActiveFadeIn_OFr{opacity:.99999;transition:opacity .2s ease}.SpaceBaseComponent_enterActiveFadeInWithDelay_LQk{animation-name:SpaceBaseComponent_hidden-first-and-fade-in_oKs;animation-duration:.4s;animation-timing-function:ease}@keyframes SpaceBaseComponent_hidden-first-and-fade-in_oKs{0%,50%{opacity:.01;visibility:hidden;width:0;height:0}51%{opacity:.01;visibility:visible;width:auto;height:auto}to{opacity:1;visibility:visible;width:auto;height:auto}}.SpaceBaseComponent_hidden_NJd{visibility:hidden;width:0;height:0}",""]),r.locals={leaveFadeOut:"SpaceBaseComponent_leaveFadeOut_qXk",leaveActiveFadeOut:"SpaceBaseComponent_leaveActiveFadeOut_zxV",leaveActiveFadeOutAndSlideUp:"SpaceBaseComponent_leaveActiveFadeOutAndSlideUp_YAo",enterFadeIn:"SpaceBaseComponent_enterFadeIn_CXK",enterActiveFadeIn:"SpaceBaseComponent_enterActiveFadeIn_OFr",enterActiveFadeInWithDelay:"SpaceBaseComponent_enterActiveFadeInWithDelay_LQk","hidden-first-and-fade-in":"SpaceBaseComponent_hidden-first-and-fade-in_oKs",hidden:"SpaceBaseComponent_hidden_NJd"},e.exports=r},55397:(e,t,n)=>{var a=n(599854),r=n(417774);"string"==typeof a&&(a=[[e.id,a,""]]),e.exports=a.locals||{},e.exports._getContent=function(){return a},e.exports._getCss=function(){return a.toString()},e.exports._insertCss=function(e){return r(a,e)}},911287:(e,t,n)=>{"use strict";n.d(t,{W:()=>s});var a=n(615919),r=n(840506);const o={display:"block",position:"absolute",width:"100%",top:0,left:0,height:250};class s extends r.Component{render(){var e;const{lookAndFeel:t}=this.props;if(!t||!t.content)return null;const n=(null!=(e=t)&&null!=(e=e.content)&&null!=(e=e.screen)?e.layer:e)||{};return r.createElement("div",{"data-testid":"content-screen-background-layer",style:(0,a.Z)((0,a.Z)({},o),n)})}}s.displayName="ContentScreenBackgroundLayer"},386188:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});var a=n(779076),r=n(505173);const o=a.ZP`query ContentBlogUnifiedQuery($contentId:ID!$spaceKey:String=null$versionOverride:Int$isSSR:Boolean=false)@SLA{content(id:$contentId version:$versionOverride){nodes{id type subType title space{id key}version{confRev}properties(keys:["cover-picture-id-published" "editor"]){nodes{id key value version{number}}}metadata{lastModifiedDate frontend{fabricEditorSupported macroNamesNotSpaFriendly spaFriendly embedUrl}}macroRenderedOutput@include(if:$isSSR){key value{value representation webresource{tags{js css}}}}body{dynamic{representation value webresource{superbatch{tags{js css}}tags{js css}}}}...contentAppearancePublishedFragment}}space(key:$spaceKey){id theme{name themeKey}lookAndFeel{content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode layer{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode width height}gutterTop gutterRight gutterBottom gutterLeft}container{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}}}settings{routeOverrideEnabled}}}${r.O}`},330981:(e,t,n)=>{"use strict";n.d(t,{q:()=>a});const a=n(779076).ZP`query featureDiscovery{featureDiscovery{pluginKey featureKey userKey date}}`},967370:(e,t,n)=>{"use strict";n.d(t,{TX:()=>r,pY:()=>o});var a=n(940155);const r=(0,a.ZR)({__loadable_id__:"9rmje",name:"NotFound",loader:async()=>(await Promise.all([n.e(12705),n.e(33901)]).then(n.bind(n,993386))).NotFound}),o=(0,a.ZR)({__loadable_id__:"Hv6Il",name:"OverviewNotFound",loader:async()=>(await Promise.all([n.e(12705),n.e(14860)]).then(n.bind(n,486762))).OverviewNotFound})},443435:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var a=n(840506);function r({title:e}){return(0,a.useEffect)((()=>{e&&(document.title=e)}),[e]),null}},955451:(e,t,n)=>{"use strict";n.d(t,{zv:()=>l,VK:()=>p,rw:()=>u});var a=n(840506),r=n(167347),o=n(722755),s=n(649233),i=n(487696),c=n(559787);const d=n(779076).ZP`query SpaceRestrictionCheckQueryExperimental($spaceKey:String!)@experimental{experimentalSpace(spaceKey:$spaceKey){statusCode}}`;function l({asSuperAdmin:e,children:t,spaceKey:n}){const o=(0,c.TT)(),l=(0,a.useContext)(i.z1),{data:m,error:y,loading:g}=(0,r.aM)(d,{context:null==e?void 0:{asSuperAdmin:e},fetchPolicy:o?"no-cache":void 0,variables:{spaceKey:n||l.spaceKey}});let h,v,b;if(y)v=p(y),b=u(y),(v||b)&&((0,s.Xb)(y),h=!0);else if(m){var f;const e=null==m||null===(f=m.experimentalSpace)||void 0===f?void 0:f.statusCode;v=404===e,b=403===e}return t({error:h?void 0:y,isSpaceNotFound:v,isSpaceRestricted:b,loading:g})}function p(e){return m(e,(({statusCode:e})=>404===e))}function u(e){return m(e,(()=>(0,o.T)(e)))}function m({graphQLErrors:e},t){if(e&&e.length>0)for(const{extensions:n,path:a}of e)if(Array.isArray(a)&&-1!==a.indexOf("space")&&n&&t(n))return!0;return!1}},433851:(e,t,n)=>{"use strict";n.d(t,{wl:()=>S,kt:()=>k,aW:()=>f});var a=n(653010),r=n(838787),o=n(779076);const s=o.ZP`fragment iconDetails on Icon{path width height isDefault}`,i=o.ZP`query spaceForBaseSpaceQuery($spaceKey:String){spaces(spaceKey:$spaceKey){nodes{id key name homepage{id}icon{...iconDetails}type settings{routeOverrideEnabled}theme{themeKey}lookAndFeel{headings{key value}menus{hoverOrFocus{key value}color}header{backgroundColor button{backgroundColor color}primaryNavigation{color hoverOrFocus{key value}}secondaryNavigation{color hoverOrFocus{key value}}search{backgroundColor color}}content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode layer{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode width height}gutterTop gutterRight gutterBottom gutterLeft}container{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}header{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}body{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}}}metadata{labels{nodes{prefix name id}}}operations{operation targetType}}}}${s}`;var c=n(505173);const d=o.ZP`fragment operations on Content{operations{operation targetType}}`,l=o.ZP`fragment userFragment on Person{type ...on KnownUser{accountId}profilePicture{path width height isDefault}displayName}`,p=o.ZP`fragment baseContentDetailsFragment on Content{id type status title}`,u=o.ZP`fragment baseSpaceDetailsFragment on Space{id key name type status}`,m=o.ZP`fragment linksFragment on Content{links{editui}}`,y=o.ZP`fragment metadataFragment on ContentMetadata{labels{id name}}`,g=o.ZP`query editorContent($contentId:ID$draftShareId:String$status:[String])@SLA{content(id:$contentId draftShareId:$draftShareId status:$status){nodes{...baseContentDetailsFragment ...operations ...linksFragment ...contentAppearancePublishedFragment ...contentAppearanceDraftFragment space{...baseSpaceDetailsFragment}history{latest createdBy{...userFragment}createdDate}ancestors{...baseContentDetailsFragment}metadata{...metadataFragment}body{atlas_doc_format{value}}version{number syncRev confRev}schedulePublishDate}}}${p}${d}${m}${u}${l}${y}${c.O}${c.t}`;var h=n(330981);const v=o.ZP`fragment viewPageContentDetailsFragment on Content{id type status title}`,b=(o.ZP`query ViewPageQuery($contentId:ID$versionOverride:Int$embeddedContentRender:String){content(id:$contentId version:$versionOverride embeddedContentRender:$embeddedContentRender){nodes{id type status title metadata{frontend{spaFriendly commentsSpaFriendly}}properties(key:"editor"){nodes{id key value}}operations{operation targetType}space{id key name}history{createdDate}ancestors{...viewPageContentDetailsFragment}}}}${v}`,o.ZP`query templateEditorContent($contentId:String!){template(contentTemplateId:$contentId){templateId name description labels{id name prefix}space{id key name}originalTemplate{pluginKey moduleKey}body{atlas_doc_format{value representation}}templatePropertySet{contentAppearance}}}`,({query:e,operationName:t,variables:n,actionName:a,transformer:r,normalizrSchema:o,errorsFilter:s,batch:i=!0,fetchPolicy:c})=>{const d={type:"APOLLO_QUERY",query:e,operationName:t,variables:n,actionName:a,transformer:r,schema:o,errorsFilter:s,batch:i};return c&&(d.fetchPolicy=c),d});const f=e=>b({query:i,variables:e,operationName:"spaceForBaseSpaceQuery",actionName:"SPACE_INFO",transformer:e=>(0,a.nP)(e.spaces),normalizrSchema:r.RZ}),k=e=>b({query:g,variables:e,operationName:"editorContent",actionName:"EDITOR_CONTENT_V2",transformer:e=>(0,a.b9)(e.content),normalizrSchema:r.kQ,batch:!1,fetchPolicy:"no-cache"}),S=()=>b({query:h.q,operationName:"featureDiscovery",actionName:"DISCOVERED_FEATURES",batch:!0,transformer:e=>e.featureDiscovery})},619968:(e,t,n)=>{"use strict";n.d(t,{Z:()=>J});var a=n(873158),r=n(522967),o=n(375523),s=n(436062),i=n(184037),c=n(608985),d=n(433851),l=n(615919),p=n(199009),u=n(840506),m=n(777014),y=n.n(m),g=n(548854),h=n.n(g),v=n(854473),b=n(915497),f=n(465625),k=n(401917),S=n(955451),C=n(142807),_=n(967370);const F=e=>{const{isFirstRoute:t,goBackPreviousPage:n}=e;return u.createElement(_.TX,{secondaryButtonProps:{children:!t&&u.createElement(C.Z,{id:"space-404.text.go.back.previous.page",defaultMessage:"Go to previous page"}),onClick:e=>{e.preventDefault(),n()}}})};F.displayName="Space404",F.displayName="Space404";var P=n(329687),K=n.n(P);const A=u.createContext();A.displayName="MayRedirect",A.Provider.propTypes={value:K().func};const E=A;var I=n(491487),$=n(55397),O=n.n($),w=n(167347);const R=(0,n(940155).ZR)({__loadable_id__:"m4-Is",name:"ConnectAddon",loader:()=>Promise.all([n.e(12705),n.e(61769),n.e(41809),n.e(80845)]).then(n.bind(n,338445))});var x=n(78300),D=n(386188),Z=n(734233),B=n(487696),N=n(284186),T=n(911287),M=n(804929),U=n(649233),q=n(9019);const W=n(779076).ZP`query ExperimentalThemeSpaceHomeOverrideQuery($themeAddonKey:String$themeModuleKey:String$spaceKey:String!$spaceHomePageId:String!)@experimental{experimentalThemeSpaceHomeOverride(themeAddonKey:$themeAddonKey themeModuleKey:$themeModuleKey spaceKey:$spaceKey spaceHomePageId:$spaceHomePageId){hasSpaceHomeOverride spaceHomeOverrideDescriptor{addon_key apiMigrations{gdpr}contentClassifier contextJwt cp general h hostOrigin key moduleType origin productCtx sandbox structuredContext timeZone uniqueKey url w}}}`,z={position:"relative"},H={contentStyle:{width:"100%",textAlign:"center",display:"inline-block"},width:"100%",height:"100%"},Q=/^ac:(.*)__(.*)-remote-theme$/,L=({children:e})=>{var t,n,a;const{match:r}=(0,u.useContext)(Z.M),{contentId:o,spaceKey:s,contentType:i}=(0,u.useContext)(B.z1);let c=x.P;"blogpost"===i&&(c=D.W);const d=(null==r?void 0:r.name)===N.y4.name,p=(0,w.aM)(c,{context:{single:!0},variables:{contentId:o,spaceKey:s,versionOverride:null},skip:!o||!s||!d}),m=null==p||null===(t=p.data)||void 0===t||null===(t=t.space)||void 0===t||null===(t=t.theme)||void 0===t?void 0:t.themeKey,y=null==p||null===(n=p.data)||void 0===n||null===(n=n.space)||void 0===n||null===(n=n.settings)||void 0===n?void 0:n.routeOverrideEnabled,[g,h]=(e=>{const t=Q.exec(e);return t?[t[1],t[2]]:[null,null]})(m),v=(0,w.aM)(W,{variables:{themeAddonKey:g,themeModuleKey:h,spaceKey:s,spaceHomePageId:o},skip:!g||!h||!y});if(p.loading||v.loading)return u.createElement(u.Fragment,null,e);if(p.error)return(0,M.UJ)().submitError(p.error,{attribution:q.x.ECOSYSTEM}),(0,U.Xb)(p.error),u.createElement(u.Fragment,null,e);if(v.error)return(0,M.UJ)().submitError(v.error,{attribution:q.x.ECOSYSTEM}),(0,U.Xb)(v.error),u.createElement(u.Fragment,null,e);if(!p.data||!v.data)return u.createElement(u.Fragment,null,e);const{hasSpaceHomeOverride:b,spaceHomeOverrideDescriptor:f}=v.data.experimentalThemeSpaceHomeOverride;return b?(f.productContext=JSON.parse(f.productCtx),u.createElement(u.Fragment,null,u.createElement(T.W,{lookAndFeel:null==p||null===(a=p.data)||void 0===a||null===(a=a.space)||void 0===a?void 0:a.lookAndFeel}),u.createElement(R,(0,l.Z)({containerStyle:z,descriptor:f},H)))):u.createElement(u.Fragment,null,e)};var X;L.displayName="SpaceBaseThemedComponent";let j=(0,v.D)(O())(X=(0,I.Z)((e=>e.space&&e.space.name))(X=class extends u.Component{constructor(...e){super(...e),(0,p.Z)(this,"state",{mayRedirect:!1}),(0,p.Z)(this,"_setMayRedirect",(e=>{this.state.mayRedirect!==e&&this.setState({mayRedirect:e})}))}componentDidMount(){const{spaceKey:e,location:t,routeParams:n}=this.props;this._fixSpaceEncodingInSpaceKey(t,n),this._removeEmailQueryParameters(t),this._fetchSpaceData(e)}UNSAFE_componentWillReceiveProps(e){const{replace:t}=this.props,{spaceKey:n,isRequesting:a,space:r}=e;if(r&&r.key&&r.key!==n&&r.key.toLowerCase()===n.toLowerCase())return void t((0,l.Z)((0,l.Z)({},h().location),{},{pathname:h().location.pathname.replace(`/${b.Ae}/${n}`,`/${b.Ae}/${r.key}`)}));!(r&&r.spaceKey&&r.currentUserPermissions||this.props.spaceKey===n||a)&&this._fetchSpaceData(n)}componentDidUpdate(e){const{routeParams:t}=this.props;e.spaceKey!==this.props.spaceKey&&(this._fixSpaceEncodingInSpaceKey(h().location,t),this._removeEmailQueryParameters(location))}_fixSpaceEncodingInSpaceKey(e,{spaceKey:t=""}){const n=e.pathname||"",a=decodeURIComponent(n);-1!==n.indexOf("+")&&-1!==t.indexOf("+")&&-1!==a.indexOf(`spaces/${t}`)&&this.props.replace((0,l.Z)((0,l.Z)({},e),{},{pathname:a.replace(`spaces/${t}`,`spaces/${t}`.replace(/\+/g," "))}))}_removeEmailQueryParameters(e){if(!e.search)return;let t=e.search.substring(1);const n=t.split("&").filter((e=>!e.includes("src=mail")&&!e.startsWith("src.mail.")));t=`?${n.join("&")}`,this.props.replace((0,l.Z)((0,l.Z)({},e),{},{search:t}))}_fetchSpaceData(e){const{getSpaceByKey:t}=this.props;t({spaceKey:e})}render(){const{spaceKey:e,isViewPage:t,isAnonymous:n,goBackPreviousPage:a,isFirstRoute:r,contentId:o}=this.props;return u.createElement(E.Provider,{value:this._setMayRedirect},u.createElement(S.zv,{spaceKey:e},(({isSpaceRestricted:s,isSpaceNotFound:i})=>s?u.createElement(k.Ex,{goToPreviousPage:a,isFirstRoute:r,contentId:o}):!i||n||this.state.mayRedirect||o?u.createElement("div",{className:y()({"wrapper-space-view-page":t,"wrapper-space-home-page":!t})},u.createElement(L,null,this.props.children)):u.createElement(u.Fragment,null,u.createElement(F,{goBackPreviousPage:a,isFirstRoute:r}),u.createElement(f.B,{screenEvent:{name:"spaceNotFoundScreen"},id:e})))))}})||X)||X;const V=(0,s.X1)();const J=(0,a.$j)((e=>{const t=(0,c.Rs)(e),{contentId:n,contentSlug:a,spaceKey:o}=t,s=e.views.spaceHome.currentSpace,d=(0,c.k$)(e),l=d.pathname,p=V((0,r.fromJS)([o]),e).first(),u=e.session.history&&1===e.session.history.size,m=!s.get("spaceKey")||s.get("spaceKey")===o,y=!!(m&&s.get("isFound")?s.get("isFound"):e.views.spaceHome.homePage.get("isSpaceFound")),g=!!n||!!a;return{spaceKey:o,space:p,contentId:n,contentSlug:a,pathname:l,isRequesting:m&&s.get("isRequesting")&&s.get("spaceKey")===o,hasFetched:m&&s.get("hasFetched"),isFirstRoute:u,isAnonymous:(0,i.n7)(e),isViewPage:g,location:d,routeParams:t,isSpaceFound:y}}),(function(e){return{getSpaceByKey:t=>e((0,d.aW)(t)),goBackPreviousPage:()=>e((0,o.Hm)()),replace:t=>e((0,o.gx)(t))}}))(j)},491487:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(615919),r=n(840506),o=n(713493),s=n(443435);function i(e,t){return void 0===t&&(t={}),n=>i=>{const c=e(i),d=(0,o.XG)("site-title")||"",l=window.__DOCUMENT_TITLE_TAG__||"";let p;return p=l||(c&&d?`${c} - ${d}`:c||d),r.createElement("div",{style:t},!window.__SSR_RENDERED__&&r.createElement(s.V,{title:p}),r.createElement(n,(0,a.Z)({},i)))}}},838787:(e,t,n)=>{"use strict";n.d(t,{RZ:()=>i,kQ:()=>d});var a=n(971741);const r=new a.fK.Entity("users",{},{idAttribute:e=>e.isAnonymous?"anonymous":e.accountId?e.accountId:e.unknownUser?e.displayName:"FIX-ME:not-a-real-user"}),o=new a.fK.Entity("versions");o.define({by:r});const s=new a.fK.Entity("spaces",{},{idAttribute:e=>e.spaceKey||e.key}),i={results:new a.fK.Array(s),nodes:new a.fK.Array(s)},c=new a.fK.Entity("labels"),d=new a.fK.Entity("contents");d.define({space:s,version:o,createdBy:r,contributors:new a.fK.Array(r),childNodes:new a.fK.Array(d),ancestors:new a.fK.Array(d),labels:new a.fK.Array(c),viewers:new a.fK.Array(r)})},653010:(e,t,n)=>{"use strict";n.d(t,{DH:()=>m,X0:()=>h,b9:()=>v,kT:()=>y,nP:()=>i,pD:()=>g});var a=n(615919),r=n(969067);const o=e=>null==e?e:String(e),s=e=>{const t={};if(!e)return t;if(e instanceof Array)for(const n of e)t[n.key]={key:n.key,value:JSON.parse(n.value)};else Object.keys(e).filter((e=>!e.startsWith("_"))).forEach((n=>{const a=e[n].value;t[n]={key:n,value:a}}));return t},i=e=>{const t=[];return(e.results||e.nodes).map((e=>{const n=e.metadata&&e.metadata.labels&&(e.metadata.labels.results||e.metadata.labels.nodes);t.push((e=>{const t=e._expandable&&e._expandable.homepage?e._expandable.homepage.substring(18):e.homepage&&e.homepage.id,n={id:e.id?`${e.id}`:e.id,key:e.key,name:e.name,type:e.type};return t&&(n.homepageId=`${t}`),e.icon&&e.icon.path&&(n.iconPath=e.icon.path),e.isFavourite&&(n.isFavourite=e.isFavourite),e.isWatched&&(n.isWatched=e.isWatched),e.operations&&(n.operations=e.operations,n.currentUserPermissions=e.operations.filter((e=>"space"===e.targetType)).map((e=>e.operation))),e.lookAndFeel&&(n.lookAndFeel=e.lookAndFeel),e.settings&&(n.settings=e.settings),e.theme&&(n.theme=d(e.theme)),n})((0,a.Z)((0,a.Z)({},e),{},{isFavourite:n&&n.some((e=>"my"===e.prefix&&("favourite"===e.name||"favorite"===e.name)))})))})),{results:t}},c=/^ac:(.*)__(.*)-remote-theme$/,d=e=>{const t=c.exec(e.themeKey);return t?{addonKey:t[1],moduleKey:t[2]}:{addonKey:null,moduleKey:null}},l=e=>void 0===e?null:e,p=(e,t)=>e?{version:{id:`${t=o(t||e.id)}`,by:e.version&&e.version.by&&(0,r.S)(e.version.by),when:e.version&&e.version.when,friendlyWhen:e.version&&e.version.friendlyWhen,number:e.version&&e.version.number,syncRev:e.version&&e.version.syncRev,confRev:e.version&&e.version.confRev}}:{},u=e=>{const t={createdDate:void 0,createdBy:void 0};if(!e||!e.history)return t;const{createdDate:n,createdBy:a}=e.history;if(n&&(t.createdDate=n),a){const e=(0,r.S)(a);void 0!==e.isAnonymous&&(t.createdBy=e)}return t},m=e=>{if(!e)return{};const t=e.content||e;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},(e=>{if(!e)return{};const{metadata:t={}}=e,n=e?o(e.id):null,a=e.properties&&e.properties.nodes||t.properties,r={id:n,isContentSPAFriendly:l(t.frontend&&t.frontend.spaFriendly),areCommentsSPAFriendly:l(t.frontend&&t.frontend.commentsSpaFriendly),properties:s(a),title:e.title,type:e.type,operations:e.operations,currentUserPermissions:e.operations?e.operations.map((e=>e.operation)):null};return e.version&&(r.version=p(e).version),r})(t)),(e=>{if(!e)return{};const{body:t}=e;return{body:{id:e?o(e.id):null,html:t&&t.view&&t.view.value,cssTags:t&&t.view&&t.view.webresource.tags.css,jsUris:t&&t.view&&t.view.webresource.uris.js}}})(t)),{},{ancestors:t.ancestors},u(t)),p(t)),{},{space:t.space})},y=(e,t)=>{if(!e)return{};const n=o(t.substring(t.lastIndexOf("/")+1).split(".")[0]);return{_originalResponse:e,id:n,title:e.title,version:{id:`${n}`,number:parseInt(e.pageVersion,10)},spaceKey:e.spaceKey}},g=(e,t)=>e?(0,a.Z)((0,a.Z)({id:e.id,createdDate:e.history&&e.history.createdDate,createdBy:e.history&&e.history.createdBy&&(0,r.S)(e.history.createdBy)},p(e)),{},{type:e.type,title:e.title}):{},h=(e,t)=>e?{id:e.id,createdDate:e.history&&e.history.createdDate,createdBy:e.history&&e.history.createdBy&&(0,r.S)(e.history.createdBy),type:e.type,title:e.title}:{},v=e=>{const t=e&&(e.results||e.nodes);return t&&t.length?f(t[0]):null},b={value:{content:[{type:"paragraph",content:[]}],type:"doc",version:1}};const f=(e,t)=>{if(!e)return{};let n;e.id?n=e.id:t&&(n=o(t.substring(t.lastIndexOf("/")+1).split(".")[0]));const r={};r.atlas_doc_format=function(e){if(!e.value||0===e.value.length)return b;try{return{value:JSON.parse(e.value)}}catch(t){return{value:e.value,isADFContentInvalid:!0}}}(e.body.atlas_doc_format);return(0,a.Z)((0,a.Z)((0,a.Z)({id:n,title:e.title,editorContent:(0,a.Z)((0,a.Z)({},e.body),r),type:e.type,isUnpublishedDraft:!e.history.createdBy,ancestors:e.ancestors,space:e.space,links:e.links,currentUserPermissions:e.operations&&e.operations.map((e=>e.operation))},u(e)),p(e)),{},{appearancePublished:e.appearancePublished.nodes,appearanceDraft:e.appearanceDraft.nodes,labels:e.metadata.labels,schedulePublishDate:e.schedulePublishDate})}},969067:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});const a=({type:e,accountId:t,displayName:n,profilePicture:{path:a}={},permissionType:r}={})=>a?"anonymous"===e?{isAnonymous:!0,avatarUrl:a}:{isAnonymous:!1,displayName:n,avatarUrl:a,accountId:t,permissionType:r}:{}},854473:(e,t,n)=>{"use strict";n.d(t,{D:()=>i,C:()=>c});var a=n(615919),r=n(329687),o=n.n(r),s=n(840506);const i=function(...e){return t=>{class n extends s.Component{UNSAFE_componentWillMount(){this.removeCss=this.context.insertCss.apply(void 0,e)}componentWillUnmount(){this.removeCss()}render(){return s.createElement(t,(0,a.Z)({},this.props))}}return n.displayName="StyledComponent",n.displayName=`WithStyles(${t.displayName||t.name||""})`,n.contextTypes={insertCss:o().func.isRequired},n}};const c=function(e){return t=>{class n extends s.Component{constructor(){super(),this.state={hasFetched:!1}}componentDidMount(){e().then((e=>{this.setState({hasFetched:!0}),this.removeCss=this.context.insertCss.apply(void 0,[e])}))}componentWillUnmount(){this.removeCss&&this.removeCss()}render(){return this.state.hasFetched?s.createElement(t,(0,a.Z)({},this.props)):null}}return n.displayName="StyledAsyncComponent",n.displayName=`WithStylesAsync(${t.displayName||t.name||""})`,n.contextTypes={insertCss:o().func.isRequired},n}}}}]);
//# sourceMappingURL=19968.T2OdJVtVV1.js.map