"use strict";(self._cf=self._cf||[]).push([[15682,98114,52863],{694395:(e,t,n)=>{n.d(t,{L:()=>o});const o=(e,t)=>(null==e?void 0:e.isDefaultPrevented())&&(Boolean(null==t?void 0:t.shouldCheckIframe)&&a()||i(e)||s(e)),a=()=>window.parent!==parent,s=e=>1===(null==e?void 0:e.nativeEvent).button,i=e=>{const t=null==e?void 0:e.nativeEvent;return t.ctrlKey||t.metaKey}},650473:(e,t,n)=>{n.d(t,{t:()=>r});var o=n(840506),a=n(230475),s=n(734233),i=n(495302),l=n(694395);const r=()=>{const{push:e,open:t}=(0,o.useContext)(s.M),n=(0,o.useCallback)(((n,o)=>{null!=n&&n.isDefaultPrevented()||null==n||n.preventDefault(),(0,l.L)(n)?t(o,"_blank"):e(o)}),[t,e]);return(0,o.useMemo)((()=>(0,a.O)()?{mention:{onClick:async(e,t,o)=>{null==o||o.preventDefault(),null==o||o.stopPropagation();const a=await(0,i.Rq)(e);n(o,a)}},link:{onClick(e,t){n(e,t)}},smartCard:{onClick(e,t){n(e,t)}}}:void 0),[n])}},298100:(e,t,n)=>{n.d(t,{fQ:()=>u});var o=n(615919),a=n(840506),s=n(167347),i=n(734233),l=n(487696),r=n(614889);const c=n(779076).ZP`query CommentLocationQuery($commentId:ID){comments(commentId:$commentId){nodes{container{id}location{type}}}}`,m=(0,r.j)("comment-query-params"),d=({location:e}={})=>{var t,n;const{getQueryParams:r,setQueryParams:d}=(0,a.useContext)(i.M),{contentId:u}=(0,a.useContext)(l.z1),{focusedCommentId:p,editComment:f,commentId:v,replyToComment:y,showCommentArea:h,shouldMention:b}=r(),_=p||y||f&&v,g=!_||!e,{data:w,error:Z}=(0,s.aM)(c,{variables:{commentId:_},skip:g});let E,O,C;Z&&m.error`Error: Unable to query comment location for ${v}`;const k=null==w||null===(t=w.comments)||void 0===t||null===(t=t.nodes)||void 0===t||null===(t=t[0])||void 0===t||null===(t=t.location)||void 0===t?void 0:t.type,T=null==w||null===(n=w.comments)||void 0===n||null===(n=n.nodes)||void 0===n||null===(n=n[0])||void 0===n||null===(n=n.container)||void 0===n?void 0:n.id;e&&e!==k||u!==T||(E=p||void 0,O=f&&"true"===f&&v?v:void 0,C=y||void 0);const x="true"===h,N="true"===b&&void 0!==C;return{focusedCommentId:E,editCommentId:O,replyToCommentId:C,shouldOpenNewCommentEditor:x,shouldMentionInNewCommentEditor:N,removeCommentQueryParams:()=>{let e,t,n;if(E?e="focusedCommentId":N?(e="replyToComment",n="shouldMention"):C?e="replyToComment":O?(e="editComment",t="commentId"):x&&(e="showCommentArea"),e||t||n){const a=r();d((0,o.Z)((0,o.Z)({},a),{},{[e]:void 0,[t]:void 0,[n]:void 0}))}}}},u=()=>d({location:"INLINE"})},796259:(e,t,n)=>{n.d(t,{$F:()=>u,M6:()=>h,Mh:()=>o,W9:()=>v,_8:()=>f,fH:()=>d,fo:()=>y,lf:()=>r,rx:()=>m,uV:()=>a,w:()=>c});const o="data-id",a="data-ref",s=e=>"paragraph"!==e.type||i(e),i=e=>!!e.content&&e.content.some(l),l=e=>"text"!==e.type||""!==e.text.trim(),r=e=>!e||!(e=>{const t=e&&e.content;return t&&t.some(s)})(e),c=e=>{let t=null;return e&&(t=e.getAttribute(o),t||(t=e.getAttribute(a))),t},m=(e,t="")=>e?document.querySelector(`${t} [${o}="${e}"], ${t} [${a}="${e}"]`):null,d=e=>document.querySelectorAll(`[${o}="${e}"], [${a}="${e}"]`),u=["enter","escape"],p=()=>{try{var e,t,n,o;return{currentWindowHeight:window.innerHeight||(null!==(e=null===(t=window.top)||void 0===t?void 0:t.innerHeight)&&void 0!==e?e:0),currentPageOffset:window.scrollY||(null!==(n=null===(o=window.top)||void 0===o?void 0:o.scrollY)&&void 0!==n?n:0)}}catch(a){return{currentWindowHeight:0,currentPageOffset:0}}},f=(e,t=!1,n=!1)=>{if(!e)return;const{currentWindowHeight:o,currentPageOffset:a}=p(),s=h(e)+e.offsetHeight+(n?-250:0);if(s<=a||s>a+o*(2/3)){const e=o/5;window.scrollTo({top:s-e,behavior:t?"instant":"smooth"})}},v=(e,t,n=!1,o=!1)=>{var a;if(!e)return;const{currentWindowHeight:s,currentPageOffset:i}=p(),l=h(e)+e.offsetHeight+(o?-250:0),r=(null===(a=document.querySelector("#content .ak-renderer-wrapper"))||void 0===a?void 0:a.offsetTop)||0;if(l+r<=i||l+r>i+s*(2/3)){const e=t?s/5:s/3;window.scrollTo({top:l-e,behavior:n?"instant":"smooth"})}_(e,t)},y=(e,t,n)=>{if(!e)return;const o=document.getElementById("inline-comment-sidebar"),a=null==o?void 0:o.getBoundingClientRect(),s=document.getElementById("content"),i=null==s?void 0:s.getBoundingClientRect().top,l=a&&i&&a.top<i+window.scrollY,r=a&&a.top+200>window.innerHeight;if(l||r)return void v(e,n);const c=t?h(t):0,m=h(e)-c;window.scrollBy({top:m,behavior:"smooth"}),_(e,n)},h=(e,t)=>{let n=0,o=e;for(o&&o.closest&&o.closest(".pm-table-sticky-wrapper")&&(o=(e=>{let t=e;const n=c(t);return n&&(t=m(n,".pm-table-wrapper")),t})(o));o&&!o.classList.contains("ak-renderer-wrapper")&&o!==t;)n+=o.offsetTop,o=o.offsetParent;if(o){const e=o.closest(".ak-renderer-extension");e&&(n+=e.offsetTop)}return n},b=(e,t)=>{var n;const o=null!=e&&e.hasChildNodes()?null==e?void 0:e.firstChild:e;var a;if(t){if("button"===(null==o||null===(a=o.tagName)||void 0===a?void 0:a.toLowerCase()))return o}else if(null!=o&&null!==(n=o.classList)&&void 0!==n&&n.contains("expand-control"))return null==o?void 0:o.firstChild;return null},_=(e,t)=>{var n,o,a,s;let i=e;const l=t?".expand-content-wrapper":".expand-content";let r=null;if(null!==(n=i)&&void 0!==n&&null!==(o=n.closest)&&void 0!==o&&o.call(n,l)||null!==(a=i)&&void 0!==a&&null!==(s=a.closest)&&void 0!==s&&s.call(a,".nestedExpand-content-wrapper")){for(;i&&(r=b(i,t),!b(i,t));){var c;i=null===(c=i)||void 0===c?void 0:c.parentElement}r&&(t&&"false"===r.getAttribute("aria-expanded")||!t&&!1===r.className.includes("expanded"))&&r.click()}}},837879:(e,t,n)=>{n.d(t,{K:()=>o,T:()=>a});const o=e=>"taskSuccess"===e.action||"taskAbort"===e.action||"taskFail"===e.action,a=(e,...t)=>t.includes(e.name)},570533:(e,t,n)=>{n.d(t,{f:()=>a,g:()=>s});var o=n(837879);const a=e=>{const t=new Set(e);return(e,n)=>{n.stopOn(e.find((e=>t.has(e.name)&&("taskFail"===e.action||"taskAbort"===e.action))),{incompleteSubExperiences:[...t].join(", ")}),e.forEach((e=>{(0,o.K)(e)&&t.delete(e.name)})),0===t.size&&n.succeed()}},s=e=>(t,n)=>n.stopOn(t.find((t=>(0,o.K)(t)&&(0,o.T)(t,...e))))},736623:(e,t,n)=>{n.d(t,{tS:()=>E,Vx:()=>O,LP:()=>k,L7:()=>C});var o=n(615919),a=n(263849),s=n.n(a),i=n(293413),l=n(357261),r=n(284186),c=n(201484),m=n(400318),d=n(837879),u=n(190713),p=n(132464),f=n(570533);const v=()=>{(0,p.OV)().start({name:m.QDQ,collect:y})},y=(e,t)=>{t.stopOn(h(e,"taskSuccess")),t.stopOn(h(e,"taskFail"))},h=(e,t)=>e.find((e=>e.action===t&&(0,d.T)(e,m.pXy)));function b(e){const t=new Set([m.GmL,m.GKU,m.tki,m.Psd,m.VEI]),n=null==e?void 0:e.featureFlagClient.getBooleanValue("confluence.frontend.home-visual-refresh",{default:!1});return(e,o)=>{o.stopOn(e.find((e=>("taskFail"===e.action||"taskAbort"===e.action)&&t.has(e.name))));let a=!1,s=!1;e.forEach((e=>{(0,d.K)(e)&&(n?(t.has(e.name)&&(a=!0),e.name===m.Vfb&&"taskSuccess"===e.action&&(s=!0)):t.has(e.name)&&o.succeed())})),a&&s&&o.succeed()}}const _=(0,f.g)([m.Oxv,m.$qG,m.iOO,m.Ygb]),g=(0,f.g)([m.rDe]),w=[],Z={[m.dc_]:[r.uV.name,r.tz.name,r.zh.name,r.ri.name],[m.ibm]:[r.At.name],[m.sZu]:[r.DN.name]},E={[r.y4.name]:"space",[r.N4.name]:"page",[r.uV.name]:"page",[r.tz.name]:"blog",[r.SM.name]:"page",[r.S1.name]:"blog",[r.nM.name]:"blog"},O=e=>{switch(e){case r.ri.name:case r.zh.name:return"TINY";default:return"FABRIC"}};function C(e,t,n){if(!e)return;const o=(0,p.OV)(),a=null==n?void 0:n.featureFlagClient.getBooleanValue("confluence.frontend.create-page-experience-fix",{default:!1});w.forEach((t=>{if(a){const n=Z[t];if(n&&n.includes(e.name))return}o.abort({name:t,reason:"Aborted due to SPA started a new experience"})})),w.length=0;const y=o.subscribe((e=>{"taskStart"===e.action&&w.push(e.name)}));switch(e.name){case r.N4.name:case r.uV.name:case r.tz.name:case r.zh.name:case r.ri.name:!function(e,t,n){const o=(null==n?void 0:n.featureFlagClient)&&(0,c.R)(null==n?void 0:n.featureFlagClient);k({name:e.name===r.N4.name?m.irH:m.pXy,id:e.params.contentId,startTime:0===t?0:void 0,attributes:{editor:O(e.name),contentType:E[e.name],edition:null==n?void 0:n.edition,shard:null==n?void 0:n.shard,isEditInContextEnabled:o},collect:(e,t)=>{_(e,t),T(e,t)}},{name:m._w6,collect:(e,t)=>{_(e,t);const n=e.find((e=>(0,d.K)(e)&&e.name===m.nAo));var o;n&&t.abort({reason:"Editor closed before load completed",attributes:{closeExperienceState:null!==(o=null==n?void 0:n.action)&&void 0!==o?o:"incomplete"}})}},{name:m.maG})}(e,t,n);break;case r.SM.name:case r.S1.name:case r.nM.name:x(e.params.contentId,t,E[e.name],e.query,n);break;case r.xL.name:!function(e,t,n){"public-links"!==e||t||(0,p.OV)().start({name:m.w1t,id:"public-links",startTime:0===n?0:void 0,timeout:u.O.PAGE_LOAD})}(e.query.tab,e.query.space,t);break;case r.LH.name:!function(e,t){(0,p.OV)().start({name:m.iWJ,id:e,startTime:0===t?0:void 0,timeout:u.O.PAGE_LOAD})}(e.params.id,t);break;case r.y4.name:x(e.params.spaceKey,t,E[e.name],e.query,n);break;case r.Ch.name:!function(e){(0,p.OV)().start({name:m.O$N,collect:b(e)})}(n);break;case r.jT.name:case r.mE.name:N(e.params.contentId,t);break;case r.Xu.name:case r.zo.name:N(void 0,t);break;case r.Sd.name:!function(e){(0,p.OV)().start({name:m.GR8,id:(0,i.S)(s()(e.query,["search_id"]))})}(e);break;case r.G9.name:(0,p.OV)().start({name:m.Nbm});break;case r.Ts.name:(0,p.OV)().start({name:m.Dqf});break;case r.F.name:(0,p.OV)().start({name:m._5v,timeout:u.O.SPACE_DIRECTORY});break;case r.z8.name:!function(){const e=[m.H_2,m.w5S,m.IL7,m.DUY],t=(t,n)=>{(0,f.f)(e)(t,n)},n=(0,f.f)([m.$qG]);(0,p.OV)().start({name:m.z0u,timeout:u.O.DEFAULT,collect:(e,o)=>{t(e,o),n(e,o)}})}();break;case r.dd.name:(0,p.OV)().start({name:m.oz6});break;case r.At.name:!function(e){const t=[m.nCo,m.Opm,m.p3J],n=e.params.contentId;(0,p.OV)().start({name:m.J99,collect:(e,n)=>{(0,f.f)(t)(e,n),_(e,n)},id:n,timeout:u.O.DEFAULT}),t.forEach((e=>{(0,p.OV)().start({name:e,id:n})}))}(e);break;case r.DN.name:!function(e){const t=[m.CB3,m.Opm];(0,p.OV)().start({name:m.TOW,collect:(e,n)=>{(0,f.f)(t)(e,n),_(e,n)},id:e,timeout:u.O.DEFAULT}),t.forEach((t=>{(0,p.OV)().start({name:t,id:e})}))}(e.params.contentId);break;case r.aY.name:!function(e){const t=[m.YpO,m.Opm];(0,p.OV)().start({name:m.T$t,collect:(e,n)=>{(0,f.f)(t)(e,n),_(e,n)},id:e,timeout:u.O.DEFAULT}),t.forEach((t=>{(0,p.OV)().start({name:t,id:e})}))}(e.params.contentId);break;case r.$5.name:"public-links"===e.query.tab&&(0,p.OV)().start({name:m.II7,timeout:u.O.PAGE_LOAD});break;case r.UG.name:(0,p.OV)().start({name:m.nbt,timeout:u.O.DEFAULT});break;case r.nQ.name:(0,p.OV)().start({name:m.Ko8,timeout:u.O.DEFAULT})}const h=()=>{e.name===r.Rs.name?function(e,t){var n;const o=e.query,a=void 0!==(null===(n=o.spaceKey)||void 0===n?void 0:n[0])?("~"===o.spaceKey[0]).toString():"unknown",s=(0,l.r)(o,"source")||"createContentRoute";"whiteboard"===e.params.contentType?(0,p.OV)().start({name:m.ibm,timeout:u.O.CREATE_CONTENT,attributes:{flow:s,isPersonalSpace:a},collect:(e,t)=>{e.find((e=>"taskStart"===e.action&&e.name===m.J99))&&t.succeed()}}):"database"===e.params.contentType?(0,p.OV)().start({name:m.sZu,timeout:u.O.CREATE_CONTENT,attributes:{flow:s,isPersonalSpace:a},collect:(e,t)=>{e.find((e=>"taskStart"===e.action&&e.name===m.TOW))&&t.succeed()}}):["page","blog"].includes(e.params.contentType)&&(0,p.OV)().start({name:m.dc_,timeout:u.O.CREATE_CONTENT,attributes:{contentType:e.params.contentType,flow:s,isCreateContentRoute:!0,isPersonalSpace:a,edition:null==t?void 0:t.edition,shard:null==t?void 0:t.shard},collect:(e,t)=>{e.find((e=>"taskStart"===e.action&&e.name===m.pXy))&&t.succeed()}})}(e,n):e.query.createDialog&&(!function(e,t){const n=(0,p.OV)();n.start({name:m.dc_,id:e,startTime:0===t?0:void 0,collect(e,t){t.stopOn(e.find((e=>"taskFail"===e.action&&(0,d.T)(e,m.zTe,m.I3F)))),t.stopOn(e.find((e=>"taskSuccess"===e.action&&(0,d.T)(e,m.I3F)))),t.stopOn(e.find((e=>"taskAbort"===e.action&&(0,d.T)(e,m.I3F))))}}),n.start({name:m.zTe,id:e,timeout:u.O.CREATE_DIALOG_LOAD})}(String(t),t),v())};a?(h(),y()):(y(),h())}function k(e,t,n){const a=(0,p.OV)();a.start((0,o.Z)((0,o.Z)({},e),{},{collect:(o,a)=>{a.stopOn(o.find((({action:e,name:n})=>"taskFail"===e&&n===t.name))),a.stopOn(o.find((({action:e,name:t})=>("taskSuccess"===e||"taskFail"===e)&&t===n.name))),e.collect&&e.collect(o,a)}})),a.start((0,o.Z)((0,o.Z)({},t),{},{id:t.id||e.id,timeout:t.timeout||u.O.EDITOR_LOAD,attributes:e.attributes,collect:t.collect}))}const T=(e,t)=>{const n=e.find((e=>e.name===m._w6&&(0,d.K)(e))),o=e.find((e=>e.name===m.nAo&&(0,d.K)(e)));var a;o&&(n&&"taskSuccess"===n.action||"taskSuccess"!==o.action?t.stopOn(o):t.abort({reason:"Editor closed before load completed",attributes:{loadExperienceState:null!==(a=null==n?void 0:n.action)&&void 0!==a?a:"incomplete"}}))};function x(e,t,n,o,a){const s=Boolean(o&&o.atlOrigin);(0,p.OV)().start({name:m.bbO,id:e,startTime:0===t?0:void 0,timeout:u.O.PAGE_LOAD,attributes:{contentType:n,isFromExternal:s,edition:null==a?void 0:a.edition,shard:null==a?void 0:a.shard},collect:(e,t)=>{_(e,t),g(e,t)}})}function N(e,t){k({name:m.T2Y,id:e,startTime:0===t?0:void 0,collect:(e,t)=>{t.stopOn(e.find((e=>(0,d.K)(e)&&e.name===m._c)))}},{name:m.yTI,timeout:u.O.TEMPLATE_EDITOR_LOAD},{name:m.NYz})}},594877:(e,t,n)=>{n.d(t,{Jx:()=>c,Sp:()=>r,Uy:()=>a,hm:()=>l,ns:()=>s,oz:()=>i});var o=n(940155);(0,o.y$)({__loadable_id__:"wd-Fj",name:"GuestRequestToUpgradeToUser",loader:async()=>(await Promise.all([n.e(12705),n.e(11216),n.e(14248),n.e(21488),n.e(84185),n.e(31990),n.e(60278)]).then(n.bind(n,614884))).GuestRequestToUpgradeToUser});const a=(0,o.ui)({__loadable_id__:"MvJA3",name:"GuestRequestToUpgradeDialog",loader:async()=>(await Promise.all([n.e(12705),n.e(11216),n.e(14248),n.e(21488),n.e(84185),n.e(31990),n.e(49872)]).then(n.bind(n,98740))).GuestRequestToUpgradeLearnMoreModal}),s=(0,o.ZR)({__loadable_id__:"1rO66",name:"ExternalCollaboratorUserLozenge",loader:async()=>(await Promise.all([n.e(11216),n.e(32072),n.e(78363)]).then(n.bind(n,336712))).ExternalUserLozenge}),i=((0,o.ZR)({__loadable_id__:"W0gpp",name:"ExternalCollaboratorGroupLozenge",loader:async()=>(await Promise.all([n.e(11216),n.e(32072),n.e(39007)]).then(n.bind(n,151532))).ExternalGroupLozenge}),(0,o.ZR)({__loadable_id__:"Zgy18",name:"ExternalCollaboratorSpaceLozenge",loader:async()=>(await Promise.all([n.e(11216),n.e(32072),n.e(10895)]).then(n.bind(n,340040))).ExternalSpaceLozenge})),l=((0,o.ZR)({__loadable_id__:"0uyQW",name:"CommentAddPromptNudgeText",loader:async()=>(await n.e(65322).then(n.bind(n,218248))).CommentAddPromptNudgeText}),(0,o.ZR)({__loadable_id__:"xlw_R",name:"RequestAccessForUnassignedGuest",loader:async()=>(await Promise.all([n.e(12705),n.e(27175)]).then(n.bind(n,837119))).RequestAccessForUnassignedGuest})),r=(0,o.ui)({__loadable_id__:"c8RRJ",name:"GuestSatisfactionSurveyWrapper",loader:async()=>(await n.e(73329).then(n.bind(n,870408))).GuestSatisfactionSurveyWrapper}),c=(0,o.ui)({__loadable_id__:"xPRzx",name:"GuestOnboardingModalLoadable",loader:async()=>(await Promise.all([n.e(12705),n.e(11216),n.e(14248),n.e(21488),n.e(84185),n.e(89964)]).then(n.bind(n,870847))).GuestOnboardingModal})},898039:(e,t,n)=>{n.d(t,{u:()=>y});var o=n(615919),a=n(840506),s=n(93972),i=n(747472),l=n(142807),r=n(346568),c=n(293724),m=n(16728),d=n(332072),u=n(15325),p=n(219263),f=n(40994);const v=(0,s.defineMessages)({nextCommentLabel:{id:"inline-comments-common.next-comment-label",defaultMessage:"Next Comment"},previousCommentLabel:{id:"inline-comments-common.previous-comment-label",defaultMessage:"Previous Comment"},nextCommentToolTip:{id:"inline-comments-common.next-comment-tooltip",defaultMessage:"Next comment (N)"},previousCommentToolTip:{id:"inline-comments-common.previous-comment-tooltip",defaultMessage:"Previous comment (P)"}}),y=({currentCommentIndex:e,commentsCount:t,isSSRFocusedComment:n,goToNextInlineComment:s,goToPrevInlineComment:y,allowShortcuts:h=!0})=>{const{formatMessage:b}=(0,i.Z)(),_=()=>{};return a.createElement(f.tS,{"data-testid":"comment-navigation-container"},a.createElement(d.Z,{content:h?a.createElement(l.Z,(0,o.Z)({},v.previousCommentToolTip)):a.createElement(l.Z,(0,o.Z)({},v.previousCommentLabel)),hideTooltipOnClick:!0,position:"top"},a.createElement(f.xV,{isSSRFocusedComment:n,"data-cy":"inline-nav-previous",testId:"comment-navigation-prev",iconBefore:a.createElement(r.default,{label:b(v.previousCommentLabel),primaryColor:`var(--ds-icon-subtle, ${m.iw})`,size:"medium"}),onClick:n?_:y})),a.createElement(d.Z,{content:h?a.createElement(l.Z,(0,o.Z)({},v.nextCommentToolTip)):a.createElement(l.Z,(0,o.Z)({},v.nextCommentLabel)),hideTooltipOnClick:!0,position:"top"},a.createElement(f.xV,{isSSRFocusedComment:n,"data-cy":"inline-nav-next",testId:"comment-navigation-next",iconBefore:a.createElement(c.default,{label:b(v.nextCommentLabel),primaryColor:`var(--ds-icon-subtle, ${m.iw})`,size:"medium"}),onClick:n?_:s})),h&&a.createElement(p.E,{accelerator:[u.NEXT_COMMENT_SHORTCUT,u.PREV_COMMENT_SHORTCUT],listener:e=>(e=>{e&&(e.key===u.NEXT_COMMENT_SHORTCUT?s():e.key===u.PREV_COMMENT_SHORTCUT&&y())})(e)}),-1===e?null:"number"==typeof e&&"number"==typeof t?a.createElement("span",{"data-testid":"comment-index-and-counts"},`${e+1} of ${t}`):null)};y.displayName="CommentNavigation"},547175:(e,t,n)=>{n.d(t,{a:()=>o});const o=(0,n(93972).defineMessages)({invalidHighlight:{id:"inline-comments-common.error.invalid.highlight",defaultMessage:"We’re having trouble adding your comment. Try highlighting more or less text."},staleContent:{id:"inline-comments-common.error.stale.content",defaultMessage:"Refresh the page to see the latest updates, and try adding your comment again."},viewNotPermitted:{id:"inline-comments-common.error.view.not.permitted",defaultMessage:"Your permission settings don’t allow you to view the comment. Check with your administrator if you need this ability."},createNotPermitted:{id:"inline-comments-common.error.create.not.permitted",defaultMessage:"You can’t create comments in this space. A space admin can modify your permissions."},contentHasBeenRemoved:{id:"inline-comments-common.error.create.content.removed",defaultMessage:"The text you highlighted has already been deleted by someone else. Refresh the page to see the latest update."},deleteNotPermitted:{id:"inline-comments-common.error.delete.not.permitted",defaultMessage:"You can’t delete comments in this space. A space admin can modify your permissions."},deleteWithRepliesNotAllowed:{id:"inline-comments-common.error.delete.with.replies",defaultMessage:"You can’t delete this comment anymore because someone else replied to it. Refresh the page to see replies."},commentAlreadyDeleted:{id:"inline-comments-common.error.comment.already.deleted",defaultMessage:"This comment has already been deleted by someone else. Refresh the page to see the latest update."},resolveNotPermitted:{id:"inline-comments-common.error.resolve.not.permitted",defaultMessage:"You can’t resolve comments in this space. A space admin can modify your permissions."},editNotPermitted:{id:"inline-comments-common.error.edit.not.permitted",defaultMessage:"You can’t edit comments in this space. A space admin can modify your permissions."},replyNotPermitted:{id:"inline-comments-common.error.reply.not.permitted",defaultMessage:"You can’t reply to comments in this space. A space admin can modify your permissions."},replyNotAllowedParentDeleted:{id:"inline-comments-common.error.reply.not.allowed.parent.deleted",defaultMessage:"You can’t reply to this comment because it was just deleted by someone else. Refresh the page to see the latest update."},unableToMarkDOM:{id:"inline-comments-common.error.unable.to.mark.dom",defaultMessage:"Your comment has been successfully created. Refresh the page to see it."},unexpectedError:{id:"inline-comments-common.error.unexpected",defaultMessage:"Something went wrong when saving this comment. Close the comment or refresh the page, and try adding your comment again."},actionNotPermittedTitle:{id:"inline-comments-common.error.action.not.permitted.title",defaultMessage:"Unauthorized Action"},actionNotPermitted:{id:"inline-comments-common.error.action.not.permitted",defaultMessage:"You can’t perform that action on inline comments in this space. A space admin can modify your permissions."},cannotReplyToResolvedComment:{id:"inline-comments-common.error.cannot.reply.to.resolved",defaultMessage:"You can't reply to this comment because it was recently resolved by another user. Reload the page to refresh the inline comments on it."},cannotUpdateResolvedComment:{id:"inline-comments-common.error.cannot.update.resolved",defaultMessage:"You can't edit this comment because it was recently resolved by another user. Reload the page to refresh the inline comments on it."},unableToGenerateStep:{id:"inline-comments-common.error.unable.to.generate.step",defaultMessage:"You can’t create a comment because something went wrong with your highlight. Close this window and create a new highlight."},contentOutOfDate:{id:"inline-comments-common.error.content.out.of.date",defaultMessage:"You can‘t create a comment because a new version of the page has been published."},a11yCommentLabel:{id:"inline-comments-common.a11y.comment.wrapper.label",defaultMessage:"Comment by {username}"},copyLinkTooltip:{id:"inline-comments-common.tooltip.copy.link",defaultMessage:"Copy link to comment"},linkCopiedTooltip:{id:"inline-comments-common.tooltip.link.has.been.copied",defaultMessage:"Copied!"},resolve:{id:"inline-comments-common.view.action.resolve",defaultMessage:"Resolve"},edit:{id:"inline-comments-common.view.action.edit",defaultMessage:"Edit"},delete:{id:"inline-comments-common.view.action.delete",defaultMessage:"Delete"},replyPlaceholder:{id:"inline-comments-common.reply.placeholder",defaultMessage:"Reply"},sampleAuthor:{id:"inline-comments-common.sample.comment.author",defaultMessage:"Confluence"},sampleBody:{id:"inline-comments-common.sample.comment.body",defaultMessage:"Highlight content to add an inline comment. All viewers can see these, so it's great for targeted discussion on a specific word or phrase"},sampleReply:{id:"inline-comments-common.sample.reply.input",defaultMessage:"disabled reply input"},sampleReplyPlaceholder:{id:"inline-comments-common.sample.reply.placeholder",defaultMessage:"Reply"},sampleReplyTooltip:{id:"inline-comments-common.sample.reply.tooltip",defaultMessage:"Reply is unavailable for sample comments"},sampleDeleteHeader:{id:"inline-comments-common.sample.comment.delete.header",defaultMessage:"Only you can see this."},sampleDeleteIcon:{id:"inline-comments-common.sample.comment.delete.icon",defaultMessage:"Delete icon"},sampleDeleteTooltip:{id:"inline-comments-common.sample.comment.delete.tooltip",defaultMessage:"Delete sample comment"},sampleCloseIconLabel:{id:"inline-comments-common.sample.comment.delete.icon.label",defaultMessage:"Close sample comment"},collapsedRepliesMore:{id:"inline-comments-common.collapsed.replies.more",defaultMessage:"{numCollapsedReplies} more replies"}})},40994:(e,t,n)=>{n.d(t,{$l:()=>L,KN:()=>T,L2:()=>q,LJ:()=>S,Lv:()=>N,Mr:()=>V,Nf:()=>A,PZ:()=>F,_G:()=>x,bX:()=>$,ff:()=>R,s0:()=>M,tS:()=>I,xV:()=>D,xX:()=>z});var o=n(615919),a=n(872342),s=n(840506),i=n(920839),l=n(767001),r=n(16728),c=n(328167);const m=["as","style"],d=["as","style"],u=["isInlineEdit","isAutoDismissResolve"],p=["as","style"],f=["as","style"],v=["as","style"],y=["as","style"],h=["as","style"],b=["isReply"],_=["as","style"],g=["as","style"],w=["shouldShowNavigation","isReattachHeader"],Z=["as","style"],E=["as","style"],O=["showNavigation"],C=["as","style"],k=["as","style"];n(592559),n(391329),n(234416),n(227607),n(621863),n(652430),n(374914),n(114486),n(777264),n(412919),n(878660),n(710797),n(362604),n(32909),n(521654),n(953305),n(311192),n(646558),n(731770),n(323168),n(558491),n(884620),n(523074),n(287131),n(684791),n(567817),n(677434),n(943968),n(827862),n(967784),n(197612),n(435432),n(55116),n(182266),n(286200),n(410613),n(813946),n(939872),n(94974),n(457030),n(117978),n(90455),n(467779),n(320374),n(133642),n(112044),n(589519),n(517586),n(249651),n(288355),n(602940),n(703395),n(165396),n(925992),n(601964),n(280146),n(304834),n(353898),n(292988),n(668548),n(629988),n(155166),n(141745),n(736469),n(785003),n(926212),n(4920),n(829671),n(40592),n(357290),n(647679),n(615237),n(100010),n(381346),n(234119),n(797499),n(823858),n(121660),n(876127),n(586694),n(166320),n(840334),n(762906),n(25379),n(456928),n(354326);const T=(0,s.forwardRef)(((e,t)=>{let{as:n="ul",style:r}=e,c=(0,a.Z)(e,m);return s.createElement(n,(0,o.Z)((0,o.Z)({},c),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_h7os2z":(0,i.Z)("var(--ds-space-100, 8px)")}),ref:t,className:(0,l.Z)(["_1e0c1txw _4cvr1h6o _1wyb1crf _1yt4fne3 _vwz48jkm _1tke1f4h",c.className])}))}));const x=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,c=(0,a.Z)(e,d);const{isInlineEdit:m,isAutoDismissResolve:p}=c,f=(0,a.Z)(c,u);return s.createElement(n,(0,o.Z)((0,o.Z)({},f),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_g6cuc0":(0,i.Z)("var(--ds-border, #dfe1e6)"),"--_1u0k8yp":(0,i.Z)("var(--ds-shadow-overflow, 0 8px 16px -4px rgba(9, 30, 66, 0.25))"),"--_185zvap":(0,i.Z)("var(--ds-surface, #fff)"),"--_162hus6":(0,i.Z)(c.offset,"px")}),ref:t,className:(0,l.Z)(["_19it1392 _2rko1l7b _16qs1cyx _bfhk139m _kqswstnw _154i1odf _1e0c1txw _2lx21bp4 _vchhusvi _otyr53f4","view"===c.mode?"_1pbyibnn":"_1pby1ap8",c.isInlineEdit?"_1xi2n7od":"_1xi21crf",c.isInlineEdit?"_1ltv1ssb":"_1ltvn7od",c.isInlineEdit?"_t9eczr6s":"_t9ecn7od",c.isInlineEdit?"_1bsb1w8u":"_1bsb1178",c.isInlineEdit&&"_964dukw8",Boolean(c.isAutoDismissResolve)&&"",Boolean(c.isAutoDismissResolve)&&"_y44vpum1",c.className])}))}));const N=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:c}=e,m=(0,a.Z)(e,p);return s.createElement(n,(0,o.Z)((0,o.Z)({},m),{},{style:(0,o.Z)((0,o.Z)({},c),{},{"--_1diaiqk":(0,i.Z)(`var(--ds-surface, ${r.N0})`),"--_1khsbgs":(0,i.Z)(`var(--ds-border, ${r.YS})`)}),ref:t,className:(0,l.Z)(["_1e0c1txw _2lx21bp4 _bfhk1qpv _521wf0bt",m.className])}))}));const R=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:c}=e,m=(0,a.Z)(e,f);return s.createElement(n,(0,o.Z)((0,o.Z)({},m),{},{style:(0,o.Z)((0,o.Z)({},c),{},{"--_1khsbgs":(0,i.Z)(`var(--ds-border, ${r.YS})`),"--_1nvt7kj":(0,i.Z)("var(--ds-space-050, 4px)")}),ref:t,className:(0,l.Z)(["_x3dof0bt _ktl71ul9 _i4tb16re","view"===m.mode?"_ca0q1crf _u5f37vkz _n3td1crf _19bv7vkz":"_ca0qftgi _u5f31crf _n3tdftgi _19bv1crf",m.className])}))}));const M=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:i}=e,r=(0,a.Z)(e,v);return s.createElement(n,(0,o.Z)((0,o.Z)({},r),{},{style:i,ref:t,className:(0,l.Z)(["_syaz1fxt _1wyb1x4e _k48pni7l _1dyz44hb _vwz41fiz _19pk7vkz",r.className])}))}));const S=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:c}=e,m=(0,a.Z)(e,y);return s.createElement(n,(0,o.Z)((0,o.Z)({},m),{},{style:(0,o.Z)((0,o.Z)({},c),{},{"--_115j7p6":(0,i.Z)("var(--ds-space-400, 32px)"),"--_1msoq6k":(0,i.Z)(`var(--ds-text, ${r.q2})`),"--_ytujz3":(0,i.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,l.Z)(["_1e0c1txw _1yt41q2q _4cvr1h6o _2lx21bp4 _9a6v14no _kckd15o9 _125x11fv _q7gq1crf _ecfqidpf _zcqxf6fq _31ku1h6o _dkzu1bgn _5lhmtlke _19tb1crf _1rclidpf _1la1gktf _1pzm1h6o",m.className])}))}));const A=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:c}=e,m=(0,a.Z)(e,h);const{isReply:d}=m,u=(0,a.Z)(m,b);return s.createElement(n,(0,o.Z)((0,o.Z)({},u),{},{style:(0,o.Z)((0,o.Z)({},c),{},{"--_1khsbgs":(0,i.Z)(`var(--ds-border, ${r.YS})`)}),ref:t,className:(0,l.Z)(["",!m.isReply&&"_ca0q1crf _u5f31crf _n3td1crf _19bv1crf _n7zlf0bt",m.className])}))}));const I=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:c}=e,m=(0,a.Z)(e,_);return s.createElement(n,(0,o.Z)((0,o.Z)({},m),{},{style:(0,o.Z)((0,o.Z)({},c),{},{"--_1b5y5cj":(0,i.Z)(`var(--ds-text-subtle, ${r.iw})`)}),ref:t,className:(0,l.Z)(["_1e0c1txw _1usn19bv _1achz0dk _1wj21tcg _1scm1fw9",m.className])}))}));const P="24px",D=e=>{return s.createElement(c.Z,(0,o.Z)({theme:(t=e.isSSRFocusedComment,(e,n)=>{const a=e(n);return(0,o.Z)((0,o.Z)({},a),{},{buttonStyles:(0,o.Z)((0,o.Z)({},a.buttonStyles),{},{background:"none",borderRadius:"4px",height:P,width:P,"&:hover":{backgroundColor:`var(--ds-surface-hovered, ${r.gt})`},"&:focus":{boxShadow:`0 0 0 2px var(--ds-border-focused, ${r.VY})`},cursor:t?"not-allowed":"pointer","*":{color:t?`var(--ds-text-subtlest, ${r.n2})`:"inherit"}})})})},e));var t};D.displayName="InlineHeaderButton";const L=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,c=(0,a.Z)(e,g);const{shouldShowNavigation:m,isReattachHeader:d}=c,u=(0,a.Z)(c,w);return s.createElement(n,(0,o.Z)((0,o.Z)({},u),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_ytujz3":(0,i.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,l.Z)(["_kqswh2mm _1e0c1txw _19bv1bgn _u5f31bgn",c.shouldShowNavigation?"_1bah1yb4":"_1bahesu3",c.shouldShowNavigation&&"_4t3i10yn _ca0q1crf",c.isReattachHeader&&"_4t3i10yn _ca0q7vkz",c.className])}))}));const z=(0,s.forwardRef)(((e,t)=>{let{as:n=x,style:i}=e,r=(0,a.Z)(e,Z);return s.createElement(n,(0,o.Z)((0,o.Z)({},r),{},{style:i,ref:t,className:(0,l.Z)(["_1bsb1178 _4t3irvwn",r.showSkeleton?"_1e0c1ule":"_1e0cglyw",r.className])}))}));const q=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,c=(0,a.Z)(e,E);const{showNavigation:m}=c,d=(0,a.Z)(c,O);return s.createElement(n,(0,o.Z)((0,o.Z)({},d),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_115j7p6":(0,i.Z)("var(--ds-space-400, 32px)"),"--_u8u13a":(0,i.Z)("var(--ds-space-0, 0)")}),ref:t,className:(0,l.Z)(["_1e0c1txw",c.showNavigation?"_19pkr4z7":"_19pkpbic",c.className])}))}));const V=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,c=(0,a.Z)(e,C);return s.createElement(n,(0,o.Z)((0,o.Z)({},c),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_ytujz3":(0,i.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,l.Z)(["_kqswstnw _154i1bgn _1ltv1bgn",c.className])}))}));const $=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,c=(0,a.Z)(e,k);return s.createElement(n,(0,o.Z)((0,o.Z)({},c),{},{style:(0,o.Z)((0,o.Z)({},r),{},{"--_ytujz3":(0,i.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,l.Z)(["_kqswstnw _154i1bgn _1xi21bgn _1pbykb7n",c.className])}))}));const U=(e,t)=>{const n=e(t);return(0,o.Z)((0,o.Z)({},n),{},{buttonStyles:(0,o.Z)((0,o.Z)({},n.buttonStyles),{},{height:P,width:"28px"})})},F=e=>s.createElement(c.Z,(0,o.Z)({theme:U},e));F.displayName="CloseButton"},205559:(e,t,n)=>{n.d(t,{NQ:()=>a,nM:()=>s,t4:()=>o});let o=function(e){return e.ANDROID="ANDROID",e.IOS="IOS",e.WEB="WEB",e}({}),a=function(e){return e.READ="READ",e.UNREAD="UNREAD",e}({}),s=function(e){return e.ANONYMOUS="ANONYMOUS",e.APP="APP",e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e.JSD="JSD",e}({})},346568:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(840506))&&o.__esModule?o:{default:o},s=n(340531);const i=e=>a.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.221 9.322l-2.929 2.955a1.009 1.009 0 000 1.419.986.986 0 001.405 0l2.298-2.317 2.307 2.327a.989.989 0 001.407 0 1.01 1.01 0 000-1.419l-2.94-2.965A1.106 1.106 0 0011.991 9c-.279 0-.557.107-.77.322z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));i.displayName="ChevronUpIcon";var l=i;t.default=l},829323:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(840506))&&o.__esModule?o:{default:o},s=n(340531);const i=e=>a.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>'},e));i.displayName="MoreIcon";var l=i;t.default=l}}]);
//# sourceMappingURL=15682.QhGGFhvHtg.js.map