import style from "./style.module.scss";

const CardUserComponents = ({ img, name, role }) => {
  return (
    <>
      <main className={style.card_user}>
        <div className={style.card_user_content}>
          <div className="">{name}</div>
          <div className={style.card_user_content_role}>{role}</div>
        </div>
        <div className={style.card_user_image}>
          <img src={img} alt="" width={50} />
        </div>
      </main>
    </>
  );
};

export default CardUserComponents;
