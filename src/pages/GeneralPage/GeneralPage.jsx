import { useCallback, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import InviteFriendsDrawer from "../../components/drawers/InviteFriendsDrawer";

import "./GeneralPage.css";
import ShopDrawer from "../../components/drawers/ShopDrawer/ShopDrawer";

function GeneralPage() {
  const [isOpenInvite, setIsOpenInvite] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);

  const toggleInviteFriendsDrawer = useCallback(() => {
    setIsOpenInvite((prevState) => !prevState);
  }, []);

  const toggleShopDrawer = useCallback(() => {
    setIsOpenShop((prevState) => !prevState);
  }, []);

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="baseWrapper">
          <img src="/src/assets/GeneralPage/base.png" alt="" />
        </div>
        <div className="runeMiddleWrapper">
          <img src="/src/assets/GeneralPage/rune middle.png" alt="" />
        </div>
        <p className="runeMiddleTime">7:59</p>
        <div className="rune1Wrapper">
          <img src="/src/assets/GeneralPage/rune 1.png" alt="" />
        </div>
        <p className="rune1Time">7:59</p>
        <div className="rune2Wrapper">
          <img src="/src/assets/GeneralPage/rune 2.png" alt="" />
        </div>
        <p className="rune2Time">7:59</p>
        <div className="rune3Wrapper">
          <img src="/src/assets/GeneralPage/rune 3.png" alt="" />
        </div>
        <p className="rune3Time">7:59</p>
        <div className="rune4Wrapper">
          <img src="/src/assets/GeneralPage/rune 4.png" alt="" />
        </div>
        <p className="rune4Time">7:59</p>
        <button
          type="button"
          onClick={toggleInviteFriendsDrawer}
          className="inviteWrapper"
        >
          <img src="/src/assets/GeneralPage/inviteFriends.png" alt="" />
        </button>
        <button
          type="button"
          onClick={toggleShopDrawer}
          className="shopWrapper"
        >
          <img src="/src/assets/GeneralPage/shop.png" alt="" />
        </button>
        <div className="manaWrapper">
          <img src="/src/assets/GeneralPage/mana.png" alt="" />
          <button className="manaAddWrapper">
            <img src="/src/assets/GeneralPage/add.png" alt="" />
          </button>
          <div className="content">
            <p className="manaText">Mana</p>
            <ProgressBar
              completed={60}
              className="progressBar"
              bgColor="#fec14d"
              labelColor="black"
              borderRadius={5}
              maxCompleted={100}
              baseBgColor="#204061"
              barContainerClassName="barContainerClassName"
            />
          </div>
        </div>
      </div>
      <div className="backgroundWrapper">
        <img src="/src/assets/GeneralPage/backgroundGeneral.png" alt="" />
      </div>
      <div className="profileIconWrapper">
        <img src="/src/assets/GeneralPage/profileIcon.png" alt="" />
      </div>
      <div className="questionWrapper">
        <img src="/src/assets/GeneralPage/question.png" alt="" />
      </div>
      <div className="balanceFigure1Wrapper">
        <img src="/src/assets/GeneralPage/balanceFigure1.png" alt="" />
      </div>
      <div className="balanceFigure2Wrapper">
        <img src="/src/assets/GeneralPage/balanceFigure2.png" alt="" />
      </div>
      <div className="addWrapper">
        <img src="/src/assets/GeneralPage/add.png" alt="" />
      </div>
      <p className="tonBalance">0.02 ton</p>
      <p className="fehuBalance">100 $fehu</p>
      <InviteFriendsDrawer
        isOpen={isOpenInvite}
        toggleDrawer={toggleInviteFriendsDrawer}
      />
      <ShopDrawer isOpen={isOpenShop} toggleDrawer={toggleShopDrawer} />
    </div>
  );
}

export default GeneralPage;
