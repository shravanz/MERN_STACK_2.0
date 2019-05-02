const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURILOCAL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected..");
  } catch (err) {
    console.error(err.message);
    //EXIT process with failure
    process.exit(1);
  }
};

module.exports = connectDB;