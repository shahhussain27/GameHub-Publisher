import mongoose from "mongoose";

const DevUserSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DevUser = mongoose.models.DevUser || mongoose.model("DevUser", DevUserSchema);
export default DevUser;
