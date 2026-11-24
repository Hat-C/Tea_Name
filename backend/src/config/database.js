import mongoose from "mongoose";
import ENV from "../../env.js"

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(ENV.DB_URI);
        console.log(`connected @ ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("connection failure", error);
        process.exit(1);
    }

}
export default connectDB;