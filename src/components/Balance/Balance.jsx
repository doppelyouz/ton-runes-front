import './Balance.css'

import Coins from './Coins'

function Balance() {
  return (
    <div className='balanceContainer'>
        <p className='balanceText'>
            Balance
        </p>
        <Coins />
    </div>
  )
}

export default Balance
