import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productSmallImage: {
      type: String,
      required: false,
    },
    productMediumImage: {
      type: String,
      required: false,
    },
    productlargeImage: {
      type: String,
      required: false,
    },
    productPoster: {
      type: String,
      required: false,
    },
    productFile: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productPublisher: {
      type: String,
      required: true,
    },
    productDeveloper: {
      type: String,
      required: true,
    },
    productPlatform: {
      type: String,
      required: true,
    },
    productGameEngine: {
      type: String,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
