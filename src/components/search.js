import React from 'react'

export default () => (
  <div className='tc pv4 pv5-ns center'>
    <form className="form-inline" action="/weather" method="POST">
            <label className='fw6 underline' for="city">City</label>
            <input type="text" class="form-control" name="city" placeholder="e.g.: London"/>
            <input className="" type="submit" value="Check Weather!"/>
        </form>
  </div>
)
