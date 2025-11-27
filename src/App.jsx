import React from "react";
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div>
 <div className="top">
          <img src="data:image/png;base64,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" alt="" />
           
          <button>Save <Bookmark size={35}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div className="details">
             <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div> 
            
             <button>Apply now</button>
              
          </div>
      </div>
    </div>
  );
};

export default App;
