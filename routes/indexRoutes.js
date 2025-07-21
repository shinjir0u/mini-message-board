const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.getHomePage);

router.get("/add-message", indexController.getAddMessagePage);

router.post("/add-message", indexController.postNewMessage);

router.get("/message-:id", indexController.getMessageDetailsPage);

module.exports = router;
