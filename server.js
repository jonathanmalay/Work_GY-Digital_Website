const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
//connect database
// connectDB();

//the port number bthat the server run on
const PORT = process.env.PORT || 5001;

//the website styatic files
app.use(express.static(path.join(__dirname, "public")));

//Init Middleware
app.use(express.json({ extended: false })); //allow as get the data from every request body

app.get("/", (req, res) => res.send("[+]API Running"));

//Define Routes

// For send the terms file.
app.get("/gy-t-and-c.pdf", (req, res) => {
  res.sendFile(__dirname + "/static/gy-t-and-c.pdf");
});

//the make contact route
app.use("/api/makecontact", require("./routes/api/makecontact") /*the module route for export */);

app.listen(PORT, () => console.log(`[+] Server started on port ${PORT}`));
