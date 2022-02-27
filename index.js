import getMongoInstance from "./db/index.js";
import express from "express";
import bodyParser from "body-parser";
import Score from "./schema/score.js";
import cors from "cors";

const PORT = process.env.PORT || "8080";

const mongo = await getMongoInstance();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
app.get("/list", async (req, res) => {
  try {
    const data = await Score.find({});
    res.json({ data, success: true });
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
});

app.post("/add-score", async (req, res) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.json({ msg: "insertion is done" });
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
});

app.listen(PORT, async () => {
  console.log(`listening to ${PORT}`);
});
