import React, {Component} from 'react';
import PropTypes from 'prop-types';
import options from '../data/data.json'
import './App.css';
import Menu from "./Menu/Menu";

// Statefull component
class App extends Component {
    constructor(...props) {
        super(...props);

        // Set state from json
        this.state = {
            options: options
        }
    }

    render() {
        return (
            <div>
                <Menu options={this.state.options}/>
            </div>
        );
    }
}

App.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default App;
