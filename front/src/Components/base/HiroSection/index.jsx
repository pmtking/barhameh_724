import style from "./style.module.scss";
import Image from "../../../assets/image/Frame 315.svg";
import Button from "../../ui/Button";
import FormLoadCalculation from "../FormLoadCalculation";

const HiroSection = () => {
  return (
    <>
      <div className={style.hirosection}>
        <div className={style.hirosection_circle}></div>
        <div className={style.hirosection_content}>
          <div className={style.hirosection_content_text_form}>
            <div className={style.hirosection_content_text_form_h1}>
              <h1>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
              </h1>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</p>
              <div className={style.hirosection_content_text_form_buttons}>
                <Button outline={true} name={"سالن اعلام بار"} />
                <Button name={"سالن اعلام بار"} />
              </div>
              <div className="">
                <FormLoadCalculation />
              </div>
            </div>
          </div>
          <div className={style.hirosection_image}>
            <img src={Image} alt="" className={style.hirosection_image_img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HiroSection;
