"use strict";(self._cf=self._cf||[]).push([[25520],{547110:(e,t,a)=>{a.d(t,{F:()=>p});var r=a(840506),o=a(167347),s=a(614889),n=a(582463),l=a(779076);const i=l.ZP`query FeatureDiscoveryQuery{featureDiscovery{pluginKey featureKey}}`,d=l.ZP`mutation MarkFeatureDiscoveredMutation($featureKey:String!$pluginKey:String!){markFeatureDiscovered(featureKey:$featureKey pluginKey:$pluginKey){pluginKey featureKey}}`,c=(0,s.j)("useFeatureDiscovery"),u="com.atlassian.confluence.plugins.confluence-frontend-support",m=(e,{data:t})=>{const a=null==t?void 0:t.markFeatureDiscovered,r=e.readQuery({query:i});a&&null!=r&&r.featureDiscovery&&e.writeQuery({query:i,data:{featureDiscovery:r.featureDiscovery.concat(a)}})},g=()=>{},p=(e,t)=>{var a;const{isLoggedIn:s}=(0,n.D)(),l=!s||t,{data:p,loading:b,error:y}=(0,o.aM)(i,{skip:l}),[f,{loading:E,error:h}]=(0,o.Db)(d,{variables:{featureKey:e,pluginKey:u},update:m}),T=y||h,v=!(b||E||T||null!=p&&null!==(a=p.featureDiscovery)&&void 0!==a&&a.some((t=>(null==t?void 0:t.pluginKey)===u&&(null==t?void 0:t.featureKey)===e))),Z=(0,r.useCallback)((()=>{v&&f().catch((()=>{}))}),[v,f]);if(l)return[!1,g,void 0];const k=v||(e=>{try{if(sessionStorage.getItem(`featureDiscoveryOverride-${e}`))return!0}catch(t){c.error(t)}return!1})(e);return[k,Z,T]}},718549:(e,t,a)=>{a.d(t,{u:()=>C,H:()=>N});var r=a(615919),o=a(872342),s=a(840506),n=a(920839),l=a(767001),i=a(142807),d=a(832179);const c=a.p+"2U7EaEAz7_.svg",u=a.p+"dkG6LOcTPU.svg",m=a.p+"_tIbzu4egg.svg",g=["as","style"],p=["as","style"],b=["as","style"],y=["as","style"],f=["as","style"],E=["as","style"];a(66777),a(546529),a(747962),a(413076),a(357290),a(692565),a(650067),a(696247),a(797513),a(711072),a(451176),a(233438),a(354326),a(260928);const h=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,g);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_ytujz3":(0,n.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,l.Z)(["_1bsb1pna _1e0c1txw _19pk1bgn _otyr1bgn",d.className])}))}));const T=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,p);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_ytujz3":(0,n.Z)("var(--ds-space-150, 12px)"),"--_1g2og9c":(0,n.Z)("var(--ds-space-200, 16px)")}),ref:t,className:(0,l.Z)(["_ca0q1bgn _u5f31ggp",d.className])}))}));const v=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,b);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_1g2og9c":(0,n.Z)("var(--ds-space-200, 16px)"),"--_1nvt7kj":(0,n.Z)("var(--ds-space-050, 4px)")}),ref:t,className:(0,l.Z)(["_1bsb1ylp _u5f31ggp _ca0q16re",d.className])}))}));const Z=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,i=(0,o.Z)(e,y);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:n,ref:t,className:(0,l.Z)(["_1bsb1dty _2lx21bp4",i.className])}))}));const k=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,i=(0,o.Z)(e,f);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:n,ref:t,className:(0,l.Z)(["_1wybdlk8 _zg8l4jg8 _k48p1fw0",i.className])}))}));const _=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:n}=e,i=(0,o.Z)(e,E);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:n,ref:t,className:(0,l.Z)(["_1wybdlk8 _zg8l4jg8 _k48p1nn1",i.className])}))}));let C=function(e){return e[e.CHECKED=0]="CHECKED",e[e.UNCHECKED=1]="UNCHECKED",e[e.NOT_RENDERED=2]="NOT_RENDERED",e}({});const N=({img:e,darkImg:t,title:a,bodyText:o,checkIconStatus:n=C.NOT_RENDERED})=>s.createElement(h,null,n===C.UNCHECKED&&s.createElement(T,null,s.createElement(d.Z,{src:c,srcDark:m,testId:"unchecked-icon"})),n===C.CHECKED&&s.createElement(T,null,s.createElement(d.Z,{src:u,testId:"checked-icon"})),s.createElement(v,null,s.createElement(d.Z,{src:e,srcDark:t})),s.createElement(Z,null,s.createElement(k,null,s.createElement(i.Z,(0,r.Z)({},a))),s.createElement(_,null,s.createElement(i.Z,(0,r.Z)({},o)))));N.displayName="ListItem"},834514:(e,t,a)=>{a.d(t,{m:()=>i,p:()=>l});var r=a(840506),o=a(293330),s=a(486889),n=a(288819);let l=function(e){return e.HAS_PAYMENT="hasPayment",e.NO_PAYMENT="noPayment",e.END_USER="endUser",e}({});const i=({id:e,source:t,pillType:a})=>{const[{isEnabled:l},{update:i}]=(0,n.A)(),{createAnalyticsEvent:d}=(0,s._)();return r.createElement(o.Z,{id:e,isChecked:l,onChange:async()=>{d({type:"sendUIEvent",data:{action:"clicked",actionSubject:"toggle",actionSubjectId:"premiumTrialOnboardingToggle",attributes:{prevState:l,currentState:!l,pillType:a||null},source:t}}).fire(),await i()}})};i.displayName="PremiumFeatureHighlightToggle"},369623:(e,t,a)=>{a.r(t),a.d(t,{PremiumTrialOnboardingModal:()=>Ce,TriggerFrom:()=>ke});var r=a(615919),o=a(872342),s=a(840506),n=a(767001),l=a(920839),i=a(93972),d=a(142807),c=a(16728),u=a(332799),m=a(558877),g=a(832179),p=a(587499),b=a(884185),y=a(555687),f=a(486889),E=a(317979),h=a(461889),T=a(9019),v=a(846313),Z=a(547110),k=a(516012),_=a(533768);const C=a.p+"tTqolAS-JQ.svg",N=a.p+"3GA5pghAsW.svg",I=a.p+"lv6-j7qOh_.svg",A=a.p+"zas16XP_1E.svg",S=a.p+"ImJ1uo2U2M.svg",x=a.p+"RlBUjAkz3y.svg",O=a.p+"HrYkhk_7Ro.svg",D=a.p+"tXt_LyAtWl.svg",M=a.p+"PeyOk1QeUj.svg",w=a.p+"VGKOogAnH7.svg",R=a.p+"_ZuFiHfnFe.svg";var P=a(718549),L=a(834514),U=a(364754),B=a(267884),F=a(821653),H=a(315884),z=a(582463);const K=["as","style"],j=["as","style"];a(563952),a(364928),a(234369),a(280517),a(941663),a(357290),a(354326);const $=(0,i.defineMessages)({questionTitleHalfwayThroughTrial:{id:"premium-onboarding.question-halfway-through-trial.title.pto2",defaultMessage:"What do you think of Premium features so far?"},usefulButton:{id:"premium-onboarding.useful.button.pto2",defaultMessage:"👍 Useful"},notUsefulButton:{id:"premium-onboarding.not-useful.button.pto2",defaultMessage:"👎 Not useful"}}),G=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,K);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_h7os2z":(0,l.Z)("var(--ds-space-100, 8px)"),"--_1g2og9c":(0,l.Z)("var(--ds-space-200, 16px)"),"--_ytujz3":(0,l.Z)("var(--ds-space-150, 12px)"),"--_1e41l3t":(0,l.Z)("var(--ds-background-selected, #E9F2FF)")}),ref:t,className:(0,n.Z)(["_1e0c1txw _2lx21bp4 _1yt41htk _zulp1bgn _2rko14y2 _11q7s8qc",d.className])}))}));const V=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:l}=e,i=(0,o.Z)(e,j);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1e0c1o8l",i.className])}))}));const X=({stopShowingSurvey:e,totalFeaturesUsed:t,trialDaysLeft:a,isSiteAdmin:o,pto2Attributes:n})=>{const{createAnalyticsEvent:l}=(0,f._)(),{activationId:i}=(0,z.D)();(0,s.useEffect)((()=>{l({type:"sendUIEvent",data:{action:"rendered",actionSubject:"premFeaturesSurvey",source:"premiumTrialOnboardingModal",attributes:(0,r.Z)({trialDaysLeft:a,numPremiumFeaturesUsed:t,activationId:i,isSiteAdmin:o},n)}}).fire()}),[l,t,a,o,i,n]);const c=(0,s.useCallback)((o=>{e(),l({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"premFeaturesSurvey",source:"premiumTrialOnboardingModal",attributes:(0,r.Z)({activationId:i,trialDaysLeft:a,numPremiumFeaturesUsed:t,usefulnessFeedback:o},n)}}).fire()}),[e,l,i,a,t,n]);return s.createElement(G,null,s.createElement(u.Z,{variant:"xsmall",as:"h2"},s.createElement(d.Z,(0,r.Z)({},$.questionTitleHalfwayThroughTrial))),s.createElement(V,null,s.createElement(H.Z,null,s.createElement(y.Z,{appearance:"primary",onClick:()=>c("yes")},s.createElement(d.Z,(0,r.Z)({},$.usefulButton))),s.createElement(y.Z,{onClick:()=>c("no"),appearance:"default"},s.createElement(d.Z,(0,r.Z)({},$.notUsefulButton))))))};X.displayName="PremiumTrialOnboardingSurvey";var Y=a(288213);const q=["as","style"],W=["as","style"],Q=["as","style"],J=["as","style"],ee=["as","style"],te=["as","style"],ae=["as","style"],re=["as","style"],oe=["as","style"],se=["as","style"],ne=["as","style"],le=["as","style"],ie=["as","style"];a(209759),a(60239),a(603965),a(32909),a(273639),a(75245),a(999258),a(66777),a(747962),a(357290),a(867611),a(520700),a(590437),a(493644),a(472918),a(6527),a(60795),a(351849),a(413076),a(99276),a(5145),a(784068),a(967746),a(643600),a(355316),a(588826),a(31155),a(354326);const de=(0,i.defineMessages)({modalTitle:{id:"premium-onboarding.modal.title",defaultMessage:"Welcome to your Premium trial"},modalBodyText:{id:"premium-onboarding.modal.body.text",defaultMessage:"Explore Confluence’s most powerful features"},modalBodyTextPTO2:{id:"premium-onboarding.modal.body.text.pto2",defaultMessage:"Get started by exploring our 5 most popular features."},modalTitleBeginningOfTrial:{id:"premium-onboarding.modal-beginning-of-trial.title.pto2",defaultMessage:"Your Premium feature guide"},modalTitleHalfwayThroughTrial:{id:"premium-onboarding.modal-halfway-through-trial.title.pto2",defaultMessage:"You have {daysLeft, plural, one {# day} other {# days}} left on your Premium trial 🎉"},modalBodyTextBeginningOfTrial:{id:"premium-onboarding.modal-beginning-of-trial.body.text.pto2",defaultMessage:"Features will get a checkmark once you’ve used them."},modalBodyTextHalfwayThroughTrialSentence1:{id:"premium-onboarding.modal-halfway-through-trial.body.text.sentence1.pto2",defaultMessage:"You’ve used <b>{count}</b> of Premium’s most popular features."},modalBodyTextHalfwayThroughTrialSentence2:{id:"premium-onboarding.modal-halfway-through-trial.body.text.sentence2.pto2",defaultMessage:"Get the most out of your trial by exploring features you haven’t tried yet."},modalBodyTextHalfwayThroughTrialSentence3:{id:"premium-onboarding.modal-halfway-through-trial.body.text.sentence3.pto2",defaultMessage:"You’ve used <b>all</b> of Premium’s most popular features."},toggleTitle:{id:"premium-onboarding.toggle.title",defaultMessage:"Highlight premium features in the Confluence"},toggleTitlePTO2:{id:"premium-onboarding.toggle.title.pto2",defaultMessage:"Highlight Premium features in Confluence"},toggleBodyText:{id:"premium-onboarding.toggle.body.text",defaultMessage:"We’ll help you identify Premium features with a label."},buttonText:{id:"premium-onboarding.button.text",defaultMessage:"Explore features"},analyticsTitle:{id:"premium-onboarding.analytics.title",defaultMessage:"Analytics"},analyticsBodyText:{id:"premium-onboarding.analytics.body.text",defaultMessage:"View content with the highest engagement and determine what needs to be re-shared or updated."},analyticsBodyTextPTO2:{id:"premium-onboarding.analytics.body.text.pto2",defaultMessage:"See user engagement and views at the site, space, and page level."},teamCalendarsTitle:{id:"premium-onboarding.team-calendars.title",defaultMessage:"Team calendars"},teamCalendarsBodyText:{id:"premium-onboarding.team-calendars.body.text",defaultMessage:"Keep one single source of truth for your team’s schedules and due dates."},whiteboardTitle:{id:"premium-onboarding.whiteboard.title",defaultMessage:"Unlimited whiteboards"},unlimitedStorageAndWhiteboardsTitle:{id:"premium-onboarding.unlimited-storage-and-whiteboards.title.pto2",defaultMessage:"Unlimited storage and whiteboards"},whiteboardBodyText:{id:"premium-onboarding.whiteboard.body.text",defaultMessage:"Never run out of space to turn ideas into actions."},automationTitle:{id:"premium-onboarding.automation.title",defaultMessage:"Automation"},automationBodyText:{id:"premium-onboarding.automation.body.text",defaultMessage:"Save time by creating rules to change a page status, create a Jira task, and more."},advancedPermissionsTitle:{id:"premium-onboarding.advanced.permissions.title",defaultMessage:"Advanced permissions"},advancedPermissionsBodyText:{id:"premium-onboarding.advanced.permissions.body.text",defaultMessage:"Inspect permissions to make sure your team always has the right level of access."},advancedPermissionsBodyTextPTO2:{id:"premium-onboarding.advanced.permissions.body.text.pto2",defaultMessage:"Review permission-related issues and make sure your team has proper access to content."}}),ce=(0,s.forwardRef)(((e,t)=>{let{as:a="span",style:l}=e,i=(0,o.Z)(e,q);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1e0c1txw _2lx2vrvc",i.className])}))}));const ue=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:l}=e,i=(0,o.Z)(e,W);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1bsb1wdt _uhwn1ris",i.className])}))}));const me=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,Q);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_ifaqne":(0,l.Z)(`var(--ds-text-inverse, ${c.N0})`)}),ref:t,className:(0,n.Z)(["_1bsbdgin _bfhkkx2c",d.className])}))}));const ge=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,J);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_1ei4yc8":(0,l.Z)("var(--ds-space-500, 40px)"),"--_153arrb":(0,l.Z)("var(--ds-space-300, 24px)")}),ref:t,className:(0,n.Z)(["_u5f325va _n3td100u _19bv25va",d.className])}))}));const pe=(0,s.forwardRef)(((e,t)=>{let{as:a=u.Z,style:i}=e,d=(0,o.Z)(e,ee);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_h7os2z":(0,l.Z)("var(--ds-space-100, 8px)")}),ref:t,className:(0,n.Z)(["_1wybdlk8 _19pk1xra",d.className])}))}));const be=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,te);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_1nvt7kj":(0,l.Z)("var(--ds-space-050, 4px)"),"--_1g2og9c":(0,l.Z)("var(--ds-space-200, 16px)")}),ref:t,className:(0,n.Z)(["_u5f316re _ca0q1ggp _y3gnusic _uhwn1ris",d.className])}))}));const ye=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,ae);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_153arrb":(0,l.Z)("var(--ds-space-300, 24px)")}),ref:t,className:(0,n.Z)(["_19pk100u _otyr100u",d.className])}))}));const fe=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:l}=e,i=(0,o.Z)(e,re);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1bsb1osq _vchh1g6k _y3gnusic",i.className])}))}));const Ee=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,oe);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_153arrb":(0,l.Z)("var(--ds-space-300, 24px)")}),ref:t,className:(0,n.Z)(["_1bsb1osq _vchh1g6k _1e0c1txw _otyr100u",d.className])}))}));const he=(0,s.forwardRef)(((e,t)=>{let{as:a="label",style:l}=e,i=(0,o.Z)(e,se);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_2lx21bp4",i.className])}))}));const Te=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:l}=e,i=(0,o.Z)(e,ne);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1wybdlk8 _zg8l4jg8 _k48p1nn1",i.className])}))}));const ve=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:l}=e,i=(0,o.Z)(e,le);return s.createElement(a,(0,r.Z)((0,r.Z)({},i),{},{style:l,ref:t,className:(0,n.Z)(["_1wyb1skh _zg8l4jg8 _k48p1nn1 _vwz4dlk8",i.className])}))}));const Ze=(0,s.forwardRef)(((e,t)=>{let{as:a="div",style:i}=e,d=(0,o.Z)(e,ie);return s.createElement(a,(0,r.Z)((0,r.Z)({},d),{},{style:(0,r.Z)((0,r.Z)({},i),{},{"--_h7os2z":(0,l.Z)("var(--ds-space-100, 8px)"),"--_ytujz3":(0,l.Z)("var(--ds-space-150, 12px)")}),ref:t,className:(0,n.Z)(["_ca0q1xra _u5f31bgn",d.className])}))}));let ke=function(e){return e.PILL="pill",e.ONBOARDING="onboarding",e.MID_TRIAL_ONBOARDING="midTrialOnboarding",e}({});const _e=({isSiteAdmin:e,onClose:t,stop:a,triggerFrom:o,daysLeft:l=0})=>{const[i,c]=(0,s.useState)(!0),{createAnalyticsEvent:E}=(0,f._)(),[{isSpotlightCheckEnabled:H},{enableSpotlightCheck:z}]=(0,k.D)(),{isPremiumTrialOnboardingPhaseTwoEnabled:K,showPremiumTrialOnboardingPhaseTwoContent:j}=(0,U.m)({triggerFrom:o}),[$,G]=(0,Z.F)("premium.trial.features.usefulness.survey"),V=(0,Y.O)(l);let q=s.createElement(d.Z,(0,r.Z)({},de.modalBodyText)),W=de.modalTitle,Q=de.toggleTitle,J=de.analyticsBodyText,ee=de.whiteboardTitle,te=de.advancedPermissionsBodyText;K&&(q=s.createElement(d.Z,(0,r.Z)({},de.modalBodyTextPTO2)),Q=de.toggleTitlePTO2,J=de.analyticsBodyTextPTO2,ee=de.unlimitedStorageAndWhiteboardsTitle,te=de.advancedPermissionsBodyTextPTO2),j&&(q=s.createElement(d.Z,(0,r.Z)({},de.modalBodyTextBeginningOfTrial)),W=de.modalTitleBeginningOfTrial);const ae=[{title:de.analyticsTitle,bodyText:J,img:A,darkImg:S,featureKey:F.Xo.ANALYTICS},{title:de.teamCalendarsTitle,bodyText:de.teamCalendarsBodyText,img:x,darkImg:O,featureKey:F.Xo.TEAM_CALENDAR},{title:ee,bodyText:de.whiteboardBodyText,img:D,darkImg:M,featureKey:F.Xo.UNLIMITED_STORAGE},{title:de.automationTitle,bodyText:de.automationBodyText,img:N,darkImg:I,featureKey:F.Xo.AUTOMATION}],{updatedSharedFeaturesMapperWithCheckIconStatus:re,updatedPermissionsWithCheckIconStatus:oe,totalFeaturesUsed:se,pto2Attributes:ne}=(0,B.Y)({shouldUpdate:j,rawSharedFeaturesMapper:ae});(0,s.useEffect)((()=>{K&&o===ke.ONBOARDING&&(0,_.YA)(!0)}),[K,o]);const le=4===se;V&&j&&(W=de.modalTitleHalfwayThroughTrial,q=le?s.createElement(d.Z,(0,r.Z)((0,r.Z)({},de.modalBodyTextHalfwayThroughTrialSentence3),{},{values:{b:e=>s.createElement("b",null,e)}})):s.createElement(s.Fragment,null,s.createElement(d.Z,(0,r.Z)((0,r.Z)({},de.modalBodyTextHalfwayThroughTrialSentence1),{},{values:{count:se,b:e=>s.createElement("b",null,e)}}))," ",s.createElement(d.Z,(0,r.Z)({},de.modalBodyTextHalfwayThroughTrialSentence2))));const ie=(0,s.useCallback)((async e=>{e&&E({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:e,source:"premiumTrialOnboardingModal"}}).fire(),null==t||t(),null==a||a(),c(!1),!1===H&&o===ke.ONBOARDING&&await z()}),[E,a,t,z,H,o]);(0,s.useEffect)((()=>{const t=K?(0,r.Z)({triggeredFrom:o===ke.PILL?"featureGuide":o,daysLeft:l,numPremiumFeaturesUsed:se},ne):{};E({type:"sendScreenEvent",data:{name:"premiumTrialOnboardingModal",attributes:(0,r.Z)({isSiteAdmin:e},t)}}).fire()}),[E,e,o,se,l,ne,K]);return s.createElement(v.k,{attribution:T.x.EDITIONS,onError:()=>{E({type:"sendOperationalEvent",data:{action:"unhandledPremiumTrialError",source:"premiumTrialOnboardingModal",actionSubject:"ui",attributes:{attribution:T.x.EDITIONS}}}).fire()}},s.createElement(p.Z,null,i&&s.createElement(b.Z,{onClose:ie,autoFocus:!1,width:720},s.createElement(ce,null,s.createElement(ue,null,s.createElement(g.Z,{src:C,srcDark:C,className:(0,n.Z)(["_5ral1dfr _1tke1osq _1bsb1wdt _4t3i1nzo"])})),s.createElement(me,null,s.createElement(be,null,s.createElement(y.Z,{appearance:"link",onClick:()=>ie("premiumTrialOnboardingModalCloseButton")},s.createElement(m.default,{label:"Close Modal",primaryColor:"var(--ds-text, Neutral1000)"}))),s.createElement(ge,null,s.createElement(u.Z,{variant:"medium",as:"h1"},s.createElement(d.Z,(0,r.Z)((0,r.Z)({},W),{},{values:{daysLeft:l}}))),s.createElement(pe,{as:"h2",level:V?"h500":"h100"},q),s.createElement(ye,null,Object.keys(re).filter((e=>!(re[e].featureKey===F.Xo.UNLIMITED_STORAGE&&j))).map((e=>s.createElement(P.H,{key:e,bodyText:re[e].bodyText,checkIconStatus:re[e].checkIconStatus,darkImg:re[e].darkImg,img:re[e].img,title:re[e].title}))),(e||K)&&s.createElement(P.H,{bodyText:te,checkIconStatus:oe,darkImg:R,img:w,title:de.advancedPermissionsTitle})),j?null:s.createElement(s.Fragment,null,s.createElement(Ee,null,s.createElement(Ze,null,s.createElement(L.m,{id:"prem-feature-highlight-toggle-modal",source:"premTrialOnboardingModal"})),s.createElement(he,{htmlFor:"prem-feature-highlight-toggle-modal"},s.createElement(Te,null,s.createElement(d.Z,(0,r.Z)({},Q))),s.createElement(ve,null,s.createElement(d.Z,(0,r.Z)({},de.toggleBodyText))))),s.createElement(fe,null,s.createElement(h.D,{onClick:()=>ie("premiumTrialOnboardingModalExploreFeatures")},s.createElement(d.Z,(0,r.Z)({},de.buttonText))))),j&&$&&V&&se>0&&s.createElement(X,{trialDaysLeft:l,totalFeaturesUsed:se,stopShowingSurvey:G,isSiteAdmin:e,pto2Attributes:ne})))))))};_e.displayName="ModalComponent";const Ce=(0,E.y)(_e)},288213:(e,t,a)=>{a.d(t,{O:()=>r});const r=e=>0<e&&e<=15},533768:(e,t,a)=>{a.d(t,{YA:()=>s,n0:()=>r,nb:()=>o});const r="pto-phase-two-spotlight",o=(e=!1)=>e?null===localStorage.getItem(r):"false"===localStorage.getItem(r),s=e=>{try{return localStorage.setItem(r,String(e)),!0}catch(t){return!1}}},979163:(e,t,a)=>{a.d(t,{Tx:()=>E});var r=a(167347),o=a(840506),s=a(486889),n=a(654927),l=a.n(n),i=a(582463),d=a(856389),c=a(963867),u=a(649233),m=a(779076);const g=m.ZP`query InstanceIsInTrialQuery{license{trialEndDate}}`,p=m.ZP`query InstanceIsInReverseTrialQuery{signUpProperties{reverseTrial}}`;let b=function(e){return e.CONTROL="CONTROL",e.NOT_ENROLLED="NOT_ENROLLED",e.VARIANT="VARIANT",e}({}),y=function(e){return e.NOT_ENROLLED="not-enrolled",e.CONTROL="control",e.TEST="test",e}({});const f="cc_editions_premium_trial_onboarding_experiment",E=({isPremiumOnboardingEnabled:e=!0,shouldCheckIsInTrial:t=!0}={})=>{var a;const{edition:n,isLoggedIn:m,isLicensed:E,userId:h}=(0,i.D)(),[T,v]=(0,o.useState)(!1),[Z,k]=(0,o.useState)(y.NOT_ENROLLED),{createAnalyticsEvent:_}=(0,s._)(),C=e&&n===d.m.PREMIUM&&m&&E&&Boolean(h),{loading:N,error:I,reverseTrialCohort:A}=(({skip:e}={skip:!1})=>{var t;const{data:a,loading:o,error:s}=(0,r.aM)(p,{skip:e});return(0,c.P)(s)&&!(0,u.LZ)(s)&&(0,u.Xb)(s),{reverseTrialCohort:null==a||null===(t=a.signUpProperties)||void 0===t?void 0:t.reverseTrial,loading:!e&&o,error:e?null:s}})({skip:!C});(0,o.useEffect)((()=>{const e=A===b.CONTROL||A===b.VARIANT;if(C&&!N&&!I&&!e){v(!0);const e=l().getExperimentValue(f,"cohort",y.NOT_ENROLLED,{fireExperimentExposure:!1});k(e)}}),[C,A,I,N]);const S=!t||Z!==y.TEST,x=!T||S,{data:O,loading:D,error:M}=(0,r.aM)(g,{skip:x});(0,c.P)(M)&&!(0,u.LZ)(M)&&(0,u.Xb)(M);const w=T&&(S||!D&&!M&&(R=O,Boolean(null==R||null===(P=R.license)||void 0===P?void 0:P.trialEndDate)));var R,P;const L=(0,o.useCallback)((()=>{T&&Z&&Z!==y.NOT_ENROLLED&&(l().manuallyLogExperimentExposure(f),_({type:"sendTrackEvent",data:{action:"exposed",actionSubject:"feature",attributes:{flagKey:f,value:Z},source:"premTrialActionScreen"}}).fire())}),[_,Z,T]);return{loading:D,inTrialError:M,reverseTrialError:I,isPremiumOnboardingFeatureDiscoveryEnabled:w&&Z===y.TEST,isPremiumOnboardingFeatureDiscoveryEligible:T,cohort:Z,firePremiumOnboardingFeatureExposure:L,trialEndDate:null==O||null===(a=O.license)||void 0===a?void 0:a.trialEndDate}}},364754:(e,t,a)=>{a.d(t,{m:()=>n});var r=a(654927),o=a.n(r),s=a(369623);const n=({triggerFrom:e}={})=>{const t=o().checkGate("cc_editions_premium_trial_onboarding_phase2_gate");return{isPremiumTrialOnboardingPhaseTwoEnabled:t,showPremiumTrialOnboardingPhaseTwoContent:t&&(e===s.TriggerFrom.PILL||e===s.TriggerFrom.MID_TRIAL_ONBOARDING)}}},288819:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(834232),o=a(944547),s=a(637418),n=a(107663);const l={isEnabled:!s.LT||(null===s.LT.getItem(n.F.PERSISTED_PREMIUM_FEATURE_HIGHLIGHT)||s.LT.getItemAsBoolean(n.F.PERSISTED_PREMIUM_FEATURE_HIGHLIGHT))},i={update:()=>({setState:e,getState:t})=>{const a=!t().isEnabled;e({isEnabled:a}),null===s.LT||void 0===s.LT||s.LT.setItem(n.F.PERSISTED_PREMIUM_FEATURE_HIGHLIGHT,a)}},d=(0,r.M)({initialState:l,actions:i}),c=(0,o.Bi)(d)},267884:(e,t,a)=>{a.d(t,{H:()=>l,Y:()=>i});var r=a(615919),o=a(547110),s=a(718549),n=a(821653);const l=({skip:e=!1}={})=>{const[t]=(0,o.F)(n.Xo.ADVANCED_PERMISSIONS,e),[a]=(0,o.F)(n.Xo.ANALYTICS,e),[r]=(0,o.F)(n.Xo.AUTOMATION,e),[s]=(0,o.F)(n.Xo.TEAM_CALENDAR,e),l={[n.Xo.ADVANCED_PERMISSIONS]:t,[n.Xo.ANALYTICS]:a,[n.Xo.AUTOMATION]:r,[n.Xo.TEAM_CALENDAR]:s};return{featureUsageMapper:l,totalFeaturesUsed:e?0:Object.values(l).reduce(((e,t)=>e+(!1===t?1:0)),0)}},i=({shouldUpdate:e,rawSharedFeaturesMapper:t})=>{const{totalFeaturesUsed:a,featureUsageMapper:o}=l(),i={[n.Xo.ADVANCED_PERMISSIONS]:"pfPagePermissionsUsed",[n.Xo.ANALYTICS]:"pfAnalyticsUsed",[n.Xo.AUTOMATION]:"pfAutomationUsed",[n.Xo.TEAM_CALENDAR]:"pfTeamCalenderUsed"},d={};Object.keys(o).map((e=>!1===o[e]&&(d[i[e]]=!0)));return{updatedSharedFeaturesMapperWithCheckIconStatus:e?t.map((e=>(0,r.Z)((0,r.Z)({},e),{},{checkIconStatus:o[e.featureKey]?s.u.UNCHECKED:s.u.CHECKED}))):t,updatedPermissionsWithCheckIconStatus:e?o[n.Xo.ADVANCED_PERMISSIONS]?s.u.UNCHECKED:s.u.CHECKED:s.u.NOT_RENDERED,totalFeaturesUsed:a,pto2Attributes:d}}},516012:(e,t,a)=>{a.d(t,{D:()=>n});var r=a(834232),o=a(944547);const s=(0,r.M)({initialState:{isSpotlightCheckEnabled:!1},actions:{disableSpotlightCheck:()=>({setState:e})=>{e({isSpotlightCheckEnabled:!1})},enableSpotlightCheck:()=>({setState:e})=>{e({isSpotlightCheckEnabled:!0})}}}),n=(0,o.Bi)(s)},821653:(e,t,a)=>{a.d(t,{Js:()=>p,Xo:()=>u,u$:()=>m});var r=a(840506),o=a(486889),s=a(547110),n=a(582463),l=a(856389),i=a(423128),d=a(979163),c=a(364754);let u=function(e){return e.ANALYTICS="analytics-used",e.AUTOMATION="automation-used",e.ADVANCED_PERMISSIONS="advanced-permissions-used",e.TEAM_CALENDAR="team-calendar-used",e.UNLIMITED_STORAGE="unlimited-storage-used",e}({}),m=function(e){return e.ANALYTICS_VIEW_SPACE="analyticsViewSpace",e.ANALYTICS_VIEW_PAGE="analyticsViewPage",e.AUTOMATION_NEW_RULE="automationNewRule",e.PERMISSIONS_INSPECT_PAGE="permissionsInspectPage",e.TEAM_CALENDAR_CREATE="teamCalendarCreate",e.TEAM_CALENDAR_VIEW="teamCalendarView",e}({});const g={[m.ANALYTICS_VIEW_SPACE]:u.ANALYTICS,[m.ANALYTICS_VIEW_PAGE]:u.ANALYTICS,[m.AUTOMATION_NEW_RULE]:u.AUTOMATION,[m.PERMISSIONS_INSPECT_PAGE]:u.ADVANCED_PERMISSIONS,[m.TEAM_CALENDAR_CREATE]:u.TEAM_CALENDAR,[m.TEAM_CALENDAR_VIEW]:u.TEAM_CALENDAR},p=(e,t)=>{const{edition:a,activationId:u}=(0,n.D)(),{isSiteAdmin:m}=(0,r.useContext)(i.wu),{createAnalyticsEvent:p}=(0,o._)(),{isPremiumOnboardingFeatureDiscoveryEnabled:b}=(0,d.Tx)({shouldCheckIsInTrial:!t}),{isPremiumTrialOnboardingPhaseTwoEnabled:y}=(0,c.m)(),f=!t&&a===l.m.PREMIUM&&b&&y,[,E]=(0,s.F)(g[e],!f);return{markFeatureAsUsed:(0,r.useCallback)((()=>{E(),f&&p({type:"sendTrackEvent",data:{action:"used",actionSubject:"premiumFeature",source:e,attributes:{activationId:u,isSiteAdmin:m}}}).fire()}),[u,p,f,m,E,e])}}},805643:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=a(840506))&&r.__esModule?r:{default:r},s=a(340531);const n=e=>o.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 00-.712.003l-.7.701a.496.496 0 00-.004.712l3.185 3.184L7.4 15.185a.507.507 0 00.004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 00.712-.004l.701-.7a.496.496 0 00.003-.712l-3.186-3.186 3.186-3.184a.507.507 0 00-.003-.712l-.7-.7a.508.508 0 00-.36-.153.5.5 0 00-.353.15z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));n.displayName="EditorCloseIcon";var l=n;t.default=l},344789:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=a(840506))&&r.__esModule?r:{default:r},s=a(340531);const n=e=>o.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M7.356 10.942a.497.497 0 00-.713 0l-.7.701a.501.501 0 00-.003.71l3.706 3.707a.501.501 0 00.705.003l7.712-7.712a.493.493 0 00-.006-.708l-.7-.7a.504.504 0 00-.714 0l-6.286 6.286a.506.506 0 01-.713 0l-2.288-2.287z" fill="currentColor"/></svg>'},e));n.displayName="EditorDoneIcon";var l=n;t.default=l},587499:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(840506),o=a(227318);const s=e=>r.createElement(o.Z,{appear:!0},e.children);s.displayName="ModalTransition";const n=s},293330:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(615919),o=a(840506),s=a(39030),n=a(219957),l=a(319754),i=a(805643),d=a(344789),c=a(2142),u=a(16728);const m={backgroundColorChecked:`var(--ds-background-success-bold, ${u.ak})`,backgroundColorCheckedHover:`var(--ds-background-success-bold-hovered, ${u.VB})`,backgroundColorCheckedDisabled:`var(--ds-background-disabled, ${u.IR})`,backgroundColorUnchecked:`var(--ds-background-neutral-bold, ${u.iw})`,backgroundColorUncheckedHover:`var(--ds-background-neutral-bold-hovered, ${u.zN})`,backgroundColorUncheckedDisabled:`var(--ds-background-disabled, ${u.IR})`,borderColorFocus:`var(--ds-border-focused, ${u.VY})`,iconColorChecked:`var(--ds-icon-inverse, ${u.N0})`,iconColorDisabled:`var(--ds-icon-disabled, ${u.n2})`,iconColorUnchecked:`var(--ds-icon-inverse, ${u.N0})`,handleBackgroundColor:`var(--ds-icon-inverse, ${u.N0})`,handleBackgroundColorChecked:`var(--ds-icon-inverse, ${u.N0})`,handleBackgroundColorDisabled:`var(--ds-icon-inverse, ${u.N0})`},g=(0,c.ww)(),p={regular:{height:2*g,width:4*g},large:{height:2*g+g/2,width:5*g}},b=({size:e})=>p[e].height,y=({size:e})=>p[e].width,f=g/4,E="transform 0.2s ease",h=e=>{const t=m;return(0,s.iv)((0,r.Z)((0,r.Z)({boxSizing:"content-box",display:"inline-block",padding:2,margin:2,backgroundClip:"content-box",backgroundColor:t.backgroundColorUnchecked,borderRadius:`${b({size:e})}px`,border:"2px solid transparent",height:`${b({size:e})}px`,position:"relative",transition:`${E}`,width:`${y({size:e})}px`,"&[data-checked]":{backgroundColor:t.backgroundColorChecked,color:t.iconColorChecked},"&[data-disabled]:not([data-checked])":{backgroundColor:t.backgroundColorUncheckedDisabled},"&[data-disabled][data-checked],&[data-disabled][data-checked]:hover":{backgroundColor:t.backgroundColorCheckedDisabled},"&:focus-within":{border:`2px solid ${t.borderColorFocus}`},"&:hover":{backgroundColor:t.backgroundColorUncheckedHover,cursor:"pointer"},"&[data-disabled]:hover,&[data-disabled][data-checked]:hover,&[data-disabled]:not([data-checked]):hover":{cursor:"not-allowed"},"&[data-checked]:hover":{backgroundColor:t.backgroundColorCheckedHover},"&:not([data-checked]):hover":{backgroundColor:t.backgroundColorUncheckedHover},"&[data-disabled]:not([data-checked]):hover":{backgroundColor:t.backgroundColorCheckedDisabled},color:t.iconColorUnchecked,"&[data-disabled], &[data-disabled][data-checked], &[data-disabled][data-checked]:hover":{color:t.iconColorDisabled},'input[type="checkbox"]':{opacity:0,margin:0,padding:0,border:"none","&:focus":{outline:"none !important"}},"::before":{backgroundColor:t.handleBackgroundColor,borderRadius:"var(--ds-border-radius-circle, 50%)",content:'""',position:"absolute",transform:"initial",transition:E,insetBlockEnd:2*f+"px",height:b({size:e})-2*f+"px",width:b({size:e})-2*f+"px",insetInlineStart:2*f+"px"},"&[data-checked]::before":{backgroundColor:t.handleBackgroundColorChecked,transform:`translateX(${b({size:e})}px)`},"&[data-disabled]::before":{backgroundColor:t.handleBackgroundColorDisabled,zIndex:1},"> span":{position:"absolute",insetBlockStart:`${f}px`},">span:first-of-type":{insetInlineStart:"3px"},">span:last-of-type":{insetInlineEnd:"3px"}},"large"===e&&{"> span":{position:"absolute",height:"20px",width:"20px"}}),{},{"@media screen and (forced-colors: active)":{"::before":{filter:"grayscale(100%) invert(1)"},"&:focus-within":{outline:"1px solid"}}}))},T=e=>"large"===e?"large":"small",v=l.Z,Z={componentName:"toggle",packageName:"platform-pkg",packageVersion:"0.0.0-use.local"},k=(0,o.memo)((0,o.forwardRef)(((e,t)=>{const{defaultChecked:a=!1,isDisabled:l=!1,onBlur:c=v,onChange:u=v,onFocus:m=v,size:g="regular",name:p="",value:b="",isChecked:y,analyticsContext:f,id:E,testId:k,label:_,descriptionId:C}=e,N=void 0===y,[I,A]=(0,o.useState)(a),S=(0,n.B)((0,r.Z)({fn:c,action:"blur",analyticsData:f},Z)),x=(0,n.B)((0,r.Z)({fn:m,action:"focus",analyticsData:f},Z)),O=(0,n.B)((0,r.Z)({fn:(e,t)=>(N&&A((e=>!e)),u(e,t)),action:"change",analyticsData:f},Z)),D=N?I:y,M={"data-checked":D||void 0,"data-disabled":l||void 0,"data-size":g,"data-testid":k||void 0},w=(0,o.useMemo)((()=>h(g)),[g]);return(0,s.tZ)("label",(0,r.Z)((0,r.Z)({},M),{},{css:w}),(0,s.tZ)("input",{ref:t,checked:D,disabled:l,id:E,name:p,onBlur:S,onChange:O,onFocus:x,type:"checkbox",value:b,"data-testid":k&&`${k}--input`,"aria-label":_,"aria-describedby":C}),(0,s.tZ)(d.default,{label:"",size:T(g),testId:k&&`${k}--toggle-check-icon`}),(0,s.tZ)(i.default,{label:"",size:T(g),testId:k&&`${k}--toggle-cross-icon`}))})));k.displayName="Toggle";const _=k}}]);
//# sourceMappingURL=25520.WJYMG_IF71.js.map