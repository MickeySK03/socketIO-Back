require("dotenv").config();
const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3505",
  },
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} just connected`);

  socket.on("sender", (data) => {
    console.log(data);
    io.emit("receiver", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log("server running on port", PORT);
});
