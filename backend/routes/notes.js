const express = require("express");
const router = express.Router();
const Note = require("./../models/Notes");
const fetchuser = require("./../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
//Route 1: Get All the Notes using:GET "api/notes/fetchallnotes" .Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  // userId = req.user.id;
  // const notes = await Note.findById(userId);
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

//Route 2: Add  a new note using:POST "api/notes/addnote" .Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
//Route 3: Update an existing note using:PUT "api/notes/updatenote/:id" .Login required
router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(400).send("Not found");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.send(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
//Route 4: delete  an existing note using:DELETE "api/notes/deletenote/:id" .Login required
// need to checvk user delting a note belonmg to itsself
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    // find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).send("Not found");
    }
    // allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.send({ success: "Note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
