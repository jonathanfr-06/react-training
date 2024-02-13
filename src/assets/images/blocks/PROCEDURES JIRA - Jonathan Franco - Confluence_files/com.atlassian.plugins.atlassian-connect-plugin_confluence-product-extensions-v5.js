WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/main.js' */
define("ac/confluence",["ac/confluence/macro/editor","ac/confluence/macro","ac/confluence/macro/property-panel-event","ac/confluence/content-property"],(function(e,r,o,t){return{saveMacro:r.saveCurrentMacro,closeMacroEditor:e.close,getMacroData:r.getMacroData,getMacroBody:r.getMacroBody,onMacroPropertyPanelEvent:o.propertyPanelEventsBound,closeMacroPropertyPanel:r.closeCurrentMacroPropertyPanel,getContentProperty:t.getContentProperty,setContentProperty:t.setContentProperty,syncPropertyFromServer:t.syncPropertyFromServer}}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/custom-content.js' */
define("ac/customContent",["ac/confluence/custom-content-api"],(function(t){return{getEditComponent:{constructor:t.EditComponent,intercept:t.EditComponent.prototype.intercept,submitCallback:t.EditComponent.prototype.submitCallback,submitErrorCallback:t.EditComponent.prototype.submitErrorCallback,submitSuccessCallback:t.EditComponent.prototype.submitSuccessCallback,cancelCallback:t.EditComponent.prototype.cancelCallback}}}));
}catch(e){WRMCB(e)};