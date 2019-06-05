import React, { PureComponent } from 'react';
import Cam from './cam';

import './playa.css';

class Playa extends PureComponent {
 
  render() {
    return (
      <div className="cams">
        {
          this.props.cams.map((item, key) => (
            <Cam {...item} key={item.id}/>
          ))
        }
      </div>
    )
  }
}

export default Playa;
