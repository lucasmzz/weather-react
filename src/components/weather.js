import React from 'react'


export default ({ forecast }) => (
  <div className='tc pv4 pv5-ns w-75 ba br3 center ma1'>
	<div className="center tc flex flex-row">
		<h1 className="tc center f1">Weather for {forecast.name}</h1>	
	</div>
	<div className="flex flex-row">
	    <div className='w-50'>
	    	<img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="weather icon"/>
	    </div>
		<div  className='f3 w-50 tl'>
			<p className="grow">Temperature: {forecast.main.temp}°C </p>
			<p className="grow">Wind Speed:  {forecast.wind.speed}m/s</p>
			<p className="grow">Clouds:  {forecast.clouds.all}%</p>
		</div>		
	</div>
  </div>
)