import React, {Component} from 'react';
import {AppBar, Drawer, MenuItem, FlatButton} from 'material-ui';
import Nav from '../Nav';
import {Link} from 'react-router-dom';
import Login from './Login';


class Material extends Component{
    constructor(){
        super();

        this.state = {
            drawer: false
        }
    }

    toggleDrawer = () => {
        this.setState({
            drawer: !this.state.drawer
        })
    }

    render(){
        return(
            <div>
                <AppBar title='LETS-EAT!' iconClassNameRight='muidocs-icon-navigation-expand-more' onLeftIconButtonClick={this.toggleDrawer}>
                <Nav />
                </AppBar>
                <Drawer 
                open={this.state.drawer}
                docked={false} >
                <Link to='/account'><MenuItem>Account</MenuItem></Link>
                <MenuItem><Login /></MenuItem>
                <MenuItem>
                <a href='http://localhost:4000/auth/logout'>
                <p>Logout</p>
                </a>
                </MenuItem>
                <FlatButton label='Close' onClick={ this.toggleDrawer } />
                </Drawer>
            </div>
        )
    }
}

export default Material