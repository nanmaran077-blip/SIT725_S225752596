const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/healthyLivingDB");

const ActivitySchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  details: String
});

const Activity = mongoose.model("Activity", ActivitySchema);

const sampleData = [
  {
    name: "Morning Walk",
    category: "Exercise",
    image: "images/walk.jpg",
    details: "A simple morning walk to stay active and healthy."
  },
  {
    name: "Fruit Bowl",
    category: "Nutrition",
    image: "images/fruit.jpg",
    details: "A healthy fruit bowl for better daily nutrition."
  },
  {
    name: "Water Reminder",
    category: "Lifestyle",
    image: "images/water.jpg",
    details: "A reminder to drink enough water during the day."
  }
];

async function seedDB() {
  try {
    await Activity.deleteMany({});
    await Activity.insertMany(sampleData);
    console.log("Sample data inserted successfully");
    mongoose.connection.close();
  } catch (error) {
    console.log("Error inserting data:", error);
  }
}

seedDB();