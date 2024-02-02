import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//  cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
//  json from data-limit configuration
app.use(express.json({ limit: "16kb" }));
//  url configuration
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//  static configuration for public assets
app.use(express.static("public"));
//  cookie-parser configuration
app.use(cookieParser());

export { app }