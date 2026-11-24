import mongoose, { Schema } from "mongoose"

const ingredientSchema = new Schema(
    {
        post_id: {
            type: int,
            required: true,
            unique: false
        }
    }
);

export const Ingredient = mongoose.model("Ingredient", ingredientSchema);