Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: ''
	category: 'AmberProjectPage'!

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html with: 'This is your Amber project template skeleton page.'
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

