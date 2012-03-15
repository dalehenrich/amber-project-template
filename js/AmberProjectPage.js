smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, ['username', 'projectname', 'descriptionDiv', 'repositoryJson', 'projectLinkDiv', 'authorLinkDiv', 'authorJson'], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@projectLinkDiv']=smalltalk.send(div, "_h1", []));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@descriptionDiv']=(function($rec){smalltalk.send($rec, "_class_", ["alt"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(div, "_h3", [])));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);return (self['@authorLinkDiv']=smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_repositoryJsonDo_", [(function(json){smalltalk.send(self['@descriptionDiv'], "_contents_", [(function(h){return smalltalk.send(h, "_with_", [smalltalk.send(json, "_description", [])]);})]);return smalltalk.send(self, "_renderProjectLink_", [smalltalk.send(json, "_at_", ["html_url"])]);})]);
smalltalk.send(self, "_authorJsonDo_", [(function(json){return smalltalk.send(self, "_renderAuthor_link_", [smalltalk.send(json, "_name", []), smalltalk.send(json, "_at_", ["html_url"])]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20class%3A%27container%27%3B%20with%3A%5B%20%0A%09%09html%20div%0A%09%09%09id%3A%20%27header%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%20%3Adiv%20%7C%20projectLinkDiv%20%3A%3D%20div%20h1%20%5D.%0A%09%09html%20hr.%0A%09%09html%20div%0A%09%09%09id%3A%20%27subheader%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%3Adiv%20%7C%20%0A%09%09%09%09descriptionDiv%20%3A%3D%20%28div%20h3%29%0A%09%09%09%09%09class%3A%20%27alt%27%3B%0A%09%09%09%09%09yourself%20%5D.%0A%09%09html%20hr.%0A%09%09authorLinkDiv%20%3A%3D%20html%20div%20%5D.%0A%09self%20repositoryJsonDo%3A%20%5B%3Ajson%20%7C%20%0A%20%20%20%20%20%20%20%20%09descriptionDiv%20contents%3A%20%5B%3Ah%20%7C%20h%20with%3A%20json%20description%20%5D.%0A%09%09self%20renderProjectLink%3A%20%28json%20at%3A%20%27html_url%27%29%20%5D.%0A%09self%20authorJsonDo%3A%20%5B%3Ajson%20%7C%20self%20renderAuthor%3A%20json%20name%20link%3A%20%28json%20at%3A%20%27html_url%27%29%20%5D.'),
messageSends: ["class:", "with:", "id:", "h1", "div", "hr", "yourself", "h3", "repositoryJsonDo:", "contents:", "description", "renderProjectLink:", "at:", "authorJsonDo:", "renderAuthor:link:", "name"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
category: 'accessing',
fn: function (){
var self=this;
var hostname=nil;
var index=nil;
(($receiver = self['@username']) == nil || $receiver == undefined) ? (function(){(hostname=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_location", []), "_hostname", []));(self['@index']=smalltalk.send(hostname, "_indexOf_", ["."]));return (self['@username']=smalltalk.send(hostname, "_copyFrom_to_", [(1), ((($receiver = self['@index']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]));})() : $receiver;
return self['@username'];
return self;},
args: [],
source: unescape('username%0A%0A%09%7C%20hostname%20index%20%7C%0A%09username%20ifNil%3A%20%5B%20%0A%09%09hostname%20%3A%3D%20window%20location%20hostname.%0A%09%09index%20%3A%3D%20hostname%20indexOf%3A%20%27.%27.%0A%09%09username%20%3A%3D%20hostname%20copyFrom%3A%201%20to%3A%20index%20-1%20%5D.%0A%09%5Eusername%0A%09'),
messageSends: ["ifNil:", "hostname", "location", "indexOf:", "copyFrom:to:", unescape("-")],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_projectname'),
smalltalk.method({
selector: unescape('projectname'),
category: 'accessing',
fn: function (){
var self=this;
var path=nil;
(($receiver = self['@projectname']) == nil || $receiver == undefined) ? (function(){(path=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_location", []), "_pathname", []));return (self['@projectname']=smalltalk.send(path, "_copyFrom_to_", [(2), ((($receiver = smalltalk.send(path, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]));})() : $receiver;
return self['@projectname'];
return self;},
args: [],
source: unescape('projectname%0A%0A%09%7C%20path%20%7C%0A%09projectname%20ifNil%3A%20%5B%20%0A%09%09path%20%3A%3D%20window%20location%20pathname.%0A%09%09projectname%20%3A%3D%20path%20copyFrom%3A%202%20to%3A%20path%20size%20-%201%20%5D.%0A%09%5Eprojectname%0A%09'),
messageSends: ["ifNil:", "pathname", "location", "copyFrom:to:", unescape("-"), "size"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getRepositoryJsonDo_onError_'),
smalltalk.method({
selector: unescape('getRepositoryJsonDo%3AonError%3A'),
category: 'ajax',
fn: function (aBlock, errorBlock){
var self=this;
smalltalk.send(self, "_getJson_do_onError_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A/api.github.com/repos/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_projectname", [])]), aBlock, errorBlock]);
return self;},
args: ["aBlock", "errorBlock"],
source: unescape('getRepositoryJsonDo%3A%20aBlock%20onError%3A%20errorBlock%0A%0A%09self%20getJson%3A%20%27https%3A/api.github.com/repos/%27%2C%20self%20username%2C%20%27/%27%2C%20self%20projectname%20do%3A%20aBlock%20onError%3A%20errorBlock%0A'),
messageSends: ["getJson:do:onError:", unescape("%2C"), "username", "projectname"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_repositoryJsonDo_'),
smalltalk.method({
selector: unescape('repositoryJsonDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
try{(($receiver = self['@repositoryJson']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_getRepositoryJsonDo_onError_", [(function(repoJSON){(self['@repositoryJson']=repoJSON);return smalltalk.send(aBlock, "_value_", [self['@repositoryJson']]);}), (function(status){return nil;})]);return (function(){throw({name: 'stReturn', selector: '_repositoryJsonDo_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(smalltalk.send(aBlock, "_value", []), "_repositoryJson", []);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_repositoryJsonDo_'){return e.fn()} throw(e)}},
args: ["aBlock"],
source: unescape('repositoryJsonDo%3A%20aBlock%0A%0A%09repositoryJson%20ifNil%3A%20%5B%0A%09%09self%20%0A%09%09%09getRepositoryJsonDo%3A%20%5B%3ArepoJSON%20%7C%20%0A%09%09%09%09repositoryJson%20%3A%3D%20%20repoJSON.%0A%09%09%09%09aBlock%20value%3A%20repositoryJson%20%20%20%5D%20%0A%09%09%09onError%3A%20%5B%3Astatus%20%7C%20%20%5D.%0A%09%09%5Eself%20%5D.%0A%09aBlock%20value%20repositoryJson%0A%09'),
messageSends: ["ifNil:", "getRepositoryJsonDo:onError:", "value:", "repositoryJson", "value"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_renderProjectLink_'),
smalltalk.method({
selector: unescape('renderProjectLink%3A'),
category: 'rendering',
fn: function (url){
var self=this;
smalltalk.send(self['@projectLinkDiv'], "_contents_", [(function(h){return (function($rec){smalltalk.send($rec, "_href_", [url]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_projectname", [])]);})(smalltalk.send(h, "_a", []));})]);
return self;},
args: ["url"],
source: unescape('renderProjectLink%3A%20url%0A%0A%09projectLinkDiv%20contents%3A%20%5B%3Ah%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20%0A%09%09%09a%20href%3A%20url%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20self%20projectname%20%5D.'),
messageSends: ["contents:", "href:", "with:", "projectname", "a"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_authorJsonDo_'),
smalltalk.method({
selector: unescape('authorJsonDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
try{(($receiver = self['@authorJson']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_getAuthorJsonDo_onError_", [(function(authJSON){(self['@authorJson']=authJSON);return smalltalk.send(aBlock, "_value_", [self['@authorJson']]);}), (function(status){return nil;})]);return (function(){throw({name: 'stReturn', selector: '_authorJsonDo_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(smalltalk.send(aBlock, "_value", []), "_authorJson", []);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_authorJsonDo_'){return e.fn()} throw(e)}},
args: ["aBlock"],
source: unescape('authorJsonDo%3A%20aBlock%0A%09authorJson%20ifNil%3A%20%5B%0A%09%09self%20%0A%09%09%09getAuthorJsonDo%3A%20%5B%3AauthJSON%20%7C%20%0A%09%09%09%09authorJson%20%3A%3D%20%20authJSON.%0A%09%09%09%09aBlock%20value%3A%20authorJson%20%20%20%5D%20%0A%09%09%09onError%3A%20%5B%3Astatus%20%7C%20%20%5D.%0A%09%09%5Eself%20%5D.%0A%09aBlock%20value%20authorJson%0A%09'),
messageSends: ["ifNil:", "getAuthorJsonDo:onError:", "value:", "authorJson", "value"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getAuthorJsonDo_onError_'),
smalltalk.method({
selector: unescape('getAuthorJsonDo%3AonError%3A'),
category: 'ajax',
fn: function (aBlock, errorBlock){
var self=this;
smalltalk.send(self, "_getJson_do_onError_", [smalltalk.send(unescape("https%3A/api.github.com/users/"), "__comma", [smalltalk.send(self, "_username", [])]), aBlock, errorBlock]);
return self;},
args: ["aBlock", "errorBlock"],
source: unescape('getAuthorJsonDo%3A%20aBlock%20onError%3A%20errorBlock%0A%0A%09self%20getJson%3A%20%27https%3A/api.github.com/users/%27%2C%20self%20username%20do%3A%20aBlock%20onError%3A%20errorBlock%0A'),
messageSends: ["getJson:do:onError:", unescape("%2C"), "username"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getJson_do_onError_'),
smalltalk.method({
selector: unescape('getJson%3Ado%3AonError%3A'),
category: 'ajax',
fn: function (url, aBlock, errorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [url, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(jsonpData, status, jqXHR){return smalltalk.send(aBlock, "_value_", [smalltalk.send(jsonpData, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(errorBlock, "_value_", [smalltalk.send(status, "_printString", [])]);})])])]);
return self;},
args: ["url", "aBlock", "errorBlock"],
source: unescape('getJson%3A%20url%20do%3A%20aBlock%20onError%3A%20errorBlock%0A%09jQuery%20%0A%09%09ajax%3A%20url%0A%09%09options%3A%20%23%7B%20%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%3AjsonpData%20%3Astatus%20%3AjqXHR%20%7C%20%0A%09%09%09%09aBlock%20value%3A%20jsonpData%20data%20%20%5D.%0A%20%20%20%20%20%09%09%09%27error%27%20-%3E%5B%3AjqXHR%20%3Astatus%20%3Aerror%20%7C%20%0A%09%09%09%09errorBlock%20value%3A%20status%20printString%20%5D%7D.'),
messageSends: ["ajax:options:", unescape("-%3E"), "value:", "data", "printString"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_renderAuthor_link_'),
smalltalk.method({
selector: unescape('renderAuthor%3Alink%3A'),
category: 'rendering',
fn: function (name, url){
var self=this;
smalltalk.send(self['@authorLinkDiv'], "_contents_", [(function(h){smalltalk.send(h, "_with_", ["by "]);return (function($rec){smalltalk.send($rec, "_href_", [url]);return smalltalk.send($rec, "_with_", [name]);})(smalltalk.send(h, "_a", []));})]);
return self;},
args: ["name", "url"],
source: unescape('renderAuthor%3A%20name%20link%3A%20url%0A%09authorLinkDiv%20contents%3A%20%5B%3Ah%20%7C%20%0A%09%09h%20with%3A%20%27by%20%27.%0A%09%09h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09a%20href%3A%20url%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20name%20%5D.'),
messageSends: ["contents:", "with:", "href:", "a"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('open%0A%09%28self%20new%29%0A%20%20%20%20%20%20%20%20%20%20%09appendToJQuery%3A%20%27body%27%20asJQuery%0A'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.AmberProjectPage.klass);


