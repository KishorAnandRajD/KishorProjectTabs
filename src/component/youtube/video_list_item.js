import React from 'react';

//const VideoListItem=(props)=>{
  //const video=props.video;
const VideoListItem=({video,onVideoSelect})=>{
  //console.log(video);
  /*  Console log snippet will contain the below details
      Object
    channelId :  "UCSpVHeDGr9UbREhRca0qwsA"
    channelTitle  :   "Howcast"
    description   :   "Watch more How to Choose a Surfboard videos: http://www.howcast.com/videos/507771-5-Types-of-Surfboards-Surfboard-Basics Here's the types of boards ..."
    liveBroadcastContent   :    "none"
    publishedAt   :    "2012-04-18T15:00:08.000Z"
  */
  const imageUrl=video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>


      </div>
    </li>
  );
};

export default VideoListItem;
