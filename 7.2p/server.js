const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 3000;

app.use(express.static("public"));

let queueCount = 3;
let currentStatus = "Waiting for next customer";

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.emit("queueUpdate", {
    queueCount: queueCount,
    status: currentStatus
  });

  socket.on("newBooking", (data) => {
    queueCount++;

    currentStatus =
      `${data.name} joined the queue for ${data.service}`;

    io.emit("queueUpdate", {
      queueCount: queueCount,
      status: currentStatus
    });
  });

  socket.on("serveCustomer", () => {

    if (queueCount > 0) {
      queueCount--;
      currentStatus = "One customer is being served";
    } else {
      currentStatus = "No customers waiting";
    }

    io.emit("queueUpdate", {
      queueCount: queueCount,
      status: currentStatus
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});