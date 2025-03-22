import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import studentRoutes from "./src/Routes/student.routes.js";
import errorHandler from "./src/errorHandlerMiddleware/errHandler.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("HY everyone");
});

//middleware
app.use(express.json());
app.use(errorHandler);

//apiendpoint
app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
