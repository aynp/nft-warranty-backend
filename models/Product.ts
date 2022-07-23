import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Buffer,
  },
});

export default mongoose.model('Product', Product);
