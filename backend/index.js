const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
//const port = 5000;
const port = 6000;
app.use(cors());
// for request body
app.use(express.json());
connectToMongo();
//mongo take time to connect and when connect its callback fire  nad till below code will run

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
