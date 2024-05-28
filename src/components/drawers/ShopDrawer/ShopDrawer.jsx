import Drawer from "react-modern-drawer";
import GoBackButton from "../../GoBackButton";
import PropTypes from "prop-types";
import shop from "../../../constants/shop";

import run0 from "/src/assets/GeneralPage/rune middle.png";
import run1 from "/src/assets/GeneralPage/rune 1.png";
import run2 from "/src/assets/GeneralPage/rune 3.png";
import run3 from "/src/assets/GeneralPage/rune 2.png";
import run4 from "/src/assets/GeneralPage/rune 4.png";

import "./ShopDrawer.css";

function ShopDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
      zIndex={100}
      size="auto"
      className="shopDrawer"
      overlayColor={"rgba(0,0,0,0.5)"}
    >
      <div className="drawer">
        {shop.map((item, index) => (
          <div className="shopItem" key={item.id}>
            <div className="iconWrapper">
              <img
                src={
                  index === 0
                    ? run0
                    : index === 1
                    ? run1
                    : index === 2
                    ? run2
                    : index === 3
                    ? run3
                    : run4
                }
                alt=""
              />
            </div>
            <p className={`count ${item.count < 1 && "big"}`}>
              {item.count} TON
            </p>
            <div className="main">
              <div className="profileText">PROFIT</div>
              {item.profitTon > 0 && (
                <div className="profitTon ">+{item.profitTon} TON</div>
              )}
              <div className="profitFehu">+{item.profitFehu} FEHU</div>
            </div>
            <button className="buy">BUY</button>
          </div>
        ))}
        <GoBackButton onClick={toggleDrawer} />
      </div>
    </Drawer>
  );
}

ShopDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default ShopDrawer;
