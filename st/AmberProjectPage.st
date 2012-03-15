Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: 'username projectname descriptionDiv repositoryJson projectLinkDiv'
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
!

repositoryJsonDo: aBlock

	repositoryJson ifNil: [
		self 
			getRepositoryJsonDo: [:repoJSON | 
				repositoryJson :=  repoJSON.
				aBlock value: repositoryJson   ] 
			onError: [:status |  ].
		^self ].
	aBlock value repositoryJson
! !

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		html div
			id: 'header';
			class: 'span-24 last';
			with: [ :div | projectLinkDiv := div h1; yourself ].
		html hr.
		html div
			id: 'subheader';
			class: 'span-24 last';
			with: [:div | 
				descriptionDiv := div h3
					class: 'alt';
					yourself ].
		html hr ].
	self repositoryJsonDo: [:json | 
        	descriptionDiv with: json description.
		self renderProjectLink: (json at: 'html_url') ]
!

renderProjectLink: url

	projectLinkDiv with: [:h | 
                 h
                 	a href: url; 
                        with: self projectname ].
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

