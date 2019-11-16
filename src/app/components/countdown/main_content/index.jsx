import React from 'react'
import moment from 'moment';

import dude from '../../../images/dude.png'
import Clock from './clock'

function MainContent() {
  const dateMulleted = moment('11-12-2019 20:10', 'MM-DD-YYYY HH:mm')

  return (
    <main>
      <h1>time elapsed since mullet ground zero</h1>
      <img src={dude} alt="dude" className="dude" />
      <Clock dateMulleted={dateMulleted} />
    </main>
  )
}

export default MainContent
