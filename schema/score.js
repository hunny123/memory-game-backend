import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PORT = process.env.PORT || "8080";
const ScoreSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  rating: {
    type: Number,
    max: 5,
    min: 0,
    required: [true, "rating field is required or should be in between 0 to 5"],
  },
});

const Score = mongoose.model("scores", ScoreSchema);
export default Score;
