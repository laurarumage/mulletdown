import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {
  dateMulleted: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
}

function Menu({ dateMulleted, onClick, view }) {
  const menuOption = view === 'detail' ? 'back' : 'more details'

  return (
    <h2 className="flex justify--between">
      <div>{moment(dateMulleted).fromNow()}</div>
      <div className="menu-option" onClick={onClick}>{menuOption}</div>
    </h2>
  )
}

Menu.propTypes = propTypes;

export default Menu
