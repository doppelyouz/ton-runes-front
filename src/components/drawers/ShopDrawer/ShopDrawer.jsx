import Drawer from "react-modern-drawer";
import GoBackButton from "../../GoBackButton";
import PropTypes from "prop-types";
import shop from '../../../constants/shop'

import "./ShopDrawer.css";

function ShopDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
      zIndex={100}
      size="fit-content"
      className="shopDrawer"
      overlayColor={"rgba(0,0,0,0.5)"}
    >
      <div className="drawer">
        {shop.map((item) => (
          <div className="shopItem" key={item.id}>
            <div className='iconWrapper'>
              <img src={item.icon} alt="" />
            </div>
            <p className={`count ${item.count < 1 && 'big'}`}>
              {item.count} TON
            </p>
            <div className="main">
              <div className='profileText'>Profit</div>
              {item.profitTon > 0 && <div className='profitTon '>+{item.profitTon} TON</div>}
              <div className='profitFehu'>+{item.profitFehu} FEHU</div>
            </div>
            <button className="buy">
              Buy
            </button>
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
