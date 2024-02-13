"use strict";(self._cf=self._cf||[]).push([[48708],{28201:(o,t,e)=>{e.d(t,{Z:()=>a});var r=Number.isNaN||function(o){return"number"==typeof o&&o!=o};function l(o,t){if(o.length!==t.length)return!1;for(var e=0;e<o.length;e++)if(l=o[e],a=t[e],!(l===a||r(l)&&r(a)))return!1;var l,a;return!0}function a(o,t){void 0===t&&(t=l);var e=null;function r(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];if(e&&e.lastThis===this&&t(r,e.lastArgs))return e.lastResult;var a=o.apply(this,r);return e={lastResult:a,lastArgs:r,lastThis:this},a}return r.clear=function(){e=null},r}},239411:(o,t,e)=>{e.d(t,{Z:()=>l});const r=/[\u202A-\u202E\u2066-\u2069]/g;function l(o,t){const e=[...o.matchAll(r)];if(0===e.length)return o;let l=[],a=0;for(const r of e)a!==r.index&&l.push(o.substring(a,r.index)),l.push(t({bidiCharacter:r[0],index:r.index})),a=r.index+r[0].length;return a!==o.length&&l.push(o.substring(a,o.length)),l}},702107:(o,t,e)=>{e.d(t,{Z:()=>g});var r=e(615919),l=e(872342),a=e(840506),n=e(332072),c=e(39030),i=e(16728),d=e(372387);const s=(0,c.iv)({position:"relative",":before":{display:"inline-flex",padding:"var(--ds-space-0, 0px) var(--ds-space-050, 4px)",alignItems:"center",justifyContent:"center",flexDirection:"row",background:`var(--ds-background-warning, ${i.a8})`,color:"var(--ds-text-warning, #7F5F01)",content:'"<"attr(data-bidi-character-code)">"',fontSize:"var(--ds-font-size-100, 14px)",fontStyle:"normal",lineHeight:"18px",pointerEvents:"auto"},":hover:before":{background:`var(--ds-background-warning-hovered, ${i.a8})`,color:"var(--ds-text-warning, #533F04)"}});function u({bidiCharacter:o,children:t,testId:e}){const r=function(o){var t;const e=null===(t=o.codePointAt(0))||void 0===t?void 0:t.toString(16);return`U+${e}`}(o);return(0,c.tZ)(a.Fragment,null,(0,c.tZ)("span",{css:s,"data-testid":e,"data-bidi-character-code":r,"aria-hidden":"true"},t),(0,c.tZ)(d.Z,{testId:e&&`${e}--visually-hidden`},(0,c.tZ)("mark",null,r)))}u.displayName="Decorator";const p=["children"];function g({testId:o,bidiCharacter:t,skipChildren:e,tooltipEnabled:r,label:l="Bidirectional characters change the order that text is rendered. This could be used to obscure malicious code."}){return r?a.createElement(n.Z,{content:l,tag:h},a.createElement(u,{testId:o,bidiCharacter:t},e?null:t)):a.createElement(u,{testId:o,bidiCharacter:t},e?null:t)}g.displayName="BidiWarning";const h=a.forwardRef(((o,t)=>{const{children:e}=o,n=(0,l.Z)(o,p);return a.createElement("span",(0,r.Z)((0,r.Z)({},n),{},{ref:t}),e)}))},156560:(o,t,e)=>{e.d(t,{Rm:()=>x,w9:()=>m,HX:()=>v});var r=e(615919),l=e(2142);const a="4px",n=(0,l.ww)(),c=2*n,i="--ds--code--line-number-bg-color";var d=e(28201),s=e(16728);const u="#067384",p="#7A5D1A",g=()=>({fontFamily:(0,l.Vj)(),fontFamilyItalic:`SFMono-MediumItalic, ${(0,l.Vj)()}`,backgroundColor:`var(--ds-background-neutral, ${s.IR})`,textColor:`var(--ds-text, ${s.q2})`,lineNumberColor:`var(--ds-text-subtlest, ${s.zN})`,lineNumberBgColor:`var(--ds-background-neutral, ${s.gt})`}),h=(g(),(0,d.Z)((()=>({highlightedLineBgColor:`var(--ds-background-neutral, ${s.gt})`,highlightedLineBorderColor:`var(--ds-border-focused, ${s.VY})`,substringColor:`var(--ds-text-subtlest, ${s.zN})`,keywordColor:`var(--ds-text-accent-blue, ${s.AX})`,attributeColor:`var(--ds-text-accent-teal, ${u})`,selectorTagColor:`var(--ds-text-accent-blue, ${s.AX})`,docTagColor:`var(--ds-text-accent-yellow, ${p})`,nameColor:`var(--ds-text-accent-blue, ${s.AX})`,builtInColor:`var(--ds-text-accent-blue, ${s.AX})`,literalColor:`var(--ds-text-accent-blue, ${s.AX})`,bulletColor:`var(--ds-text-accent-blue, ${s.AX})`,codeColor:`var(--ds-text-accent-blue, ${s.AX})`,regexpColor:`var(--ds-text-accent-teal, ${u})`,symbolColor:`var(--ds-text-accent-teal, ${u})`,variableColor:`var(--ds-text-accent-teal, ${u})`,templateVariableColor:`var(--ds-text-accent-teal, ${u})`,linkColor:`var(--ds-text-accent-purple, ${s.Wn})`,selectorAttributeColor:`var(--ds-text-accent-teal, ${u})`,selectorPseudoColor:`var(--ds-text-accent-teal, ${u})`,typeColor:`var(--ds-text-accent-teal, ${u})`,stringColor:`var(--ds-text-accent-green, ${s.VB})`,selectorIdColor:`var(--ds-text-accent-teal, ${u})`,selectorClassColor:`var(--ds-text-accent-teal, ${u})`,quoteColor:`var(--ds-text-accent-teal, ${u})`,templateTagColor:`var(--ds-text-accent-teal, ${u})`,titleColor:`var(--ds-text-accent-purple, ${s.Wn})`,sectionColor:`var(--ds-text-accent-purple, ${s.Wn})`,commentColor:`var(--ds-text-subtlest, ${s.zN})`,metaKeywordColor:`var(--ds-text-accent-green, ${s.VB})`,metaColor:`var(--ds-text-subtlest, ${s.zN})`,functionColor:`var(--ds-text, ${s.q2})`,numberColor:`var(--ds-text-accent-blue, ${s.AX})`,prologColor:`var(--ds-text-accent-blue, ${s.AX})`,cdataColor:`var(--ds-text-subtlest, ${s.zN})`,punctuationColor:`var(--ds-text, ${s.q2})`,propertyColor:`var(--ds-text-accent-purple, ${s.Wn})`,constantColor:`var(--ds-text-accent-teal, ${u})`,booleanColor:`var(--ds-text-accent-blue, ${s.AX})`,charColor:`var(--ds-text, ${s.q2})`,insertedColor:`var(--ds-text-accent-green, ${s.VB})`,deletedColor:`var(--ds-text-accent-red, ${s.gR})`,operatorColor:`var(--ds-text, ${s.q2})`,atruleColor:`var(--ds-text-accent-green, ${s.VB})`,importantColor:`var(--ds-text-accent-yellow, ${p})`})))),b=o=>({minWidth:`calc(${o.lineNumberWidth} + ${c}px) !important`,fontStyle:"normal !important",color:`${o.lineNumberColor} !important`,flexShrink:0,boxSizing:"border-box",paddingRight:`${n}px !important`,paddingLeft:n,marginRight:n,textAlign:"right",userSelect:"none",display:"block","&::after":{content:"attr(data-ds--line-number)"}}),C=o=>({fontSize:12,fontFamily:o.fontFamily,fontWeight:"normal",backgroundColor:`var(--ds--code--bg-color,${o.backgroundColor})`,color:o.textColor,borderStyle:"none",borderRadius:"var(--ds-border-radius, 3px)"}),x=o=>(t,e,l,d)=>(0,r.Z)((0,r.Z)((0,r.Z)({'code[class*="language-"], pre[class*="language-"], code':{all:"unset",padding:l?`${n}px 0`:n},display:"flex",lineHeight:"20px",overflowX:"auto",whiteSpace:"pre",direction:"ltr"},C(o)),(o=>({".token":{"&:not([class=token],[data-ds--code--row--highlight],[data-ds--code--row])":{all:"unset"},"&.key,&.keyword":{color:o.keywordColor,fontWeight:"bolder"},"&.attr-name":{color:o.attributeColor},"&.selector":{color:o.selectorTagColor},"&.comment,&.block-comment":{color:o.commentColor,fontFamily:o.fontFamilyItalic,fontStyle:"italic"},"&.function-name":{color:o.sectionColor},"&.doctype":{color:o.docTagColor},"&.substr":{color:o.substringColor},"&.namespace":{color:o.nameColor},"&.builtin":{color:o.builtInColor},"&.entity":{color:o.literalColor},"&.bullet":{color:o.bulletColor},"&.code":{color:o.codeColor},"&.regex":{color:o.regexpColor},"&.symbol":{color:o.symbolColor},"&.variable":{color:o.variableColor},"&.url":{color:o.linkColor},"&.selector-attr":{color:o.selectorAttributeColor},"&.selector-pseudo":{color:o.selectorPseudoColor},"&.type":{color:o.typeColor},"&.quote":{color:o.quoteColor},"&.tag":{color:o.templateTagColor},"&.string":{color:o.stringColor},"&.class-name":{color:o.sectionColor},"&.title":{color:o.titleColor},"&.section":{color:o.sectionColor},"&.meta-keyword":{color:o.metaKeywordColor},"&.meta":{color:o.metaColor},"&.italic":{fontStyle:"italic"},"&.bold":{fontWeight:"bolder"},"&.function":{color:o.functionColor},"&.number":{color:o.numberColor},"&.attr-value":{color:o.attributeColor},"&.prolog":{color:o.prologColor},"&.cdata":{color:o.cdataColor},"&.punctuation":{color:o.punctuationColor},"&.property":{color:o.propertyColor},"&.constant":{color:o.constantColor},"&.deleted":{color:o.deletedColor},"&.boolean":{color:o.booleanColor},"&.char":{color:o.charColor},"&.inserted":{color:o.insertedColor},"&.operator":{color:o.operatorColor},"&.atrule":{color:o.atruleColor},"&.important":{color:o.importantColor,fontWeight:"bold"}}}))(o)),{},{"& .linenumber, .ds-sh-line-number":b(o),"& .linenumber":{display:"inline-block !important",float:"left"},"& [data-ds--code--row]":{display:l?"flex":"block",paddingRight:`${n}px !important`,marginRight:`-${n}px`},"& [data-ds--code--row--highlight]":{background:`${o.highlightedLineBgColor}`,"&::before, &::after":{clipPath:"inset(100%)",clip:"rect(1px, 1px, 1px, 1px)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},"&::before":{content:`" [${t}] "`},"&::after":{content:`" [${e}] "`}},"& [data-ds--code--row--highlight] .linenumber":{borderLeft:`${a} solid ${o.highlightedLineBorderColor}`,paddingLeft:n/2+"px !important",position:"relative"},"& [data-ds--code--row--highlight] .linenumber::before":{content:'""',position:"absolute",width:a,top:"-1px",left:`-${a}`,borderTop:`1px solid ${o.highlightedLineBorderColor}`},"[data-ds--code--row--highlight] + [data-ds--code--row]:not([data-ds--code--row--highlight]), [data-ds--code--row]:not([data-ds--code--row--highlight]) + [data-ds--code--row--highlight]":{borderTop:"1px dashed transparent"},"[data-ds--code--row--highlight]:last-child":{borderBottom:"1px dashed transparent"},"& code:first-of-type":{paddingRight:"0px !important",backgroundImage:l?`linear-gradient(to right, var(${i},${o.lineNumberBgColor}), var(${i},${o.lineNumberBgColor})\n    calc(${o.lineNumberWidth} + ${c}px), transparent calc(${o.lineNumberWidth} + ${c}px), transparent)`:void 0},"& code:last-of-type":{paddingRight:`${n}px !important`,flexBasis:"auto",flexGrow:1,flexShrink:d?1:0,wordBreak:"break-word"},"code > span:only-child:empty:before, code > span:only-child > span:only-child:empty:before":{content:'" "'}}),v=()=>{const o=g(),t=C(o);return(0,r.Z)((0,r.Z)({},t),{},{display:"inline",padding:"2px 0.5ch",boxDecorationBreak:"clone",fontSize:"0.875em",overflow:"auto",overflowWrap:"break-word",whiteSpace:"pre-wrap"})},m=o=>{return(0,r.Z)((0,r.Z)((0,r.Z)({},g()),h()),{},{lineNumberWidth:o?(t=o,t?`${t.toFixed(0).length}ch`:"1ch"):void 0});var t}}}]);
//# sourceMappingURL=48708.6kxeASP69e.js.map