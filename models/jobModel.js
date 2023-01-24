import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    contract: { type: String, required: true, default: 'Full Time' },
    location: { type: String, required: true },
    image: {
      type: String,
      default:
        'https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Job = mongoose.model('job', jobSchema);
export default Job;
// - Company name
// - Position
// - Contract
// - Location
