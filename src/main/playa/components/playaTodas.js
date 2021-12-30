import React, { PureComponent } from 'react';
import Cam from './cam';

import './playa.css';

class PlayaTodas extends PureComponent {
    render() {
        return (
            <div className='cams'>
                {this.props.playas.map(item => item.cams.map(item => <Cam {...item} key={item.id} />))}
            </div>
        );
    }
}

export default PlayaTodas;
