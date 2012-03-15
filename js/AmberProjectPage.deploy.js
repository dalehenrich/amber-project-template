smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, ['repositoryDiv', 'username', 'projectname', 'descriptionDiv'], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return smalltalk.send(div, "_h1_", [smalltalk.send(self, "_projectname", [])]);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@descriptionDiv']=(function($rec){smalltalk.send($rec, "_class_", ["alt"]);smalltalk.send($rec, "_with_", ["Amber Project description"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(div, "_h3", [])));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);smalltalk.send(html, "_with_", ["This is your Amber project README."]);(self['@repositoryDiv']=smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["test"]));return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["test"]);smalltalk.send($rec, "_with_", ["test get"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(div){return smalltalk.send(self, "_getTest", []);})]);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_getRepositoryJsonDo_onError_", [(function(repoJSON){return smalltalk.send(self['@descriptionDiv'], "_contents_", [(function(h){return smalltalk.send(h, "_with_", [smalltalk.send(repoJSON, "_description", [])]);})]);}), (function(status){return nil;})]);
return self;}
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getTest'),
smalltalk.method({
selector: unescape('getTest'),
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("https%3A/api.github.com/repos/dalehenrich/amber-project-template"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self['@repositoryDiv'], "_with_", [smalltalk.send(smalltalk.send(repositoryData, "_data", []), "_name", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(self['@repositoryDiv'], "_with_", [smalltalk.send(status, "_printString", [])]);})])])]);
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
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.AmberProjectPage.klass);


