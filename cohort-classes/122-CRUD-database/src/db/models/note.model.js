const mongoose = require('mongoose');

/* note= title,desc
title datatype= boolean,string,null
*/
const noteSchema = new mongoose.schema({
title:String,
content:String
})

const noteModel = new noteModel("note",noteSchema);

module.exports= noteModel;