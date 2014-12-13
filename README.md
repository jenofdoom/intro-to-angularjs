# intro-to-angularjs

This example project is based on [angular-seed](https://github.com/angular/angular-seed). For more details check the presentation in the repo.

## Getting Started

### Linux

```
git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular

cd intro-to-angular

sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

npm install

npm run update-webdriver

echo 'export CHROME_BIN="/usr/bin/chromium-browser"' >> ~/.bashrc && source ~/.bashrc

npm start
```

then browse to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html).

### Windows

1. Install git for windows from [http://git-scm.com/download/win](http://git-scm.com/download/win) (choose all the default options in the installer).
2. Install node.js using the Windows Installer from [http://blog.nodejs.org/2014/06/16/node-v0-10-29-stable/](http://blog.nodejs.org/2014/06/16/node-v0-10-29-stable/) (with all the default options). Note we're installing a slightly older release due to a bug in the most recent one.
3. From the Start Menu, run Git Bash (not Git GUI) by right clicking it and selecting "Run as administrator". Note that you won't normally need to run it as adminstrator, but we have to for the initial installation steps that follow.
4. Run the following command (note you can use the Insert key to paste into git bash): `git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular` then `cd intro-to-angular` then `npm install` (answer no to the bower stats question) and finally `npm start`

5. In a web browser, browse to: [http://localhost:8000/app](http://localhost:8000/app) - the webserver that we have runnning locally will serve the application. As we edit the files it will reload automatically. If you need to stop the server you can halt it with Control-C (but you should leave it running while developing).
6. When you want to start altering files, just open up the intro-to-angular folder in a file browser and open open the various files with a text editor (Notepad will do but I'd suggest installing [Atom](https://atom.io/) or [Notepad++](http://notepad-plus-plus.org/)). 

7. (Optional) For any other commands that need to be run from a command line (e.g. running some of the tests), open a new instance of git bash and cd back to the intro-to-angular folder. Note in order to use protractor (for the e2e tests) you will have to install the [JDK from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and also run the following command (after restarting Git Bash) `npm run update-webdriver`. When the tests run for the first time you will have to grant permissions for Windows Firewall for the tests to be able to run correctly.

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
