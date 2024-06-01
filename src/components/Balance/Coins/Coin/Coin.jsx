
import PropTypes from 'prop-types';
import withdraw from '/src/assets/ProfilePage/withdraw.png';
// import withdrawNoShadow from '/src/assets/ProfilePage/withdrawNoShadow.png';
import ton from '/src/assets/ProfilePage/ton.png';
import fehu from '/src/assets/ProfilePage/fehu.png';

import './Coin.css'

function Coin({ balance, name }) {
  return (
    <div className='coin'>
      <div className='coinInner'>
        <p className='balance special'>{balance}</p>
      </div>
      <div className={`coinName ${name === "ton" ? "ton" : "fehu"}`}>
        <img src={name === "ton" ? ton : fehu} alt="" />
      </div>
      <button className='withdraw' disabled={name === "fehu"}>
        <img src={withdraw} alt="" />
      </button>
      {/* <button className={`withdraw ${name === "fehu" && 'disabled'}`} disabled={name === "fehu"}>
        <img src={name === "ton" ? withdraw : withdrawNoShadow} alt="" />
      </button> */}
    </div>
  )
}

Coin.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  special: PropTypes.bool
};

export default Coin
