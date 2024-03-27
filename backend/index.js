const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 5000;
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
