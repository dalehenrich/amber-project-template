smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, ['repositoryDiv'], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return smalltalk.send(div, "_h1_", ["Amber Project Name"]);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (function($rec){smalltalk.send($rec, "_class_", ["alt"]);return smalltalk.send($rec, "_with_", ["Amber Project description"]);})(smalltalk.send(div, "_h3", []));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);smalltalk.send(html, "_with_", ["This is your Amber project README."]);(self['@repositoryDiv']=smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["test"]));return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["test"]);smalltalk.send($rec, "_with_", ["test get"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(div){return smalltalk.send(self, "_getTest", []);})]);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_getTest", []);
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
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.AmberProjectPage.klass);


