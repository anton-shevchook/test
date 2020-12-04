import React from 'react';
import VideoCardLayout from '../components/VideoCardLayout';
import SelectionDescription from '../components/SelectionDescription';

const SouthAmericanSelection = (props) => {
	const { videos, description } = props;
	return ( 
		<div class="page-content">
			<VideoCardLayout videos={videos} description={description} />
			<SelectionDescription description={description} />
		</div>
	);
}

export default SouthAmericanSelection;