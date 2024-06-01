import Coin from './Coin'

import './Coins.css'

function Coins() {
  return (
    <div className='coins'>
      <Coin balance={0.28} name='ton' />
      <Coin balance={128} name='fehu' />
    </div>
  )
}

export default Coins
