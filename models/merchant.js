const mongoose = require("mongoose");
const db = require("../lib/db");
var Schema = mongoose.Schema;

var Merchant = new Schema({
  name: String,
  item: Object,
  merchant_booking_id: Number,
  item_count: Number,
  photos: [Object],
  name_url: String,
  address: String,
  id: { type: Number, unique: true },
  position: Object,
  operation: Object,
  province_id: Number,
  merchant_category: String,
});
// Compile model from schema
module.exports = mongoose.model("Merchant", Merchant);
