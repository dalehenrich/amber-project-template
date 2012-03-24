Smalltalk current createPackage: 'AmberProjectImporter' properties: #{}!
Object subclass: #AmberProjectImporter
	instanceVariableNames: ''
	category: 'AmberProjectImporter'!

!AmberProjectImporter class methodsFor: 'not yet classified'!

importSTPackage: packageName prefix: prefix
	"AmberProjectImporter
		importSTPackage: 'AmberTestSmalltalkFile' 
		prefix: 'lib/st/'"

	jQuery 
		ajax: prefix, packageName, '.st'
        	options: #{
			'type' -> 'GET'.
    			'complete' -> [ :jqXHR :textStatus | 
				jqXHR readyState = 4 ifTrue: [ |chunks |
            				chunks := jqXHR responseText.
            				Importer new import: chunks readStream ]]
		}
! !

