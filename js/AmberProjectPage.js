smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, ['repositoryDiv', 'username', 'projectname', 'descriptionDiv'], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return smalltalk.send(div, "_h1_", [smalltalk.send(self, "_projectname", [])]);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (self['@descriptionDiv']=(function($rec){smalltalk.send($rec, "_class_", ["alt"]);smalltalk.send($rec, "_with_", ["Amber Project description"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(div, "_h3", [])));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);smalltalk.send(html, "_with_", ["This is your Amber project README."]);(self['@repositoryDiv']=smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["test"]));return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["test"]);smalltalk.send($rec, "_with_", ["test get"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(div){return smalltalk.send(self, "_getTest", []);})]);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_getRepositoryJsonDo_onError_", [(function(repoJSON){return smalltalk.send(self['@descriptionDiv'], "_contents_", [(function(h){return smalltalk.send(h, "_with_", [smalltalk.send(repoJSON, "_description", [])]);})]);}), (function(status){return nil;})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20class%3A%27container%27%3B%20with%3A%5B%20%0A%09%09html%20div%0A%09%09%09id%3A%20%27header%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%20%3Adiv%20%7C%20div%20h1%3A%20self%20projectname%20%5D.%0A%09%09html%20hr.%0A%09%09html%20div%0A%09%09%09id%3A%20%27subheader%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%3Adiv%20%7C%20%0A%09%09%09%09descriptionDiv%20%3A%3D%20div%20h3%0A%09%09%09%09%09class%3A%20%27alt%27%3B%0A%09%09%09%09%09with%3A%20%27Amber%20Project%20description%27%3B%0A%09%09%09%09%09yourself%20%5D.%0A%09%09html%20hr.%0A%09%09html%20with%3A%20%27This%20is%20your%20Amber%20project%20README.%27%20.%0A%09%09repositoryDiv%20%3A%3D%20html%20div%20id%3A%27test%27.%0A%09%09html%20div%20with%3A%5B%20%20%20%09%0A%09%09%09html%20%0A%20%20%20%20%20%20%20%20%09%09%09button%0A%09%09%09%09class%3A%27test%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09with%3A%20%27test%20get%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09onClick%3A%20%5B%20%20repositoryDiv%20contents%3A%20%20%5B%3Adiv%20%7C%20self%20getTest%20%20%5D%20%5D%20%5D%20%5D.%0A%09self%20%0A%09%09getRepositoryJsonDo%3A%20%5B%3ArepoJSON%20%7C%20descriptionDiv%20contents%3A%20%5B%3Ah%20%7C%20h%20with%3A%20repoJSON%20description%20%5D%5D%20%0A%09%09onError%3A%20%5B%3Astatus%20%7C%20%5D'),
messageSends: ["class:", "with:", "id:", "h1:", "projectname", "div", "hr", "yourself", "h3", "onClick:", "contents:", "getTest", "button", "getRepositoryJsonDo:onError:", "description"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);

smalltalk.addMethod(
unescape('_getTest'),
smalltalk.method({
selector: unescape('getTest'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("https%3A/api.github.com/repos/dalehenrich/amber-project-template"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self['@repositoryDiv'], "_with_", [smalltalk.send(smalltalk.send(repositoryData, "_data", []), "_name", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(self['@repositoryDiv'], "_with_", [smalltalk.send(status, "_printString", [])]);})])])]);
return self;},
args: [],
source: unescape('getTest%0A%0A%09jQuery%20%0A%09%09ajax%3A%20%27https%3A/api.github.com/repos/dalehenrich/amber-project-template%27%0A%09%09options%3A%20%23%7B%20%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%3ArepositoryData%20%3Astatus%20%3AjqXHR%20%7C%20%0A%09%09%09%09repositoryDiv%20with%3A%20repositoryData%20data%20name%20%5D.%0A%20%20%20%20%20%09%09%09%27error%27%20-%3E%5B%3AjqXHR%20%3Astatus%20%3Aerror%20%7C%20%0A%09%09%09%09repositoryDiv%20with%3A%20status%20printString%20%20%5D%7D.'),
messageSends: ["ajax:options:", unescape("-%3E"), "with:", "name", "data", "printString"],
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
category: 'rendering',
fn: function (aBlock, errorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A/api.github.com/repos/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_projectname", [])]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(aBlock, "_value_", [smalltalk.send(repositoryData, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(errorBlock, "_value_", [smalltalk.send(status, "_printString", [])]);})])])]);
return self;},
args: ["aBlock", "errorBlock"],
source: unescape('getRepositoryJsonDo%3A%20aBlock%20onError%3A%20errorBlock%0A%0A%09jQuery%20%0A%09%09ajax%3A%20%27https%3A/api.github.com/repos/%27%2C%20self%20username%2C%20%27/%27%2C%20self%20projectname%0A%09%09options%3A%20%23%7B%20%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%3ArepositoryData%20%3Astatus%20%3AjqXHR%20%7C%20%0A%09%09%09%09aBlock%20value%3A%20repositoryData%20data%20%20%5D.%0A%20%20%20%20%20%09%09%09%27error%27%20-%3E%5B%3AjqXHR%20%3Astatus%20%3Aerror%20%7C%20%0A%09%09%09%09errorBlock%20value%3A%20status%20printString%20%5D%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), "username", "projectname", unescape("-%3E"), "value:", "data", "printString"],
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


