"use strict";(function(){function f(n,t,i){for(var s=Object.keys(t),u,e=0,h=s.length;e<h;e++){var f=s[e],o=f.charCodeAt(0)!==95,r=t[f];if(r&&typeof r=="object"&&(r.value!==undefined||typeof r.get=="function"||typeof r.set=="function")){r.enumerable===undefined&&(r.enumerable=o);i&&r.setName&&typeof r.setName=="function"&&r.setName(i+"."+f);u=u||{};u[f]=r;continue}if(!o){u=u||{};u[f]={value:r,enumerable:o,configurable:!0,writable:!0};continue}n[f]=r}u&&Object.defineProperties(n,u)}function o(n,t,i){var r=n||{},o,u,s,e;if(t)for(o=t.split("."),u=0,s=o.length;u<s;u++)e=o[u],r[e]||Object.defineProperty(r,e,{value:{},writable:!1,enumerable:!0,configurable:!0}),r=r[e];return i&&f(r,i,t||"<ANONYMOUS>"),r}function l(n,t){return o(undefined,n,t)}function s(n,t,i){return n=n||function(){},t&&f(n.prototype,t),i&&f(n,i),n}function a(n,t,i,r){if(n){t=t||function(){};var u=n.prototype;return t.prototype=Object.create(u),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,configurable:!0,enumerable:!0}),i&&f(t.prototype,i),r&&f(t,r),t}return s(t,i,r)}function v(n){n=n||function(){};for(var t=1,i=arguments.length;t<i;t++)f(n.prototype,arguments[t]);return n}var c=this,u={};u.createClient=function(n,t,i,r){return new y(n,t,i,r)};c.DocumentDB=u;var n={NotImplementedException:"NotImplementedException",defineWithParent:o,define:l,defineClass:s,derive:a,mix:v,extend:function(n,t){for(var i in t)typeof t[i]!="function"&&(n[i]=t[i]);return n},map:function(n,t){for(var r=[],i=0,u=n.length;i<u;i++)r.push(t(n[i]));return r},getHeaders:function(i,r,u,f,e,o,s){var c=n.extend({},r);return s=s||{},s.continuation&&(c[t.HttpHeaders.Continuation]=s.continuation),s.preTriggerInclude&&(c[t.HttpHeaders.PreTriggerInclude]=s.preTriggerInclude.constructor===Array?s.preTriggerInclude.join(","):s.preTriggerInclude),s.postTriggerInclude&&(c[t.HttpHeaders.PostTriggerInclude]=s.postTriggerInclude.constructor===Array?s.postTriggerInclude.join(","):s.postTriggerInclude),s.offerType!=null&&(c[t.HttpHeaders.OfferType]=s.offerType),s.maxItemCount&&(c[t.HttpHeaders.PageSize]=s.maxItemCount),s.accessCondition&&(s.accessCondition.type==="IfMatch"?c[t.HttpHeaders.IfMatch]=s.accessCondition.condition:c[t.HttpHeaders.IfNoneMatch]=s.accessCondition.condition),s.indexingDirective&&(c[t.HttpHeaders.IndexingDirective]=s.indexingDirective),s.consistencyLevel&&(c[t.HttpHeaders.ConsistencyLevel]=s.consistencyLevel),s.resourceTokenExpirySeconds&&(c[t.HttpHeaders.ResourceTokenExpiry]=s.resourceTokenExpirySeconds),s.sessionToken&&(c[t.HttpHeaders.SessionToken]=s.sessionToken),s.enableScanInQuery&&(c[t.HttpHeaders.EnableScanInQuery]=s.enableScanInQuery),i.masterKey&&(c[t.HttpHeaders.XDate]=(new Date).toUTCString()),(i.masterKey||i.resourceTokens)&&(c[t.HttpHeaders.Authorization]=encodeURIComponent(h.getAuthorizationHeader(i,u,f,e,o,c))),(u==="post"||u==="put")&&(c[t.HttpHeaders.ContentType]||(c[t.HttpHeaders.ContentType]=t.MediaTypes.Json)),c[t.HttpHeaders.Accept]||(c[t.HttpHeaders.Accept]=t.MediaTypes.Json),c},parsePath:function(n){var t,i,r;return n.length===0?{type:undefined,objectBody:undefined}:(n[n.length-1]!=="/"&&(n=n+"/"),n[0]!=="/"&&(n="/"+n),t=n.split("/"),t.length%2==0?(i=t[t.length-2],r=t[t.length-3]):(i=t[t.length-3],r=t[t.length-2]),{type:r,objectBody:{id:i,self:n}})},getAttachmentIdFromMediaId:function(n){var t=new Buffer(n,"base64"),i=20;return t.length>i?t.toString("base64",0,i):n},getHexaDigit:function(){return Math.floor(Math.random()*16).toString(16)},generateGuidId:function(){for(var i="",t=0;t<8;t++)i+=n.getHexaDigit();for(i+="-",t=0;t<4;t++)i+=n.getHexaDigit();for(i+="-",t=0;t<4;t++)i+=n.getHexaDigit();for(i+="-",t=0;t<4;t++)i+=n.getHexaDigit();for(i+="-",t=0;t<12;t++)i+=n.getHexaDigit();return i}},t={MediaTypes:{Any:"*/*",ImageJpeg:"image/jpeg",ImagePng:"image/png",Javascript:"application/x-javascript",Json:"application/json",OctetStream:"application/octet-stream",QueryJson:"application/query+json",SQL:"application/sql",TextHtml:"text/html",TextPlain:"text/plain",Xml:"application/xml"},HttpMethods:{Get:"GET",Post:"POST",Put:"PUT",Delete:"DELETE",Head:"HEAD",Options:"OPTIONS"},HttpHeaders:{Authorization:"authorization",ETag:"etag",MethodOverride:"X-HTTP-Method",Slug:"Slug",ContentType:"Content-Type",LastModified:"Last-Modified",ContentEncoding:"Content-Encoding",CharacterSet:"CharacterSet",UserAgent:"User-Agent",IfModifiedSince:"If-Modified-Since",IfMatch:"If-Match",IfNoneMatch:"If-None-Match",ContentLength:"Content-Length",AcceptEncoding:"Accept-Encoding",KeepAlive:"Keep-Alive",CacheControl:"Cache-Control",TransferEncoding:"Transfer-Encoding",ContentLanguage:"Content-Language",ContentLocation:"Content-Location",ContentMd5:"Content-Md5",ContentRange:"Content-Range",Accept:"Accept",AcceptCharset:"Accept-Charset",AcceptLanguage:"Accept-Language",IfRange:"If-Range",IfUnmodifiedSince:"If-Unmodified-Since",MaxForwards:"Max-Forwards",ProxyAuthorization:"Proxy-Authorization",AcceptRanges:"Accept-Ranges",ProxyAuthenticate:"Proxy-Authenticate",RetryAfter:"Retry-After",SetCookie:"Set-Cookie",WwwAuthenticate:"Www-Authenticate",Origin:"Origin",Host:"Host",AccessControlAllowOrigin:"Access-Control-Allow-Origin",AccessControlAllowHeaders:"Access-Control-Allow-Headers",KeyValueEncodingFormat:"application/x-www-form-urlencoded",WrapAssertionFormat:"wrap_assertion_format",WrapAssertion:"wrap_assertion",WrapScope:"wrap_scope",SimpleToken:"SWT",HttpDate:"date",Prefer:"Prefer",Location:"Location",Referer:"referer",Query:"x-ms-documentdb-query",IsQuery:"x-ms-documentdb-isquery",Continuation:"x-ms-continuation",PageSize:"x-ms-max-item-count",ActivityId:"x-ms-activity-id",PreTriggerInclude:"x-ms-documentdb-pre-trigger-include",PreTriggerExclude:"x-ms-documentdb-pre-trigger-exclude",PostTriggerInclude:"x-ms-documentdb-post-trigger-include",PostTriggerExclude:"x-ms-documentdb-post-trigger-exclude",IndexingDirective:"x-ms-indexing-directive",SessionToken:"x-ms-session-token",ConsistencyLevel:"x-ms-consistency-level",XDate:"x-ms-date",CollectionPartitionInfo:"x-ms-collection-partition-info",CollectionServiceInfo:"x-ms-collection-service-info",RetryAfterInMilliseconds:"x-ms-retry-after-ms",IsFeedUnfiltered:"x-ms-is-feed-unfiltered",ResourceTokenExpiry:"x-ms-documentdb-expiry-seconds",EnableScanInQuery:"x-ms-documentdb-query-enable-scan",EmitVerboseTracesInQuery:"x-ms-documentdb-query-emit-traces",Version:"x-ms-version",MaxEntityCount:"x-ms-root-entity-max-count",CurrentEntityCount:"x-ms-root-entity-current-count",CollectionQuotaInMb:"x-ms-collection-quota-mb",CollectionCurrentUsageInMb:"x-ms-collection-usage-mb",MaxMediaStorageUsageInMB:"x-ms-max-media-storage-usage-mb",CurrentMediaStorageUsageInMB:"x-ms-media-storage-usage-mb",RequestCharge:"x-ms-request-charge",OfferType:"x-ms-offer-type"},CurrentVersion:"2015-06-03",UserAgent:"documentdb-nodejs-sdk-1.1.0",DefaultPrecisions:{DefaultNumberHashPrecision:3,DefaultNumberRangePrecision:-1,DefaultStringHashPrecision:3,DefaultStringRangePrecision:-1}},r=n.defineClass(function(n,t,i,r){this.documentclient=n;this.query=t;this.resources=[];this.current=0;this.fetchFunction=r;this.continuation=null;this.options=i||{};this._states=Object.freeze({start:"start",inProgress:"inProgress",ended:"ended"});this._state=this._states.start},{forEach:function(n){this._state!==this._states.start&&this.reset();this._forEachImplementation(n)},nextItem:function(n){var t=this;if(this.current<this.resources.length)return n(undefined,this.resources[this.current++]);this._state===this._states.start||this.continuation&&this._state===this._states.inProgress?this._fetchMore(function(i,r,u){if(i)return n(i,undefined,u);if(t.resources=r,t.resources.length===0)return t.continuation?t.nextItem(n):(t._state=t._states.ended,n(undefined,undefined)),undefined;n(undefined,t.resources[t.current++])}):(this._state=this._states.ended,n(undefined,undefined))},current:function(){return this.resources[this.current]},hasMoreResults:function(){return this._state===this._states.start||this.continuation!==undefined||this.current<this.resources.length},toArray:function(n){this._state!==this._states.start&&this.reset();this._toArrayImplementation(n)},executeNext:function(n){this._fetchMore(function(t,i,r){if(t)return n(t,undefined,r);n(undefined,i,r)})},reset:function(){this.current=0;this.continuation=null;this.resources=[];this._state=this._states.start},_toArrayImplementation:function(n){var t=this;this._state===this._states.start||this.continuation&&this._state===this._states.inProgress?this._fetchMore(function(i,r,u){if(i)return n(i,undefined,u);t.resources=t.resources.concat(r);t._toArrayImplementation(n)}):(this._state=this._states.ended,n(undefined,this.resources))},_forEachImplementation:function(n){var t=this;this._state===this._states.start||this.continuation&&this._state===this._states.inProgress?this._fetchMore(function(i,r,u){if(i)return n(i,undefined,u);for(t.resources=r;t.current<t.resources.length;)if(n(undefined,t.resources[t.current++])===!1)return undefined;t._forEachImplementation(n)}):(t._state=t._states.ended,n(undefined,undefined))},_fetchMore:function(n){var i=this;this.options.continuation=this.continuation;this.fetchFunction(this.options,function(r,u,f){if(r)return i._state=i._states.ended,n(r,undefined,f);i.continuation=f[t.HttpHeaders.Continuation];i._state=i._states.inProgress;i.current=0;n(undefined,u,f)})}}),i=n.defineClass(null,null,{DatabaseAccount:n.defineClass(function(){Object.defineProperty(this,"DatabasesLink",{value:"",writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"MediaLink",{value:"",writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"MaxMediaStorageUsageInMB",{value:0,writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"CurrentMediaStorageUsageInMB",{value:0,writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"ConsumedDocumentStorageInMB",{value:0,writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"ReservedDocumentStorageInMB",{value:0,writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"ProvisionedDocumentStorageInMB",{value:0,writable:!0,configurable:!0,enumerable:!0});Object.defineProperty(this,"ConsistencyPolicy",{value:"",writable:!0,configurable:!0,enumerable:!0})}),ConsistencyLevel:Object.freeze({Strong:"Strong",BoundedStaleness:"BoundedStaleness",Session:"Session",Eventual:"Eventual"}),IndexingMode:Object.freeze({Consistent:"consistent",Lazy:"lazy",None:"none"}),IndexKind:Object.freeze({Hash:"Hash",Range:"Range"}),DataType:Object.freeze({Number:"Number",String:"String"}),ConnectionMode:Object.freeze({Gateway:0}),QueryCompatibilityMode:Object.freeze({Default:0,Query:1,SqlQuery:2}),MediaReadMode:Object.freeze({Buffered:"Buffered",Streamed:"Streamed"}),PermissionMode:Object.freeze({None:"none",Read:"read",All:"all"}),TriggerType:Object.freeze({Pre:"pre",Post:"post"}),TriggerOperation:Object.freeze({All:"all",Create:"create",Update:"update",Delete:"delete",Replace:"replace"}),UserDefinedFunctionType:Object.freeze({Javascript:"Javascript"}),ConnectionPolicy:n.defineClass(function(){Object.defineProperty(this,"_defaultRequestTimeout",{value:6e4,writable:!0,configurable:!0,enumerable:!1});Object.defineProperty(this,"_defaultMediaRequestTimeout",{value:3e5,writable:!0,configurable:!0,enumerable:!1});this.ConnectionMode=i.ConnectionMode.Gateway;this.MediaReadMode=i.MediaReadMode.Buffered;this.MediaRequestTimeout=this._defaultMediaRequestTimeout;this.RequestTimeout=this._defaultRequestTimeout})}),e={_createXmlHttpRequest:function(){if(window.XMLHttpRequest)return new window.XMLHttpRequest;var n;if(window.ActiveXObject)try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(i){try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){n=t}}else n={message:"XMLHttpRequest not supported"};throw n;},_readResponseHeaders:function(n,t){var f=n.getAllResponseHeaders(),r,i,e,u;if(f)for(r=f.split(/\r?\n/),i=0,e=r.length;i<e;i++)r[i]&&(u=r[i].split(": "),t[u[0]]=u[1])},_addRequestHeaders:function(n,t){if(t)for(var i in t)n.setRequestHeader(i,t[i])},_preProcessUrl:function(n,t,i){return t=t||"",i=i||"",n+t+"?"+i},request:function(n,t,i,r,u,f,e,o){var l={},s=null,c,h,a,v;return i=this._preProcessUrl(i,r,f),c=r.indexOf("media")>-1,h=!1,l.abort=function(){h||(h=!0,s&&(s.abort(),s=null),o({message:"Request aborted"}))},a=function(){h||(h=!0,s=null,o({message:"Request timed out"}))},s=this._createXmlHttpRequest(),v=this,s.onreadystatechange=function(){var r,n,i,t,u;if(!h&&s!==null&&s.readyState===4){if(r=s.statusText,n=s.status,n===1223&&(n=204,r="No Content"),i={},v._readResponseHeaders(s,i),t=s.responseText,h=!0,s=null,n>=400)return o({code:n,body:t},undefined,i);try{u=c?t:t.length>0?JSON.parse(t):undefined}catch(f){return o(f)}return o(undefined,u,i)}},s.open(t||"GET",i,!0),this._addRequestHeaders(s,e),s.timeout=c?n.MediaRequestTimeout:n.RequestTimeout,s.ontimeout=a,typeof u=="object"&&(u=JSON.stringify(u)),s.send(u),l}},h={getAuthorizationHeader:function(n,t,i,r,u,f){return n.resourceTokens?this.getAuthorizationTokenUsingResourceTokens(n.resourceTokens,i,r):n.masterKey?this.getAuthorizationTokenUsingMasterKey(t,r,u,f,n.masterKey):""},getAuthorizationTokenUsingMasterKey:function(){throw"Authentication for javascript client doesn't currently support master key, please use resource tokens instead";},getAuthorizationTokenUsingResourceTokens:function(n,t,i){var u,f,r;if(n[i])return n[i];for(u=t.split("/"),f=["dbs","colls","docs","sprocs","udfs","triggers","users","permissions","attachments","media","conflicts"],r=u.length-1;r>=0;r--)if(f.indexOf(u[r])===-1&&n[u[r]])return n[u[r]]}},y=n.defineClass(function(n,r,u,f){var e,o,s;if(this.urlConnection=n,r!==undefined&&(this.masterKey=r.masterKey,this.resourceTokens=r.resourceTokens,r.permissionFeed))for(this.resourceTokens={},e=0;e<r.permissionFeed.length;e++)o=r.permissionFeed[e].resource.split("/"),s=o[o.length-1],this.resourceTokens[s]=r.permissionFeed[e]._token;this.connectionPolicy=u||new i.ConnectionPolicy;this.defaultHeaders={};this.defaultHeaders[t.HttpHeaders.CacheControl]="no-cache";this.defaultHeaders[t.HttpHeaders.Version]=t.CurrentVersion;f!==undefined&&(this.defaultHeaders[t.HttpHeaders.ConsistencyLevel]=f);t.UserAgent&&(this.defaultHeaders[t.HttpHeaders.UserAgent]=t.UserAgent);this.defaultUrlParams="";this.queryCompatibilityMode=i.QueryCompatibilityMode.Default},{createDatabase:function(n,t,i){i||(i=t);this.create(n,"/dbs","dbs",undefined,undefined,t,i)},createCollection:function(t,i,r,u){u||(u=r,r={});this.useDefaultIndexingPolicy(i);var f="/"+t+"colls/",e=n.parsePath(t);this.create(i,f,"colls",e.objectBody.id,undefined,r,u)},createDocument:function(t,i,r,u){u||(u=r,r={});r||(r={});i.id!==undefined&&i.id!==""||r.disableAutomaticIdGeneration||(i.id=n.generateGuidId());var f="/"+t+"docs/",e=n.parsePath(t);this.create(i,f,"docs",e.objectBody.id,undefined,r,u)},createAttachment:function(t,i,r,u){u||(u=r,r={});var f="/"+t+"attachments/",e=n.parsePath(t);this.create(i,f,"attachments",e.objectBody.id,undefined,r,u)},createUser:function(t,i,r,u){u||(u=r,r={});var f="/"+t+"users/",e=n.parsePath(t);this.create(i,f,"users",e.objectBody.id,undefined,r,u)},createPermission:function(t,i,r,u){u||(u=r,r={});var f="/"+t+"permissions/",e=n.parsePath(t);this.create(i,f,"permissions",e.objectBody.id,undefined,r,u)},createTrigger:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f=n.parsePath(t),e="/"+t+"triggers/";this.create(i,e,"triggers",f.objectBody.id,undefined,r,u)},createUserDefinedFunction:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f="/"+t+"udfs/",e=n.parsePath(t);this.create(i,f,"udfs",e.objectBody.id,undefined,r,u)},createStoredProcedure:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f="/"+t+"sprocs/",e=n.parsePath(t);this.create(i,f,"sprocs",e.objectBody.id,undefined,r,u)},createAttachmentAndUploadMedia:function(i,r,u,f){var e,o,s;f||(f=u,u={});u=u||{};e=n.extend({},this.defaultHeaders);u.slug&&(e[t.HttpHeaders.Slug]=u.slug);e[t.HttpHeaders.ContentType]=u.contentType?u.contentType:t.MediaTypes.OctetStream;o="/"+i+"attachments/";s=n.parsePath(i);this.create(r,o,"attachments",s.objectBody.id,e,u,f)},readDatabase:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"dbs",f.objectBody.id,undefined,i,r)},readCollection:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"colls",f.objectBody.id,undefined,i,r)},readDocument:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"docs",f.objectBody.id,undefined,i,r)},readAttachment:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"attachments",f.objectBody.id,undefined,i,r)},readUser:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"users",f.objectBody.id,undefined,i,r)},readPermission:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"permissions",f.objectBody.id,undefined,i,r)},readTrigger:function(t,i,r){r||(r=i,i={});var u=n.parsePath(t),f="/"+t;this.read(f,"triggers",u.objectBody.id,undefined,i,r)},readUserDefinedFunction:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"udfs",f.objectBody.id,undefined,i,r)},readStoredProcedure:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"sprocs",f.objectBody.id,undefined,i,r)},readConflict:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.read(u,"conflicts",f.objectBody.id,undefined,i,r)},readDatabases:function(n){return this.queryDatabases(undefined,n)},readCollections:function(n,t){return this.queryCollections(n,undefined,t)},readDocuments:function(n,t){return this.queryDocuments(n,undefined,t)},readAttachments:function(n,t){return this.queryAttachments(n,undefined,t)},readUsers:function(n,t){return this.queryUsers(n,undefined,t)},readPermissions:function(n,t){return this.queryPermissions(n,undefined,t)},readTriggers:function(n,t){return this.queryTriggers(n,undefined,t)},readUserDefinedFunctions:function(n,t){return this.queryUserDefinedFunctions(n,undefined,t)},readStoredProcedures:function(n,t){return this.queryStoredProcedures(n,undefined,t)},readConflicts:function(n,t){return this.queryConflicts(n,undefined,t)},queryDatabases:function(n,t){var i=this;return new r(this,n,t,function(t,r){i.queryFeed.call(i,i,"/dbs","dbs","",function(n){return n.Databases},function(n,t){return t},n,t,r)})},queryCollections:function(t,i,u){var f=this,e="/"+t+"colls/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"colls",o.objectBody.id,function(n){return n.DocumentCollections},function(n,t){return t},i,n,t)})},queryDocuments:function(t,i,u){var f=this,e="/"+t+"docs/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"docs",o.objectBody.id,function(n){return n.Documents},function(n,t){return t},i,n,t)})},queryAttachments:function(t,i,u){var f=this,e="/"+t+"attachments/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"attachments",o.objectBody.id,function(n){return n.Attachments},function(n,t){return t},i,n,t)})},queryUsers:function(t,i,u){var f=this,e="/"+t+"users/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"users",o.objectBody.id,function(n){return n.Users},function(n,t){return t},i,n,t)})},queryPermissions:function(t,i,u){var f=this,e=n.parsePath(t),o="/"+t+"permissions/";return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,o,"permissions",e.objectBody.id,function(n){return n.Permissions},function(n,t){return t},i,n,t)})},queryTriggers:function(t,i,u){var f=this,e=n.parsePath(t),o="/"+t+"triggers/";return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,o,"triggers",e.objectBody.id,function(n){return n.Triggers},function(n,t){return t},i,n,t)})},queryUserDefinedFunctions:function(t,i,u){var f=this,e="/"+t+"udfs/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"udfs",o.objectBody.id,function(n){return n.UserDefinedFunctions},function(n,t){return t},i,n,t)})},queryStoredProcedures:function(t,i,u){var f=this,e=n.parsePath(t),o="/"+t+"sprocs/";return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,o,"sprocs",e.objectBody.id,function(n){return n.StoredProcedures},function(n,t){return t},i,n,t)})},queryConflicts:function(t,i,u){var f=this,e="/"+t+"conflicts/",o=n.parsePath(t);return new r(this,i,u,function(n,t){f.queryFeed.call(f,f,e,"conflicts",o.objectBody.id,function(n){return n.Conflicts},function(n,t){return t},i,n,t)})},deleteDatabase:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"dbs",f.objectBody.id,undefined,i,r)},deleteCollection:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"colls",f.objectBody.id,undefined,i,r)},deleteDocument:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"docs",f.objectBody.id,undefined,i,r)},deleteAttachment:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"attachments",f.objectBody.id,undefined,i,r)},deleteUser:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"users",f.objectBody.id,undefined,i,r)},deletePermission:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"permissions",f.objectBody.id,undefined,i,r)},deleteTrigger:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"triggers",f.objectBody.id,undefined,i,r)},deleteUserDefinedFunction:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"udfs",f.objectBody.id,undefined,i,r)},deleteStoredProcedure:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"sprocs",f.objectBody.id,undefined,i,r)},deleteConflict:function(t,i,r){r||(r=i,i={});var u="/"+t,f=n.parsePath(t);this.deleteResource(u,"conflicts",f.objectBody.id,undefined,i,r)},replaceDocument:function(t,i,r,u){u||(u=r,r={});var f="/"+t,e=n.parsePath(t);this.replace(i,f,"docs",e.objectBody.id,undefined,r,u)},replaceAttachment:function(t,i,r,u){u||(u=r,r={});var f="/"+t,e=n.parsePath(t);this.replace(i,f,"attachments",e.objectBody.id,undefined,r,u)},replaceUser:function(t,i,r,u){u||(u=r,r={});var f="/"+t,e=n.parsePath(t);this.replace(i,f,"users",e.objectBody.id,undefined,r,u)},replacePermission:function(t,i,r,u){u||(u=r,r={});var f="/"+t,e=n.parsePath(t);this.replace(i,f,"permissions",e.objectBody.id,undefined,r,u)},replaceTrigger:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f="/"+t,e=n.parsePath(t);this.replace(i,f,"triggers",e.objectBody.id,undefined,r,u)},replaceUserDefinedFunction:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f="/"+t,e=n.parsePath(t);this.replace(i,f,"udfs",e.objectBody.id,undefined,r,u)},replaceStoredProcedure:function(t,i,r,u){u||(u=r,r={});i.serverScript?i.body=i.serverScript.toString():i.body&&(i.body=i.body.toString());var f="/"+t,e=n.parsePath(t);this.replace(i,f,"sprocs",e.objectBody.id,undefined,r,u)},readMedia:function(i,r){var s=n.parsePath(i),u="/"+i,f=n.extend({},this.defaultHeaders),e,o;f[t.HttpHeaders.Accept]=t.MediaTypes.Any;e=n.getAttachmentIdFromMediaId(s.objectBody.id);o=n.getHeaders(this,f,"get",u,e,"media",{});this.get(this.urlConnection,u,o,r)},updateMedia:function(i,r,u,f){var o,e;f||(f=u,u={});o=this.defaultHeaders;e=n.extend({},o);u.slug&&(e[t.HttpHeaders.Slug]=u.slug);e[t.HttpHeaders.ContentType]=u.contentType?u.contentType:t.MediaTypes.OctetStream;e[t.HttpHeaders.Accept]=t.MediaTypes.Any;var h=this.urlConnection,c=n.parsePath(i),s="/"+i,l=n.getAttachmentIdFromMediaId(c.objectBody.id),a=n.getHeaders(this,e,"put",s,l,"media",u);this.put(h,s,r,a,f)},executeStoredProcedure:function(t,i,r){var f,u;r||(r=i,i=null);f=this.defaultHeaders;u={};u=n.extend(u,f);i&&i.constructor!==Array&&(i=[i]);var o=this.urlConnection,e="/"+t,s=n.parsePath(t),h=n.getHeaders(this,u,"post",e,s.objectBody.id,"sprocs",{});this.post(o,e,i,h,r)},replaceOffer:function(t,i,r){var u="/"+t,f=n.parsePath(t);this.replace(i,u,"offers",f.objectBody.id,undefined,{},r)},readOffer:function(t,i){var r="/"+t,u=n.parsePath(t);this.read(r,"offers",u.objectBody.id,undefined,{},i)},readOffers:function(n){return this.queryOffers(undefined,n)},queryOffers:function(n,t){var i=this;return new r(this,n,t,function(t,r){i.queryFeed.call(i,i,"/offers","offers","",function(n){return n.Offers},function(n,t){return t},n,t,r)})},getDatabaseAccount:function(r){var u=n.getHeaders(this,this.defaultHeaders,"get","","","",{});this.get(this.urlConnection,"",u,function(n,u,f){if(n)return r(n);var e=new i.DatabaseAccount;e.DatabasesLink="/dbs/";e.MediaLink="/media/";e.MaxMediaStorageUsageInMB=f[t.HttpHeaders.MaxMediaStorageUsageInMB];e.CurrentMediaStorageUsageInMB=f[t.HttpHeaders.CurrentMediaStorageUsageInMB];e.ConsistencyPolicy=u.userConsistencyPolicy;r(undefined,e,f)})},create:function(t,i,r,u,f,e,o){var h=this.urlConnection,s;f=f||this.defaultHeaders;s=n.getHeaders(this,f,"post",i,u,r,e);this.post(h,i,t,s,o)},replace:function(t,i,r,u,f,e,o){var h=this.urlConnection,s;f=f||this.defaultHeaders;s=n.getHeaders(this,f,"put",i,u,r,e);this.put(h,i,t,s,o)},read:function(t,i,r,u,f,e){u=u||this.defaultHeaders;var o=n.getHeaders(this,u,"get",t,r,i,f);this.get(this.urlConnection,t,o,e)},deleteResource:function(t,i,r,u,f,e){var s=this.urlConnection,o;u=u||this.defaultHeaders;o=n.getHeaders(this,u,"delete",t,r,i,f);this.delete(s,t,o,e)},get:function(n,t,i,r){return e.request(this.connectionPolicy,"GET",n,t,undefined,this.defaultUrlParams,i,r)},post:function(n,t,i,r,u){return e.request(this.connectionPolicy,"POST",n,t,i,this.defaultUrlParams,r,u)},put:function(n,t,i,r,u){return e.request(this.connectionPolicy,"PUT",n,t,i,this.defaultUrlParams,r,u)},head:function(n,t,i,r){return e.request(this.connectionPolicy,"HEAD",n,t,undefined,this.defaultUrlParams,i,r)},"delete":function(n,t,i,r){return e.request(this.connectionPolicy,"DELETE",n,t,undefined,this.defaultUrlParams,i,r)},queryFeed:function(r,u,f,e,o,s,h,c,l){var w=this,v;l||(l=c,c={});var y=function(t,i,r){if(t)return l(t,undefined,r);var u;u=h?o(i):n.map(o(i),function(n){return s(w,n)});l(undefined,u,r)},p=r.urlConnection,a=n.extend({},r.defaultHeaders);if(h===undefined)v=n.getHeaders(r,a,"get",u,e,f,c),r.get(p,u,v,y);else{a[t.HttpHeaders.IsQuery]="true";switch(this.queryCompatibilityMode){case i.QueryCompatibilityMode.SqlQuery:a[t.HttpHeaders.ContentType]=t.MediaTypes.SQL;break;case i.QueryCompatibilityMode.Query:case i.QueryCompatibilityMode.Default:default:typeof h=="string"&&(h={query:h});a[t.HttpHeaders.ContentType]=t.MediaTypes.QueryJson}v=n.getHeaders(r,a,"post",u,e,f,c);r.post(p,u,h,v,y)}},useDefaultIndexingPolicy:function(n){var f,u,e,r;if(n)for(n.indexingPolicy||(n.indexingPolicy={}),n.indexingPolicy.indexingMode===i.IndexingMode.None||n.indexingPolicy.includedPaths||n.indexingPolicy.excludedPaths||(n.indexingPolicy.includedPaths=[{path:"/*"}]),f=0;f<n.indexingPolicy.includedPaths.length;++f)for(u=n.indexingPolicy.includedPaths[f],u.indexes||(u.indexes=[{kind:i.IndexKind.Hash,dataType:i.DataType.String,precision:t.DefaultPrecisions.DefaultStringHashPrecision},{kind:i.IndexKind.Range,dataType:i.DataType.Number,precision:t.DefaultPrecisions.DefaultNumberRangePrecision}]),e=0;e<u.indexes.length;++e)r=u.indexes[e],r.kind===i.IndexKind.Hash?r.precision||(r.dataType===i.DataType.String?r.precision=t.DefaultPrecisions.DefaultStringHashPrecision:r.dataType===i.DataType.Number&&(r.precision=t.DefaultPrecisions.DefaultNumberHashPrecision)):r.kind===i.IndexKind.Range&&(r.precision||(r.dataType===i.DataType.String?r.precision=t.DefaultPrecisions.DefaultStringRangePrecision:r.dataType===i.DataType.Number&&(r.precision=t.DefaultPrecisions.DefaultNumberRangePrecision)))}});return n.getAttachmentIdFromMediaId=function(n){var t=atob(n),i=20;return t.length>i?btoa(t.substring(0,i)):n},t.UserAgent=null,u.DocumentBase=i,u.RequestHandler=e,u.AuthHandler=h,u._parsePath=n.parsePath,u}).call(this)