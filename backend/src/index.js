//import dotenv from "dotenv";
import ENV from "../env.js"
import connectDB from "./config/database.js";
import app from "./app.js";

/*
dotenv.config({
    path: './.env'
});
*/

const startServer = async () => {
    try {
        await connectDB();
        app.on("error",(error) => {
            console.log("error???", error);
            throw error;
        });
        app.listen(ENV.PORT || 8000, () => {
            console.log(`server running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.log("connection failure", error);
        process.exit(1);
    }

}
startServer();