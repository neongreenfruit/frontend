frontend
========

Ember front end for HospitalRun

### MAC set up: 

To run the app (on a mac), you will need the following:

1. Install Nodejs [nodejs.org](https://www.nodejs.org)
2. Install [ember-cli v0.1.4](https://www.npmjs.org/package/ember-cli): `sudo npm install -g ember-cli@0.1.4`
3. Install [bower](https://www.npmjs.org/package/bower): `sudo npm install -g bower`
4. Clone the `frontend` directory! 
   * Command line: git clone git@github.com:CIS-412-Spring-2015/frontend.git
5. Go to the `frontend` directory, and run the following:
    * `sudo npm install` to install needed node modules.
    * `bower install` to install needed bower modules.
6. Install/configure [couchdb](http://couchdb.apache.org/)
  1. Download and install couchdb from http://couchdb.apache.org/#download
  2. Run `initcouch.sh` to setup couchdb with an admin user with the credentials `hradmin/test`.  
      * Go to Futon (`http://0.0.0.0:5984/_utils/`)
7. Go into the frontend folder, then into server, then click on config-example.js, check to make sure that the 'couch_admin_user' and 'couch_admin_password' match your admin credentials, and rename the file to 'config.js'. 
8. Start the server so you can view the repo in your browser by running `ember serve` from the `frontend` directory.
9. Go to `http://0.0.0.0:4200/` in a browser and login with your couchdb admin user.

### WINDOWS set up: 

To run the app (on windows), you will need the following:

1. Install Nodejs [nodejs.org](https://www.nodejs.org)
2. Install [ember-cli v0.1.4](https://www.npmjs.org/package/ember-cli): `npm install -g ember-cli`
3. Install [bower](https://www.npmjs.org/package/bower): `npm install -g bower`
4. Install [git](http://git-scm.com/download/win) (will automatically download git when link is clicked)
5. Clone the `frontend` directory! 
6. Go to the `frontend` directory in the command line, and run the following:
  * `npm install` to install needed node modules.
  * `bower install` to install needed bower modules.
  * (Make sure your directory for the npm folder is in either the system variables or user variables path. most likely: `C:\Users\[username]\AppData\Roaming\npm`)
7. Install/configure couchdb
   1. Download and install couchdb from http://couchdb.apache.org/#download (Make sure use the Windows version or will NOT work)
   2. Run `initcouch.sh` to setup couchdb with an admin user with the credentials `hradmin/test`.
8. Go into the frontend folder, then into server, then click on config-example.js, check to make sure that the `couch_admin_user` and `couch_admin_password` match your admin credentials, and rename the file to `config.js`. 
9. Start the server so you can view the repo in your browser by running `ember server` from the `frontend` directory.
10. Go to `http://0.0.0.0:4200/` or `localhost:4200/` in a browser and login with your couchdb admin user.
