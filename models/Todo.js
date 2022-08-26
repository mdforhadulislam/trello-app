const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    list_id:{
      type:String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
