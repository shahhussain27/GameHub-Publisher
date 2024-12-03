import mongoose, { Document, Model } from "mongoose";

interface IProduct extends Document {
  userEmail: string;
  productImage?: string | null;
  productImageKey?: string;
  productName: string;
  productPrice?: number;
  productDiscount?: number;
  productOffers?: object[] | null;
  productPublisher: string;
  productDeveloper: string;
  productPlatform?: string;
  productGameEngine?: string;
  productFrontPoster?: string | null;
  productFrontPosterKey?: string;
  productBackPoster?: string | null;
  productBackPosterKey?: string;
  productTitle?: string;
  genres?: [];
  features?: [];
  productFileURL?: string | null;
  productFileURLKey?: string | null;
  productFileName?: string | null;
  productFileSize?: Number | null;
  productFileType?: string | null;
  productCarouselImages?: object[] | null;
  productRatings?: object[] | null;
  productDownloads?: object[] | null;
  productTotalDownloads?: Number;
  productTotalRevenueAmount?: Number;
  storyHeading?: string;
  storyContext?: string;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    userEmail: {
      type: String,
      ref: "DevUser",
      required: true,
    },
    productImage: {
      type: String,
      required: false,
      default: null,
    },
    productImageKey: {
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
    productDiscount: {
      type: Number,
      required: false,
      default: 0,
    },
    productOffers: {
      type: [Object],
      required: false,
      default: [],
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
      default: null,
    },
    productFrontPoster: {
      type: String,
      required: false,
      default: null,
    },
    productFrontPosterKey: {
      type: String,
      required: false,
      default: null,
    },
    productBackPoster: {
      type: String,
      required: false,
      default: null,
    },
    productBackPosterKey: {
      type: String,
      required: false,
      default: null,
    },
    productTitle: {
      type: String,
      required: false,
      default: null,
    },
    genres: {
      type: [Array],
      required: false,
      default: null,
    },
    features: {
      type: [Array],
      required: false,
      default: null,
    },
    productFileURL: {
      type: String,
      required: false,
      default: null,
    },
    productFileURLKey: {
      type: String,
      required: false,
      default: null,
    },
    productFileName: {
      type: String,
      required: false,
      default: null,
    },
    productFileSize: {
      type: Number,
      required: false,
      default: null,
    },
    productFileType: {
      type: String,
      required: false,
      default: null,
    },
    productCarouselImages: {
      type: [Object],
      required: false,
      default: [],
    },
    productRatings: {
      type: [Object],
      required: false,
      default: [],
    },
    productDownloads: {
      type: [Object],
      required: false,
      default: [],
    },
    productTotalDownloads: {
      type: Number,
      required: false,
      default: 0,
    },
    productTotalRevenueAmount: {
      type: Number,
      required: false,
      default: 0,
    },
    storyHeading: {
      type: String,
      required: false,
      default: null,
    },
    storyContext: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
