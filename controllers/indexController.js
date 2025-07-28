const db = require("../db/queries");

async function getHomePage(request, response) {
  const messages = await db.getMessages();
  response.render("index", { title: "Home", messages: messages });
}

function getAddMessagePage(request, response) {
  response.render("add-message", { title: "Add Message" });
}

async function postNewMessage(request, response) {
  await db.insertMessage({ ...request.body, added: new Date() });
  response.redirect("/");
}

async function getMessageDetailsPage(request, response) {
  const id = request.params.id;
  const message = await db.getMessageDetails(id);
  response.render("message-details", {
    title: "Message Details",
    message: message,
  });
}

module.exports = {
  getHomePage,
  getAddMessagePage,
  postNewMessage,
  getMessageDetailsPage,
};
