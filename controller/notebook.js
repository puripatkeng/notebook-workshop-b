const express = require("express");
const router = express.Router();
const Asset = require("../model/notebook");

exports.deleteAsset = async (req, res) => {
  try {
    // console.log(req.body);
    const { codeAsset } = req.body;
    const filter = { codeAsset: codeAsset };
    Asset.deleteOne(filter, function (err, deleteAsset) {
      const result = deleteAsset;

      console.log(result);
    });
    res.status(200).json({
      resultCode: 20000,
      resultDescription: `Delete  codeAsset ${codeAsset} success!!`,
    });
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: error.message,
    });
  }
};

exports.createAsset = async (req, res) => {
  try {
    // console.log(req.body);
    const { codeAsset, brand, model, serial, warranty } = req.body;
    const createAsset = await Asset.create({
      codeAsset,
      brand,
      model,
      serial,
      warranty,
      created: new Date(),
    });
    console.log(1, createAsset);
    res.status(201).json({
      resultCode: 20100,
      resultDescription: `New ${brand} created!!`,
    });
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: error.message,
    });
  }
};


exports.findAllAsset = async (req, res) => {
    try {
        Asset.find({}, function(err, allAsset){
            const findAllAsset = allAsset;
            res.status(200).json({
                resultCode: 20000,
                resultDescription: findAllAsset
            })
        })
    } catch (error) {
        res.status(500).json({
            resultCode: 50000,
            resultDescription: error.messege
        })
    }
};