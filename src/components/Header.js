import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { video } = props;
	return (
		<header class="header">
			<div class="logo">
				<Link to="/">UMulticultural</Link>
			</div>
		</header>
	);
};

export default Header;