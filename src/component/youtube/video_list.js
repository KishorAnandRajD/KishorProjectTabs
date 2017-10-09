import React from 'react';
import VideoListItem from './video_list_item';

// Bootstrap stying used in 'className="col-md-4 list-group"'
//etag is a unique identifier for a video in the list. Check the console/newwork tab
const VideoList=(props)=>{
  const videoItems=props.videos.map((video)=>{
    return(
       <VideoListItem onVideoSelect={props.onVideoSelect}
       key={video.etag} video={video}/>
     );
  });
  return(
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  );
};

export default VideoList;
