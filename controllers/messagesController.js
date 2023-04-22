const mongoose = require("mongoose");
const Message = require("../models/message");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error(error);
  });

const getMessages = async (req, res, next) => {
  try {
    const result = await Message.find().exec();
    res.status(200).json(result);
  } catch {
    return res.status(404).json({ error: true, message: "Data not found" });
  }
};

const postMessage = async (req, res, next) => {
  const { portfolio_page, text } = req.body;

  if (!text || !portfolio_page) {
    return res.status(400).json({
      error: true,
      message: "Incomplete data from client",
    });
  }

  const newMessage = new Message({
    text: text,
    portfolio_page: portfolio_page,
  });

  try {
    const result = await newMessage.save();
    res.status(201).json(result);
  } catch {
    return res
      .status(400)
      .json({ error: true, message: "Failure storing data" });
  }
};

const deleteMessage = async (req, res, next) => {
  try {
    const result = await Message.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(result);
  } catch {
    return res
      .status(404)
      .json({ error: true, message: "Message not found. Unable to delete." });
  }
};

module.exports = {
  getMessages,
  postMessage,
  deleteMessage,
};
