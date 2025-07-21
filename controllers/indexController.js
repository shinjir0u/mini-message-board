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

function getHomePage(request, response) {
  response.render("index", { title: "Home", messages: messages });
}

function getAddMessagePage(request, response) {
  response.render("add-message", { title: "Add Message" });
}

function postNewMessage(request, response) {
  messages.push({ ...request.body, added: new Date() });
  response.redirect("/");
}

function getMessageDetailsPage(request, response) {
  const index = request.params.id;
  response.render("message-details", {
    title: "Message Details",
    message: messages[index],
  });
}

module.exports = {
  getHomePage,
  getAddMessagePage,
  postNewMessage,
  getMessageDetailsPage,
};
