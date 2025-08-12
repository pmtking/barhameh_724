import PropTypes from "prop-types";
import styles from "./style.module.scss";

const CardColumn = ({
  registrationDdate,
  origin,
  destination,
  fleet,
  distance,
}) => {
  return (
    <div className={styles.card_tabel}>
      <div className={styles.card_tabel_content}>{registrationDdate}</div>
      <div className={styles.card_tabel_content}>{origin}</div>
      <div className={styles.card_tabel_content}>{destination}</div>
      <div className={styles.card_tabel_content}>{fleet}</div>
      <div className={styles.card_tabel_content}>{distance}</div>
    </div>
  );
};

export default CardColumn;

// PropTypes definition
CardColumn.propTypes = {
  registrationDdate: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  fleet: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
};
