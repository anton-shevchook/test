import React from 'react';
import VideoCardLayout from '../components/VideoCardLayout';

const AsianSelection = (props) => {
	const { videos } = props;
	return ( 
		<div>
			<VideoCardLayout videos={videos} />
		</div>
	);
}

export default AsianSelection;