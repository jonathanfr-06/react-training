WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-spa-inlinedialog-cleanup', location = 'v5/js/iframe/host/spa-inline-dialog-cleanup.js' */
require(["skate"],(function(e){e("ap-inline-dialog",{type:function(){var i;(i=e&&e.types&&e.types.CLASS)||(i=e&&e.type&&e.type.CLASSNAME);return i}(),detached:function(e){var i=document.querySelectorAll('iframe[id^="'+window._AP.util.escapeSelector(e.id)+'"]');[].forEach.call(i,(function(e){AJS.$(e).parents(".aui-inline-dialog").remove()}))}})}));
}catch(e){WRMCB(e)};