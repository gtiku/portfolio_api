const mongoose = require("mongoose");
const Project = require("../models/project");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error(error);
  });

const getAllProjects = async (req, res, next) => {
  try {
    const result = await Project.find().exec();
    res.status(200).json(result);
  } catch {
    return res.status(404).json({ error: true, message: "Data not found" });
  }
};

const getSingleProject = async (req, res, next) => {
  try {
    const result = await Project.findById(req.params.id).exec();
    res.status(200).json(result);
  } catch {
    return res.status(404).json({ error: true, message: "Data not found" });
  }
};

const postProject = async (req, res, next) => {
  const newProject = new Project({
    rank: req.body.rank,
    title: req.body.title,
    isCompleted: req.body.isCompleted,
    projectType: req.body.projectType,
    stackType: req.body.stackType,
    stackTechonologies: req.body.stackTechonologies,
    highlights: req.body.highlights,
    summary: req.body.summary,
    cardImage: req.body.cardImage,
    details: req.body.details,
    github: req.body.github,
    liveUrl: req.body.liveUrl,
  });

  try {
    const result = await newProject.save();
    res.status(201).json(result);
  } catch {
    return res
      .status(400)
      .json({ error: true, message: "Failure storing data" });
  }
};

const updateProject = async (req, res, next) => {
  const updatedProject = {
    rank: req.body.rank,
    title: req.body.title,
    isCompleted: req.body.isCompleted,
    projectType: req.body.projectType,
    stackType: req.body.stackType,
    stackTechonologies: req.body.stackTechonologies,
    highlights: req.body.highlights,
    summary: req.body.summary,
    cardImage: req.body.cardImage,
    details: req.body.details,
    github: req.body.github,
    liveUrl: req.body.liveUrl,
  };

  try {
    const result = await Project.updateOne(
      { _id: req.params.id },
      { $set: updatedProject }
    );
    res.status(500).json(result);
  } catch {
    return res
      .status(500)
      .json({ error: true, message: "Failure storing data" });
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const result = await Project.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(result);
  } catch {
    return res
      .status(404)
      .json({ error: true, message: "Project not found. Unable to delete." });
  }
};

module.exports = {
  getAllProjects,
  getSingleProject,
  postProject,
  updateProject,
  deleteProject,
};
