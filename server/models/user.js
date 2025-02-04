import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
