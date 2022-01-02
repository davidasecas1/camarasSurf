import React, { Component } from "react";

import "./App.css";

import data from "./playas.json";

import Playa from "./playa/components/playa";
import Header from "./header/components/header";
import PlayaTodas from "./playa/components/playaTodas";

class App extends Component {
    state = {
        idPlaya: 0,
    };

    changePlaya = (id) => {
        this.setState({
            idPlaya: id,
        });
    };

    render() {
        return (
            <div className="container">
                <Header playas={data.playas} idActive={this.state.idPlaya} changePlaya={this.changePlaya} />
                <div className="playa">
                    {this.state.idPlaya === 0 && <PlayaTodas playas={data.playas} />}
                    {data.playas.map((item) => this.state.idPlaya === item.id && <Playa {...item} key={item.id} />)}
                </div>
            </div>
        );
    }
}

export default App;
