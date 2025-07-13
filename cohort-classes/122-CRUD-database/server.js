const express = require("express");
const connectToDb = require("./src/db/db");
const noteModel = require("./src/db/models/note.model");
const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
  await noteModel.create({
    title,
    content,
  });
  res.json({
    message: "Note created successfully",
  });
});

app.get('/notes',async(req,res)=>{
  const notes =await noteModel.find()
  res.json({
    message:"Notes created successfully",
    notes
  })
})

app.delete('/notes/:id',async (req,res)=>{
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId
  })
  res.json({
    message: "Note Deleted successfully"
  })
})

app.patch('/notes/:id',async(req,res)=>{
  const noteId = req.params.id
  const {title} = req.body

  await noteModel.findByIdAndUpdate(
    {
      _id:noteId
    },{
      title:title
    })

    res.json({
      message: "Note Updated successfully"
    })
})

connectToDb();
app.listen(3000, () => {
  console.log("server is running");
});
