WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/bookmark.js' */
!function(o,e){e("ac/confluence/macro/bookmark",["ajs"],(function(o){var e;return{createBookmark:function(){return e=o.Rte.getEditor().selection.getBookmark()},destroyBookmark:function(){if(e){e.keep=!1;o.Rte.getEditor().selection.moveToBookmark(e);e=null}}}}))}(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/editor.js' */
!function(e,o){o("ac/confluence/macro/editor",["ac/confluence/macro","ac/confluence/macro/bookmark","ajs","ac/confluence/utils"],(function(o,t,a,n){var r;return{close:function(){connectHost.dialog.close()},getMacroData:function(e){const t=o.getCurrentMacroParameters();if(t)return e(t);var a=e._context.extension.options.productContext["macro.id"];return e(o.getMacroData(a))},getMacroBody:function(e){return e(r)},openCustomEditor:function(c,i){var d;if(!n.isFabricEditor()){a.Rte.getEditor().focus();var s=a.Rte.getEditor().selection.getNode();d=t.createBookmark();o.setLastSelectedConnectMacroNode(s)}o.setUnsavedMacroData(c.name,c.body?c.body:"",c.params,d);r=c.body;var u=e.extend(c.productContext||{},{"page.id":a.Meta.get("page-id")}),l={addon_key:i.addonKey,key:c.name,options:{productContext:u}},m=i.width||null,f=i.height||null,g={header:c.params?i.editTitle:i.insertTitle,submitText:c.params?"Save":"Insert",width:m,height:f,onHide:a.DarkFeatures.isEnabled("com.atlassian.connect.acjs.onecloud-1272-clear-macro-parameters-on-custom-editor-close")?function(){t.destroyBookmark();o.clearMacroDataParams()}:t.destroyBookmark};"100%"!==m&&"100%"!==f&&(g.chrome=!0);connectHost.dialog.create(l,g)}}}))}(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-iframe.js' */
!function(e,n){n("ac/confluence/macro/property-panel-iframe",["ac/confluence/macro","ajs"],(function(n,a){return function(t){return{propertyPanelIFrameInjector:function(o){var c={classifier:"property-panel","page.id":a.Meta.get("page-id")},r=a.Rte.getEditor().selection;n.setLastSelectedConnectMacroNode(r.getNode());e.ajax(t,{data:c}).done((function(n){var a=e(n);a.css("display","none");o.panel.append(a)}))}}}}))}(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-controls.js' */
!function(n,t){t("ac/confluence/macro/property-panel-controls",["underscore"],(function(n){return function(t){var c;return{getControls:function(r){r(c=c||function(c){try{return n.first(n.filter(n.pluck(c,t),n.isObject))}catch(n){return null}}(WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-macro.property-panel-controls")))}}}}))}(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-event.js' */
!function(n,e){e("ac/confluence/macro/property-panel-event",[],(function(){var e,t=[],r=function(n,e,t){connectHost.broadcastEvent(n,(function(n){return-1!==n.extension_id.indexOf(e)}));t()};return{waitForPropertyPanelEventBindings:function(){e=!1;t=[]},propertyPanelEventsBound:function(){e=!0;for(;t.length>0;){var n=t.shift();r(n.eventKey,n.macroName,n.doneCallback)}},handlePropertyPanelEvent:function(o,c,a){var i=n.Deferred();if("click"===o){var u=function(n,e){return"click."+n+"."+e+".macro.property-panel"}(c,a);e?r(u,a,i.resolve):function(n,e,r){t.length<10&&t.push({eventKey:n,macroName:e,doneCallback:r})}(u,a,i.resolve)}return i},_getQueueLength:function(){return t.length}}}))}(AJS.$,define);
}catch(e){WRMCB(e)};