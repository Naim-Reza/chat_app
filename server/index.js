const express = require("express");
const soketio = require("socket.io");
const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = soketio(server);

app.use(router);

io.on("connection", (soket) => {
  console.log("User Connected");

  soket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
