import React, { Component } from 'react';
import ProfileHandler from '../utils/ProfileHandler';

class Profile extends Component {   
    render() {
        return (
            <div className="container bg-fb">
                <p>Dit is het profile van: {ProfileHandler.name}</p>
            </div>
        );
    }
}

export default Profile;