// const express = require("express");
import express from "express";
import postRouter from "./routers/postRouter.js";
import productRouter from "./routers/productRouter.js";

import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", postRouter);
app.use("/", productRouter);

app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
