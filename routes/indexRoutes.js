const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (request, response) => {
  response.render("index", { title: "Home", messages: messages });
});

router.get("/add-message", (request, response) => {
  response.render("add-message", { title: "Add Message" });
});

router.post("/add-message", (request, response) => {
  messages.push({ ...request.body, added: new Date() });
  response.redirect("/");
});

module.exports = router;
