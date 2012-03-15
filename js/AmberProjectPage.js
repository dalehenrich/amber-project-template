smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, [], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [(function(h){return smalltalk.send(h, "_with_", ["Amber Project Name"]);})]);smalltalk.send(html, "_h3_", [(function(h){return smalltalk.send(h, "_with_", ["Amber Project description"]);})]);return smalltalk.send(html, "_with_", ["This is your Amber project template skeleton page."]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20class%3A%27container%27%3B%20with%3A%5B%20%0A%09%09%22html%20id%3A%20%27header%27%3B%20class%3A%20%27span-24%20last%27%3B%20with%3A%20%5B%3Ahdr%20%7C%22%0A%09%09%09html%20h1%3A%20%5B%20%3Ah%20%7C%20h%20with%3A%20%27Amber%20Project%20Name%27%20%5D.%0A%09%09%22%5D.%0A%09%09html%20id%3A%20%27subheader%27%3B%20class%3A%20%27span-24%20last%27%3B%20with%3A%20%5B%22%0A%09%09html%20%0A%09%09%09h3%3A%20%5B%3Ah%20%7C%20h%20with%3A%20%27Amber%20Project%20description%27%20%5D.%0A%09%09%22%5D.%22%0A%09%09html%20with%3A%20%27This%20is%20your%20Amber%20project%20template%20skeleton%20page.%27%20%5D%0A'),
messageSends: ["class:", "with:", "h1:", "h3:", "div"],
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


