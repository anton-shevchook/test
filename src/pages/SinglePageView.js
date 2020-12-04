import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { useLocation } from 'react-router-dom';


const SinglePageView = (props) => {
	let search = useLocation().search;
	let query = new URLSearchParams(search);
	let videoUrl = query.get('videoUrl');
	console.log('Search', search);
	console.log(query.get('videoUrl'));

	const { videos } = props;
	return ( 
		<div class="single-page-view">
			<div class="item-player">
				<ReactPlayer
		          width="100%"
		          height="100%"
		          url={videoUrl}
		          controls
	        	/>
			</div>
			<div class="item-description">
				<div class="title">
					<h1>This is a title</h1>
				</div>
				<div class="text">
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
			</div>
		</div>
	);
}

export default SinglePageView;