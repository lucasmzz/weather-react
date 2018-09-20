import React from 'react'
import logo from '../logo.jpg'

export default () => (
  <div className='tc pv4 pv5-ns w-75 ba br3 center ma1'>
	<div className="center tc flex flex-row">
		<h1 className="tc center f1">Weather for Buenos Aires, Argentina</h1>	
	</div>
	<div className="flex flex-row">
	    <div className='w-50'>
	    	<img src={logo} alt="weather icon"/>
	    </div>
		<div  className='f3 w-50 tl'>
			<p className="grow">Temperature: 27*C</p>
			<p className="grow">Feels like: 30*C</p>
			<p className="grow">Wind Speed: 5mph</p>
			<p className="grow">Chances of Rain: 0%</p>
		</div>		
	</div>
  </div>
)