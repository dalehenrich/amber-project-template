smalltalk.addPackage('AmberProjectImporter', {});
smalltalk.addClass('AmberProjectImporter', smalltalk.Object, [], 'AmberProjectImporter');

smalltalk.addMethod(
unescape('_importSTPackage_prefix_'),
smalltalk.method({
selector: unescape('importSTPackage%3Aprefix%3A'),
fn: function (packageName, prefix){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(prefix, "__comma", [packageName]), "__comma", [".st"]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("complete", "__minus_gt", [(function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})]));})])])]);
return self;}
}),
smalltalk.AmberProjectImporter.klass);


