// const express = require("express");
import express from "express";
import postRouter from "./routers/postRouter.js";
import productRouter from "./routers/productRouter.js";
import authRouter from './routers/authRouter.js'

//auth
import dotenv from 'dotenv';
import cookieParser  from "cookie-parser";
import cors from "cors";

//to use dotenv file
dotenv.config()

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/", postRouter);
app.use("/", productRouter);
app.use("/", authRouter)

app.listen(5500, () => {
    console.log("Server is running on port 5500");
});
