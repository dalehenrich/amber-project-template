Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: 'username projectname descriptionDiv repositoryJson projectLinkDiv authorLinkDiv authorJson'
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

	self getJson: 'https:/api.github.com/repos/', self username, '/', self projectname do: aBlock onError: errorBlock
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
!

authorJsonDo: aBlock
	authorJson ifNil: [
		self 
			getAuthorJsonDo: [:authJSON | 
				authorJson :=  authJSON.
				aBlock value: authorJson   ] 
			onError: [:status |  ].
		^self ].
	aBlock value authorJson
!

getAuthorJsonDo: aBlock onError: errorBlock

	self getJson: 'https:/api.github.com/users/', self username do: aBlock onError: errorBlock
!

getJson: url do: aBlock onError: errorBlock
	jQuery 
		ajax: url
		options: #{ 
			'type' -> 'GET'.
			'dataType' -> 'jsonp'.
			'success' -> [:jsonpData :status :jqXHR | 
				aBlock value: jsonpData data  ].
     			'error' ->[:jqXHR :status :error | 
				errorBlock value: status printString ]}.
! !

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		html div
			id: 'header';
			class: 'span-24 last';
			with: [ :div | projectLinkDiv := div h1 ].
		html hr.
		html div
			id: 'subheader';
			class: 'span-24 last';
			with: [:div | 
				descriptionDiv := (div h3)
					class: 'alt';
					yourself ].
		html hr.
		authorLinkDiv := html div ].
	self repositoryJsonDo: [:json | 
        	descriptionDiv contents: [:h | h with: json description ].
		self renderProjectLink: (json at: 'html_url') ].
	self authorJsonDo: [:json | self renderAuthor: json name link: (json at: 'html_url') ].
!

renderProjectLink: url

	projectLinkDiv contents: [:h | 
                 h 
			a href: url; 
                        with: self projectname ].
!

renderAuthor: name link: url
	authorLinkDiv contents: [:h | 
		h with: 'by '.
		h
                 	a href: url; 
                        with: name ].
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

