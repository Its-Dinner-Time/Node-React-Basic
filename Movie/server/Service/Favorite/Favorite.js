import mongoose from 'mongoose';
const { Schema } = mongoose;
// schema 정의
const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    moviePoster: {
      type: String,
    },
    movieRuntime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);
export { Favorite };
