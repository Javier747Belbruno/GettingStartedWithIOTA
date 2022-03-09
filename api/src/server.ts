import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoute from "./routes/user";
import iotaRoute from "./routes/iota";
import { logEndPoints } from "./middleware/functions";

const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(logEndPoints);

// routes
app.use("/api/iota", iotaRoute());
app.use("/api/users", userRoute());

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("Application listening at Http://localhost:" + PORT);
});
