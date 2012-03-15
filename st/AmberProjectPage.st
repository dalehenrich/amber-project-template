Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: ''
	category: 'AmberProjectPage'!

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		"html id: 'header'; class: 'span-24 last'; with: [:hdr |"
			html h1: [ :h | h with: 'Amber Project Name' ].
		"].
		html id: 'subheader'; class: 'span-24 last'; with: ["
		html 
			h3: [:h | h with: 'Amber Project description' ].
		"]."
		html with: 'This is your Amber project template skeleton page.' ]
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

