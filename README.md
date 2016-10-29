# Sound Marker
#### Simple app to highlight letters with same sound


## Installation
* Clone this repository to the web server.
* Refer to [Database Connection](#database)
* The back-end API is built in PHP(5.6) so please make sure the server is able to execute PHP and has permission to access the folder

## <a name="database"></a>Database Connection
* Database configuration in server/config.php. Database name, user name and password are compulsory field, otherwise the app will not work.
* Please make sure the user specified has permission to access to the specified database.

## NPM Commands
* You don't need to run any npm commands in order to run the app. All third-party libraries are bundled into the production js file.
* However, if you want to change the source code and get it work, you need to compile them. Before doing it, install the packages first: "npm install"
* "npm dev" will open a lite node server and open a window from your default browser. Whenever you change js or scss source code, it will compile them to "client/dist" folder and refresh the web page. Warning: the back-end api will not work in this case as the lite server cannot execute PHP. 
