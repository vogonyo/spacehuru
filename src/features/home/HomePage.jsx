import React from 'react';

const HomePage = ({history}) => {
    return(
        <div>
           <div>
                 <div className="ui inverted vertical masthead center aligned segment">
                   <div className="ui text container">
                     <h1 className="ui inverted stackable header">
                       <img
                         className="ui image massive"
                         src="/assets/spacehurulogo.png"
                         alt="logo"
                       />
                       <div className="content">Spacehuru</div>
                     </h1>
                     <h2>Browse through millions of different spaces</h2>
                     <div onClick={() => history.push('/spaces')} className="ui huge white inverted button">
                          Get Started
                       <i className="right arrow icon" />
                     </div>
                   </div>
                 </div>
               </div>
        </div>
    )
}

export default HomePage;