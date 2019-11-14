import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from './menu'

const propTypes = {
  'dateMulleted': PropTypes.object.isRequired
}

const DETAIL = 'detail';
const MAIN = 'main';
const MAIN_CONTENT = 'wow neat'

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { view: 'main' }
  }

  handleClick = () => {
    const { view } = this.state;
    const selectedView = view === DETAIL ? MAIN : DETAIL


    this.setState({ view: selectedView })
  }

  render() {
    const { dateMulleted } = this.props;
    const { view } = this.state;
    const formattedTime = dateMulleted.format('h:mm a')
    const formattedDate = dateMulleted.format('MMMM Do YYYY')
    const detailContent = `lil rummers literally got a mullet at ${formattedTime} on ${formattedDate}`
    const content = view === DETAIL ? detailContent : MAIN_CONTENT

    return (
      <div>
        <Menu
          dateMulleted={this.props.dateMulleted}
          view={view}
          onClick={this.handleClick}
        />
        {content}
      </div>
    )
  }
}

Clock.propTypes = propTypes;

export default Clock
