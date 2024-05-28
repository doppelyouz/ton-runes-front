import Drawer from "react-modern-drawer";
import GoBackButton from "../../GoBackButton";
import PropTypes from "prop-types";
import handleCopy from "../../../utils/handleCopy";

import inviteFriendsNoShadow from "/src/assets/GeneralPage/inviteFriendsNoShadow.png";
import copy from "/src/assets/GeneralPage/copy.png";

import "./InviteFriendsDrawer.css";

function InviteFriendsDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
      zIndex={100}
      size="fit-content"
      className="inviteDrawer"
      overlayColor={"rgba(0,0,0,0.5)"}
    >
      <div className="inviteFriendsDrawer">
        <div className="drawerTitleWrapper">
          <img src={inviteFriendsNoShadow} alt="" />
        </div>
        <div className="desc">
          <p className="descText">
            За каждого приведенного друга который купит любой рунный камень
          </p>
          <div className="bonus">
            <h4 className="bonusText">Вы получите:</h4>
            <p className="bonusDesc">+10 $FEHU и +5% от его покупок в TON</p>
          </div>
        </div>
        <div className="referral">
          <h3 className="referralTitle">Ваша реферальная ссылка</h3>
          <div className="referralCode">
            <p className="referralCodeText">
              www.T.me/starwwww.T.me/starwww.T.me/star
            </p>
            <button className="copyButton" onClick={handleCopy}>
              <img src={copy} alt="" />
            </button>
          </div>
        </div>
        <GoBackButton onClick={toggleDrawer} />
      </div>
    </Drawer>
  );
}

InviteFriendsDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default InviteFriendsDrawer;
