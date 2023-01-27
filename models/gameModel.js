import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    level: { type: Number, required: true, default: 1 },
    score: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Game = mongoose.model('gameuser', gameSchema);
export default Game;
