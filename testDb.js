const mongoose = require("mongoose");

const uri = "mongodb+srv://bhuvana123d:bhuvana123d@cluster0.mongodb.net/del_db";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.error("MongoDB Connection Error:", err));
