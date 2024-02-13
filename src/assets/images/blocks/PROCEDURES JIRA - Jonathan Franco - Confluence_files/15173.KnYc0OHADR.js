"use strict";(self._cf=self._cf||[]).push([[15173],{740699:(e,o,t)=>{t.d(o,{K:()=>a});const a=t(779076).ZP`query DefaultAndSpaceClassificationLevelsQuery($spaceId:ID!){space(id:$spaceId){id name defaultClassificationLevelId metadata{totalCurrentPages}}classificationLevels{id order status color description guideline name}}`},231438:(e,o,t)=>{t.d(o,{q:()=>a});let a=function(e){return e.PUBLISHED="PUBLISHED",e.ARCHIVED="ARCHIVED",e.DRAFT="DRAFT",e}({})},647741:(e,o,t)=>{t.d(o,{Lv:()=>l,bJ:()=>s,mD:()=>n,w9:()=>r});var a=t(231438);const l="NO_CLASSIFICATION",r="NO_CLASSIFICATION_OPTION",s="confluence.frontend.dlp.classifications",n={id:r,name:"No default",order:0,definition:"Pages in this space aren’t classified by default.",color:"NONE",status:a.q.PUBLISHED}},204482:(e,o,t)=>{t.d(o,{q:()=>m});var a=t(615919),l=t(872342),r=t(840506),s=t(920839),n=t(767001),i=t(142807),d=t(451655);const c=["as","style"],C=["as","style"],g=["as","style"],b=["as","style"];t(982192),t(94174),t(547352),t(456928),t(421309),t(354326);const f=(0,r.forwardRef)(((e,o)=>{let{as:t="div",style:i}=e,d=(0,l.Z)(e,c);return r.createElement(t,(0,a.Z)((0,a.Z)({},d),{},{style:(0,a.Z)((0,a.Z)({},i),{},{"--_1j4tbgd":(0,s.Z)("var(--ds-space-050, 12px)")}),ref:o,className:(0,n.Z)(["_1e0c1txw _zulp1926 _4cvr1h6o",d.className])}))}));const u=(0,r.forwardRef)(((e,o)=>{let{as:t="div",style:i}=e,d=(0,l.Z)(e,C);return r.createElement(t,(0,a.Z)((0,a.Z)({},d),{},{style:(0,a.Z)((0,a.Z)({},i),{},{"--_i32xuj":(0,s.Z)("var(--ds-text, N900)")}),ref:o,className:(0,n.Z)(["_syaz1r6y",d.className])}))}));const p=(0,r.forwardRef)(((e,o)=>{let{as:t="div",style:i}=e,d=(0,l.Z)(e,g);return r.createElement(t,(0,a.Z)((0,a.Z)({},d),{},{style:(0,a.Z)((0,a.Z)({},i),{},{"--_1kp6oa3":(0,s.Z)("var(--ds-text-subtlest, N700)")}),ref:o,className:(0,n.Z)(["_syaz3snm",d.className])}))}));const v=(0,r.forwardRef)(((e,o)=>{let{as:t="div",style:i}=e,d=(0,l.Z)(e,b);return r.createElement(t,(0,a.Z)((0,a.Z)({},d),{},{style:(0,a.Z)((0,a.Z)({},i),{},{"--_gqb3fz":(0,s.Z)("var(--ds-text-danger, R600)")}),ref:o,className:(0,n.Z)(["_syazmw7n",d.className])}))}));const m=({primaryText:e,secondaryText:o,isSpaceSelectionError:t,isTagDisplayError:l})=>r.createElement(f,null,r.createElement(d.default,{label:"",primaryColor:"var(--ds-icon-danger, R600)"}),t&&r.createElement(v,null,r.createElement(i.Z,(0,a.Z)({},e))),l&&r.createElement(r.Fragment,null,r.createElement(u,null,r.createElement(i.Z,(0,a.Z)({},e))),r.createElement(p,null,r.createElement(i.Z,(0,a.Z)({},o)))));m.displayName="ClassificationLevelError"},615173:(e,o,t)=>{t.d(o,{Q:()=>w});var a=t(615919),l=t(872342),r=t(840506),s=t(920839),n=t(767001),i=t(167347),d=t(93972),c=t(747472),C=t(324806),g=t(179640),b=t(240694),f=t(634554),u=t(649233),p=t(627521),v=t(231438),m=t(647741);const E=t(779076).ZP`query ContentDataClassificationQuery($contentId:ID!){content(id:$contentId){nodes{dataClassificationLevel{id guideline description color name status}}}}`;var F=t(740699),Z=t(128746),y=t(204482);const h=["as","style"];t(645044);const D=(0,r.forwardRef)(((e,o)=>{let{as:t="div",style:i}=e,d=(0,l.Z)(e,h);return r.createElement(t,(0,a.Z)((0,a.Z)({},d),{},{style:(0,a.Z)((0,a.Z)({},i),{},{"--_1nvt7kj":(0,s.Z)("var(--ds-space-050, 4px)")}),ref:o,className:(0,n.Z)(["_19pk16re",d.className])}))}));const x=(0,d.defineMessage)({id:"data-classification.content-classification-tag.error-primary-text",defaultMessage:"Unable to load all page data."}),L=(0,d.defineMessage)({id:"data-classification.content-classification-tag.error-secondary-text",defaultMessage:"Try and reload the page."}),P=(0,d.defineMessage)({id:"data-classification.content-classification.tag.tooltip",defaultMessage:"This {contentType} is classified as {classification}"}),w=({contentId:e,contentType:o,isUnpublishedDraft:t=!1,customSitesTitleComponent:a=!1})=>{var l,s,n;const d=(0,g.T)(m.bJ),h=a?D:r.Fragment,w=(0,b.a)(),B=(0,c.Z)(),{isEnabled:N,error:I}=(0,Z.X)(),{data:A,loading:k,error:H}=(0,i.aM)(E,{variables:{contentId:e},skip:!d||!N||!e||t,fetchPolicy:"network-only"}),O=null==A||null===(l=A.content.nodes[0])||void 0===l?void 0:l.dataClassificationLevel,{data:R,loading:M,error:T}=(0,i.aM)(F.K,{variables:{spaceId:w},skip:!(d&&N&&w&&!O),fetchPolicy:"network-only"}),_=null==R||null===(s=R.space)||void 0===s?void 0:s.defaultClassificationLevelId,S=null==R||null===(n=R.classificationLevels)||void 0===n?void 0:n.find((e=>e.id===_)),q=O||S,U=(null==q?void 0:q.status)===v.q.PUBLISHED;if(I)return r.createElement(h,{"data-testid":"data-classification-level"},r.createElement(p.X,{error:I}));if(!d||!N||q&&!U)return null;if(T||H)return(0,f.j6)(H,"404")||(0,f.j6)(T,"404")?((0,u.Xb)(H),(0,u.Xb)(T),null):r.createElement(h,{"data-testid":"data-classification-level"},H?r.createElement(p.X,{error:H}):null,T?r.createElement(p.X,{error:T}):null,r.createElement(y.q,{primaryText:x,secondaryText:L,isTagDisplayError:!0}));const z=!k&&!M&&q;return r.createElement(r.Fragment,null,z&&r.createElement(h,null,r.createElement(C.Z,{testId:"data-classification-level",name:q.name,guideline:q.guideline,tooltip:B.formatMessage(P,{contentType:o||"content",classification:q.name}),color:q.color,isPopupDisabled:!q.guideline})))}},128746:(e,o,t)=>{t.d(o,{X:()=>r});var a=t(167347);const l=t(779076).ZP`query DataClassificationEnabledQuery{isDataClassificationEnabled}`,r=()=>{const{data:e,error:o,loading:t}=(0,a.aM)(l,{context:{single:!0},fetchPolicy:"network-only"});return{isEnabled:Boolean(null==e?void 0:e.isDataClassificationEnabled),error:o,loading:t}}},400789:(e,o,t)=>{t.d(o,{Z:()=>F});var a=t(872342),l=t(615919),r=t(840506),s=t(39030),n=t(884499),i=t(490986),d=t(514993);const c=["children"],C=["span","p","strong","em"],g=(0,s.iv)({margin:0}),b=(0,l.Z)((0,l.Z)({},i.il),i.$Q),f=(0,s.iv)({fontWeight:"bold"}),u=(0,s.iv)({fontStyle:"italic"}),p={center:(0,s.iv)({textAlign:"center"}),end:(0,s.iv)({textAlign:"end"}),start:(0,s.iv)({textAlign:"start"})},v=(0,s.iv)({display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"}),m={breakAll:(0,s.iv)({wordBreak:"break-all"})},E=(0,r.createContext)(!1),F=e=>{let{children:o}=e,t=(0,a.Z)(e,c);const{as:l,color:F="color.text",textAlign:Z,testId:y,id:h,variant:D="body",weight:x}=t,L=l||(D.includes("body")?"p":"span");let P;(0,n.Z)(C.includes(L),`@atlaskit/primitives: Text received an invalid "as" value of "${L}"`),"maxLines"in t&&D.includes("body")&&(P=t.maxLines);const w=(e=>{const o=(0,d.v)(),t=i.w8[o];return null!=t?t:e})(F),B=(0,r.useContext)(E);if(B&&0===Object.keys(t).length)return(0,s.tZ)(r.Fragment,null,o);const N=(0,s.tZ)(L,{css:[g,D&&b[D],w&&i.SE[w],P&&v,1===P&&m.breakAll,Z&&p[Z],x&&i.hN[x],"em"===l&&u,"strong"===l&&f],style:{WebkitLineClamp:P},"data-testid":y,id:h},o);return B?N:(0,s.tZ)(E.Provider,{value:!0},N)}},324806:(e,o,t)=>{t.d(o,{Z:()=>L});var a=t(615919),l=t(840506),r=t(724093),s=t(723177),n=t(429762),i=t(621130),d=t(332072),c=t(946972),C=t(400789),g=t(659898);const b=(0,t(93972).defineMessages)({noClassification:{id:"data-classification-level.no-classification",defaultMessage:"No classification"},classifyContent:{id:"data-classification-level.edit-popup.classify-content",defaultMessage:"Classify content"},selectClassification:{id:"data-classification-level.edit-popup.select-classification",defaultMessage:"Select classification"},updateButton:{id:"data-classification-level.edit-popup.update-button",defaultMessage:"Update"},cancelButton:{id:"data-classification-level.edit-popup.cancel-button",defaultMessage:"Cancel"},changeLevel:{id:"data-classification-level.read-popup.change-level",defaultMessage:"Change level"}}),{formatMessage:f}=(0,g.d)({locale:"en"}),u=(f(b.noClassification),50),p={light:{YELLOW:{fontColor:"#4D4200",bgColor:"#FFF8CC",bgColorHovered:"#FFEE80",bgColorPressed:"#FFDD00"},ORANGE:{fontColor:"#4D3300",bgColor:"#FFDD99",bgColorHovered:"#FFCC66",bgColorPressed:"#FFB31A"},RED:{fontColor:"#4D0900",bgColor:"#FFBBB3",bgColorHovered:"#FF8C80",bgColorPressed:"#FF5E4D"},RED_BOLD:{fontColor:"#FFFFFF",bgColor:"#CC1800",bgColorHovered:"#991200",bgColorPressed:"#660C00"},PURPLE:{fontColor:"#1D004D",bgColor:"#F0E5FF",bgColorHovered:"#D0B3FF",bgColorPressed:"#B080FF"},BLUE:{fontColor:"#002766",bgColor:"#D1E3FF",bgColorHovered:"#99C0FF",bgColorPressed:"#66A1FF"},BLUE_BOLD:{fontColor:"#FFFFFF",bgColor:"#005C99",bgColorHovered:"#007ACC",bgColorPressed:"#003D66"},TEAL:{fontColor:"#072C2C",bgColor:"#D3F8F8",bgColorHovered:"#A7F1F1",bgColorPressed:"#7BEAEA"},GREEN:{fontColor:"#115521",bgColor:"#D5F6DD",bgColorHovered:"#ABEDBB",bgColorPressed:"#81E49A"},GREY:{fontColor:"#172B4D",bgColor:"#F1F2F4",bgColorHovered:"rgba(9, 30, 66, 0.14)",bgColorPressed:"rgba(9, 30, 66, 0.31)"},NONE:{fontColor:"#172B4D",bgColor:"inherit",bgColorHovered:"rgba(9, 30, 66, 0.06)",bgColorPressed:"rgba(9, 30, 66, 0.14)"}},dark:{YELLOW:{fontColor:"#FFF4B3",bgColor:"rgba(153, 130, 0, 0.20)",bgColorHovered:"rgba(153, 130, 0, 0.40)",bgColorPressed:"rgba(153, 130, 0, 0.80)"},ORANGE:{fontColor:"#FFDD99",bgColor:"rgba(204, 136, 0, 0.20)",bgColorHovered:"rgba(204, 136, 0, 0.40)",bgColorPressed:"rgba(204, 136, 0, 0.80)"},RED:{fontColor:"#FF8C80",bgColor:"rgba(153, 15, 0, 0.20)",bgColorHovered:"rgba(153, 15, 0, 0.40)",bgColorPressed:"rgba(153, 15, 0, 0.80)"},RED_BOLD:{fontColor:"#161A1D",bgColor:"#F76755",bgColorHovered:"#F87D6D",bgColorPressed:"#FAA89E"},PURPLE:{fontColor:"#F0E5FF",bgColor:"rgba(113, 49, 180, 0.20)",bgColorHovered:"rgba(113, 49, 180, 0.40)",bgColorPressed:"rgba(113, 49, 180, 0.80)"},BLUE:{fontColor:"#D1E3FF",bgColor:"rgba(0, 88, 230, 0.20)",bgColorHovered:"rgba(0, 88, 230, 0.40)",bgColorPressed:"rgba(0, 88, 230, 0.80)"},BLUE_BOLD:{fontColor:"#161A1D",bgColor:"#39A0FF",bgColorHovered:"#66B5FF",bgColorPressed:"#80C1FF"},TEAL:{fontColor:"#B8F4F4",bgColor:"rgba(28, 176, 176, 0.20)",bgColorHovered:"rgba(28, 176, 176, 0.40)",bgColorPressed:"rgba(28, 176, 176, 0.80)"},GREEN:{fontColor:"#C0F2CC",bgColor:"rgba(40, 189, 77, 0.20)",bgColorHovered:"rgba(40, 189, 77, 0.40)",bgColorPressed:"rgba(40, 189, 77, 0.80)"},GREY:{fontColor:"#B6C2CF",bgColor:"#2C333A",bgColorHovered:"rgba(166, 197, 226, 0.16)",bgColorPressed:"rgba(191, 219, 248, 0.28)"},NONE:{fontColor:"#B6C2CF",bgColor:"inherit",bgColorHovered:"rgba(161, 189, 217, 0.08)",bgColorPressed:"rgba(166, 197, 226, 0.16)"}}},v={light:{fontColor:"#091E42",bgColor:"rgba(9, 30, 66, 0.03)"},dark:{fontColor:"#BFDBF847",bgColor:"rgba(3, 4, 4, 0.26)"}};const m=(0,c.Z)("p",{target:"e4jhxqx0"})({name:"170ljbs",styles:"font-size:var(--ds-font-size-075, 12px);color:var(--ds-text-subtle, inherit);white-space:pre-wrap;"}),E=({name:e,guideline:o})=>{const t=(null!=e?e:"").substring(0,u),a=(null!=o?o:"").substring(0,1e3);return l.createElement(n.Z,null,t&&l.createElement(C.Z,{variant:"body.large",id:"data-classification-read-content-name"},t),a&&l.createElement(n.Z,{paddingBlockStart:"space.200"},l.createElement(m,{id:"data-classification-read-content-guideline"},a)))};E.displayName="ClassificationView";const F=(0,c.Z)("svg",{target:"e11zn5bp0"})("min-width:",(e=>e.width),"px;min-height:",(e=>e.height),"px;"),Z=({color:e,width:o,height:t,isDisabled:a,disabledColorConfig:r})=>l.createElement(F,{width:o,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4507 3.24947C11.7778 3.0101 12.2222 3.0101 12.5493 3.24947L12.6384 3.3145C12.6966 3.35693 12.7816 3.41879 12.8885 3.49621C13.1022 3.6511 13.4029 3.8681 13.7503 4.1163C14.4471 4.61402 15.325 5.23208 16.066 5.72614C16.731 6.16948 17.5184 6.51497 18.1606 6.75285C18.4775 6.87022 18.75 6.95808 18.9416 7.01617C19.0373 7.04516 19.1124 7.06659 19.1622 7.08044C19.1871 7.08736 19.2057 7.09238 19.2174 7.09549L19.2296 7.09873L19.231 7.09909C19.6299 7.20149 19.9142 7.55408 19.9294 7.96562L19 7.99995C19.9294 7.96562 19.9294 7.96545 19.9294 7.96562L19.9294 7.96637L19.9296 7.97092L19.9299 7.9823L19.9311 8.02272C19.9321 8.05733 19.9332 8.10704 19.9342 8.17035C19.9362 8.29692 19.9376 8.47816 19.9354 8.70198C19.931 9.14881 19.912 9.76955 19.8537 10.4665C19.7402 11.8241 19.4681 13.609 18.7732 14.9323C18.0039 16.3974 16.3463 17.7569 15.0203 18.6963C14.3347 19.182 13.6935 19.5855 13.2239 19.8675C12.9887 20.0088 12.7955 20.1202 12.66 20.1969C12.5923 20.2353 12.5389 20.265 12.5018 20.2855L12.4586 20.3092L12.4467 20.3157L12.442 20.3182C12.4419 20.3183 12.4413 20.3186 12 19.4999C11.566 20.3224 11.5658 20.3224 11.5657 20.3223L11.5606 20.3196L11.5484 20.3131L11.5044 20.2895C11.4666 20.269 11.4121 20.2393 11.3429 20.201C11.2047 20.1243 11.0075 20.013 10.7676 19.8718C10.2886 19.5899 9.63465 19.1866 8.93632 18.701C7.58714 17.763 5.89843 16.4025 5.12645 14.9323C4.4427 13.6301 4.19878 11.8354 4.10698 10.4745C4.0597 9.77357 4.05069 9.14709 4.05342 8.69567C4.05479 8.46954 4.05911 8.28624 4.06316 8.15821C4.06518 8.09417 4.06714 8.04388 4.06863 8.00888L4.07046 7.96804L4.07102 7.95657L4.07125 7.95199C4.07126 7.95182 4.07129 7.95125 5.00001 7.99995L4.07129 7.95125C4.09257 7.54532 4.37502 7.20025 4.76872 7.09917C4.7687 7.09917 4.76873 7.09916 4.76872 7.09917L4.7704 7.09873L4.78263 7.09549C4.79429 7.09238 4.81288 7.08736 4.83779 7.08044C4.88765 7.06659 4.96271 7.04516 5.05838 7.01617C5.25004 6.95808 5.52252 6.87022 5.8394 6.75285C6.48161 6.51498 7.26895 6.16948 7.93395 5.72614C8.67504 5.23208 9.55289 4.61402 10.2497 4.1163C10.5971 3.8681 10.8978 3.6511 11.1115 3.49621C11.2184 3.41879 11.3034 3.35693 11.3616 3.3145L11.4507 3.24947ZM5.91345 8.69663C5.91343 8.70005 5.91341 8.70348 5.91339 8.70693C5.91086 9.12508 5.91927 9.70457 5.96277 10.3493C6.05251 11.6797 6.28352 13.135 6.77323 14.0676C7.31396 15.0974 8.65034 16.2369 9.99807 17.1739C10.6482 17.6258 11.2607 18.0038 11.7109 18.2687C11.8151 18.33 11.9104 18.3852 11.9951 18.4336C12.0763 18.3862 12.1671 18.3325 12.2662 18.273C12.7071 18.0082 13.3072 17.6304 13.9451 17.1786C15.2657 16.243 16.5831 15.1025 17.1264 14.0676C17.6371 13.0952 17.89 11.63 18.0002 10.3116C18.0534 9.67538 18.0711 9.10545 18.0754 8.69297C17.9096 8.63851 17.7202 8.57322 17.5146 8.49705C16.8069 8.23492 15.8693 7.83042 15.0343 7.27375C14.2679 6.7628 13.3706 6.13086 12.6692 5.62983C12.4167 5.44946 12.1886 5.2854 12 5.14916C11.8114 5.2854 11.5833 5.44946 11.3308 5.62983C10.6294 6.13086 9.73213 6.7628 8.9657 7.27375C8.1307 7.83042 7.19314 8.23492 6.48544 8.49705C6.27515 8.57494 6.08188 8.64144 5.91345 8.69663ZM12 19.4999L11.5657 20.3223C11.8399 20.467 12.1684 20.4657 12.4413 20.3186L12 19.4999Z",fill:a?r.fontColor:e}));Z.displayName="ClassificationIcon";const y=(0,c.Z)("button",{target:"ednvuq80"})("display:inline-flex;max-width:100%;white-space:nowrap;width:auto;align-items:center;padding:var(--ds-space-025, 2px);padding-right:",(e=>e.isIconOnly?"var(--ds-space-025, 2px)":"var(--ds-space-050, 4px)"),";border:none;border-radius:var(--ds-border-radius, 3px);color:",(e=>e.colorsConfig.fontColor),";background:",(e=>e.colorsConfig.bgColor),";cursor:pointer;outline:0;transition:background 0.1s ease-out 0s;&:focus-visible{outline:1px solid var(--ds-border-focused, #388BFF);outline-offset:var(--ds-space-025, 2px);}&:hover{background:",(e=>e.isPopupDisabled||e.isIconOnly?e.colorsConfig.bgColor:e.colorsConfig.bgColorHovered),";}&:active{background:",(e=>e.isPopupDisabled||e.isIconOnly?e.colorsConfig.bgColor:e.colorsConfig.bgColorPressed),";}&:disabled{cursor:default;color:",(e=>e.disabledColorConfig.fontColor),";background:",(e=>e.disabledColorConfig.bgColor),";}"),h=(0,c.Z)("span",{target:"ednvuq81"})("display:inline-flex;max-width:100%;white-space:nowrap;width:auto;align-items:center;padding:var(--ds-space-025, 2px);padding-right:",(e=>e.isIconOnly?"var(--ds-space-025, 2px)":"var(--ds-space-050, 4px)"),";border-radius:var(--ds-border-radius, 3px);color:",(e=>e.colorsConfig.fontColor),";background:",(e=>e.colorsConfig.bgColor),";user-select:none;&.disabled{color:",(e=>e.disabledColorConfig.fontColor),";background:",(e=>e.disabledColorConfig.bgColor),";}"),D=(0,c.Z)("span",{target:"ednvuq82"})({name:"6n31oa",styles:"font-size:var(--ds-font-size-050, 11px);font-weight:var(--ds-font-weight-medium, 500);line-height:14px;margin-left:var(--ds-space-025, 2px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"}),x=(0,s.tu)({width:"330px"});function L({testId:e,name:o,tooltip:t,tooltipPosition:s,color:c="NONE",iconSize:C="small",guideline:g,isDisabled:b=!1,isPopupDisabled:f=!1,popupZIndex:m,onPopupShown:F,onPopupClose:L,onClick:P,renderPopupComponent:w}){const{colorMode:B="light"}=(0,i.Z)(),[N,I]=(0,l.useState)(!1),A=!o||0===o.length,k=(null!=o?o:"").substring(0,u),H="small"===C?14:"medium"===C?18:"large"===C?24:"xlarge"===C?32:"xxlarge"===C?40:14,O=()=>{I(!1)},R=f||A?"span":"button",M="span"===R?h:y;return l.createElement(r.Z,{placement:"bottom-start",trigger:r=>l.createElement(d.Z,{content:N?null:t,hideTooltipOnClick:!0,position:s},l.createElement(M,(0,a.Z)((0,a.Z)((0,a.Z)({"data-testid":e,className:b?"disabled":"",disabledColorConfig:v[B],colorsConfig:p[B][c],isIconOnly:A,isPopupDisabled:f},r),"button"===R?{disabled:b,type:"button"}:{}),{},{onClick:()=>{P&&P(),f||b||!o||0===o.length||A||(F&&F(),I(!N))}}),l.createElement(Z,{width:H,height:H,isDisabled:b,color:p[B][c].fontColor,disabledColorConfig:v[B]}),!A&&l.createElement(D,{"data-testid":"data-classification-level-name"},k))),content:()=>w?w(O):l.createElement(n.Z,{padding:"space.250",xcss:x,role:"dialog","aria-labelledby":"data-classification-read-content-name","aria-describedby":"data-classification-read-content-guideline","aria-modal":"true"},l.createElement(E,{name:o,guideline:g})),isOpen:N,onClose:()=>{L&&L(),O()},zIndex:m})}L.displayName="DataClassificationLevel"}}]);
//# sourceMappingURL=15173.KnYc0OHADR.js.map