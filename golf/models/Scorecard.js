const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scorecardSchema = new Schema (
  {
    courseid: Number,
    holeteeboxes: [ 
      { 
        holeid: Number,
        holenumber: Number, 
        color: String, 
        number: Number, 
        par: Number, 
        handicap: Number, 
        teeboxtype: String 
      },
      { 
        holeid: Number,
        holenumber: Number, 
        color: String, 
        number: Number, 
        par: Number, 
        handicap: Number, 
        teeboxtype: String 
      },
      { 
        holeid: Number,
        holenumber: Number, 
        color: String, 
        number: Number, 
        par: Number, 
        handicap: Number, 
        teeboxtype: String 
      } 
    ],
    coursename: String,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
)


  const scorecard = mongoose.model('scorecard', scorecardSchema);

  module.exports = scorecard;