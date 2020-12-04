import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = (props) => {

	return ( 
		<div class="home-page">
				<img class="banner-image"
					width="100%"
					height="400px" 	
					src="https://u-channel.ca/wp-content/uploads/2020/08/cropped-WFP-front-page-banner_PNG.png" />
				<ul class="section-links">
					<li>
                      <Link to="/south-american">South American</Link>
                    </li>
					<li>
                      <Link to="/russian">Russian</Link>
                    </li>
                    <li>
                      <Link to="/asian">Asian</Link>
                    </li>
				</ul>
			
			
		</div>
	);
}

export default HomePage;