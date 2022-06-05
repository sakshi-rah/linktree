import React from 'react'
import './LinkCard.css';

import ImgGithub from './../Img/img-github.png'
import ImgFacebook from './../Img/img-facebook.png'
import ImgInstagram from './../Img/img-instagram.png'
import ImgLinkedin from './../Img/img-linkedin.png'

const  ImgMap = {
    "github":  ImgGithub,
    "facebook": ImgFacebook,
    "instagram": ImgInstagram,
    "linkedin": ImgLinkedin
}
function LinkCard(props) {
  return (
    <div className={`link-card bg-${props.tittle}`}>
       <a href={props.link} className='hyper-link'>
        <div className='container-link-handle'>
            <div>
            <img src={ImgMap[props.tittle]} className ='card-img'/>
            </div>
            <div className='handle-name'>
            <h4 className='username'>{props.username} </h4>
            </div>
        </div>

       </a>
    </div>
  )
}

export default LinkCard;