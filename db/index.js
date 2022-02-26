import mongoose from "mongoose";
const mongo_uri =
  process.env.MONGO_URI ||
  "mongodb+srv://hunny0402:hunny@cluster0-4gpa9.mongodb.net/memory-games";
let instance;
const getMongoInstance = async () => {
  if (instance) return instance;
  instance = await mongoose.connect(mongo_uri);
  console.log("calling for instance");
  return instance;
};

export default getMongoInstance;
