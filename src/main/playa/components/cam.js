import React from 'react'

const Cam = (props) => (
  <div className="cam">
    {
      props.iframe ? 
        (
          <iframe src={props.src} frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""/>
        )
        :
        (
          <img src={props.src} />
        )
    }
  </div>
);

export default Cam;