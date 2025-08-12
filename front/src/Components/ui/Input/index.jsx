import style from "./style.module.scss";
function Input({ type, onChange, ClassName, width, text, placeholder, icon }) {
  return (
    <div className={style.input}>
      <label htmlFor="input" className={style.input_label}>
        {" "}
        {icon}
        {text}
      </label>
      <input
        style={{ width: width }}
        type={type}
        placeholder={placeholder}
        className={style.input_org}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
