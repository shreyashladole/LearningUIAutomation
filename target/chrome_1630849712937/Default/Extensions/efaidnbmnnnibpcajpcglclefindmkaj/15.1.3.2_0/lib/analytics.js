/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,E){"use strict";return E.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};function dependOn(){"use strict";return[require("util"),require("proxy")]}function error(e){"use strict";SETTINGS.DEBUG_MODE&&console.error(e)}def(dependOn(),(function(e,E){"use strict";var r,t=null,i=!0;for(r in t||(t=new function(){E&&(this.proxy=E.proxy.bind(this)),this.e={EXTENSION_INSTALLED:"DCBrowserExt:Extension:Installed:Op",EXTENSION_UPDATE:"DCBrowserExt:Extension:Update:Op",EXTENSION_STARTUP:"DCBrowserExt:Extension:Startup:Op",EXTENSION_FORCE_UNINSTALL:"DCBrowserExt:Extension:ForceUninstall:Op",SIGN_IN_SHOWN:"DCBrowserExt:SignIn:OPERATION:Shown",SIGN_IN_COMPLETE:"DCBrowserExt:SignIn:OPERATION:Complete:Op",SIGN_IN_ABANDONED:"DCBrowserExt:SignIn:Abandoned:Op",SIGN_OUT_CLICKED:"DCBrowserExt:SignOut:Clicked",FLICKR_OFFER_SHOWN:"DCBrowserExt:Flickr:Offer:Shown",FLICKR_OFFER_CLICKED:"DCBrowserExt:Flickr:Offer:Clicked",FLICKR_CONTEXT_CLICK:"DCBrowserExt:Flickr:Context:Clicked",CONTEXT_UPLOAD_PDF_PAGE:"DCBrowserExt:Context:Upload:PdfPage:Clicked",CONTEXT_UPLOAD_LINK:"DCBrowserExt:Context:Upload:Link:Clicked",CONTEXT_UPLOAD_IMAGE:"DCBrowserExt:Context:Upload:Image:Clicked",CONTEXT_MENU_CONVERT_PAGE:"DCBrowserExt:ContextMenu:ConvertPage:Clicked",CONTEXT_MENU_CONVERT_LINK:"DCBrowserExt:ContextMenu:ConvertLink:Clicked",CONTEXT_MENU_APPEND_PAGE:"DCBrowserExt:ContextMenu:AppendPage:Clicked",CONTEXT_MENU_APPEND_LINK:"DCBrowserExt:ContextMenu:AppendLink:Clicked",REDIRECT:"DCBrowserExt:Redirect:OPERATION:Op",PDF_MENU_UPLOAD_COMPLETE_SHOWN:"DCBrowserExt:PDF:Menu:OPERATION:Upload:Complete:Shown",PDF_MENU_UPLOAD_CLICKED:"DCBrowserExt:PDF:Menu:Copy:Clicked",PDF_MENU_EXPORT_CLICKED:"DCBrowserExt:PDF:Menu:Export:Clicked",PDF_MENU_SEND_CLICKED:"DCBrowserExt:PDF:Menu:Send:Clicked",PDF_MENU_FILLSIGN_CLICKED:"DCBrowserExt:PDF:Menu:FillSign:Clicked",PDF_SOURCE_SIZE:"DCBrowserExt:PDF:Source:Size:RANGE:Op",TREFOIL_CLICKED:"DCBrowserExt:Trefoil:Clicked",TREFOIL_ACROBAT_LABEL_CLICKED:"DCBrowserExt:TrefoilMenu:AcrobatLabel:Clicked",TREFOIL_PDF_MENU_SHOWN:"DCBrowserExt:TrefoilMenu:PDF:Popup:Shown",TREFOIL_PDF_FROM_CLICK:"DCBrowserExt:TrefoilMenu:PDF:FromClick:TIREKICK:Shown",TREFOIL_PDF_VISIT_AIC:"DCBrowserExt:TrefoilMenu:PDF:VisitAIC:TIREKICK:Clicked",TREFOIL_PDF_ACROBAT:"DCBrowserExt:TrefoilMenu:PDF:OpenInAcrobat:TIREKICK:Clicked",TREFOIL_PDF_READER:"DCBrowserExt:TrefoilMenu:PDF:OpenInReader:TIREKICK:Clicked",TREFOIL_PDF_DOWNLOAD_OPENED:"DCBrowserExt:TrefoilMenu:PDF:OpenInAcrobat:Complete:Op",TREFOIL_PDF_DOWNLOAD_OPENED_READER:"DCBrowserExt:TrefoilMenu:PDF:OpenInReader:Complete:Op",TREFOIL_PDF_DOWNLOAD_OPEN_FAILED:"DCBrowserExt:TrefoilMenu:PDF:OpenInAcrobat:Failed:Op",TREFOIL_PDF_DOWNLOAD_OPEN_FAILED_READER:"DCBrowserExt:TrefoilMenu:PDF:OpenInReader:Failed:Op",TREFOIL_HTML_FROM_CLICK:"DCBrowserExt:TrefoilMenu:HTML:FromClick:Shown",TREFOIL_HTML_OPTIONS_FROM_CLICK:"DCBrowserExt:TrefoilMenu:HTML:WithOptions:FromClick:Shown",TREFOIL_HTML_VISIT_AIC:"DCBrowserExt:TrefoilMenu:HTML:VisitAIC:TIREKICK:Clicked",TREFOIL_HTML_PREFERENCES_CLICK:"DCBrowserExt:TrefoilMenu:HTML:Preferences:Clicked",TREFOIL_HTML_CONVERT_NEW:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:New:TIREKICK:Clicked",TREFOIL_HTML_CONVERT_APPEND:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Append:TIREKICK:Clicked",TREFOIL_HTML_CONVERT_NO_OPEN:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:NoOpen:Clicked",TREFOIL_HTML_CONVERT_OPEN_DEFAULT:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:WithOpen:Default:Clicked",TREFOIL_HTML_CONVERT_OPEN_CHANGED:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:WithOpen:Changed:Clicked",TREFOIL_HTML_CONVERT_WAITING:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Waiting:Shown",TREFOIL_HTML_CONVERT_DOWNLOADING:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Downloading:Shown",TREFOIL_HTML_CONVERT_IN_PROGRESS:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:InProgress:Shown",TREFOIL_HTML_CONVERT_CANCELLED:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Cancelled:Shown",TREFOIL_HTML_CONVERT_COMPLETE:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Complete:Shown",TREFOIL_HTML_CONVERT_FAILED:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:Failed:Shown",TREFOIL_HTML_CONVERT_FAILED_JS:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:FailedJS:Shown",TREFOIL_HTML_CONVERT_FAILED_DOM:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:FailedDOM:Shown",TREFOIL_HTML_CONVERT_FAILED_HOST:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:FailedHOST:Shown",TREFOIL_HTML_CONVERT_FAILED_TRY:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:FailedTRY:Shown",TREFOIL_HTML_CONVERT_NO_ACROBAT:"DCBrowserExt:TrefoilMenu:HTML:ConvertHTML:NoAcrobat:Shown",TREFOIL_HTML_OPENPDF_PREF_ON:"DCBrowserExt:TrefoilMenu:HTML:OpenPDFPref:On:Clicked",TREFOIL_HTML_OPENPDF_PREF_OFF:"DCBrowserExt:TrefoilMenu:HTML:OpenPDFPref:Off:Clicked",PERSIST_PDF_MENU_SHOWN:"DCBrowserExt:PersistMenu:PDF:Popup:Shown",PERSIST_PDF_ACROBAT:"DCBrowserExt:PersistMenu:PDF:OpenInAcrobat:TIREKICK:Clicked",PERSIST_PDF_DOWNLOAD_OPENED:"DCBrowserExt:PersistMenu:PDF:OpenInAcrobat:Complete:Op",PERSIST_PDF_DOWNLOAD_OPEN_FAILED:"DCBrowserExt:PersistMenu:PDF:OpenInAcrobat:Failed:Op",PERSIST_PDF_MENU_CLOSED:"DCBrowserExt:PersistMenu:PDF:Close:TIREKICK:Clicked",PERSIST_PDF_OPENPDF_PREF_OFF:"DCBrowserExt:PersistMenu:PDF:OpenPDFPref:Off:Clicked",PERSIST_PDF_READER:"DCBrowserExt:PersistMenu:PDF:OpenInReader:TIREKICK:Clicked",PERSIST_PDF_DOWNLOAD_OPENED_READER:"DCBrowserExt:PersistMenu:PDF:OpenInReader:Complete:Op",PERSIST_PDF_DOWNLOAD_OPEN_FAILED_READER:"DCBrowserExt:PersistMenu:PDF:OpenInReader:Failed:Op",PERSIST_PDF_MENU_CLOSED_READER:"DCBrowserExt:PersistMenu:PDF:CloseReader:TIREKICK:Clicked",PERSIST_PDF_OPENPDF_PREF_OFF_READER:"DCBrowserExt:PersistMenu:PDF:OpenPDFPrefReader:Off:Clicked",UPLOAD_PROGRESS_SHOWN:"DCBrowserExt:Upload:OPERATION:Progress:Shown",CREATE_FORM_PROGRESS_SHOWN:"DCBrowserExt:Upload:FillSign:CreateForm:Progress:Shown",UPLOAD_COMPLETE:"DCBrowserExt:Upload:OPERATION:Complete:Op",CREATE_FORM_COMPLETE:"DCBrowserExt:Upload:FillSign:CreateForm:Complete:Op",UPLOAD_RENAME_CLICKED:"DCBrowserExt:Upload:RenameOrMove:Clicked",ERROR_SHOWN:"DCBrowserExt:Error:Shown",ERROR_WRONG_MIME_TYPE:"DCBrowserExt:Error:WrongMimeType:Shown",OPTIONS_SET_ENV:"DCBrowserExt:Options:SetEnv:ENVIRONMENT:Op",OPTIONS_ENABLE_HTML2PDF:"DCBrowserExt:Options:EnableHTML2PDF:ENVIRONMENT:Op",HTML_SOURCE_SIZE:"DCBrowserExt:HTML:Source:Size:RANGE:Op",HTML_SOURCE_SIZE_TOO_LARGE_ERROR:"DCBrowserExt:HTML:Source:Size:TooLarge:Error:Shown",HTML_SOURCE_SITE:"DCBrowserExt:HTML:Source:Site:SITE",HTML_SOURCE_PROTOCOL:"DCBrowserExt:HTML:Source:Protocol:PROTOCOL",HTML_SOURCE_CONTENT:"DCBrowserExt:HTML:Source:CONTENT:Op",HTML_CONVERSION_STAGE_TIMING:"DCBrowserExt:HTML:Conversion:STAGE:TIMING",OS_MAC_OP:"DCBrowserExt:OS:mac:Op",OS_WIN_OP:"DCBrowserExt:OS:win:Op",SHIM_VERSION:"DCBrowserExt:Shim:Version:VERSION:Op",OPTIONS_PAGE:"DCBrowserExt:OptionsPage:Shown",FTE_LAUNCH:"DCBrowserExt:FTE:Launch:Shown",PERSIST_PDF_READER_FS:"DCBrowserExt:PersistMenu:PDF:OpenInReader:Clicked:FillnSign",PERSIST_PDF_ACROBAT_FS:"DCBrowserExt:PersistMenu:PDF:OpenInAcrobat:Clicked:FillnSign",PDF_FORM_DETECTED_READER:"DCBrowserExt:PDF:Reader:Form",PDF_FORM_DETECTED_ACROBAT:"DCBrowserExt:PDF:Acrobat:Form",TREFOIL_PDF_READER_FS:"DCBrowserExt:TrefoilMenu:PDF:OpenInReader:Clicked:FillnSign",TREFOIL_PDF_ACROBAT_FS:"DCBrowserExt:TrefoilMenu:PDF:OpenInAcrobat:Clicked:FillnSign",PERSIST_PDF_MENU_CLOSED_READER_FS:"DCBrowserExt:PersistMenu:PDF:CloseReader:Clicked:FillnSign",PERSIST_PDF_MENU_CLOSED_ACROBAT_FS:"DCBrowserExt:PersistMenu:PDF:CloseAcrobat:Clicked:FillnSign",FRICTIONLESS_WIDGET_LOADED:"DCBrowserExt:WORKFLOW:TOOL:Widget:Loaded",FRICTIONLESS_WIDGET_LOADING_FAILED:"DCBrowserExt:TOOL:Widget:Failed",FRICTIONLESS_WIDGET_STARTUP_ERROR:"DCBrowserExt:TOOL:Widget:StartupError",FRICTIONLESS_HOME_SCREEN_SHOWN:"DCBrowserExt:Widget:Home:Shown",FRICTIONLESS_TOOL_SELECTED:"DCBrowserExt:Widget:TOOL:Clicked",FRICTIONLESS_AUTO_SUGGESTION_DISABLED:"DCBrowserExt:Widget:AutoSuggestion:Disabled",FRICTIONLESS_AUTO_SUGGESTION_ENABLED:"DCBrowserExt:Widget:AutoSuggestion:Enabled",ACROBAT_ONLINE_CLICKED:"DCBrowserExt:Widget:AcrobatOnline:Clicked",FRICTIONLESS_INFO_MESSAGE_SHOWN:"DCBrowserExt:Widget:Info:Shown",FRICTIONLESS_INFO_SETTINGS_CLICKED:"DCBrowserExt:Widget:Info:Settings:Clicked",FRICTIONLESS_WIDGET_CROSS_CLICKED:"DCBrowserExt:Widget:Cross:Clicked",FRICTIONLESS_WIDGET_CLOSED:"DCBrowserExt:Widget:Closed",FRICTIONLESS_TOOL_SELECTED_EDIT_REORDER:"DCBrowserExt:Widget:ReorderPages:Clicked",FRICTIONLESS_TOOL_SELECTED_EDIT_ROTATE:"DCBrowserExt:Widget:RotatePages:Clicked",FRICTIONLESS_TOOL_SELECTED_EDIT_DELETE:"DCBrowserExt:Widget:DeletePages:Clicked",FRICTIONLESS_TOOL_SELECTED_FILL_SIGN:"DCBrowserExt:Widget:Fill&Sign:Clicked",FRICTIONLESS_TOOL_SELECTED_REQUEST_SIGNATURES:"DCBrowserExt:Widget:RequestSignatures:Clicked",FRICTIONLESS_TOOL_SELECTED_PDFTOWORD:"DCBrowserExt:Widget:PDFtoWORD:Clicked",FRICTIONLESS_TOOL_SELECTED_PDFTOJPG:"DCBrowserExt:Widget:PDFtoJPG:Clicked",FRICTIONLESS_TOOL_SELECTED_PDFTOEXCEL:"DCBrowserExt:Widget:PDFtoEXCEL:Clicked",FRICTIONLESS_TOOL_SELECTED_PDFTOPPT:"DCBrowserExt:Widget:PDFtoPPT:Clicked",FRICTIONLESS_TOOL_SELECTED_CONVERT_PDF:"DCBrowserExt:Widget:ConvertPDF:Clicked",FRICTIONLESS_TOOL_SELECTED_COMPRESS_PDF:"DCBrowserExt:Widget:CompressPDF:Clicked",FRICTIONLESS_CONVERSION_LIMITS:"DCBrowserExt:FLMsg:WORKFLOW:Limits:RESULT",FRICTIONLESS_USER_SIGNEDIN:"DCBrowserExt:FLMsg:WORKFLOW:SignInStatus:RESULT",FRICTIONLESS_SWITCH_TAB:"DCBrowserExt:FLMsg:WORKFLOW:SwitchTab",GOOGLE_URL_DECODE_ERROR:"DCBrowserExt:GQUERYANALYZER:DecodeUrlError",GOOGLE_SEARCHTERM_FETCH_ERROR:"DCBrowserExt:GQUERYANALYZER:SearchTermsFetchFailed",PERSIST_PDF_ACROBAT_SHAREPOINT:"DCBrowserExt:PersistMenu:SharePointPDF:OpenInAcrobat:TIREKICK:Clicked",PERSIST_PDF_READER_SHAREPOINT:"DCBrowserExt:PersistMenu:SharePointPDF:OpenInReader:TIREKICK:Clicked",TREFOIL_PDF_ACROBAT_SHAREPOINT:"DCBrowserExt:TrefoilMenu:SharePointPDF:OpenInAcrobat:TIREKICK:Clicked",TREFOIL_PDF_READER_SHAREPOINT:"DCBrowserExt:TrefoilMenu:SharePointPDF:OpenInReader:TIREKICK:Clicked",PERSIST_FILLSIGN_ACROBAT_SHAREPOINT:"DCBrowserExt:PersistMenu:SharePointPDF:OpenInAcrobat:TIREKICK:Clicked:FillnSign",PERSIST_FILLSIGN_READER_SHAREPOINT:"DCBrowserExt:PersistMenu:SharePointPDF:OpenInReader:TIREKICK:Clicked:FillnSign",TREFOIL_FILLSIGN_ACROBAT_SHAREPOINT:"DCBrowserExt:TrefoilMenu:SharePointPDF:OpenInAcrobat:TIREKICK:Clicked:FillnSign",TREFOIL_FILLSIGN_READER_SHAREPOINT:"DCBrowserExt:TrefoilMenu:SharePointPDF:OpenInReader:TIREKICK:Clicked:FillnSign",VIEWER_FTE_LAUNCH:"DCBrowserExt:Viewer:FTE:Launch:Shown",VIEWER_FTE_NOT_NOW:"DCBrowserExt:Viewer:FTE:NotNow:Clicked",VIEWER_FTE_SET_DEFAULT:"DCBrowserExt:Viewer:FTE:SetAsDef:Clicked",PERSIST_PDF_MENU_FTE_SHOWN:"DCBrowserExt:Viewer:PersistMenu:PDF:OwnershipCard:Launch:Shown",PERSIST_PDF_MENU_FTE_DENIED:"DCBrowserExt:Viewer:PersistMenu:PDF:OwnershipCard:NoThanks:Clicked",PERSIST_PDF_MENU_FTE_CANCEL:"DCBrowserExt:Viewer:PersistMenu:PDF:OwnershipCard:NotNow:Clicked",PERSIST_PDF_MENU_FTE_ACCEPTED:"DCBrowserExt:Viewer:PersistMenu:PDF:OwnershipCard:SetAsDefault:Clicked",USE_ACROBAT_IN_CHROME_DISABLED:"DCBrowserExt:Viewer:Widget:UseAcrobatInChrome:Disabled",USE_ACROBAT_IN_CHROME_ENABLED:"DCBrowserExt:Viewer:Widget:UseAcrobatInChrome:Enabled",USE_ACROBAT_IN_EDGE_DISABLED:"DCBrowserExt:Viewer:Widget:UseAcrobatInEdge:Disabled",USE_ACROBAT_IN_EDGE_ENABLED:"DCBrowserExt:Viewer:Widget:UseAcrobatInEdge:Enabled",VIEWER_PDF_DETECT_HEADERS:"DCBrowserExt:Viewer:PDFdeterminedThroughHeaders",VIEWER_PDF_PROCESS_PDF:"DCBrowserExt:Viewer:Status:Processing:Application:PDF",VIEWER_PDF_PROCESS_OS_CD:"DCBrowserExt:Viewer:Status:Processing:OctetStream:ContentDisposition",VIEWER_PDF_PROCESS_OS_URL:"DCBrowserExt:Viewer:Status:Processing:OctetStream:URL",VIEWER_KILL_SWITCH_TURNED_ON:"DCBrowserExt:Viewer:KillSwitch:Turned:On",VIEWER_KILL_SWITCH_OFF_SUCCESS:"DCBrowserExt:KillSwitch:Turned:Off",VIEWER_KILL_SWITCH_OFF_FAILED:"DCBrowserExt:KillSwitch:Failed:Off",LOCAL_STORAGE_DISABLED:"DCBrowserExt:Viewer:LocalStorgae:Disabled",VIEWER_FILLSIGN_CLICKED:"DCBrowserExt:Viewer:Reader:FillSign:Clicked",VIEWER_FILLSIGN_CLICKED_COMPLETE:"DCBrowserExt:Viewer:Reader:FillSign:Complete:Op",VIEWER_FILLSIGN_CLICKED_FAILED:"DCBrowserExt:Viewer:Reader:FillSign:Failed:Op",VIEWER_OPEN_IN_ACRO_CLICKED:"DCBrowserExt:Viewer:Reader:OpenInAcrobat:Clicked",VIEWER_OPEN_IN_ACRO_CLICKED_COMPLETE:"DCBrowserExt:Viewer:Reader:OpenInAcrobat:Complete:Op",VIEWER_OPEN_IN_ACRO_CLICKED_FAILED:"DCBrowserExt:Viewer:Reader:OpenInAcrobat:Failed:Op",VIEWER_SHAREPOINT_CLICKED:"DCBrowserExt:Viewer:Reader:Sharepoint:Clicked",VIEWER_SHAREPOINT_CLICKED_COMPLETE:"DCBrowserExt:Viewer:Reader:Sharepoint:Complete:Op",VIEWER_SHAREPOINT_FILLSIGN_CLICKED:"DCBrowserExt:Viewer:Reader:Sharepoint:FillSign:Clicked",VIEWER_SHAREPOINT_FILLSIGN_CLICKED_COMPLETE:"DCBrowserExt:Viewer:Reader:Sharepoint:FillSign:Complete:Op",VIEWER_IMS_SIGN_IN:"DCBrowserExt:Viewer:Ims:Sign:In",VIEWER_IMS_SIGN_OUT:"DCBrowserExt:Viewer:Ims:Sign:Out",VIEWER_ENABLED_PDF_OPEN_NATIVE_VIEWER:"DCBrowserExt:Viewer:ViewerEnabled:PdfOpen:NativeViewer",VIEWER_FALLBACK_TO_NATIVE_CDN_FORBIDDEN:"DCBrowserExt:Viewer:Error:FallbackToNative:Cdn:Forbidden",VIEWER_FALLBACK_TO_NATIVE_CDN_OFFLINE:"DCBrowserExt:Viewer:Error:FallbackToNative:Cdn:Offline",VIEWER_PDF_ATTACHMENT_IGNORED:"DCBrowserExt:Viewer:Status:Ignored:Attachment:PDF",VIEWER_ATTACHMENT_IGNORED:"DCBrowserExt:Viewer:Status:Ignored:Attachment:NON_PDF",VIEWER_FALLBACK_TO_NATIVE_INCOGNITO:"DCBrowserExt:Viewer:Status:Ignored:Incognito:PDF"},this.event=function(E,r){if(e&&e.isEdge()&&(E=E.replace("DCBrowserExt","DCEdgeExt")),SETTINGS.ANALYTICS_OPT_IN&&i)if(E){r=r||{};try{this.s.t(function(E,r,t){return r=r.replace(/OPERATION/,E.operation||"Unknown").replace(/ENVIRONMENT/,E.environment).replace(/STAGE/,E.stage).replace(/TIMING/,E.timing).replace(/RANGE/,E.size).replace(/SITE/,E.site).replace(/PROTOCOL/,E.protocol),e.each(t,(function(e,E){r=r.replace(e,E)})),SETTINGS.ANALYTICS&&console.log("%c"+r,"color: #ffda94"),{eVar1:E.version,eVar2:E.installType,eVar3:E.environment,eVar4:E.shim,pageName:r}}(this,E,r))}catch(e){error(e.toString())}}else error("Missing analytics string")},this.init=function(E,r){var t=e.getCookie("logAnalytics");i=!t||"true"===e.getCookie("logAnalytics"),this.shim="not_set",this.version=E,this.installType=r,this.environment="prod",this.s=new AppMeasurement,this.s.ssl=!0,"development"===this.installType?this.s.account="adbcreatepdfplugin.dev":this.s.account="adbcreatepdfplugin.prod",this.s.trackingServer="stats.adobe.com",this.s.trackingServerSecure="sstats.adobe.com"},this.setArg=function(e,E){e&&(this[e]=E)},this.setParamsAndLogAnalytics=function(e,E,r){if(e){var t=this;e.forEach((function(e){t[r]=e,t.event(E)}))}},this.setAnalyticsUsage=function(E,r){i=E,e.setCookie("logAnalytics",i.toString(),3650),e.sendMessage({options_op:"saved_analytics",tabId:r})},this.getAnalyticsUsage=function(){return i},this.setOp=function(e){e&&(this.operation=e)},this.cleanErrorAnalyticsString=function(e){if(!e)return"DCBrowser:Error:JS:EVENT_IS_NULL";const E=e.stack?e.stack.match(/([A-Za-z0-9\-]+)\.js:(\d*):(\d*)/):"NO_FILE_IN_STACK",r="string"==typeof e.message?e.message.replace(/\s/g,"_").replace(/"\S*?"/g,"").replace(/'\S*?'/g,""):"NO_MESSAGE_IN_ERROR";return"DCBrowser:Error:JS:"+(E&&E.length>0?E[0]:"")+":"+r},this.error=function(e,E,r){try{this.event(this.e.ERROR_SHOWN);var t=this.cleanErrorAnalyticsString(r);this.event(t)}catch(e){}},E&&E.handlers(this.error.bind(this)),this.checkSizes=function(e){e>0&&e<=1?this.setArg("size","0_1"):e>1&&e<=2?this.setArg("size","1_2"):e>2&&e<=5?this.setArg("size","2_5"):e>5&&e<=10?this.setArg("size","5_10"):e>10&&e<=50?this.setArg("size","10_50"):e>50&&e<=500?this.setArg("size","50_500"):e>500&&e<=1e3?this.setArg("size","500_1000"):e>1e3&&e<=2e3?this.setArg("size","1000_2000"):e>2e3&&e<=3e3?this.setArg("size","2000_3000"):e>3e3&&e<=4e3?this.setArg("size","3000_4000"):e>4e3&&this.setArg("size","4000_")},this.checkAndLogHTMLBlobSize=function(e){this.checkSizes(e),this.event(this.e.HTML_SOURCE_SIZE)},this.checkAndLogPDFSize=function(e){this.checkSizes(e),this.event(this.e.PDF_SOURCE_SIZE)},this.checkAndLogTimingRange=function(e){e>0&&e<=5?this.setArg("timing","0_5"):e>5&&e<=10?this.setArg("timing","5_10"):e>10&&e<=20?this.setArg("timing","10_20"):e>20&&e<=30?this.setArg("timing","20_30"):e>30&&e<=50?this.setArg("timing","30_50"):e>50&&e<=100?this.setArg("timing","50_100"):e>100&&e<=200?this.setArg("timing","100_200"):e>200&&e<=600?this.setArg("timing","200_600"):e>600&&e<=1200?this.setArg("timing","600_1200"):e>1200&&e<=3e3?this.setArg("timing","1200_3000"):e>3e3&&this.setArg("timing","3000_"),this.event(this.e.HTML_CONVERSION_STAGE_TIMING)},this.logSiteAndProtocolAnalytics=function(e){var E,r,t,i,o=[],_=[];0!==e.indexOf("chrome:")&&(t=this.parseURL(e),r=/^(http|https):\/\/www/.test(e),E=/^(([0-9]+\.){3}([0-9]+))$/.test(e),i=t.hostname.split(".").reverse()[0].toLowerCase(),r&&o.push("WWWW"),E&&o.push("IP"),"com"!==i&&"org"!==i&&"net"!==i&&"int"!==i&&"edu"!==i&&"gov"!==i&&"mil"!==i||o.push("TLD"),_.push(t.protocol),this.setParamsAndLogAnalytics(_,this.e.HTML_SOURCE_PROTOCOL,"protocol"),this.setParamsAndLogAnalytics(o,this.e.HTML_SOURCE_SITE,"site"))},this.parseURL=function(e){var E=document.createElement("a");return E.href=e,{protocol:E.protocol.slice(0,E.protocol.length-1),host:E.host,hostname:E.hostname,port:E.port,pathname:E.pathname}},this.logBrowserAnalytics=function(e){e.analytics&&(e.analytics.forEach(this.proxy((function(e){e instanceof Array?this.checkAndLogAnalytics(...e):this.checkAndLogAnalytics(e)}))),delete e.analytics)},this.logContents=function(e){e.content_analytics&&(e.content_analytics.forEach(this.proxy((function(e){this.event(this.e.HTML_SOURCE_CONTENT,{CONTENT:e})}))),delete e.analytics)},this.checkAndLogAnalytics=function(E,r={}){r=r||{};var t,i="TIREKICK";E?(-1!==E.indexOf(i)&&((t=e.getCookie(i))?-1!==t.indexOf(E)?r[i]="Subsequent":(e.setCookie(i,t+"|"+E,3650),r[i]="FirstTime"):(e.setCookie(i,E,3650),r[i]="FirstTime")),this.event(E,r)):error("Missing analytics string")},this.logError=function(e){var E=e;"web2pdfHTMLTooLarge"===e&&(E=this.e.HTML_SOURCE_SIZE_TOO_LARGE_ERROR),this.event(E)}}),t)t.hasOwnProperty(r)&&("function"==typeof t[r]?exports[r]=t[r].bind(t):exports[r]=t[r]);return t}));