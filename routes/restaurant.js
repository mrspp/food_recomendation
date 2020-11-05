var express = require("express");
const db = require("mongoose");
var router = express.Router();
const RestaurantModel = require("../models/restaurant");
const MenuModel = require("../models/menu");
const DishModel = require("../models/dish");

router.get("/search", function (req, res) {
  RestaurantModel.find({ $text: { $search: "lau" } }, (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
  res.json({ status: true, data: "" });
});
/* GET restaurant details. */
router.get("/:id", function (req, res, next) {
  RestaurantModel.findOne({ id: req.params.id }, (err, restaurant) => {
    if (!err) {
      res.json({ status: true, data: restaurant });
    }
    if (err) {
      res.json({ status: false, err: err });
    }
  });
});

router.get("/:id/menu", function (req, res, next) {
  MenuModel.find({ belongsToRestaurant: req.params.id }, (err, menu) => {
    if (!err) {
      res.json({ status: true, data: menu });
    }
    if (err) {
      res.json({ status: false, err: err });
    }
  });
});

router.get("/:id/dish", function (req, res, next) {
  DishModel.find({ belongsToRestaurant: req.params.id }, (err, dishes) => {
    if (!err) {
      res.json({ status: true, data: dishes });
    }
    if (err) {
      res.json({ status: false, err: err });
    }
  });
});
router.get("/", (req, res) => {
  let page = req.query.page || 1;
  RestaurantModel.paginate({}, { page: page }, (err, results) => {
    if (err) res.json({ status: false, err: err.code });
    if (!err) res.json({ status: true, data: results.docs });
  });
});

module.exports = router;
