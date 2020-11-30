import React from 'react';
import VideoCardLayout from '../components/VideoCardLayout';

const SouthAmericanSelection = (props) => {
	const { videos } = props;
	return ( 
		<div>
			<VideoCardLayout videos={videos} />
		</div>
	);
}

export default SouthAmericanSelection;