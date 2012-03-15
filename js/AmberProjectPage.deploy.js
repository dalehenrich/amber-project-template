smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, ['username', 'projectname', 'descriptionDiv', 'repositoryJson', 'projectLinkDiv'], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@projectLinkDiv']=div);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@descriptionDiv']=(function($rec){smalltalk.send($rec, "_class_", ["alt"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(div, "_h3", [])));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(html, "_hr", []);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_repositoryJsonDo_", [(function(json){smalltalk.send(self['@descriptionDiv'], "_with_", [smalltalk.send(json, "_description", [])]);return smalltalk.send(self, "_renderProjectLink_", [smalltalk.send(json, "_at_", ["html_url"])]);})]);
return self;}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
fn: function (){
var self=this;
var hostname=nil;
var index=nil;
(($receiver = self['@username']) == nil || $receiver == undefined) ? (function(){(hostname=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_location", []), "_hostname", []));(self['@index']=smalltalk.send(hostname, "_indexOf_", ["."]));return (self['@username']=smalltalk.send(hostname, "_copyFrom_to_", [(1), ((($receiver = self['@index']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]));})() : $receiver;
return self['@username'];
return self;}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_projectname'),
smalltalk.method({
selector: unescape('projectname'),
fn: function (){
var self=this;
var path=nil;
(($receiver = self['@projectname']) == nil || $receiver == undefined) ? (function(){(path=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_location", []), "_pathname", []));return (self['@projectname']=smalltalk.send(path, "_copyFrom_to_", [(2), ((($receiver = smalltalk.send(path, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]));})() : $receiver;
return self['@projectname'];
return self;}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getRepositoryJsonDo_onError_'),
smalltalk.method({
selector: unescape('getRepositoryJsonDo%3AonError%3A'),
fn: function (aBlock, errorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A/api.github.com/repos/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_projectname", [])]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(aBlock, "_value_", [smalltalk.send(repositoryData, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(errorBlock, "_value_", [smalltalk.send(status, "_printString", [])]);})])])]);
return self;}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_repositoryJsonDo_'),
smalltalk.method({
selector: unescape('repositoryJsonDo%3A'),
fn: function (aBlock){
var self=this;
try{(($receiver = self['@repositoryJson']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_getRepositoryJsonDo_onError_", [(function(repoJSON){(self['@repositoryJson']=repoJSON);return smalltalk.send(aBlock, "_value_", [self['@repositoryJson']]);}), (function(status){return nil;})]);return (function(){throw({name: 'stReturn', selector: '_repositoryJsonDo_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(smalltalk.send(aBlock, "_value", []), "_repositoryJson", []);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_repositoryJsonDo_'){return e.fn()} throw(e)}}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_renderProjectLink_'),
smalltalk.method({
selector: unescape('renderProjectLink%3A'),
fn: function (url){
var self=this;
smalltalk.send(self['@projectLinkDiv'], "_contents_", [(function(h){return smalltalk.send(smalltalk.send(h, "_h1", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [url]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_projectname", [])]);})(smalltalk.send(h, "_a", []));})]);})]);
return self;}
}),
smalltalk.AmberProjectPage);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.AmberProjectPage.klass);


