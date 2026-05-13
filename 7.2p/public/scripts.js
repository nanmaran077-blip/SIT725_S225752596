const socket = io();

socket.on("queueUpdate", (data) => {
  document.getElementById("queueCount").innerText = data.queueCount;
  document.getElementById("status").innerText = data.status;
});

function addBooking() {
  const name = document.getElementById("customerName").value;
  const service = document.getElementById("service").value;

  if (name.trim() === "") {
    alert("Please enter customer name");
    return;
  }

  socket.emit("newBooking", {
    name: name,
    service: service
  });

  document.getElementById("customerName").value = "";
}

function serveCustomer() {
  socket.emit("serveCustomer");
}