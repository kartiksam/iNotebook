const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  user: {
    //like foreign key and have values only that relie in p key-to link
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", //that we have passed in user schema in user name and userschema same name user below
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("notes", NotesSchema);
