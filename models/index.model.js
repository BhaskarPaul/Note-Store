const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  fav: Boolean,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
