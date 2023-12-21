require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3505",
  },
});

const PORT = process.env.PORT || 8000;

http.listen(PORT, () => {
  console.log("server running on port", PORT);
});
