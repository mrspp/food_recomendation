const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
var Schema = mongoose.Schema;
const db = require("../lib/db");

var Menu = new Schema(
  {
    //Restaurant's ID
    belongsToRestaurant: Number,
    //Menu's ID
    id: { type: Number, unique: true },
    name: String,
    //List of dishes
    dishes: [Number],
  },
  { timestamps: true }
);
Menu.plugin(mongoosastic);
Menu.index({ name: "text" });
// Compile model from schema
module.exports = mongoose.model("Menu", Menu);
