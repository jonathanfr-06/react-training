WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/main.js' */
_AP.addonAttemptCounter={};_AP.util.awaitGlobal("connectHost",(function(n){n.setExtensionConfigurationOptions("crev",window._AP.allJsVersion);n.setExtensionConfigurationOptions("resolve_inner_iframe_url",!0);n.onIframeEstablished((function(n){n.$el.closest(".ap-iframe-container").addClass("iframe-init")}));n.onFrameClick((function(n){n.click()}))}));define("ac/create",(function(){return{appendConnectAddon:function(n){return window._AP.appendConnectAddon(n)}}}));
}catch(e){WRMCB(e)};