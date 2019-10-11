import React from 'react';

const Display = ({ balls, strikes }) => {
	return (
		<div>
			<h1>Balls: {balls}</h1>
			<h1>Strikes: {strikes}</h1>
		</div>
	)
}

export default Display;