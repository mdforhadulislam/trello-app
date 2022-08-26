const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    user: Object,
    list: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
