import mongoose from 'mongoose';


const bugSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Bug = mongoose.model('bug', bugSchema);
export default User;
