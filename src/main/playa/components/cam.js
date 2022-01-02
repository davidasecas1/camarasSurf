import React, { Component } from "react";
// ?u=51865
class Cam extends Component {
    state = {
        salt: 0,
    };
    update = () => {
        this.setState((prevState, props) => ({
            salt: Math.floor(Math.random() * 1000),
        }));
    };
    componentDidMount() {
        if (this.props.update) {
            setInterval(this.update, 2000);
        }
    }
    render() {
        return (
            <div className="cam">
                {this.props.iframe && <iframe title="iframe" src={this.props.src} frameBorder="0" allowFullScreen />}
                {this.props.video && <video title="webcam" src={this.props.src} />}
                {!this.props.video && !this.props.iframe && (
                    <img src={`${this.props.src}${this.props.update && `?u=${this.state.salt}`}`} alt="webcam" />
                )}
            </div>
        );
    }
}

export default Cam;
