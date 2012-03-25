#Amber Project Template
This is a template that you can use for easily creating your own [Amber-based][1] project.

##Features

1. Nicolas Petton's Amber project is linked into the template as a git submodule
(lib/amber).  See
[Working with submodules](http://help.github.com/submodules/) for more information about using submodules on github.

2. The [amber launch script](https://github.com/dalehenrich/amber-project-template/blob/master/js/amber.js) 
has been modified so that you can store your 
project 
[st/*.st files](https://github.com/dalehenrich/amber-project-template/blob/master/st) 
separate from the amber 
[.st](https://github.com/NicolasPetton/amber/tree/master/st) 
and [.js](https://github.com/NicolasPetton/amber/tree/master/js) artifacts.

3. Instead of loading code from .js files, the .st
files are directly loaded into amber using the AmberProjectImporter.
It is no longer necessary to save the 
[js/*.js](https://github.com/dalehenrich/amber-project-template/blob/master/js) 
in git. When you deploy your project you will want to grab the
appropriate js files and copy them into the lib structure. 

4. The [node server script](bin/server) has been linked in the top-level for convenience.

##Installation
1. Create a git repository for your project and copy the contents of the template into the repository:
<pre>
curl -L https://github.com/dalehenrich/amber-project-template/zipball/master >> template.zip
unzip template.zip
rm template.zip
mkdir myProject
mv dalehenrich-amber-project-template-*/* myProject
rm -rf dalehenrich-amber-project-template-*
cd myProject
git init
git add .
rm -rf lib/amber
git submodule add git://github.com/NicolasPetton/amber.git lib/amber
git commit -a -m"first commit"
</pre>

2. Install node (extracted from: [Getting Started page](https://github.com/NicolasPetton/amber/wiki/Getting-started) 
on [Amber wiki](https://github.com/NicolasPetton/amber/wiki/)):

  - Installing Node on Linux can be done using your package tool of choice ("apt-get install nodejs" for example) or any other way described at [the download page](http://nodejs.org/#download).
  - Installing Node on MacOS or Windows is probably done best by using the installers at [download from Nodejs.org](http://nodejs.org/#download).


3. Fire up the amber node server:
<pre>
  cd myProject
  ./bin/server 
</pre>
  
4. Follow instructions for [Writing my first app](https://github.com/NicolasPetton/amber/wiki/Writing-my-first-app), with the following caveats:

  - use the AmberProjectPackage class as your starting point, since it is already wired into the index.html file.
  - file saved during a commit will be saved into the **st** directory in the root of your project and the .js files in the **js** directory will not be saved in git.

[1]: https://github.com/NicolasPetton/amber
