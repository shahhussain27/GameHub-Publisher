import mongoose, { Document, Model } from "mongoose";

interface IDevUser extends Document {
  profile?: string;
  name: string;
  email: string;
  password: string;
}

const DevUserSchema = new mongoose.Schema<IDevUser>(
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

const DevUser: Model<IDevUser> =
  mongoose.models.DevUser || mongoose.model<IDevUser>("DevUser", DevUserSchema);
export default DevUser;
