import React from 'react';

const Homepage = ({ user }) => {

    //console.log(user)

    // will great guests and users differently
    return (
        <div>


            <h1>{user.firstname ? `Welcome back ${user.firstname} ${user.lastname}` : 'Welcome valued guest to the Libray Homepage. You can log in on the top right of the page'}</h1>


        </div>
    )
}

export default Homepage