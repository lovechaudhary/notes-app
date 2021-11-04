const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// initlize the database 
const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');
const adaptor = new fileSync('database.json');
const db = low(adaptor);
db.defaults({notes: []}).write();


// api doc init
const swaggerFileData = require('../swagger/doc-config');
app.use('/api-docs', swaggerFileData.swaggerUI.serve, swaggerFileData.swaggerUI.setup(swaggerFileData.swaggerSpecification));


// routes
const notesRoutes = require('../routes/notes');

// app middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.db = db;


// routes init
app.use('/notes', notesRoutes);


module.exports = app;