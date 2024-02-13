"use strict";(self._cf=self._cf||[]).push([[43470],{287198:(e,s,n)=>{n.d(s,{x:()=>t});let t=function(e){return e.ENABLED="ENABLED",e.DISABLED="DISABLED",e.ERROR="ERROR",e.LOADING="LOADING",e}({})},140334:(e,s,n)=>{n.d(s,{k:()=>r});var t=n(840506),o=n(167347),i=n(649233);const a=n(779076).ZP`query IsExportEnabledQuery($spaceId:ID!){space(id:$spaceId){id isExportEnabled}}`;var l=n(287198);const r=e=>{const[s,n]=(0,t.useState)(l.x.LOADING),{data:r,loading:c,error:u}=(0,o.aM)(a,{variables:{spaceId:e},skip:!e,errorPolicy:"all",fetchPolicy:"no-cache"});return(0,t.useMemo)((()=>{var e;const s=null==r||null===(e=r.space)||void 0===e?void 0:e.isExportEnabled;u?(null!=u&&u.message.includes("DataExportPolicyCheckException")&&(0,i.Xb)(u),n(l.x.ERROR)):c?n(l.x.LOADING):r&&s?n(l.x.ENABLED):r&&!s&&n(l.x.DISABLED)}),[r,c,u]),{exportPolicyState:s,error:u}}},114774:(e,s,n)=>{n.d(s,{F:()=>c});var t=n(615919),o=n(840506),i=n(93972),a=n(142807),l=n(480963);const r=(0,i.defineMessages)({externalNewLozengeText:{id:"external-collab-ui.new-lozenge",defaultMessage:"New"}}),c=()=>o.createElement(l.Z,{appearance:"new"},o.createElement(a.Z,(0,t.Z)({},r.externalNewLozengeText)));c.displayName="ExternalNewLozenge"},988109:(e,s,n)=>{n.d(s,{w:()=>o});var t=n(547110);const o=()=>(0,t.F)("confluence.external-collaboration.guest-access.new.lozenge.space-perms-guest-tab.key")},547110:(e,s,n)=>{n.d(s,{F:()=>E});var t=n(840506),o=n(167347),i=n(614889),a=n(582463),l=n(779076);const r=l.ZP`query FeatureDiscoveryQuery{featureDiscovery{pluginKey featureKey}}`,c=l.ZP`mutation MarkFeatureDiscoveredMutation($featureKey:String!$pluginKey:String!){markFeatureDiscovered(featureKey:$featureKey pluginKey:$pluginKey){pluginKey featureKey}}`,u=(0,i.j)("useFeatureDiscovery"),d="com.atlassian.confluence.plugins.confluence-frontend-support",m=(e,{data:s})=>{const n=null==s?void 0:s.markFeatureDiscovered,t=e.readQuery({query:r});n&&null!=t&&t.featureDiscovery&&e.writeQuery({query:r,data:{featureDiscovery:t.featureDiscovery.concat(n)}})},p=()=>{},E=(e,s)=>{var n;const{isLoggedIn:i}=(0,a.D)(),l=!i||s,{data:E,loading:g,error:b}=(0,o.aM)(r,{skip:l}),[f,{loading:_,error:v}]=(0,o.Db)(c,{variables:{featureKey:e,pluginKey:d},update:m}),T=b||v,y=!(g||_||T||null!=E&&null!==(n=E.featureDiscovery)&&void 0!==n&&n.some((s=>(null==s?void 0:s.pluginKey)===d&&(null==s?void 0:s.featureKey)===e))),I=(0,t.useCallback)((()=>{y&&f().catch((()=>{}))}),[y,f]);if(l)return[!1,p,void 0];const M=y||(e=>{try{if(sessionStorage.getItem(`featureDiscoveryOverride-${e}`))return!0}catch(s){u.error(s)}return!1})(e);return[M,I,T]}},555813:(e,s,n)=>{n.d(s,{BX:()=>i,ZR:()=>o,gZ:()=>a,rh:()=>t});const t=e=>{if(null==e||!e.id)return;const[,s]=e.id.split("/");return s},o=e=>{if(!e.id)return;const s=e.id.split("/");return s[s.length-1]},i=e=>`forge:${t(e)}:${e.environmentId}:${o(e)}`,a=e=>{var s;const n=null==e||null===(s=e.extensionContexts)||void 0===s?void 0:s[0];return n?n.hasOwnProperty("extensions")?n.extensions:n.hasOwnProperty("extensionsByType")?n.extensionsByType:[]:[]}},545622:(e,s,n)=>{n.d(s,{Z:()=>d});var t=n(615919),o=n(840506),i=n(93972),a=n(142807),l=n(480963),r=n(940155);const c=(0,i.defineMessages)({lozengeText:{id:"public-links.changeboarding.lozenge.text",defaultMessage:"NEW"}}),u=()=>o.createElement(l.Z,{appearance:"new"},o.createElement(a.Z,(0,t.Z)({},c.lozengeText)));u.displayName="NewLozengeComponent";const d=(0,r.y$)({__loadable_id__:"6blYO",name:"NewLozenge",loader:async()=>u})},483946:(e,s,n)=>{n.d(s,{u:()=>a});var t=n(547110),o=n(179640),i=n(274473);const a=e=>{const s=`${i.E5}.lozenge.${e}`,n=(0,o.T)(i.E5),[a,l,r]=(0,t.F)(s);return{shouldShowLozenge:a&&!r&&n,stopLozenge:l}}},274473:(e,s,n)=>{n.d(s,{$R:()=>i,E3:()=>u,E5:()=>t,F5:()=>a,G5:()=>l,LP:()=>r,Mc:()=>d,Ri:()=>c,XA:()=>o});const t="confluence.frontend.public.links",o="confluence.frontend.public.links.changeboarding",i="confluence.frontend.public.link.whiteboard",a="confluence.frontend.public.links-admin-tables",l="publicLinksPagesActionConfirmationModal",r="public-links-settings";let c=function(e){return e.INTRODUCTION="introduction",e.TOGGLE_SPOTLIGHT="toggle-spotlight",e.MENU_SPOTLIGHT="menu-spotlight",e.NONE="none",e}({});const u="https://support.atlassian.com/confluence-cloud/docs/set-up-and-manage-public-links/",d="https://support.atlassian.com/security-and-access-policies/docs/prevent-public-links/"},410058:(e,s,n)=>{n.d(s,{A:()=>o,v:()=>t});let t=function(e){return e.ANONYMOUS="ANONYMOUS",e.GROUP="GROUP",e.GUEST_USER="GUEST_USER",e.LICENSED_USER="LICENSED_USER",e}({}),o=function(e){return e.ADMINISTER_SPACE="ADMINISTER_SPACE",e.ARCHIVE_PAGE="ARCHIVE_PAGE",e.COMMENT="COMMENT",e.CREATE_ATTACHMENT="CREATE_ATTACHMENT",e.CREATE_EDIT_PAGE="CREATE_EDIT_PAGE",e.EDIT_BLOG="EDIT_BLOG",e.EXPORT_PAGE="EXPORT_PAGE",e.EXPORT_SPACE="EXPORT_SPACE",e.REMOVE_ATTACHMENT="REMOVE_ATTACHMENT",e.REMOVE_BLOG="REMOVE_BLOG",e.REMOVE_COMMENT="REMOVE_COMMENT",e.REMOVE_MAIL="REMOVE_MAIL",e.REMOVE_OWN_CONTENT="REMOVE_OWN_CONTENT",e.REMOVE_PAGE="REMOVE_PAGE",e.SET_PAGE_PERMISSIONS="SET_PAGE_PERMISSIONS",e.VIEW_SPACE="VIEW_SPACE",e}({})},892070:(e,s,n)=>{n.d(s,{K:()=>i,t:()=>o});var t=n(410058);let o=function(e){return e.Groups="groups",e.Users="users",e.Guests="guests",e.AnonymousAccess="anonymous",e.PublicLinks="public-links",e}({});const i={[o.Groups]:t.v.GROUP,[o.Users]:t.v.LICENSED_USER,[o.Guests]:t.v.GUEST_USER,[o.AnonymousAccess]:t.v.ANONYMOUS}},630901:(e,s,n)=>{n.d(s,{NB:()=>o,a4:()=>t,bJ:()=>a,hy:()=>i});const t="confluence.frontend.public.links",o="confluence.frontend.space-perms-uplift.milestone-1",i="space-permissions-tabs",a="confluence.frontend.dlp.classifications"},460487:(e,s,n)=>{n.d(s,{FH:()=>O,KeysOfWebItemsWithExtraUrls:()=>c,MJ:()=>S,T6:()=>L,g8:()=>R,tS:()=>P,vc:()=>r,xz:()=>A});var t=n(570489),o=n(284186),i=n(555813),a=n(179640),l=n(630901);const r="-system.space.tools-integrations";let c=function(e){return e.SPACE_DETAILS_WEBITEM_COMPLETE_KEY="confluence.sections.space.tools.v2:spacedetails",e.GENERAL_PERMISSIONS_WEBITEM_COMPLETE_KEY="confluence.sections.space.tools.v2:spacepermissions",e.ADDON_PERMISSIONS_WEBITEM_COMPLETE_KEY="confluence.sections.space.tools.v2:addonspacepermissions",e.TRASH_WEBITEM_COMPLETE_KEY="confluence.sections.space.tools.v2:trash",e.EXPORT_SPACE_WEBITEM_COMPLETE_KEY="confluence.sections.space.tools.v2:export",e.PDF_EXPORT_WEBITEM_COMPLETE_KEY="com.atlassian.confluence.extra.flyingpdf:configpdf",e}({});const u=`${t.b}/spaces/editspace.action`,d=`${t.b}/spaces/editspacelabels.action`,m=`${t.b}/spaces/editspacepermissions.action`,p=`${t.b}/spaces/editaddonpermissions.action`,E=`${t.b}/pages/restoretrashitem.action`,g=`${t.b}/pages/purgetrashitem.action`,b=`${t.b}/pages/emptytrash.action`,f=`${t.b}/spaces/exportspacehtml.action`,_=`${t.b}/spaces/exportspacexml.action`,v=`${t.b}/spaces/exportspacecsv.action`,T=`${t.b}/spaces/flyingpdf/flyingpdf.action`,y=`${t.b}/spaces/flyingpdf/editpdfconfig.action`,I={[u]:c.SPACE_DETAILS_WEBITEM_COMPLETE_KEY,[d]:c.SPACE_DETAILS_WEBITEM_COMPLETE_KEY,[m]:c.GENERAL_PERMISSIONS_WEBITEM_COMPLETE_KEY,[p]:c.ADDON_PERMISSIONS_WEBITEM_COMPLETE_KEY,[E]:c.TRASH_WEBITEM_COMPLETE_KEY,[g]:c.TRASH_WEBITEM_COMPLETE_KEY,[b]:c.TRASH_WEBITEM_COMPLETE_KEY,[v]:c.EXPORT_SPACE_WEBITEM_COMPLETE_KEY,[f]:c.EXPORT_SPACE_WEBITEM_COMPLETE_KEY,[_]:c.EXPORT_SPACE_WEBITEM_COMPLETE_KEY,[T]:c.EXPORT_SPACE_WEBITEM_COMPLETE_KEY,[y]:c.PDF_EXPORT_WEBITEM_COMPLETE_KEY},M=[o.kk.name,o.kg.name,o.xt.name,o.R7.name,o.f1.name,o.Es.name,o.J3.name,o.aR.name,o.dj.name],P=(e,s)=>{const n=e((null==s?void 0:s.pathname)||"");return(null==n?void 0:n.name)===o.QT.name},O=(e,s,n,t)=>{var i;const a=e((null==s?void 0:s.pathname)||""),l=M;if(n){l.push(o.Ts.name,o.G9.name);const e=l.indexOf(o.dj.name);t&&e>-1&&l.splice(e,1)}return l.includes(null!==(i=null==a?void 0:a.name)&&void 0!==i?i:"")},L=(e,s)=>{const n=e((null==s?void 0:s.pathname)||"");return(null==n?void 0:n.name)===o.Es.name},S=(e,s,n,t)=>{var o,a;return s===(0,i.rh)(e)&&n===e.environmentId&&(null===(o=e.properties)||void 0===o||!o.route||t===(null===(a=e.properties)||void 0===a?void 0:a.route))},A=(e,s)=>{const n=e((null==s?void 0:s.pathname)||"");return(null==n?void 0:n.name)===o.$5.name},R=({matchRoute:e,location:s,webItemSections:n,skip:t})=>{const o=(0,a.T)(l.NB);if(t)return{innerNavigationWebItem:void 0,outerNavigationWebItem:void 0};const i=P(e,s);let c;const u=null==n?void 0:n.find((e=>{const n=null==e?void 0:e.items;return i&&null!=n&&n.length?(null==e?void 0:e.id)===r:!(null==s||!s.pathname)&&(null==n?void 0:n.some(((e,t)=>{var i;if(null!=e&&null!==(i=e.url)&&void 0!==i&&i.includes(s.pathname)){if(s.pathname.startsWith("/wiki/plugins/"))return!!`${s.pathname}${s.search}`.includes(null==e?void 0:e.url)&&(c=e,!0);if(o){const e=`${s.pathname}${s.search}`;for(let s=t;s<n.length;s++){var a;const t=null===(a=n[s])||void 0===a?void 0:a.url;if(t&&e.includes(t))return c=n[s],!0}}return c=e,!0}return!(!I.hasOwnProperty(s.pathname)||(null==e?void 0:e.completeKey)!==I[s.pathname])&&(c=e,!0)})))}));return{innerNavigationWebItem:c,outerNavigationWebItem:u}}},381633:(e,s,n)=>{function t(e){return Boolean(e)}n.d(s,{C:()=>t})},207803:(e,s,n)=>{n.d(s,{D:()=>t});const t=n(779076).ZP`fragment SpaceSettingsWebItemSectionsFragment on Query{webItemSections(location:"system.space.tools" key:$spaceKey){id label cacheKey items{id completeKey label url icon{path}}}space(key:$spaceKey){id key currentUser{isAdmin}}}`},860343:(e,s,n)=>{n.d(s,{qX:()=>K,bu:()=>W,fL:()=>x,G4:()=>D,YP:()=>B,cp:()=>z});var t=n(615919),o=n(840506),i=n(93972),a=n(747472),l=n(284186),r=n(582463),c=n(856389),u=n(483946),d=n(545622),m=n(114774),p=n(988109),E=n(381633),g=n(460487),b=n(179640),f=n(892070),_=n(630901);const v="-system.space.tools-permissions",T="confluence-frontend.",y="space-permissions-users",I="space-permissions-groups",M="space-permissions-guests",P="space-permissions-anonymous-access",{GENERAL_PERMISSIONS_WEBITEM_COMPLETE_KEY:O}=g.KeysOfWebItemsWithExtraUrls,L=(0,i.defineMessages)({spacePermissionsWebItemUsersLink:{id:"space-settings.web-item-section.space-permissions.web-item.users",defaultMessage:"Users"},spacePermissionsWebItemGroupsLink:{id:"space-settings.web-item-section.space-permissions.web-item.groups",defaultMessage:"Groups"},spacePermissionsWebItemGuestsLink:{id:"space-settings.web-item-section.space-permissions.web-item.guests",defaultMessage:"Guests"},spacePermissionsWebItemAnonymousAccessLink:{id:"space-settings.web-item-section.space-permissions.web-item.anonymous-access",defaultMessage:"Anonymous access"},spacePermissionsWebItemSectionTitle:{id:"space-settings.web-item-section.space-permissions.web-item.title",defaultMessage:"Space permissions"}}),S=({space:e,webItemSections:s})=>{const n=(0,a.Z)(),o=null==e?void 0:e.key,i=(0,b.T)(_.NB),{edition:u}=(0,r.D)(),d=u==c.m.FREE;if(!o||!i||d)return s;return((e,s)=>null!=e&&e.length?null==s?void 0:s.map((s=>{if((null==s?void 0:s.id)===v){const n=e=>(null==e?void 0:e.completeKey)==O,o=s.items.findIndex(n);if(-1!==o){const n=[...s.items];return n.splice(o,1,...e),(0,t.Z)((0,t.Z)({},s),{},{items:n})}}return s})):s)([{id:y,label:n.formatMessage(L.spacePermissionsWebItemUsersLink),url:l.$5.toUrl({spaceKey:o,tab:f.t.Users}),completeKey:T+y,icon:null},{id:I,label:n.formatMessage(L.spacePermissionsWebItemGroupsLink),url:l.$5.toUrl({spaceKey:o,tab:f.t.Groups}),completeKey:T+I,icon:null},{id:M,label:n.formatMessage(L.spacePermissionsWebItemGuestsLink),url:l.$5.toUrl({spaceKey:o,tab:f.t.Guests}),completeKey:T+M,icon:null},{id:P,label:n.formatMessage(L.spacePermissionsWebItemAnonymousAccessLink),url:l.$5.toUrl({spaceKey:o,tab:f.t.AnonymousAccess}),completeKey:T+P,icon:null}],s)},A="space-public-links",R=(0,i.defineMessages)({spacePermissionsWebItemPublicLinksLink:{id:"space-settings.web-item-section.space-permissions.web-item.public-links",defaultMessage:"Public links"}}),k=({space:e,webItemSections:s})=>{const n=(0,a.Z)(),i=(0,b.T)(_.a4),{shouldShowLozenge:r,stopLozenge:c}=(0,u.u)("space-settings-landing-page"),m=null==e?void 0:e.key;if(!m||!i)return s;return((e,s)=>e?null==s?void 0:s.map((s=>{if((null==s?void 0:s.id)===v){const[n,...o]=s.items;return(0,t.Z)((0,t.Z)({},s),{},{items:[n,e,...o]})}return s})):s)({id:A,label:n.formatMessage(R.spacePermissionsWebItemPublicLinksLink),url:l.$5.toUrl({spaceKey:m,tab:f.t.PublicLinks}),completeKey:"confluence-frontend."+A,icon:null,lozenge:r?o.createElement(d.Z,null):null,onClick:c},s)};var N=n(140334),h=n(287198);const C=(0,i.defineMessage)({id:"space-settings.web-item-section.space-permissions.web-item.export-space",defaultMessage:"Export space"}),w=({space:e,webItemSections:s})=>{const n=(0,a.Z)(),o=null==e?void 0:e.key,i=null==e?void 0:e.id,{exportPolicyState:r}=(0,N.k)(i);if(!o||!i||r===h.x.LOADING||r===h.x.ENABLED)return s;return((e,s)=>e?null==s?void 0:s.map((s=>{if("-system.space.tools-overview"===(null==s?void 0:s.id)){const n=[...s.items];return n.splice(4,1,e),(0,t.Z)((0,t.Z)({},s),{},{items:n})}return s})):s)({id:"space-export-space",label:n.formatMessage(C),url:l.f1.toUrl({spaceKey:o}),completeKey:null,icon:null},s)},K="com.atlassian.plugins.atlassian-connect-plugin:com.atlassian.addons.automation.confluence__confluence-space-automation-rules",W="-system.space.tools-com.atlassian.addons.automation.confluence__space-automation",x="space-automation-section",D="space-public-links",{GENERAL_PERMISSIONS_WEBITEM_COMPLETE_KEY:G}=g.KeysOfWebItemsWithExtraUrls,U=(0,i.defineMessages)({automationWebItemSectionTitle:{id:"space-settings.web-item-section.automation-title",defaultMessage:"Automation"},automationWebItemRulesLink:{id:"space-settings.web-item-section.automation.web-item.rules-link",defaultMessage:"Rules"},automationWebItemAuditLogLink:{id:"space-settings.web-item-section.automation.web-item.audit-log-link",defaultMessage:"Audit Log"},automationWebItemRuleTemplatesLink:{id:"space-settings.web-item-section.automation.web-item.rule-templates-link",defaultMessage:"Templates"},automationWebItemUsageLink:{id:"space-settings.web-item-section.automation.web-item.usage-link",defaultMessage:"Usage"}}),B=e=>e.id===W||e.id===x,$=({space:e,webItemSections:s})=>{const n=(0,a.Z)(),t=null==e?void 0:e.key,{edition:o}=(0,r.D)(),i=Boolean(null==e?void 0:e.currentUser.isAdmin)&&o===c.m.PREMIUM;if(!t||!i)return s;return((e,s)=>{const n=null==s?void 0:s.filter(E.C).filter((e=>!B(e)));return e?null==n?void 0:n.concat(e):n})({id:x,label:n.formatMessage(U.automationWebItemSectionTitle),items:[{id:"space-automation-rules",label:n.formatMessage(U.automationWebItemRulesLink),url:l.dj.toUrl({spaceKey:t}),completeKey:null,icon:null},{id:"space-automation-audit-log",label:n.formatMessage(U.automationWebItemAuditLogLink),url:l.dj.toUrl({spaceKey:t},{hash:"#/tab/audit-log"}),completeKey:null,icon:null},{id:"space-automation-rule-library",label:n.formatMessage(U.automationWebItemRuleTemplatesLink),url:l.dj.toUrl({spaceKey:t},{hash:"#/tab/rule-library"}),completeKey:null,icon:null},{id:"space-automation-usage",label:n.formatMessage(U.automationWebItemUsageLink),url:l.dj.toUrl({spaceKey:t},{hash:"#/tab/usage"}),completeKey:null,icon:null}],cacheKey:null},s)},Z=({webItemSections:e})=>{const{shouldShowLozenge:s,stopLozenge:n}=(0,u.u)("space-settings-sidebar"),[i,,a]=(0,p.w)();return null==e?void 0:e.map((e=>{if("-system.space.tools-permissions"===(null==e?void 0:e.id)){const l=e.items.map((e=>((null==e?void 0:e.completeKey)||(null==e?void 0:e.id))===G?(0,t.Z)((0,t.Z)({},e),{},{lozenge:i?o.createElement(m.F,null):null}):e)),r=s?o.createElement(d.Z,null):i?o.createElement(m.F,null):null;return(0,t.Z)((0,t.Z)({},e),{},{items:l,lozenge:r,onClick:n,error:a})}return e}))},z=e=>{const s=null==e?void 0:e.space;return[$,k,S,Z,w].reduce(((e,n)=>n({space:s,webItemSections:e})),null==e?void 0:e.webItemSections)}},522970:(e,s,n)=>{n.d(s,{W_:()=>d,Wr:()=>r,te:()=>u});var t=n(840506),o=n(54685),i=n(9019),a=n(940155);const l=(0,a.ui)({__loadable_id__:"mQlTb",name:"TrialFlagsLoadable",loader:async()=>(await Promise.all([n.e(4518),n.e(2992)]).then(n.bind(n,915480))).TrialFlags}),r=(0,o.P)({attribution:i.x.CC_ONBOARDING})((()=>t.createElement(l,null))),c=(0,a.ui)({__loadable_id__:"FaL3Q",name:"TrialActionMenuLoadable",loader:async()=>(await Promise.all([n.e(12705),n.e(54936),n.e(11216),n.e(61769),n.e(14248),n.e(21488),n.e(84185),n.e(25520),n.e(4518),n.e(82392),n.e(15576),n.e(71524)]).then(n.bind(n,374962))).ActionMenu}),u=(0,o.m)({attribution:i.x.CC_ONBOARDING})((()=>t.createElement(c,null))),d=(0,a.ui)({__loadable_id__:"_0oeH",name:"PremiumLozengeLoadable",loader:async()=>(await n.e(99783).then(n.bind(n,750189))).PremiumLozenge})},480963:(e,s,n)=>{n.d(s,{Z:()=>c});var t=n(840506),o=n(789085),i=n(723177),a=n(429762);const l=(0,i.tu)({display:"inline-flex",borderRadius:"border.radius",blockSize:"min-content",position:"static",overflow:"hidden"}),r=(0,t.memo)((({children:e,testId:s,isBold:n=!1,appearance:i="default",maxWidth:r=200,style:c})=>{const m=n?"bold":"subtle",p=i in u[m]?i:"default",E="string"==typeof r?r:`${r}px`,g="string"==typeof r&&/%$/.test(r);return t.createElement(a.Z,{as:"span",backgroundColor:u[m][p],style:{backgroundColor:null==c?void 0:c.backgroundColor,maxWidth:g?r:"100%"},paddingInline:"space.050",xcss:l,testId:s},t.createElement(o.Z,{fontSize:"size.050",fontWeight:"bold",lineHeight:"lineHeight.100",textTransform:"uppercase",color:d[m][p],shouldTruncate:!0,UNSAFE_style:{color:null==c?void 0:c.color,maxWidth:g?"100%":`calc(${E} - var(--ds-space-100, 8px))`},testId:s&&`${s}--text`},e))}));r.displayName="Lozenge";const c=r,u={bold:{default:"color.background.neutral.bold",inprogress:"color.background.information.bold",moved:"color.background.warning.bold",new:"color.background.discovery.bold",removed:"color.background.danger.bold",success:"color.background.success.bold"},subtle:{default:"color.background.neutral",inprogress:"color.background.information",moved:"color.background.warning",new:"color.background.discovery",removed:"color.background.danger",success:"color.background.success"}},d={bold:{default:"inverse",inprogress:"inverse",moved:"warning.inverse",new:"inverse",removed:"inverse",success:"inverse"},subtle:{default:"subtle",inprogress:"information",moved:"warning",new:"discovery",removed:"danger",success:"success"}}}}]);
//# sourceMappingURL=43470.tFqhJG3E7c.js.map