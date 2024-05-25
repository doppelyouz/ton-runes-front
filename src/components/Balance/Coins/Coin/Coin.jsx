
import PropTypes from 'prop-types';
import './Coin.css'

function Coin({ balance, name, special }) {
  return (
    <div className='coin'>
      <div className='coinInner'>
        <p className='balance special'>{balance}</p>
      </div>
      <div className={`coinName ${special && "special"}`}>
        {name}
      </div>
      <button className='withdraw'>
        withdraw
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
