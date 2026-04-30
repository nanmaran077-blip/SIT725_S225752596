const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/healthyLivingDB");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const ActivitySchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  details: String
});

const Activity = mongoose.model("Activity", ActivitySchema);

app.get("/api/activities", async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.json({
      statusCode: 200,
      data: activities,
      message: "Success"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error getting activities"
    });
  }
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});