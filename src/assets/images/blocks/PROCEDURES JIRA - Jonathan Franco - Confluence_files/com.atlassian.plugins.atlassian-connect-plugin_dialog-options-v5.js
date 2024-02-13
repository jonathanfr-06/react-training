WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dialog-options-v5', location = 'v5/js/iframe/host/dialog-options.js' */
!function(){window._AP=window._AP||{};var a=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:dialog-options.data");for(var n in a)a.hasOwnProperty(n)&&(window._AP[n]=a[n])}();
}catch(e){WRMCB(e)};