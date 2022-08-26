const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    todos: Array,
    board_id: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
