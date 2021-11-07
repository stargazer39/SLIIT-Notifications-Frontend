import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class TopBar extends React.Component {
    render() {
        return(
            <div className="d-flex flex-row justify-content-center align-items-center nav-bar">
                <div className="img-wrapper">
                    <img src={logo} className="img-responsive"></img>
                </div>
                <div className="flex-fill"></div>
                <NavElem path="/about" string="About"/>
                <NavElem path="/app" string="App"/>
            </div>
        );
    }
}

class NavElem extends React.Component {
    props : any;
    
    constructor(props : any) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="link-opt"><Link to={this.props.path}>{this.props.string}</Link></div>
        );
    }
}

export default TopBar;