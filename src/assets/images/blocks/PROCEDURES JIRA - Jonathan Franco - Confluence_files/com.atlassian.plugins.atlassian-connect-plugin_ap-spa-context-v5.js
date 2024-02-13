WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-spa-context-v5', location = 'v5/js/spa-context/main.js' */
define("ac/spa-context",(function(){var n=null,i=null;return{provideContainerApi:function(i){n=i},provideNavigationApi:function(n){i=n},isInIframe:function(){return null!==n},canSpaTransition:function(){return null!==i},getContainerApi:function(){return n},getNavigationApi:function(){return i}}}));
}catch(e){WRMCB(e)};