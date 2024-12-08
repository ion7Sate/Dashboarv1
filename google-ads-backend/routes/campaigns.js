const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

// Endpoint pentru salvarea campaniilor
router.post("/", async (req, res) => {
  try {
    const campaigns = req.body.data;
    await Campaign.insertMany(campaigns);
    res.status(200).send("Campaigns saved successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving campaigns.");
  }
});

// Endpoint pentru obținerea campaniilor
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching campaigns.");
  }
});

module.exports = router;
