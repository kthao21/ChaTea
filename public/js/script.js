// client-side js for socket connection
import io from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

const socket = io("https://morning-spire-89765-733c4b62d1d7.herokuapp.com/");
const chatContainer = document.getElementById("chat-container");
const sendContainer = document.getElementById("send-msg");
const messageText = document.getElementById("msg-input");

socket.on("chat-message", (data) => {
  appendChat(data);
});

sendContainer.addEventListener("submit", (prevent) => {
  prevent.preventDefault();
  const message = messageText.value;
  socket.emit("send-message", message);
  messageText.value = "";
});

function appendChat(message) {
  const chatElement = document.createElement("div");
  chatElement.innerText = message;
  chatContainer.append(chatElement);
}