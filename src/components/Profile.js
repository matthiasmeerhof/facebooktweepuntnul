import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {   
    render() {
        return (
            <div className="container bg-fb">
                <p>Dit is het profile van: {this.props.name}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name : state.user.name,
    }
}


export default connect(mapStateToProps)(Profile);