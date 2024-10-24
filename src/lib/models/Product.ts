import mongoose, { Document, Model } from "mongoose";

interface IProduct extends Document {
  userEmail: string;
  productImage?: string | null;
  productImageKey?: string;
  productName: string;
  productPrice?: number;
  productPublisher: string;
  productDeveloper: string;
  productPlatform?: string;
  productGameEngine?: string;
  productPoster?: string;
  productTitle?: string;
  productFile?: string | null;
  productCarouselImages?: string[] | null;
  storyHeading?: string;
  storyContext?: string;
}

const ProductSchema = new mongoose.Schema<IProduct>(
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
      type: [String],
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

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
