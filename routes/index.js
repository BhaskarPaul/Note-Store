const {
  getNotes,
  postNotes,
  getNoteById,
  deleteNoteById,
  editNoteById,
  getFavNotes
} = require("../controller/index.controller");

const router = require("express").Router();

router.route("/").get(getNotes).post(postNotes);
router.route('/fav').get(getFavNotes);
router.route("/:id").get(getNoteById).delete(deleteNoteById).put(editNoteById);

module.exports = router;
