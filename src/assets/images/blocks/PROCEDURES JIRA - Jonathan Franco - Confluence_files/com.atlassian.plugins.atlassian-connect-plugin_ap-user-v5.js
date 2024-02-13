WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user-v5', location = 'v5/js/iframe/host/user.js' */
define("ac/user",(function(){return{getUser:function(e){var t=e._context.extension.options.user;e({fullName:void 0===t.uid&&void 0===t.ukey?null:AJS.Meta.get("remote-user-fullname")||AJS.Meta.get("current-user-fullname")||null,id:t.uid,key:t.ukey})},getCurrentUser:function(e){e({atlassianAccountId:AJS.Meta.get("atlassian-account-id")||null,accountType:AJS.Meta.get("account-type")||null})},getTimeZone:function(e){e(e._context.extension.options.user.timeZone)},getLocale:function(e){e(AJS.Meta.get("user-locale"))}}}));
}catch(e){WRMCB(e)};