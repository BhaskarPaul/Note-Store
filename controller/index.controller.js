const Note = require("../models/index.model");

module.exports = {
  getNotes: (req, res) => {
    Note.find({}, (err, docs) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send(docs);
      }
    });
  },
  postNotes: (req, res) => {
    const data = req.body;
    const saveNote = new Note(data);
    saveNote.save((err) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send({ msg: "Successfull" });
      }
    });
  },
  getNoteById: (req, res) => {
    const { id } = req.params;
    Note.find({ _id: id }, (err, docs) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send(docs);
      }
    });
  },
  deleteNoteById: (req, res) => {
    const { id } = req.params;
    Note.deleteOne({ _id: id }, (err) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send({ msg: "Successfull" });
      }
    });
  },
  editNoteById: (req, res) => {
    const { id } = req.params;
    const editNote = req.body;
    Note.updateOne(
      { _id: id },
      {
        $set: {
          title: editNote.title,
          description: editNote.description,
          fav: editNote.fav,
        },
      }
    ).exec((err, docs) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send(docs);
      }
    });
  },
  getFavNotes: (req, res) => {
    Note.find({ fav: true }, (err, docs) => {
      if (err) {
        res.status(400).send({ msg: "Error Occ" });
        console.log("🧨🧨 ", err);
      } else {
        res.status(200).send(docs);
      }
    });
  },
};
