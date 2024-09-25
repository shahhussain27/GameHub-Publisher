import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      ref: "UserDev",
      required: true,
    },
    productImage: {
      type: String,
      required: false,
      default: null,
    },

    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: false,
      default: 0,
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
      required: false,
      default: "Windows",
    },
    productGameEngine: {
      type: String,
      required: false,
      default: undefined,
    },
    productPoster: {
      type: String,
      required: false,
      default: undefined,
    },
    productTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    productFile: {
      type: String,
      required: false,
      default: null,
    },
    productCarouselImages: {
      type: Array,
      required: false,
      default: null,
    },
    storyHeading: {
      type: String,
      required: false,
      default: undefined,
    },
    storyContext: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
