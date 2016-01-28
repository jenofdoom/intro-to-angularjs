# intro-to-angularjs

This example project is based on [angular-seed](https://github.com/angular/angular-seed). For more details check the presentation in the repo.

## Getting Started

### Linux

```
git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular

cd intro-to-angular

next, follow the instuctions at https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions for "Debian and Ubuntu based Linux distributions". Then, in the same intro-to-angular directory, continue on with:

npm install

npm run update-webdriver

echo 'export CHROME_BIN="/usr/bin/chromium-browser"' >> ~/.bashrc && source ~/.bashrc

npm start
```

then browse to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html).

### Windows

1. Install git for windows from [http://git-scm.com/download/win](http://git-scm.com/download/win) (choose all the default options in the installer).
2. Install node.js using the Windows Installer from [https://nodejs.org/en/download/](https://nodejs.org/en/download/) (with all the default options).
3. From the Start Menu, run Git Bash (not Git GUI) by right clicking it and selecting "Run as administrator". Note that you won't normally need to run it as adminstrator, but we have to for the initial installation steps that follow.
4. Run the following command (note you can use the Insert key to paste into git bash): `git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular` then `cd intro-to-angular` then `npm install` (answer no to the bower stats question) and finally `npm start`
5. In a web browser, browse to: [http://localhost:8000/app](http://localhost:8000/app) - the webserver that we have runnning locally will serve the application. As we edit the files it will reload automatically. If you need to stop the server you can halt it with Control-C (but you should leave it running while developing).
6. When you want to start altering files, just open up the intro-to-angular folder in a file browser and open open the various files with a text editor (Notepad will do but I'd suggest installing [Atom](https://atom.io/) or [Notepad++](http://notepad-plus-plus.org/)). 
7. (Optional) For any other commands that need to be run from a command line (e.g. running some of the tests), open a new instance of git bash and cd back to the intro-to-angular folder. Note in order to use protractor (for the e2e tests) you will have to install the [JDK from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (that's the first of the three download buttons) and also run the following command (after restarting Git Bash) `npm run update-webdriver`. When the tests run for the first time you will have to grant permissions for Windows Firewall for the tests to be able to run correctly.

### Mac

1. Install git by following the instructions at https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Mac (if you don't have it set up already, the installing Xcode method mentioned is simplest)
2. Install node using the Mac Installer from [https://nodejs.org/en/download/](https://nodejs.org/en/download/) (all the default options should be fine).
3. In a terminal window, run the command `git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular` then `cd intro-to-angular` then `npm install` and finally `npm start`
4. In a web browser, browse to: [http://localhost:8000/app](http://localhost:8000/app) - the webserver that we have runnning locally will serve the application. As we edit the files it will reload automatically. If you need to stop the server you can halt it with Control-C (but you should leave it running while developing).
5. When you need to start editing files, you just need to use a text editor (I recommend [Atom](https://atom.io/)) on the files in the intro-to-angular folder.

## Running unit tests

From the root directory of the project:

```
npm test
```

Rerun the tests by refreshing the page in the Chromium window that is spawned.

## Running e2e tests

From the root directory of the project:

```
npm run protractor
```
