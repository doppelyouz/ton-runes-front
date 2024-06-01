
import PropTypes from 'prop-types';
import withdraw from '/src/assets/ProfilePage/withdraw.png';
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
      <button className='withdraw'>
        <img src={withdraw} alt="" />
      </button>
    </div>
  )
}

Coin.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  special: PropTypes.bool
};

export default Coin
