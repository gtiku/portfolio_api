const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const messagesRoutes = require("./routes/messages");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/messages/", messagesRoutes);

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
