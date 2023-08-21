const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/rooms_com_app";
//  Now use 127.0.0.1 instead of localhost

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Successfully connected to Mongo"))

    .catch((err) => {
      console.error(err);
    });
};
module.exports = connectToMongo;