import { useCallback, useState } from "react";
import ShopDrawer from "../../components/drawers/ShopDrawer";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import InviteFriendsDrawer from "../../components/drawers/InviteFriendsDrawer";
import ManaDrawer from "../../components/drawers/ManaDrawer";
import StoryDrawer from "../../components/drawers/StoryDrawer";

import base from "/src/assets/GeneralPage/base.png";
import runeMiddle from "/src/assets/GeneralPage/rune middle.png";
import rune1 from "/src/assets/GeneralPage/rune 1.png";
import rune2 from "/src/assets/GeneralPage/rune 2.png";
import rune3 from "/src/assets/GeneralPage/rune 3.png";
import rune4 from "/src/assets/GeneralPage/rune 4.png";
import inviteFriends from "/src/assets/GeneralPage/inviteFriends.png";
import shop from "/src/assets/GeneralPage/shop.png";
import mana from "/src/assets/GeneralPage/mana.png";
import add from "/src/assets/GeneralPage/add.png";
import backgroundGeneral from "/src/assets/GeneralPage/backgroundGeneral.png";
import profileIcon from "/src/assets/GeneralPage/profileIcon.png";
import question from "/src/assets/GeneralPage/question.png";
import balanceFigure1 from "/src/assets/GeneralPage/balanceFigure1.png";
import balanceFigure2 from "/src/assets/GeneralPage/balanceFigure2.png";

import "./GeneralPage.css";

function GeneralPage() {
  const [isOpenInvite, setIsOpenInvite] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  const [isOpenMana, setIsOpenMana] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);

  const toggleInviteFriendsDrawer = useCallback(() => {
    setIsOpenInvite((prevState) => !prevState);
  }, []);

  const toggleShopDrawer = useCallback(() => {
    setIsOpenShop((prevState) => !prevState);
  }, []);

  const toggleManaDrawer = useCallback(() => {
    setIsOpenMana((prevState) => !prevState);
  }, []);

  const toggleStoryDrawer = useCallback(() => {
    setIsOpenStory((prevState) => !prevState);
  }, []);

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="baseWrapper">
          <img src={base} alt="" />
        </div>
        <div className="runeMiddleWrapper">
          <img src={runeMiddle} alt="" />
        </div>
        <p className="runeMiddleTime">7:59</p>
        <div className="rune1Wrapper">
          <img src={rune1} alt="" />
        </div>
        <p className="rune1Time">7:59</p>
        <div className="rune2Wrapper">
          <img src={rune2} alt="" />
        </div>
        <p className="rune2Time">7:59</p>
        <div className="rune3Wrapper">
          <img src={rune3} alt="" />
        </div>
        <p className="rune3Time">7:59</p>
        <div className="rune4Wrapper">
          <img src={rune4} alt="" />
        </div>
        <p className="rune4Time">7:59</p>
        <button
          type="button"
          onClick={toggleInviteFriendsDrawer}
          className="inviteWrapper"
        >
          <img src={inviteFriends} alt="" />
        </button>
        <button
          type="button"
          onClick={toggleShopDrawer}
          className="shopWrapper"
        >
          <img src={shop} alt="" />
        </button>
        <div className="manaWrapper">
          <img src={mana} alt="" />
          <button className="manaAddWrapper" onClick={toggleManaDrawer}>
            <img src={add} alt="" />
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
        <img src={backgroundGeneral} alt="" />
      </div>
      <div className="profileIconWrapper">
        <img src={profileIcon} alt="" />
        <Link to="/profile" className="link" />
      </div>
      <button
        type="button"
        onClick={toggleStoryDrawer}
        className="questionWrapper"
      >
        <img src={question} alt="" />
      </button>
      <div className="generalBalanceContainer">
        <div className="balanceFigure1Wrapper">
          <img src={balanceFigure1} alt="" />
          <p className="tonBalance">0.02 ton</p>
        </div>
        <div className="balanceFigure2Wrapper">
          <img src={balanceFigure2} alt="" />
          <p className="fehuBalance">100 $fehu</p>
        </div>
        <div className="addWrapper">
          <img src={add} alt="" />
        </div>
      </div>
      <InviteFriendsDrawer
        isOpen={isOpenInvite}
        toggleDrawer={toggleInviteFriendsDrawer}
      />
      <ShopDrawer isOpen={isOpenShop} toggleDrawer={toggleShopDrawer} />
      <ManaDrawer isOpen={isOpenMana} toggleDrawer={toggleManaDrawer} />
      <StoryDrawer isOpen={isOpenStory} toggleDrawer={toggleStoryDrawer} />
    </div>
  );
}

export default GeneralPage;
