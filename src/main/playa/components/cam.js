import React, { Component } from 'react'
 // ?u=51865
class Cam extends Component {
  state = {
    salt: 0
  }
  constructor(props) {
    super(props);
  }
  update = () => {
    this.setState((prevState, props) => ({
      salt: Math.floor(Math.random() * 1000)
    }));
  }
  componentDidMount() {
    if(this.props.update) {
      setInterval(this.update, 1000);
    }
  }
  render(){
    return (
      <div className="cam">
      {
        this.props.iframe ? 
          (
            <iframe src={this.props.src} frameBorder="0" allowFullScreen />
          )
          :
          (
            <img src={`${this.props.src}${this.props.update && `?u=${this.state.salt}`}`} />
          )
      }
      </div>
    );
  }
  
}

export default Cam;