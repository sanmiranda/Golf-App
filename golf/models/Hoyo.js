const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoyoSchema = new Schema (
  {
    id: Number,
    numHoyo: Number,
    courseId: Number,
    par: Number,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
)



  const hoyo = mongoose.model('hoyo', hoyoSchema);

  module.exports = hoyo;