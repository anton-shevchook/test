import React from 'react';
import VideoCard from './VideoCard';

const VideoCardLayout = (props) => {
	const { videos } = props;

	console.log(videos);
	const videoCards = videos.map((video, index) => {
		return (
			<VideoCard key={index} video={video} />
		);
	});

	return (
		<>
			{videoCards}
		</>
	);
};

export default VideoCardLayout;