import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        user_id: {
            type: int,
            required: true,
            unique: true
        },
        user_name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1,
            maxLength: 255
        }
    }
);

export const User = mongoose.model("User",userSchema);