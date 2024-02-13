"use strict";(self._cf=self._cf||[]).push([[8309],{890987:(e,n,t)=>{t.d(n,{I:()=>r});var i=t(946972),a=t(233006),o=t(357969);const r=(0,i.Z)("div",{target:"e5xcnr80"})('.ak-renderer-document [data-macro-name="toc-zone"] [data-macro-name="code"]{display:inline-block;width:calc(100% - 15px);background:var(--ds-surface, #fff);}.ak-renderer-document [data-macro-name="toc-zone"] [data-macro-name="code"] > div{line-height:0;}.ak-renderer-document [data-macro-name="toc-zone"] [data-macro-name="code"] td.code{display:inline-block;width:calc(100% - 15px);padding:0 0 0 15px;background:var(--ds-surface, #fff);}ul,ol{margin:10px 0 0 0;}ul:first-of-type,ol:first-of-type{margin-top:0;}',(({bannerHeight:e})=>e&&`\n    h1, h2, h3, h4, h5, h6 {\n      scroll-margin-top: ${e}px;\n    }\n    // fix for floating table header\n    td > h1, td > h2, td > h3, td > h4, td > h5, td > h6 {\n      scroll-margin-top: ${2.5*e}px;\n    }\n  `)," ",(({markerRefs:e,isFabric:n,intl:t})=>e&&(0,o.u)(e,n,t))," ",(({isFabric:e})=>e&&`\n    .renderer-overrides {\n      /**\n       * Reduce content shifting after superbatch CSS loads\n       * The !important below is necessary (alas!) as editor migration to emotion\n       * changed the order of applying\n       */\n      h1 {\n        font-size: 1.714em;\n        font-weight: 500;\n        line-height: 1.166;\n        margin-top: 1.667em;\n      }\n      h2 {\n        font-size: 1.43em;\n        font-weight: 500;\n        line-height: 1.2;\n        margin-top: 1.8em;\n      }\n      h3 {\n        font-size: 1.142em;\n        line-height: 1.5;\n        margin-top: 2em;\n      }\n      h4 {\n        font-size: 1em;\n        line-height: 1.428;\n        margin-top: 1.357em;\n      }\n      h5 {\n        font-size: 0.857em;\n        line-height: 1.333;\n        margin-top: 1.667em;\n      }\n      h6 {\n        line-height: 1.454;\n        font-size: 0.785em;\n        margin-top: 1.455em;\n      }\n      /**\n      * React Renderer dynamically adds a heading-anchor-wrapper to hide the header link icon\n      * This wrapper doesn't load via SSR so we have to manually hide the icon\n      */\n      h1, h2, h3, h4, h5, h6 {\n        > button {\n          position: absolute;\n          right: auto;\n\n          > span[role="img"] {\n            opacity: 0;\n          }\n        }\n      }\n      blockquote {\n        border-left: 1px solid #ccc;\n        color: #707070;\n        margin-left: 19px;\n        padding: 10px 20px;\n      }\n      // CEMS-2974 TOC macro with decimal number was having first number cut off due to padding\n      .toc-macro[data-cssliststyle="decimal"] > ul {\n        padding-left: 40px;\n      }\n      // CONFCLOUD-73546 / CEMS-3103 overrides to fix margin-top: 0 on centered headings\n      .fabric-editor-block-mark[data-align] > h1, .fabric-editor-indentation-mark > h1, .fabric-editor-indentation-mark.fabric-editor-block-mark:first-of-type > h1:first-child {\n          margin-top: ${(0,a.pp)().marginTop};\n        }\n        .fabric-editor-block-mark[data-align] > h2, .fabric-editor-indentation-mark > h2 {\n          margin-top: ${(0,a.lL)().marginTop};\n        }\n        .fabric-editor-block-mark[data-align] > h3, .fabric-editor-indentation-mark > h3 {\n          margin-top: ${(0,a.uU)().marginTop};\n        }\n        .fabric-editor-block-mark[data-align] > h4, .fabric-editor-indentation-mark > h4 {\n          margin-top: ${(0,a.AC)().marginTop};\n        }\n         .fabric-editor-block-mark[data-align] > h5, .fabric-editor-indentation-mark > h5 {\n          margin-top: ${(0,a.qm)().marginTop};\n         }\n        .fabric-editor-block-mark[data-align] > h6, .fabric-editor-indentation-mark > h6 {\n          margin-top: ${(0,a.Mf)().marginTop};\n        }\n        .ak-ul li > ul {\n          margin-top: 4px;\n        }\n        ul.childpages-macro li {\n          &::before {\n            line-height: 24px;\n          }\n        }\n    }\n  `),";",(({isFabric:e})=>!e&&"// css styling for Tiny pages\n\n    /**\n    * Sortable Tables\n    */\n\n   /* BEGIN: override default css-reset from atlaskit */\n   .wiki-content table.confluenceTable {\n     width: initial;\n   }\n\n   .wiki-content table.confluenceTable td:first-child,\n   th:first-child {\n     padding-left: 10px !important;\n   }\n\n   .wiki-content table.confluenceTable td:last-child,\n   th:last-child {\n     padding-right: 10px !important;\n   }\n   /* END: override default css-reset from atlaskit */\n\n   .wiki-content\n    table.confluenceTable\n    th.confluenceTh\n    > .tablesorter-header-inner\n    > p {\n    font-weight: bold;\n    margin-bottom: 0;\n  }\n\n  .wiki-content\n    table.confluenceTable\n    td.confluenceTd\n    > .tablesorter-header-inner\n    > :first-child,\n  .wiki-content\n    table.confluenceTable\n    th.confluenceTh\n    > .tablesorter-header-inner\n    > :first-child {\n    /* CONF-26496 - Should be zero, but this causes the border to be rendered 2px high in some cases in Chrome */\n    margin-top: 0.2px;\n  }\n\n  .wiki-content table.tablesorter > thead > tr > th {\n    background: var(--ds-background-accent-gray-subtlest, #f0f0f0) center right no-repeat;\n    padding-right: 15px;\n    cursor: pointer;\n  }\n\n  .wiki-content table.tablesorter > thead > tr:hover > th {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKBAMAAACQ3rmwAAAAA3NCSVQICAjb4U/gAAAAD1BMVEX///9QYXNQYXNQYXNQYXNa92HSAAAABXRSTlMAESIzRJTdRHwAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAedEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzUuMasfSOsAAAB5dEVYdG5hbWVTZXRzAHsgZGVzY3JpcHRpb246IkRvd25sb2FkIHRoZSBcIk5hbWVkIFNlbGVjdGlvbiBTZXRzXCIgcGFuZWwgZnJvbSBodHRwOi8vZmlyZXdvcmtzLmFiZWFsbC5jb20iLCBpZDotMSwgc2V0czp7ICB9IH1YpK+bAAAAFXRFWHRDcmVhdGlvbiBUaW1lADI5LzMvMTJcby01AAAAJUlEQVQImWNgUGIAAUYXARDF4uIIokxcnBkwAFRQxMUBSQNEOwB/EQOGsCyAPwAAAABJRU5ErkJggg==);\n  }\n\n  .wiki-content table.tablesorter > thead > tr > th.tablesorter-headerSortDown {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKBAMAAACQ3rmwAAAAA3NCSVQICAjb4U/gAAAAHlBMVEX///9QYXNQYXNQYXNQYXNQYXNQYXNQYXNQYXNQYXOMgbQDAAAACnRSTlMAESIzRGZ3maq7ZAl7FAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB50RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNS4xqx9I6wAAAHl0RVh0bmFtZVNldHMAeyBkZXNjcmlwdGlvbjoiRG93bmxvYWQgdGhlIFwiTmFtZWQgU2VsZWN0aW9uIFNldHNcIiBwYW5lbCBmcm9tIGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSIsIGlkOi0xLCBzZXRzOnsgIH0gfVikr5sAAAAVdEVYdENyZWF0aW9uIFRpbWUAMjkvMy8xMlxvLTUAAAAdSURBVAiZY2AIYwAB5pkOIEpiZhOIqpw5nYEUAADZjgQPuazuBAAAAABJRU5ErkJggg==);\n  }\n\n  .wiki-content table.tablesorter > thead > tr > th.tablesorter-headerSortUp {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKBAMAAACQ3rmwAAAAA3NCSVQICAjb4U/gAAAAHlBMVEX///9QYXNQYXNQYXNQYXNQYXNQYXNQYXNQYXNQYXOMgbQDAAAACnRSTlMAESIzRGZ3maq7ZAl7FAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB50RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNS4xqx9I6wAAAHl0RVh0bmFtZVNldHMAeyBkZXNjcmlwdGlvbjoiRG93bmxvYWQgdGhlIFwiTmFtZWQgU2VsZWN0aW9uIFNldHNcIiBwYW5lbCBmcm9tIGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSIsIGlkOi0xLCBzZXRzOnsgIH0gfVikr5sAAAAVdEVYdENyZWF0aW9uIFRpbWUAMjkvMy8xMlxvLTUAAAAdSURBVAiZY2AgGlTOnA6iNGY2giiWmQZg0VQQAQBOSAQedpgI7AAAAABJRU5ErkJggg==);\n  }\n\n  /**\n    * image positions\n    */\n  .wiki-content .image-center-wrapper {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .wiki-content .image-right-wrapper {\n    display: table;\n    margin: 0 0 10px auto;\n  }\n\n  .wiki-content .image-left-wrapper {\n    display: table;\n    margin: 0 auto 10px 0;\n  }\n\n  .wiki-content .confluence-embedded-file-wrapper .confluence-embedded-image {\n    display: block;\n    margin-left: 2px;\n    margin-right: 2px;\n    max-width: calc(100% - 4px);\n  }\n\n   /**\n    * headers\n    */\n\n  .wiki-content h1 {\n    font-size: 1.714em;\n    font-weight: normal;\n    line-height: 1.166;\n  }\n\n  .wiki-content h2 {\n    font-size: 1.43em;\n    font-weight: normal;\n    line-height: 1.2;\n  }\n\n  .wiki-content h3 {\n    font-size: 1.142em;\n    font-weight: normal;\n    line-height: 1.5;\n  }\n\n  .wiki-content h4 {\n    font-size: 1em;\n    line-height: 1.428;\n    font-weight: bold;\n  }\n\n  .wiki-content h5 {\n    font-size: 0.857em;\n    line-height: 1.333;\n    font-weight: bold;\n  }\n\n  .wiki-content h6 {\n    line-height: 1.454;\n    font-size: 0.785em;\n    font-weight: bold;\n  }\n\n  h1 + h2,\n  h2 + h3,\n  h3 + h4,\n  h4 + h5,\n  h5 + h6 {\n    margin-top: 10px;\n  }\n\n  /**\n   * quotes element\n   *\n   * The same styling is curerntly used for fabric pages. This fixes the issue where quote styling is not applied when a tiny page is SSR-ed. Also fixes the CLS when the page is not SSR-ed.\n   */\n\n  .wiki-content blockquote {\n    border-left: 1px solid #ccc;\n    color: #707070;\n    margin-left: 19px;\n    padding: 10px 20px;\n  }\n\n  .wiki-content blockquote p {\n    margin: 10px 0 0 0;\n  }\n\n  .wiki-content blockquote p:first-of-type {\n    margin-top: 0;\n  }\n\n  // the list item markers start all the way from left and then move to center/right when not SSR-ed\n  li[style*='text-align: center'], li[style*='text-align: right'] {\n    list-style-position: inside;\n  }\n  "),";")},357969:(e,n,t)=>{t.d(n,{k:()=>s,u:()=>l});var i=t(620841),a=t(93972),o=t(16728);const r=(0,a.defineMessages)({contentRendererInlineCommentMarkerStart:{id:"content-renderer.inlineComment.marker.start",defaultMessage:"inline comment start"},contentRendererInlineCommentMarkerEnd:{id:"content-renderer.inlineComment.marker.end",defaultMessage:"inline comment end"}}),l=(e,n,t)=>s(t),s=e=>(0,i.iv)('div[mode="stick"]{z-index:1;background:',`var(--ds-background-inverse-subtle, ${o.N0})`,";}span{&.inline-highlight{",(e=>(0,i.iv)("cursor:pointer;background-color:",`var(--ds-background-accent-yellow-subtler, ${o.a8})`,";border-bottom:2px solid var(--ds-border-accent-yellow, rgba(255, 196, 0, 0.82));&.active-highlight{background-color:",`var(--ds-background-accent-yellow-subtle, ${o.ii})`,";border-bottom:2px solid ",`var(--ds-border-accent-yellow, ${o.Z3})`,";box-shadow:",`var(--ds-shadow-overlay, 0 2px 2px ${o.uv})`,';}&::before,&::after{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}&.first-mark-highlight::before{content:" [',e.formatMessage(r.contentRendererInlineCommentMarkerStart),'] ";}&.last-mark-highlight::after{content:" [',e.formatMessage(r.contentRendererInlineCommentMarkerEnd),'] ";}'))(e),"}&.inline-create-comment-selection{background-color:",`var(--ds-background-accent-yellow-subtle, ${o.ii})`,";border-bottom:2px solid ",`var(--ds-border-accent-yellow, ${o.Z3})`,";box-shadow:",`var(--ds-shadow-overlay, 0 2px 2px ${o.uv})`,";}}")},198300:(e,n,t)=>{t.d(n,{C:()=>i,e:()=>a});const i="live",a="live-pages-store"},881584:(e,n,t)=>{t.d(n,{U:()=>i,q:()=>a});const i="confluence.frontend.livepages.enable",a="confluence.frontend.livepages.liveview"},273155:(e,n,t)=>{t.d(n,{N:()=>o});var i=t(170560),a=t(410941);const o=()=>{const e=(0,i.k)(),[n]=(0,a.d)();return e&&n.isLive}},170560:(e,n,t)=>{t.d(n,{k:()=>o});var i=t(179640),a=t(881584);const o=()=>(0,i.T)(a.U)},410941:(e,n,t)=>{t.d(n,{d:()=>s});var i=t(944547),a=t(834232),o=t(198300);const r={setIsLive:e=>({setState:n})=>{n({isLive:e})}},l=(0,a.M)({initialState:{isLive:!1},actions:r,name:o.e}),s=(0,i.Bi)(l)},477958:(e,n,t)=>{t.d(n,{B7:()=>h,B8:()=>l,Ck:()=>k,D4:()=>y,DN:()=>g,Dc:()=>r,G5:()=>u,I0:()=>c,Nh:()=>s,RI:()=>b,SB:()=>w,_K:()=>A,bJ:()=>f,bn:()=>x,e_:()=>i,hA:()=>p,m7:()=>d,mL:()=>o,pS:()=>a,uK:()=>m,xO:()=>v});const i="system.content.action",a="system.content.button",o="system.content.byline",r="system.content.metadata",l="page.metadata.banner",s="system.header/left",d="system.help/pages",c="system.user",h="system.admin",m="system.editor.precursor.buttons",p="system.create.dialog/content",g="system.create.space.dialog/content",u="page.view.selection/action-panel",f="atl.dashboard.secondary",A="atl.general",b="atl.footer",v="atl.page.metadata.banner",w="atl.page.content.footer.actions",k="atl.editor.savebar",y="system.admin/siteadministration",x="system.admin/security"},827685:(e,n,t)=>{t.d(n,{f:()=>i});const i=t(779076).ZP`query WebPanelLocationQuery($location:String$contentId:ID$spaceKey:String){webPanels(location:$location contentId:$contentId key:$spaceKey){moduleKey completeKey html location label weight name}}`},791945:(e,n,t)=>{t.d(n,{ZW:()=>d,i5:()=>r,jC:()=>o});var i=t(840506),a=t(319754);const o=(0,i.createContext)(0),r=(0,i.createContext)({topLevelRef:{current:null},setTopLevel:a.Z}),l=({children:e,currentLevel:n})=>{const{setTopLevel:t}=(0,i.useContext)(r);return t(n),(0,i.useEffect)((()=>()=>{setTimeout((()=>{t(n-1)}),0)}),[t,n]),i.createElement(o.Provider,{value:n},e)};l.displayName="LevelProvider";const s=({children:e})=>{const n=(0,i.useRef)(0),t=(0,i.useMemo)((()=>({topLevelRef:n,setTopLevel:e=>{n.current=e}})),[n]);return i.createElement(r.Provider,{value:t},e)};s.displayName="LayeringProvider";const d=({children:e,isDisabled:n=!0})=>{const t=(0,i.useContext)(o);if(n)return i.createElement(i.Fragment,null,e);const a=t>0,r=i.createElement(l,{currentLevel:t+1},e);return a?r:i.createElement(s,null,r)}},259612:(e,n,t)=>{t.d(n,{J:()=>s,f:()=>l});var i=t(840506),a=t(393242),o=t(791945);const r="Escape";function l({onClose:e,isDisabled:n}){const t=(0,i.useRef)(!1),{isLayerDisabled:o}=s(),l=(0,i.useCallback)((i=>{const a=o();n||t.current||i.key!==r||a||(t.current=!0,e(i))}),[e,n,o]),d=(0,i.useCallback)((()=>{t.current=!1}),[]);(0,i.useEffect)((()=>(0,a.Ev)(document,[{type:"keydown",listener:l},{type:"keyup",listener:d}],{capture:!1})),[l,d])}function s(){const e=(0,i.useContext)(o.jC),{topLevelRef:n}=(0,i.useContext)(o.i5),t=(0,i.useCallback)((()=>!!n.current&&e!==n.current),[e,n]);return{currentLevel:e,topLevelRef:n,isLayerDisabled:t}}},724093:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t(478201).G},478201:(e,n,t)=>{t.d(n,{G:()=>B});var i=t(840506),a=t(39030),o=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function r(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(i=e[t],a=n[t],!(i===a||o(i)&&o(a)))return!1;var i,a;return!0}var l=t(791945),s=t(129275),d=t(479198),c=t(136342),h=t(2142),m=t(615919),p=t(872342),g=t(259612),u=t(24359),f=t(379525),A=t(16728),b=t(507690);const v=({children:e,update:n})=>{const t=(0,i.useRef)(!0);return(0,i.useLayoutEffect)((()=>{t.current?t.current=!1:n()}),[n]),i.createElement(i.Fragment,null,e)};v.displayName="RepositionOnUpdate";var w=t(393242),k=t(319754);var y=t(747256),x=t.n(y);const R=["shouldRenderToParent","children"],Z=(0,a.iv)({display:"block",boxSizing:"border-box",zIndex:h.ug.layer(),flex:"1 1 auto",backgroundColor:`var(--ds-surface-overlay, ${A.N0})`,borderRadius:"var(--ds-border-radius, 3px)",boxShadow:`var(--ds-shadow-overlay, 0 4px 8px -2px ${A.Nx}, 0 0 1px ${A.VG})`,[b.kO]:`var(--ds-surface-overlay, ${A.N0})`,":focus":{outline:"none"}}),C=(0,a.iv)({overflow:"auto"}),I=(0,a.iv)({"iframe:not([data-ds--level] iframe)":{pointerEvents:"none"}}),N=(0,i.forwardRef)(((e,n)=>{const{shouldRenderToParent:t,children:i}=e,o=(0,p.Z)(e,R);return(0,a.tZ)("div",(0,m.Z)((0,m.Z)({css:[Z,!t&&C]},o),{},{ref:n}),i)}));function S({isOpen:e,id:n,offset:t,testId:o,content:r,fallbackPlacements:l,onClose:s,boundary:d,rootBoundary:c,shouldFlip:h,placement:m="auto",popupComponent:p=N,autoFocus:A=!0,triggerRef:b,shouldUseCaptureOnOutsideClick:y,shouldRenderToParent:R}){const[Z,C]=(0,i.useState)(null),[S,z]=(0,i.useState)(null);(({initialFocusRef:e,popupRef:n})=>{(0,i.useEffect)((()=>{if(!n)return k.Z;const t={clickOutsideDeactivates:!0,escapeDeactivates:!0,initialFocus:e||n,fallbackFocus:n,returnFocusOnDeactivate:!0},i=x()(n,t);let a=null;return a=requestAnimationFrame((()=>{a=null,i.activate()})),()=>{null!=a&&(cancelAnimationFrame(a),a=null),i.deactivate()}}),[n,e])})({initialFocusRef:S,popupRef:Z}),(({isOpen:e,onClose:n,popupRef:t,triggerRef:a,shouldUseCaptureOnOutsideClick:o})=>{const{isLayerDisabled:r}=(0,g.J)();(0,i.useEffect)((()=>{if(!e||!t)return k.Z;const i=e=>{n&&n(e)};return(0,w.Ev)(window,[{type:"click",listener:e=>{const{target:n}=e;if(!document.body.contains(n))return;const o=t&&t.contains(n),r=a&&a.contains(n);o||r||i(e)},options:{capture:o}},{type:"keydown",listener:e=>{if(r())return;const{key:n}=e;"Escape"!==n&&"Esc"!==n||i(e)}}])}),[e,n,t,a,o,r])})({isOpen:e,onClose:s,popupRef:Z,triggerRef:b,shouldUseCaptureOnOutsideClick:y});const{currentLevel:T}=(0,g.J)(),B=(0,i.useMemo)((()=>[{name:"flip",enabled:h,options:{rootBoundary:c,boundary:d,fallbackPlacements:l}}]),[h,c,d,l]);return(0,a.tZ)(f.r,{placement:m,offset:t,modifiers:B},(({ref:t,style:i,placement:l,update:d})=>(0,a.tZ)(p,{id:n,"data-ds--level":T,"data-placement":l,"data-testid":o,ref:e=>{e&&("function"==typeof t?t(e):t.current=e,C(e))},style:i,tabIndex:A?0:void 0,shouldRenderToParent:R},(0,u.e)("platform.design-system-team.iframe_gojiv")&&(0,a.tZ)(a.xB,{styles:I}),(0,a.tZ)(v,{update:d},r({update:d,isOpen:e,onClose:s,setInitialFocusRef:z})))))}S.displayName="PopperWrapper";const z=S,T=h.ug.layer(),B=(0,i.memo)((({isOpen:e,id:n,offset:t,testId:o,trigger:h,content:m,onClose:p,boundary:g,rootBoundary:u="viewport",shouldFlip:f=!0,placement:A="auto",fallbackPlacements:b,popupComponent:v,autoFocus:w=!0,zIndex:k=T,shouldUseCaptureOnOutsideClick:y=!1,shouldRenderToParent:x=!1})=>{const[R,Z]=(0,i.useState)(null),[C]=(0,i.useState)((()=>function(e,n){void 0===n&&(n=r);var t=null;function i(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(t&&t.lastThis===this&&n(i,t.lastArgs))return t.lastResult;var o=e.apply(this,i);return t={lastResult:o,lastArgs:i,lastThis:this},o}return i.clear=function(){t=null},i}(((e,n,t)=>i=>{i&&t&&("function"==typeof e?e(i):e&&(e.current=i),n(i))})))),I=(0,a.tZ)(l.ZW,{isDisabled:!1},(0,a.tZ)(z,{content:m,isOpen:e,placement:A,fallbackPlacements:b,boundary:g,rootBoundary:u,shouldFlip:f,offset:t,popupComponent:v,id:n,testId:o,onClose:p,autoFocus:w,shouldUseCaptureOnOutsideClick:y,shouldRenderToParent:x,triggerRef:R}));return(0,a.tZ)(s.dK,null,(0,a.tZ)(d.s,null,(({ref:t})=>h({ref:C(t,Z,e),"aria-controls":n,"aria-expanded":e,"aria-haspopup":!0}))),e&&(x?I:(0,a.tZ)(c.Z,{zIndex:k},I)))}))},233006:(e,n,t)=>{t.d(n,{$G:()=>l,AC:()=>p,Dq:()=>d,Mf:()=>f,aR:()=>s,lL:()=>h,pB:()=>u,pp:()=>c,qm:()=>g,uU:()=>m});var i=t(615919),a=t(16728),o=t(2142);const r=(e,n)=>({fontSize:e/(0,o.JB)()+"em",fontStyle:"inherit",lineHeight:n/e}),l={h900:{size:35,lineHeight:40},h800:{size:29,lineHeight:32},h700:{size:24,lineHeight:28},h600:{size:20,lineHeight:24},h500:{size:16,lineHeight:20},h400:{size:14,lineHeight:16},h300:{size:12,lineHeight:16},h200:{size:12,lineHeight:16},h100:{size:11,lineHeight:16}},s=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h900.size,l.h900.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.01em",marginTop:6.5*(0,o.ww)()+"px"}),d=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h800.size,l.h800.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.01em",marginTop:5*(0,o.ww)()+"px"}),c=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h700.size,l.h700.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.01em",marginTop:5*(0,o.ww)()+"px"}),h=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h600.size,l.h600.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.008em",marginTop:3.5*(0,o.ww)()+"px"}),m=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h500.size,l.h500.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.006em",marginTop:3*(0,o.ww)()+"px"}),p=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h400.size,l.h400.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",letterSpacing:"-0.003em",marginTop:2*(0,o.ww)()+"px"}),g=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h300.size,l.h300.lineHeight)),{},{color:`var(--ds-text, ${(0,a.nP)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",marginTop:2.5*(0,o.ww)()+"px",textTransform:"uppercase"}),u=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h200.size,l.h200.lineHeight)),{},{color:`var(--ds-text-subtlest, ${(0,a.Pe)(e)})`,fontWeight:"var(--ds-font-weight-semibold, 600)",marginTop:2*(0,o.ww)()+"px"}),f=(e={})=>(0,i.Z)((0,i.Z)({},r(l.h100.size,l.h100.lineHeight)),{},{color:`var(--ds-text-subtlest, ${(0,a.Pe)(e)})`,fontWeight:"var(--ds-font-weight-bold, 700)",marginTop:2*(0,o.ww)()+"px"})}}]);
//# sourceMappingURL=8309.R77GoYlUhG.js.map