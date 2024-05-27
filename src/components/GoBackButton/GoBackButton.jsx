import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./GoBackButton.css";

function GoBackButton({ onClick, link }) {
  return (
    <button className="goBack" onClick={onClick}>
      &lt; Go back
      {link && <Link to="/" className="link" />}
    </button>
  );
}

GoBackButton.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.bool,
};

export default GoBackButton;
