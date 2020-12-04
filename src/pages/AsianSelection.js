import React from 'react';
import VideoCardLayout from '../components/VideoCardLayout';
import SelectionDescription from '../components/SelectionDescription';

const AsianSelection = (props) => {
	const { videos, description } = props;
	return ( 
		<div class="selection-page">
			<VideoCardLayout videos={videos} />
			<SelectionDescription description={description} />
		</div>
	);
}

export default AsianSelection;