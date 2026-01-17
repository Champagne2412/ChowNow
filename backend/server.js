import express from "express";
import cors from "cors";
import "./config/db.js";
import foodRouter from "./routes/foodroutes.js";

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //image endpoint

app.get("/", (req, res) => {
  res.send("Api working ");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
