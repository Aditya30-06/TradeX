const express = require("express");
const router = express.Router();
const { HoldingModel } = require("../models/HoldingModel")
const { PostionModel } = require("../models/PostionModel")
const { WatchListModel } = require("../models/WatchListModel")


router.get("/getHoldings", async (req, res) => {
    let allholding = await HoldingModel.find({});
    res.json(allholding);
})

router.get("/getPostions", async (req, res) => {
    let allpostions = await PostionModel.find({});
    res.json(allpostions);
})

router.get("/getWatchList", async (req, res) => {
    let allwatchList = await WatchListModel.find({});
    res.json(allwatchList);
})

module.exports = router;