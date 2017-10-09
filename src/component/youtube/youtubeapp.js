import React,{Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'; // Install npm Install --save lodash

// Import search_bar.js. This is different from 'import React..' as it comes from node_modules and this comes from Export
import SearchBar from './search_bar';  // NO need to include file extension '.js'
import VideoList from './video_list';
import VideoDetail from './video_detail';

// Google Youtube API Key. Generate it from below
//https://console.developers.google.com/apis/credentials?project=my-project-1498149472117
//AIzaSyDDbcJXlxjFRrbDHEGteepU5XD_m_rHsz0
const API_KEY='AIzaSyDDbcJXlxjFRrbDHEGteepU5XD_m_rHsz0';

class YouTubeApp extends Component{

  constructor(props){
    super(props);
    this.state={
      videos:[], // Initialize with array for state 'videos'
      selectedVideo:null
    };

    // default Youtube search on 'surfboard'. Log data into console
    /*YTSearch({key: API_KEY,term:'surfboards'},function(data){
      this.setState({videos:data});  // Set the state 'video' with YTSearch data
    });*/
    this.videoSearch('surfboards');
  }

videoSearch(term){
  YTSearch({key: API_KEY,term:term},(videos)=>{
    //this.setState({videos:videos});  // Set the state 'video' with YTSearch 'videos'
    // or  (when the key name and state name are same, we can use the followng)
    this.setState({
      videos:videos,
      selectedVideo:videos[0]
    });
  });
}


  render(){
    // Install npm Install --save lodash
    // Creates and returns a new debounced version of the passed function that will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.A debounce function provides a way to "throttle" a function's execution. They are typically used in circumstances where a function is bound to an event that fires in rapid succession.
    //This is to avoid the flickering because of the delay in search.Debouce returns the function only once in 300 milliseconds.
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);

    // This part is modified <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>

    return (
            <div>
              <SearchBar onSearchTermChange={videoSearch}/>
              <br/>          
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
          );
    }
}

export default YouTubeApp;
