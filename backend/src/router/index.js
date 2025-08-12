const express = require("express");
const auth = require("./auth");
const {
  LoadCalculationController,
} = require("../Controller/LoadCalculation/LoadCalculationController");
const {
  createArticle,

  uploadCoverImage,
} = require("../Controller/Article/ArticleController");

const router = express.Router();
router.use("/auth", auth);
router.post("/bar", LoadCalculationController);
router.post("/add-articles", uploadCoverImage, createArticle);

module.exports = router;
