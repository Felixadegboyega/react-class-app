import React from 'react';
import { Link } from 'react-router-dom';

export default function Error(params) {
	return(

		<>
			<p className="p-5">You landed on wrong side of our application, it appears that you missed your way while trying to find your way inside this dungeon... we emphatizde you as you might not be able to find your way, such a pity☹☹☹...	</p>
			<Link to="/" className="btn btn-block btn-danger">Let's help your life by taking you to where your senses missed😏😏😏</Link>
		</>
	)
};
