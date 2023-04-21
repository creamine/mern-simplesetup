// File to setup the server

import path from "path";
import express from "express"; // Import express module
import { MongoClient } from "mongodb"; // Import the MongoDB Client
import template from "./../template"; // Path to our app entry
import devBundle from "./devBundle"; // comment out before building for production
import { mongoAtlas } from "./mongoAtlasCreds"; // A simple javascript file exporting the credentials object mongoAtlas = {username: ..}

const app = express(); // initialize an express app to build out the rest of the Node server app
devBundle.compile(app); //comment out before building for production

// The folloing will configure the Express app to return static files from the dist folder when the requested route starts with /dist.
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// The following route-handling code makes the Express app receive GET requests at /:
app.get("/", (req, res) => {
  res.status(200).send(template());
});

// Configuring the Express app to start a server that listens on the specified port for incoming requests:
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

// With this code, when the server is running, it will be able to accept requests
// at the root route and render the React view with the "Hello World" text in the browser.
// The only part missing from this full-stack implementation is a connection to the database, which we will add below:
// Database Connection URL
const url =
  process.env.MONGODB_URI ||
  `mongodb+srv://${mongoAtlas.username}:${mongoAtlas.password}@${mongoAtlas.server}/${mongoAtlas.db}`;
// Use connect method to connect to the server
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
  }
);
