import React, { Component } from 'react';


import fire from './config/Fire.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    
    render() {

        return (
            <div>
            <button style={{textAlign: "inherit"}} type="submit" onClick={this.logout} class="btn btn-primary">Logout</button>
                
            <h1 style={{textAlign: "center"}}>Hello World.</h1>

            <row><button style={{textAlign: "inherit"}} type="submit" onClick={this.customers} class="btn btn-primary">Customers</button></row>

            <row><button style={{textAlign: "inherit"}} type="submit" onClick={this.orders} class="btn btn-primary">Order Entry</button></row>

            <button style={{textAlign: "inherit"}} type="submit" onClick={this.logout} class="btn btn-primary">Logout</button>
            <button style={{textAlign: "inherit"}} type="submit" onClick={this.logout} class="btn btn-primary">Logout</button>

            </div>
        );
    }
    }

    export default Home;