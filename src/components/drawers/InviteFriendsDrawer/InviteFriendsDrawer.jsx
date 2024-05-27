
import Drawer from "react-modern-drawer";
import GoBackButton from '../../GoBackButton'
import PropTypes from 'prop-types';
import handleCopy from "../../../utils/handleCopy";

import './InviteFriendsDrawer.css'

function InviteFriendsDrawer({ isOpenInvite, toggleInviteFriendsDrawer}) {
  return (
    <Drawer
      open={isOpenInvite}
      onClose={toggleInviteFriendsDrawer}
      direction="bottom"
      zIndex={100}
      size={"78%"}
      className="inviteDrawer"
      overlayColor={"rgba(0,0,0,0.5)"}
    >
      <div className="drawer">
        <div className="drawerTitleWrapper">
          <img
            src="/src/assets/GeneralPage/inviteFriendsNoShadow.png"
            alt=""
          />
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
              <img src="/src/assets/GeneralPage/copy.png" alt="" />
            </button>
          </div>
        </div>
        <GoBackButton onClick={toggleInviteFriendsDrawer}/>
      </div>
    </Drawer>
  )
}

InviteFriendsDrawer.propTypes = {
    isOpenInvite: PropTypes.bool.isRequired,
    toggleInviteFriendsDrawer: PropTypes.func.isRequired,
  };
  

export default InviteFriendsDrawer
