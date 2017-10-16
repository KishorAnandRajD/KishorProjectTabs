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


class BootStrapTabs extends Component{

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
      // <Tabs tabActive={1} onBeforeChange={this.onBeforeChangeinTab} onAfterChange={this.onAfterChangeinTab}>
      //   <Tabs.Panel title='Tab #1: YouTubeApp'>
      //     <h2><YouTubeApp/></h2>
      //   </Tabs.Panel>
      //   <Tabs.Panel title='Tab #2: WeatherApp'>
      //     <h2><WeatherApp/></h2>
      //   </Tabs.Panel>
      //   <Tabs.Panel title='Tab #3: Form List'>
      //     <h2><PostsIndex/></h2>
      //   </Tabs.Panel>
      //   <Tabs.Panel title='Tab #4: New Form'>
      //     <h2><PostsNew custommethod={this.modifyActiveTAB}></PostsNew></h2>
      //   </Tabs.Panel>
      // </Tabs>


      <div className="container">
          <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#home">Tab #1: YouTubeApp</a></li>
            <li><a data-toggle="tab" href="#menu1">Tab #2: WeatherApp</a></li>
            <li><a data-toggle="tab" href="#menu2">Tab #3: Form List</a></li>
            <li><a data-toggle="tab" href="#menu3">Tab #4: New Form</a></li>
          </ul>

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <YouTubeApp/>
            </div>
            <div id="menu1" className="tab-pane fade">
              <WeatherApp/>
            </div>
            <div id="menu2" className="tab-pane fade">
              <PostsIndex/>
            </div>
            <div id="menu3" className="tab-pane fade">
              <PostsNew custommethod={this.modifyActiveTAB}/>
            </div>
          </div>
      </div>

    );
  }
}

export default BootStrapTabs;
