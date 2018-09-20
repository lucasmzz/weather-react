import React from 'react'

export default () => (
  <div className='tc pv4 pv5-ns w-50 center ma1'>
    <form className="form-inline" action="/weather" method="POST">
            <label className='fw3 f2 v-mid pa3 center ttu' for="city">City</label>
            <input type="text" className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-50" name="city" placeholder="e.g.: London"/>
            <input className="grow br3 bg-transparent hover-bg-purple hover-white pa3 ma2 glow:hover" type="submit" value="Check Weather!"/>
        </form>
  </div>
)
