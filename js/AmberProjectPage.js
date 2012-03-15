smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, [], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["This is your Amber project template skeleton page."]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20with%3A%20%27This%20is%20your%20Amber%20project%20template%20skeleton%20page.%27'),
messageSends: ["with:"],
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


