import mongoose, { Schema } from "mongoose"

const postSchema = new Schema(
    {
        post_id: {
            type: int,
            required: true,
            unique: true
        },
        user_id: {
            type: int,
            required: true,
            unique: true
        },
        post_title: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            maxLength: 255
        }
    }
);
export const Post = mongoose.model("Post", postSchema);