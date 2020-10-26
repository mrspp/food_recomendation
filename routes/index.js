var express = require("express");
var router = express.Router();
const MenuModel = require("../models/menu");

/* GET home page. */
router.get("/", function (req, res, next) {
  let userLocation = req.query.userLocation ||
    req.query.userGPS ||
    req.query.GeoIP || { lat: 21.02199935913086, long: 105.83999633789062 };
  res.json({ status: true, data: [] });
});

router.get("/menu/:id", function (req, res, next) {
  MenuModel.find({ id: req.params.id }, (err, menu) => {
    if (!err) {
      res.json({ status: true, data: menu });
    }
    if (err) {
      res.json({ status: false, err: err });
    }
  });
});
module.exports = router;
