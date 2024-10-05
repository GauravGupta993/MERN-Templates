# MERN-Templates

This repository consists of all the frequently used frontend and backend templates in MERN applications!


# Folder Structure

 - Client - contains the entire code for the UI.
 -  `/client/src/template` : this is where the contributors can create all their templates.
 - `/client/src/template/frontend` : this will contain the UI of the whatever template you are contributing (for example, the UI of a chat app).
 - `/client/src/template/backend` :  this will contain all the code written to import various stuff from backend/server api keys and some page routes and other stuff that you may use.
 - `/client/src/data.js` - after creating your template, make sure to import it here.
 - Server : contains entire backend logic, database connections (MongoDB in this case) and various other stuff.
 - `/server/routes` - add all the api routes (as for example login,signup etc) here, which other contributors (or maybe you) might use while creating the frontend of the templates.
 
## Getting started with the project

Follow these steps if you are new to working with React Projects.

 - Clone the repository : `git clone https://github.com/GauravGupta993/MERN-Templates.git `
 - Navigate to the folder : `cd MERN-Templates`
 - Navigate to the client folder  :`cd client`
 - Install dependencies : `npm i`
 - Run the client side : `npm run start`
 - Open `http://localhost:3000/` to see the rendered client.
 - Open a new terminal in `MERN-Templates` and then navigate to the server folder : `cd server` 
 - Install dependencies : `npm i`
 - Start the server : `node server.js`
 - You can start contributing now !
```