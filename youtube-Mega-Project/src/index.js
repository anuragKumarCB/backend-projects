import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config({
    path: "./env"
})


connectDB()
    .then(() => {

        //  CHECK FOR ERROR ** !!!!!!!! 

        // app.on("error", (error) => {
        //     console.log("Express is not able to talk to mongoDB", error);
        //     // throw error;
        // })
        // app.listen(process.env.PORT, () => {
        //     console.log(`Server is running on port : ${port}`);
        // })
    })
    .catch((err) => {
        console.log("MongoDB connection Failed !!! ", err);
    })











/*
import express from "express"

const app = express()
const port = process.env.PORT || 7000

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Express is not able to talk to mongoDB", error);
                throw (error)
            })
            app.listen(port, () => {
                console.log(`App is listening on port : ${port}`);
            })

        } catch (error) {
            console.log("MongoDB connection FAILED", error);
        }
    })()
    */