const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  portfolio_page: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
