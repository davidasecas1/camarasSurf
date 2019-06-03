import React, { PureComponent } from 'react';
import Cam from './cam';

class Playa extends PureComponent {

  render() {
    return (
      <div>
        {
          this.props.cams.map((item, key) => (
            <Cam {...item}/>
          ))
        }
      </div>
    )
  }
}

export default Playa;
