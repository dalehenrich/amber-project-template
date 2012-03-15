Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: 'repositoryDiv username projectname descriptionDiv repositoryJson requestStatus'
	category: 'AmberProjectPage'!

!AmberProjectPage methodsFor: 'accessing'!

username

	| hostname index |
	username ifNil: [ 
		hostname := window location hostname.
		index := hostname indexOf: '.'.
		username := hostname copyFrom: 1 to: index -1 ].
	^username
!

projectname

	| path |
	projectname ifNil: [ 
		path := window location pathname.
		projectname := path copyFrom: 2 to: path size - 1 ].
	^projectname
!

repositoryJsonDo: aBlock

	repositoryJson ifNil: [
		self 
			getRepositoryJsonDo: [:repoJSON | 
				repositoryJson :=  repoJSON.
				aBlock value: repositoryJson   ] 
			onError: [:status |  ] ].
	aBlock value repositoryJson
! !

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		html div
			id: 'header';
			class: 'span-24 last';
			with: [ :div | div h1: self projectname ].
		html hr.
		html div
			id: 'subheader';
			class: 'span-24 last';
			with: [:div | 
				descriptionDiv := div h3
					class: 'alt';
					yourself.
				self repositoryJsonDo: [:json | descriptionDiv with: json description ]].
		html hr.
		html with: 'This is your Amber project README.' .
		repositoryDiv := html div id:'test'.
		html div with:[   	
			html 
        			button
				class:'test';
                		with: 'test get';
                		onClick: [  repositoryDiv contents:  [:div | self getTest  ] ] ] ].
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
!

getRepositoryJsonDo: aBlock onError: errorBlock

	jQuery 
		ajax: 'https:/api.github.com/repos/', self username, '/', self projectname
		options: #{ 
			'type' -> 'GET'.
			'dataType' -> 'jsonp'.
			'success' -> [:repositoryData :status :jqXHR | 
				aBlock value: repositoryData data  ].
     			'error' ->[:jqXHR :status :error | 
				errorBlock value: status printString ]}.
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

