import style from "./style.module.scss";
function Button({ name, width, onClick, type, outline }) {
  return (
    <div>
      <button
        className={outline ? style.outline : style.btn}
        type={type}
        onClick={onClick}
        style={{ width: width }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
