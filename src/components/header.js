import React from 'react'
import logo from '../logo.jpg'

export default () => (
  <header className='tc pv4 pv5-ns'>
    <div className='center tc ba br3 mw7 ma2 pa2'>
        <img src={logo} className='br-100 pa1 ba bw3 ma2 h3 w3' alt='avatar' />
        <h1 className='f1 f1-ns fw6'>>_weather-man!</h1>
        <h2 className='f5 gray fw2 underline'>before your day starts to play...</h2>
    </div>
  </header>
)