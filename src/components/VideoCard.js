import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
	const { video } = props;
	return (
		<div class="video-card">
			<div class="card-body">
				<div class="video-overlay"></div>
				<ReactPlayer
		          width="100%"
		          height="100%"
		          url={video.url}
		          controls
		          playsinline={false}
        		/>
			</div>
			<div class="card-title">
				<Link to={"/video?videoUrl=" + video.url}>{video.title}</Link>
			</div>
		</div>
	);
};

export default VideoCard;