import React from 'react';
import ReactPlayer from 'react-player/lazy'

const VideoCard = (props) => {
	const { video } = props;
	return (
		<div class="video-card">
			<div class="card-body">
				<ReactPlayer
		          width="100%"
		          height="100%"
		          url={video.url}
		          controls
        		/>
			</div>
			<div class="card-title">{video.title}</div>
		</div>
	);
};

export default VideoCard;