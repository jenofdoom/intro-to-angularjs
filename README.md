# intro-to-angularjs

This example project is based on [angular-seed](https://github.com/angular/angular-seed). For more details check the presentation in the repo.

## Getting Started

```
git clone https://github.com/jenofdoom/intro-to-angularjs.git intro-to-angular

cd intro-to-angular

sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

npm install -g bower

npm install

npm run update-webdriver

echo 'export CHROME_BIN="/usr/bin/chromium-browser"' >> ~/.bashrc && source ~/.bashrc

npm start
```

then browse to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html).

### Running unit tests

From the root directory of the project:

```
npm test
```

Rerun the tests by refreshing the page in the Chromium window that is spawned.

### Running e2e tests

From the root directory of the project:

```
npm run protractor
```
