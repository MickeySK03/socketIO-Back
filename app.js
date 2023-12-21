require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3505",
  },
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} just connected`);
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log("server running on port", PORT);
});
