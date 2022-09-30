const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controller = require("../controller/notebook");

mongoose
  .connect(
    "mongodb://assetusr1:assetpass1@202.129.207.228:27017/AssetDB1?authMechanism=DEFAULT&authSource=AssetDB1"
  )
  .then(() => console.log("Connected to MongoDB...."))
  .catch((err) => console.error("Could not connect..", err));

router.post("/", controller.createAsset);
router.delete("/", controller.deleteAsset);

module.exports = router;
