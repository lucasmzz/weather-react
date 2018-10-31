import React from 'react'

const Search = ({ handleChange, handleSubmit }) => {
	return (
		<div className='tc pv4 pv5-ns w-50 center ma1'>
		    <form className="form-inline" onSubmit={ handleSubmit }>
	            <label className='fw3 f2 v-mid pa3 center ttu' for="city">City</label>
	            <input onChange={ handleChange } type="text" className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-50" name="city" placeholder="e.g.: London"/>
	            <input className="grow br3 bg-transparent hover-bg-purple hover-white pa3 ma2 glow:hover" type="submit" value="Check Weather!"/>
		    </form>
		</div>
	);	
}

export default Search;