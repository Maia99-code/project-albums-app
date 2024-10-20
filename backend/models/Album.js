const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  trackCount: { type: Number, required: true },
  songs: { type: [String], default: [] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Album', albumSchema);
