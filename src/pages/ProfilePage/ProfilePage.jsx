import Username from '../../components/Username'
import Balance from '../../components/Balance'
import Presale from '../../components/Presale'
import GoBackButton from '../../components/GoBackButton'

import './ProfilePage.css'

function ProfilePage() {
  return (
    <div className="container">
      <div className="innerContainerProfile">
        <div className="mainContentProfile">
          <Username />
          <Balance />
          <Presale />
        </div>
        <GoBackButton link />
      </div>
    </div>
  )
}

export default ProfilePage
