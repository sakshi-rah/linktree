import React from 'react'
import './Profile.css';
import Sakshi from './img-sakshi.jpg';
function Profile() {
  return (
    <div className='main-contain'>
        <img src={Sakshi} className="img-name" alt="mypic"></img>

        <h2>Sakshi_Rahangdale</h2>
        <p className='para'>Student Of Road To Code🤗</p>
      </div>
  )
}

export default Profile;