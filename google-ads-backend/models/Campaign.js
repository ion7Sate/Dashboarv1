const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  accountName: String,
  accountId: String,
  campaignName: String,
  campaignStatus: String,
  campaignType: String,
  clicks: Number,
  impressions: Number,
  adsDisapproved: String,
  disapprovalReasons: String,
  policyLimited: String,
  policyReasons: String,
  budgetAmount: Number,
  spend: Number,
  budgetAvailable: Number,
  accountStatus: String,
});

module.exports = mongoose.model("Campaign", CampaignSchema);
