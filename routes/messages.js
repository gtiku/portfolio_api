const router = require("express").Router();
const messagesController = require("../controllers/messagesController");

router
  .route("/")
  .get(messagesController.getMessages)
  .post(messagesController.postMessage);

router.route("/:id").delete(messagesController.deleteMessage);

module.exports = router;
