// Require libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

// Require controller
const controller = require("./controller.js");

// Have express create app
const app = express();

// Tell express app to use bodyParser.json() for API endpoints
app.use(bodyParser.json())
app.use(cors())

// Link to DB
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

// Create endpoints
app.get("/api/lemonscates", controller.getLemonscates)
// app.get("/api/inventory/:productID", controller.getOne)
// app.delete("/api/inventory/:productID", controller.deleteProduct)
// app.put("/api/inventory/:productID", controller.editProduct)
// app.post("/api/product", controller.addProduct)


// Tell the app to start listening on port 3005
const port = process.env.PORT || 3005
app.listen(port, () => { console.log(`Server listening on port ${port}`) });