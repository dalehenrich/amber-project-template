Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: 'repositoryDiv'
	category: 'AmberProjectPage'!

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		html div
			id: 'header';
			class: 'span-24 last';
			with: [ :div | div h1: 'Amber Project Name' ].
		html hr.
		html div
			id: 'subheader';
			class: 'span-24 last';
			with: [:div | 
				div h3
					class: 'alt';
					with: 'Amber Project description' ].
		html hr.
		html with: 'This is your Amber project README.' .
		repositoryDiv := html div id:'test'.
		html div with:[   	
			html 
        			button
				class:'test';
                		with: 'test get';
                		onClick: [  repositoryDiv contents:  [:div | self getTest  ] ] ] ].
	self getTest
!

getTest

	jQuery 
		ajax: 'https:/api.github.com/repos/dalehenrich/amber-project-template'
		options: #{ 
			'type' -> 'GET'.
			'dataType' -> 'jsonp'.
			'success' -> [:repositoryData :status :jqXHR | 
				repositoryDiv with: repositoryData data name ].
     			'error' ->[:jqXHR :status :error | 
				repositoryDiv with: status printString  ]}.
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

