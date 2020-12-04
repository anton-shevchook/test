import React from 'react';
import VideoCard from '../components/VideoCard';
import VideoCardLayout from '../components/VideoCardLayout';
import SelectionDescription from '../components/SelectionDescription';

const RussianSelection = (props) => {
	const { videos, description } = props;
	const videoCards = videos.map((video, index) => {
		return (
			<VideoCard key={index} video={video} />
		);
	});
	return ( 
		<div class="selection-page">
			<VideoCardLayout videos={videos} />
			<SelectionDescription description={description} />
		</div>
	);
}

export default RussianSelection;