(self._cf=self._cf||[]).push([[42505],{58761:(e,t,n)=>{var r=n(165739)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},334006:(e,t,n)=>{"use strict";n.d(t,{e:()=>o});var r=n(710358);const o=e=>{let t=!1;return{transformedAdf:(0,r.f)(e,{mediaSingle:e=>{var n;if(!e.marks||!e.content||"media"!==(null===(n=e.content[0])||void 0===n?void 0:n.type))return e;let r=null;if(e.marks.forEach(((n,o)=>{var a;"link"===n.type&&(r=n,null===(a=e.marks)||void 0===a||a.splice(o,1),t=!0)})),0===e.marks.length&&delete e.marks,r){var o;const t=e.content[0];null!==(o=t.marks)&&void 0!==o&&o.every((e=>"link"!==e.type))?t.marks.push(r):t.marks||(t.marks=[r])}return e}}),isTransformed:t}}},238304:(e,t,n)=>{"use strict";n.d(t,{s:()=>nt});var r={};n.r(r),n.d(r,{alignment:()=>y,annotation:()=>g,atomic_inline:()=>P,blockCard:()=>D,block_content:()=>De,blockquote:()=>ce,bodiedExtension:()=>Ie,bodiedExtension_with_marks:()=>Ce,border:()=>A,breakout:()=>E,bulletList:()=>ee,caption:()=>G,code:()=>s,codeBlock:()=>j,codeBlock_with_marks:()=>q,codeBlock_with_no_marks:()=>z,code_inline:()=>$,dataConsumer:()=>b,date:()=>I,decisionItem:()=>se,decisionList:()=>le,doc:()=>Be,em:()=>i,embedCard:()=>he,emoji:()=>k,expand:()=>ke,expand_with_breakout_mark:()=>Ne,expand_with_no_mark:()=>we,extension:()=>pe,extensionFrame:()=>xe,extension_with_marks:()=>me,formatted_text_inline:()=>F,fragment:()=>_,hardBreak:()=>T,heading:()=>ne,heading_with_alignment:()=>oe,heading_with_indentation:()=>ae,heading_with_no_marks:()=>re,indentation:()=>f,inline:()=>M,inlineCard:()=>O,inlineExtension:()=>w,inlineExtension_with_marks:()=>N,inline_comment_marker:()=>h,layoutColumn:()=>Oe,layoutSection:()=>Se,layoutSection_full:()=>Re,layoutSection_with_single_column:()=>Le,link:()=>c,link_text_inline:()=>B,listItem:()=>Q,media:()=>L,mediaGroup:()=>ie,mediaInline:()=>x,mediaSingle:()=>K,mediaSingle_caption:()=>Z,mediaSingle_full:()=>Y,mention:()=>v,multiBodiedExtension:()=>Fe,nestedExpand:()=>ye,nestedExpand_content:()=>Ee,nestedExpand_with_no_marks:()=>fe,non_nestable_block_content:()=>ve,orderedList:()=>te,panel:()=>de,paragraph:()=>U,paragraph_with_alignment:()=>W,paragraph_with_indentation:()=>H,paragraph_with_no_marks:()=>V,placeholder:()=>C,rule:()=>ue,status:()=>S,strike:()=>l,strong:()=>u,subsup:()=>p,table:()=>ge,tableCell:()=>Ae,tableCell_content:()=>_e,tableHeader:()=>Te,tableRow:()=>be,taskItem:()=>X,taskList:()=>J,text:()=>R,textColor:()=>m,underline:()=>d});var o=n(615919),a=n(872342);const i={props:{type:{type:"enum",values:["em"]}}},s={props:{type:{type:"enum",values:["code"]}}},l={props:{type:{type:"enum",values:["strike"]}}},u={props:{type:{type:"enum",values:["strong"]}}},d={props:{type:{type:"enum",values:["underline"]}}},c={props:{type:{type:"enum",values:["link"]},attrs:{props:{href:{type:"string",validatorFn:"safeUrl"},title:{type:"string",optional:!0},id:{type:"string",optional:!0},collection:{type:"string",optional:!0},occurrenceKey:{type:"string",optional:!0}}}}},p={props:{type:{type:"enum",values:["subsup"]},attrs:{props:{type:{type:"enum",values:["sub","sup"]}}}}},m={props:{type:{type:"enum",values:["textColor"]},attrs:{props:{color:{type:"string",pattern:"^#[0-9a-fA-F]{6}$"}}}}},h={props:{type:{type:"enum",values:["confluenceInlineComment"]},attrs:{props:{reference:{type:"string"}}}}},E={props:{type:{type:"enum",values:["breakout"]},attrs:{props:{mode:{type:"enum",values:["wide","full-width"]}}}}},y={props:{type:{type:"enum",values:["alignment"]},attrs:{props:{align:{type:"enum",values:["center","end"]}}}}},f={props:{type:{type:"enum",values:["indentation"]},attrs:{props:{level:{type:"number",minimum:1,maximum:6}}}}},g={props:{type:{type:"enum",values:["annotation"]},attrs:{props:{id:{type:"string"},annotationType:{type:"enum",values:["inlineComment"]}}}}},b={props:{type:{type:"enum",values:["dataConsumer"]},attrs:{props:{sources:{type:"array",items:[{type:"string"}],minItems:1}}}}},_={props:{type:{type:"enum",values:["fragment"]},attrs:{props:{localId:{type:"string",minLength:1},name:{type:"string",optional:!0}}}}},A={props:{type:{type:"enum",values:["border"]},attrs:{props:{size:{type:"number",minimum:1,maximum:3},color:{type:"string",pattern:"^#[0-9a-fA-F]{8}$|^#[0-9a-fA-F]{6}$"}}}}},T={props:{type:{type:"enum",values:["hardBreak"]},attrs:{props:{text:{type:"enum",values:["\n"],optional:!0}},optional:!0}}},v={props:{type:{type:"enum",values:["mention"]},attrs:{props:{id:{type:"string"},text:{type:"string",optional:!0},userType:{type:"enum",values:["DEFAULT","SPECIAL","APP"],optional:!0},accessLevel:{type:"string",optional:!0}}}}},k={props:{type:{type:"enum",values:["emoji"]},attrs:{props:{id:{type:"string",optional:!0},shortName:{type:"string"},text:{type:"string",optional:!0}}}}},w={props:{type:{type:"enum",values:["inlineExtension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0}}},N=["inlineExtension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],I={props:{type:{type:"enum",values:["date"]},attrs:{props:{timestamp:{type:"string",minLength:1}}}}},C={props:{type:{type:"enum",values:["placeholder"]},attrs:{props:{text:{type:"string"}}}}},D={props:{type:{type:"enum",values:["blockCard"]},attrs:[{props:{url:{type:"string",validatorFn:"safeUrl",optional:!0},datasource:{props:{id:{type:"string"},parameters:{type:"object"},views:{type:"array",items:[{props:{type:{type:"string"},properties:{type:"object",optional:!0}}}],minItems:1}}},width:{type:"number",optional:!0},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"],optional:!0}}},{props:{url:{type:"string",validatorFn:"safeUrl"}}},{props:{data:{type:"object"}}}]},required:["attrs"]},O={props:{type:{type:"enum",values:["inlineCard"]},attrs:[{props:{url:{type:"string",validatorFn:"safeUrl"}}},{props:{data:{type:"object"}}}]},required:["attrs"]},S={props:{type:{type:"enum",values:["status"]},attrs:{props:{text:{type:"string",minLength:1},color:{type:"enum",values:["neutral","purple","blue","red","yellow","green"]},localId:{type:"string",optional:!0},style:{type:"string",optional:!0}}}}},R={props:{type:{type:"enum",values:["text"]},text:{type:"string",minLength:1},marks:{type:"array",items:[],optional:!0}}},L={props:{type:{type:"enum",values:["media"]},attrs:[{props:{type:{type:"enum",values:["link","file"]},id:{type:"string",minLength:1},collection:{type:"string"},height:{type:"number",optional:!0},width:{type:"number",optional:!0},occurrenceKey:{type:"string",minLength:1,optional:!0},alt:{type:"string",optional:!0}}},{props:{type:{type:"enum",values:["external"]},url:{type:"string"},alt:{type:"string",optional:!0},width:{type:"number",optional:!0},height:{type:"number",optional:!0}}}],marks:{type:"array",items:[["link","border"]],optional:!0}},required:["attrs"]},x={props:{type:{type:"enum",values:["mediaInline"]},attrs:{props:{data:{type:"object",optional:!0},type:{type:"enum",values:["link","file","image"],optional:!0},id:{type:"string",minLength:1},collection:{type:"string"},height:{type:"number",optional:!0},width:{type:"number",optional:!0},occurrenceKey:{type:"string",minLength:1,optional:!0},alt:{type:"string",optional:!0}}},marks:{type:"array",items:[["link","border"]],optional:!0}}},F=["text",{props:{marks:{type:"array",items:[["em","strike","strong","underline","link","subsup","textColor","annotation"]],optional:!0}}}],B=["text",{props:{marks:{type:"array",items:["link"],optional:!0}}}],$=["text",{props:{marks:{type:"array",items:[["code","link","annotation"]],optional:!0}}}],P=["hardBreak","mention","emoji","inlineExtension_with_marks","date","placeholder","inlineCard","status","mediaInline"],M=["hardBreak","mention","emoji","inlineExtension_with_marks","date","placeholder","inlineCard","status","mediaInline","formatted_text_inline","code_inline"],U={props:{type:{type:"enum",values:["paragraph"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0}}},V=["paragraph",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],W=["paragraph",{props:{marks:{type:"array",items:["alignment"],optional:!0}}}],H=["paragraph",{props:{marks:{type:"array",items:["indentation"],optional:!0}}}],G={props:{type:{type:"enum",values:["caption"]},content:{type:"array",items:[["hardBreak","mention","emoji","date","placeholder","inlineCard","status","formatted_text_inline","code_inline"]],minItems:0,allowUnsupportedInline:!0}}},K={props:{type:{type:"enum",values:["mediaSingle"]},attrs:[{props:{widthType:{type:"enum",values:["percentage"],optional:!0},width:{type:"number",minimum:0,maximum:100,optional:!0},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"]}}},{props:{width:{type:"number",minimum:0},widthType:{type:"enum",values:["pixel"]},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"]}}}],marks:{type:"array",items:["link"],optional:!0}}},Z=["mediaSingle",{props:{content:{type:"array",items:["media","caption"],isTupleLike:!0,minItems:1,maxItems:2,allowUnsupportedBlock:!0}}}],Y=["mediaSingle",{props:{content:{type:"array",items:["media"],minItems:1,maxItems:1,allowUnsupportedBlock:!0}}}],j={props:{type:{type:"enum",values:["codeBlock"]},content:{type:"array",items:[["text",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}]],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0},attrs:{props:{language:{type:"string",optional:!0}},optional:!0}}},z=["codeBlock",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],q=["codeBlock",{props:{marks:{type:"array",items:["breakout"],optional:!0}}}],X={props:{type:{type:"enum",values:["taskItem"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},attrs:{props:{localId:{type:"string"},state:{type:"enum",values:["TODO","DONE"]}}}}},J={props:{type:{type:"enum",values:["taskList"]},content:{type:"array",items:["taskItem",["taskItem","taskList"]],isTupleLike:!0,minItems:1,allowUnsupportedBlock:!0},attrs:{props:{localId:{type:"string"}}}}},Q={props:{type:{type:"enum",values:["listItem"]},content:{type:"array",items:[["paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks"],["paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList"]],isTupleLike:!0,minItems:1,allowUnsupportedBlock:!0}}},ee={props:{type:{type:"enum",values:["bulletList"]},content:{type:"array",items:["listItem"],minItems:1}}},te={props:{type:{type:"enum",values:["orderedList"]},content:{type:"array",items:["listItem"],minItems:1},attrs:{props:{order:{type:"number",minimum:0,optional:!0}},optional:!0}}},ne={props:{type:{type:"enum",values:["heading"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0},attrs:{props:{level:{type:"number",minimum:1,maximum:6}}}}},re=["heading",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],oe=["heading",{props:{marks:{type:"array",items:["alignment"],optional:!0}}}],ae=["heading",{props:{marks:{type:"array",items:["indentation"],optional:!0}}}],ie={props:{type:{type:"enum",values:["mediaGroup"]},content:{type:"array",items:["media"],minItems:1,allowUnsupportedBlock:!0}}},se={props:{type:{type:"enum",values:["decisionItem"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},attrs:{props:{localId:{type:"string"},state:{type:"string"}}}}},le={props:{type:{type:"enum",values:["decisionList"]},content:{type:"array",items:["decisionItem"],minItems:1,allowUnsupportedBlock:!0},attrs:{props:{localId:{type:"string"}}}}},ue={props:{type:{type:"enum",values:["rule"]}}},de={props:{type:{type:"enum",values:["panel"]},attrs:{props:{panelType:{type:"enum",values:["info","note","tip","warning","error","success","custom"]},panelIcon:{type:"string",optional:!0},panelIconId:{type:"string",optional:!0},panelIconText:{type:"string",optional:!0},panelColor:{type:"string",optional:!0}}},content:{type:"array",items:[["blockCard","paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","mediaGroup","decisionList","rule"]],minItems:1,allowUnsupportedBlock:!0}}},ce={props:{type:{type:"enum",values:["blockquote"]},content:{type:"array",items:[["paragraph_with_no_marks","bulletList","orderedList"]],minItems:1,allowUnsupportedBlock:!0}}},pe={props:{type:{type:"enum",values:["extension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0}}},me=["extension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],he={props:{type:{type:"enum",values:["embedCard"]},attrs:{props:{originalWidth:{type:"number",optional:!0},originalHeight:{type:"number",optional:!0},url:{type:"string",validatorFn:"safeUrl"},width:{type:"number",minimum:0,maximum:100,optional:!0},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"]}}}}},Ee={type:"array",items:[["paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","mediaGroup","decisionList","rule","panel","blockquote"]],minItems:1,allowUnsupportedBlock:!0},ye={props:{type:{type:"enum",values:["nestedExpand"]},attrs:{props:{title:{type:"string",optional:!0}}},content:"nestedExpand_content"},required:["content"]},fe=["nestedExpand",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],ge={props:{type:{type:"enum",values:["table"]},attrs:{props:{isNumberColumnEnabled:{type:"boolean",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0},width:{type:"number",optional:!0}},optional:!0},content:{type:"array",items:["tableRow"],minItems:1},marks:{type:"array",items:["fragment"],optional:!0}}},be={props:{type:{type:"enum",values:["tableRow"]},content:{type:"array",items:[["tableCell","tableHeader"]]}}},_e={type:"array",items:[["blockCard","paragraph_with_no_marks","paragraph_with_alignment","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","mediaGroup","decisionList","rule","panel","blockquote","extension_with_marks","embedCard","nestedExpand_with_no_marks"]],minItems:1,allowUnsupportedBlock:!0},Ae={props:{type:{type:"enum",values:["tableCell"]},attrs:{props:{colspan:{type:"number",optional:!0},rowspan:{type:"number",optional:!0},colwidth:{type:"array",items:[{type:"number"}],optional:!0},background:{type:"string",optional:!0}},optional:!0},content:"tableCell_content"},required:["content"]},Te={props:{type:{type:"enum",values:["tableHeader"]},attrs:{props:{colspan:{type:"number",optional:!0},rowspan:{type:"number",optional:!0},colwidth:{type:"array",items:[{type:"number"}],optional:!0},background:{type:"string",optional:!0}},optional:!0},content:"tableCell_content"},required:["content"]},ve=["blockCard","paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","mediaGroup","decisionList","rule","panel","blockquote","extension_with_marks","embedCard","table"],ke={props:{type:{type:"enum",values:["expand"]},attrs:{props:{title:{type:"string",optional:!0}}},content:{type:"array",items:["non_nestable_block_content"],minItems:1,allowUnsupportedBlock:!0},marks:{type:"array",items:[],optional:!0}}},we=["expand",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],Ne=["expand",{props:{marks:{type:"array",items:["breakout"],optional:!0}}}],Ie={props:{type:{type:"enum",values:["bodiedExtension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0},content:{type:"array",items:["non_nestable_block_content"],minItems:1,allowUnsupportedBlock:!0}}},Ce=["bodiedExtension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],De=["blockCard","paragraph_with_no_marks","paragraph_with_alignment","paragraph_with_indentation","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","mediaGroup","decisionList","rule","panel","blockquote","extension_with_marks","embedCard","table","expand_with_no_mark","bodiedExtension_with_marks"],Oe={props:{type:{type:"enum",values:["layoutColumn"]},attrs:{props:{width:{type:"number",minimum:0,maximum:100}}},content:{type:"array",items:["block_content"],minItems:1,allowUnsupportedBlock:!0}}},Se={props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"]}}},Re=["layoutSection",{props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"],minItems:2,maxItems:3,allowUnsupportedBlock:!0}}}],Le=["layoutSection",{props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"],minItems:1,maxItems:3,allowUnsupportedBlock:!0}}}],xe={props:{type:{type:"enum",values:["extensionFrame"]},content:{type:"array",items:[["blockCard","paragraph_with_no_marks","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","taskList","bulletList","orderedList","heading_with_no_marks","mediaGroup","decisionList","rule","panel","blockquote","extension_with_marks","embedCard","table","bodiedExtension_with_marks"]],minItems:1}}},Fe={props:{type:{type:"enum",values:["multiBodiedExtension"]},attrs:{props:{maxFrames:{type:"number",default:5,optional:!0},extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0},content:{type:"array",items:["extensionFrame"]}}},Be={props:{version:{type:"enum",values:[1]},type:{type:"enum",values:["doc"]},content:{type:"array",items:[["blockCard","paragraph_with_no_marks","paragraph_with_alignment","paragraph_with_indentation","mediaSingle_caption","mediaSingle_full","codeBlock_with_no_marks","codeBlock_with_marks","taskList","bulletList","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","mediaGroup","decisionList","rule","panel","blockquote","extension_with_marks","embedCard","table","expand_with_no_mark","expand_with_breakout_mark","bodiedExtension_with_marks","layoutSection_full","layoutSection_with_single_column","multiBodiedExtension"]],allowUnsupportedBlock:!0}}},$e=e=>null!=e,Pe=e=>"number"==typeof e&&!isNaN(e)&&isFinite(e),Me=e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,Ue=e=>!0===e||!1===e||"[object Boolean]"===toString.call(e),Ve=e=>"string"==typeof e||e instanceof String,We=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),He=(e,t,n)=>(t[n]=e[n],t),Ge=e=>Array.isArray(e)?e:[e];const Ke={safeUrl:n(478214).w6},Ze=["items"];function Ye(e,t=(e=>e)){if(e.props&&e.props.marks){const n=e.props.marks,{items:r}=n,i=(0,a.Z)(n,Ze);return(0,o.Z)((0,o.Z)({},e),{},{props:(0,o.Z)((0,o.Z)({},e.props),{},{marks:(0,o.Z)((0,o.Z)({},i),{},{items:r.length?Array.isArray(r[0])?r.map(t):[t(r)]:[[]]})})})}return e}const je=(e,t)=>Object.keys(e).reduce(((n,r)=>(n[t(r,e[r],e)?0:1].push(r),n)),[[],[]]);const ze=e=>!!e.props;function qe(e,t){if(!$e(t))return!!e.optional;if(ze(e)){const[n,r]=je(e.props,((e,n)=>qe(n,t[e])));return 0===r.length}if(!$e(e.type))return!!e.optional;switch(e.type){case"boolean":return Ue(t);case"number":return Pe(t)&&(!$e(e.minimum)||e.minimum<=t)&&(!$e(e.maximum)||e.maximum>=t);case"integer":return Me(t)&&(!$e(e.minimum)||e.minimum<=t)&&(!$e(e.maximum)||e.maximum>=t);case"string":const n=e=>"string"==typeof t&&$e(Ke[e])&&Ke[e](t);return Ve(t)&&(!$e(e.minLength)||e.minLength<=t.length)&&(!$e(e.validatorFn)||n(e.validatorFn))&&(!e.pattern||new RegExp(e.pattern).test(t));case"object":return We(t);case"array":if(Array.isArray(t)){const n=!!e.isTupleLike,{minItems:r,maxItems:o}=e;if(void 0!==r&&t.length<r||void 0!==o&&t.length>o)return!1;if(n){const n=Math.min(e.items.length,t.length);return Array(n).fill(null).every(((n,r)=>qe(e.items[r],t[r])))}return t.every((t=>e.items.some((e=>qe(e,t)))))}return!1;case"enum":return Ve(t)&&e.values.indexOf(t)>-1}return!1}const Xe=(e,t)=>`${e}: ${t}.`,Je=e=>{if(e&&e.props&&e.props.content){const{allowUnsupportedBlock:t,allowUnsupportedInline:n}=e.props.content;return{allowUnsupportedBlock:t,allowUnsupportedInline:n}}return{}},Qe=(e,t,n)=>{const r=Xe(e.type,"invalid content");if(t)return t((0,o.Z)({},e),{code:"INVALID_CONTENT",message:r},Je(n));throw new Error(r)},et=(e,t,n,r)=>{const a=r||Xe(t.type,"unsupported mark");if(n)return n((0,o.Z)({},t),{code:e,message:a,meta:t},{allowUnsupportedBlock:!1,allowUnsupportedInline:!1,isMark:!0});throw new Error(a)},tt=(e,t,n,r,o)=>{if(o)return o({type:e.type},{code:t,message:r,meta:n},{allowUnsupportedBlock:!1,allowUnsupportedInline:!1,isMark:!1,isNodeAttribute:!0});throw new Error(r)};function nt(e,t,n){const a=function(e,t){return Object.keys(r).reduce(((n,a)=>{const i=(0,o.Z)({},r[a]);return i.props&&(i.props=(0,o.Z)({},i.props),i.props.content&&(Ve(i.props.content)&&(i.props.content=r[i.props.content]),Array.isArray(i.props.content)?i.props.content={type:"array",items:(i.props.content||[]).map((e=>e.items))}:i.props.content=(0,o.Z)({},i.props.content),i.props.content.items=i.props.content.items.map((e=>Ve(e)?Array.isArray(r[e])?r[e]:[e]:e)).map((n=>n.map((e=>Array.isArray(r[e])?r[e]:Ve(e)?e:["text",e])).filter((t=>{if(e){if(Array.isArray(t)){var n;const r=e.indexOf(t[0])>-1;return r&&null!==(n=t[1])&&void 0!==n&&null!==(n=n.props)&&void 0!==n&&null!==(n=n.content)&&void 0!==n&&n.items?t[1].props.content.items.every((t=>e.indexOf(t)>-1)):r}return e.indexOf(t)>-1}return!0})).map((e=>Array.isArray(e)&&t?[e[0],Ye(e[1])]:e)))))),n[a]=i,n}),{})}(e,t),{mode:i="strict",allowPrivateAttributes:s=!1}=n||{},l=(e,t,n,r,c=!1)=>{const{type:p}=e;let m=(0,o.Z)({},e);const h=(e,n,o)=>{const a=Xe(p,n);if(t)return{valid:!1,entity:t(m,{code:e,message:a,meta:o},Je(r))};throw new Error(a)};if(!p)return h("INVALID_TYPE","ProseMirror Node/Mark should contain a `type`");{const r=function(e,t){if(!t)return{};for(let n=0,r=t.length;n<r;n++){const r=t[n];let o=r,a={};if(Array.isArray(r)&&([o,a]=r),o===e)return a}return!1}(p,n);if(!1===r)return c?{valid:!1}:h("INVALID_TYPE","type not allowed here");const E=a[p];if(!E)return h("INVALID_TYPE",`${p}: No validation spec found for type!`);const y=function(e,t,n,r,a,c,p,m){let h={hasValidated:!1};const E=function(e,t){return(0,o.Z)((0,o.Z)((0,o.Z)({},e),t),e.props?{props:(0,o.Z)((0,o.Z)({},e.props),t.props||{})}:{})}(e,t);if(!E)return h;const y=function(e,t,n){let r={valid:!0,entity:t};e.required&&(e.required.every((e=>$e(t[e])))||(r=n("MISSING_PROPERTIES","required prop missing")));return r}(E,n,r);if(!y.valid)return{hasValidated:!0,result:y};if(!E.props){const e=Object.keys(n);return e.length>1?{hasValidated:!0,result:r("REDUNDANT_PROPERTIES",`redundant props found: ${Object.keys(n).join(", ")}`,{props:e})}:h}const f=function(e,t,n){let r={valid:!0,entity:t};e.props.text&&$e(t.text)&&!qe(e.props.text,t.text)&&(r=n("INVALID_TEXT","'text' validation failed"));return r}(E,n,r);if(!f.valid)return{hasValidated:!0,result:f};const g=function(e,t,n){let r={valid:!0,entity:t};if(e.props.content&&t.content){const{minItems:o,maxItems:a}=e.props.content,i=t.content.length;$e(o)&&o>i?r=n("INVALID_CONTENT_LENGTH",`'content' should have more than ${o} child`,{length:i,requiredLength:o,type:"minimum"}):$e(a)&&a<i&&(r=n("INVALID_CONTENT_LENGTH",`'content' should have less than ${a} child`,{length:i,requiredLength:a,type:"maximum"}))}return r}(E,n,r);if(!g.valid)return{hasValidated:!0,result:g};const[,b]=je(E.props,((e,t)=>{var r;return(Array.isArray(t)?!(null!==(r=E.required)&&void 0!==r&&r.includes(e)):t.optional)||$e(n[e])}));if(b.length)return{hasValidated:!0,result:r("MISSING_PROPERTIES","required prop missing",{props:b})};const _=function(e,t,n,r,o){const a=e.props&&e.props.attrs;if(t.attrs){if(!a){if(r)return function(e,t){const n=Xe("redundant attributes found",Object.keys(t).join(", ")),r={valid:!0,originalMark:e,errorCode:"REDUNDANT_ATTRIBUTES",message:n};return{valid:!1,marksValidationOutput:[r]}}(t,t.attrs);return d(t,n,[],Object.keys(t.attrs),o)}const{hasUnsupportedAttrs:i,redundantAttrs:l,invalidAttrs:u}=function(e,t,n){const r=function(e,t){let n=[],r={};if(e.props&&e.props.attrs){const o=Ge(e.props.attrs);for(let e=0,a=o.length;e<a;++e){const a=o[e];if(a&&a.props&&([,n]=je(a.props,((e,n)=>qe(n,t.attrs[e])))),r=a,!n.length)break}}return{invalidAttrs:n,validatorAttrs:r}}(e,t),{invalidAttrs:o}=r,a=r.validatorAttrs,i=Object.keys(n).filter((e=>!(s&&e.startsWith("__")))).filter((e=>!a.props[e])),l=i.length>0,u=o.length||l;return{hasUnsupportedAttrs:u,invalidAttrs:o,redundantAttrs:i}}(e,t,t.attrs);if(i)return r?function(e,t,n){let r="INVALID_ATTRIBUTES",o=Xe(e.type,"'attrs' validation failed");const a=n.length,i=a&&t.length;!i&&a&&(r="REDUNDANT_ATTRIBUTES",o=Xe("redundant attributes found",n.join(", ")));const s={valid:!0,originalMark:e,errorCode:r,message:o};return{valid:!1,marksValidationOutput:[s]}}(t,u,l):d(t,n,u,l,o)}return{valid:!0,entity:t}}(E,n,a,m,p);if(!_.valid)return{hasValidated:!0,result:_};if(m&&_.valid)return{hasValidated:!0,result:_};const A=function(e,t,n,r,o){let a={valid:!0,entity:t};const[s,l]=je(t,(t=>$e(e.props[t])));if(l.length)if("loose"===i)r={type:o},s.reduce(((e,n)=>He(t,e,n)),r);else if(!(l.indexOf("marks")>-1||l.indexOf("attrs")>-1)||1!==l.length)return n("REDUNDANT_PROPERTIES",`redundant props found: ${l.join(", ")}`,{props:l});return a}(E,n,r,a,c);if(!A.valid)return{hasValidated:!0,result:A};if(E.props.content){const e=E.props.content;if(n.content){const t=(t,n)=>{if(void 0===t)return t;const r=(e,t,n,r,o=!1)=>{let a=!0;if(e&&e.marks&&t){const i=t.filter((e=>e.valid)),s=t.map((e=>e.valid?e.newMark:i.length||r||o||"INVALID_TYPE"===e.errorCode||"INVALID_CONTENT"===e.errorCode||"REDUNDANT_ATTRIBUTES"===e.errorCode||"INVALID_ATTRIBUTES"===e.errorCode?et(e.errorCode,e.originalMark,n,e.message):void 0)).filter(Boolean);s.length?e.marks=s:(delete e.marks,a=!1)}return{valid:a,entity:e}};if(!!e.isTupleLike){const{entity:o,marksValidationOutput:a}=l(t,p,Ge(e.items[n]||e.items[e.items.length-1]),E),{entity:i}=r(o,a,p,!1,!0);return i}const o=e.items.filter((e=>!Array.isArray(e)||e.some((e=>(Array.isArray(e)?e[0]:e)===t.type))));if(o.length){if(o.length>1)throw new Error("Consider using Tuple instead!");const e=Ge(o[0]).filter((e=>(Array.isArray(e)?e[0]:e)===t.type));if(0===e.length)return Qe(t,p,E);let n,i;for(let o=0,s=e.length;o<s;o++)try{const n=[e[o]],{valid:a,entity:s,marksValidationOutput:u}=l(t,p,n,E);if(a){const t=o===e.length-1,{valid:n,entity:a}=r(s,u,p,t),l=a&&a.marks&&a.marks.filter((e=>"unsupportedMark"===e.type))||[];if(n&&!l.length)return a;i=i||s}else i=i||s}catch(a){n=n||a}if(p)return i;throw n}return Qe(t,p,E)};a.content=n.content.map(t).filter(Boolean)}else if(!e.optional)return{hasValidated:!0,result:r("MISSING_PROPERTIES","missing `content` prop")}}if(n.marks)return{hasValidated:!0,result:u(E,n,p,a,r)};return h}(E,r,e,h,m,p,t,c);if(y.hasValidated&&y.result)return y.result}return{valid:!0,entity:m}};return(e,t,n,r)=>{const o=l(e,t,n,r);return{entity:o.entity,valid:o.valid}};function u(e,n,r,o,a){let s;if(e.props&&e.props.marks){const a=function(e){const{items:t}=e.props.marks,n=t.length?Array.isArray(t[0])?t[0]:t:[];return n}(e),u=function(e,n,r,o){return e.marks?e.marks.map((e=>{const a=!t||t.indexOf(e.type)>-1;if("strict"===i&&a){const t=l(e,n,r,o,!0),a=t.entity;return a?{valid:!0,originalMark:e,newMark:a}:t.marksValidationOutput&&t.marksValidationOutput.length?{valid:!1,originalMark:e,errorCode:t.marksValidationOutput[0].errorCode,message:t.marksValidationOutput[0].message}:{valid:!1,originalMark:e,errorCode:"INVALID_TYPE"}}return{valid:!1,originalMark:e,errorCode:"INVALID_CONTENT"}})):[]}(n,r,a,e);s={valid:!0,entity:o,marksValidationOutput:u}}else s=function(e,t,n,r){const o="REDUNDANT_MARKS",a=e.marks||[],i=a.map((e=>"unsupportedNodeAttribute"===e.type?e:et(o,e,n)));return i.length?(t.marks=i,{valid:!0,entity:t}):r("REDUNDANT_MARKS","redundant marks",{marks:Object.keys(a)})}(n,o,r,a);return s}function d(e,t,n,r,a){const i=n.concat(r);let s={valid:!0,entity:e};const l=Xe(e.type,"'attrs' validation failed");return t.marks=function(e,t,n,r,a,i){let s={};for(let o in n)s[n[o]]=e.attrs&&e.attrs[n[o]],t.attrs&&delete t.attrs[n[o]];const l=tt(e,r,s,a,i),u=(0,o.Z)({},t);if(u.marks){if(!l)return u.marks;const e=u.marks.find((e=>e.type===l.type));return e?e.attrs=l.attrs:u.marks.push(l),u.marks}return[l]}(e,t,i,"UNSUPPORTED_ATTRIBUTES",l,a),s={valid:!0,entity:t},s}}},431676:(e,t,n)=>{"use strict";n.d(t,{ID:()=>i,Jq:()=>a,VJ:()=>l,Wt:()=>s,Ze:()=>r,nI:()=>u,om:()=>o});let r=function(e){return e.OPERATIONAL="operational",e.SCREEN="screen",e.TRACK="track",e.UI="ui",e}({}),o=function(e){return e.ACTIVATED="activated",e.ADDED="added",e.BROWSER_FREEZE="browserFreeze",e.CHANGED_BACKGROUND_COLOR="changedBackgroundColor",e.CHANGED_ICON="changedIcon",e.CHANGED_FULL_WIDTH_MODE="changedFullWidthMode",e.CHANGED_LAYOUT="changedLayout",e.CHANGED_REPLACEMENT_TEXT="changedReplacementText",e.CHANGED_TYPE="changedType",e.CHANGED_URL="changedUrl",e.CLEARED="cleared",e.CLICKED="clicked",e.CLOSED="closed",e.COMMITTED="committed",e.CONNECTED_NODES="connectedNodes",e.CONVERTED="converted",e.COPIED="copied",e.CUT="cut",e.DEACTIVATED="deactivated",e.DECREMENTED="decremented",e.DELETED="deleted",e.DISCARDED_INVALID_STEPS_FROM_TRANSACTION="discardedInvalidStepsFromTransaction",e.DISCONNECTED_SOURCE="disconnectedSource",e.DISCONNECTED_TARGET="disconnectedTarget",e.DISMISSED="dismissed",e.DISPATCHED_INVALID_TRANSACTION="dispatchedInvalidTransaction",e.DISPATCHED_VALID_TRANSACTION="dispatchedValidTransaction",e.EDITED="edited",e.EDITOR_CRASHED="unhandledErrorCaught",e.EDITOR_CRASHED_ADDITIONAL_INFORMATION="unhandledErrorCaughtAdditionalInfov2",e.EDITOR_MOUNTED="mounted",e.EDITOR_TTI="tti",e.EDITOR_CONTENT_RETRIEVAL_PERFORMED="contentRetrievalPerformed",e.RE_RENDERED="reRendered",e.ENTERED="entered",e.ERRORED="errored",e.EXPOSED="exposed",e.FAILED_TO_UNMOUNT="failedToUnmount",e.FIND_NEXT_PERFORMED="findNextPerformed",e.FIND_PERFORMED="findPerformed",e.FIND_PREV_PERFORMED="findPrevPerformed",e.FORMATTED="formatted",e.HELP_OPENED="helpOpened",e.HIGHLIGHTED="highlighted",e.INCREMENTED="incremented",e.INDENTED="indented",e.INITIALISED="initialised",e.INITIALISED_FRAGMENT_MARK="initialisedFragmentMark",e.INPUT_PERF_SAMPLING="inputPerfSampling",e.INPUT_PERF_SAMPLING_AVG="inputPerfSamplingAvg",e.INPUT_PERF_SAMPLING_SINGLE_KEYPRESS="inputPerfSamplingSingleKeypress",e.INPUT_PERF_SAMPLING_SINGLE_KEYPRESS_AVG="inputPerfSamplingSingleKeypressAvg",e.INPUT_PERF_SAMPLING_RENDERED="inputPerfSamplingRendered",e.INPUT_PERF_SAMPLING_RENDERED_AVG="inputPerfSamplingRenderedAvg",e.INSERTED="inserted",e.INVALID_DOCUMENT_ENCOUNTERED="invalidDocumentEncountered",e.INVOKED="invoked",e.GOT_CONNECTIONS="gotConnections",e.LANGUAGE_SELECTED="languageSelected",e.LIST_ITEM_JOINED="listItemJoined",e.MATCHED="matched",e.MEDIA_LINK_TRANSFORMED="mediaLinkTransformed",e.NODE_CONTENT_SANITIZED="nodeContentSanitized",e.OPENED="opened",e.OUTDENTED="outdented",e.PASTED="pasted",e.PASTED_AS_PLAIN="pastedAsPlain",e.PASTED_TIMED="pastedTimed",e.PROSEMIRROR_RENDERED="proseMirrorRendered",e.REACT_NODEVIEW_RENDERED="reactNodeViewRendered",e.REPLACED_ALL="replacedAll",e.REPLACED_ONE="replacedOne",e.RESOLVED="resolved",e.SELECTED="selected",e.SHOWN="shown",e.SLOW_INPUT="slowInput",e.STARTED="started",e.STOPPED="stopped",e.SUBSTITUTED="autoSubstituted",e.SYNCHRONY_DISCONNECTED="synchronyDisconnected",e.SYNCHRONY_ENTITY_ERROR="synchronyEntityError",e.SYNCHRONY_ERROR="synchronyError",e.TEXT_LINK_MARK_TRANSFORMED="textLinkMarkTransformed",e.DEDUPE_MARKS_TRANSFORMED_V2="dedupeMarksTransformedV2",e.NODES_MISSING_CONTENT_TRANSFORMED="nodesMissingContentTransformed",e.INDENTATION_MARKS_TRANSFORMED="indentationMarksTransformed",e.INVALID_MEDIA_CONTENT_TRANSFORMED="invalidMediaContentTransformed",e.TOGGLE_EXPAND="toggleExpand",e.TRANSACTION_DISPATCHED="transactionDispatched",e.TRANSACTION_MUTATED_AFTER_DISPATCH="transactionMutatedAfterDispatched",e.TYPING_FINISHED="typingFinished",e.TYPING_STARTED="typingStarted",e.UNLINK="unlinked",e.UNSUPPORTED_CONTENT_ENCOUNTERED="unsupportedContentEncounteredV2",e.UPDATED="updated",e.UPDATED_FRAGMENT_MARK_NAME="updatedFragmentMarkName",e.UPDATED_SOURCE="updatedSource",e.UPDATED_TARGET="updatedTarget",e.UPLOAD_EXTERNAL_FAIL="uploadExternalFailed",e.VIEWED="viewed",e.VISITED="visited",e.WITH_PLUGIN_STATE_CALLED="withPluginStateCalled",e.RENDERED="rendered",e.ON_EDITOR_READY_CALLBACK="onEditorReadyCallback",e.ON_CHANGE_CALLBACK="onChangeCalled",e.NEW_COLLAB_SYNC_UP_ERROR_NO_STEPS="newCollabSyncUpErrorNoSteps",e.REMOVE_ICON="removedIcon",e.UFO_SESSION_COMPLETE="ufoSessionComplete",e.INVALID_PROSEMIRROR_DOCUMENT="invalidProsemirrorDocument",e.DOCUMENT_PROCESSING_ERROR="documentProcessingErrorV2",e.RENDERER_TTI="tti",e.CRASHED="unhandledErrorCaughtV2",e.SELECT_ALL_CAUGHT="selectAllCaught",e.SELECT_ALL_ESCAPED="selectAllEscaped",e.SORT_COLUMN="sortedColumn",e.SORT_COLUMN_NOT_ALLOWED="sortColumnNotAllowed",e.CREATE_NOT_ALLOWED="createNotAllowed",e.UNSUPPORTED_CONTENT_LEVELS_TRACKING_SUCCEEDED="unsupportedContentLevelsTrackingSucceeded",e.UNSUPPORTED_CONTENT_LEVELS_TRACKING_ERRORED="unsupportedContentLevelsTrackingErrored",e.UNSUPPORTED_TOOLTIP_VIEWED="viewed",e.RECORD_VIDEO="recordVideo",e.INSERT_VIDEO="insertVideo",e.RECORD_VIDEO_FAILED="recordVideoFailed",e.ADD_CHILD="addChild",e.CHANGE_ACTIVE="changeActive",e.REMOVE_CHILD="removeChild",e.UPDATE_PARAMETERS="updateParameters",e.GET_CHILDERN="getChildern",e}({}),a=function(e){return e.ASCII="ascii",e.AUTO="auto",e.AUTO_DETECT="autoDetect",e.BUTTON="button",e.BLUR="blur",e.CARD="card",e.CLIPBOARD="clipboard",e.CONFIG_PANEL="configPanel",e.CONTEXT_MENU="contextMenu",e.DRAG_AND_DROP="dragAndDrop",e.EXTERNAL="external",e.EXTENSION_API="extensionApi",e.FLOATING_TB="floatingToolbar",e.FORMATTING="autoformatting",e.INSERT_MENU="insertMenu",e.KEYBOARD="keyboard",e.MACRO_BROWSER="macroBrowser",e.MANUAL="manual",e.PICKER="picker",e.PICKER_CLOUD="cloudPicker",e.PREFILL="prefill",e.QUICK_INSERT="quickInsert",e.SHORTCUT="shortcut",e.TOOLBAR="toolbar",e.TYPEAHEAD="typeAhead",e.DATASOURCE="datasource_config",e.TABLE_CONTEXT_MENU="tableContextMenu",e}({}),i=function(e){return e.BUTTON="button",e.KEYBOARD="keyboard",e.SHORTCUT="shortcut",e.TOOLBAR="toolbar",e}({}),s=function(e){return e.TOOLBAR_BUTTON="toolbarButton",e.BUTTON="button",e.CONFIG_PANEL="configPanel",e.CONTENT_COMPONENT="contentComponent",e.DATE="date",e.DATE_SEGMENT="dateSegment",e.DOCUMENT="document",e.EDITOR="editor",e.ELEMENT_BROWSER="elementBrowser",e.EMBEDS="embeds",e.EXPAND="expand",e.EXTENSION="extension",e.FEATURE="feature",e.FEEDBACK_DIALOG="feedbackDialog",e.FIND_REPLACE_DIALOG="findReplaceDialog",e.FLOATING_CONTEXTUAL_BUTTON="floatingContextualButton",e.FLOATING_TOOLBAR_PLUGIN="floatingToolbarPlugin",e.HELP="help",e.LAYOUT="layout",e.LIST="list",e.MEDIA="media",e.MEDIA_SINGLE="mediaSingle",e.NESTED_EXPAND="nestedExpand",e.PANEL="panel",e.PICKER="picker",e.PLUS_MENU="plusMenu",e.PLUGIN_SLOT="pluginSlot",e.REACT_NODE_VIEW="reactNodeView",e.SELECTION="selection",e.SMART_LINK="smartLink",e.HYPERLINK="hyperlink",e.TABLE="table",e.TABLES_PLUGIN="tablesPlugin",e.TEXT="text",e.TOOLBAR="toolbar",e.TYPEAHEAD="typeAhead",e.TYPEAHEAD_ITEM="typeAheadItem",e.ANNOTATION="annotation",e.SEARCH_RESULT="searchResult",e.CREATE_LINK_INLINE_DIALOG="createLinkInlineDialog",e.CODE_BLOCK="codeBlock",e.REACT_EDITOR_VIEW="reactEditorView",e.RENDERER="renderer",e.ANCHOR_LINK="anchorLink",e.LINK="link",e.TOOLTIP="tooltip",e.LOOM="loom",e.MULTI_BODIED_EXTENSION="multiBodiedExtension",e}({}),l=function(e){return e.ACTION="action",e.ALL="all",e.ALT_TEXT="altText",e.ANNOTATE_BUTTON="annotateButton",e.AVATAR_GROUP_PLUGIN="AvatarGroupInPlugin",e.BLOCK_QUOTE="blockQuote",e.BORDER="border",e.BUTTON_CATEGORY="categoryButton",e.BUTTON_FEEDBACK="feedbackButton",e.BUTTON_HELP="helpButton",e.CANCEL="cancel",e.CAPTION="caption",e.CARD_BLOCK="blockCard",e.CARD_INLINE="inlineCard",e.CELL="cell",e.CODE_BLOCK="codeBlock",e.CODEBLOCK_COPY="codeBlockCopy",e.CODEBLOCK_WRAP="codeBlockWrap",e.CREATE_INLINE_COMMENT_FROM_HIGHLIGHT_ACTIONS_MENU="createInlineCommentFromHighlightActionsMenu",e.DATE="date",e.DATE_DAY="day",e.DATE_MONTH="month",e.DATE_YEAR="year",e.DECISION="decision",e.DIVIDER="divider",e.EDIT_LINK="editLink",e.EMBEDS="embeds",e.EMOJI="emoji",e.EXPAND="expand",e.EXTENSION="extension",e.EXTENSION_API="extensionApi",e.EXTENSION_BLOCK="extension",e.EXTENSION_BODIED="bodiedExtension",e.EXTENSION_INLINE="inlineExtension",e.FORMAT_BLOCK_QUOTE="blockQuote",e.FORMAT_CLEAR="clearFormatting",e.FORMAT_CODE="code",e.FORMAT_COLOR="color",e.FORMAT_HEADING="heading",e.FORMAT_INDENT="indentation",e.FORMAT_ITALIC="italic",e.FORMAT_LIST_BULLET="bulletedList",e.FORMAT_LIST_NUMBER="numberedList",e.FORMAT_STRIKE="strike",e.FORMAT_STRONG="strong",e.FORMAT_SUB="subscript",e.FORMAT_SUPER="superscript",e.FORMAT_UNDERLINE="underline",e.FRAGMENT_MARK="fragmentMark",e.GOTO_SMART_LINK_SETTINGS="goToSmartLinkSettings",e.HELP_QUICK_INSERT="helpQuickInsert",e.HYPERLINK="hyperlink",e.INLINE_COMMENT="inlineComment",e.LAYOUT="layout",e.LINE_BREAK="lineBreak",e.LINK="link",e.LINK_PREVIEW="linkPreview",e.LINK_SEARCH_INPUT="linkSearchInput",e.MEDIA="media",e.MEDIA_GROUP="mediaGroup",e.MEDIA_INLINE="mediaInline",e.MEDIA_LINK="mediaLink",e.MEDIA_SINGLE="mediaSingle",e.MENTION="mention",e.NESTED_EXPAND="nestedExpand",e.NODE="node",e.OPEN_LINK="openLink",e.PANEL="panel",e.PASTE_BLOCK_CARD="blockCard",e.PASTE_BLOCKQUOTE="blockQuote",e.PASTE_BODIED_EXTENSION="bodiedExtension",e.PASTE_BULLET_LIST="bulletList",e.PASTE_CODE_BLOCK="codeBlock",e.PASTE_DECISION_LIST="decisionList",e.PASTE_EXPAND="expand",e.PASTE_EXTENSION="extension",e.PASTE_HEADING="heading",e.PASTE_MEDIA_GROUP="mediaGroup",e.PASTE_MEDIA_SINGLE="mediaSingle",e.PASTE_NESTED_EXPAND="nestedExpand",e.PASTE_ORDERED_LIST="orderedList",e.PASTE_PANEL="panel",e.PASTE_PARAGRAPH="paragraph",e.PASTE_RULE="rule",e.PASTE_TABLE="table",e.PASTE_TABLE_CELL="tableCell",e.PASTE_TABLE_HEADER="tableHeader",e.PASTE_TABLE_ROW="tableRow",e.PASTE_TASK_LIST="taskList",e.PICKER_CLOUD="cloudPicker",e.PICKER_COLOR="colorPicker",e.PICKER_EMOJI="emojiPicker",e.PLACEHOLDER_TEXT="placeholderText",e.POST_QUERY_SEARCH_RESULTS="postQuerySearchResults",e.PRE_QUERY_SEARCH_RESULTS="preQuerySearchResults",e.PRODUCT_NAME="productName",e.PUNC="punctuation",e.QUICK_SEARCH="quickSearch",e.RANGE="range",e.REACT_NODE_VIEW="reactNodeView",e.RECENT_ACTIVITIES="recentActivities",e.RESIZED="resized",e.RICH_MEDIA_LAYOUT="richMediaLayout",e.SAVE="save",e.SECTION="section",e.SMART_LINK="smartLink",e.STATUS="status",e.SYMBOL="symbol",e.TABLE="table",e.TEXT="text",e.TYPEAHEAD_EMOJI="emojiTypeAhead",e.TYPEAHEAD_LINK="linkTypeAhead",e.TYPEAHEAD_MENTION="mentionTypeAhead",e.TYPEAHEAD_QUICK_INSERT="quickInsertTypeAhead",e.UNKNOWN_NODE="unknownNode",e.UNLINK="unlink",e.HEADING_ANCHOR_LINK="headingAnchorLink",e.UNSUPPORTED_ERROR="unsupportedUnhandled",e.UNSUPPORTED_NODE_ATTRIBUTE="unsupportedNodeAttribute",e.UNSUPPORTED_BLOCK="unsupportedBlock",e.UNSUPPORTED_INLINE="unsupportedInline",e.UNSUPPORTED_MARK="unsupportedMark",e.ON_UNSUPPORTED_INLINE="onUnsupportedInline",e.ON_UNSUPPORTED_BLOCK="onUnsupportedBlock",e.MULTI_BODIED_EXTENSION="multiBodiedExtension",e}({}),u=function(e){return e.INLINE_COMMENT="inlineComment",e.FLOATING_CONTEXTUAL_BUTTON="floatingContextualButton",e.FLOATING_INSERT_BUTTON="floatingInsertButton",e.FLOATING_TOOLBAR="floatingToolbar",e}({})},773543:(e,t,n)=>{"use strict";n.d(t,{ZY:()=>d,_3:()=>s,tV:()=>l});var r=n(840506),o=n(772357),a=n.n(o),i=n(429441);async function s(e,t,n){const[r,o]=(0,i.tz)(n,t),a=await e.getExtension(t,r);if(!a)throw new Error(`Extension with key "${r}" and type "${t}" not found!`);if(!a.modules.nodes)throw new Error(`Couldn't find any node for extension type "${t}" and key "${n}"!`);const s=a.modules.nodes[o];if(!s)throw new Error(`Node with key "${n}" not found on manifest for extension type "${t}" and key "${n}"!`);return s}async function l(e,t,n){const r=await s(e,t,n);return Object.keys(r).filter((e=>e.startsWith("__"))).reduce(((e,t)=>(e[t]=r[t],e)),{})}function u(e){return e.error||e.timedOut?(console.error("Error rendering extension",e.error),r.createElement("div",null,"Error loading the extension!")):null}function d(e,t,n){return a()({__loadable_id__:"tyO1i",name:"getNodeRenderer",_forceServerPlaceholderId:`ssr-extension-handler-placeholder-${n}`,loader:()=>s(e,t,n).then((e=>(0,i.B8)(e.render()))),loading:u})}},429441:(e,t,n)=>{"use strict";n.d(t,{B8:()=>s,cM:()=>i,tz:()=>o});var r=n(615919);const o=(e,t)=>{if("com.atlassian.ecosystem"===t)return[e,"default"];const[n,r="default"]=e.split(":");return[n,r]},a=(e,t)=>t&&"default"!==t?`${e}:${t}`:e;function i(e,t){return"function"==typeof e?e:"node"===e.type&&t.modules.nodes?function(e,t){if(!t.modules.nodes)return;const n=t.modules.nodes[e.key],o=a(t.key,e.key),i={type:n.type,attrs:{extensionType:t.type,extensionKey:o,parameters:e.parameters}};if("bodiedExtension"===n.type)return(0,r.Z)((0,r.Z)({},i),{},{content:[{type:"paragraph",content:[]}]});if("multiBodiedExtension"===n.type)return(0,r.Z)((0,r.Z)({},i),{},{content:[{type:"extensionFrame",content:[{type:"paragraph",content:[]}]}]});return i}(e,t):void 0}const s=async e=>{const t=await e;return t&&t.__esModule?t.default:t}},897983:(e,t,n)=>{"use strict";n.d(t,{BV:()=>s,jw:()=>l,rS:()=>a,vz:()=>o,wb:()=>i});var r=n(233006);const o=250,a=200,i=o/a,s=0,l={p:r.$G.h600.lineHeight-2,h1:r.$G.h800.lineHeight+4,h2:r.$G.h700.lineHeight+3,h3:r.$G.h600.lineHeight+1,h4:r.$G.h500.lineHeight+3,h5:r.$G.h400.lineHeight+4,h6:r.$G.h300.lineHeight+2}},212944:(e,t,n)=>{"use strict";n.d(t,{$u:()=>h,AH:()=>s,G0:()=>m,K4:()=>l,Lv:()=>c,RN:()=>i,Rr:()=>u,wz:()=>p});var r=n(39030),o=n(16728),a=n(897983);const i="media-inline-image-wrapper",s="--editor-media-inline-image-aspect-ratio",l="--editor-media-inline-image-border-size",u="--editor-media-inline-image-border-color",d=(e,t=0)=>r.iv`
  /* Editor style */
  > .mediaInlineView-content-wrap > .${i},
  > :is(a, span[data-mark-type='border']) .mediaInlineView-content-wrap > .${i},
  /* Renderer style */
  > .${i},
  > :is(a, span[data-mark-type='border']) .${i} {
    height: ${e}px;
    transform: translateY(${t}px);
  }
`,c=r.iv`
  // p, h3, and action items
  .${i} {
    height: ${a.jw.p}px;
    transform: translateY(-2px);
  }

  h1 {
    ${d(a.jw.h1,-3)}
  }

  h2 {
    ${d(a.jw.h2,-3)}
  }

  h3 {
    ${d(a.jw.h3,-2)}
  }

  h4 {
    ${d(a.jw.h4,-2)}
  }

  h5 {
    ${d(a.jw.h5,-2)}
  }

  h6 {
    ${d(a.jw.h6,-2)}
  }
`,p=(0,r.iv)({display:"inline-flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle",overflow:"hidden",borderRadius:"var(--ds-border-radius, 3px)",aspectRatio:`var(${s}, ${a.wb})`,maxWidth:"100%"}),m=(0,r.iv)({cursor:"pointer",boxShadow:`0 0 0 1px var(--ds-border-selected, ${o.M5})`,outline:"none"}),h=(0,r.iv)({borderColor:`var(${u})`,borderStyle:"solid",borderRadius:`calc(var(${l}, ${a.BV}) * 2px)`,borderWidth:`calc(var(${l}, ${a.BV}) * 1px)`,boxSizing:"border-box"})},863077:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});const r=(0,n(93972).defineMessages)({label:{id:"fabric.editor.codeBidiWarningLabel",defaultMessage:"Bidirectional characters change the order that text is rendered. This could be used to obscure malicious code."}})},578253:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(93972).defineMessages)({layoutFixedWidth:{id:"fabric.editor.layoutFixedWidth",defaultMessage:"Back to center"},layoutWide:{id:"fabric.editor.layoutWide",defaultMessage:"Go wide"},layoutFullWidth:{id:"fabric.editor.layoutFullWidth",defaultMessage:"Go full width"},alignImageRight:{id:"fabric.editor.alignImageRight",defaultMessage:"Align right"},alignImageCenter:{id:"fabric.editor.alignImageCenter",defaultMessage:"Align center"},alignImageLeft:{id:"fabric.editor.alignImageLeft",defaultMessage:"Align left"},remove:{id:"fabric.editor.remove",defaultMessage:"Remove"},removeEmoji:{id:"fabric.editor.removeEmoji",defaultMessage:"Remove emoji"},visit:{id:"fabric.editor.visit",defaultMessage:"Open link in a new window"},inviteToEditButtonTitle:{id:"fabric.editor.editMode.inviteToEditButton.title",defaultMessage:"Invite to edit"},saveButton:{id:"fabric.editor.saveButton",defaultMessage:"Save"},cancelButton:{id:"fabric.editor.cancelButton",defaultMessage:"Cancel"},taskList:{id:"fabric.editor.tooltip.taskList",defaultMessage:"an action item"},bulletList:{id:"fabric.editor.tooltip.bulletList",defaultMessage:"a list"},nestedExpand:{id:"fabric.editor.tooltip.nestedExpand",defaultMessage:"a nested expand"},decisionList:{id:"fabric.editor.tooltip.decisionList",defaultMessage:"a decision list"},defaultBlockNode:{id:"fabric.editor.tooltip.defaultBlockNode",defaultMessage:"a block node"},panel:{id:"fabric.editor.tooltip.blockPanel",defaultMessage:"a panel"},blockquote:{id:"fabric.editor.blockquote",defaultMessage:"a quote"},timeUpdated:{id:"fabric.editor.time.updated",defaultMessage:"Updated"},timeViewed:{id:"fabric.editor.time.viewed",defaultMessage:"Viewed"},timeAgo:{id:"fabric.editor.time.ago",defaultMessage:"ago"},copyToClipboard:{id:"fabric.editor.copyToClipboard",defaultMessage:"Copy"},copiedToClipboard:{id:"fabric.editor.copiedToClipboard",defaultMessage:"Copied!"}})},598613:(e,t,n)=>{"use strict";n.d(t,{x:()=>r});const r=(0,n(93972).defineMessages)({unsupportedInlineContent:{id:"fabric.editor.unsupportedInlineContent",defaultMessage:"Unsupported content"},unsupportedBlockContent:{id:"fabric.editor.unsupportedBlockContent",defaultMessage:"This editor does not support displaying this content"},unsupportedContentTooltip:{id:"fabric.editor.unsupportedContentTooltip",defaultMessage:"Content is not available in this editor, this will be preserved when you edit and save"}})},813719:(e,t,n)=>{"use strict";n.d(t,{O:()=>a});var r=n(615919);const o=(e,t)=>(e.request&&delete e.request.url,e),a=async(e,t)=>{try{var a;0;const{BrowserClient:i,defaultIntegrations:s,getCurrentHub:l}=await Promise.all([n.e(27508),n.e(68196),n.e(61761)]).then(n.bind(n,944910)),{ExtraErrorData:u}=await Promise.all([n.e(27508),n.e(76211)]).then(n.bind(n,165350)),d=new i({dsn:"https://0b10c8e02fb44d8796c047b102c9bee8@o55978.ingest.sentry.io/4505129224110080",release:"editor-common@0.0.0-use.local",environment:null!==(a="production")?a:"unknown",ignoreErrors:[/^network error/i,/^network failure/i,"TypeError: Failed to fetch","ResizeObserver loop limit exceeded",/ResizeObserver loop completed with undelivered notifications/],autoSessionTracking:!1,integrations:e=>[...s.filter((({name:e})=>"Breadcrumbs"!==e)),new u],beforeSend:o}),c=l();return c.bindClient(d),c.withScope((n=>{var o;n.setTags((0,r.Z)({"jira-bundler":window.BUNDLER_VERSION,"jira-variant":window.BUILD_VARIANT,"jira-release":window.BUILD_KEY,"confluence-frontend-version":null===(o=window.__buildInfo)||void 0===o?void 0:o.FRONTEND_VERSION},t)),n.clearBreadcrumbs(),c.captureException(e)})),d.close()}catch(i){}}},956011:(e,t,n)=>{"use strict";n.d(t,{Sn:()=>m,cz:()=>u,x:()=>d});var r=n(986487),o=n(158568),a=n(2142),i=n(114657),s=n(213483),l=n(170080);const u={default:o.re,wide:o.uz,"full-width":o.zJ},d=(e,t,n,l)=>{if(!e)return;const u=c(e,t);if(!u)return;let d=u.attrs.layout||"default";const{schema:m}=t,h=m.marks.breakout&&m.marks.breakout.isInSet(u.marks);h&&h.attrs.mode&&(d=h.attrs.mode);let E=p(d,n,l);const y=e=>e.contextPanelPluginKey$;var f,g;if(u.type===m.nodes.layoutSection&&(E+=2*o.qh,n.width>o.Kv||(null===(f=y(t))||void 0===f?void 0:f.contents.length)>0&&void 0!==(null===(g=y(t))||void 0===g?void 0:g.contents[0]))){E-=(s.U+2)*(u.childCount-1);const n=t.doc.resolve(e),o=(0,r.NP)(n,[t.schema.nodes.layoutColumn]);o&&o.node&&!isNaN(o.node.attrs.width)&&(E=Math.round(E*o.node.attrs.width*.01))}switch(u.type){case m.nodes.layoutSection:E-=2*s.r;break;case m.nodes.bodiedExtension:E-=2*i.W;break;case m.nodes.expand:E-=2*(0,a.ww)(),E+=1.5*(0,a.ww)()*2,E-=(0,a.ww)(),E-=4*(0,a.ww)()-(0,a.ww)()/2}return E-=2,E},c=(e,t)=>{if(void 0===e)return null;const n=t.doc.resolve(e),o=(0,r.NP)(n,[t.schema.nodes.bodiedExtension,t.schema.nodes.layoutSection,t.schema.nodes.expand]);return o?o.node:null},p=(e,t,n)=>n?Math.min(t.lineLength,o.zJ):(0,l.A9)(e,t.width),m=e=>e.attrs.width?e.attrs.width:u[e.attrs.layout]},342256:(e,t,n)=>{"use strict";n.d(t,{I:()=>u,W:()=>d});var r=n(755287),o=n.n(r),a=n(58761),i=n.n(a);const s={};function l(e,t,n){return Boolean("string"==typeof t&&(null==n?void 0:n.includes(e)))}function u(e,t){return e?Object.entries(e).filter((e=>"boolean"==typeof e[1]||!(!l(o()(e[0]),e[1],null==t?void 0:t.objectFlagKeys)||!function(e){try{let t=JSON.parse(e);return"object"==typeof t&&null!==t}catch(t){return!1}}(e[1])))).filter((([e])=>i()(e)===e)).map((([e,t])=>[o()(e),t])).reduce(((e,[n,r])=>(l(n,r,null==t?void 0:t.objectFlagKeys)&&(e[n]=JSON.parse(r)),"boolean"==typeof r&&(e[n]=r),e)),{}):s}function d(e){return Object.keys(e).filter((t=>!0===e[t]))}},568846:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(199009);class o{constructor(){(0,r.Z)(this,"providers",new Map),(0,r.Z)(this,"subscribers",new Map)}static create(e){const t=new o;return Object.keys(e).forEach((n=>{t.setProvider(n,e[n])})),t}destroy(){this.providers.clear(),this.subscribers.clear()}isEmpty(){return!this.providers.size&&!this.subscribers.size}setProvider(e,t){this.providers.get(e)!==t&&(void 0!==t?this.providers.set(e,t):this.providers.delete(e),this.notifyUpdated(e,t))}removeProvider(e){this.providers.delete(e),this.notifyUpdated(e)}subscribe(e,t){const n=this.subscribers.get(e)||[];n.push(t),this.subscribers.set(e,n);const r=this.providers.get(e);r&&t(e,r)}unsubscribe(e,t){const n=this.subscribers.get(e);if(!n)return;const r=n.indexOf(t);-1!==r&&n.splice(r,1),0===n.length?this.subscribers.delete(e):this.subscribers.set(e,n)}unsubscribeAll(e){this.subscribers.get(e)&&this.subscribers.delete(e)}hasProvider(e){return this.providers.has(e)}notifyUpdated(e,t){const n=this.subscribers.get(e);n&&n.forEach((n=>{n(e,t)}))}}},423196:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});var r=n(615919),o=n(199009),a=n(840506);class i extends a.PureComponent{constructor(e){super(e),(0,o.Z)(this,"handleProvider",((e,t)=>{this.setState((({providers:n})=>({providers:(0,r.Z)((0,r.Z)({},n),{},{[e]:t})})))}));const t={};this.props.providers.forEach((e=>{t[e]=void 0})),this.state={providers:t}}UNSAFE_componentWillMount(){const{providers:e,providerFactory:t}=this.props;e.forEach((e=>{t.subscribe(e,this.handleProvider)}))}componentWillUnmount(){const{providers:e,providerFactory:t}=this.props;e.forEach((e=>{t.unsubscribe(e,this.handleProvider)}))}render(){const{state:e,props:t}=this,{renderNode:n}=t;return n(e.providers)}}i.displayName="WithProviders",(0,o.Z)(i,"displayName","WithProviders")},416159:(e,t,n)=>{"use strict";n.d(t,{Lj:()=>s,_L:()=>l,qH:()=>i});var r=n(39030),o=n(16728);const a="ak-editor-annotation",i={focus:`${a}-focus`,blur:`${a}-blur`,draft:`${a}-draft`},s=()=>({focus:r.iv`
    // Background is not coming through in confluence, suspecting to be caused by some specific combination of
    // emotion and token look up

    background: ${`var(--ds-background-accent-yellow-subtler, ${o.a8})`};
    border-bottom: 2px solid ${`var(--ds-border-accent-yellow, ${o.Z3})`};
    // TODO: https://product-fabric.atlassian.net/browse/DSP-4147
    box-shadow: ${`var(--ds-shadow-overlay, 1px 2px 3px ${o.VG}, -1px 2px 3px ${o.VG})`};
    cursor: pointer;
  `,blur:r.iv`
    background: ${"var(--ds-background-accent-yellow-subtlest, rgba(255, 240, 179, 0.5))"};
    border-bottom: 2px solid ${"var(--ds-border-accent-yellow, rgba(255, 196, 0, 0.82))"};
    cursor: pointer;
  `}),l=()=>r.iv`
  .ProseMirror {
    .${i.focus} {
      ${s().focus};
    }

    .${i.draft} {
      ${s().focus};
      cursor: initial;
    }

    .${i.blur} {
      ${s().blur};
    }
  }
`},334444:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});const r=n(39030).iv`
  /**
   * We need to remove margin-top from first item
   * inside doc, tableCell, tableHeader, blockquote, etc.
   */
  *:not(.fabric-editor-block-mark) >,
  /* For nested block marks apart from those with indentation mark */
  *:not(.fabric-editor-block-mark) >
    div.fabric-editor-block-mark:first-of-type
    /* Do not remove the margin top for nodes inside indentation marks */
      :not(.fabric-editor-indentation-mark)
    /* Do not remove the margin top for nodes inside alignment marks */
      :not(.fabric-editor-alignment),
  // If first element inside a block node has alignment mark, then remove the margin-top
  .fabric-editor-alignment:first-of-type:first-child,
  // If first document element has indentation mark remove margin-top
  .ProseMirror .fabric-editor-indentation-mark:first-of-type:first-child {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .heading-wrapper {
      :first-child:not(style),
      style:first-child + * {
        margin-top: 0;
      }
    }
  }
`},557048:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var r=n(39030),o=n(158568);const a=r.iv`
  & blockquote {
    box-sizing: border-box;
    padding-left: ${"var(--ds-space-200, 16px)"};
    border-left: 2px solid
      ${`var(--ds-border, ${o.DT})`};
    margin: ${o.zH} 0 0 0;
    margin-right: 0;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: ${"var(--ds-space-200, 16px)"};
    }

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: '';
    }

    &::after {
      content: none;
    }

    & p {
      display: block;
    }

    & table,
    & table:last-child {
      display: inline-table;
    }
  }
`},824470:(e,t,n)=>{"use strict";n.d(t,{AG:()=>d,Hk:()=>u,zq:()=>l});var r=n(39030),o=n(158568),a=n(794256),i=n(16728),s=n(2142);const l={CODEBLOCK_CONTAINER:"code-block",CODEBLOCK_START:"code-block--start",CODEBLOCK_END:"code-block--end",CODEBLOCK_CONTENT_WRAPPER:"code-block-content-wrapper",CODEBLOCK_LINE_NUMBER_GUTTER:"line-number-gutter",CODEBLOCK_CONTENT:"code-content",DS_CODEBLOCK:"[data-ds--code--code-block]"},u=()=>r.iv`
  .${l.CODEBLOCK_CONTAINER} {
    position: relative;
    background-color: ${"var(--ds-surface-raised, transparent)"};
    border-radius: ${"var(--ds-border-radius, 3px)"};
    margin: ${o.zH} 0 0 0;
    font-family: ${o.zd};
    min-width: ${o.cw}px;
    cursor: pointer;

    --ds--code--bg-color: transparent;

    /* This is necessary to allow for arrow key navigation in/out of code blocks in Firefox. */
    white-space: normal;

    .${l.CODEBLOCK_START} {
      position: absolute;
      visibility: hidden;
      height: 1.5rem;
      top: 0px;
      left: 0px;
    }

    .${l.CODEBLOCK_END} {
      position: absolute;
      visibility: hidden;
      height: 1.5rem;
      bottom: 0px;
      right: 0px;
    }

    .${l.CODEBLOCK_CONTENT_WRAPPER} {
      background-color: ${`var(--ds-background-neutral, ${i.IR})`};
      display: flex;
      border-radius: ${"var(--ds-border-radius, 3px)"};
      width: 100%;
      counter-reset: line;
      overflow-x: auto;

      background-image: ${(0,a.u)({background:`var(--ds-background-neutral, ${i.IR})`,leftCoverWidth:"var(--ds-space-300, 24px)"})};

      background-repeat: no-repeat;
      background-attachment: local, local, local, local, scroll, scroll, scroll,
        scroll;
      background-size: ${"var(--ds-space-300, 24px)"} 100%,
        ${"var(--ds-space-300, 24px)"} 100%, ${"var(--ds-space-100, 8px)"} 100%,
        ${"var(--ds-space-100, 8px)"} 100%, ${"var(--ds-space-100, 8px)"} 100%,
        1px 100%, ${"var(--ds-space-100, 8px)"} 100%, 1px 100%;
      background-position: 0 0, 0 0, 100% 0, 100% 0, 100% 0, 100% 0, 0 0, 0 0;

      /* Be careful if refactoring this; it is needed to keep arrow key navigation in Firefox consistent with other browsers. */
      overflow-y: hidden;
    }

    .${l.CODEBLOCK_LINE_NUMBER_GUTTER} {
      flex-shrink: 0;
      text-align: right;
      background-color: ${`var(--ds-background-neutral, ${i.gt})`};
      padding: ${"var(--ds-space-100, 8px)"};
      position: relative;

      span {
        display: block;
        line-height: 0;
        font-size: 0;

        ::before {
          display: inline-block;
          content: counter(line);
          counter-increment: line;
          color: ${`var(--ds-text-subtlest, ${i.zN})`};
          font-size: ${(0,o.Gh)((0,s.JB)())};
          line-height: 1.5rem;
        }
      }
    }

    .${l.CODEBLOCK_CONTENT} {
      display: flex;
      flex: 1;

      code {
        flex-grow: 1;
        tab-size: 4;
        cursor: text;
        color: ${`var(--ds-text, ${i.q2})`};
        border-radius: ${"var(--ds-border-radius, 3px)"};
        margin: ${"var(--ds-space-100, 8px)"};
        white-space: pre;
        font-size: ${(0,o.Gh)((0,s.JB)())};
        line-height: 1.5rem;
      }
    }
  }
`,d=r.iv`
  ::before {
    content: ' ';
    line-height: ${o.pt};
  }

  > p:first-child,
  > .code-block:first-child,
  > .ProseMirror-gapcursor:first-child + .code-block {
    margin-top: -${o.pt}em !important;
  }
`},14148:(e,t,n)=>{"use strict";n.d(t,{V:()=>i});var r=n(39030),o=n(156560),a=n(16728);const i=()=>r.iv`
    .code {
      --ds--code--bg-color: ${`var(--ds-background-neutral, ${a.kd})`};
      ${(0,o.HX)()}
    }
  `},774564:(e,t,n)=>{"use strict";n.d(t,{D:()=>a});var r=n(39030),o=n(158568);const a=r.iv`
  [data-layout-section] {
    position: relative;
    display: flex;
    flex-direction: row;
    & > * {
      flex: 1;
      min-width: 0;
    }

    & > .unsupportedBlockView-content-wrap {
      min-width: initial;
    }

    @media screen and (max-width: ${o.Kv}px) {
      flex-direction: column;
    }
  }
`},259317:(e,t,n)=>{"use strict";n.d(t,{B:()=>a,r:()=>o});var r=n(39030);const o={DATE_WRAPPER:"date-lozenger-container",DATE_CONTAINER:"dateView-content-wrap"},a=r.iv`
  .${o.DATE_WRAPPER} span {
    white-space: unset;
  }
`},114657:(e,t,n)=>{"use strict";n.d(t,{W:()=>o,m:()=>r});const r=(0,n(2142).ww)(),o=2*r},381426:(e,t,n)=>{"use strict";n.d(t,{E:()=>a});var r=n(39030),o=n(233006);const a=()=>r.iv`
  & h1 {
    ${(0,o.pp)()};
    margin-bottom: 0;
    margin-top: 1.667em;
  }

  & h2 {
    ${(0,o.lL)()};
    margin-top: 1.8em;
    margin-bottom: 0;
  }

  & h3 {
    ${(0,o.uU)()};
    margin-top: 2em;
    margin-bottom: 0;
  }

  & h4 {
    ${(0,o.AC)()};
    margin-top: 1.357em;
  }

  & h5 {
    ${(0,o.qm)()};
    margin-top: 1.667em;
    text-transform: none;
  }

  & h6 {
    ${(0,o.Mf)()};
    margin-top: 1.455em;
    text-transform: none;
  }
`},154897:(e,t,n)=>{"use strict";n.d(t,{x:()=>r});const r=n(39030).iv`
  .fabric-editor-indentation-mark {
    &[data-level='1'] {
      margin-left: 30px;
    }
    &[data-level='2'] {
      margin-left: 60px;
    }
    &[data-level='3'] {
      margin-left: 90px;
    }
    &[data-level='4'] {
      margin-left: 120px;
    }
    &[data-level='5'] {
      margin-left: 150px;
    }
    &[data-level='6'] {
      margin-left: 180px;
    }
  }
`},213483:(e,t,n)=>{"use strict";n.d(t,{U:()=>o,r:()=>a});var r=n(2142);const o=(0,r.ww)(),a=1.5*(0,r.ww)()},507377:(e,t,n)=>{"use strict";n.d(t,{Xo:()=>p,aP:()=>c,cm:()=>s});var r=n(39030),o=n(249618),a=n(440812),i=n(91769);const s=24;var l=function(e){return e.ITEM_COUNTER_PADDING="--ed--list--item-counter--padding",e}(l||{});const u=e=>{let t="2.385ch";if(e>=3){t=`calc(${e+1}ch - ${2}px)`}return t},d=e=>Object.entries(e).reduce(((e,[t,n])=>`${e}${t}:${n};`),"");function c(e,t){const n={[l.ITEM_COUNTER_PADDING]:u(e)};return"string"===t?d(n):n}const p=r.iv`
  /* =============== INDENTATION SPACING ========= */

  ul,
  ol {
    box-sizing: border-box;
    padding-left: var(
      ${l.ITEM_COUNTER_PADDING},
      ${s}px
    );

    /*
    Firefox does not handle empty block element inside li tag.
    If there is not block element inside li tag,
      then firefox sets inherited height to li
    However, if there is any block element and if it's empty
      (or has empty inline element) then
    firefox sets li tag height to zero.
    More details at
    https://product-fabric.atlassian.net/wiki/spaces/~455502413/pages/3149365890/ED-14110+Investigation
    */
    li p:empty,
    li p > span:empty {
      ${i.Z.gecko?"display: inline-block;":""}
    }
  }

  ${o.Us}, ${a.T} {
    /*
      Ensures list item content adheres to the list's margin instead
      of filling the entire block row. This is important to allow
      clicking interactive elements which are floated next to a list.

      For some history and context on this block, see PRs related to tickets.:
      @see ED-6551 - original issue.
      @see ED-7015 - follow up issue.
      @see ED-7447 - flow-root change.

      We use 'display: table' (old clear fix / new block formatting context hack)
      for older browsers and 'flow-root' for modern browsers.

      @see https://css-tricks.com/display-flow-root/
    */
    // For older browsers the do not support flow-root.
    /* stylelint-disable declaration-block-no-duplicate-properties */
    display: table;
    display: flow-root;
    /* stylelint-enable declaration-block-no-duplicate-properties */
  }

  /* =============== INDENTATION AESTHETICS ========= */

  /**
        We support nested lists up to six levels deep.
    **/

  /* LEGACY LISTS */

  ul,
  ul ul ul ul {
    list-style-type: disc;
  }

  ul ul,
  ul ul ul ul ul {
    list-style-type: circle;
  }

  ul ul ul,
  ul ul ul ul ul ul {
    list-style-type: square;
  }

  ol,
  ol ol ol ol {
    list-style-type: decimal;
  }
  ol ol,
  ol ol ol ol ol {
    list-style-type: lower-alpha;
  }
  ol ol ol,
  ol ol ol ol ol ol {
    list-style-type: lower-roman;
  }

  /* PREDICTABLE LISTS */

  ol[data-indent-level='1'],
  ol[data-indent-level='4'] {
    list-style-type: decimal;
  }

  ol[data-indent-level='2'],
  ol[data-indent-level='5'] {
    list-style-type: lower-alpha;
  }

  ol[data-indent-level='3'],
  ol[data-indent-level='6'] {
    list-style-type: lower-roman;
  }

  ul[data-indent-level='1'],
  ul[data-indent-level='4'] {
    list-style-type: disc;
  }

  ul[data-indent-level='2'],
  ul[data-indent-level='5'] {
    list-style-type: circle;
  }

  ul[data-indent-level='3'],
  ul[data-indent-level='6'] {
    list-style-type: square;
  }
`},290260:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,I:()=>o});var r=n(39030);const o="rich-media-item",a=r.iv`
  li .${o} {
    margin: 0;
  }

  /* Hack for chrome to fix media single position
     inside a list when media is the first child */
  &.ua-chrome li > .mediaSingleView-content-wrap::before {
    content: '';
    display: block;
    height: 0;
  }

  &.ua-firefox {
    .mediaSingleView-content-wrap {
      user-select: none;
    }

    .captionView-content-wrap {
      user-select: text;
    }
  }

  .mediaSingleView-content-wrap[layout='center'] {
    clear: both;
  }

  table .${o} {
    margin-top: ${"var(--ds-space-150, 12px)"};
    margin-bottom: ${"var(--ds-space-150, 12px)"};
    clear: both;

    &.image-wrap-left,
    &.image-wrap-right {
      clear: none;

      &:first-child {
        margin-top: ${"var(--ds-space-150, 12px)"};
      }
    }
  }

  .${o}.image-wrap-right
    + .${o}.image-wrap-left {
    clear: both;
  }

  .${o}.image-wrap-left
    + .${o}.image-wrap-right,
    .${o}.image-wrap-right
    + .${o}.image-wrap-left,
    .${o}.image-wrap-left
    + .${o}.image-wrap-left,
    .${o}.image-wrap-right
    + .${o}.image-wrap-right {
    margin-right: 0;
    margin-left: 0;
  }

  @media all and (max-width: ${410}px) {
    div.mediaSingleView-content-wrap[layout='wrap-left'],
    div.mediaSingleView-content-wrap[data-layout='wrap-left'],
    div.mediaSingleView-content-wrap[layout='wrap-right'],
    div.mediaSingleView-content-wrap[data-layout='wrap-right'] {
      float: none;
      overflow: auto;
      margin: ${"var(--ds-space-150, 12px)"} 0;
    }
  }
`},38286:(e,t,n)=>{"use strict";n.d(t,{o:()=>a});var r=n(39030),o=n(158568);const a=r.iv`
  & p {
    font-size: 1em;
    line-height: ${o.pt};
    font-weight: normal;
    margin-top: ${o.zH};
    margin-bottom: 0;
    letter-spacing: -0.005em;
  }
`},690685:(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var r=n(39030),o=n(158568),a=n(16728);const i=()=>r.iv`
  & hr {
    border: none;
    background-color: ${`var(--ds-border, ${a.kd})`};
    margin: ${o.pt}em 0;
    height: 2px;
    border-radius: 1px;
  }
`},896779:(e,t,n)=>{"use strict";n.d(t,{B:()=>u});var r=n(39030),o=n(158568),a=n(24359),i=n(16728),s=n(310151),l=n(271455);const u=r.iv`
  &
    .${s.$.RIGHT_SHADOW}::before,
    .${s.$.RIGHT_SHADOW}::after,
    .${s.$.LEFT_SHADOW}::before,
    .${s.$.LEFT_SHADOW}::after {
    display: none;
    position: absolute;
    pointer-events: none;
    z-index: ${o.yV};
    width: ${8}px;
    content: '';
    /* Scrollbar is outside the content in IE, inset in other browsers. */
    height: calc(100%);
  }

  & .${s.$.RIGHT_SHADOW}, .${s.$.LEFT_SHADOW} {
    position: relative;
  }

  & .${s.$.LEFT_SHADOW}::before {
    background: linear-gradient(
        to left,
        transparent 0,
        ${`var(--ds-shadow-overflow-spread, ${i.bt})`}
          ${(0,a.e)("platform.editor.table.increase-shadow-visibility_lh89r")?140:100}%
      ),
      linear-gradient(
        to right,
        ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
        transparent 1px
      );
    top: 0px;
    left: 0;
    display: block;
  }

  & .${s.$.RIGHT_SHADOW}::after {
    background: linear-gradient(
        to right,
        transparent 0,
        ${`var(--ds-shadow-overflow-spread, ${i.bt})`}
          ${(0,a.e)("platform.editor.table.increase-shadow-visibility_lh89r")?140:100}%
      ),
      linear-gradient(
        to left,
        ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
        transparent 1px
      );
    left: calc(100% - ${8}px);
    top: 0px;
    display: block;
  }

  & .${l.S4.SENTINEL_LEFT} {
    height: 100%;
    width: 0px;
    min-width: 0px;
  }

  & .${l.S4.SENTINEL_RIGHT} {
    height: 100%;
    width: 0px;
    min-width: 0px;
  }
`},714708:(e,t,n)=>{"use strict";n.d(t,{U:()=>i,j:()=>a});var r=n(158568),o=n(2142);const a={INLINE_CARD_CONTAINER:"inlineCardView-content-wrap",BLOCK_CARD_CONTAINER:"blockCardView-content-wrap",EMBED_CARD_CONTAINER:"embedCardView-content-wrap",DATASOURCE_CONTAINER:"datasourceView-content-wrap",LOADER_WRAPPER:"loader-wrapper"},i=`\n  .${a.BLOCK_CARD_CONTAINER} {\n    display: block;\n    margin: ${r.zH} 0 0;\n    max-width: ${95*(0,o.ww)()}px;\n  }\n`},876069:(e,t,n)=>{"use strict";n.d(t,{Up:()=>g,WM:()=>_,Ok:()=>y,kB:()=>h,uq:()=>f,w0:()=>m,MZ:()=>c,tB:()=>p,Xf:()=>E,nP:()=>b});var r=n(39030),o=n(737073),a=n(158568),i=n(794256),s=n(91769),l=n(824470),u=n(723759);const d=()=>r.iv`
  ${(()=>{let e="";return o.XX.forEach(((t,n)=>{const r=(0,u.ES)(t);r&&(e+=`\n        td[colorname='${n}' i],\n        th[colorname='${n}' i] {\n          background-color: ${r} !important;\n        }\n      `)})),e})()}
`,c=24,p=14,m=8,h=48,E=140,y=1,f=8,g={TABLE_CONTAINER:`${o.Yf}-container`,TABLE_NODE_WRAPPER:`${o.Yf}-wrapper`,TABLE_LEFT_SHADOW:`${o.Yf}-with-left-shadow`,TABLE_RIGHT_SHADOW:`${o.Yf}-with-right-shadow`,TABLE_STICKY_SHADOW:`${o.Yf}-sticky-shadow`,TABLE_STICKY_WRAPPER:`${o.Yf}-sticky-wrapper`,TABLE_STICKY_SCROLLBAR_CONTAINER:`${o.Yf}-sticky-scrollbar-container`,TABLE_STICKY_SENTINEL_TOP:`${o.Yf}-sticky-sentinel-top`,TABLE_STICKY_SENTINEL_BOTTOM:`${o.Yf}-sticky-sentinel-bottom`,TABLE_STICKY_SCROLLBAR_SENTINEL_TOP:`${o.Yf}-sticky-scrollbar-sentinel-top`,TABLE_STICKY_SCROLLBAR_SENTINEL_BOTTOM:`${o.Yf}-sticky-scrollbar-sentinel-bottom`,TABLE_SHADOW_SENTINEL_LEFT:`${o.Yf}-shadow-sentinel-left`,TABLE_SHADOW_SENTINEL_RIGHT:`${o.Yf}-shadow-sentinel-right`,TABLE_CELL_NODEVIEW_CONTENT_DOM:o.Z4,TABLE_CELL_WRAPPER:o.fY,TABLE_HEADER_CELL_WRAPPER:o.Vz,TABLE_ROW_CONTROLS_WRAPPER:`${o.Yf}-row-controls-wrapper`,TABLE_COLUMN_CONTROLS_DECORATIONS:`${o.Yf}-column-controls-decoration`,TABLE_RESIZER_CONTAINER:`${o.Yf}-resizer-container`},b=()=>r.iv`
  ${d()}
  .${g.TABLE_CONTAINER} {
    position: relative;
    margin: 0 auto ${"var(--ds-space-200, 16px)"};
    box-sizing: border-box;

    /**
     * Fix block top alignment inside table cells.
     */
    .decisionItemView-content-wrap:first-of-type > div {
      margin-top: 0;
    }
  }
  .${g.TABLE_CONTAINER}[data-number-column='true'] {
    padding-left: ${a.XV-1}px;
    clear: both;
  }

  .${g.TABLE_RESIZER_CONTAINER} {
    will-change: width, margin-left;
  }

  .${g.TABLE_RESIZER_CONTAINER} table {
    will-change: width;
  }

  .${g.TABLE_NODE_WRAPPER} > table {
    margin: ${"var(--ds-space-300, 24px)"} 0 0 0;
  }

  .${g.TABLE_CONTAINER} > table,
  .${g.TABLE_STICKY_WRAPPER} > table {
    margin: ${"var(--ds-space-300, 24px)"} ${"var(--ds-space-100, 8px)"} 0 0;
  }

  /* avoid applying styles to nested tables (possible via extensions) */
  .${g.TABLE_CONTAINER} > table,
  .${g.TABLE_NODE_WRAPPER} > table,
  .${g.TABLE_STICKY_WRAPPER} > table {
    border-collapse: collapse;
    border: ${y}px solid
      ${`var(--ds-background-accent-gray-subtler, ${a.aX})`};
    table-layout: fixed;
    font-size: 1em;
    width: 100%;

    &[data-autosize='true'] {
      table-layout: auto;
    }

    & {
      * {
        box-sizing: border-box;
      }
      hr {
        box-sizing: content-box;
      }

      tbody {
        border-bottom: none;
      }
      th td {
        background-color: ${"var(--ds-background-neutral-subtle, white)"};
      }
      th,
      td {
        min-width: ${h}px;
        font-weight: normal;
        vertical-align: top;
        border: 1px solid
          ${`var(--ds-background-accent-gray-subtler, ${a.aX})`};
        border-right-width: 0;
        border-bottom-width: 0;
        padding: ${"var(--ds-space-100, 8px)"};
        /* https://stackoverflow.com/questions/7517127/borders-not-shown-in-firefox-with-border-collapse-on-table-position-relative-o */
        ${s.Z.gecko||s.Z.ie||s.Z.mac&&s.Z.chrome?"background-clip: padding-box;":""}

        > :first-child:not(style),
        > style:first-child + * {
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

        th p:not(:first-of-type),
        td p:not(:first-of-type) {
          margin-top: ${"var(--ds-space-150, 12px)"};
        }
      }
      th {
        background-color: ${`var(--ds-background-accent-gray-subtlest, ${a.Zs})`};
        text-align: left;

        /* only apply this styling to codeblocks in default background headercells */
        /* TODO this needs to be overhauled as it relies on unsafe selectors */
        &:not([style]):not(.danger) {
          .${l.zq.CODEBLOCK_CONTAINER}:not(.danger) {
            background-color: ${"var(--ds-surface-raised, rgb(235, 237, 240))"};

            :not(.${a.ur}) {
              box-shadow: 0px 0px 0px 1px
                ${"var(--ds-border, transparent)"};
            }

            .${l.zq.CODEBLOCK_CONTENT_WRAPPER} {
              background-image: ${(0,i.u)({background:"var(--ds-background-neutral, rgb(235, 237, 240))",leftCoverWidth:"var(--ds-space-300, 24px)"})};

              background-color: ${"var(--ds-background-neutral, rgb(235, 237, 240))"};
            }

            .${l.zq.CODEBLOCK_LINE_NUMBER_GUTTER} {
              background-color: ${"var(--ds-background-neutral, rgb(226, 229, 233))"};
            }

            /* this is only relevant to the element taken care of by renderer */
            > [data-ds--code--code-block] {
              background-image: ${(0,i.u)({background:"var(--ds-background-neutral, rgb(235, 237, 240))",leftCoverWidth:"var(--ds-space-300, 24px)"})}!important;

              background-color: ${"var(--ds-background-neutral, rgb(235, 237, 240))"}!important;

              // selector lives inside @atlaskit/code
              --ds--code--line-number-bg-color: ${"var(--ds-background-neutral, rgb(226, 229, 233))"};
            }
          }
        }
      }
    }
  }
`,_=(e,t,n=!0)=>{switch(e){case"full-width":return t?Math.min(t-(n?a._2:0),a.zJ):a.zJ;case"wide":return t?Math.min(t-(n?a._2:0),a.uz):a.uz;default:return"inherit"}}},116564:(e,t,n)=>{"use strict";n.d(t,{L:()=>i,o:()=>a});var r=n(39030),o=n(158568);const a={DECISION_CONTAINER:"decisionItemView-content-wrap",TASK_CONTAINER:"taskItemView-content-wrap",TASK_ITEM:"task-item"},i=r.iv`
  .ProseMirror {
    .taskItemView-content-wrap,
    .${a.DECISION_CONTAINER} {
      position: relative;
      min-width: ${o.cw}px;
    }

    .${a.DECISION_CONTAINER} {
      margin-top: 0;
    }

    .${a.TASK_CONTAINER} {
      span[contenteditable='false'] {
        height: ${o.pt}em;
      }
    }

    .${a.TASK_ITEM} {
      line-height: ${o.pt};
    }
  }

  div[data-task-local-id] {
    span[contenteditable='false'] {
      height: ${o.pt}em;
    }
    span[contenteditable='false'] + div {
      line-height: ${o.pt}em;
    }
  }

  div[data-task-list-local-id] {
    margin: ${"var(--ds-space-150, 12px)"} 0 0 0;
  }

  div[data-task-list-local-id] {
    // If task item is not first in the list then set margin top to 4px.
    div + div {
      margin-top: ${"var(--ds-space-050, 4px)"};
    }
  }

  // If task list is not first in the document then set margin top to 4px.
  div[data-task-list-local-id] div[data-task-list-local-id] {
    margin-top: ${"var(--ds-space-050, 4px)"};
    margin-left: ${"var(--ds-space-300, 24px)"};
  }
`},479588:(e,t,n)=>{"use strict";n.d(t,{E:()=>r});const r=n(39030).iv`
  .fabric-text-color-mark {
    color: var(--custom-palette-color, inherit);
  }

  a .fabric-text-color-mark {
    color: unset;
  }
`},997194:(e,t,n)=>{"use strict";n.d(t,{u:()=>r});const r=n(39030).iv`
  word-wrap: break-word;
  white-space: pre-wrap;
`},151802:(e,t,n)=>{"use strict";n.d(t,{As:()=>r});let r=function(e){return e.ASC="asc",e.DESC="desc",e.NO_ORDER="no_order",e}({})},445741:(e,t,n)=>{"use strict";n.d(t,{Yu:()=>d,p0:()=>l});var r=n(840506),o=n(169626),a=n(158568),i=n(2142),s=n(481010);function l(e){switch(e){case"M":case"L":return 760;default:return 680}}function u({baseFontSize:e,children:t}){const n=(0,r.useMemo)((()=>({baseFontSize:e||(0,i.JB)(),layoutMaxWidth:a.re})),[e]);return r.createElement(o.a,{theme:n},t)}function d({children:e,baseFontSize:t}){return r.createElement(s.mP,null,(({breakpoint:n})=>r.createElement(u,{breakpoint:n,baseFontSize:t},r.createElement(r.Fragment,null,e))))}u.displayName="BaseThemeWrapper",d.displayName="BaseTheme"},396678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(615919),o=n(840506),a=n(39030),i=n(122529),s=n(16728);const l=(0,n(93972).defineMessages)({placeholder:{id:"fabric.editor.captionPlaceholder",defaultMessage:"Add a caption"}}),u=a.iv`
  margin-top: ${"var(--ds-space-100, 8px)"};
  text-align: center;
  position: relative;
  color: ${`var(--ds-text-subtle, ${s.zN})`};
`,d=a.iv`
  color: ${`var(--ds-text-subtlest, ${s.iw})`};
  position: absolute;
  top: 0;
  width: 100%;
`;class c extends o.Component{render(){const{selected:e,hasContent:t,children:n,dataAttributes:o,intl:{formatMessage:i}}=this.props,s=!e&&!t;return(0,a.tZ)("div",(0,r.Z)((0,r.Z)({"data-media-caption":!0,"data-testid":"media-caption"},o),{},{css:u}),s?(0,a.tZ)("p",{css:d},i(l.placeholder)):null,n)}}c.displayName="CaptionComponent";const p=(0,i.ZP)(c)},240767:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var r=n(199009),o=n(840506),a=n(659898);class i extends o.Component{constructor(...e){super(...e),(0,r.Z)(this,"state",{missingIntlProviderInAncestry:!1})}componentDidCatch(e,t){if(!(null==(n=e)||null===(r=n.toString())||void 0===r?void 0:r.includes("<IntlProvider> needs to exist in the component ancestry")))throw e;var n,r;this.setState({missingIntlProviderInAncestry:!0})}render(){return this.state.missingIntlProviderInAncestry?o.createElement(a.Z,{locale:"en"},this.props.children):this.props.children}}i.displayName="IntlErrorBoundary"},310151:(e,t,n)=>{"use strict";n.d(t,{$:()=>s,Z:()=>l});var r=n(615919),o=n(199009),a=n(840506),i=n(271455);const s={RIGHT_SHADOW:"right-shadow",LEFT_SHADOW:"left-shadow"};function l(e,t){return class extends a.Component{constructor(...e){super(...e),(0,o.Z)(this,"overflowContainer",void 0),(0,o.Z)(this,"container",void 0),(0,o.Z)(this,"shadowObserver",void 0),(0,o.Z)(this,"overflowContainerWidth",0),(0,o.Z)(this,"scrollable",void 0),(0,o.Z)(this,"diff",void 0),(0,o.Z)(this,"state",{showLeftShadow:!1,showRightShadow:!1}),(0,o.Z)(this,"handleScroll",(e=>{this.overflowContainer&&e.target===this.overflowContainer&&!t.useShadowObserver&&this.updateShadows()})),(0,o.Z)(this,"updateShadows",(()=>{t.useShadowObserver||this.setState((e=>{if(!this.overflowContainer)return;const t=this.calcOverflowDiff(),n=t>0&&t>this.overflowContainer.scrollLeft,r=this.showLeftShadow(this.overflowContainer);return r!==e.showLeftShadow||n!==this.state.showRightShadow?{showLeftShadow:r,showRightShadow:n}:null}))})),(0,o.Z)(this,"showLeftShadow",(e=>!!e&&e.scrollLeft>0)),(0,o.Z)(this,"calcOverflowDiff",(()=>this.overflowContainer?(this.diff=this.calcScrollableWidth(),this.diff-this.overflowContainer.offsetWidth):0)),(0,o.Z)(this,"calcScrollableWidth",(()=>{if(!this.scrollable&&this.overflowContainer)return this.overflowContainer.scrollWidth;if(!this.scrollable)return 0;let e=0;for(let t=0;t<this.scrollable.length;t++){e+=this.scrollable[t].scrollWidth}return e})),(0,o.Z)(this,"handleContainer",(e=>{e&&!this.container&&(this.container=e,this.overflowContainer=e.querySelector(t.overflowSelector),this.overflowContainer||(this.overflowContainer=e),t.useShadowObserver?this.initShadowObserver():(this.updateShadows(),this.overflowContainer.addEventListener("scroll",this.handleScroll)))}))}componentWillUnmount(){if(t.useShadowObserver)return this.shadowObserver&&this.shadowObserver.dispose();this.overflowContainer&&this.overflowContainer.removeEventListener("scroll",this.handleScroll),this.updateShadows()}componentDidUpdate(){t.useShadowObserver||this.updateShadows()}initShadowObserver(){!this.shadowObserver&&this.overflowContainer&&(this.shadowObserver=new i.Xx({scrollContainer:this.overflowContainer,onUpdateShadows:e=>{this.setState((t=>{const{showLeftShadow:n,showRightShadow:r}=e;return n!==t.showLeftShadow||r!==t.showRightShadow?{showLeftShadow:n,showRightShadow:r}:null}))}}))}render(){const{showLeftShadow:n,showRightShadow:o}=this.state;let l=[o&&s.RIGHT_SHADOW,n&&s.LEFT_SHADOW,t.useShadowObserver&&i.S4.SHADOW_CONTAINER].filter(Boolean).join(" ");return a.createElement(e,(0,r.Z)({handleRef:this.handleContainer,shadowClassNames:l},this.props))}}}},271455:(e,t,n)=>{"use strict";n.d(t,{S4:()=>a,Xx:()=>i});var r=n(199009);let o=function(e){return e.SHOW_LEFT_SHADOW="showLeftShadow",e.SHOW_RIGHT_SHADOW="showRightShadow",e}({});const a={SENTINEL_LEFT:"sentinel-left",SENTINEL_RIGHT:"sentinel-right",SHADOW_CONTAINER:"with-shadow-observer"};class i{constructor({scrollContainer:e,onUpdateShadows:t}){(0,r.Z)(this,"intersectionObserver",void 0),(0,r.Z)(this,"scrollContainer",void 0),(0,r.Z)(this,"onUpdateShadows",void 0),(0,r.Z)(this,"sentinels",{}),(0,r.Z)(this,"requestCallbackId",void 0),(0,r.Z)(this,"shadowStates",{[o.SHOW_LEFT_SHADOW]:!1,[o.SHOW_RIGHT_SHADOW]:!1}),(0,r.Z)(this,"init",(()=>{this.scrollContainer&&!this.intersectionObserver&&(this.sentinels.right=document.createElement("div"),this.sentinels.right.classList.add(a.SENTINEL_RIGHT),this.scrollContainer.appendChild(this.sentinels.right),this.sentinels.left=document.createElement("div"),this.sentinels.left.classList.add(a.SENTINEL_LEFT),this.scrollContainer.prepend(this.sentinels.left),this.intersectionObserver=new IntersectionObserver(((e,t)=>{e.forEach(this.onIntersect)}),{root:this.scrollContainer,rootMargin:"1px"}),this.intersectionObserver.observe(this.sentinels.left),this.intersectionObserver.observe(this.sentinels.right))})),(0,r.Z)(this,"onIntersect",(e=>{var t;this.requestCallbackId=(t=()=>{e.target.classList.contains(a.SENTINEL_LEFT)&&(this.shadowStates[o.SHOW_LEFT_SHADOW]=!e.isIntersecting),e.target.classList.contains(a.SENTINEL_RIGHT)&&(this.shadowStates[o.SHOW_RIGHT_SHADOW]=!e.isIntersecting),this.onUpdateShadows(this.shadowStates)},window.requestIdleCallback?window.requestIdleCallback(t):window.requestAnimationFrame(t))})),this.scrollContainer=e,this.onUpdateShadows=t,this.init()}dispose(){var e;this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0,this.requestCallbackId&&(e=this.requestCallbackId,window.cancelIdleCallback?window.cancelIdleCallback(e):window.cancelAnimationFrame(e)))}}},225648:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(840506),o=n(39030),a=n(122529),i=n(158568),s=n(161871),l=n(16728),u=n(2142),d=n(332072),c=n(431676),p=n(598613),m=n(326482),h=n(181273);const E=o.iv`
  background: ${`var(--ds-background-disabled, ${l.gt})`};
  border: 1px dashed ${`var(--ds-border-disabled, ${l.uv})`};
  border-radius: ${(0,u.E0)()}px;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  font-size: ${(0,i.Gh)((0,u.JB)())};
  margin: 10px 0;
  min-height: 24px;
  padding: 10px;
  text-align: center;
  vertical-align: text-bottom;
  min-width: 120px;
  align-items: center;
  justify-content: center;
`,y=({node:e,intl:t,dispatchAnalyticsEvent:n})=>{const a=(0,h.B)(p.x.unsupportedBlockContent,p.x.unsupportedBlockContent.defaultMessage+":",e,t),i=t.formatMessage(p.x.unsupportedContentTooltip),{current:l}=(0,r.useRef)({padding:"4px"}),u=null==e?void 0:e.attrs.originalValue.type,y=(0,r.useCallback)((()=>n&&(0,m.u9)(n,c.VJ.ON_UNSUPPORTED_BLOCK,u)),[n,u]);return(0,o.tZ)("div",{css:E,className:"unsupported"},a,(0,o.tZ)(d.Z,{content:i,hideTooltipOnClick:!1,position:"bottom",onShow:y,strategy:"absolute"},(0,o.tZ)("span",{style:l},(0,o.tZ)(s.default,{label:"?",size:"small"}))))};y.displayName="UnsupportedBlockNode";const f=(0,a.ZP)(y)},598385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(840506),o=n(39030),a=n(122529),i=n(158568),s=n(161871),l=n(16728),u=n(2142),d=n(332072),c=n(431676),p=n(598613),m=n(326482),h=n(181273);const E=o.iv`
  align-items: center;
  background: ${`var(--ds-background-disabled, ${l.gt})`};
  border: 1px dashed ${`var(--ds-border-disabled, ${l.uv})`};
  border-radius: ${(0,u.E0)()}px;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  font-size: ${(0,i.Gh)((0,u.JB)())};
  margin: 0 ${"var(--ds-space-025, 2px)"};
  min-height: 24px;
  padding: 0 10px;
  vertical-align: middle;
  white-space: nowrap;
`,y=({node:e,intl:t,dispatchAnalyticsEvent:n})=>{const a=(0,h.B)(p.x.unsupportedInlineContent,"Unsupported",e,t),i=t.formatMessage(p.x.unsupportedContentTooltip),{current:l}=(0,r.useRef)({padding:"4px"}),u=null==e?void 0:e.attrs.originalValue.type,y=(0,r.useCallback)((()=>n&&(0,m.u9)(n,c.VJ.ON_UNSUPPORTED_INLINE,u)),[n,u]);return(0,o.tZ)("span",{css:E},a,(0,o.tZ)(d.Z,{content:i,hideTooltipOnClick:!1,position:"bottom",onShow:y,strategy:"absolute"},(0,o.tZ)("span",{style:l},(0,o.tZ)(s.default,{label:"?",size:"small"}))))};y.displayName="UnsupportedInlineNode";const f=(0,a.ZP)(y)},481010:(e,t,n)=>{"use strict";n.d(t,{E3:()=>d,iF:()=>m,iu:()=>l,mP:()=>p});var r=n(199009),o=n(840506),a=n(39030),i=n(269626),s=n(752640);function l(e=0){return e>=1266&&e<2146?"M":e>=2146?"L":"S"}function u(e=0){return{width:e,breakpoint:l(e)}}const d=o.createContext(u()),{Provider:c,Consumer:p}=d;class m extends o.Component{constructor(e){super(e),(0,r.Z)(this,"state",{width:0}),(0,r.Z)(this,"setWidth",(0,i.Z)((e=>{Math.abs(this.state.width-e)<30||this.setState({width:e})}))),"undefined"!=typeof document&&(this.state.width=document.body.offsetWidth)}render(){return(0,a.tZ)("div",{css:a.iv`
          position: relative;
          width: 100%;
        `,className:this.props.className},(0,a.tZ)(s.K,{setWidth:this.setWidth,offscreen:!0}),(0,a.tZ)(c,{value:u(this.state.width)},this.props.children))}}m.displayName="WidthProvider"},181273:(e,t,n)=>{"use strict";function r(e,t,n,r){let o=!0,a=r?r.locale:"en",i=e.defaultMessage;if(n&&a.startsWith("en")){const{originalValue:e}=n.attrs;e.text||e.attrs&&e.attrs.text?(i=e.text?e.text:e.attrs.text,o=!1):e.type&&(i=`${t} ${e.type}`,o=!1)}return r&&o?r.formatMessage(e):i}n.d(t,{B:()=>r})},667266:(e,t,n)=>{"use strict";n.d(t,{$L:()=>o,DQ:()=>l,a$:()=>i,a9:()=>a,bI:()=>s});var r=n(806640);const o=e=>{switch(e){case"full-page":return r.Dj.FIXED_WIDTH;case"full-width":return r.Dj.FULL_WIDTH;case"comment":return r.Dj.COMMENT;case"chromeless":return r.Dj.CHROMELESS;case"mobile":return r.Dj.MOBILE}},a=e=>e?`editor_${o(e)}`:"_unknown",i=(e,t,n)=>e>t&&e<=n?s.DEGRADED:e>n?s.BLOCKING:s.NORMAL;let s=function(e){return e.NORMAL="normal",e.DEGRADED="degraded",e.BLOCKING="blocking",e}({});const l="EDITOR_ANALYTICS_EVENT"},681582:(e,t,n)=>{"use strict";n.d(t,{SF:()=>a,_u:()=>o,hO:()=>r,vI:()=>i});const r=(e,t,n)=>{const{from:r,to:o}=e;if(isNaN(r+o)||o-r<=0||o<0||r<0)return!1;let a=!1;return t.nodesBetween(e.from,e.to,((e,t,r)=>n.nodes.hardBreak!==e.type&&(!(e.isInline&&!e.isText||e.isLeaf&&!e.isText||e.isText&&(null==r||!r.type.allowsMarkType(n.marks.annotation)))||(a=!0,!1)))),!a},o=(e,t,n)=>{const{from:r,to:o}=e;let a=new Set;return t.nodesBetween(r,o,(e=>!e.marks||(e.marks.forEach((e=>{e.type===n.marks.annotation&&e.attrs&&a.add(e.attrs.id)})),!0))),Array.from(a)};function a(e,t){const{schema:{marks:{annotation:n}}}=t;return!!(n&&e&&e.marks.length&&n.isInSet(e.marks))}function i(e,t){if(!e.content.size)return!1;let n=!1;return e.content.forEach((e=>{if(n=n||a(e,t),n)return!0;e.descendants((e=>!a(e,t)||(n=!0,!1)))})),n}},170080:(e,t,n)=>{"use strict";n.d(t,{A9:()=>u,HV:()=>d,YQ:()=>E,Z7:()=>l,kt:()=>h,mV:()=>m,rW:()=>c,wV:()=>p});var r=n(158568),o=n(578253),a=n(445741),i=n(481010),s=n(481838);const l={padding:r._2,defaultLayoutWidth:r.re,wideScaleRatio:r.kI,fullWidthLayoutWidth:r.zJ,wideLayoutWidth:r.uz,mapBreakpointToLayoutMaxWidth:a.p0,getBreakpoint:i.iu,calcBreakoutWidth:(e,t)=>{const n=t-l.padding;switch(e){case"full-width":return`${Math.min(n,l.fullWidthLayoutWidth)}px`;case"wide":if(n<=0)return"100%";let e=l.calcWideWidth(t);return e.endsWith("%")?`${Math.min(n,l.fullWidthLayoutWidth)}px`:e;default:return"100%"}},calcLineLength:()=>l.defaultLayoutWidth,calcWideWidth:(e=l.defaultLayoutWidth,t=1/0,n="100%")=>{const r=e-l.padding,o=l.mapBreakpointToLayoutMaxWidth(l.getBreakpoint(e)),a=Math.min(Math.ceil(o*l.wideScaleRatio),r);return o>a?n:`${Math.min(t,a)}px`}},u=(e,t)=>{const n=l.calcBreakoutWidth(e,t);if(n.endsWith("%"))switch(e){case"full-width":return r.zJ;case"wide":return r.uz;default:return l.mapBreakpointToLayoutMaxWidth(l.getBreakpoint(t))}return parseInt(n,10)},d=l.calcWideWidth,c=l.calcBreakoutWidth;function p({mode:e,widthStateLineLength:t,widthStateWidth:n}){const o=c(e,n),a=(0,s.AY)(o);return t?{type:"line-length-known",width:o,minWidth:a,transition:`min-width 0.5s ${r.Y3}`,transform:"translateX(-50%)",marginLeft:"50%"}:{type:"line-length-unknown",width:o,minWidth:a,display:"flex",justifyContent:"center",transform:"none",transition:`min-width 0.5s ${r.Y3}`}}function m(e,t){return(0,s.AY)(c(e,t))}const h=e=>"full-width"===e?"center":"wide"===e?"full-width":"wide",E=e=>{switch(e){case"full-width":return o.ZP.layoutFixedWidth;case"wide":return o.ZP.layoutFullWidth;default:return o.ZP.layoutWide}}},91769:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const r={mac:!1,ie:!1,ie_version:0,gecko:!1,gecko_version:0,chrome:!1,chrome_version:0,android:!1,ios:!1,webkit:!1,safari:!1,safari_version:0,supportsIntersectionObserver:!1,supportsResizeObserver:!1};if("undefined"!=typeof navigator){const e=/Edge\/(\d+)/.exec(navigator.userAgent),t=/MSIE \d/.test(navigator.userAgent),n=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);r.mac=/Mac/.test(navigator.platform);let o=r.ie=!!(t||n||e);r.ie_version=t?document.documentMode||6:n?+n[1]:e?+e[1]:null,r.gecko=!o&&/gecko\/\d/i.test(navigator.userAgent),r.gecko_version=parseInt((navigator.userAgent.match(/Firefox\/(\d+)/)||[])[1],10),r.chrome=!o&&/Chrome\//.test(navigator.userAgent),r.chrome_version=parseInt((navigator.userAgent.match(/Chrome\/(\d+)/)||[])[1],10),r.android=/Android \d/.test(navigator.userAgent),r.ios=!o&&/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),r.webkit=!o&&!!document.documentElement&&"WebkitAppearance"in document.documentElement.style,r.safari=Boolean(navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS")),r.safari_version=parseInt((navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/)||[])[1],10),r.supportsIntersectionObserver="undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,r.supportsResizeObserver="undefined"!=typeof window&&"ResizeObserver"in window&&"ResizeObserverEntry"in window}const o=r},752088:(e,t,n)=>{"use strict";n.d(t,{zR:()=>s});var r=n(151802);let o=function(e){return e[e.NUMBER=0]="NUMBER",e[e.TEXT=5]="TEXT",e[e.MENTION=10]="MENTION",e[e.DATE=15]="DATE",e[e.STATUS=20]="STATUS",e[e.LINK=25]="LINK",e}({});function a(){const e=window.navigator.language,t=Intl.NumberFormat(e).format(11111).replace(/[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{102E1}-\u{102FB}\u{10320}-\u{10323}\u{10341}\u{1034A}\u{103D1}-\u{103D5}\u{104A0}-\u{104A9}\u{10858}-\u{1085F}\u{10879}-\u{1087F}\u{108A7}-\u{108AF}\u{108FB}-\u{108FF}\u{10916}-\u{1091B}\u{109BC}\u{109BD}\u{109C0}-\u{109CF}\u{109D2}-\u{109FF}\u{10A40}-\u{10A48}\u{10A7D}\u{10A7E}\u{10A9D}-\u{10A9F}\u{10AEB}-\u{10AEF}\u{10B58}-\u{10B5F}\u{10B78}-\u{10B7F}\u{10BA9}-\u{10BAF}\u{10CFA}-\u{10CFF}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10F1D}-\u{10F26}\u{10F51}-\u{10F54}\u{10FC5}-\u{10FCB}\u{11052}-\u{1106F}\u{110F0}-\u{110F9}\u{11136}-\u{1113F}\u{111D0}-\u{111D9}\u{111E1}-\u{111F4}\u{112F0}-\u{112F9}\u{11450}-\u{11459}\u{114D0}-\u{114D9}\u{11650}-\u{11659}\u{116C0}-\u{116C9}\u{11730}-\u{1173B}\u{118E0}-\u{118F2}\u{11950}-\u{11959}\u{11C50}-\u{11C6C}\u{11D50}-\u{11D59}\u{11DA0}-\u{11DA9}\u{11F50}-\u{11F59}\u{11FC0}-\u{11FD4}\u{12400}-\u{1246E}\u{16A60}-\u{16A69}\u{16AC0}-\u{16AC9}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16E80}-\u{16E96}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D7CE}-\u{1D7FF}\u{1E140}-\u{1E149}\u{1E2F0}-\u{1E2F9}\u{1E4F0}-\u{1E4F9}\u{1E8C7}-\u{1E8CF}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}]/gu,""),n=Intl.NumberFormat(e).format(1.1).replace(/[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{102E1}-\u{102FB}\u{10320}-\u{10323}\u{10341}\u{1034A}\u{103D1}-\u{103D5}\u{104A0}-\u{104A9}\u{10858}-\u{1085F}\u{10879}-\u{1087F}\u{108A7}-\u{108AF}\u{108FB}-\u{108FF}\u{10916}-\u{1091B}\u{109BC}\u{109BD}\u{109C0}-\u{109CF}\u{109D2}-\u{109FF}\u{10A40}-\u{10A48}\u{10A7D}\u{10A7E}\u{10A9D}-\u{10A9F}\u{10AEB}-\u{10AEF}\u{10B58}-\u{10B5F}\u{10B78}-\u{10B7F}\u{10BA9}-\u{10BAF}\u{10CFA}-\u{10CFF}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10F1D}-\u{10F26}\u{10F51}-\u{10F54}\u{10FC5}-\u{10FCB}\u{11052}-\u{1106F}\u{110F0}-\u{110F9}\u{11136}-\u{1113F}\u{111D0}-\u{111D9}\u{111E1}-\u{111F4}\u{112F0}-\u{112F9}\u{11450}-\u{11459}\u{114D0}-\u{114D9}\u{11650}-\u{11659}\u{116C0}-\u{116C9}\u{11730}-\u{1173B}\u{118E0}-\u{118F2}\u{11950}-\u{11959}\u{11C50}-\u{11C6C}\u{11D50}-\u{11D59}\u{11DA0}-\u{11DA9}\u{11F50}-\u{11F59}\u{11FC0}-\u{11FD4}\u{12400}-\u{1246E}\u{16A60}-\u{16A69}\u{16AC0}-\u{16AC9}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16E80}-\u{16E96}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D7CE}-\u{1D7FF}\u{1E140}-\u{1E149}\u{1E2F0}-\u{1E2F9}\u{1E4F0}-\u{1E4F9}\u{1E8C7}-\u{1E8CF}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}]/gu,""),r=new RegExp(`(\\d+(?:[${t}${n}]?\\d+)*)`,"g"),o=new RegExp("\\"+t,"g"),a=new RegExp("\\"+n);return e=>{if(!e.trim().length)return null;const t=e.split(r).reduce(((e,t)=>{if(null==t||!t.length)return e;const r=function(e,t,n){if(!e.trim().length)return null;const r=Number.parseFloat(e.replace(t,"").replace(n,"."));return Number.isNaN(r)?null:r}(t,o,a);return null!==r&&t.indexOf(n)===t.lastIndexOf(n)?e.push(r):e.push(t),e}),[]);return 1===t.length?t[0]:t.join("")}}function i(e,t,n){if(!e)return null;const r=e.firstChild;if(!r)return null;switch(r.type.name){case"heading":case"paragraph":return i(r,t,n);case"inlineCard":{const e=r.attrs,n=t.getInlineCardTextFromStore(e);if(n)return{type:o.LINK,value:n};const a=e.url;return{type:o.LINK,value:a||""}}case"text":return function(e,t){if(function(e){const[t]=e.marks.filter((e=>"link"===e.type.name));return t||null}(e)){const t=e.text||"";return{type:o.LINK,value:t}}const n=e.text||"",r=t(n);return"number"==typeof r?{type:o.NUMBER,value:r}:{type:o.TEXT,value:null!=r?r:n}}(r,n);case"status":{const e=r.attrs.text;return{type:o.STATUS,value:e}}case"date":{const e=Number.parseInt(r.attrs.timestamp,20);return{type:o.DATE,value:e}}case"mention":{const e=r.attrs.text||"";return{type:o.MENTION,value:e.toLowerCase()}}default:return null}}const s=(e,t=r.As.ASC)=>{const n=a();return(o,a)=>{const s=i(o,e,n),u=i(a,e,n);return null===s||null===u?l(s,u):(t===r.As.DESC?-1:1)*l(s,u)}};function l(e,t){return e===t?0:null===e||null===t?null===t?-1:1:e.type!==t.type?e.type>t.type?1:-1:(n=e.value,r=t.value,n===r?0:"string"==typeof n&&"string"==typeof r?n.localeCompare(r,window.navigator.language,{caseFirst:"upper",numeric:!0}):n>r?1:-1);var n,r}},481838:(e,t,n)=>{"use strict";function r(e,t){let n=e;for(;n&&n.parentElement&&!t(n);)n=n.parentElement;return n}function o(e,t){const n=document.createDocumentFragment();Array.from(t.children).forEach((e=>{n.appendChild(e)})),e.replaceChild(n,t)}function a(e){for(;e.parentElement&&0===e.childElementCount&&""===e.textContent;){const t=e.parentElement;t.removeChild(e),e=t}}n.d(t,{AY:()=>u,FR:()=>d,G7:()=>a,Oh:()=>r,Wg:()=>o,oq:()=>s,pE:()=>l,tn:()=>i});const i=(e,t)=>{if(!e)return!1;if(e.classList&&e.classList.contains)return e.classList.contains(t);if(!e.className)return!1;return-1!==("string"==typeof e.className.baseVal?e.className.baseVal:e.className).split(" ").indexOf(t)};function s(e,t){if(!e)return null;let n=e;if(!document.documentElement||!document.documentElement.contains(n))return null;if(n.closest)return n.closest(t);do{const e=n.matches?n.matches:n.msMatchesSelector;if(e&&e.call(n,t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}function l(e,t){return s(e,t)}function u(e){if(!e.endsWith("px"))return;const t=parseInt(e,10);return Number.isNaN(t)?void 0:t}function d(e,t){return function(e,t){const n=[];for(let r=0;r<e.childElementCount;r++)n.push(t(e.children[r],r,e));return n}(e,t)}},777163:(e,t,n)=>{"use strict";function r(e){return"object"==typeof e?e.render:e}n.d(t,{c:()=>r})},145736:(e,t,n)=>{"use strict";n.d(t,{Ah:()=>o,Bl:()=>s,NM:()=>d,Px:()=>a,Y$:()=>l,Zu:()=>u,gb:()=>c,hn:()=>r,yD:()=>i});const r=e=>{const t=Number(e);if(!(Number.isNaN(t)||t<0))return Math.floor(Math.max(t,0))},o=e=>{var t,n;const o=null==e||null===(t=e.attrs)||void 0===t?void 0:t.order;return null!==(n=r(o))&&void 0!==n?n:1},a=e=>{var t,n;const o=null!==(t=r(e.order))&&void 0!==t?t:1,a="number"==typeof e.itemsCount?e.itemsCount:0;return null===(n=String(o+(a-1)))||void 0===n||null===(n=n.split("."))||void 0===n||null===(n=n[0])||void 0===n?void 0:n.length};function i(e){return Boolean(e&&e.type&&["orderedList","bulletList"].includes(e.type.name))}function s(e){return Boolean(e&&e.type&&"paragraph"===e.type.name)}function l(e){return Boolean(e&&e.type&&"listItem"===e.type.name)}function u(e){return Boolean(e&&e.type&&"bulletList"===e.type.name)}function d(e){return Boolean(e&&e.type&&"orderedList"===e.type.name)}const c=(e,t)=>!(!d(e)||!d(t))&&o(e)+e.childCount===o(t)},693859:(e,t,n)=>{"use strict";n.d(t,{n:()=>d});var r=n(840506),o=n(312482);const a=Object.keys,i=(e,t)=>{const n=null!==e?a(e):[],r=null!==t?a(t):[],o=n.filter((e=>!r.includes(e)));return{added:r.filter((e=>!n.includes(e))),common:n.filter((e=>r.includes(e))),removed:o}},s=e=>{const t=typeof e;return null===e?"null":void 0===e?"undefined":"string"===t||"number"===t?e:"symbol"===t?e.toString():"function"===t?`function:${e.name}`:"object"===t?{type:"object",keys:Object.keys(e)}:void 0},l=(e,t,n=0,o=2,a=[])=>{const{added:u,common:d,removed:c}=i(e,t),p=[];return d.forEach((i=>{const u=e[i],d=t[i],c=typeof u,m=typeof d;if(u!==d&&-1===a.indexOf(i))if(r.isValidElement(u)||r.isValidElement(d))p.push({key:i,reactElementChanged:!0});else if("object"===c&&"object"===m)if(n<=o){const e=l(u,d,n+1,o);p.push({key:i,difference:e})}else p.push({key:i,maxDepthReached:!0});else p.push({key:i,oldValue:s(u),newValue:s(d)})})),{added:u,changed:p,removed:c}},u=(e,t)=>{const{added:n,common:r,removed:o}=i(e,t);return{added:n,changed:r.filter((n=>e[n]!==t[n])),removed:o}};function d({onRender:e,propsDiffingOptions:t,zeroBasedCount:n=!0}){const a=(0,r.useRef)(),i=(0,r.useRef)(n?0:1),{current:s}=(0,r.useRef)(o.V.generate());(0,r.useEffect)((()=>{const n=a.current,r=i.current;let o;null!=t&&t.enabled&&n&&(o=null!=t&&t.useShallow?u(n,t.props):l(n,t.props,0,2,null==t?void 0:t.propsToIgnore));e({renderCount:r,propsDifference:o,componentId:s}),null!=t&&t.enabled&&(a.current=t.props),i.current=i.current+1}))}},536313:(e,t,n)=>{"use strict";let r;function o(){return void 0===r&&(r="undefined"!=typeof window&&"performance"in window&&["measure","clearMeasures","clearMarks","getEntriesByName","getEntriesByType","now"].every((e=>!!performance[e]))),r}function a(){return!("undefined"==typeof window||!("PerformanceObserver"in window))}function i(){return a()&&PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes("longtask")}n.d(t,{D4:()=>o,bh:()=>a,nX:()=>i})},353385:(e,t,n)=>{"use strict";n.d(t,{W:()=>o,a:()=>a});var r=n(536313);const o=()=>{if("undefined"==typeof document)return{distortedDuration:!1,cleanup(){}};let e="visible"!==document.visibilityState;function t(){"visible"!==document.visibilityState&&(e=!0)}return document.addEventListener("visibilitychange",t),{distortedDuration:e,cleanup(){document.removeEventListener("visibilitychange",t)}}};function a(e,t){if(!(0,r.D4)())return;const n=`[START]: ${e}`,a=`[END]: ${e}`,i=performance.now();performance.mark(n);let s=o();requestAnimationFrame((()=>{requestAnimationFrame((()=>{performance.mark(a),s.cleanup();const r=performance.now()-i;try{performance.measure(e,n,a);const o=performance.getEntriesByName(e).pop();t(o?{duration:o.duration,startTime:o.startTime,distortedDuration:s.distortedDuration}:{duration:r,startTime:i,distortedDuration:s.distortedDuration})}catch(o){t({duration:r,startTime:i,distortedDuration:s.distortedDuration})}performance.clearMeasures(e),performance.clearMarks(n),performance.clearMarks(a)}))}))}},871551:(e,t,n)=>{"use strict";n.d(t,{Ev:()=>i,w6:()=>u});var r=n(667266),o=n(536313),a=n(353385);function i(e,t=1e3,n=60,r){if(!(0,o.nX)())return;const i=performance.now(),s=(0,a.W)();let l,u={startTime:i,duration:0};const d=1e3*n,c=new(r||PerformanceObserver)((e=>{const t=e.getEntries();t.length&&(l=u,u=t[t.length-1])}));c.observe({entryTypes:["longtask"]});const p=()=>{const n=performance.now(),r=u.startTime+u.duration,o=l?l.startTime+l.duration:r,a=n-i>d;return l?u.startTime-o>=t?(c.disconnect(),s.cleanup(),e(o,o-i,a,s.distortedDuration)):n-r>=t||a?(c.disconnect(),s.cleanup(),e(r,r-i,a,s.distortedDuration)):setTimeout(p,t):(c.disconnect(),s.cleanup(),e(o,0,!1,s.distortedDuration))};setTimeout(p,t)}const s={NORMAL:4e4,DEGRADED:6e4},l={NORMAL:5e3,DEGRADED:8e3};function u(e,t,n,o,a,i){const u=n||s.NORMAL,d=o||s.DEGRADED;let c;c=e>=u&&e<d?r.bI.DEGRADED:e>=d?r.bI.BLOCKING:r.bI.NORMAL;const p=a||l.NORMAL,m=i||l.DEGRADED;let h;return h=t>=p&&t<m?r.bI.DEGRADED:t>=m?r.bI.BLOCKING:r.bI.NORMAL,{ttiSeverity:c,ttiFromInvocationSeverity:h}}},679997:(e,t,n)=>{"use strict";n.d(t,{H0:()=>i,MZ:()=>a,Xf:()=>s});var r=n(536313);const o=new Map;function a(e){(0,r.D4)()&&(performance.mark(`${e}::start`),o.set(e,performance.now()))}function i(e,t){if(!(0,r.D4)())return;performance.mark(`${e}::end`);const n=t?o.get(e):void 0;try{performance.measure(e,`${e}::start`,`${e}::end`)}catch(a){}finally{if(t){const r=performance.getEntriesByName(e).pop();r?t(r.duration,r.startTime):n&&t(performance.now()-n,n)}s(e)}}function s(e){(0,r.D4)()&&(o.delete(e),performance.clearMarks(`${e}::start`),performance.clearMarks(`${e}::end`),performance.clearMeasures(e))}},213385:(e,t,n)=>{"use strict";n.d(t,{i:()=>o});var r=n(536313);function o(){if(!(0,r.D4)())return;const e=performance.getEntriesByType("navigation")[0];return e?e.responseEnd:void 0}},542960:(e,t,n)=>{"use strict";n.d(t,{p:()=>r});const r=()=>{try{const{FRONTEND_VERSION:e=""}=window.__buildInfo||{};return"product-fabric.atlassian.net"===window.location.hostname&&e.includes("branch-deploy")}catch(e){return console.warn(e),!1}}},724859:(e,t,n)=>{"use strict";function r(e){let t=[];const n=e.firstChild;return n&&n.forEach((e=>{let n=e.attrs.colwidth||[0];n&&(t=[...t,...n])})),t}function o(e){let t=!1;return e.descendants((e=>{if("tableRow"===e.type.name)return!0;const{colspan:n,rowspan:r}=e.attrs;return(n>1||r>1)&&(t=!0),!1})),t}function a(e){const t=[];return e.forEach((e=>{if("tableRow"===e.type.name){const n=[];e.forEach((e=>n.push(e))),t.push(n)}})),t}function i(e,t,n){if(!t.nodes.tableRow)return!1;let r=e.doc,o=e;const a="before"===n?"nodeBefore":"nodeAfter";for(;o.depth>0;){var i;if((null===(i=o[a])||void 0===i?void 0:i.type)===t.nodes.tableRow)return!0;o=r.resolve(o[n]())}return!1}n.d(t,{Ak:()=>o,To:()=>i,gf:()=>r,oc:()=>a})},326482:(e,t,n)=>{"use strict";n.d(t,{cn:()=>s,p$:()=>l,u9:()=>u});var r=n(615919),o=n(431676);const a=["align","annotationType","extensionKey","extensionType","layout","type","localId","mode","language","timestamp","state","originalWidth","originalHeight","height","width","shortName","level","userType","order","panelType","color","style","isNumberColumnEnabled","colspan","rowspan","colwidth","background"];const i=(e={})=>{let t=Object.assign({},e);return Object.keys(e).filter((e=>!a.includes(e))).forEach((e=>{null!==t[e]?t[e]="":t[e]="null"})),t},s=(e,t,n,r="")=>{const{type:a,marks:i}=e,{unsupportedMark:u,unsupportedNodeAttribute:d}=t.marks,{unsupportedInline:c,unsupportedBlock:p}=t.nodes,m=r.split(" ").pop()||"";if(i.length&&i.forEach((e=>{if(e.type===u){const{originalValue:t}=e.attrs||{},{type:a}=t||{},i={type:a||"",ancestry:r,parentType:m,marks:[],attrs:t.attrs||{}};l(n,o.VJ.UNSUPPORTED_MARK,i)}else if(e.type===d){const{unsupported:t}=e.attrs||{},i={type:a.name||"",ancestry:r,parentType:m,marks:[],attrs:t||{}};l(n,o.VJ.UNSUPPORTED_NODE_ATTRIBUTE,i)}})),a===c||a===p){const{originalValue:t}=e.attrs||{},{marks:i}=t||[],{attrs:s}=t||{},{type:u}=t||{},d={type:u||"",ancestry:r,parentType:m,marks:i||[],attrs:s||{}},p=a===c?o.VJ.UNSUPPORTED_INLINE:o.VJ.UNSUPPORTED_BLOCK;l(n,p,d)}else e.content.forEach((o=>s(o,t,n,function(e,t){const{name:n}=e.type;return t?`${t} ${n}`:n}(e,r))))},l=(e,t,n,a)=>{const s=i(n.attrs),l=((e=[])=>{let t=[];return e.forEach((e=>{if(e.attrs){const n=i(e.attrs);t.push((0,r.Z)((0,r.Z)({},e),{},{attrs:n}))}else t.push((0,r.Z)({},e))})),t})(n.marks),u={type:n.type,ancestry:n.ancestry,parentType:n.parentType,attrs:s,marks:l};e({action:o.om.UNSUPPORTED_CONTENT_ENCOUNTERED,actionSubject:o.Wt.DOCUMENT,actionSubjectId:t,attributes:(0,r.Z)({unsupportedNode:u},!!a&&{errorCode:a}),eventType:o.Ze.TRACK})},u=(e,t,n)=>{((e,t,n,r)=>{t({action:e,actionSubjectId:n,actionSubject:o.Wt.TOOLTIP,eventType:o.Ze.UI,attributes:{unsupportedNodeType:r}})})(o.om.UNSUPPORTED_TOOLTIP_VIEWED,e,t,n)}},306014:(e,t,n)=>{"use strict";n.d(t,{gh:()=>d});var r=n(238304),o=n(431676),a=n(326482);const i="unsupportedNodeAttribute",s=(e,t,n)=>(r,o,a)=>l(r,o,a,e,t,n),l=(e,t,n,r,o,a)=>{if(e&&e.type===i)return e;if(n.isMark)return c(t.meta,"mark");if(n.isNodeAttribute){const n=e&&e.type?e.type:void 0;return{type:i,attrs:{type:{nodeType:n},unsupported:t.meta}}}if(!(e&&r.indexOf(e.type)>-1)){if("MISSING_PROPERTIES"===t.code&&"paragraph"===e.type)return{type:"paragraph",content:[]};if("INVALID_CONTENT_LENGTH"===t.code){if(t.meta&&n.allowUnsupportedBlock&&e.content)return function(e,t,n,r,o){const a=e.meta;"maximum"===a.type&&(t.content=t.content.filter((e=>!!e)).map(((e,t)=>t>=a.requiredLength&&"unsupportedBlock"!==e.type?c(e):n(e,s(r,n,o)).entity)));if("minimum"===a.type){if(0===t.content.length)return c(t);t.content=t.content.filter((e=>!!e)).map((e=>"unsupportedBlock"!==e.type?c(e):e))}return t}(t,e,o,r,a);a&&u(a,t,e)}return n.allowUnsupportedBlock?c(e):n.allowUnsupportedInline?c(e,"inline"):(a&&u(a,t,e),e)}};function u(e,t,n){e&&(0,a.p$)(e,o.VJ.UNSUPPORTED_ERROR,{type:n.type||"",ancestry:n.ancestorHierarchy||"",parentType:n.parentType||"",marks:n.marks||[],attrs:n.attrs||{}},t.code)}const d=(e,t,n)=>{const o=Object.keys(e.nodes),a=Object.keys(e.marks),i=(0,r.s)(o,a,{allowPrivateAttributes:!0}),l={type:"doc",content:[]},{entity:u=l}=i(t,s(a,i,n));return u};function c(e,t="block"){let n;switch(t){case"inline":n="unsupportedInline";break;case"mark":n="unsupportedMark";break;default:n="unsupportedBlock"}return{type:n,attrs:{originalValue:e}}}},891722:(e,t,n)=>{"use strict";n.d(t,{K0:()=>ne,l9:()=>oe,Rr:()=>pe,E2:()=>re});var r={};n.r(r),n.d(r,{PanelType:()=>T.wh,blockCard:()=>U._,blockquote:()=>d.M,blockquoteWithList:()=>d.U,bodiedExtension:()=>j.H,bulletList:()=>c.i,bulletListSelector:()=>c.T,caption:()=>w.V,codeBlock:()=>p.F,codeBlockToJSON:()=>p.a,confluenceJiraIssue:()=>i.G,confluenceUnsupportedBlock:()=>s.S,confluenceUnsupportedInline:()=>l.O,copyPrivateMediaAttributes:()=>N.vD,date:()=>F.h,decisionItem:()=>R.O,decisionList:()=>S.w,decisionListSelector:()=>S.i,doc:()=>u.J,embedCard:()=>K._,emoji:()=>g.r,expand:()=>a.j,expandToJSON:()=>a.a,extendedNestedExpand:()=>G.z,extendedPanel:()=>T.Yy,extension:()=>Z.A,extensionFrame:()=>z.g,getCellAttrs:()=>O.sG,getCellDomAttrs:()=>O.EE,hardBreak:()=>m.l,heading:()=>h.n,image:()=>b.B,inlineCard:()=>M.D,inlineExtension:()=>Y.m,layoutColumn:()=>P.H,layoutSection:()=>$.I,layoutSectionWithSingleColumn:()=>$.C,listItem:()=>A.q,listItemWithTask:()=>A.J,media:()=>N.BC,mediaGroup:()=>I._,mediaInline:()=>C.j,mediaSingle:()=>D.yC,mediaSingleFull:()=>D.T3,mediaSingleSpec:()=>D.g3,mediaSingleToJSON:()=>D.au,mediaSingleWithCaption:()=>D.t2,mediaSingleWithWidthType:()=>D.Dl,mediaToJSON:()=>N.au,mention:()=>_.Pl,mentionToJSON:()=>_.au,multiBodiedExtension:()=>z.Y,nestedExpand:()=>G.K,orderedList:()=>y.dq,orderedListSelector:()=>y.Us,orderedListWithOrder:()=>y.AG,panel:()=>T.Bn,paragraph:()=>f.A,placeholder:()=>B.W,rule:()=>E.j,status:()=>H.i,table:()=>O.Kz,tableBackgroundBorderColor:()=>O.KS,tableBackgroundColorNames:()=>O.XX,tableBackgroundColorPalette:()=>O.R_,tableCell:()=>O.K5,tableCellContentDomSelector:()=>O.Z4,tableCellContentWrapperSelector:()=>O.bu,tableCellSelector:()=>O.fY,tableHeader:()=>O.Rt,tableHeaderSelector:()=>O.Vz,tablePrefixSelector:()=>O.Yf,tableRow:()=>O.RL,tableToJSON:()=>O.oc,tableWithCustomWidth:()=>O.JR,taskItem:()=>x.p,taskList:()=>L.o,taskListSelector:()=>L.K,text:()=>v.f,toJSONTableCell:()=>O.pp,toJSONTableHeader:()=>O.Ae,unknownBlock:()=>k.Z,unsupportedBlock:()=>V.V,unsupportedInline:()=>W.X});var o=n(615919),a=n(738941),i=n(230266),s=n(601159),l=n(881233),u=n(547215),d=n(989724),c=n(440812),p=n(333725),m=n(931662),h=n(561378),E=n(693635),y=n(249618),f=n(530834),g=n(826761),b=n(256579),_=n(93934),A=n(462772),T=n(762855),v=n(301018),k=n(583254),w=n(440524),N=n(713608),I=n(533628),C=n(810971),D=n(188228),O=n(737073),S=n(195487),R=n(107843),L=n(317493),x=n(287374),F=n(148371),B=n(202083),$=n(771374),P=n(4168),M=n(223772),U=n(98655),V=n(866236),W=n(921759),H=n(570990),G=n(33992),K=n(848572),Z=n(179049),Y=n(513184),j=n(155643),z=n(540744);const q=r,X=new Set(Object.keys(q).filter((e=>q[e]&&"inline"===q[e].group)));var J=n(478214),Q=n(312482),ee=n(75119);const te=["fragment","link","em","strong","textColor","strike","subsup","underline","code","confluenceInlineComment","annotation","dataConsumer"],ne=e=>[...e].sort(((e,t)=>te.indexOf(e.type.name)-te.indexOf(t.type.name))),re=(e,t)=>!(!e||!t)&&e.eq(t),oe=(e,t=ee.R4,n="final")=>{const r=pe(e,t,n);return"doc"===r.type?(r.content=ae(r.content),r):null},ae=(e=[])=>e.map((e=>X.has(e.type)?{type:"paragraph",content:[e]}:e)),ie=/^#[0-9a-fA-F]{6}$/,se=/^\//,le=/^#/,ue=(e,t=ee.R4,n="final")=>{const r=[];let o=!1;for(let a=0;a<e.content.length;a++){const i=e.content[a],s=!(i.content&&i.content.length);a>0&&(o?r.push({type:"text",text:" "}):r.push({type:"hardBreak"})),s?r.push(pe(i,t,n)):r.push(...ue(i,t,n)),o=s}return r},de=e=>{const{attrs:t={},content:n,text:r,type:o}=e;if(!n||!n.length){const e={type:"text",text:r||t.text||`[${o}]`},{textUrl:n}=t;return n&&(0,J.w6)(n)&&(e.marks=[{type:"link",attrs:{href:n}}]),e}return{type:"unknownBlock",content:ue(e)}},ce=(e,t="final")=>e&&e.length>0?e.reduce(((e,n)=>{const r=me(n,t);return r&&e.push(r),e}),[]):e,pe=(e,t=ee.R4,n="final")=>{const{attrs:r,marks:a,text:i,type:s}=e;let{content:l}=e;const u={attrs:r,marks:a,text:i,type:s};if(l&&(u.content=l=((e,t=ee.R4,n="final")=>e.map((e=>pe(e,t,n))))(l,t,n)),!t.nodes[s])return de(u);if(s)switch(s){case"doc":{const{version:t}=e;if(t&&l&&l.length)return{type:s,content:l};break}case"codeBlock":return l&&(l=l.reduce(((e,t)=>("text"===t.type&&e.push({type:t.type,text:t.text}),e)),[])),r&&r.language?{type:s,attrs:r,content:l,marks:a}:{type:s,content:l,marks:a};case"date":if(r&&r.timestamp)return{type:s,attrs:r};break;case"status":if(r&&r.text&&r.color)return{type:s,attrs:r};break;case"emoji":if(r&&r.shortName)return{type:s,attrs:r};break;case"inlineExtension":case"extension":if(r&&r.extensionType&&r.extensionKey)return{type:s,attrs:r};break;case"inlineCard":case"blockCard":if(r&&(r.datasource&&!r.url||r.url&&(0,J.w6)(r.url)||r.data&&r.data.url&&(0,J.w6)(r.data.url)))return{type:s,attrs:r};break;case"embedCard":if(r&&(r.url&&(0,J.w6)(r.url)||r.data&&r.data.url&&(0,J.w6)(r.data.url))&&r.layout)return{type:s,attrs:r};break;case"bodiedExtension":case"multiBodiedExtension":if(r&&r.extensionType&&r.extensionKey&&l)return{type:s,attrs:r,content:l};break;case"extensionFrame":if(l)return{type:s,attrs:r,content:l};break;case"hardBreak":case"rule":return{type:s};case"caption":case"bulletList":case"blockquote":if(l)return{type:s,content:l};break;case"mediaInline":{let e="",t=[];if(r){const{id:n,collection:o}=r;e=n,t=o}if(e&&t)return{type:s,attrs:r,marks:a};break}case"media":{let e="",t="",o=[],i="";if(r){const{id:n,collection:a,type:s,url:l}=r;e=n,t=s,o=a,i=l}if("external"===t&&i){const e={type:t,url:i,width:r.width,height:r.height};return r.alt&&(e.alt=r.alt),{type:s,attrs:e}}if(e&&t){const i={type:t,id:e,collection:o};r.width&&(i.width=r.width),r.height&&(i.height=r.height),r.alt&&(i.alt=r.alt);const l=ce(a,n);return l?{type:s,attrs:i,marks:l}:{type:s,attrs:i}}break}case"mediaGroup":if(Array.isArray(l)&&!l.some((e=>"media"!==e.type)))return{type:s,content:l};break;case"mediaSingle":{const e=Array.isArray(l)&&1===l.length&&"media"===l[0].type,t=Array.isArray(l)&&2===l.length&&"media"===l[0].type&&"caption"===l[1].type;if(e||t)return{type:s,attrs:r,content:l,marks:ce(a,n)};break}case"mention":{let e,t,n="";if(r){const{text:o,displayName:a,id:i,accessLevel:s}=r;n=o||a,e=i,t=s}if(n||(n=i||"@unknown"),n&&e){const r={type:s,attrs:{id:e,text:n,accessLevel:""}};return t&&(r.attrs.accessLevel=t),r}break}case"paragraph":return a?{type:s,content:l||[],marks:a}:{type:s,content:l||[]};case"text":{let{marks:e}=u;if(i)return e?{type:s,text:i,marks:ce(e,n)}:{type:s,text:i};break}case"heading":if(r){const{level:e}=r;if(e&&((e,t,n)=>e>=t&&e<=n)(e,1,6))return a?{type:s,content:l,marks:a,attrs:{level:e}}:{type:s,content:l,attrs:{level:e}}}break;case"orderedList":if(l)return{type:s,content:l,attrs:{order:r&&r.order}};break;case"listItem":if(l)return{type:s,content:ae(l)};break;case"panel":if(r&&l){const{panelType:e}=r;if(Object.values(T.wh).includes(e))return{type:s,attrs:r,content:l}}break;case"layoutSection":if(l)return{type:s,marks:a,content:l};break;case"layoutColumn":if(r&&l&&r.width>0&&r.width<=100)return{type:s,content:l,attrs:r};break;case"decisionList":case"taskList":return{type:s,content:l,attrs:{localId:r&&r.localId||(0,Q.R)()}};case"decisionItem":return{type:s,content:l,attrs:{localId:r&&r.localId||(0,Q.R)(),state:r&&r.state||"DECIDED"}};case"taskItem":return{type:s,content:l,attrs:{localId:r&&r.localId||(0,Q.R)(),state:r&&r.state||"TODO"}};case"table":if(Array.isArray(l)&&l.length>0&&!l.some((e=>"tableRow"!==e.type)))return"stage0"===n?{type:s,content:l,attrs:(0,o.Z)((0,o.Z)({},r),{},{localId:(null==r?void 0:r.localId)||(0,Q.R)(),width:(null==r?void 0:r.width)||null})}:{type:s,content:l,attrs:r};break;case"tableRow":if(Array.isArray(l)&&l.length>0&&!l.some((e=>"tableCell"!==e.type&&"tableHeader"!==e.type)))return{type:s,content:l};break;case"tableCell":case"tableHeader":if(l){const e={};return r&&(r.colspan&&r.colspan>1&&(e.colspan=r.colspan),r.rowspan&&r.rowspan>1&&(e.rowspan=r.rowspan),r.background&&(e.background=r.background),r.colwidth&&Array.isArray(r.colwidth)&&(e.colwidth=r.colwidth)),{type:s,content:ae(l),attrs:r?e:void 0}}break;case"image":if(r&&r.src)return{type:s,attrs:r};break;case"placeholder":if(r&&void 0!==r.text)return{type:s,attrs:r};break;case"expand":case"nestedExpand":return{type:s,attrs:r,content:l,marks:a}}return de(u)},me=(e,t="final")=>{const{attrs:n,type:r}=e;if(r)switch(r){case"code":case"em":case"strike":case"strong":case"underline":return{type:r};case"link":if(n){const{href:e,url:t,__confluenceMetadata:o}=n;let a=e||t;!a||-1!==a.indexOf(":")||se.test(a)||le.test(a)||(a=`http://${a}`);const i={href:a};if(o&&(i.__confluenceMetadata=o),a&&(0,J.w6)(a))return{type:r,attrs:i}}break;case"subsup":if(n&&n.type){const e=n.type;if((e=>"sub"===e||"sup"===e)(e))return{type:r,attrs:{type:e}}}break;case"textColor":if(n&&ie.test(n.color))return{type:r,attrs:n};break;case"annotation":case"border":return{type:r,attrs:n}}if("stage0"===t)switch(r){case"confluenceInlineComment":case"dataConsumer":case"fragment":case"border":return{type:r,attrs:n}}return null}},723759:(e,t,n)=>{"use strict";n.d(t,{ES:()=>o,N1:()=>a});var r=n(121834);function o(e){const t=i[e.toUpperCase()];return t?t.token:void 0}function a(e){const t=i[e.toUpperCase()];return t?t.getValue(e):void 0}const i={"#DEEBFF":{getValue:e=>(0,r.Z)("color.background.accent.blue.subtlest",e),token:"var(--ds-background-accent-blue-subtlest, #DEEBFF)"},"#B3D4FF":{getValue:e=>(0,r.Z)("color.background.accent.blue.subtler",e),token:"var(--ds-background-accent-blue-subtler, #B3D4FF)"},"#4C9AFF":{getValue:e=>(0,r.Z)("color.background.accent.blue.subtle",e),token:"var(--ds-background-accent-blue-subtle, #4C9AFF)"},"#E6FCFF":{getValue:e=>(0,r.Z)("color.background.accent.teal.subtlest",e),token:"var(--ds-background-accent-teal-subtlest, #E6FCFF)"},"#B3F5FF":{getValue:e=>(0,r.Z)("color.background.accent.teal.subtler",e),token:"var(--ds-background-accent-teal-subtler, #B3F5FF)"},"#79E2F2":{getValue:e=>(0,r.Z)("color.background.accent.teal.subtle",e),token:"var(--ds-background-accent-teal-subtle, #79E2F2)"},"#E3FCEF":{getValue:e=>(0,r.Z)("color.background.accent.green.subtlest",e),token:"var(--ds-background-accent-green-subtlest, #E3FCEF)"},"#ABF5D1":{getValue:e=>(0,r.Z)("color.background.accent.green.subtler",e),token:"var(--ds-background-accent-green-subtler, #ABF5D1)"},"#57D9A3":{getValue:e=>(0,r.Z)("color.background.accent.green.subtle",e),token:"var(--ds-background-accent-green-subtle, #57D9A3)"},"#FFFAE6":{getValue:e=>(0,r.Z)("color.background.accent.yellow.subtlest",e),token:"var(--ds-background-accent-yellow-subtlest, #FFFAE6)"},"#FFF0B3":{getValue:e=>(0,r.Z)("color.background.accent.yellow.subtler",e),token:"var(--ds-background-accent-yellow-subtler, #FFF0B3)"},"#FFC400":{getValue:e=>(0,r.Z)("color.background.accent.orange.subtle",e),token:"var(--ds-background-accent-orange-subtle, #FFC400)"},"#FFEBE6":{getValue:e=>(0,r.Z)("color.background.accent.red.subtlest",e),token:"var(--ds-background-accent-red-subtlest, #FFEBE6)"},"#FFBDAD":{getValue:e=>(0,r.Z)("color.background.accent.red.subtler",e),token:"var(--ds-background-accent-red-subtler, #FFBDAD)"},"#FF8F73":{getValue:e=>(0,r.Z)("color.background.accent.red.subtle",e),token:"var(--ds-background-accent-red-subtle, #FF8F73)"},"#EAE6FF":{getValue:e=>(0,r.Z)("color.background.accent.purple.subtlest",e),token:"var(--ds-background-accent-purple-subtlest, #EAE6FF)"},"#C0B6F2":{getValue:e=>(0,r.Z)("color.background.accent.purple.subtler",e),token:"var(--ds-background-accent-purple-subtler, #C0B6F2)"},"#998DD9":{getValue:e=>(0,r.Z)("color.background.accent.purple.subtle",e),token:"var(--ds-background-accent-purple-subtle, #998DD9)"},"#FFFFFF":{getValue:e=>(0,r.Z)("elevation.surface",e),token:"var(--ds-surface, #FFFFFF)"},"#F4F5F7":{getValue:e=>(0,r.Z)("color.background.accent.gray.subtlest",e),token:"var(--ds-background-accent-gray-subtlest, #F4F5F7)"},"#B3BAC5":{getValue:e=>(0,r.Z)("color.background.accent.gray.subtle",e),token:"var(--ds-background-accent-gray-subtle, #B3BAC5)"}}},883162:(e,t,n)=>{"use strict";function r(e){return o[e.toUpperCase()]}n.d(t,{E:()=>r});const o={"#B3D4FF":"var(--ds-background-accent-blue-subtler, #B3D4FF)","#4C9AFF":"var(--ds-icon-accent-blue, #4C9AFF)","#0747A6":"var(--ds-text-accent-blue, #0747A6)","#B3F5FF":"var(--ds-background-accent-teal-subtler, #B3F5FF)","#00B8D9":"var(--ds-icon-accent-teal, #00B8D9)","#008DA6":"var(--ds-text-accent-teal, #008DA6)","#ABF5D1":"var(--ds-background-accent-green-subtler, #ABF5D1)","#36B37E":"var(--ds-icon-accent-green, #36B37E)","#006644":"var(--ds-text-accent-green, #006644)","#FFF0B3":"var(--ds-background-accent-yellow-subtler, #FFF0B3)","#FFC400":"var(--ds-background-accent-orange-subtle, #FFC400)","#FF991F":"var(--ds-icon-accent-orange, #FF991F)","#FFBDAD":"var(--ds-background-accent-red-subtler, #FFBDAD)","#FF5630":"var(--ds-icon-accent-red, #FF5630)","#BF2600":"var(--ds-text-accent-red, #BF2600)","#EAE6FF":"var(--ds-background-accent-purple-subtler, #EAE6FF)","#6554C0":"var(--ds-icon-accent-purple, #6554C0)","#403294":"var(--ds-text-accent-purple, #403294)","#FFFFFF":"var(--ds-text-inverse, #FFFFFF)","#97A0AF":"var(--ds-icon-accent-gray, #97A0AF)","#172B4D":"var(--ds-text, #172B4D)"}},794256:(e,t,n)=>{"use strict";n.d(t,{u:()=>o});var r=n(39030);const o=({background:e,width:t="var(--ds-space-100, 8px)",leftCoverWidth:n,rightCoverWidth:o})=>{const a=n||t,i=o||t;return r.iv`
/* shadow cover left */
  linear-gradient(
    to right,
    ${e} ${a},
    transparent ${a}
  ),
/* shadow cover background left */
  linear-gradient(
    to right,
    ${"var(--ds-surface-raised, transparent)"} ${a},
    transparent ${a}
  ),
/* shadow cover right */
  linear-gradient(
    to left,
    ${e} ${i},
    transparent ${i}
  ),
/* shadow cover background right */
  linear-gradient(
    to left,
    ${"var(--ds-surface-raised, transparent)"} ${i},
    transparent ${i}
  ),
/* overflow shadow right spread */
  linear-gradient(
    to left,
    ${"var(--ds-shadow-overflow-spread, rgba(9, 30, 66, 0.13))"} 0,
    ${"var(--ds-UNSAFE-transparent, rgba(99, 114, 130, 0))"}  ${t}
  ),
  /* overflow shadow right perimeter */
  linear-gradient(
    to left,
    ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0,
    ${"var(--ds-UNSAFE-transparent, transparent)"}  ${t}
  ),
  /* overflow shadow left spread */
  linear-gradient(
    to right,
    ${"var(--ds-shadow-overflow-spread, rgba(9, 30, 66, 0.13))"} 0,
    ${"var(--ds-UNSAFE-transparent, rgba(99, 114, 130, 0))"}  ${t}
  ),
  /* overflow shadow left perimeter */
  linear-gradient(
    to right,
    ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0,
    ${"var(--ds-UNSAFE-transparent, transparent)"}  ${t}
  )
`}},867153:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});const r="media-file-card-view"},986487:(e,t,n)=>{"use strict";n.d(t,{B0:()=>u,BX:()=>i,D0:()=>x,EB:()=>m,EG:()=>h,Ez:()=>O,Ig:()=>l,Kk:()=>T,N2:()=>L,NP:()=>N,NQ:()=>a,TM:()=>S,Tr:()=>w,Yr:()=>C,Z3:()=>p,a1:()=>D,au:()=>s,bw:()=>I,iV:()=>k,om:()=>_,qv:()=>v,r3:()=>F,xH:()=>R});var r=n(443998),o=n(731462),a=e=>t=>{const n=w(e)(t.selection);return n?b(n.pos)(t):t},i=(e,t)=>n=>{Array.isArray(e)||(e=[e]);for(let r=0,o=e.length;r<o;r++){const o=w(e[r])(n.selection);if(o){const e=f(o.pos,t)(n);if(e!==n)return e}}return n},s=e=>{if(h(e.selection)){const t=e.selection.$from.pos,n=e.selection.$to.pos;return y(e.delete(t,n))}return e},l=e=>t=>{if(h(t.selection)){const{$from:n,$to:a}=t.selection;if(e instanceof o.HY&&n.parent.canReplace(n.index(),n.indexAfter(),e)||e instanceof o.NB&&n.parent.canReplaceWith(n.index(),n.indexAfter(),e.type))return y(t.replaceWith(n.pos,a.pos,e).setSelection(new r.qv(t.doc.resolve(n.pos))))}return t},u=(e,t=1)=>n=>{const o=r.Y1.findFrom(n.doc.resolve(e),t,!0);return o?n.setSelection(o):n},d=e=>Boolean(e instanceof o.NB&&e.type&&e.type.spec.selectable),c=(e,t,n)=>(e=>d(e)&&e.type.isLeaf)(e)?n.setSelection(new r.qv(n.doc.resolve(t))):u(t)(n),p=(e,t,n)=>r=>{const o="number"==typeof t,{$from:a}=r.selection,s=o?r.doc.resolve(t):h(r.selection)?r.doc.resolve(a.pos+1):a,{parent:u}=s;if(h(r.selection)&&n){if(r!==(r=l(e)(r)))return r}if(A(u)){if(r!==(r=i(u.type,e)(r))){const t=d(e)?s.before(s.depth):s.pos;return c(e,t,r)}}if(_(s,e)){r.insert(s.pos,e);const t=o?s.pos:d(e)?r.selection.$anchor.pos-1:r.selection.$anchor.pos;return y(c(e,t,r))}for(let t=s.depth;t>0;t--){const n=s.after(t),o=r.doc.resolve(n);if(_(o,e))return r.insert(n,e),y(c(e,n,r))}return r},m=e=>{const t=O(e.selection);return"number"==typeof t?b(t)(e):e},h=e=>e instanceof r.qv,E=(e,t)=>Array.isArray(e)&&e.indexOf(t.type)>-1||t.type===e,y=e=>Object.assign(Object.create(e),e).setTime(Date.now()),f=(e,t)=>n=>{const r=n.doc.nodeAt(e),o=n.doc.resolve(e);if(!r)return n;if(g(o,t)){const o=(n=n.replaceWith(e,e+r.nodeSize,t)).selection.$from.pos-1;return n=u(Math.max(o,0),-1)(n),n=u(n.selection.$from.start())(n),y(n)}return n},g=(e,t)=>{const n=e.node(e.depth);return n&&n.type.validContent(t instanceof o.HY?t:o.HY.from(t))},b=e=>t=>{const n=t.doc.nodeAt(e);return n?y(t.delete(e,e+n.nodeSize)):t},_=(e,t)=>{const n=e.index();return t instanceof o.HY?e.parent.canReplace(n,n,t):t instanceof o.NB&&e.parent.canReplaceWith(n,n,t.type)},A=e=>!e||"paragraph"===e.type.name&&2===e.nodeSize,T=e=>({$from:t,$to:n},r=!1)=>{if(!r||t.sameParent(n))return v(t,e);{let r=Math.min(t.depth,n.depth);for(;r>=0;){const o=t.node(r);if(n.node(r)===o&&e(o))return{pos:r>0?t.before(r):0,start:t.start(r),depth:r,node:o};r-=1}}},v=(e,t)=>{for(let n=e.depth;n>0;n--){const r=e.node(n);if(t(r))return{pos:n>0?e.before(n):0,start:e.start(n),depth:n,node:r}}},k=e=>t=>!!T(e)(t),w=e=>t=>T((t=>E(e,t)))(t),N=(e,t)=>v(e,(e=>E(t,e))),I=e=>t=>k((t=>E(e,t)))(t),C=(e,t)=>n=>((e,t)=>n=>{const r=T(e)(n);if(r)return S(r.pos,t)})((t=>E(e,t)),t)(n),D=e=>t=>{if(h(t)){const{node:n,$from:r}=t;if(E(e,n))return{node:n,start:r.start(),pos:r.pos,depth:r.depth}}},O=e=>{const{nodeBefore:t}=e.$from,n=r.Y1.findFrom(e.$from,-1);if(n&&t){const e=w(t.type)(n);return e?e.pos:n.$from.pos}},S=(e,t)=>{const n=t(e),r=n.node.childNodes[n.offset];return n.node.nodeType===Node.TEXT_NODE&&n.node.parentNode?n.node.parentNode:r&&r.nodeType!==Node.TEXT_NODE?r:n.node},R=(e,t=!0)=>{if(!e)throw new Error('Invalid "node" parameter');const n=[];return e.descendants(((e,r)=>{if(n.push({node:e,pos:r}),!t)return!1})),n},L=(e,t,n=!0)=>{if(!e)throw new Error('Invalid "node" parameter');if(!t)throw new Error('Invalid "predicate" parameter');return R(e,n).filter((e=>t(e.node)))},x=(e,t,n=!0)=>L(e,(e=>e.type===t),n),F=(e,t)=>!!x(e,t).length}}]);
//# sourceMappingURL=42505.Sf6DJkQyIV.js.map