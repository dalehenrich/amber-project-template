=Amber Project Template
This is a template that you can use for easily creating your own [Amber-based][1] project.

==Features

1. Nicolas Petton's Amber project is linked into the template as a git submodule. See 
[Working with submodules](http://help.github.com/submodules/) for more information about using submodules on github.

2. The [amber launch script](js/amber.js) has been modified so that you can store your project
   [.st](st) and [.js](js] artifacts separately from the amber [.st](amber/st) and [.js](amber/js] artifacts.

3. The [node server script](bin/server) has been linked in the top-level for convenience.

==Installation
1. Create a git repository for your project and copy the contents of the tempate into the repository:

```sh
mkdir myProject
cd myProject
git init
curl https://github.com/dalehenrich/amber-project-template/zipball/master >> template.zip
unzip template.zip
rm template.zip
git init
git add .
git commit -a -m"first commit"
```

2. Install node (extracted from: [Getting Started page](https://github.com/NicolasPetton/amber/wiki/Getting-started) 
on [Amber wiki](https://github.com/NicolasPetton/amber/wiki/)):

- Installing Node on Linux can be done using your package tool of choice ("apt-get install nodejs" for example) or any other way described at [the download page](http://nodejs.org/#download).
- Installing Node on MacOS or Windows is probably done best by using the installers at [download from Nodejs.org](http://nodejs.org/#download).


3. Fire up the amber node server:

```sh
cd myProject
./bin/server 
```

4. Follow instructions for [Writing my first app](https://github.com/NicolasPetton/amber/wiki/Writing-my-first-app), with the following caveats:

- the **index.html** file in the root directory of the project
is already created and already calls the class browser.
- file saved during a commit will be saved into the **st** and **js** directories in the root of your project.

[1]: https://github.com/NicolasPetton/amber
