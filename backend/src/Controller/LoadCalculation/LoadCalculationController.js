const xlsx = require("xlsx");
const path = require("path");

const COMMISSION_RATE = 0.195;
const INSURANCE_RATE = 267;
const PRICE_INCREASE_RATE = 1.25;

const LoadCalculationController = async (req, res) => {
  try {
    const { province, city, vehicleType } = req.body;

    if (!province || !city || !vehicleType) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const filePath = path.join(__dirname, "../../../assets/exl/1403.xlsx");
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    const excelDataArray = data.map((item) => ({
      province: item[" Province "]?.toString().trim(),
      city: item[" City "]?.toString().trim(),
      vehicleTypePrices: {
        10: item[" 10  "]?.toString().trim(),
        6: item[" 6  "]?.toString().trim(),
        911: item[" 911  "]?.toString().trim(),
        808: item[" 808  "]?.toString().trim(),
        608: item[" 608  "]?.toString().trim(),
      },
      ton: item[" Ton "],
    }));

    const result = excelDataArray.find((item) => {
      return item.province === province && item.city === city;
    });

    if (!result) {
      return res.status(404).json({ message: "Data not found for the provided inputs" });
    }

    const rawPrice = result.vehicleTypePrices[vehicleType];
    if (!rawPrice) {
      return res.status(404).json({ message: `Vehicle type ${vehicleType} not found in the data` });
    }

    const vehicleTypePrice = parseFloat(rawPrice.replace(/,/g, ""));
    const adjustedVehiclePrice = vehicleTypePrice * PRICE_INCREASE_RATE;

    const commission = adjustedVehiclePrice * COMMISSION_RATE;
    const total = adjustedVehiclePrice - commission;

    const ton = parseFloat(result.ton);
    const insurance = ton * INSURANCE_RATE;

    const finalPayable = total + insurance;

    res.status(200).json({
      province: result.province,
      city: result.city,
      vehicleType,
      basePrice: vehicleTypePrice,
      adjustedVehiclePrice: +adjustedVehiclePrice.toFixed(3),
      commission: +commission.toFixed(3),
      insurance: +insurance.toFixed(3),
      ton,
      total: +total.toFixed(3),
      finalPayable: +finalPayable.toFixed(3),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { LoadCalculationController };
