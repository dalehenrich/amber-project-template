smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, [], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [(function(h){return smalltalk.send(h, "_with_", ["Amber Project Name"]);})]);smalltalk.send(html, "_h3_", [(function(h){return smalltalk.send(h, "_with_", ["Amber Project description"]);})]);return smalltalk.send(html, "_with_", ["This is your Amber project template skeleton page."]);})]);})(smalltalk.send(html, "_div", []));
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


