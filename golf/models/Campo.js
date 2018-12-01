const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campoSchema = new Schema (
  {
    id: Number,
    name: String,
    adress: {
      country: String,
      street: String,
      city: String,
      state: String,
      zip: String,
      Name: String,
      phonenumber: String,
    },
    // location: {
    //   type: {
    //     type: String,
    //     default: "Point"
    //   },
    //   coordinates: [Number]
      holes: Number,
      par: Number,
      distance: Number,
      teeboxtype: String,
      slope: Number,
      rating: Number,
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true
      }
    }
  )


const campo = mongoose.model('campo', campoSchema);

  module.exports = campo;
  
