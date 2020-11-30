import React from 'react';
import VideoCard from '../components/VideoCard';
import VideoCardLayout from '../components/VideoCardLayout';

const RussianSelection = (props) => {
	const { videos } = props;
	const videoCards = videos.map((video, index) => {
		return (
			<VideoCard key={index} video={video} />
		);
	});
	return ( 
		<div>
			<VideoCardLayout videos={videos} />
		</div>
	);
}

export default RussianSelection;