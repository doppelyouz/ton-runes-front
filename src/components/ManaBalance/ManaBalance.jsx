import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";

import "./ManaBalance.css";

function ManaBalance({ className }) {
  return (
    <div className={`manaContainerWrapper ${className}`}>
      <img src="/src/assets/GeneralPage/mana.png" alt="" />
      <div className="content">
        <p className="manaBalanceText">Mana</p>
        <ProgressBar
          completed={60}
          className="progressBarManaBalance"
          bgColor="#fec14d"
          labelColor="black"
          borderRadius={5}
          maxCompleted={100}
          baseBgColor="#204061"
          barContainerClassName="barContainerClassName"
        />
      </div>
    </div>
  );
}

ManaBalance.propTypes = {
  className: PropTypes.string,
};

export default ManaBalance;
