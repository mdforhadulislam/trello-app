const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
