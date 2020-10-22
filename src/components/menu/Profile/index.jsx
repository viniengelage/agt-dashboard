import React from 'react';
import logo from '../../../assets/avatar.png';

const Profile = (props) => {
    return(
        <>
            <img src={logo}/>
            <p>Vinicios Engelage</p>
            <a>Sair</a>
        </>
    )
}

export default Profile;