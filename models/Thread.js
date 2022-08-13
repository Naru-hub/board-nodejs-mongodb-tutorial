const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  content: {
    type: String,
    required: true,
  },
});

modules.exports = mongoose.model("Thread", ThreadSchema);
