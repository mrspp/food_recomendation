var express = require("express");
const RestaurantModel = require("../models/restaurant");
const db = require("mongoose");
var router = express.Router();
const DishModel = require("../models/dish");
const MenuModel = require("../models/menu");

/* GET Dishes listing. */

router.get("/search", function (req, res) {
  let query = req.query.query;
  let page = req.query.page || 1;
  console.log(req.query.query);
  DishModel.find(
    { $text: { $search: query } },
    {},
    { limit: 10, skip: 10 * (page - 1) },
    (err, results) => {
      if (!err) res.json({ status: true, data: results });
      if (err) res.json({ status: false, err: err });
    }
  );
});

router.get("/:id", function (req, res, next) {
  DishModel.find({ id: req.params.id }, (err, dish) => {
    if (!err) {
      res.json({ status: true, data: dish });
    }
    if (err) {
      res.json({ status: false, err: err });
    }
  });
});

module.exports = router;
