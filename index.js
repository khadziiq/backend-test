import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 5000;

import ServiceRoute from "./routes/services.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/services", ServiceRoute);

app.listen(port, () => console.log(`App is running on port : ${port}`));
