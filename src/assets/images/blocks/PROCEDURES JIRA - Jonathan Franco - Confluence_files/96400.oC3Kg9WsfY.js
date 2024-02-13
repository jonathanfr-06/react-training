"use strict";(self._cf=self._cf||[]).push([[96400],{329622:(e,t,n)=>{n.d(t,{Z:()=>o});var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(a=e[n],o=t[n],!(a===o||r(a)&&r(o)))return!1;var a,o;return!0}function o(e,t){void 0===t&&(t=a);var n=null;function r(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var o=e.apply(this,r);return n={lastResult:o,lastArgs:r,lastThis:this},o}return r.clear=function(){n=null},r}},785984:(e,t,n)=>{n.d(t,{Z:()=>o});var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(a=e[n],o=t[n],!(a===o||r(a)&&r(o)))return!1;var a,o;return!0}function o(e,t){void 0===t&&(t=a);var n=null;function r(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var o=e.apply(this,r);return n={lastResult:o,lastArgs:r,lastThis:this},o}return r.clear=function(){n=null},r}},342547:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(615919),a=n(872342),o=n(840506),i=n(39030),s=n(702107),l=n(239411),d=n(156560);const c=["testId"],u=["children","codeBidiWarnings","codeBidiWarningLabel","codeBidiWarningTooltipEnabled"],p=(0,o.memo)((0,o.forwardRef)((function(e,t){let{testId:n}=e,o=(0,a.Z)(e,c);const s=(0,i.iv)((0,d.HX)()),{children:l,codeBidiWarnings:p=!0,codeBidiWarningLabel:m,codeBidiWarningTooltipEnabled:f=!0}=o,g=(0,a.Z)(o,u),v=p?(0,i.tZ)(h,{codeBidiWarningLabel:m,codeBidiWarningTooltipEnabled:f},l):l;return(0,i.tZ)("code",(0,r.Z)({ref:t,"data-testid":n,css:s},g),v)})));function h({children:e,codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:n}){const r=o.Children.map(e,(e=>{if("string"==typeof e){return(0,l.Z)(e,(({bidiCharacter:e,index:r})=>(0,i.tZ)(s.Z,{bidiCharacter:e,key:r,label:t,tooltipEnabled:n})))}if(e.type&&e.props.children){return o.cloneElement(e,{children:(0,i.tZ)(h,{codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:n},e.props.children)})}return e}));return(0,i.tZ)(o.Fragment,null,r)}h.displayName="RenderCodeChildrenWithBidiWarnings",p.displayName="Code";const m=p},427286:(e,t,n)=>{n.d(t,{u:()=>a});var r=n(710358);function a(e,t,n){let a=n;return(0,r.f)(e,{any:e=>{a=t(a,e)}}),a}},330092:(e,t,n)=>{n.d(t,{$o:()=>i,yL:()=>s});var r=n(840506),a=n(568846);const o=r.createContext(new a.Z),i=o.Provider,s=e=>{const[t,n]=r.useState(),a=r.useContext(o);return r.useEffect((()=>{const t=(e,t)=>{n(t)};return a.subscribe(e,t),()=>{a.unsubscribe(e,t)}}),[e,a]),t}},619412:(e,t,n)=>{n.d(t,{B:()=>r});n(867035);let r=function(e){return e.SET_ANNOTATION_FOCUS="SET_ANNOTATION_FOCUS",e.SET_ANNOTATION_STATE="SET_ANNOTATION_STATE",e.REMOVE_ANNOTATION_FOCUS="REMOVE_ANNOTATION_FOCUS",e.ON_ANNOTATION_CLICK="ON_ANNOTATION_CLICK",e}({})},928453:(e,t,n)=>{n.d(t,{K:()=>o,u:()=>s});var r=n(39030);const a="margin-top: 0 !important;",o=r.iv`
  & + * {
    ${a}
  }
`,i=["p","h1","h2","h3","h4","h5","h6"].map((e=>`+ .fabric-editor-block-mark > ${e}`)).join(","),s=r.iv`
  ${i} {
    ${a}
  }
`},5891:(e,t,n)=>{function r(e,...t){const n=[e,...t];return function(e){return n.reduceRight(((e,t)=>t(e)),e)}}n.d(t,{q:()=>r})},533736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(840506).createContext({fireAnalyticsEvent:e=>null})},415891:(e,t,n)=>{n.d(t,{IK:()=>a,iw:()=>r});let r=function(e){return e.NATIVE="mobileNative",e.HYBRID="mobileHybrid",e.WEB="web",e}({}),a=function(e){return e.RENDERER="renderer",e.EDITOR="editor",e}({})},248960:(e,t,n)=>{n.d(t,{y:()=>a});const r="ak-renderer-",a={DOCUMENT:`${r}document`,EXTENSION:`${r}extension`,EXTENSION_CENTER_ALIGN:`${r}extension-center-align`,EXTENSION_OVERFLOW_CONTAINER:`${r}extension-overflow-container`,NUMBER_COLUMN:`${r}table-number-column`,SORTABLE_COLUMN_WRAPPER:`${r}tableHeader-sortable-column__wrapper`,SORTABLE_COLUMN:`${r}tableHeader-sortable-column`,SORTABLE_COLUMN_ICON_WRAPPER:`${r}tableHeader-sorting-icon__wrapper`,SORTABLE_COLUMN_ICON:`${r}tableHeader-sorting-icon`,SORTABLE_COLUMN_NO_ORDER:`${r}tableHeader-sorting-icon__no-order`}},601196:(e,t,n)=>{n.d(t,{headingAnchorLinkMessages:()=>a,sortingAriaLabelMessages:()=>s,sortingIconMessages:()=>i,tableCellMessages:()=>o});var r=n(93972);const a=(0,r.defineMessages)({copyHeadingLinkToClipboard:{id:"fabric.editor.headingLink.copyAnchorLink",defaultMessage:"Copy link to heading"},copiedHeadingLinkToClipboard:{id:"fabric.editor.headingLink.copied",defaultMessage:"Copied!"},failedToCopyHeadingLink:{id:"fabric.editor.headingLink.failedToCopy",defaultMessage:"Copy failed"},copyAriaLabel:{id:"fabric.editor.headingLink.copyAriaLabel",defaultMessage:"Copy"}}),o=(0,r.defineMessages)({noneSortingLabel:{id:"fabric.editor.headingLink.noneSortingLabel",defaultMessage:"none"},ascSortingLabel:{id:"fabric.editor.headingLink.ascSortingLabel",defaultMessage:"ascending"},descSortingLabel:{id:"fabric.editor.headingLink.descSortingLabel",defaultMessage:"descending"}}),i=(0,r.defineMessages)({noOrderLabel:{id:"fabric.editor.headingLink.noOrderLabel",defaultMessage:"Sort column A to Z"},ascOrderLabel:{id:"fabric.editor.headingLink.ascOrderLabel",defaultMessage:"Sort column Z to A"},descOrderLabel:{id:"fabric.editor.headingLink.descOrderLabel",defaultMessage:"Clear sorting"},invalidLabel:{id:"fabric.editor.headingLink.invalidLabel",defaultMessage:"⚠️ You can't sort a table with merged cells"}}),s=(0,r.defineMessages)({noOrderLabel:{id:"fabric.editor.tableHeader.sorting.no",defaultMessage:"No sort applied to the column"},ascOrderLabel:{id:"fabric.editor.tableHeader.sorting.asc",defaultMessage:"Ascending sort applied"},descOrderLabel:{id:"fabric.editor.tableHeader.sorting.desc",defaultMessage:"Descending sort applied"},invalidLabel:{id:"fabric.editor.tableHeader.sorting.invalid",defaultMessage:"You can't sort a table with merged cells"},defaultLabel:{id:"fabric.editor.tableHeader.sorting.default",defaultMessage:"Sort the column"}})},144596:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(840506),a=n(747472),o=n(702107),i=n(863077),s=n(239411);const l=({enableWarningTooltip:e=!0})=>{const t=(0,a.Z)().formatMessage(i.i.label);return{renderBidiWarnings:n=>(0,s.Z)(n,(({bidiCharacter:n,index:a})=>r.createElement(o.Z,{bidiCharacter:n,key:a,label:t,tooltipEnabled:e}))),warningLabel:t}}},885666:(e,t,n)=>{n.d(t,{Z:()=>ke});var r=n(872342),a=n(615919),o=n(199009),i=n(840506),s=n(731462),l=n(179977),d=n(897929),c=n(102774),u=n(39030);let p=function(e){return e.AROUND_TEXT="AROUND_TEXT",e.START="START",e.END="END",e.INSIDE="INSIDE",e}({});var h=n(804597);const m=e=>{let t=null;const n=i.Children.toArray(e);for(const r of n){if(t)break;"string"==typeof r?t=r:r.type&&r.props.children&&(t=m(r.props.children))}return t};var f=n(572854),g=n(416159);const v=()=>u.iv`
  color: inherit;
  background-color: unset;
  -webkit-tap-highlight-color: transparent;

  ${(0,g.Lj)().focus};
`,b=({draftPosition:e,children:t})=>(0,u.tZ)("mark",(0,a.Z)((0,a.Z)({"data-renderer-mark":!0},(0,f.C)(e)),{},{css:v}),t);b.displayName="AnnotationDraft";const y=({texts:e,shouldApplyAnnotationAt:t,draftPosition:n})=>{const r=(a=t,o=e.length,a===p.START?0:a===p.END?o-1:a===p.INSIDE&&3===o?1:-1);var a,o;return e.map(((e,t)=>r===t?(0,u.tZ)(b,{key:t,draftPosition:n},e):(0,u.tZ)(i.Fragment,{key:t},e)))},E=({startPos:e,endPos:t,children:n})=>{const r=i.useMemo((()=>({start:e,end:t})),[t,e]),a=i.useContext(h.C$),o=i.useMemo((()=>!!a&&(({start:e,end:t},n)=>n.from<=e&&n.to>=t?p.AROUND_TEXT:n.from>e&&n.from<t&&n.to<t&&n.to>e?p.INSIDE:n.from>=e&&n.from<=t&&n.to>=t?p.END:!!(n.from<=e&&n.to>=e&&n.to<=t)&&p.START)(r,a)),[a,r]);if(!1===o||!a)return(0,u.tZ)(i.Fragment,null,n);if(o===p.AROUND_TEXT)return(0,u.tZ)(b,{key:0,draftPosition:a},n);const s=m(n);if(!s)return(0,u.tZ)(i.Fragment,null,n);const l=((e,t,n)=>{const{start:r,end:a}=t;return{startOffset:Math.max(e.from-r,0),endOffset:Math.min(Math.abs(a-e.to-n.length),n.length)}})(a,r,s),d=((e,{startOffset:t,endOffset:n})=>n>e.length||n-t<=0?null:[e.slice(0,t),e.slice(t,n),e.slice(n)].filter(Boolean))(s,l);if(!d)return(0,u.tZ)(i.Fragment,null,n);const c=y({texts:d,shouldApplyAnnotationAt:o,draftPosition:a});return(0,u.tZ)(i.Fragment,null,c)};E.displayName="TextWithAnnotationDraft";const w=e=>{const{startPos:t,endPos:n}=e,{children:r}=e;return r?i.createElement(E,{startPos:t,endPos:n},r):null};w.displayName="TextWrapper";const N=w;var k=n(122529),C=n(342547),A=n(863077);function T(e){const t=e.intl.formatMessage(A.i.label);return i.createElement(C.Z,(0,a.Z)({className:"code",codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:e.codeBidiWarningTooltipEnabled},e.dataAttributes),e.children)}T.displayName="CodeWithIntl";const x=(0,k.ZP)(T);function R(e){return i.createElement("em",(0,a.Z)({},e.dataAttributes),e.children)}R.displayName="Em";var Z=n(16728),S=n(224816),O=n(415891),_=n(431676),L=n(315764),I=n(32807);const $=u.iv`
  color: ${`var(--ds-link, ${Z.AX})`};

  &:hover {
    color: ${`var(--ds-link, ${Z.M5})`};
    text-decoration: underline;
  }

  &:active {
    color: ${`var(--ds-link-pressed, ${Z.YC})`};
  }
`;function M(e){const{href:t,target:n,eventHandlers:r,fireAnalyticsEvent:o,isMediaLink:s,dataAttributes:l}=e,d={href:t,target:n,title:t};"_blank"===n&&(d.rel="noreferrer noopener");const c=(0,S.XU)(r,"link");if(s)return(0,u.tZ)(i.Fragment,null,e.children);return(0,u.tZ)(I.Z,{data:{attributes:{location:"renderer"},location:"renderer"}},(0,u.tZ)(L.Z,(0,a.Z)((0,a.Z)({css:$,onClick:e=>{o&&o({action:_.om.VISITED,actionSubject:_.Wt.LINK,eventType:_.Ze.TRACK,attributes:{platform:O.iw.WEB,mode:O.IK.RENDERER}}),c&&c(e,t)}},d),l),e.children))}function P(e){return i.createElement("span",(0,a.Z)((0,a.Z)({},e.dataAttributes),{},{style:{textDecoration:"line-through"}}),e.children)}function D(e){return i.createElement("strong",(0,a.Z)({},e.dataAttributes),e.children)}M.displayName="Link",P.displayName="Strike",D.displayName="Strong";function B(e){return"sub"===e.type?i.createElement("sub",(0,a.Z)({},e.dataAttributes),e.children):i.createElement("sup",(0,a.Z)({},e.dataAttributes),e.children)}B.displayName="SubSup";var W=n(800316),H=n(883162),F=n(621130);function U(e){const{colorMode:t}=(0,F.Z)();let n;const r=(0,H.E)(e.color);n=r?(0,H.E)(e.color)||e.color:"dark"===t?(0,W.t)(e.color):e.color;const o=(0,i.useMemo)((()=>({"--custom-palette-color":n})),[n]);return i.createElement("span",(0,a.Z)((0,a.Z)({},e.dataAttributes),{},{"data-text-custom-color":e.color,className:"fabric-text-color-mark",style:o}),e.children)}function z(e){return i.createElement("u",(0,a.Z)({},e.dataAttributes),e.children)}U.displayName="TextColor",z.displayName="Underline";var j=n(481010),V=n(170080),K=n(158568);const G=u.iv`
  margin: ${K.zH} 0;
  margin-left: 50%;
  transform: translateX(-50%);
`;function X(e){return(0,u.tZ)(j.mP,null,(({width:t})=>(0,u.tZ)("div",{css:G,"data-mode":e.mode,style:{width:(0,V.rW)(e.mode,t)},className:"fabric-editor-breakout-mark fabric-editor-block-mark"},e.children)))}X.displayName="Breakout";var q=n(6083);const J=e=>{const t=e["data-align"]?u.iv`
        text-align: ${q.z[e["data-align"]]};
      `:"";return(0,u.tZ)("div",(0,a.Z)({css:t},e),e.children)};function Y(e){return(0,u.tZ)(J,{className:"fabric-editor-block-mark fabric-editor-alignment","data-align":e.align},e.children)}function Q(e){return i.createElement("div",{className:"fabric-editor-block-mark fabric-editor-indentation-mark","data-level":e.level},e.children)}function ee(e){return i.createElement("span",(0,a.Z)({},e.dataAttributes),e.children)}function te(e){return i.createElement("span",(0,a.Z)({},e.dataAttributes),e.children)}function ne(e){const t=e.isInline?"span":"div";return i.createElement(t,(0,a.Z)({"data-source":e.sources?JSON.stringify(e.sources):void 0,"data-mark-type":"dataConsumer"},e.dataAttributes),e.children)}function re(e){const t=e.isInline?"span":"div";return i.createElement(t,(0,a.Z)({"data-localId":e.localId,"data-name":e.name,"data-mark-type":"fragment"},e.dataAttributes),e.children)}J.displayName="MarkWrapper",Y.displayName="Alignment",Q.displayName="Indentation",ee.displayName="UnsupportedMark",te.displayName="UnsupportedNodeAttribute",ne.displayName="DataConsumer",re.displayName="FragmentMark";var ae=n(852358);const oe=()=>u.iv`
  color: inherit;
  background-color: unset;
  -webkit-tap-highlight-color: transparent;

  &[data-mark-annotation-state='${ae.to.ACTIVE}'] {
    ${(0,g.Lj)().blur};

    &:focus,
    &[data-has-focus='true'] {
      ${(0,g.Lj)().focus};
    }
  }
`,ie=({annotationParentIds:e,children:t,dataAttributes:n,id:r,state:o,hasFocus:s,onClick:l})=>{const d=(0,i.useMemo)((()=>[...new Set([...e,r])]),[r,e]),c=(0,i.useCallback)((e=>{e.defaultPrevented||o!==ae.to.ACTIVE||(e.preventDefault(),l({eventTarget:e.target,annotationIds:d}))}),[d,l,o]),p=o?(0,a.Z)((0,a.Z)({},n),{},{"data-mark-annotation-state":o,"data-has-focus":s}):n,h=o!==ae.to.ACTIVE?{"aria-disabled":!0}:{"aria-details":d.join(", ")};return(0,u.tZ)("mark",(0,a.Z)((0,a.Z)((0,a.Z)({id:r,onClick:c},h),p),{},{css:oe}),t)};ie.displayName="MarkComponent";var se=n(91598);var le=n(619412);const de=({annotationParentIds:e,children:t,dataAttributes:n,id:r})=>{const a=(()=>{const e=(0,i.useContext)(h.m$);if(!e)return null;const{inlineComment:{updateSubscriber:t}}=e;return t||null})(),o=(0,i.useContext)(h.oT),s=(0,se.lg)({id:r,updateSubscriber:a}),l=(0,i.useMemo)((()=>n),[n]),d=(0,i.useCallback)((e=>{if(!a)return;const{eventTarget:t,annotationIds:n}=e;a.emit(le.B.ON_ANNOTATION_CLICK,{annotationIds:n,eventTarget:t})}),[a]),c=(({annotationIds:e,filter:{state:t}})=>{const n=(0,i.useContext)(h.oT);return(0,i.useMemo)((()=>e.reduce(((e,r)=>n&&n[r]===t?[...e,r]:e),[])),[e,n,t])})({annotationIds:e,filter:{state:ae.to.ACTIVE}});return i.createElement(ie,{id:r,dataAttributes:l,annotationParentIds:c,onClick:d,hasFocus:s,state:o[r]},t)};de.displayName="MarkElement";const ce=e=>e&&e.type&&"annotation"===e.type.name,ue=({id:e,annotationType:t,children:n,dataAttributes:r,annotationParentIds:o=[],allowAnnotations:s})=>{const l=(0,a.Z)((0,a.Z)({},r),(0,ae.$S)({id:e,annotationType:t}));return s?i.createElement(de,{id:e,dataAttributes:l,annotationParentIds:o,annotationType:t},n):i.createElement("span",(0,a.Z)({id:e},l),n)};ue.displayName="AnnotationComponent";const pe=ue;function he(e){var t,n;const r=null!==(t=e.color)&&void 0!==t?t:"",a=null!==(n=e.size)&&void 0!==n?n:0;return(0,u.tZ)("span",{"data-color":r,"data-size":a,"data-mark-type":"border"},e.children)}he.displayName="Border";class me extends i.Component{render(){const{reference:e,children:t}=this.props;return i.createElement("span",{"data-mark-type":"confluenceInlineComment","data-reference":e},t)}}me.displayName="ConfluenceInlineComment";const fe={code:x,em:R,link:M,strike:P,strong:D,subsup:B,textColor:U,underline:z,annotation:pe,border:he,confluenceInlineComment:me,breakout:X,alignment:Y,indentation:Q,unsupportedMark:ee,unsupportedNodeAttribute:te,dataConsumer:ne,fragment:re},ge=e=>fe[e.type.name];var ve=n(891722),be=n(724859),ye=n(986487);const Ee=(e,t)=>{const{nodes:{expand:n,nestedExpand:r,layoutColumn:a}}=t,o=[n,r,a].filter((e=>Boolean(e))).map((e=>e.name));return e&&e.some((e=>e.type&&o.indexOf(e.type.name)>-1))},we=["key"];function Ne(e){return e.reduce(((e,t)=>{const n=e.length&&e[e.length-1]||null;return t.type instanceof s.ZU&&n&&n.type instanceof s.ZU&&Array.isArray(n.content)&&(0,ve.E2)(n,t)?n.content=Ne(n.content.concat(t.content)):e.push(t),e}),[])}class ke{constructor(e){(0,o.Z)(this,"providers",void 0),(0,o.Z)(this,"eventHandlers",void 0),(0,o.Z)(this,"extensionHandlers",void 0),(0,o.Z)(this,"portal",void 0),(0,o.Z)(this,"rendererContext",void 0),(0,o.Z)(this,"appearance",void 0),(0,o.Z)(this,"disableHeadingIDs",void 0),(0,o.Z)(this,"disableActions",void 0),(0,o.Z)(this,"headingIds",[]),(0,o.Z)(this,"expandHeadingIds",[]),(0,o.Z)(this,"allowHeadingAnchorLinks",void 0),(0,o.Z)(this,"allowColumnSorting",void 0),(0,o.Z)(this,"allowCopyToClipboard",!1),(0,o.Z)(this,"allowWrapCodeBlock",!1),(0,o.Z)(this,"allowPlaceholderText",!0),(0,o.Z)(this,"allowCustomPanels",!1),(0,o.Z)(this,"fireAnalyticsEvent",void 0),(0,o.Z)(this,"shouldOpenMediaViewer",void 0),(0,o.Z)(this,"allowAltTextOnImages",void 0),(0,o.Z)(this,"stickyHeaders",void 0),(0,o.Z)(this,"allowMediaLinking",void 0),(0,o.Z)(this,"startPos",1),(0,o.Z)(this,"surroundTextNodesWithTextWrapper",!1),(0,o.Z)(this,"media",void 0),(0,o.Z)(this,"emojiResourceConfig",void 0),(0,o.Z)(this,"smartLinks",void 0),(0,o.Z)(this,"allowAnnotations",!1),(0,o.Z)(this,"allowSelectAllTrap",void 0),(0,o.Z)(this,"nodeComponents",void 0),(0,o.Z)(this,"allowWindowedCodeBlock",void 0),(0,o.Z)(this,"serializeFragmentChild",((e,{index:t,parentInfo:n})=>{const r=this.startPos,a=n&&n.path||[],o="taskItem"===e.type.name&&"DONE"!==e.attrs.state,i=`${e.type.name}__${this.startPos}`,s=this.serializeFragment(e.content,this.getNodeProps(e,n),(0,d.$g)(e,{allowSelectAllTrap:this.allowSelectAllTrap,allowWindowedCodeBlock:this.allowWindowedCodeBlock},this.nodeComponents),i,{parentIsIncompleteTask:o,path:[...a,e],pos:this.startPos});this.startPos=r+e.nodeSize;const l=e.marks?[...e.marks]:[],c="media"===e.type.name,u=e=>!0!==this.allowMediaLinking&&c&&"link"===e.type.name;return l.reverse().reduce(((n,r)=>u(r)||(e=>a.some((e=>{var t;return"mediaSingle"!==(null===(t=e.type)||void 0===t?void 0:t.name)}))&&c&&"border"===e.type.name)(r)?n:this.renderMark(ge(r),this.withMediaMarkProps(e,r,this.getMarkProps(r,[],e)),`${r.type.name}-${t}`,n)),s)})),(0,o.Z)(this,"withMediaMarkProps",((e,t,n)=>"link"===t.type.name&&"media"===e.type.name?(0,a.Z)((0,a.Z)({},n),{},{isMediaLink:!0}):n)),(0,o.Z)(this,"getUnsupportedContentProps",(e=>({node:e,dispatchAnalyticsEvent:this.fireAnalyticsEvent}))),(0,o.Z)(this,"getAnnotationMarkProps",((e,t)=>{const n=(t||[]).reduce(((e,t)=>ce(t)?[...e,t.attrs.id]:e),[]);return{id:e.attrs.id,annotationType:e.attrs.annotationType,annotationParentIds:n,allowAnnotations:this.allowAnnotations,dataAttributes:{"data-renderer-mark":!0}}})),(0,o.Z)(this,"getMarkProps",((e,t,n)=>{if(ce(e))return this.getAnnotationMarkProps(e,t);const o=e.attrs,{key:i}=o,s=(0,r.Z)(o,we),l={isInline:null==n?void 0:n.isInline},d=(e=>e&&e.type&&"code"===e.type.name)(e)?{codeBidiWarningTooltipEnabled:"mobile"!==this.appearance}:{};return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({eventHandlers:this.eventHandlers,fireAnalyticsEvent:this.fireAnalyticsEvent,markKey:i},s),l),d),{},{dataAttributes:{"data-renderer-mark":!0}})})),this.providers=e.providers,this.eventHandlers=e.eventHandlers,this.extensionHandlers=e.extensionHandlers,this.portal=e.portal,this.rendererContext=e.objectContext,this.appearance=e.appearance,this.disableHeadingIDs=e.disableHeadingIDs,this.disableActions=e.disableActions,this.allowHeadingAnchorLinks=e.allowHeadingAnchorLinks,this.allowCopyToClipboard=e.allowCopyToClipboard,this.allowWrapCodeBlock=e.allowWrapCodeBlock,this.allowPlaceholderText=e.allowPlaceholderText,this.allowCustomPanels=e.allowCustomPanels,this.allowColumnSorting=e.allowColumnSorting,this.fireAnalyticsEvent=e.fireAnalyticsEvent,this.shouldOpenMediaViewer=e.shouldOpenMediaViewer,this.allowAltTextOnImages=e.allowAltTextOnImages,this.stickyHeaders=e.stickyHeaders,this.allowMediaLinking=e.allowMediaLinking,this.allowAnnotations=Boolean(e.allowAnnotations),this.surroundTextNodesWithTextWrapper=Boolean(e.surroundTextNodesWithTextWrapper),this.media=e.media,this.emojiResourceConfig=e.emojiResourceConfig,this.smartLinks=e.smartLinks,this.allowSelectAllTrap=e.allowSelectAllTrap,this.nodeComponents=e.nodeComponents,this.allowWindowedCodeBlock=e.allowWindowedCodeBlock}resetState(){this.headingIds=[],this.expandHeadingIds=[],this.startPos=1}getNodeProps(e,t){const n=t?t.path:void 0;switch(e.type.name){case"date":return this.getDateProps(e,t);case"hardBreak":return this.getHardBreakProps(e,n);case"heading":return this.getHeadingProps(e,n);case"media":return this.getMediaProps(e,n);case"emoji":return this.getEmojiProps(e);case"mediaGroup":return this.getMediaGroupProps(e);case"mediaInline":return this.getMediaInlineProps(e);case"mediaSingle":return this.getMediaSingleProps(e,n);case"table":return this.getTableProps(e,n);case"tableHeader":case"tableRow":return this.getTableChildrenProps(e);case"taskItem":return this.getTaskItemProps(e,n);case"embedCard":return this.getEmbedCardProps(e,n);case"blockCard":return this.getBlockCardProps(e,n);case"expand":return this.getExpandProps(e,n);case"unsupportedBlock":case"unsupportedInline":return this.getUnsupportedContentProps(e);case"codeBlock":return this.getCodeBlockProps(e);case"panel":return this.getPanelProps(e);default:return this.getProps(e,n)}}serializeFragment(e,t={},n=(this.allowSelectAllTrap?c.Q:c.Z),r="root-0",a){return"root-0"===r&&this.resetState(),this.renderNode(n,t,r,ke.getChildNodes(e).map(((e,t)=>(0,d.ts)(e)?this.serializeTextWrapper(e.content,{index:t,parentInfo:a}):this.serializeFragmentChild(e,{index:t,parentInfo:a}))))}serializeTextWrapper(e,{index:t,parentInfo:n}){const r=n&&n.path||[],a=n&&n.pos||1;return ke.buildMarkStructure(e).map(((e,t)=>this.serializeMark({mark:e,parentNode:{path:r,pos:a},parentMark:{path:[e]}})))}serializeMark({mark:e,parentNode:t,parentMark:n}){if(!(0,d.BM)(e)){const r=(e,r)=>this.serializeMark({mark:e,parentNode:t,parentMark:{path:[...n.path,e]}}),a=(e.content||[]).map(r),o=`${e.type.name}-component__${this.startPos}__${n.path.length}`;return this.renderMark(ge(e),this.getMarkProps(e,n.path),o,a)}const r=this.startPos,a=r+e.nodeSize;if(this.startPos=a,this.surroundTextNodesWithTextWrapper){const n=`text-wrapper_${this.startPos}`,o=Math.max(t.path.length-1,0);return i.createElement(N,{key:n,startPos:r+o,endPos:a+o},e.text)}return e.text||""}renderNode(e,t,n,r){return i.createElement(e,(0,a.Z)({key:n},t),r)}renderMark(e,t,n,r){return i.createElement(e,(0,a.Z)({key:n},t),r)}getTableChildrenProps(e){return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{allowColumnSorting:this.allowColumnSorting})}getTableProps(e,t=[]){const n=(e=>e.some((e=>"layoutSection"===e.type.name&&(e=>e.marks.some((e=>"breakout"===e.type.name)))(e))))(t)?void 0:this.stickyHeaders,r=Ee(t,e.type.schema);return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{allowColumnSorting:this.allowColumnSorting,columnWidths:(0,be.gf)(e),tableNode:e,stickyHeaders:n,isInsideOfBlockNode:r})}getDateProps(e,t){return{timestamp:e.attrs&&e.attrs.timestamp,parentIsIncompleteTask:t&&t.parentIsIncompleteTask}}getMediaSingleProps(e,t=[]){const{marks:{link:n}}=e.type.schema,r=Ee(t,e.type.schema),o=e.firstChild&&e.firstChild.marks.filter((e=>e.type===n||!0===this.allowMediaLinking)).length;return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{isInsideOfBlockNode:r,childHasLink:o,allowCaptions:this.media&&this.media.allowCaptions,featureFlags:this.media&&this.media.featureFlags})}getMediaProps(e,t=[]){var n;const{marks:{link:r,border:o}}=e.type.schema,i=t.some((e=>{var t;return"mediaSingle"===(null===(t=e.type)||void 0===t?void 0:t.name)})),s=e=>e.type===r;return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{marks:e.marks.filter((e=>!s(e)||!0===this.allowMediaLinking)),isLinkMark:s,isBorderMark:e=>i&&e.type===o,allowAltTextOnImages:this.allowAltTextOnImages,featureFlags:this.media&&this.media.featureFlags,shouldOpenMediaViewer:this.shouldOpenMediaViewer,ssr:null===(n=this.media)||void 0===n?void 0:n.ssr})}getEmojiProps(e){return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{resourceConfig:this.emojiResourceConfig})}getEmbedCardProps(e,t=[]){const n=Ee(t,e.type.schema);return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{isInsideOfBlockNode:n})}getBlockCardProps(e,t=[]){return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{isNodeNested:t.length>0})}getMediaGroupProps(e){var t,n;return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{shouldOpenMediaViewer:this.shouldOpenMediaViewer,allowAltTextOnImages:this.allowAltTextOnImages,featureFlags:this.media&&this.media.featureFlags,enableDownloadButton:null===(t=this.media)||void 0===t?void 0:t.enableDownloadButton,ssr:null===(n=this.media)||void 0===n?void 0:n.ssr})}getMediaInlineProps(e){var t;return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{ssr:null===(t=this.media)||void 0===t?void 0:t.ssr})}getTaskItemProps(e,t=[]){return(0,a.Z)((0,a.Z)({},this.getProps(e,t)),{},{disabled:this.disableActions})}getHardBreakProps(e,t=[]){let n=!1;const r=t.length>0?t[t.length-1]:null;return r&&r.lastChild===e&&(n=!0),(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{forceNewLine:n})}getCodeBlockProps(e){const t="mobile"!==this.appearance;return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{text:e.textContent,codeBidiWarningTooltipEnabled:t})}getPanelProps(e){return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{allowCustomPanels:this.allowCustomPanels})}getProps(e,t=[]){return(0,a.Z)({text:e.text,providers:this.providers,eventHandlers:this.eventHandlers,extensionHandlers:this.extensionHandlers,portal:this.portal,rendererContext:this.rendererContext,serializer:this,content:e.content?e.content.toJSON():void 0,allowHeadingAnchorLinks:this.allowHeadingAnchorLinks,allowCopyToClipboard:this.allowCopyToClipboard,allowWrapCodeBlock:this.allowWrapCodeBlock,allowPlaceholderText:this.allowPlaceholderText,rendererAppearance:this.appearance,fireAnalyticsEvent:this.fireAnalyticsEvent,nodeType:e.type.name,marks:e.marks,smartLinks:this.smartLinks,dataAttributes:{"data-renderer-start-pos":this.startPos+t.length},path:t},e.attrs)}headingAnchorSupported(e=[]){return(0,l.d)(this.allowHeadingAnchorLinks)||0===e.length||((e,t)=>e.length>0&&e[e.length-1].type.name===t)(e,"layoutColumn")}getHeadingProps(e,t=[]){return(0,a.Z)((0,a.Z)({},this.getProps(e,t)),{},{content:e.content?e.content.toJSON():void 0,headingId:this.getHeadingId(e,this.headingIds),showAnchorLink:"comment"!==this.appearance&&this.allowHeadingAnchorLinks&&!this.disableHeadingIDs&&this.headingAnchorSupported(t)})}getExpandProps(e,t=[]){if(!(0,l.d)(this.allowHeadingAnchorLinks))return this.getProps(e);const n=(0,ye.D0)(e,e.type.schema.nodes.heading).map((({node:e})=>this.getHeadingId(e,this.expandHeadingIds)));return(0,a.Z)((0,a.Z)({},this.getProps(e)),{},{nestedHeaderIds:n})}getHeadingId(e,t){if(this.disableHeadingIDs||!e.content.size)return;const n=e.content.toJSON().reduce(((e,t)=>e.concat((0,S.Q)(t)||"")),"").trim().replace(/\s/g,"-");return n?this.getUniqueHeadingId(n,t):void 0}getUniqueHeadingId(e,t,n=0){if(0===n&&-1===t.indexOf(e))return t.push(e),e;if(0!==n){const r=`${e}.${n}`;if(-1===t.indexOf(r))return t.push(r),r}return this.getUniqueHeadingId(e,t,++n)}static getChildNodes(e){const t=[];return e.forEach((e=>{t.push(e)})),(0,d.up)(t)}static getMarks(e){return e.marks&&0!==e.marks.length?(0,ve.K0)(e.marks):[]}static buildMarkStructure(e){return Ne(e.map((e=>{const t=this.getMarks(e);return 0===t.length?e:t.reverse().reduce(((e,t)=>{const{eq:n}=t;return(0,a.Z)((0,a.Z)({},t),{},{eq:n,content:[e]})}),e)})))}static fromSchema(e,t){return new ke(t)}}},185766:(e,t,n)=>{n.d(t,{AF:()=>u,ZP:()=>p});var r=n(840506),a=n(39030),o=n(158568),i=n(824470),s=n(144596),l=n(248960);const d=a.iv`
  .${i.zq.CODEBLOCK_CONTAINER} {
    cursor: text;
  }
`,c={CONTAINER:"light-weight-code-block"},u=()=>a.iv`
    .${l.y.DOCUMENT}
      > .${c.CONTAINER}
      .${i.zq.CODEBLOCK_CONTAINER} {
      margin-top: ${o.zH};
    }
  `,p=(0,r.forwardRef)((({text:e,codeBidiWarningTooltipEnabled:t=!0,className:n},o)=>{const l=(0,r.useMemo)((()=>(null!=e?e:"").split("\n")),[e]),{renderBidiWarnings:u}=(0,s.c)({enableWarningTooltip:t}),p=[c.CONTAINER,n].join(" ");return(0,a.tZ)("div",{className:p,ref:o,css:[(0,i.Hk)(),d]},(0,a.tZ)("div",{className:i.zq.CODEBLOCK_CONTAINER},(0,a.tZ)("div",{className:i.zq.CODEBLOCK_CONTENT_WRAPPER},(0,a.tZ)("div",{className:i.zq.CODEBLOCK_LINE_NUMBER_GUTTER},l.map(((e,t)=>(0,a.tZ)("span",{key:t})))),(0,a.tZ)("div",{className:i.zq.CODEBLOCK_CONTENT},(0,a.tZ)("code",null,u(e))))))}))},102774:(e,t,n)=>{n.d(t,{Q:()=>u,Z:()=>c});var r=n(840506),a=n(248960),o=n(431676),i=n(533736),s=n(199009);class l{constructor(e){(0,s.Z)(this,"type",void 0),(0,s.Z)(this,"range",void 0),this.type=e?e.type:"None",e&&"None"!==this.type&&(this.range=e.getRangeAt(0))}eq(e){if(!e)return!1;if(this.range&&e.range){var t,n;const r=0===(null===(t=this.range)||void 0===t?void 0:t.compareBoundaryPoints(Range.START_TO_START,e.range)),a=0===(null===(n=this.range)||void 0===n?void 0:n.compareBoundaryPoints(Range.END_TO_END,e.range));return r&&a}return"None"===this.type&&"None"===e.type}inside(e){var t,n;return e.contains(null!==(t=null===(n=this.range)||void 0===n?void 0:n.commonAncestorContainer)&&void 0!==t?t:null)}select(e){const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();return n&&(n.removeAllRanges(),n.addRange(t)),l.fromWindow()}static fromWindow(e=window){return new l(e.getSelection())}}const d=()=>{const{fireAnalyticsEvent:e}=r.useContext(i.Z),t=r.useRef(null),n=r.useRef(!1),a=r.useRef(),s="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),d=r.useCallback((r=>{const i=t.current;if(!i)return;if(!(s?r.metaKey:r.ctrlKey)||"KeyA"!==r.code||r.shiftKey)return;const d=l.fromWindow();d.eq(a.current)?e({eventType:o.Ze.TRACK,action:o.om.SELECT_ALL_ESCAPED,actionSubject:o.Wt.RENDERER}):(d.inside(i)||"None"===d.type&&n.current)&&(e({eventType:o.Ze.TRACK,action:o.om.SELECT_ALL_CAUGHT,actionSubject:o.Wt.RENDERER}),r.preventDefault(),a.current=d.select(i))}),[s,t,e,n,a]),c=r.useCallback((e=>{var r,a;n.current=null!==(r=null===(a=t.current)||void 0===a?void 0:a.contains(e.target))&&void 0!==r&&r}),[t,n]);return r.useEffect((()=>(window.addEventListener("keydown",d),window.addEventListener("click",c),()=>{window.removeEventListener("keydown",d),window.removeEventListener("click",c)})),[d,c]),t};function c(e){return r.createElement("div",{className:a.y.DOCUMENT},e.children)}function u(e){return r.createElement("div",{ref:d(),className:a.y.DOCUMENT},e.children)}c.displayName="Doc",u.displayName="DocWithSelectAllTrap"},215269:(e,t,n)=>{n.d(t,{Z:()=>b,n:()=>m});var r=n(199009),a=n(615919),o=n(872342),i=n(840506),s=n(39030),l=n(16728),d=n(515280),c=n(332072),u=n(122529),p=n(601196);const h=["children"],m="heading-anchor-wrapper",f=i.forwardRef(((e,t)=>{const{children:n}=e,r=(0,o.Z)(e,h);return(0,s.tZ)("span",(0,a.Z)((0,a.Z)({},r),{},{className:m,ref:t}),n)})),g=s.iv`
  display: inline;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${`var(--ds-icon, ${l.Mx})`};
  cursor: pointer;
  right: 0;
`;class v extends i.PureComponent{constructor(...e){super(...e),(0,r.Z)(this,"state",{tooltipMessage:"",isClicked:!1}),(0,r.Z)(this,"setTooltipState",((e,t=!1)=>{this.setState({tooltipMessage:this.props.intl.formatMessage(e),isClicked:t})})),(0,r.Z)(this,"getCopyAriaLabel",(()=>{const{copyAriaLabel:e}=p.headingAnchorLinkMessages;return this.props.intl.formatMessage(e)})),(0,r.Z)(this,"copyToClipboard",(async e=>{const{copiedHeadingLinkToClipboard:t,failedToCopyHeadingLink:n}=p.headingAnchorLinkMessages;e.stopPropagation();try{await this.props.onCopyText(),this.setTooltipState(t,!0)}catch(r){this.setTooltipState(n)}})),(0,r.Z)(this,"resetMessage",(()=>{this.setTooltipState(p.headingAnchorLinkMessages.copyHeadingLinkToClipboard)})),(0,r.Z)(this,"renderAnchorButton",(()=>(0,s.tZ)("button",{css:g,onMouseLeave:this.resetMessage,onClick:this.copyToClipboard,"aria-label":this.state.tooltipMessage},(0,s.tZ)(d.default,{label:this.getCopyAriaLabel(),size:this.props.level>3?"small":"medium",primaryColor:this.state.isClicked?`var(--ds-icon-selected, ${l.AX})`:`var(--ds-icon-subtle, ${l.iw})`}))))}componentDidMount(){this.resetMessage()}render(){const{tooltipMessage:e}=this.state;return e?(0,s.tZ)(c.Z,{tag:f,content:e,position:"top",delay:0,key:e},this.renderAnchorButton()):this.renderAnchorButton()}}v.displayName="HeadingAnchor";const b=(0,u.ZP)(v)},897929:(e,t,n)=>{n.d(t,{u0:()=>Ae,BM:()=>De,ts:()=>Pe,up:()=>$e,$g:()=>Ie});var r=n(615919),a=n(772357),o=n.n(a),i=n(840506);function s(e){return i.createElement("blockquote",null,e.children)}s.displayName="Blockquote";var l=n(199009),d=n(785984),c=n(773543),u=n(423196),p=n(777163);class h extends i.Component{constructor(...e){super(...e),(0,l.Z)(this,"state",{extensionProvider:null}),(0,l.Z)(this,"mounted",!1),(0,l.Z)(this,"handleProvider",((e,t)=>{t&&t.then((t=>{this.mounted&&this.setState({[e]:t})}))})),(0,l.Z)(this,"getNodeRenderer",(0,d.Z)(c.ZY)),(0,l.Z)(this,"renderExtensionNode",(e=>{var t;const{extensionHandlers:n,rendererContext:r,extensionType:a,extensionKey:o,parameters:s,content:l,text:d,type:c,localId:u,marks:h,actions:m}=this.props,f={type:c,extensionKey:o,extensionType:a,parameters:s,content:l||d,localId:u,fragmentLocalId:null==h||null===(t=h.find((e=>"fragment"===e.type.name)))||void 0===t||null===(t=t.attrs)||void 0===t?void 0:t.localId};let g=null;try{if(n&&n[a]){g=(0,p.c)(n[a])(f,r.adDoc)}if(!g&&e){const t=this.getNodeRenderer(e,a,o);g="multiBodiedExtension"===f.type?i.createElement(t,{node:f,actions:m}):i.createElement(t,{node:f})}}catch(v){}return this.props.children({result:g})})),(0,l.Z)(this,"setupAndRenderExtensionNode",(e=>{const{extensionProvider:t}=this.state;return!t&&e.extensionProvider&&this.handleProvider("extensionProvider",e.extensionProvider),this.renderExtensionNode(t)}))}UNSAFE_componentWillMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{providers:e}=this.props;return e?i.createElement(u.S,{providers:["extensionProvider"],providerFactory:e,renderNode:this.setupAndRenderExtensionNode}):this.setupAndRenderExtensionNode({})}}h.displayName="ExtensionRenderer";var m=n(481010),f=n(310151),g=n(170080),v=n(248960);const b=(e,t,n={},r)=>{const a=r?"":v.y.EXTENSION_OVERFLOW_CONTAINER,{isTopLevel:o=!0}=n||{},s=o&&["wide","full-width"].includes(t)?v.y.EXTENSION_CENTER_ALIGN:"";return i.createElement(m.mP,null,(({width:r})=>i.createElement("div",{ref:n.handleRef,className:`${v.y.EXTENSION} ${n.shadowClassNames} ${s}`,style:{width:o?(0,g.rW)(t,r):"100%"},"data-layout":t},i.createElement("div",{className:a},e))))};b.displayName="renderExtension";const y=e=>{const{text:t,layout:n="default",handleRef:a,shadowClassNames:o,path:s=[]}=e;return i.createElement(h,(0,r.Z)((0,r.Z)({},e),{},{type:"extension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return b(e,n,{isTopLevel:s.length<1,handleRef:a,shadowClassNames:o})}catch(r){}return b(t||"extension",n,{isTopLevel:s.length<1,handleRef:a,shadowClassNames:o})}))};y.displayName="Extension";const E=(0,f.Z)(y,{overflowSelector:`.${v.y.EXTENSION_OVERFLOW_CONTAINER}`}),w=e=>{const{children:t,layout:n="default",path:a=[]}=e,o=i.Children.toArray(t).map((e=>!!i.isValidElement(e)&&"table"===e.props.nodeType)).every(Boolean);return i.createElement(h,(0,r.Z)((0,r.Z)({},e),{},{type:"bodiedExtension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return b(e,n,{isTopLevel:a.length<1},o)}catch(r){}return b(t,n,{isTopLevel:a.length<1},o)}))};w.displayName="BodiedExtension";const N=w;var k=n(39030),C=n(16728);const A=k.iv`
  // make sure the user can't see a range selection inside the navigation
  // This is really important to keep the navigation working properly
  user-select: none;
  -webkit-user-modify: read-only;
  border: 1px solid ${`var(--ds-border, ${C.YS})`};
  border-bottom: none;
  .mbe-add-tab-button,
  .mbe-remove-tab {
    display: none;
  }
`,T=e=>{const{children:t,layout:n="default",path:a=[]}=e,[o,s]=(0,i.useState)(0),l=(({updateActiveChild:e,children:t})=>i.useMemo((()=>({changeActive:t=>e(t),addChild:()=>!1,getChildrenCount:()=>t?null==t?void 0:t.length:0,removeChild:e=>!1,updateParameters:e=>!1,getChildren:()=>[]})),[e,t]))({updateActiveChild:i.useCallback((e=>"number"!=typeof e?(s(0),!1):(s(e),!0)),[s]),children:t}),d=k.iv`
    padding: 0;
    border-radius: ${"var(--ds-border-radius, 3px)"};
    position: relative;
    vertical-align: middle;
    min-height: 100px;
    .ak-renderer-extension {
      margin-top: 0 !important;
    }

    .multiBodiedExtension--frames > [data-extension-frame='true'] {
      display: none;
    }

    .multiBodiedExtension--frames
      > [data-extension-frame='true']:nth-of-type(${o+1}) {
      padding: ${"var(--ds-space-100, 8px)"} !important;
      border: 1px solid ${`var(--ds-border, ${C.gt})`};
      display: block;
      min-height: 100px;
      background: ${"var(--ds-surface, white)"};
      padding-left: ${"var(--ds-space-100, 8px)"};
      padding-right: ${"var(--ds-space-100, 8px)"};

      .bodiedExtensionView-content-wrap {
        margin-top: ${"var(--ds-space-150, 12px)"} !important;
      }
      .extensionView-content-wrap {
        margin-top: ${"var(--ds-space-150, 12px)"} !important;
      }
    }
  `,c=a.length<1,u=c&&["wide","full-width"].includes(n)?v.y.EXTENSION_CENTER_ALIGN:"";return(0,k.tZ)("section",{className:"multiBodiedExtension--container",css:d,"data-testid":"multiBodiedExtension--container","data-active-child-index":o},(0,k.tZ)(m.mP,null,(({width:o})=>function(o){return(0,k.tZ)("div",{className:`${v.y.EXTENSION} ${u}`,style:{width:c?(0,g.rW)(n,o):"100%"},"data-layout":n},(0,k.tZ)("nav",{className:"multiBodiedExtension-navigation",css:A,"data-testid":"multiBodiedExtension-navigation"},(0,k.tZ)(h,(0,r.Z)((0,r.Z)({},e),{},{actions:l,type:"multiBodiedExtension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return b(e,n,{isTopLevel:a.length<1})}catch(r){}return b(t,n,{isTopLevel:a.length<1})}))),(0,k.tZ)("article",{className:"multiBodiedExtension--frames","data-testid":"multiBodiedExtension--frames"},t))}(o))))};T.displayName="MultiBodiedExtension";const x=T,R=e=>{const t=k.iv`
    border: 1px solid ${`var(--ds-border, ${C.gt})`};
    min-height: 100px;
  `;return(0,k.tZ)("div",{css:t,className:"extension-frame","data-extension-frame":"true",style:{flexBasis:"100%"}},e.children)};R.displayName="ExtensionFrame";const Z=R;var S=n(440812);function O(e){let t=1;return e.forEach((e=>{"bulletList"!==e.type.name&&"orderedList"!==e.type.name||t++})),t}function _(e){return i.createElement("ul",{className:S.T.substr(1),"data-indent-level":e.path?O(e.path):1},e.children)}_.displayName="BulletList";var L=n(102774);const I=({forceNewLine:e=!1})=>e?i.createElement(i.Fragment,null,i.createElement("br",null),i.createElement("br",null)):i.createElement("br",null);I.displayName="HardBreak";const $=I;var M=n(215269),P=n(431676),D=n(533736),B=n(93477);function W(e){const{headingId:t,dataAttributes:n,allowHeadingAnchorLinks:a,marks:o,invisible:s}=e,l=`h${e.level}`,d=!!e.showAnchorLink,c=function(e){return!(!e||!e.length)&&e.some((e=>"alignment"===e.type.name&&"end"===e.attrs.align))}(o),u=a&&a.allowNestedHeaderLinks,p=s?void 0:t;return i.createElement(l,(0,r.Z)({id:p},n),i.createElement(i.Fragment,null,d&&c?(h=e.children,i.Children.map(h,(e=>"string"!=typeof e||/^\s*$/.test(e)?e:i.createElement("span",null,e)))):e.children,d&&t&&i.createElement(D.Z.Consumer,null,(({fireAnalyticsEvent:n})=>i.createElement(M.Z,{enableNestedHeaderLinks:u,level:e.level,onCopyText:()=>(n({action:P.om.CLICKED,actionSubject:P.Wt.BUTTON,actionSubjectId:P.VJ.HEADING_ANCHOR_LINK,eventType:P.Ze.UI}),(0,B.T)(((e="")=>{const t=new URL(window.location.href);return t.hash=encodeURIComponent(e),t.href})(t)))})))));var h}W.displayName="Heading";const H=W,F=e=>{const{text:t}=e;return i.createElement(h,(0,r.Z)((0,r.Z)({},e),{},{type:"inlineExtension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return i.createElement("span",null,e)}catch(n){}return i.createElement("span",null,t||"inlineExtension")}))};F.displayName="InlineExtension";const U=F;function z(e){return i.createElement("div",{"data-layout-section":!0},e.children)}z.displayName="LayoutSection";var j=n(928453);const V=k.iv`
  ${j.K}
  ${j.u}
`;function K(e){return(0,k.tZ)("div",{"data-layout-column":!0,"data-column-width":e.width,style:{flexBasis:`${e.width}%`}},(0,k.tZ)(m.iF,null,(0,k.tZ)("div",{css:V}),e.children))}function G(e){return i.createElement("li",null,e.children)}K.displayName="LayoutSection",G.displayName="ListItem";var X=n(396678);const q=({children:e,dataAttributes:t})=>i.createElement(X.Z,{hasContent:!0,dataAttributes:t},e);q.displayName="RenderCaption";const J=q;var Y=n(249618),Q=n(507377),ee=n(145736);function te(e){var t;let n={};const a=(0,ee.Px)({order:e.order,itemsCount:null==e||null===(t=e.content)||void 0===t?void 0:t.length});return a&&a>2&&(n.style=(0,Q.aP)(a,"object")),void 0!==e.order&&(n.start=(0,ee.hn)(e.order)),i.createElement("ol",(0,r.Z)({className:Y.Us.substr(1),"data-indent-level":e.path?O(e.path):1,start:e.start},n),e.children)}function ne(e){const{children:t}=e;return i.Children.toArray(t).length?t:i.createElement(i.Fragment,null," ")}function re({children:e,dataAttributes:t}){return i.createElement("p",(0,r.Z)({},t),i.createElement(ne,null,e))}function ae(e){return e.allowPlaceholderText?i.createElement("span",{"data-placeholder":`${e.text}`},e.text):i.createElement("span",null)}function oe(){return i.createElement("hr",null)}te.displayName="OrderedList",re.displayName="Paragraph",ae.displayName="Placeholder",oe.displayName="Rule";var ie=n(79314),se=n(587142),le=n(5891),de=n(151802);class ce extends i.Component{constructor(...e){super(...e),(0,l.Z)(this,"state",{colGroupWidths:[]}),(0,l.Z)(this,"addSortableColumn",(e=>{const{allowColumnSorting:t,index:n}=this.props;if(t){const t=!n;e=e.map(((e,n)=>{if(i.isValidElement(e)){const{tableOrderStatus:r}=this.props;let a=de.As.NO_ORDER;return r&&(a=n===r.columnIndex?r.order:de.As.NO_ORDER),i.cloneElement(e,{columnIndex:n,onSorting:this.props.onSorting,sortOrdered:a,isHeaderRow:t})}}))}return e})),(0,l.Z)(this,"addColGroupWidth",(e=>(this.state.colGroupWidths&&(e=e.map(((e,t)=>{if(i.isValidElement(e))return i.cloneElement(e,{colGroupWidth:this.state.colGroupWidths[t]})}))),e)))}render(){const{children:e,innerRef:t}=this.props,n=i.Children.toArray(e);return i.createElement("tr",{ref:t},this.props.isNumberColumnEnabled&&i.createElement("td",{className:v.y.NUMBER_COLUMN},this.props.index),(0,le.q)(this.addSortableColumn,this.addColGroupWidth)(n))}}function ue(e){return i.createElement("div",{className:"UnknownBlock"},e.children)}ce.displayName="TableRow",ue.displayName="UnknownBlock";var pe=n(225648),he=n(598385);const me=o()({__loadable_id__:"49exs",name:"WindowedCodeBlock",loader:()=>n.e(10679).then(n.bind(n,597117)).then((e=>e.default)),loading:()=>null}),fe=o()({__loadable_id__:"wK6Mn",name:"CodeBlock",loader:()=>n.e(98295).then(n.bind(n,146373)).then((e=>e.default)),loading:()=>null}),ge=o()({__loadable_id__:"SfClj",name:"TaskList",loader:()=>n.e(37825).then(n.bind(n,175124)).then((e=>e.default)),loading:()=>null}),ve=o()({__loadable_id__:"CCxEK",name:"TaskItem",loader:()=>n.e(96705).then(n.bind(n,329300)).then((e=>e.default)),loading:()=>null}),be=o()({__loadable_id__:"V3bJ6",name:"DecisionList",loader:()=>n.e(20871).then(n.bind(n,681695)).then((e=>e.default)),loading:()=>null}),ye=o()({__loadable_id__:"voU5i",name:"DecisionItem",loader:()=>n.e(4601).then(n.bind(n,477009)).then((e=>e.default)),loading:()=>null}),Ee=o()({__loadable_id__:"mqs2-",name:"Date",loader:()=>n.e(14315).then(n.bind(n,397274)).then((e=>e.default)),loading:()=>null}),we=o()({__loadable_id__:"QCGCQ",name:"Status",loader:()=>n.e(95387).then(n.bind(n,945456)).then((e=>e.default)),loading:()=>null}),Ne=o()({__loadable_id__:"RxPjq",name:"Emoji",loader:()=>n.e(36546).then(n.bind(n,127454)).then((e=>e.default)),loading:()=>null}),ke=o()({__loadable_id__:"YD3YM",name:"Panel",loader:()=>Promise.all([n.e(36546),n.e(83045)]).then(n.bind(n,221472)).then((e=>e.default)),loading:()=>null}),Ce=o()({__loadable_id__:"xWlwl",name:"EmbedCard",loader:()=>Promise.all([n.e(11216),n.e(33963),n.e(29583),n.e(87828),n.e(5946),n.e(99348),n.e(99031),n.e(94567),n.e(1434)]).then(n.bind(n,471675)).then((e=>e.default)),loading:()=>null}),Ae=o()({__loadable_id__:"HTQ25",name:"InlineCard",loader:()=>Promise.all([n.e(11216),n.e(33963),n.e(29583),n.e(87828),n.e(5946),n.e(99348),n.e(79652),n.e(99031),n.e(38401),n.e(86455),n.e(77205),n.e(94567),n.e(94301)]).then(n.bind(n,588887)).then((e=>e.default)),loading:()=>null}),Te=o()({__loadable_id__:"fjMM7",name:"BlockCard",loader:()=>Promise.all([n.e(11216),n.e(33963),n.e(29583),n.e(87828),n.e(5946),n.e(99348),n.e(79652),n.e(99031),n.e(38401),n.e(86455),n.e(77205),n.e(94567),n.e(2709)]).then(n.bind(n,830293)).then((e=>e.default)),loading:()=>null}),xe=o()({__loadable_id__:"V4ksm",name:"Media",loader:()=>n.e(50357).then(n.bind(n,738362)).then((e=>e.default)),loading:()=>null}),Re=o()({__loadable_id__:"TBeLA",name:"MediaGroup",loader:()=>n.e(12903).then(n.bind(n,60477)).then((e=>e.default)),loading:()=>null}),Ze=o()({__loadable_id__:"cuQIG",name:"MediaInline",loader:()=>Promise.all([n.e(93887),n.e(34406)]).then(n.bind(n,220331)).then((e=>e.default)),loading:()=>null}),Se=o()({__loadable_id__:"S3YVx",name:"MediaSingle",_delayHydration:!0,loader:()=>n.e(84257).then(n.bind(n,11487)).then((e=>e.default)),loading:()=>null}),Oe=o()({__loadable_id__:"7jjg7",name:"Mention",loader:()=>Promise.all([n.e(11216),n.e(90077),n.e(13197)]).then(n.bind(n,609e3)).then((e=>e.default)),loading:()=>null}),_e=o()({__loadable_id__:"DOLak",name:"Expand",loader:()=>n.e(35066).then(n.bind(n,329960)).then((e=>e.default)),loading:()=>null}),Le={blockquote:s,bulletList:_,blockCard:Te,caption:J,date:Ee,decisionItem:ye,decisionList:be,doc:L.Z,emoji:Ne,extension:E,bodiedExtension:N,multiBodiedExtension:x,extensionFrame:Z,hardBreak:$,heading:H,inlineCard:Ae,inlineExtension:U,layoutSection:z,layoutColumn:K,listItem:G,media:xe,mediaGroup:Re,mediaInline:Ze,mediaSingle:Se,mention:Oe,orderedList:te,panel:ke,paragraph:re,placeholder:ae,rule:oe,status:we,taskItem:ve,taskList:ge,table:ie.ZP,tableCell:se.pj,tableHeader:se.xD,tableRow:ce,unknownBlock:ue,unsupportedBlock:pe.Z,unsupportedInline:he.Z,expand:_e,nestedExpand:_e,embedCard:Ce},Ie=(e,t,n)=>{if("doc"===e.type.name&&!0===(null==t?void 0:t.allowSelectAllTrap))return L.Q;if("codeBlock"===e.type.name)return!0===(null==t?void 0:t.allowWindowedCodeBlock)?me:fe;return(0,r.Z)((0,r.Z)({},Le),n)[e.type.name]},$e=e=>e.reduce(((e,t)=>{if(!Me(t.type.name))return e.push(t),e;if(e.length>0&&Pe(e[e.length-1])){const n=e[e.length-1];n.content.push(t),n.nodeSize+=t.nodeSize}else e.push({type:{name:"textWrapper"},content:[t],nodeSize:t.nodeSize});return e}),[]),Me=e=>"text"===e,Pe=e=>"textWrapper"===e.type.name;function De(e){return"text"===e.type.name}},79314:(e,t,n)=>{n.d(t,{ZP:()=>P,Ty:()=>S});var r=n(615919),a=n(199009),o=n(840506),i=n(876069),s=n(310151),l=n(481010),d=n(752088),c=n(724859),u=n(5891),p=n(151802),h=n(158568),m=n(24359),f=n(956011),g=n(490579),v=n(587142),b=n(496808),y=n(39030),E=n(16728);const w=e=>{let t,{columnWidths:n,layout:r,isNumberColumnEnabled:a,renderWidth:o,tableNode:s,rendererAppearance:l,isInsideOfBlockNode:d}=e;if(!n)return[];const c=(e=>!!e.filter((e=>0!==e)).length)(n),u=n.length;let p;if(t=S(l)&&s?(0,f.Sn)(s):(e=>{switch(e){case"full-width":return h.zJ;case"wide":return h.uz;default:return h.re}})(r),!S(l)||d||c){if(!c)return null}else{const e=((a?t-h.XV:t)-1)/u;p=new Array(u).fill(e)}p=p||n;const m=o<t?o:t;let g=a?h.XV:0,v=g,b=0;p.forEach((e=>{e?g+=Math.ceil(e):b+=1,v+=Math.ceil(e)||h.MJ}));let y=0,E=0;if(b>0){if(v>m){const e=Math.ceil((m-g)/b);y=e<h.MJ?h.MJ:e}}else o<g&&(E=(({renderWidth:e,tableWidth:t,maxScale:n})=>{const r=1-e/t;return r<n?r:n})({renderWidth:o,tableWidth:g,maxScale:.3}));return p.map((e=>{const t=((e,t,n,r,a)=>0===e?e:0===r&&a?Math.max(Math.floor((1-a)*e),i.kB):Math.max(e-i.Ok,r?h.MJ:i.kB))(e,0,0,b,E)||y;return t?{width:`${t}px`}:{}}))},N=e=>{let{columnWidths:t,isNumberColumnEnabled:n}=e;if(!t)return null;const r=w(e);return r?o.createElement("colgroup",null,n&&o.createElement("col",{style:{width:h.XV},"data-test-id":"num"}),r.map(((e,t)=>o.createElement("col",{key:t,style:e})))):null};N.displayName="Colgroup";const k=o.memo((({innerRef:e,isNumberColumnEnabled:t,columnWidths:n,layout:r,renderWidth:a,children:i,tableNode:s,rendererAppearance:l,isInsideOfBlockNode:d})=>{const c=s?(0,f.Sn)(s):h.re;return o.createElement("table",{"data-testid":"renderer-table","data-number-column":t,"data-table-width":c,ref:e},o.createElement(N,{columnWidths:n,layout:r,isNumberColumnEnabled:t,renderWidth:a,tableNode:s,rendererAppearance:l,isInsideOfBlockNode:d}),o.createElement("tbody",null,i))}));function C(e,t){return o.Children.toArray(e).map((e=>o.isValidElement(e)?(e.props.children&&(e=o.cloneElement(e,{children:C(e.props.children,t)})),o.cloneElement(e,t)):e))}const A={none:y.iv`
    display: none;
  `,stick:y.iv`
    position: fixed;
  `,"pin-bottom":y.iv`
    position: absolute;
  `},T=(e,t,n)=>{let r;return r=S(n)?13:h.r0,y.iv`
    ${"number"==typeof e&&`top: ${e}px;`}
    width: ${t}px;
    z-index: ${r};
    &
      .${i.Up.TABLE_CONTAINER},
      &
      .${i.Up.TABLE_STICKY_WRAPPER}
      > table {
      margin-top: 0;
      margin-bottom: 0;
      tr {
        background: ${"var(--ds-surface, white)"};
      }
    }

    border-top: ${8}px solid
      ${"var(--ds-surface, white)"};
    background: ${"var(--ds-surface-overlay, white)"};
    box-shadow: 0 6px 4px -4px ${`var(--ds-shadow-overflow-perimeter, ${E.bt})`};

    div[data-expanded='false'] & {
      display: none;
    }

    &
      .${i.Up.TABLE_CONTAINER}.is-sticky.right-shadow::after,
      &
      .${i.Up.TABLE_CONTAINER}.is-sticky.left-shadow::before {
      top: 0px;
      height: 100%;
    }

    &.fixed-table-div-custom-table-resizing[mode='stick'] {
      z-index: ${r};
    }
  `},x=e=>{const{top:t,wrapperWidth:n,mode:a,rendererAppearance:o}=e,i=[T(t,n,o),null==A?void 0:A[a]],s={mode:a};return(0,y.tZ)("div",(0,r.Z)((0,r.Z)({},s),{},{"data-testid":"sticky-table-fixed",className:S(o)?"fixed-table-div-custom-table-resizing":"",css:i}),e.children)};x.displayName="FixedTableDiv";const R=({top:e,left:t,mode:n,shadowClassNames:r,innerRef:a,wrapperWidth:o,tableWidth:s,isNumberColumnEnabled:l,layout:d,children:c,columnWidths:u,renderWidth:p,rowHeight:h,tableNode:m,rendererAppearance:f})=>{let g;return g=S(f)?(0,y.iv)({top:"pin-bottom"===n?e:void 0,position:"absolute"}):(0,y.iv)({left:t&&t<0?t:void 0,top:"pin-bottom"===n?e:void 0,position:"relative"}),(0,y.tZ)("div",{css:g},(0,y.tZ)(x,{top:"stick"===n?e:void 0,mode:h>300?"none":n,wrapperWidth:o,rendererAppearance:f},(0,y.tZ)("div",{className:`${i.Up.TABLE_CONTAINER} is-sticky ${r||""}`,"data-layout":d,style:{width:s}},(0,y.tZ)("div",{ref:a,className:`${i.Up.TABLE_STICKY_WRAPPER}`,style:{overflow:"hidden"}},(0,y.tZ)(k,{columnWidths:u,layout:d,isNumberColumnEnabled:l,renderWidth:p,tableNode:m,rendererAppearance:f},C(c,{invisible:!0}))))))};R.displayName="StickyTable";class Z{constructor(e){this.ref=e,this.ref=e}static fromElement(e){return new Z(function(e){let t=e;if(!t)return null;for(;t=t.parentElement;){const e=window.getComputedStyle(t);if("scroll"===e.overflow||"scroll"===e.overflowY)return t}return null}(e)||window)}get isElement(){return this.ref instanceof HTMLElement}get top(){return this.ref instanceof HTMLElement?this.ref.getBoundingClientRect().top:0}addEventListener(e,t,...n){this.ref.addEventListener(e,t,...n)}removeEventListener(e,t,...n){this.ref.removeEventListener(e,t,...n)}}const S=e=>(0,m.e)("platform.editor.custom-table-width")&&(e=>(e=>"full-page"===e)(e)||(e=>"full-width"===e)(e))(e),O=e=>{if(!e.length)return!1;const{children:t}=e[0].props;return!!t.length&&(1===t.length?t[0].type===v.xD:t.every((e=>e.type===v.xD)))},_=(e,t)=>O(t)&&e&&e.firstChild&&!(e=>{let t=!1;return e.forEach((e=>t=t||e.attrs.rowspan>1)),t})(e.firstChild);class L extends o.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{stickyMode:"none",wrapperWidth:0,headerRowHeight:0}),(0,a.Z)(this,"tableRef",o.createRef()),(0,a.Z)(this,"stickyHeaderRef",o.createRef()),(0,a.Z)(this,"stickyWrapperRef",o.createRef()),(0,a.Z)(this,"wrapperRef",o.createRef()),(0,a.Z)(this,"nextFrame",void 0),(0,a.Z)(this,"overflowParent",null),(0,a.Z)(this,"resizeObserver",null),(0,a.Z)(this,"applyResizerChange",(e=>{let t=this.state.wrapperWidth,n=this.state.headerRowHeight;for(const r of e)r.target===this.wrapperRef.current?t=r.contentRect.width:r.target===this.stickyHeaderRef.current&&(n=Math.round(r.contentRect.height));n===this.state.headerRowHeight&&t===this.state.wrapperWidth||this.setState({wrapperWidth:t,headerRowHeight:n})})),(0,a.Z)(this,"componentWillUnmount",(()=>{this.overflowParent&&this.overflowParent.removeEventListener("scroll",this.onScroll),this.nextFrame&&cancelAnimationFrame(this.nextFrame),this.resizeObserver&&this.resizeObserver.disconnect()})),(0,a.Z)(this,"getScrollTop",(()=>{const{stickyHeaders:e}=this.props,t=e&&e.offsetTop||0;return(this.overflowParent?this.overflowParent.top:0)+t})),(0,a.Z)(this,"updateSticky",(()=>{const e=this.tableRef.current,t=this.stickyHeaderRef.current;if(!e||!t)return;const n=this.getScrollTop()+8,r=(a=e,Math.round(a.getBoundingClientRect().top));var a;const o=r+e.clientHeight,i=((e,t,n,r)=>t<=e&&!(n-r<=e))(n,r,o,t.clientHeight),s=((e,t,n)=>t-n<=e&&!(t<e))(n,o,t.clientHeight);let l="none";s?l="pin-bottom":i&&(l="stick"),this.state.stickyMode!==l&&this.setState({stickyMode:l}),this.nextFrame=void 0})),(0,a.Z)(this,"onScroll",(()=>{this.nextFrame||(this.nextFrame=requestAnimationFrame(this.updateSticky))})),(0,a.Z)(this,"onWrapperScrolled",(()=>{this.wrapperRef.current&&this.stickyWrapperRef.current&&(this.stickyWrapperRef.current.scrollLeft=this.wrapperRef.current.scrollLeft)})),(0,a.Z)(this,"grabFirstRowRef",(e=>o.Children.map(e||!1,((e,t)=>0===t&&o.isValidElement(e)?o.cloneElement(e,{innerRef:this.stickyHeaderRef}):e))))}componentDidMount(){this.resizeObserver=new ResizeObserver(this.applyResizerChange),this.wrapperRef.current&&this.resizeObserver.observe(this.wrapperRef.current),this.stickyHeaderRef.current&&this.resizeObserver.observe(this.stickyHeaderRef.current),this.props.stickyHeaders&&(this.overflowParent=Z.fromElement(this.tableRef.current),this.overflowParent.addEventListener("scroll",this.onScroll))}componentDidUpdate(e,t){this.props.stickyHeaders&&!this.overflowParent?this.overflowParent=Z.fromElement(this.tableRef.current):!this.props.stickyHeaders&&this.overflowParent&&(this.overflowParent.removeEventListener("scroll",this.onScroll),this.overflowParent=null),this.props.stickyHeaders!==e.stickyHeaders&&this.updateSticky(),t.stickyMode!==this.state.stickyMode&&this.onWrapperScrolled()}get pinTop(){if(this.tableRef.current&&this.stickyHeaderRef.current)return this.tableRef.current.offsetHeight-this.stickyHeaderRef.current.offsetHeight+i.MZ-8}get stickyTop(){switch(this.state.stickyMode){case"pin-bottom":return this.pinTop;case"stick":return this.props.stickyHeaders&&this.props.stickyHeaders.offsetTop;default:return}}render(){const{isNumberColumnEnabled:e,layout:t,renderWidth:n,columnWidths:r,stickyHeaders:a,tableNode:s,rendererAppearance:l,isInsideOfBlockNode:d}=this.props,{stickyMode:c}=this.state,u=h.re;let p,g,v;const b=!!n&&n>0;var y;p=S(l)&&s?((e,t)=>{if("full-width"!==t||e.attrs.width){const t=(0,f.Sn)(e);return b?Math.min(t,n):t}return b?Math.min(h.zJ,n):h.zJ})(s,l):(0,i.WM)(t,n,!1),("full-page"===(y=l)||"mobile"===y)&&"inherit"!==p&&p>u&&(g=u/2-p/2);const E=o.Children.toArray(this.props.children),w=!(null!=s&&s.attrs.width)&&"full-width"===l&&"full-width"!==t,N=S(l)&&(null==s?void 0:s.attrs.width);return v=w?"full-width":N?"custom":t,o.createElement(o.Fragment,null,!(0,m.e)("platform.editor.custom-table-width")&&a&&_(s,E)&&o.createElement(R,{isNumberColumnEnabled:e,tableWidth:p,layout:t,renderWidth:n,handleRef:this.props.handleRef,shadowClassNames:this.props.shadowClassNames,top:this.stickyTop,left:g,mode:c,innerRef:this.stickyWrapperRef,wrapperWidth:this.state.wrapperWidth,columnWidths:r,rowHeight:this.state.headerRowHeight,rendererAppearance:l},[E&&E[0]]),o.createElement("div",{className:`${i.Up.TABLE_CONTAINER} ${this.props.shadowClassNames||""}`,"data-layout":v,ref:this.props.handleRef,style:{width:p,left:g}},(0,m.e)("platform.editor.custom-table-width")&&a&&_(s,E)&&o.createElement(R,{isNumberColumnEnabled:e,tableWidth:p,layout:t,renderWidth:n,handleRef:this.props.handleRef,shadowClassNames:this.props.shadowClassNames,top:this.stickyTop,mode:c,innerRef:this.stickyWrapperRef,wrapperWidth:this.state.wrapperWidth,columnWidths:r,rowHeight:this.state.headerRowHeight,tableNode:s,rendererAppearance:l},[E&&E[0]]),o.createElement("div",{className:i.Up.TABLE_NODE_WRAPPER,ref:this.wrapperRef,onScroll:this.props.stickyHeaders&&this.onWrapperScrolled},o.createElement(k,{innerRef:this.tableRef,columnWidths:r,layout:t,isNumberColumnEnabled:e,renderWidth:n,tableNode:s,rendererAppearance:l,isInsideOfBlockNode:d},this.grabFirstRowRef(E)))))}}L.displayName="TableContainer";class I extends o.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{tableOrderStatus:void 0}),(0,a.Z)(this,"addSortableColumn",(e=>{const{tableNode:t,allowColumnSorting:n,smartCardStorage:r}=this.props,{tableOrderStatus:a}=this.state;return n&&O(e)&&t&&!(0,c.Ak)(t)?((e,t,n)=>o.Children.map(e,((e,r)=>0===r?o.cloneElement(o.Children.only(e),{tableOrderStatus:t,onSorting:n}):e)))(((e,t,n,r)=>{if(!r||r.order===p.As.NO_ORDER)return e;const{order:a,columnIndex:o}=r,i=(0,d.zR)({getInlineCardTextFromStore(e){const{url:t}=e;return t&&n.get(t)||null}},a),s=(0,c.oc)(t).map(((t,n)=>({rowNodes:t,rowReact:e[n]}))),l=s.shift(),u=s.sort(((e,t)=>i(e.rowNodes[o],t.rowNodes[o])));return l&&u.unshift(l),u.map((e=>e.rowReact))})(e,t,r,a),a,this.changeSortOrder):e})),(0,a.Z)(this,"changeSortOrder",((e,t)=>{this.setState({tableOrderStatus:{columnIndex:e,order:t}})})),(0,a.Z)(this,"addNumberColumnIndexes",(e=>{const{isNumberColumnEnabled:t}=this.props,n=O(e);return o.Children.map(e,((e,r)=>o.cloneElement(o.Children.only(e),{isNumberColumnEnabled:t,index:n?0===r?"":r:r+1})))}))}render(){const{children:e}=this.props;if(!e)return null;let t=o.Children.toArray(e);const n=(0,u.q)(this.addNumberColumnIndexes,this.addSortableColumn)(t);return o.createElement(L,(0,r.Z)({},this.props),n)}}I.displayName="TableProcessor";const $=(0,s.Z)(I,{overflowSelector:`.${i.Up.TABLE_NODE_WRAPPER}`,useShadowObserver:!0}),M=e=>o.createElement(l.mP,null,(({width:t})=>{var n;const a="full-page"===e.rendererAppearance?t-2*g.zA:t;return(null===(n=e.columnWidths)||void 0===n?void 0:n.reduce(((e,t)=>e+t),0))||0||S(e.rendererAppearance)?o.createElement($,(0,r.Z)({renderWidth:a},e)):o.createElement(I,(0,r.Z)({renderWidth:a},e))}));M.displayName="TableWithWidth";const P=(0,b.Fi)(M)},587142:(e,t,n)=>{n.d(t,{pj:()=>L,xD:()=>O});var r=n(615919),a=n(840506),o=n(800316),i=n(737073),s=n(621130),l=n(151802),d=n(723759),c=n(39030),u=n(332072),p=n(16728),h=n(601196),m=n(122529),f=n(248960);let g=function(e){return e.ASC="sorting-icon-svg__asc",e.DESC="sorting-icon-svg__desc",e.NO_ORDER="sorting-icon-svg__no_order",e.SORTING_NOT_ALLOWED="sorting-icon-svg__not-allowed",e}({});const v=c.iv`
  position: absolute;
  display: flex;
  height: 28px;
  width: 28px;
  margin: ${"var(--ds-space-075, 6px)"};
  right: 0;
  top: 0;
  border: 2px solid ${"var(--ds-border, #fff)"};
  border-radius: ${"var(--ds-border-radius-100, 4px)"};
  background-color: ${`var(--ds-surface-overlay, ${p.IR})`};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${`var(--ds-surface-overlay-hovered, ${p.gt})`};
  }

  &:active {
    background-color: ${"var(--ds-surface-overlay-pressed, rgba(179, 212, 255, 0.6))"};
  }

  &.${f.y.SORTABLE_COLUMN_ICON}__not-allowed {
    cursor: not-allowed;
  }
`,b=c.iv`
  width: 8px;
  height: 12px;
  transition: transform 0.3s cubic-bezier(0.15, 1, 0.3, 1);
  transform-origin: 50% 50%;
  display: flex;
  justify-content: center;

  &.${g.DESC} {
    transform: rotate(-180deg);
  }

  &.${f.y.SORTABLE_COLUMN_ICON}-inactive {
    opacity: 0.7;
  }
`,y=c.iv`
  height: 100%;
  width: 2px;
  border-radius: 50px;
  background: ${"var(--ds-icon, #42526E)"};

  &::before,
  &::after {
    background: ${"var(--ds-icon, #42526E)"};
    content: '';
    height: 2px;
    width: 6px;
    position: absolute;
    border-radius: 50px;
  }

  &::before {
    transform: rotate(45deg) translate(3.4px, 8.5px);
  }

  &::after {
    transform: rotate(-45deg) translate(-6.3px, 5.7px);
  }
`,E=(e,t)=>{const n=t!==l.As.NO_ORDER,r=`${f.y.SORTABLE_COLUMN_ICON}-${n?"active":"inactive"}`;if(!e)return`${g.SORTING_NOT_ALLOWED} ${r}`;switch(t){case l.As.ASC:return`${g.ASC} ${r}`;case l.As.DESC:return`${g.DESC} ${r}`;default:return`${g.NO_ORDER} ${r}`}},w=({isSortingAllowed:e,sortOrdered:t,intl:n,onClick:r,onKeyDown:a})=>{const o=`${f.y.SORTABLE_COLUMN_ICON}${e?"":` ${f.y.SORTABLE_COLUMN_ICON}__not-allowed`}`,i=((e,t,n)=>{const{noOrderLabel:r,ascOrderLabel:a,descOrderLabel:o,invalidLabel:i}=h.sortingIconMessages;if(!t)return e.formatMessage(i);switch(n){case l.As.NO_ORDER:return e.formatMessage(r);case l.As.ASC:return e.formatMessage(a);case l.As.DESC:return e.formatMessage(o)}return""})(n,e,t),s=((e,t,n)=>{const{noOrderLabel:r,ascOrderLabel:a,descOrderLabel:o,invalidLabel:i,defaultLabel:s}=h.sortingAriaLabelMessages;if(!t)return e.formatMessage(i);switch(n){case l.As.NO_ORDER:return e.formatMessage(r);case l.As.ASC:return e.formatMessage(a);case l.As.DESC:return e.formatMessage(o)}return e.formatMessage(s)})(n,e,t);return(0,c.tZ)(u.Z,{delay:0,content:i,position:"top"},(0,c.tZ)("div",{css:v,className:o,role:"button",tabIndex:e?0:-1,"aria-label":s,"aria-disabled":!e,onClick:()=>{e&&r()},onKeyDown:t=>{e&&a(t)}},(0,c.tZ)("div",{css:b,className:E(e,t)},(0,c.tZ)("div",{css:y}))))};w.displayName="SortingIcon";const N=(0,m.ZP)(w);var k=n(415891),C=n(431676),A=n(747472);const T=["LABEL","INPUT"],x=(e,t)=>{const{noneSortingLabel:n,ascSortingLabel:r,descSortingLabel:a}=h.tableCellMessages;switch(t){case l.As.NO_ORDER:return e.formatMessage(n);case l.As.ASC:return e.formatMessage(r);case l.As.DESC:return e.formatMessage(a);default:return e.formatMessage(n)}},R=({background:e,colGroupWidth:t,offsetTop:n,colorMode:r})=>{const a={};if(e&&!e.includes("--ds-background-neutral")){const t=(0,d.N1)(e);a.backgroundColor=t||("dark"===r?(0,o.t)(e):e)}return t&&(a.width=t,a.minWidth=t),void 0!==n&&(a.top=n),a},Z=e=>function(t){const{colorMode:n}=(0,s.Z)(),{children:o,className:l,onClick:d,colwidth:c,colGroupWidth:u,rowspan:p,colspan:h,background:m,offsetTop:f,ariaSort:g}=t,v=m?i.R_.get(m):"";return a.createElement(e,(0,r.Z)((0,r.Z)({rowSpan:p,colSpan:h,style:R({background:m,colGroupWidth:u,offsetTop:f,colorMode:n}),colorname:v,onClick:d,className:l},((e,t)=>{const n={};return e&&(n["data-colwidth"]=e.join(",")),t&&(n["data-cell-background"]=t),n})(c,m)),{},{"aria-sort":g}),o)},S=Z("th"),O=(_=S,function(e){const t=(0,A.Z)(),{allowColumnSorting:n,onSorting:o,children:i,sortOrdered:s,isHeaderRow:d}=e,c=s===l.As.NO_ORDER?f.y.SORTABLE_COLUMN_NO_ORDER:"";return n&&d?a.createElement(_,(0,r.Z)((0,r.Z)({},e),{},{className:f.y.SORTABLE_COLUMN_WRAPPER,ariaSort:x(t,s)}),a.createElement("div",{className:f.y.SORTABLE_COLUMN},i,a.createElement("figure",{className:`${f.y.SORTABLE_COLUMN_ICON_WRAPPER} ${c}`},a.createElement(N,{isSortingAllowed:!!o,sortOrdered:s,onClick:u,onKeyDown:function(e){const{tagName:t}=e.target;[" ","Enter","Spacebar"].includes(e.key)&&!T.includes(t)&&(e.preventDefault(),u())}})))):a.createElement(_,(0,r.Z)({},e));function u(){const{fireAnalyticsEvent:t,onSorting:n,columnIndex:r,sortOrdered:a}=e;if(n&&null!=r){const e=(e=>{switch(e){case l.As.NO_ORDER:return l.As.ASC;case l.As.ASC:return l.As.DESC;case l.As.DESC:return l.As.NO_ORDER}return l.As.NO_ORDER})(a);n(r,e),t&&t({action:C.om.SORT_COLUMN,actionSubject:C.Wt.TABLE,attributes:{platform:k.iw.WEB,mode:k.IK.RENDERER,columnIndex:r,sortOrder:e},eventType:C.Ze.TRACK})}else t&&t({action:C.om.SORT_COLUMN_NOT_ALLOWED,actionSubject:C.Wt.TABLE,attributes:{platform:k.iw.WEB,mode:k.IK.RENDERER},eventType:C.Ze.TRACK})}});var _;const L=Z("td")},93477:(e,t,n)=>{n.d(t,{T:()=>r});const r=e=>new Promise(((t,n)=>{!!navigator.clipboard&&"function"==typeof navigator.clipboard.writeText?navigator.clipboard.writeText(e).then((()=>t()),(e=>n(e))):n("Clipboard API is not supported")}))},179977:(e,t,n)=>{function r(e){if(!e||"boolean"==typeof e)return!1;const{allowNestedHeaderLinks:t}=e;return!!t}function a(e){if(r(e))return e.activeHeadingId}n.d(t,{G:()=>a,d:()=>r})},763386:(e,t,n)=>{n.d(t,{D:()=>A});var r=n(785984),a=n(75119),o=n(891722),i=n(306014),s=n(326482),l=n(431676),d=n(415891),c=n(710358);let u=function(e){return e.NORMAL="normal",e.DEGRADED="degraded",e.BLOCKING="blocking",e}({});const p=10,h=25,m=(e,t)=>{const{unsupportedNodes:n,supportedNodes:r,unsupportedNodeTypeCount:a}=(e=>{let t=0,n=0;const r={},a=["unsupportedInline","unsupportedBlock","confluenceUnsupportedInline","confluenceUnsupportedBlock"];return(0,c.f)(e,{any:e=>{if(a.includes(e.type)){var o;const n=null===(o=e.attrs)||void 0===o?void 0:o.originalValue;return n&&(0,c.f)(n,{any:(e,n)=>{var a,o,i,s;t++;const l=`${null!==(a=null===(o=n.parent)||void 0===o||null===(o=o.node)||void 0===o?void 0:o.type)&&void 0!==a?a:"unknown"}/${null!==(i=null==e?void 0:e.type)&&void 0!==i?i:"unknown"}`;r[l]=(null!==(s=null==r?void 0:r[l])&&void 0!==s?s:0)+1}}),!1}n++}}),{unsupportedNodes:t,supportedNodes:n,unsupportedNodeTypeCount:r}})(e),o=(e=>({degraded:(null==e?void 0:e.degraded)||p,blocking:(null==e?void 0:e.blocking)||h}))(t),i=Math.round(n/(n+r)*100),s=((e,t)=>t.degraded<=e&&e<t.blocking?u.DEGRADED:t.blocking<=e?u.BLOCKING:u.NORMAL)(i,o);return{severity:s,percentage:i,counts:{supportedNodes:r,unsupportedNodes:n,unsupportedNodeTypeCount:a}}};var f=n(667266);let g={};const v=(e,t,n)=>{var r;const{thresholds:a,samplingRates:o}=t,i=null!==(r=e.appearance)&&void 0!==r?r:"unknown";g[i]||(g[i]=new Set);if(g[i].has(e.rendererId))return;g[i].add(e.rendererId);const s=o&&o[i]||100;var c;1===g[i].size&&(c=()=>((e,t,n)=>{try{const{severity:r,percentage:a,counts:{supportedNodes:o,unsupportedNodes:i,unsupportedNodeTypeCount:s}}=m(e.doc,t);n({action:l.om.UNSUPPORTED_CONTENT_LEVELS_TRACKING_SUCCEEDED,actionSubject:l.Wt.RENDERER,attributes:{appearance:(0,f.$L)(e.appearance),platform:d.iw.WEB,unsupportedContentLevelSeverity:r,unsupportedContentLevelPercentage:a,unsupportedNodesCount:i,supportedNodesCount:o,unsupportedNodeTypeCount:s},eventType:l.Ze.OPERATIONAL})}catch(r){n({action:l.om.UNSUPPORTED_CONTENT_LEVELS_TRACKING_ERRORED,actionSubject:l.Wt.RENDERER,attributes:{platform:d.iw.WEB,error:r instanceof Error?r.message:String(r)},eventType:l.Ze.OPERATIONAL})}})(e,a,n),"function"==typeof window.requestIdleCallback?window.requestIdleCallback(c):setTimeout(c,0)),g[i].size%s==0&&(g[i]=new Set)};var b=n(334006);const y=!(!window.performance||!performance.now),E=e=>{const t=y?performance.now():Date.now();return{output:e(),time:(y?performance.now():Date.now())-t}},w=(0,r.Z)(((e,t,n,r,a)=>{let s;if(r){const{transformedAdf:n,isTransformed:r}=(0,b.e)(e);r&&a&&a({action:l.om.MEDIA_LINK_TRANSFORMED,actionSubject:l.Wt.RENDERER,eventType:l.Ze.OPERATIONAL}),s=(0,i.gh)(t,n||e,a)}else s=(0,o.l9)(e,t,n);return s?("doc"===s.type&&r&&(Array.isArray(s.content)&&0===s.content.length&&s.content.push({type:"paragraph",content:[]}),s.version||(s.version=1)),s):s}),((e,t)=>{const[n,r,a,o]=e,[i,s,l,d]=t;return N(n,i)&&r===s&&a===l&&o===d})),N=(e,t)=>e===t||("string"==typeof e&&"string"==typeof t?e===t:e.type&&e.toJSON&&t.type&&t.toJSON?JSON.stringify(e.toJSON())===JSON.stringify(t.toJSON()):JSON.stringify(e)===JSON.stringify(t)),k=(0,r.Z)(((e,t)=>e.serializeFragment(t.content)),((e,t)=>{const[n,r]=e,[a,o]=t;return n===a&&N(r,o)})),C=(0,r.Z)(((e,t,n)=>{const r=e.nodeFromJSON(t);try{r.check()}catch(a){n&&n({action:l.om.INVALID_PROSEMIRROR_DOCUMENT,actionSubject:l.Wt.RENDERER,attributes:{platform:d.iw.WEB,errorStack:a instanceof Error?a.message:String(a)},eventType:l.Ze.OPERATIONAL})}return r}),((e,t)=>{const[n,r]=e,[a,o]=t;return n===a&&N(r,o)})),A=(e,t,n=a.R4,r="final",o=!1,i="noid",l,d,c)=>{const u={sanitizeTime:0},{output:p,time:h}=E((()=>w(e,n,r,o,l)));if(u.sanitizeTime=h,!p)return{stat:u,result:null};const{output:m,time:f}=E((()=>C(n,p,l)));u.buildTreeTime=f;const{output:g,time:b}=E((()=>k(t,m)));if(u.serializeTime=b,l&&o&&((0,s.cn)(m,n,l),null!=d&&d.enabled)){v({doc:p,appearance:c,rendererId:i},d,l)}return{result:g,stat:u,pmDoc:m}}},656099:(e,t,n)=>{n.d(t,{x_:()=>le,ZP:()=>pe});var r=n(615919),a=n(199009),o=n(840506),i=n(39030),s=n(75119),l=n(427286),d=n(568846),c=n(330092),u=n(225648);const p=(0,n(430564).Z)()(class extends o.Component{render(){const{render:e,createAnalyticsEvent:t}=this.props;return e(t)}});var h=n(240767),m=n(481010),f=n(445741),g=n(353385),v=n(91769),b=n(679997),y=n(871551),E=n(542960),w=n(667266),N=n(213385),k=n(342256),C=n(158568),A=n(328338),T=n(806640),x=n(492516),R=n.n(x),Z=n(885666),S=n(763386),O=n(490579);const _=e=>{const{children:t,backgroundColor:n,fadeHeight:r,height:a}=e,o=((e,t,n)=>i.iv`
  position: relative;
  overflow-y: hidden;
  max-height: ${e}px;
  &::after {
    content: '';
    position: absolute;
    top: ${t}px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      ${"var(--ds-background-neutral-subtle, rgba(255, 255, 255, 0))"},
      ${n}
    );
  }
`)(a,a-r,n);return(0,i.tZ)("div",{css:o},t)};_.displayName="FadeOut";class L extends o.Component{constructor(e){super(e)}render(){const{height:e=95,fadeHeight:t=24,backgroundColor:n="var(--ds-surface, white)",children:r}=this.props;return(0,i.tZ)(_,{height:e,fadeHeight:t,backgroundColor:n},r)}}L.displayName="TruncatedWrapper";var I=n(431676),$=n(415891),M=n(533736),P=n(496808),D=n(170080);function B(){if("undefined"!=typeof window&&!window.navigator.userAgent.includes("jsdom"))return null;const e=Math.floor(9999990001*Math.random())+9999,t=function(e){return`\n  (function(window){\n    ${W};\n    (${H.toString()})("${e}", breakoutConsts);\n  })(window);\n`}(e);return o.createElement("script",{"data-breakout-script-id":e,dangerouslySetInnerHTML:{__html:t}})}B.displayName="BreakoutSSRInlineScript";const W=`\n  var breakoutConsts = ${JSON.stringify(D.Z7)};\n  breakoutConsts.mapBreakpointToLayoutMaxWidth = ${D.Z7.mapBreakpointToLayoutMaxWidth.toString()};\n  breakoutConsts.getBreakpoint = ${D.Z7.getBreakpoint.toString()};\n  breakoutConsts.calcBreakoutWidth = ${D.Z7.calcBreakoutWidth.toString()};\n  breakoutConsts.calcLineLength = ${D.Z7.calcLineLength.toString()};\n  breakoutConsts.calcWideWidth = ${D.Z7.calcWideWidth.toString()};\n`;function H(e,t){const n=["full-width","wide","custom"];function r(e,t){if(e)for(;e.parentElement;){if(t(e))return e.parentElement;e=e.parentElement}}const a=r(document.querySelector('[data-breakout-script-id="'+e+'"]'),(e=>{var t;return!(null===(t=e.parentElement)||void 0===t||!t.classList.contains("ak-renderer-wrapper"))}));if(!a)return;const o=new MutationObserver((e=>{e.forEach((e=>{e.target.nodeType===Node.ELEMENT_NODE&&(e.target.classList.contains("ak-renderer-document")?e.addedNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;let r;const o=e,i=o.dataset.mode||o.dataset.layout||"";if(i&&n.includes(i)){if(o.classList.contains("pm-table-container")&&"custom"===i){const e=a.offsetWidth-t.padding;r=`${Math.min(parseInt(o.style.width),e)}px`}else r=t.calcBreakoutWidth(i,a.offsetWidth);if(o.style.width!==r&&(o.style.width=r,o.classList.contains("pm-table-container")&&!a.classList.contains("is-full-width"))){const e=t.calcLineLength(),n=e/2-parseInt(r)/2;n<0&&parseInt(r)>e?o.style.left=n+"px":o.style.left=""}}})):"mediaSingle"===e.target.dataset.nodeType&&i(e.target))}))})),i=e=>{if(e.style.width)return;if(r(e,(e=>e instanceof HTMLTableCellElement)))return;const t=e.dataset.mode||e.dataset.layout||"",a=e.dataset.width,o="pixel"===e.dataset.widthType;n.includes(t)?e.style.width="100%":a&&!o&&(e.style.width=`${a}%`)};o.observe(a,{childList:!0,subtree:!0});const s=()=>{o.disconnect(),window.removeEventListener("load",s)};window.addEventListener("load",s)}D.Z7.calcLineLength;var F=n(90651),U=n(975182),z=n(241897),j=n(179977),V=n(224816),K=n(867153),G=n(398951);function X(e){return"href"in e&&null!=e.href||(!!e.classList.contains(G._)||!!e.classList.contains(K.n))}const q=o.createContext({}),J=q.Provider;var Y=n(785984),Q=n(813719);class ee extends o.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{errorCaptured:!1})}fireAnalyticsEvent(e){const{createAnalyticsEvent:t}=this.props;if(t){const n=A.XD.editor;t(e).fire(n)}}hasFallback(){return void 0!==this.props.fallbackComponent}shouldRecover(){return this.hasFallback()&&this.state.errorCaptured}componentDidCatch(e,t){this.fireAnalyticsEvent({action:I.om.CRASHED,actionSubject:this.props.component,actionSubjectId:this.props.componentId,eventType:I.Ze.OPERATIONAL,attributes:{platform:$.iw.WEB,errorMessage:null==e?void 0:e.message,componentStack:null==t?void 0:t.componentStack,errorRethrown:Boolean(this.props.rethrowError)}}),(0,Q.O)(e,{location:"renderer"}),this.hasFallback()&&this.setState({errorCaptured:!0},(()=>{if(this.props.rethrowError)throw e}))}render(){return this.shouldRecover()?this.props.fallbackComponent:this.props.children}}ee.displayName="ErrorBoundary";var te=n(394367),ne=n.n(te),re=n(693859);function ae(e){const t=(0,o.useMemo)((()=>ne()(e.handleAnalyticsEvent,500)),[e.handleAnalyticsEvent]);return(0,re.n)({onRender:({renderCount:n,propsDifference:r,componentId:a})=>{n&&t({action:e.action,actionSubject:e.actionSubject,attributes:{count:n,propsDifference:r,componentId:a},eventType:I.Ze.OPERATIONAL})},propsDiffingOptions:{enabled:!0,props:e.componentProps,propsToIgnore:e.propsToIgnore,useShallow:e.useShallow},zeroBasedCount:!0}),null}var oe=n(542434);const ie=({children:e,ssr:t})=>{const[n,r]=(0,o.useState)(),a=(0,c.yL)("mediaProvider"),i=(0,o.useContext)(oe.U5),s=(0,o.useMemo)((()=>n?(0,oe.y0)(n):void 0),[n]);return(0,o.useEffect)((()=>{null!=t&&t.config?r(t.config):a&&a.then((e=>{r(e.viewMediaClientConfig)}))}),[a,t]),o.createElement(oe.U5.Provider,{value:s||i},e)};ie.displayName="EditorMediaClientProvider";class se extends o.PureComponent{constructor(e){super(e),(0,a.Z)(this,"providerFactory",void 0),(0,a.Z)(this,"serializer",void 0),(0,a.Z)(this,"editorRef",void 0),(0,a.Z)(this,"rafID",void 0),(0,a.Z)(this,"mouseDownSelection",void 0),(0,a.Z)(this,"id",void 0),(0,a.Z)(this,"renderedMeasurementDistortedDurationMonitor",(0,g.W)()),(0,a.Z)(this,"featureFlags",(0,Y.Z)((e=>({featureFlags:(0,k.I)(e,{objectFlagKeys:["rendererRenderTracking"]})})))),(0,a.Z)(this,"fireAnalyticsEvent",(e=>{const{createAnalyticsEvent:t}=this.props;if(t){const n=A.XD.editor;t(e).fire(n)}})),(0,a.Z)(this,"getSchema",(0,Y.Z)(((e,t)=>e||(0,s.kp)(t)))),(0,a.Z)(this,"onMouseDownEditView",(()=>{const e=window.getSelection();this.mouseDownSelection=null!==e?e.toString():void 0})),(0,a.Z)(this,"handleMouseTripleClickInTables",(e=>{var t,n;if(v.Z.ios||v.Z.android)return;const r=v.Z.chrome||v.Z.safari,a=e.detail>=3;if(!r||!a)return;const o=window.getSelection();if(!o)return;const{type:i,anchorNode:s,focusNode:l}=o;if(!Boolean("Range"===i&&s&&l))return;const d=e.target.closest("td,th");if(!Boolean(d))return;const c=d.contains(s),u=d.contains(l);if(!!(c&&u))return;const p=c?null===(t=s.parentElement)||void 0===t?void 0:t.closest("div,p"):u?null===(n=l.parentElement)||void 0===n?void 0:n.closest("div,p"):d;p&&o.selectAllChildren(p)})),this.providerFactory=e.dataProviders||new d.Z,this.serializer=new Z.Z(this.deriveSerializerProps(e)),this.editorRef=e.innerRef||o.createRef(),this.id=R()(),(0,b.MZ)(`Renderer Render Time: ${this.id}`);const t=this.featureFlags(this.props.featureFlags).featureFlags;null!=t&&t.rendererTtiTracking&&(0,y.Ev)(((e,t,n)=>{this.fireAnalyticsEvent({action:I.om.RENDERER_TTI,actionSubject:I.Wt.RENDERER,attributes:{tti:e,ttiFromInvocation:t,canceled:n},eventType:I.Ze.OPERATIONAL})}))}anchorLinkAnalytics(){const e=window.location.hash&&decodeURIComponent(window.location.hash.slice(1)),{disableHeadingIDs:t}=this.props;if(!t&&e&&this.editorRef&&this.editorRef.current instanceof HTMLElement){const t=document.getElementById(e);t&&this.editorRef.current.contains(t)&&this.fireAnalyticsEvent({action:I.om.VIEWED,actionSubject:I.Wt.ANCHOR_LINK,attributes:{platform:$.iw.WEB,mode:$.IK.RENDERER},eventType:I.Ze.UI})}}componentDidMount(){this.fireAnalyticsEvent({action:I.om.STARTED,actionSubject:I.Wt.RENDERER,attributes:{platform:$.iw.WEB},eventType:I.Ze.UI}),this.rafID=requestAnimationFrame((()=>{(0,b.H0)(`Renderer Render Time: ${this.id}`,(e=>{var t,n,r;const{analyticsEventSeverityTracking:a}=this.props,o=void 0===a&&(0,E.p)()||null!=a&&a.enabled?(0,w.a$)(e,null!==(t=null==a?void 0:a.severityNormalThreshold)&&void 0!==t?t:2e3,null!==(n=null==a?void 0:a.severityDegradedThreshold)&&void 0!==n?n:3e3):void 0;!1===(null===(r=this.props)||void 0===r||null===(r=r.analyticsEventSeverityTracking)||void 0===r?void 0:r.enabled)||this.fireAnalyticsEvent({action:I.om.RENDERED,actionSubject:I.Wt.RENDERER,attributes:{platform:$.iw.WEB,duration:e,distortedDuration:this.renderedMeasurementDistortedDurationMonitor.distortedDuration,ttfb:(0,N.i)(),nodes:(0,l.u)(this.props.document,((e,t)=>(e[t.type]=(e[t.type]||0)+1,e)),{}),severity:o},eventType:I.Ze.OPERATIONAL}),this.renderedMeasurementDistortedDurationMonitor.cleanup(),delete this.renderedMeasurementDistortedDurationMonitor})),this.anchorLinkAnalytics()}))}UNSAFE_componentWillReceiveProps(e){const t=e.media||{},n=this.props.media||{};e.portal===this.props.portal&&e.appearance===this.props.appearance&&e.stickyHeaders===this.props.stickyHeaders&&e.disableActions===this.props.disableActions&&e.allowCustomPanels===this.props.allowCustomPanels&&e.extensionHandlers===this.props.extensionHandlers&&e.allowHeadingAnchorLinks===this.props.allowHeadingAnchorLinks&&t.allowLinking===n.allowLinking||(this.serializer=new Z.Z(this.deriveSerializerProps(e)))}deriveSerializerProps(e){const t=e.stickyHeaders?!0===e.stickyHeaders?{}:e.stickyHeaders:void 0,{annotationProvider:n}=e,a=Boolean(n&&n.inlineComment&&n.inlineComment.allowDraftMode),{featureFlags:o}=this.featureFlags(e.featureFlags);return{providers:this.providerFactory,eventHandlers:e.eventHandlers,extensionHandlers:e.extensionHandlers,portal:e.portal,objectContext:(0,r.Z)({adDoc:e.document,schema:e.schema},e.rendererContext),appearance:e.appearance,disableHeadingIDs:e.disableHeadingIDs,disableActions:e.disableActions,allowHeadingAnchorLinks:e.allowHeadingAnchorLinks,allowColumnSorting:e.allowColumnSorting,fireAnalyticsEvent:this.fireAnalyticsEvent,shouldOpenMediaViewer:e.shouldOpenMediaViewer,allowAltTextOnImages:e.allowAltTextOnImages,stickyHeaders:t,allowMediaLinking:e.media&&e.media.allowLinking,surroundTextNodesWithTextWrapper:a,media:e.media,emojiResourceConfig:e.emojiResourceConfig,smartLinks:e.smartLinks,allowCopyToClipboard:e.allowCopyToClipboard,allowWrapCodeBlock:e.allowWrapCodeBlock,allowCustomPanels:e.allowCustomPanels,allowAnnotations:e.allowAnnotations,allowSelectAllTrap:e.allowSelectAllTrap,allowPlaceholderText:e.allowPlaceholderText,nodeComponents:e.nodeComponents,allowWindowedCodeBlock:null==o?void 0:o.allowWindowedCodeBlock}}render(){const{document:e,onComplete:t,onError:n,appearance:r,adfStage:a,truncated:s,maxHeight:l,fadeOutHeight:d,enableSsrInlineScripts:p,allowHeadingAnchorLinks:h,allowPlaceholderText:m,allowColumnSorting:f,allowCopyToClipboard:g,allowWrapCodeBlock:v,allowCustomPanels:b,media:y}=this.props,E=this.featureFlags(this.props.featureFlags),w=(0,j.d)(h),N=e=>{var t;const n=e.target;if(this.handleMouseTripleClickInTables(e),null===(t=this.props.eventHandlers)||void 0===t||!t.onUnhandledClick)return;if(!(n instanceof window.Element))return;const r=e.currentTarget;if((0,V.Z7)(n,r,X))return;const a=window.getSelection(),o=null!==a?a.toString():void 0,i=o&&0!==o.length,s=this.mouseDownSelection&&0!==this.mouseDownSelection.length;!i&&!s&&this.props.eventHandlers.onUnhandledClick(e)};try{var k,C;const n=this.getSchema(this.props.schema,this.props.adfStage),{result:u,stat:A,pmDoc:T}=(0,S.D)(e,this.serializer,n,a,this.props.useSpecBasedValidator,this.id,this.fireAnalyticsEvent,this.props.unsupportedContentLevelsTracking,this.props.appearance);t&&t(A);const x=(0,i.tZ)(J,{value:this.featureFlags(this.props.featureFlags)},(0,i.tZ)(U.d,{value:(0,j.G)(h)},(0,i.tZ)(M.Z.Provider,{value:{fireAnalyticsEvent:e=>this.fireAnalyticsEvent(e)}},(0,i.tZ)(P.zt,null,(0,i.tZ)(c.$o,{value:this.providerFactory},(0,i.tZ)(de,{appearance:r,allowNestedHeaderLinks:w,allowColumnSorting:f,allowCopyToClipboard:g,allowWrapCodeBlock:v,allowCustomPanels:b,allowPlaceholderText:m,useBlockRenderForCodeBlock:null===(k=E.featureFlags.useBlockRenderForCodeBlock)||void 0===k||k,addTelepointer:this.props.addTelepointer,innerRef:this.editorRef,onClick:N,onMouseDown:this.onMouseDownEditView,ssr:null==y?void 0:y.ssr},p?(0,i.tZ)(B,null):null,(0,i.tZ)(ce,{doc:T,schema:n,onAnalyticsEvent:this.fireAnalyticsEvent},u)))))));let R=s?(0,i.tZ)(L,{height:l,fadeHeight:d},x):x;const Z=null===(C=this.featureFlags(this.props.featureFlags))||void 0===C||null===(C=C.featureFlags)||void 0===C||null===(C=C.rendererRenderTracking)||void 0===C?void 0:C[I.Wt.RENDERER],O=(null==Z?void 0:Z.enabled)&&(0,i.tZ)(ae,{componentProps:this.props,action:I.om.RE_RENDERED,actionSubject:I.Wt.RENDERER,handleAnalyticsEvent:this.fireAnalyticsEvent,useShallow:Z.useShallow});return(0,i.tZ)(o.Fragment,null,O,R)}catch(T){var A;return n&&n(T),(0,i.tZ)(de,{appearance:r,allowCopyToClipboard:g,allowWrapCodeBlock:v,allowPlaceholderText:m,allowColumnSorting:f,allowNestedHeaderLinks:w,useBlockRenderForCodeBlock:null===(A=E.featureFlags.useBlockRenderForCodeBlock)||void 0===A||A,addTelepointer:this.props.addTelepointer,onClick:N},(0,i.tZ)(u.Z,null))}}componentWillUnmount(){const{dataProviders:e}=this.props;this.rafID&&window.cancelAnimationFrame(this.rafID),e||this.providerFactory.destroy()}}se.displayName="Renderer";const le=o.memo((e=>(0,i.tZ)(T.oF,{data:{appearance:(0,w.$L)(e.appearance),packageName:"platform-pkg",packageVersion:"0.0.0-use.local",componentName:"renderer",editorSessionId:R()()}},(0,i.tZ)(p,{render:t=>(0,i.tZ)(ee,{component:I.Wt.RENDERER,rethrowError:!0,fallbackComponent:null,createAnalyticsEvent:t},(0,i.tZ)(h.G,null,(0,i.tZ)(se,(0,r.Z)((0,r.Z)({},e),{},{createAnalyticsEvent:t}))))})))),de=o.memo((e=>{const{allowColumnSorting:t,allowNestedHeaderLinks:n,innerRef:r,appearance:a,children:s,onClick:l,onMouseDown:d,useBlockRenderForCodeBlock:c,addTelepointer:u,ssr:p}=e,h=()=>{const e=document.createElement("span");return e.textContent="​",e.id=O.Jd,e},g=o.useRef(!0);return o.useEffect((()=>{if("undefined"!=typeof window&&u&&null!=r&&r.current){const e=r.current.querySelector(".ak-renderer-document");if(g.current){const t=e.lastChild;t&&t.appendChild(h())}const t=new MutationObserver((t=>{t.forEach((t=>{if(g.current){const t=e.querySelector(`#${O.Jd}`);t&&t.remove();const n=e.lastChild;n&&n.appendChild(h()),g.current=!1}if("characterData"===t.type){const n=t.target.parentElement;if(n){const t=e.querySelector(`#${O.Jd}`);t&&t.remove(),n.appendChild(h())}}}))}));return t.observe(r.current,{characterData:!0,attributes:!1,childList:!0,subtree:!0}),()=>t.disconnect()}}),[r,u]),(0,i.tZ)(m.iF,{className:`ak-renderer-wrapper is-${a}`,"data-appearance":a},(0,i.tZ)(f.Yu,{baseFontSize:a&&"comment"!==a?C.Qd:void 0},(0,i.tZ)(ie,{ssr:p},(0,i.tZ)("div",{ref:r,onClick:l,onMouseDown:d,css:(0,O.ze)({appearance:a,allowNestedHeaderLinks:n,allowColumnSorting:!!t,useBlockRenderForCodeBlock:c})},s))))}));function ce({children:e,doc:t,schema:n,onAnalyticsEvent:r}){const a=(0,o.useContext)(F.En),i=(0,o.useRef)(null);return(0,o.useLayoutEffect)((()=>(t?a._privateRegisterRenderer(i,t,n,r):a._privateUnregisterRenderer(),()=>a._privateUnregisterRenderer())),[a,n,t,r]),e}const ue=e=>{const{allowAnnotations:t,document:n}=e,a=o.useRef(null),s=e.innerRef||a;return t?(0,i.tZ)(F.DF,null,(0,i.tZ)(z.aj,{rendererRef:s,adfDocument:n,annotationProvider:e.annotationProvider},(0,i.tZ)(le,(0,r.Z)((0,r.Z)({innerRef:s},e),{},{featureFlags:e.featureFlags})))):(0,i.tZ)(le,(0,r.Z)({innerRef:s},e))};ue.displayName="RendererWithAnnotationSelection";const pe=ue},490579:(e,t,n)=>{n.d(t,{Jd:()=>P,zA:()=>M,ze:()=>H});var r=n(39030),a=n(2142),o=n(16728),i=n(233006),s=n(781775),l=n(24359),d=n(212944),c=n(876069),u=n(997194),p=n(557048),h=n(381426),m=n(690685),f=n(38286),g=n(507377),v=n(154897),b=n(334444),y=n(14148),E=n(896779),w=n(259317),N=n(479588),k=n(116564),C=n(714708),A=n(290260),T=n(774564),x=n(824470),R=n(310151),Z=n(91769),S=n(158568),O=n(248960),_=n(215269),L=n(271455),I=n(185766),$=n(79314);const M=32,P="ai-streaming-telepointer",D=e=>i.$G[e].lineHeight/i.$G[e].size,B={h1:{lineHeight:D("h700")},h2:{lineHeight:D("h600")},h3:{lineHeight:D("h500")},h4:{lineHeight:D("h400")},h5:{lineHeight:D("h300")},h6:{lineHeight:D("h100")}},W=e=>r.iv`
    /**
     * The copy link button doesn't reserve space in the DOM so that
     * the text alignment isn't impacted by the button/icon's space.
     */
    .${_.n} {
      position: absolute;
      height: ${B[e].lineHeight}em;

      margin-left: ${"var(--ds-space-075, 6px)"};

      button {
        padding-left: 0;
        padding-right: 0;
      }
    }

    /**
     * Applies hover effects to the heading anchor link button
     * to fade in when the user rolls over the heading.
     *
     * The link is persistent on mobile, so we use feature detection
     * to enable hover effects for systems that support it (desktop).
     *
     * @see https://caniuse.com/mdn-css_at-rules_media_hover
     */
    @media (hover: hover) and (pointer: fine) {
      .${_.n} {
        > button {
          opacity: 0;
          transform: translate(-8px, 0px);
          transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
        }
      }

      &:hover {
        .${_.n} > button {
          opacity: 1;
          transform: none !important;
        }
      }
    }

    /**
     * Adds the visibility of the button when in focus through keyboard navigation.
     */
    .${_.n} {
      button:focus {
        opacity: 1;
        transform: none !important;
      }
    }
  `,H=e=>t=>{const n={theme:t},{useBlockRenderForCodeBlock:i}=e;return r.iv`
      font-size: ${(0,S.pV)(n)}px;
      line-height: 1.5rem;
      color: ${`var(--ds-text, ${o.q2})`};

      .${O.y.DOCUMENT}::after {
        // we add a clearfix after ak-renderer-document in order to
        // contain internal floats (such as media images that are "wrap-left")
        // to just the renderer (and not spill outside of it)
        content: '';
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
      }

      ${(({appearance:e},{theme:t})=>"full-page"!==e&&"mobile"!==e?"":r.iv`
    max-width: ${t&&t.layoutMaxWidth?`${t.layoutMaxWidth}px`:"none"};
    margin: 0 auto;
    padding: 0 ${"full-page"===e?M:0}px;
  `)(e,n)}
      ${(({appearance:e})=>"full-width"!==e?"":r.iv`
    max-width: ${S.zJ}px;
    margin: 0 auto;

    .fabric-editor-breakout-mark,
    .ak-renderer-extension {
      width: 100% !important;
    }

    ${(0,$.Ty)(e)?"":"\n      .pm-table-container {\n        width: 100% !important;\n      }\n    "}
  `)(e)}

      .${O.y.DOCUMENT} {
        ${d.Lv}
      }

      & h1 {
        ${W("h1")}
      }

      & h2 {
        ${W("h2")}
      }

      & h3 {
        ${W("h3")}
      }

      & h4 {
        ${W("h4")}
      }

      & h5 {
        ${W("h5")}
      }

      & h6 {
        ${W("h6")}
      }

      & span.akActionMark {
        color: ${`var(--ds-link, ${o.AX})`};
        text-decoration: none;

        &:hover {
          color: ${`var(--ds-link, ${o.M5})`};
          text-decoration: underline;
        }

        &:active {
          color: ${`var(--ds-link-pressed, ${o.YC})`};
        }
      }

      & span.akActionMark {
        cursor: pointer;
      }

      & span[data-placeholder] {
        color: ${`var(--ds-text-subtlest, ${o.iw})`};
      }

      ${(()=>{const{colorMode:e}=(0,s.Z)();return r.iv`
    #${P} {
      display: inline-block;
      position: relative;
      width: 1.5px;
      height: 25px;
      background: linear-gradient(
        45deg,
        ${"dark"===e?"#f5cd47":"#f8e6a0"} -12.02%,
        ${"dark"===e?"#60c6d2":"#8bdbe5"} 19.18%,
        ${"dark"===e?"#388bff":"#0c66e4"} 71.87%
      );
      margin-left: ${"var(--ds-space-025, 2px)"};

      &::after {
        content: 'AI';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        font-size: 10px;
        font-weight: 700;
        width: 12.5px;
        height: 13px;
        padding-top: 1px;
        padding-left: 1.5px;
        line-height: initial;
        border-radius: 0px 2px 2px 0px;
        color: ${"var(--ds-text-inverse, white)"};
        background: linear-gradient(
          45deg,
          ${"dark"===e?"#60c6d2":"#8bdbe5"} -57%,
          ${"dark"===e?"#388bff":"#0c66e4"} 71.87%
        );
      }
    }
  `})()}
      ${u.u};
      ${p.V};
      ${(0,h.E)()};
      ${(0,m.x)()};
      ${f.o};
      ${g.Xo};
      ${v.x};
      ${b.U};
      ${(0,y.V)()};
      ${E.B};
      ${w.B};
      ${N.E};
      ${k.L};
      ${C.U}

      & .UnknownBlock {
        font-family: ${(0,a.I8)()};
        font-size: ${(0,S.Gh)((0,a.JB)())};
        font-weight: 400;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      & span.date-node {
        background: ${`var(--ds-background-neutral, ${o.kd})`};
        border-radius: ${"var(--ds-border-radius-100, 3px)"};
        color: ${`var(--ds-text, ${o.q2})`};
        padding: ${"var(--ds-space-025, 2px)"} ${"var(--ds-space-050, 4px)"};
        margin: 0 1px;
        transition: background 0.3s;
      }

      & span.date-node-highlighted {
        background: ${`var(--ds-background-danger, ${o.r6})`};
        color: ${`var(--ds-text-danger, ${o.gR})`};
      }

      & .renderer-image {
        max-width: 100%;
        display: block;
        margin: ${"var(--ds-space-300, 24px)"} 0;
      }

      .${A.I}.rich-media-wrapped
        + .${A.I}:not(.rich-media-wrapped) {
        clear: both;
      }

      & .code-block,
      & blockquote,
      & hr,
      & > div > div:not(.rich-media-wrapped),
      .${A.I}.rich-media-wrapped
        + .rich-media-wrapped
        + *:not(.rich-media-wrapped),
      .${A.I}.rich-media-wrapped + div:not(.rich-media-wrapped),
      .${A.I}.image-align-start,
        .${A.I}.image-center,
        .${A.I}.image-align-end {
        clear: both;
      }

      & .rich-media-wrapped {
        & + h1,
        & + h2,
        & + h3,
        & + h4,
        & + h5,
        & + h6 {
          margin-top: ${"var(--ds-space-100, 8px)"};
        }
      }

      ${(({allowNestedHeaderLinks:e})=>e?r.iv`
    .fabric-editor-block-mark[data-align] > {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        position: relative;
      }
    }

    /**
     * For right-alignment we flip the link to be before the heading
     * text so that the text is flush up against the edge of the editor's
     * container edge.
     */
    .fabric-editor-block-mark:not([data-align='center'])[data-align] {
      > {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          // Using right to left text to achieve the inverse effect
          // of where the copy link button icon sits for left/center
          // alignment.
          // Although this is unorthodox it's the only approach which
          // allows the button to sit flush against the left edge of
          // bottom line of text.
          direction: rtl;

          // By default RTL will negatively impact the layout of special
          // characters within the heading text, and potentially other
          // nested inline nodes. To prevent this we insert pseudo elements
          // containing HTML entities to retain LTR for all heading content
          // except for the copy link button.
          > *:not(.${_.n}):not(br) {
            ::before {
              // Open LTR: https://www.fileformat.info/info/unicode/char/202a/index.htm
              content: '\u202A';
            }
            ::after {
              // Close LTR: https://www.fileformat.info/info/unicode/char/202c/index.htm
              content: '\u202C';
            }
          }
        }
      }
      .${_.n} {
        margin: 0 ${"var(--ds-space-075, 6px)"} 0 0;
      }

      @media (hover: hover) and (pointer: fine) {
        .${_.n} > button {
          transform: translate(8px, 0px);
        }
      }
    }
  `:"")(e)}
      /* plugin styles */
    ${A.G} &
    div[class^='image-wrap-'] + div[class^='image-wrap-'] {
        margin-left: 0;
        margin-right: 0;
      }

      /* Breakout for tables and extensions */
      .${O.y.DOCUMENT} > {
        ${r.iv`
    *:not([data-mark-type='fragment'])
      .${c.Up.TABLE_CONTAINER} {
      // TODO - improve inline style logic on table container so important styles aren't required here
      width: 100% !important;
      left: 0 !important;
    }

    [data-mark-type='fragment'] * .${c.Up.TABLE_CONTAINER} {
      // TODO - improve inline style logic on table container so important styles aren't required here
      width: 100% !important;
      left: 0 !important;
    }
  `}

        * .${O.y.EXTENSION_OVERFLOW_CONTAINER} {
          overflow-x: auto;
        }

        & .${O.y.EXTENSION}:first-child {
          margin-top: 0;
        }
      }

      .${O.y.DOCUMENT} {
        .${O.y.EXTENSION} {
          margin-top: ${S.zH};
        }

        .${O.y.EXTENSION_CENTER_ALIGN} {
          margin-left: 50%;
          transform: translateX(-50%);
        }

        .${c.Up.TABLE_NODE_WRAPPER} {
          overflow-x: auto;
        }

        .${L.S4.SHADOW_CONTAINER}
          .${c.Up.TABLE_NODE_WRAPPER} {
          display: flex;
        }
      }

      ${(0,c.nP)()}

      .${O.y.DOCUMENT} .${c.Up.TABLE_CONTAINER} {
        z-index: 0;
        transition: all 0.1s linear;
        display: flex; /* needed to avoid position: fixed jumpiness in Chrome */

        /** Shadow overrides */
        &.${R.$.RIGHT_SHADOW}::after,
          &.${R.$.LEFT_SHADOW}::before {
          top: ${c.MZ-1}px;
          height: calc(100% - ${c.MZ}px);
          z-index: ${S.r0};
        }

        ${(0,l.e)("platform.editor.table.increase-shadow-visibility_lh89r")?r.iv`
        /** Shadow overrides */
        &.${R.$.RIGHT_SHADOW}::after,
          &.${R.$.LEFT_SHADOW}::before {
          width: ${32}px;
          background: linear-gradient(
              to left,
              transparent 0,
              ${`var(--ds-shadow-overflow-spread, ${o.bt})`} 140%
            ),
            linear-gradient(
              to right,
              ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
              transparent 1px
            );
        }

        &.${R.$.RIGHT_SHADOW}::after {
          background: linear-gradient(
              to right,
              transparent 0,
              ${`var(--ds-shadow-overflow-spread, ${o.bt})`} 140%
            ),
            linear-gradient(
              to left,
              ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
              transparent 1px
            );
          left: calc(100% - ${32}px);
        }
      `:""}

        &
          .${L.S4.SENTINEL_LEFT},
          &
          .${L.S4.SENTINEL_RIGHT} {
          height: calc(100% - ${c.MZ}px);
        }

        /**
     * A hack for making all the <th /> heights equal in case some have shorter
     * content than others.
     *
     * This is done to make sort buttons fill entire <th />.
     */
        table {
          height: 1px; /* will be ignored */
          ${(({allowColumnSorting:e,allowNestedHeaderLinks:t})=>{if(!e)return"";let n="";return t&&(n=`\n      /**\n       * When the sort button is enabled we want the heading's copy link button\n       * to reserve space so that it can prematurely wrap to avoid the button\n       * being displayed underneath the sort button (hidden or obscured).\n       *\n       * The two buttons fight each other since the sort button is displayed\n       * on hover of the <th /> and the copy link button is displayed on hover\n       * of the heading.\n       *\n       * Note that this can break the WYSIWYG experience in the case where\n       * a heading fills the width of the table cell and the only thing which\n       * wraps is the copy link button. This is hopefully a rare fringe case.\n       */\n      .${_.n} {\n        position: unset;\n      }\n      > {\n        h1, h2, h3, h4, h5, h6 {\n          margin-right: 30px;\n        }\n      }\n    `),r.iv`
    .${O.y.SORTABLE_COLUMN_WRAPPER} {
      padding: 0;

      .${O.y.SORTABLE_COLUMN} {
        width: 100%;
        height: 100%;
        padding: ${c.uq}px;
        border-width: 1.5px;
        border-style: solid;
        border-color: transparent;

        > *:first-child {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + *,
        > style:first-child + .ProseMirror-gapcursor + * {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + span + *,
        > style:first-child + .ProseMirror-gapcursor + span + * {
          margin-top: 0;
        }

        @supports selector(:focus-visible) {
          &:focus {
            outline: unset;
          }
          &:focus-visible {
            border-color: ${`var(--ds-border-focused, ${o.M5})`};
          }
        }

        ${n}
      }

      .${O.y.SORTABLE_COLUMN_ICON_WRAPPER} {
        margin: 0;
        .${O.y.SORTABLE_COLUMN_ICON} {
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }
      }

      .${O.y.SORTABLE_COLUMN_NO_ORDER} {
        .${O.y.SORTABLE_COLUMN_ICON} {
          opacity: 0;
          &:focus {
            opacity: 1;
          }
        }
      }

      &:hover {
        .${O.y.SORTABLE_COLUMN_NO_ORDER} {
          .${O.y.SORTABLE_COLUMN_ICON} {
            opacity: 1;
          }
        }
      }
    }
  `})(e)};
          margin-left: 0;
          margin-right: 0;
        }

        table tr:first-of-type {
          height: 100%;

          td,
          th {
            position: relative;
          }
        }

        table[data-number-column='true'] {
          .${O.y.NUMBER_COLUMN} {
            background-color: ${`var(--ds-background-neutral, ${S.Zs})`};
            border-right: 1px solid
              ${`var(--ds-background-accent-gray-subtler, ${S.aX})`};
            width: ${S.XV}px;
            text-align: center;
            color: ${`var(--ds-text-subtlest, ${o.iw})`};
            font-size: ${(0,S.Gh)((0,a.JB)())};
          }

          .fixed .${O.y.NUMBER_COLUMN} {
            border-right: 0px none;
          }
        }
      }

      tr[data-header-row].fixed {
        position: fixed !important;
        display: flex;
        overflow: hidden;
        z-index: ${S.r0};

        border-right: 1px solid
          ${`var(--ds-background-accent-gray-subtler, ${S.aX})`};
        border-bottom: 1px solid
          ${`var(--ds-background-accent-gray-subtler, ${S.aX})`};

        /* this is to compensate for the table border */
        transform: translateX(-1px);
      }

      .sticky > th {
        z-index: ${S.r0};
        position: sticky !important;
        top: 0;
      }

      /* Make the number column header sticky */
      .sticky > td {
        position: sticky !important;
        top: 0;
      }

      /* add border for position: sticky
     and work around background-clip: padding-box
     bug for FF causing box-shadow bug in Chrome */
      .sticky th,
      .sticky td {
        box-shadow: 0px 1px
            ${`var(--ds-background-accent-gray-subtler, ${S.aX})`},
          0px -0.5px ${`var(--ds-background-accent-gray-subtler, ${S.aX})`},
          inset -1px 0px ${`var(--ds-background-accent-gray-subtler, ${S.Zs})`},
          0px -1px ${`var(--ds-background-accent-gray-subtler, ${S.Zs})`};
      }

      /* this will remove jumpiness caused in Chrome for sticky headers */
      .fixed + tr {
        min-height: 0px;
      }

      /*
   * We wrap CodeBlock in a grid to prevent it from overflowing the container of the renderer.
   * See ED-4159.
   */
      & .code-block {
        max-width: 100%;
        /* -ms- properties are necessary until MS supports the latest version of the grid spec */
        /* stylelint-disable value-no-vendor-prefix, declaration-block-no-duplicate-properties */
        display: block;
        /* stylelint-enable */

        position: relative;
        border-radius: ${"var(--ds-border-radius-100, 3px)"};

        /*
     * The overall renderer has word-wrap: break; which causes issues with
     * code block line numbers in Safari / iOS.
     */
        word-wrap: normal;
      }

      & .MediaGroup,
      & .code-block {
        margin-top: ${S.zH};

        &:first-child {
          margin-top: 0;
        }
      }

      ${F(i)}

      ${(0,I.AF)()}

      ${T.D};
      & [data-layout-section] {
        margin-top: ${"var(--ds-space-250, 20px)"};
        & > div + div {
          margin-left: ${"var(--ds-space-400, 32px)"};
        }

        @media screen and (max-width: ${S.Kv}px) {
          & > div + div {
            margin-left: 0;
          }
        }

        & .MediaGroup,
        & .code-block {
          margin-top: ${S.zH};

          &:first-child {
            margin-top: 0;
          }
        }
      }

      & li {
        > .code-block {
          margin: ${S.zH} 0 0 0;
        }
        > .code-block:first-child {
          margin-top: 0;
        }

        > div:last-of-type.code-block {
          margin-bottom: ${S.zH};
        }
      }

      &:not([data-node-type='decisionList']) > li,
      // This prevents https://product-fabric.atlassian.net/browse/ED-20924
      &:not(.${C.j.BLOCK_CARD_CONTAINER}) > li {
        ${Z.Z.safari?x.AG:""}
      }
    `},F=e=>e?"":"& .code-block {\n       /* -ms- properties are necessary until MS supports the latest version of the grid spec */\n       /* stylelint-disable value-no-vendor-prefix, declaration-block-no-duplicate-properties */\n       display: -ms-grid;\n       display: grid;\n       -ms-grid-columns: auto 1fr;\n       /* stylelint-enable */\n\n       grid-template-columns: minmax(0, 1fr);\n\n       & > span {\n         /* stylelint-disable value-no-vendor-prefix */\n         -ms-grid-row: 1;\n         -ms-grid-column: 2;\n         /* stylelint-enable */\n         grid-column: 1;\n       }\n     }"},90651:(e,t,n)=>{n.d(t,{DF:()=>C,En:()=>k});var r=n(840506),a=n(199009),o=n(169147),i=n(681582),s=n(852358),l=n(930487);function d(e){return parseInt(e.dataset.rendererStartPos||"-1",10)}function c(e){return d(e)>-1}function u(e){const{parentElement:t}=e;return!t||g(t)?null:c(t)?t:u(t)}function p(e){const{parentElement:t}=e;return g(t)||!t?null:c(t)?e:p(t)}function h(e){return e.nodeType===Node.TEXT_NODE}function m(e){return function(e){return e.nodeType===Node.ELEMENT_NODE}(e)&&Boolean(e.dataset.rendererMark)}function f(e){let t=0,n=e.previousSibling;for(;n;)n&&h(n)?t+=(n.textContent||"").length:n&&(m(n)&&n.textContent?t+=n.textContent.length:t+=1),n=n.previousSibling;return t}function g(e){return!!e&&e.classList.contains("ak-renderer-document")}function v(e,t){if(!e)return!1;if(e instanceof HTMLElement&&c(e))return d(e)+t;const n=u(e);if(!n)return!1;let r=d(n),a=e;if(a.parentElement&&a.parentElement!==n){const e=p(a.parentElement);for((o=e)&&Boolean(o.dataset.rendererMark)||(a=a.parentElement,t=0),r+=f(a);a&&a.parentElement!==n;)a=a.parentNode,a&&(r+=f(a))}else r+=f(a);var o;return r+t}function b(e){const{startContainer:t,startOffset:n,endContainer:r,endOffset:a}=e,o=v(t,n),i=v(r,a);return!1!==o&&!1!==i&&{from:o,to:i}}var y=n(431676);function E(e,t,n,r){let a="",o=0;e.descendants(((i,s)=>{if(i.isText||!i.type.allowsMarkType(t.marks.annotation))return!0;const l=s,d=l+i.nodeSize;return r>=l&&r<=d?(a+=e.textBetween(l,r-1),o=w(a,n),a+=e.textBetween(r,d)):a+=i.textContent,!0}));return{numMatches:w(a,n),matchIndex:o,textContent:a}}function w(e,t){if(""===e||""===t)return 0;const n=new RegExp(t.replace(/(?=[.\\+*?[^\]$(){}\|])/g,"\\"),"g");return(e.match(n)||[]).length}class N{constructor(e=!1){(0,a.Z)(this,"initFromContext",!1),(0,a.Z)(this,"transformer",void 0),(0,a.Z)(this,"doc",void 0),(0,a.Z)(this,"schema",void 0),(0,a.Z)(this,"ref",void 0),(0,a.Z)(this,"onAnalyticsEvent",void 0),this.initFromContext=e,this.transformer=new o.x}_privateRegisterRenderer(e,t,n,r){if(this.initFromContext){if(this.ref){if(this.ref!==e)throw new Error("Renderer has already been registered! It's not allowed to re-register with another new Renderer instance.")}else this.ref=e;this.doc=t,this.schema=n,this.onAnalyticsEvent=r}}_privateUnregisterRenderer(){this.doc=void 0,this.ref=void 0,this.schema=void 0}_privateValidatePositionsForAnnotation(e,t){return!(!this.doc||!this.schema)&&(0,i.hO)({from:e,to:t},this.doc,this.schema)}deleteAnnotation(e,t){if(!this.doc||!this.schema||!this.schema.marks.annotation)return!1;const n=this.schema.marks.annotation.create({id:e,annotationType:t});let r,a;if(this.doc.descendants(((e,t)=>{const o=n.isInSet(e.marks);return o&&!r?(r=t,a=t+e.nodeSize):o&&r&&(a=t+e.nodeSize),!0})),void 0===r||void 0===a)return!1;const o=new l.xu(r,a,n),{doc:i,failed:s}=o.apply(this.doc);if(this.onAnalyticsEvent){const e={action:y.om.DELETED,actionSubject:y.Wt.ANNOTATION,actionSubjectId:y.VJ.INLINE_COMMENT,eventType:y.Ze.TRACK};this.onAnalyticsEvent(e)}return!(s||!i)&&{step:o,doc:this.transformer.encode(i)}}annotate(e,t,n){if(!this.doc||!this.schema||!this.schema.marks.annotation)return!1;const r=b(e);if(!r)return!1;const{from:a,to:o}=r;return!!this._privateValidatePositionsForAnnotation(a,o)&&this.applyAnnotation(r,{annotationId:t,annotationType:s.j9.INLINE_COMMENT})}isValidAnnotationRange(e){const t=b(e);return!(!t||!this.doc)&&this._privateValidatePositionsForAnnotation(t.from,t.to)}isValidAnnotationPosition(e){return!(!e||!this.doc)&&this._privateValidatePositionsForAnnotation(e.from,e.to)}getPositionFromRange(e){return!(!this.doc||!this.schema)&&b(e)}getAnnotationMarks(){const{schema:e,doc:t}=this;if(!e||!t)return[];const{marks:{annotation:n}}=e;if(!n)return[];const r=[];t.descendants((e=>{const t=e.marks.filter((e=>e.type===n));return!t||!t.length||(r.push(...t),!1)}));const a=new Map;return r.forEach((e=>{a.set(e.attrs.id,e)})),Array.from(a.values())}getAnnotationsByPosition(e){if(!this.doc||!this.schema)return[];const t=b(e);return t&&this.doc?(0,i._u)(t,this.doc,this.schema):[]}applyAnnotation(e,t){if(!this.doc||!e||!this.schema)return!1;const{from:n,to:r}=e,{annotationId:a,annotationType:o}=t,i=function(e,t,n){return new l.WJ(Math.min(e,t),Math.max(e,t),n.schema.marks.annotation.create({id:n.annotationId,annotationType:n.annotationType}))}(n,r,{annotationId:a,annotationType:o,schema:this.schema}),{doc:s,failed:d}=i.apply(this.doc);if(d||!s)return!1;const c=s.textBetween(n,r),{numMatches:u,matchIndex:p}=E(this.doc,this.schema,c,n);return{step:i,doc:this.transformer.encode(s),originalSelection:c,numMatches:u,matchIndex:p}}generateAnnotationIndexMatch(e){if(!this.doc||!e||!this.schema)return!1;const{from:t,to:n}=e,r=this.doc.textBetween(t,n),{numMatches:a,matchIndex:o}=E(this.doc,this.schema,r,t);return{originalSelection:r,numMatches:a,matchIndex:o}}}const k=r.createContext(new N);function C({children:e,context:t}){const n=(0,r.useMemo)((()=>new N(!0)),[]);return r.createElement(k.Provider,{value:t||n},r.Children.only(e))}C.displayName="RendererActionsContext";k.Consumer},496808:(e,t,n)=>{n.d(t,{Fi:()=>s,zt:()=>i});var r=n(615919),a=n(840506);const o=a.createContext(new Map),i=function({children:e}){return a.createElement(o.Provider,{value:new Map},e)};i.displayName="Provider";const s=e=>class extends a.Component{render(){return a.createElement(o.Consumer,null,(t=>a.createElement(e,(0,r.Z)((0,r.Z)({},this.props),{},{smartCardStorage:t}))))}}},975182:(e,t,n)=>{n.d(t,{d:()=>a,r:()=>i});var r=n(840506);const{Provider:a,Consumer:o}=r.createContext(void 0),i=({nestedHeaderIds:e,onNestedHeaderIdMatch:t})=>{const[n,a]=(0,r.useState)();return r.createElement(o,null,(r=>(r&&e.includes(r)?r!==n&&e.includes(r)&&(a(r),t()):a(void 0),null)))};i.displayName="ActiveHeaderIdConsumer"},804597:(e,t,n)=>{n.d(t,{C$:()=>o,dA:()=>l,m$:()=>i,oT:()=>s});var r=n(199009),a=n(840506);const o=(0,a.createContext)(null),i=(0,a.createContext)(null),s=(0,a.createContext)({});class l extends a.Component{constructor(...e){super(...e),(0,r.Z)(this,"state",{position:null}),(0,r.Z)(this,"applyAnnotationDraftAt",(e=>{const{position:t}=this.state;t||this.setState({position:e})})),(0,r.Z)(this,"clearAnnotationDraft",(()=>{this.setState({position:null})}))}render(){const{children:e}=this.props,{position:t}=this.state,n=this.applyAnnotationDraftAt,r=this.clearAnnotationDraft;return a.createElement(o.Provider,{value:t},e({applyAnnotationDraftAt:n,clearAnnotationDraft:r}))}}l.displayName="AnnotationsDraftContextWrapper"},572854:(e,t,n)=>{n.d(t,{C:()=>r,O:()=>a});const r=({from:e,to:t})=>({"data-annotation-draft-mark":!0,"data-draft-start-at":e,"data-draft-end-at":t}),a=e=>{const t=window.getSelection();if(!t)return!1;const n=document.querySelectorAll((e=>{const t=r(e);return Object.entries(t).map((([e,t])=>`[${e}="${t}"]`)).join("")})(e));if(!n||0===n.length)return!1;t.removeAllRanges();const a=document.createRange();return a.setStart(n[0],0),a.setEndAfter(n[n.length-1]),t.addRange(a),!0}},91598:(e,t,n)=>{n.d(t,{Ll:()=>d,VF:()=>u,lg:()=>c});var r=n(615919),a=n(840506),o=n(619412),i=n(852358),s=n(431676),l=n(328338);const d=({type:e,updateSubscriber:t})=>{const[n,i]=(0,a.useState)({});return(0,a.useLayoutEffect)((()=>{if(!t)return;const a=t=>{if(!t)return;const a=Object.values(t).reduce(((t,a)=>{if(a.id&&a.annotationType===e){const e=null===a.state||void 0===a.state;return(0,r.Z)((0,r.Z)({},t),{},{[a.id]:e?n[a.id]:a.state})}return t}),{});i((0,r.Z)((0,r.Z)({},n),a))};return t.on(o.B.SET_ANNOTATION_STATE,a),()=>{t.off(o.B.SET_ANNOTATION_STATE,a)}}),[n,e,t]),n},c=({id:e,updateSubscriber:t})=>{const[n,r]=(0,a.useState)(!1);return(0,a.useLayoutEffect)((()=>{if(!t)return;const n=t=>{r(t&&t.annotationId===e)},a=()=>{r(!1)};return t.on(o.B.SET_ANNOTATION_FOCUS,n),t.on(o.B.REMOVE_ANNOTATION_FOCUS,a),()=>{t.off(o.B.SET_ANNOTATION_FOCUS,n),t.off(o.B.REMOVE_ANNOTATION_FOCUS,a)}}),[e,t]),n},u=e=>{const[t,n]=(0,a.useState)(null),{updateSubscriber:r,createAnalyticsEvent:d}=e;return(0,a.useLayoutEffect)((()=>{if(!r)return;const e=({annotationIds:e,eventTarget:t})=>{const r=e.filter((e=>!!e)).map((e=>({id:e,type:i.j9.INLINE_COMMENT})));d&&d({action:s.om.VIEWED,actionSubject:s.Wt.ANNOTATION,actionSubjectId:s.VJ.INLINE_COMMENT,eventType:s.Ze.TRACK,attributes:{overlap:r.length||0}}).fire(l.XD.editor),n({annotations:r,clickElementTarget:t})};return r.on(o.B.ON_ANNOTATION_CLICK,e),()=>{r.off(o.B.ON_ANNOTATION_CLICK,e)}}),[r,d]),t}},241897:(e,t,n)=>{n.d(t,{aj:()=>E});var r=n(840506),a=n(852358),o=n(804597),i=n(91598),s=n(90651);const l=e=>{const t=(0,r.useContext)(o.m$),n=(0,r.useContext)(s.En),a=t&&t.inlineComment,l=a&&a.updateSubscriber||null,d=(0,i.VF)({updateSubscriber:l,createAnalyticsEvent:e.createAnalyticsEvent}),c=a&&a.viewComponent,u=(0,r.useMemo)((()=>e=>n.deleteAnnotation(e.id,e.type)),[n]);if(c&&d){const{annotations:e,clickElementTarget:t}=d;return r.createElement(c,{annotations:e,clickElementTarget:t,deleteAnnotation:u})}return null},d=e=>{const{rendererRef:t}=e,[n,a]=(0,r.useState)(null),i=!!(0,r.useContext)(o.C$);(0,r.useEffect)((()=>{const{current:e}=t;if(!document||!e)return;const n=t=>{const n=document.getSelection();if(!n||"Range"!==n.type||1!==n.rangeCount||i)return;const r=n.getRangeAt(0);((e,t)=>{const n=document.createRange();n.selectNode(e);const r=1===t.compareBoundaryPoints(Range.START_TO_START,n),a=1===t.compareBoundaryPoints(Range.START_TO_END,n),o=1===t.compareBoundaryPoints(Range.END_TO_END,n);return r&&a&&!o})(e,r)&&a(r.cloneRange())};return document.addEventListener("selectionchange",n),()=>{document.removeEventListener("selectionchange",n)}}),[t,n,i]);return[n,(0,r.useCallback)((()=>{a(null)}),[])]};var c=n(572854),u=n(328338),p=n(431676);const h=r.memo((e=>{const{component:t,range:n,isAnnotationAllowed:o,wrapperDOM:i,onClose:l,clearAnnotationDraft:d,applyAnnotationDraftAt:h,documentPosition:m,applyAnnotation:f,createAnalyticsEvent:g,generateIndexMatch:v}=e,[b,y]=(0,r.useState)(),E=(0,r.useContext)(s.En),w=(0,r.useCallback)((e=>{if(!o||!m||!f)return!1;const t={annotationId:e,annotationType:a.j9.INLINE_COMMENT};return g&&g({action:p.om.INSERTED,actionSubject:p.Wt.ANNOTATION,actionSubjectId:p.VJ.INLINE_COMMENT,attributes:{},eventType:p.Ze.TRACK}).fire(u.XD.editor),f(b||m,t)}),[o,m,f,b,g]),N=(0,r.useCallback)((()=>{if(!m||!v)return!1;const e=v(m);return e||!1}),[m,v]),k=(0,r.useCallback)(((e=!0)=>{if(m&&o){if(y(m),h(m),g){const e=E.getAnnotationsByPosition(n);g({action:p.om.OPENED,actionSubject:p.Wt.ANNOTATION,actionSubjectId:p.VJ.INLINE_COMMENT,eventType:p.Ze.TRACK,attributes:{overlap:e.length}}).fire(u.XD.editor)}window.requestAnimationFrame((()=>{if(e)(0,c.O)(m);else{const e=window.getSelection();e&&e.removeAllRanges()}}))}else g&&g({action:p.om.CREATE_NOT_ALLOWED,actionSubject:p.Wt.ANNOTATION,actionSubjectId:p.VJ.INLINE_COMMENT,attributes:{},eventType:p.Ze.TRACK}).fire(u.XD.editor)}),[m,o,h,g,E,n]),C=(0,r.useCallback)((()=>{d(),y(null);const e=window.getSelection();e&&e.removeAllRanges()}),[d]),A=(0,r.useCallback)((()=>{g&&g({action:p.om.CLOSED,actionSubject:p.Wt.ANNOTATION,actionSubjectId:p.VJ.INLINE_COMMENT,eventType:p.Ze.TRACK,attributes:{}}).fire(u.XD.editor),C(),l()}),[l,C,g]);return r.createElement(t,{range:n,wrapperDOM:i.current,isAnnotationAllowed:o,onClose:A,onCreate:w,getAnnotationIndexMatch:N,applyDraftMode:k,removeDraftMode:C})})),m=e=>{const{selectionComponent:t,rendererRef:n,applyAnnotationDraftAt:a,clearAnnotationDraft:o,createAnalyticsEvent:i}=e,l=(0,r.useContext)(s.En),[c,u]=d({rendererRef:n});if(!c)return null;const p=l.getPositionFromRange(c),m=p&&l.isValidAnnotationPosition(p);return r.createElement(h,{range:c,wrapperDOM:n,component:t,onClose:u,documentPosition:p,isAnnotationAllowed:m,applyAnnotation:l.applyAnnotation.bind(l),applyAnnotationDraftAt:a,generateIndexMatch:l.generateAnnotationIndexMatch.bind(l),clearAnnotationDraft:o,createAnalyticsEvent:i})};m.displayName="SelectionRangeValidator";const f=e=>{const t=(0,r.useContext)(o.m$),{rendererRef:n,createAnalyticsEvent:a,children:i}=e,s=t&&t.inlineComment,l=s&&s.selectionComponent,d=(0,r.useCallback)((({applyAnnotationDraftAt:e,clearAnnotationDraft:t})=>r.createElement(r.Fragment,null,i,r.createElement(m,{createAnalyticsEvent:a,rendererRef:n,selectionComponent:l,applyAnnotationDraftAt:e,clearAnnotationDraft:t}))),[l,i,n,a]);return l?r.createElement(o.dA,null,d):r.createElement(r.Fragment,null,i)};f.displayName="Wrapper";var g=n(615919),v=n(619412);var b=n(486889);const y=r.memo((({adfDocument:e})=>((({adfDocument:e})=>{const t=(0,r.useContext)(s.En),n=(0,r.useContext)(o.m$);(0,r.useEffect)((()=>{if(!n)return;const{inlineComment:{getState:e,updateSubscriber:r}}=n,a=t.getAnnotationMarks();a.length&&e(a.map((e=>e.attrs.id))).then((e=>{if(!r)return;const t=e.reduce(((e,t)=>(0,g.Z)((0,g.Z)({},e),{},{[t.id]:t})),{});r.emit(v.B.SET_ANNOTATION_STATE,t)}))}),[t,n,e])})({adfDocument:e}),null))),E=e=>{const{children:t,annotationProvider:n,rendererRef:s,adfDocument:d}=e,c=n&&n.inlineComment&&n.inlineComment.updateSubscriber,u=(0,i.Ll)({type:a.j9.INLINE_COMMENT,updateSubscriber:c||null}),{createAnalyticsEvent:p}=(0,b._)();return r.createElement(o.m$.Provider,{value:n},r.createElement(o.oT.Provider,{value:u},r.createElement(f,{createAnalyticsEvent:p,rendererRef:s},r.createElement(y,{adfDocument:d}),r.createElement(l,{createAnalyticsEvent:p}),t)))};E.displayName="AnnotationsWrapper"},224816:(e,t,n)=>{n.d(t,{Q:()=>s,Wy:()=>i,XU:()=>l,Xf:()=>d,Z7:()=>c});var r=n(199009),a=n(75119),o=n(169147);class i{constructor(e){(0,r.Z)(this,"encode",void 0);const t=e(a.R4);var n,i;this.encode=(n=t,i=new o.x,e=>i.encode(n.parse(e)))}}const s=e=>e.text||e.attrs&&(e.attrs.text||e.attrs.shortName)||`[${"string"==typeof e.type?e.type:e.type.name}]`,l=(e,t,n="onClick")=>e&&t&&e[t]&&e[t][n],d=e=>"mobile"===e?"mobile":"web";function c(e,t,n){return e!==t&&(!!n(e)||!!e.parentElement&&c(e.parentElement,t,n))}},223893:(e,t,n)=>{n.d(t,{D:()=>p,w:()=>u});var r=n(816314);const a=n.n(r)()();a.add("sourcetree:","http:"),a.add("jamfselfservice:","http:"),a.add("notes:","http:");const o="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");o.push("a[cdefgilmnoqrtuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrtuvwxyz]|n[acefgilopruz]|om|p[aefghkmnrtw]|qa|r[eosuw]|s[abcdegijklmnrtuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),a.tlds(o,!1);const i=[/^https?:\/\/[^\s]*$/im,/^ftps?:\/\//im,/^gopher:\/\//im,/^integrity:\/\//im,/^file:\/\//im,/^smb:\/\//im,/^dynamicsnav:\/\//im,/^jamfselfservice:\/\/[^\s]*$/im,/^\//im,/^mailto:/im,/^skype:/im,/^callto:[^\s]*$/im,/^facetime:[^\s]*$/im,/^git:/im,/^irc6?:/im,/^news:/im,/^nntp:/im,/^feed:/im,/^cvs:/im,/^svn:/im,/^mvn:/im,/^ssh:/im,/^scp:\/\//im,/^sftp:\/\//im,/^itms:/im,/^notes:/im,/^notes:\/\//im,/^hipchat:\/\//im,/^sourcetree:/im,/^urn:/im,/^tel:/im,/^xmpp:/im,/^telnet:/im,/^vnc:/im,/^rdp:/im,/^whatsapp:/im,/^slack:/im,/^sips?:/im,/^magnet:/im,/^foo:/im,/^#/im],s=e=>{const t=l(e);return t&&t.url||null},l=e=>{if(!e)return null;let t=c(e);return t.length||(t=a.match(e)),t&&t.length>0&&0===t[0].index&&t[0].lastIndex===e.trim().length?t[0]:null},d=/(https?|ftp|jamfselfservice|gopher|dynamicsnav|integrity|file|smb):\/\/[^\s]+/,c=e=>{const t=[];if(!d.test(e))return t;let n,r=0;for(;n=e.substr(r);){const e=(n.match(d)||[""])[0];if(!e)break;{const a=n.search(d),o=a>=0?a+r:a,i=o+e.length;t.push({index:o,lastIndex:i,raw:e,url:e,text:e,schema:""}),r+=i}}return t},u=e=>{const t=e.trim();return i.some((e=>e.test(t)))};function p(e){if(!e)return"";const t=e.replace(/[\r\n]+/g,"");return u(t)?t.trim():s(t)}},846858:(e,t,n)=>{n.d(t,{R:()=>o});var r=n(840506),a=n(32807);const o=({display:e,id:t,children:n,source:o})=>{const i="url"===e?"link":void 0;return r.createElement(a.Z,{data:{source:o,attributes:{displayCategory:i,display:e,id:t}}},n)};o.displayName="LinkAnalyticsContext"},315764:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(615919),a=n(872342),o=n(840506),i=n(862545),s=n(874135),l=n(846858),d=n(223893),c=n(486889),u=n(525778);const p=(e,t)=>{try{return new URL(e,t)}catch(n){return}},h=()=>{const[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(!1),{createAnalyticsEvent:s}=(0,c._)(),l=()=>{i(!1),t(null),r(null)};return{isLinkSafe:(e,t)=>{if(!t)return!0;const n=e.currentTarget.innerText,r=(0,d.D)(n);if(!r)return!0;const a=new RegExp(/^#/im),o=a.test(n);if(a.test(t)||o)return!0;if(new RegExp(/^\//im).test(t))return!0;const i=p(t,window.location.origin),s=p(r,null==i?void 0:i.origin);if(!i||!s)return!0;const l=["http:","https:"];let c;if(l.includes(s.protocol)&&l.includes(i.protocol)){c=!(s.username||s.password||i.username||i.password)}else c=s.protocol===i.protocol;return!(s.hostname!==i.hostname||s.pathname!==i.pathname||s.search!==i.search||s.username!==i.username||s.password!==i.password||!c)},isOpen:a,onClose:l,onContinue:()=>{l(),s({action:"clicked",actionSubject:"button",actionSubjectId:"linkSafetyWarningModalContinue",eventType:"ui",screen:"linkSafetyWarningModal"}).fire(u.D_),n&&window.open(n,"_blank","noopener noreferrer")},showSafetyWarningModal:(e,n)=>{e.preventDefault();const a=e.currentTarget.innerText;t(a),n&&r(n),i(!0),s({action:"viewed",actionSubject:"linkSafetyWarningModal",eventType:"screen",name:"linkSafetyWarningModal"}).fire(u.D_)},unsafeLinkText:e,url:n}};var m=n(555687),f=n(587499),g=n(884185),v=n(811836),b=n(815526),y=n(416595),E=n(272169),w=n(142807),N=n(659898),k=n(122529),C=n(39030);const A=C.iv`
  white-space: pre-line;
  word-break: break-all;
`;var T=n(178050);const x=(0,k.ZP)((e=>{const{isOpen:t,unsafeLinkText:n,url:a,onClose:o,onContinue:i,intl:s}=e,l=(0,C.tZ)(f.Z,null,t&&(0,C.tZ)(g.Z,{onClose:o,testId:"link-with-safety-warning"},(0,C.tZ)(v.default,null,(0,C.tZ)(b.default,{appearance:"warning"},(0,C.tZ)(w.Z,(0,r.Z)({},T.s.check_this_link)))),(0,C.tZ)(y.default,null,(0,C.tZ)("div",{css:A},a&&n&&(0,C.tZ)(w.Z,(0,r.Z)((0,r.Z)({},T.s.link_safety_warning_message),{},{values:{unsafeLinkText:n,a:()=>(0,C.tZ)("a",{href:a,target:"_blank",rel:"noopener noreferrer"},a)}})))),(0,C.tZ)(E.default,null,(0,C.tZ)(m.Z,{appearance:"subtle",onClick:o},(0,C.tZ)(w.Z,(0,r.Z)({},T.s.go_back))),(0,C.tZ)(m.Z,{appearance:"warning",onClick:i,autoFocus:!0},(0,C.tZ)(w.Z,(0,r.Z)({},T.s.continue))))));return s?l:(0,C.tZ)(N.Z,{locale:"en"},l)}),{enforceContext:!1}),R=["href","children","checkSafety","onClick","testId"],Z=["isLinkSafe","showSafetyWarningModal"],S=(0,s.NQ)("a"),O=(0,i.Z)({packageName:"platform-pkg",packageVersion:"0.0.0-use.local",componentName:"linkUrl"})((e=>{let{href:t,children:n,checkSafety:i=!0,onClick:s,testId:d="link-with-safety"}=e,c=(0,a.Z)(e,R);const u=h(),{isLinkSafe:p,showSafetyWarningModal:m}=u,f=(0,a.Z)(u,Z);return o.createElement(o.Fragment,null,o.createElement(l.R,{url:t,display:"url"},o.createElement(S,(0,r.Z)({"data-testid":d,href:t,onClick:e=>{i?p(e,t)?s&&s(e):m(e,t):s&&s(e)}},c),n)),i&&o.createElement(x,(0,r.Z)({},f)))}))},398951:(e,t,n)=>{n.d(t,{_:()=>r});const r="media-viewer-popup"}}]);
//# sourceMappingURL=96400.oC3Kg9WsfY.js.map