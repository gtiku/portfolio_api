const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    rank: { type: Number, required: true },
    title: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    projectType: { type: String, required: false },
    stackType: { type: String, required: false },
    stackTechonologies: { type: Array, required: false },
    highlights: { type: Array, required: false },
    summary: { type: String, required: false },
    cardImage: { type: String, required: false },
    details: { type: Array, required: false },
    github: { type: String, required: false },
    liveUrl: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
