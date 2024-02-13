WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE', location = 'includes/js/amd/shim/confluence-editor-amd.js' */
define("confluence/legacy-editor-global-AVOID-IF-POSSIBLE",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Editor&&(Confluence.Editor={});return Confluence.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.shortcuts.atlassian-shortcuts-plugin:shortcuts', location = '/js/keycommands.js' */
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'templates/confluence-keyboard-shortcuts.soy' */
// This file was automatically generated from confluence-keyboard-shortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialog.
 */

if (typeof __KeyboardShortcutsDialog == 'undefined') { var __KeyboardShortcutsDialog = {}; }


__KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_ignored) {
  return '<div class="module"><div class="mod-header"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutModule.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutModule';
}


__KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.customHelpLink({href: '' + soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts%2C+Markdown%2C+and+Autocomplete"), text: '' + soy.$$escapeHtml('Afficher tous les raccourcis')});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutHelpLink.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutHelpLink';
}


__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_ignored) {
  return '<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">' + soy.$$escapeHtml('Activer les principaux raccourcis') + '</label></form>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox';
}


__KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_ignored) {
  return '<div id=' + soy.$$escapeHtml(opt_data.panelId) + '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutPanel.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'js/confluence-keyboard-shortcuts-soy.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy",function(){return __KeyboardShortcutsDialog});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialogAutoformat.
 */

if (typeof __KeyboardShortcutsDialogAutoformat == 'undefined') { var __KeyboardShortcutsDialogAutoformat = {}; }


__KeyboardShortcutsDialogAutoformat.configureAutocomplete = function(opt_data, opt_ignored) {
  return '<div id="keyboard-shortcut-autocomplete-message">' + soy.$$escapeHtml('Pour configurer la fonction de saisie semi-automatique,') + ' <a target="_blank" href=' + soy.$$escapeHtml(opt_data.href) + '>' + soy.$$escapeHtml('allez aux param\xe8tres de votre \xe9diteur') + '</a></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.configureAutocomplete.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.configureAutocomplete';
}


__KeyboardShortcutsDialogAutoformat.helpItem = function(opt_data, opt_ignored) {
  return '<li class="item-details"><span class="item-description wiki-content">' + opt_data.output + '</span><span class="' + opt_data.actionClass + ' item-action">' + opt_data.type + '</span></li>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.helpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.helpItem';
}


__KeyboardShortcutsDialogAutoformat.simpleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.simpleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.simpleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.tableHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableHelpItem';
}


__KeyboardShortcutsDialogAutoformat.styleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.styleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.styleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: '' + soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.keyboardShortcutItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem';
}


__KeyboardShortcutsDialogAutoformat.emoticonHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.emoticonHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.emoticonHelpItem';
}


__KeyboardShortcutsDialogAutoformat.boldDescription = function(opt_data, opt_ignored) {
  return '<b>' + soy.$$escapeHtml('Gras') + '</b> ' + soy.$$escapeHtml('texte');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.boldDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.boldDescription';
}


__KeyboardShortcutsDialogAutoformat.underlineDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: underline;">' + soy.$$escapeHtml('Soulign\xe9') + '</span> ' + soy.$$escapeHtml('texte');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.underlineDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.underlineDescription';
}


__KeyboardShortcutsDialogAutoformat.strikethroughDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: line-through;">' + soy.$$escapeHtml('Barr\xe9') + '</span> ' + soy.$$escapeHtml('texte');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.strikethroughDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.strikethroughDescription';
}


__KeyboardShortcutsDialogAutoformat.italicDescription = function(opt_data, opt_ignored) {
  return '<em>' + soy.$$escapeHtml('Italique') + '</em> ' + soy.$$escapeHtml('texte');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.italicDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.italicDescription';
}


__KeyboardShortcutsDialogAutoformat.monospaceDescription = function(opt_data, opt_ignored) {
  return '<code>' + soy.$$escapeHtml('Espacement fixe') + '</code> ' + soy.$$escapeHtml('texte');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.monospaceDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.monospaceDescription';
}


__KeyboardShortcutsDialogAutoformat.tableDescription = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><td class="confluenceTd">' + soy.$$escapeHtml('premi\xe8re cellule') + '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableDescription';
}


__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><th class="confluenceTh">' + soy.$$escapeHtml('en-t\xeate') + '</th><th class="confluenceTh">' + soy.$$escapeHtml('en-t\xeate') + '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions';
}


__KeyboardShortcutsDialogAutoformat.h1Description = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('En-t\xeate') + '</h1>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h1Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h1Description';
}


__KeyboardShortcutsDialogAutoformat.h3Description = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml('En-t\xeate') + '</h3>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h3Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h3Description';
}


__KeyboardShortcutsDialogAutoformat.bqDescription = function(opt_data, opt_ignored) {
  return '<blockquote>' + soy.$$escapeHtml('Citation') + '</blockquote>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bqDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bqDescription';
}


__KeyboardShortcutsDialogAutoformat.numberedListDescription = function(opt_data, opt_ignored) {
  return '<ol><li>' + soy.$$escapeHtml('liste') + '</li></ol>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.numberedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.numberedListDescription';
}


__KeyboardShortcutsDialogAutoformat.bulletedListDescription = function(opt_data, opt_ignored) {
  return '<ul><li>' + soy.$$escapeHtml('puces') + '</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bulletedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bulletedListDescription';
}


__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription = function(opt_data, opt_ignored) {
  return '<ul class="inline-task-list"><li>task</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.inlineTaskListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'js/shortcut-dialog-tab-autoformat-soy.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy",function(){return __KeyboardShortcutsDialogAutoformat});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab', location = 'js/shortcut-dialog-tab-autoformat.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat",["ajs","confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy","confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy","jquery"],function(a,g,b,f){var k={context:"autoformat.font_formatting",description:b.strikethroughDescription(),action:"~~Barr\u00e9~~"},l={context:"autoformat.font_formatting",description:b.boldDescription(),action:"**Gras** ou __Gras__"},
m={context:"autoformat.font_formatting",description:b.italicDescription(),action:"*Italique* ou _Italique_"},n={context:"autoformat.font_formatting",description:b.monospaceDescription(),action:"Espacement fixe`"},p={context:"autoformat.styles",description:b.h1Description(),action:"# Titre\u00a01"},q={context:"autoformat.styles",description:b.h3Description(),action:"### Titre\u00a03"},
r={context:"autoformat.styles",description:b.bqDescription(),action:"\u003e Guillemet"},t={context:"autoformat.lists",description:b.numberedListDescription(),action:"1. liste"},u=[l,k,m,n,{context:"autoformat.tables",description:b.tableDescription(),action:"||||| + entrer"},{context:"autoformat.tables",description:b.tableWithHeadingsDiscriptions(),action:"||en-t\u00eate||en-t\u00eate||"},
p,q,r,{context:"autoformat.emoticons",img:"check.png",action:"(/)"},{context:"autoformat.emoticons",img:"smile.png",action:"::)"},t,{context:"autoformat.lists",description:b.bulletedListDescription(),action:"* puces"},{context:"autoformat.lists",
description:b.inlineTaskListDescription(),action:"[] t\u00e2che"},{context:"autoformat.autocomplete",description:"Image/M\u00e9dia",action:"!"},{context:"autoformat.autocomplete",description:"Lien",action:"["},{context:"autoformat.autocomplete",description:"Macro",
action:"{"}],h=function(a,b,c){a=f(g.keyboardShortcutModule({title:a}));var d=a.find("ul");b=w(b);for(var e=0,v=b.length;e<v;e++)d.append(c(b[e]));return a},c=function(a,b,c){return h(a,b,function(a){return c({output:a.description,type:a.action})})},x=function(e,d){var c=a.params.staticResourceUrlPrefix+"/images/icons/emoticons/";return h(e,d,function(a){return b.emoticonHelpItem({src:c+a.img,type:a.action})})},w=function(a){return f.grep(u,
function(b){return b.context===a})};return function(){var e=f(g.keyboardShortcutPanel({panelId:"autoformat-shortcuts-panel"})),d=e.children(".shortcutsmenu");d.append(c("Mise en forme des polices","autoformat.font_formatting",b.simpleHelpItem));d.append(c("Saisie semi-automatique","autoformat.autocomplete",b.keyboardShortcutItem));d.append(c("Tableaux","autoformat.tables",
b.tableHelpItem));d.append(c("Styles","autoformat.styles",b.styleHelpItem).addClass("styles-module"));d.append(x("Emotic\u00f4nes","autoformat.emoticons"));d.append(c("Listes","autoformat.lists",b.simpleHelpItem));a.Meta.get("remote-user")&&e.find(".keyboard-shortcut-dialog-panel-header").append(b.configureAutocomplete({href:a.contextPath()+"/users/viewmyeditorsettings.action"}));
return e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/confluence-keyboard-shortcuts.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts","ajs jquery confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy window confluence/dialog confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat".split(" "),function(a,e,m,f,u,v){var d,g={Autoformat:[],Editor:[],enabled:!1,ready:!1,dialog:null,closeDialog:function(){q().then(function(a){a.hide()});return!1},openDialog:function(){e(this).removeClass("interactive");q().then(function(a){a.show()});return!1}},q=function(){function l(){f.Confluence&&
f.Confluence.Editor&&f.Confluence.Editor.isVisible&&f.Confluence.Editor.isVisible()?(d.overrideLastTab(),d.gotoPanel(1)):d.gotoPanel(0)}var h=e.Deferred();if(d)return l(),h.resolve(d);var k=g.shortcuts,r=-1!==f.navigator.platform.indexOf("Mac"),q=function(c){var b=a("span").addClass("item-action");c=c.keys[0];for(var e=0;e<c.length;e++){0<e&&b.append(t("alors"));for(var d=b,f=c[e].split("+"),h=0;h<f.length;h++){0<h&&d.append(t("+"));for(var g=d,k=f[h].split(".."),
l=0;l<k.length;l++)0<l&&g.append(t("\u00e0")),g.append(w(k[l]))}}return b},w=function(c){var b=a("kbd");switch(c){case "Shift":case "Sh":b.text("Shift");b.addClass("modifier-key");break;case "Ctrl":c=r?"⌘":"Ctrl";b.text(c);b.addClass("modifier-key");break;case "Tab":b.text("Tab");b.addClass("modifier-key");break;case "Alt":b.text("Alt");
b.addClass("modifier-key");break;case "LeftAlt":c=r?"Option":"Gauche Alt";b.text(c);b.addClass("modifier-key");break;case "Control":b.text("Commande");b.addClass("modifier-key");break;case "Option":b.text("Option");b.addClass("modifier-key");break;case "UpArrow":b.text("\u2191");b.addClass("regular-key");break;case "DownArrow":b.text("\u2193");
b.addClass("regular-key");break;case "LeftArrow":b.text("\u2190");b.addClass("regular-key");break;case "RightArrow":b.text("\u2192");b.addClass("regular-key");break;default:b.text(c),b.addClass("regular-key")}return b},t=function(c){var b=a("span");b.text(c);b.addClass("key-separator");return b},n=function(c,b,d){c=e(m.keyboardShortcutModule({title:c}));for(var h=c.find("ul"),f=0;f<d.length;f++){var l=d[f];if(!l.hidden&&
-1!==e.inArray(l.context,b)){var g=a("li").addClass("item-details"),k=l.description,k=a("strong").addClass("item-description").append(k);g.append(k);g.append(q(l));h.append(g)}}return c};d=u.component({width:950,height:660,id:"keyboard-shortcuts-dialog"});d.addHeader("Raccourcis de clavier");d.addPanel("G\u00e9n\u00e9ral",function(){var c=e(m.keyboardShortcutPanel({panelId:"general-shortcuts-panel"})),b=e(c).children(".shortcutsmenu");
a.Meta.get("atlassian-account-id")&&c.find(".keyboard-shortcut-dialog-panel-header").append(m.keyboardShortcutEnabledCheckbox());b.append(n("Raccourcis globaux",["global"],k));b.append(n("Actions Page / Billet de blog",["viewcontent","viewinfo"],k));return c}());d.addPanel("Editeur",function(){var c=e(m.keyboardShortcutPanel({panelId:"editor-shortcuts-panel"})),b=e(c).children(".shortcutsmenu"),
d,f;c.addClass("foxy-ux-enhancement");d=["adg3.tinymce.rich"];d.push(r?"adg3.tinymce.rich.mac":"adg3.tinymce.rich.win");f=["adg3.tinymce.actions"];f.push(r?"adg3.tinymce.actions.mac":"adg3.tinymce.actions.win");b.append(n("Mise en forme de bloc",["adg3.tinymce.block"],k));b.append(n("Mise en forme enrichie",d,k));b.append(n("Actions de modification",f,k));return c}());d.addPanel("Mise en forme automatique de l\'\u00e9diteur",
v());d.addCancel("Fermer",function(){a.debug("Hiding Shortcuts help");d.hide();return!1});d.popup.element.find(".dialog-title").prepend(m.keyboardShortcutHelpLink());a.trigger("keyboard-shortcut-dialog-ready",d);l();h.resolve(d);e("#keyboard-shortcut-enabled-checkbox").prop("checked",p.keyboardShortcuts.enabled).click(function(c){var b=e(this).prop("checked");e.ajax({type:"POST",url:a.contextPath()+"/rest/confluenceshortcuts/latest/enabled",data:JSON.stringify({enabled:b}),dataType:"json",
contentType:"application/json"}).done(function(){p.keyboardShortcuts.enabled=b;p.keyboardShortcuts.ready=!1;b?a.trigger("add-bindings.keyboardshortcuts"):a.trigger("remove-bindings.keyboardshortcuts")})});return h},p={init:function(){a.debug("confluence-keyboard-shortcuts initialising");a.PageGadget||f.parent.AJS&&f.parent.AJS.PageGadget?a.debug("Inside the Page Gadget. Skipping keyboard shortcuts"):(g.enabled=a.Meta.getBoolean("use-keyboard-shortcuts"),a.bind("shortcuts-loaded.keyboardshortcuts",
function(a,d){g.shortcuts=d.shortcuts;e("#keyboard-shortcuts-link").click(g.openDialog)}),a.bind("register-contexts.keyboardshortcuts",function(d,h){if(g.enabled){d=h.shortcutRegistry;h=f.Confluence&&f.Confluence.Editor&&f.Confluence.Editor.isVisible&&f.Confluence.Editor.isVisible();e("#action-menu-link").length&&!h&&d.enableContext("viewcontent");e("#viewPageLink").length&&d.enableContext("viewinfo");if(h){d.enableContext("adg3.tinymce.actions");var k=require("tinymce"),l=k.activeEditor;e("#rte").closest("form");
e.each(g.shortcuts,function(d,f){if(0===f.context.indexOf("tinymce")){var g=f.op,h=f.param;e.each(f.keys,function(){var c=this,b;"click"==g?b=function(){e(h).click()}:"execute"==g&&(b=h);b?(e.isArray(c)&&(c=c.join(",")),c=c.toLowerCase(),c=4<=parseInt(k.majorVersion,10)&&k.isMac?c.replace("ctrl","meta"):c,a.debug("Adding shortcut for "+c),l.addShortcut(c,"",b)):a.logError("ERROR: unkown editor shortcut key operation "+g+" for shortcut "+c)})}})}g.ready=!0}}),"undefined"!==typeof a.contextPath()&&
g.enabled&&(e("#rte").length?a.bind("init.rte",function(){a.trigger("initialize.keyboardshortcuts")}):a.trigger("initialize.keyboardshortcuts")))}};p.keyboardShortcuts=g;return p});require("confluence/module-exporter").safeRequire("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts",function(a){var e=require("ajs");Confluence.KeyboardShortcuts=a.keyboardShortcuts;e.toInit(a.init)});
}catch(e){WRMCB(e)};