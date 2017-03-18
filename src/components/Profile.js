import React, { Component } from 'react';

class Profile extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container bg-fb">
                <p>Hier komt een profiel</p>
            </div>
        );
    }
}

export default Profile;