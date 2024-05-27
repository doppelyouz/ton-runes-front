
import PropTypes from 'prop-types';

import './GoBackButton.css'

function GoBackButton({ onClick }) {
  return (
    <button className='goBack' onClick={onClick}>&lt; Go back</button>
  )
}

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoBackButton
