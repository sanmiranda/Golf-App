const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    //facebookId: String,
    image: String,
    // imagePath:String,
    // imageName:String,
    age: Number,
    gender:{
      type: String,
      enum: [hombre, mujer]
    },
    handicap: Number,
    homeCourse: String,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
)

const user = mongoose.model('user', userSchema);

module.exports = user;

