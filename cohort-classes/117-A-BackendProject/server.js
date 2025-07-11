const express = require("express");
const app = express()
 
app.use(express.json());
let notes = [];



// create the notes
// notes=> title and description
app.post("/notes", (req, res) => {
  console.log(req.body); 
  const note = {
    id: Date.now().toString(),
    title: req.body.title,
    desc: req.body.desc,
  };
  notes.push(note);
  res.json({
    message: "Note added successfully",
    note: notes,
  });
});




// get the notes
app.get("/notes", (req, res) => {
  res.json({ notes });
});



// delete the notes
app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  // Filter out the note with that id
  const newNotes = notes.filter((note) => note.id !== id);
  // If nothing was deleted → arrays are the same length
  if (newNotes.length === notes.length) {
    return res.status(404).json({ message: "Note not found" });
  }
  // Overwrite the old array
  notes = newNotes;
  res.json({
    message: `Note with id ${id} deleted successfully`,
    notes,
  });
});


// Update the note
app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  const { title, desc } = req.body;

  const note = notes.find(note => note.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (title) note.title = title;
  if (desc) note.desc = desc;

  res.json({
    message: `Note with id ${id} updated successfully`,
    note
  });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
