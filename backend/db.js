const mongoose = require("mongoose");
const DB =
  "mongodb+srv://kartiksam123489:22sharma88@cluster0.qdibh0i.mongodb.net/notes";
//in this notes will be the db name and inside it collections users and notes and inside that docs
//json -onject
const connectToMongo = () => {
  mongoose
    .connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,

      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then((con) => {
      console.log(con.connections);
      console.log("DB connection succesful");
    });
};
module.exports = connectToMongo;
