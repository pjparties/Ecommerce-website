import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    enum: ["Tees", "Sweatshirts", "Accessories", "Bottoms"]
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CategorySchema);
