import React,{Component} from 'react';
import Tabs from 'react-simpletabs';

// YouTubeApp
import YouTubeApp from './youtube/youtubeapp';

//WeatherApp
import WeatherApp from './weather/components/weatherapp';

//Form App
import PostsIndex from './form/components/posts_index';
import PostsNew from './form/components/posts_new';
import PostsShow from './form/components/posts_show';


class SimpleTabs extends Component{

  onBeforeChangeinTab(selectedIndex,selectedPanel){
    console.log('onBeforeChangeinTab');
    console.log('selectedIndex ' + selectedIndex);
  //  console.log('selectedPanel ' + selectedPanel);
  }
  onAfterChangeinTab(selectedIndex){
    console.log('onAfterChangeinTab');
    console.log('selectedIndex ' + selectedIndex);
  }

  modifyActiveTAB(){
    console.log("called modifyActiveTAB in SimpleTabs");
  }

  render(){
    // <Tabs.Panel title='Tab #5: Form Show'>
    //   <h2><PostsShow/></h2>
    // </Tabs.Panel>
    
    return(
      <Tabs tabActive={1} onBeforeChange={this.onBeforeChangeinTab} onAfterChange={this.onAfterChangeinTab}>
        <Tabs.Panel title='Tab #1: YouTubeApp'>
          <h2><YouTubeApp/></h2>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #2: WeatherApp'>
          <h2><WeatherApp/></h2>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #3: Form List'>
          <h2><PostsIndex/></h2>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #4: New Form'>
          <h2><PostsNew custommethod={this.modifyActiveTAB}></PostsNew></h2>
        </Tabs.Panel>

      </Tabs>
    );
  }
}

export default SimpleTabs;
