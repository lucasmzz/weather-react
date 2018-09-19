import React from 'react'

export default () => (
  <div className='tc pv4 pv5-ns w-50 center'>
    <form className="form-inline" action="/weather" method="POST">
            <label className='fw6 underline' for="city">City</label>
            <input type="text" class="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-75" name="city" placeholder="e.g.: London"/>
            <input className="" type="submit" value="Check Weather!"/>
        </form>
  </div>
)
