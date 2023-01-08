const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Herman:WMYXGYu8nbeyfgmL@cluster0.o69ruap.mongodb.net/contacts_reader?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
  .then(() => console.log("database connest success"))
  .catch(error => console.log(error.message));
  