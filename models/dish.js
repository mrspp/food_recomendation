const mongoose = require("mongoose");
const { model } = require("../lib/db");
var Schema = mongoose.Schema;
const db = require("../lib/db");

var Dish = new Schema({
  description: String,
  display_order: Number,
  id: { type: Number, unique: true },
  is_active: Boolean,
  is_available: Boolean,
  is_deleted: Boolean,
  is_group_discount_item: Boolean,
  name: String,
  options: Array,
  photos: [Object],
  price: Object,
  properties: Array,
  quantity: Number,
  time: Object,
  total_like: String,
  belongsToMenu: Number,
  belongsToRestaurant: Number,
});
// Compile model from schema
module.exports = mongoose.model("Dish", Dish);
