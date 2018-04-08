import React, {Component} from 'react';
import PropTypes from 'prop-types';
import options from '../data/data.json'
import './App.css';
import Menu from "./Menu/Menu";

class App extends Component {
    constructor(...props) {
        super(...props);

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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

App.defaultProps = {};

export default App;
