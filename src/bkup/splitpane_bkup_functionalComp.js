import React from 'react';
import SplitPane from 'react-split-pane'; //https://github.com/tomkp/react-split-pane
import HomeIcon from  'react-icons/lib/fa/home';
import DVRIcon from 'react-icons/lib/md/dvr';
import HelpOutlineIcon from 'react-icons/lib/md/help-outline';
function SplitPanel(){
  return(
  //   <SplitPane split="vertical" minSize={50} defaultSize={100} >
  //      <div></div>
  //      <div></div>
  //  </SplitPane>

  <SplitPane split="vertical" minSize={50}>
        <div>
          <div><h2><HomeIcon/></h2>  </div>
          <div><h2><DVRIcon/></h2>  </div>
          <div><h2><HelpOutlineIcon/></h2>  </div>
        </div>
        <SplitPane split="horizontal">
            <div></div>
            <div></div>
        </SplitPane>
    </SplitPane>
  );
}

export default SplitPanel;
