const mongoose = require("mongoose");

const ExcelDataSchema = new mongoose.Schema({
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  filter: {
    type: Number,
  },
  ton: {
    type: Number,
  },
});

module.exports = mongoose.model("ExcelData", ExcelDataSchema);
