import Username from '../../components/Username'
import Balance from '../../components/Balance'
import Presale from '../../components/Presale'

import './ProfilePage.css'

function ProfilePage() {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="mainContent">
          <Username />
          <Balance />
          <Presale />
        </div>
        <button className='goBack'>&lt; Go back</button>
      </div>
    </div>
  )
}

export default ProfilePage
