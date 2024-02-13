WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:module-loader-v5', location = 'v5/js/iframe/host/module-loader.js' */
_AP.util.awaitGlobal("connectHost",(function(e){e.defineModule("cookie",connectHostCookie);e.defineModule("history",connectHostHistory);e.defineModule(connectHostRequest.default);e.defineModule("navigator",require("ac/navigator/module"));e.defineModule("user",require("ac/user"));e.defineModule("context",require("ac/context"))}));
}catch(e){WRMCB(e)};