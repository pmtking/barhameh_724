import { Car, Location, LocationTick, WalletMoney } from "iconsax-react";
import Input from "../../ui/Input";
import style from "./styles.module.scss";
import Button from "../../ui/Button";
import Api from "../../../libs/axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormLoadCalculation() {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [cargoValue, setCargoValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [calculationData, setCalculationData] = useState({
    totalPrice: null,
    commission: null,
    insurance: null,
    pricePerTon: null,
  });

  const onhanndleSubmit = async () => {
    try {
      const response = await Api.post("/bar", {
        city,
        province,
        vehicleType,
        cargoValue,
      });

      if (response) {
        setCalculationData(response.data); // Assuming the response contains the required values
        setIsOpen(true); // Open the modal
      }
      console.log(response);
    } catch (e) {
      console.log(e);
      toast.error("Error occurred while fetching data");
    }
  };

  return (
    <>
      {isOpen === false ? (
        <div className={style.form_content}>
          <p>استعلام قیمت قانونی بار</p>
          <div className={style.form_content_inputs}>
            <Input
              width={200}
              text={"استان مقصد"}
              icon={<Location color="#697565" variant="Broken" />}
              placeholder={"مبدا را وارد کنید"}
              onChange={(e) => setProvince(e.target.value)}
            />
            <Input
              width={200}
              text={"شهر مقصد"}
              icon={<LocationTick color="#697565" variant="Broken" />}
              placeholder={"مقصد را وارد کنید"}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={style.form_content_inputs}>
            <Input
              width={200}
              text={"نوع ناوگان"}
              icon={<Car color="#697565" variant="Broken" />}
              placeholder={"نوع ناوگان را وارد کنید"}
              onChange={(e) => setVehicleType(e.target.value)}
            />
            <Input
              width={200}
              text={"ارزش بار"}
              icon={<WalletMoney color="#697565" variant="Broken" />}
              placeholder={"ارزش بار را وارد کنید"}
              onChange={(e) => setCargoValue(e.target.value)}
            />
          </div>
          <Button width={450} name={"استعلام بار"} onClick={onhanndleSubmit} />
        </div>
      ) : (
        <div className={style.form_content}>
          <p>استعلام قیمت قانونی بار</p>
          {/* Modal Content */}
          <div className={style.modal_content}>
            <h2>نتایج محاسبه</h2>
            <p>
              <strong>قیمت کل:</strong> {calculationData.totalPrice} تومان
            </p>
            <p>
              <strong>قیمت کمیسیون:</strong> {calculationData.commission} تومان
            </p>
            <p>
              <strong>بیمه بار:</strong> {calculationData.insurance} تومان
            </p>
            <p>
              <strong>قیمت برای هر تن:</strong> {calculationData.pricePerTon}{" "}
              تومان
            </p>
            <Button width={200} name="بستن" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
