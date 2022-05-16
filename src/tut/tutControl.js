import React from 'react'

export default ({Increase, Decrease}) => {
	return(
		<>
			<button onClick={Increase}>Increase</button>
			<button onClick={Decrease}>Decrease</button>
		</>
	)
}
