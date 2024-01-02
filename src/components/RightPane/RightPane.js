import React from 'react'
import './rightPane.css'
import CakeIcon from '@mui/icons-material/Cake';

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">

        <div className="addContainer">
          <span className="sponseredTitle">Sponsered</span>
          <img src='/images/3.png' alt='sponseredImg' className='sponseredImg' />
          <span className="adText">Nippon paint (Guys this is the first step of the our facebook clone web application, Lets do the design using React then we can go for implementing the backend with Node and Express with the help of MongoDB. :) )</span>
        </div>

        <hr className='hr'/>

        <div className="birthdayTitle">
          <CakeIcon htmlColor='red' className='cakeIcon' />
          <span className='birthdayText'>Birthdays !</span>
        </div>

        <div className="birthdayContainer">
          <img src='/images/1.jpg' alt='' className='birthdayImg' />
          <span className="birthdayNames">Saman kumara</span>
          <span className="birthdayDate">Today</span>
        </div>
        <div className="birthdayContainer">
          <img src='/images/1.jpg' alt='' className='birthdayImg' />
          <span className="birthdayNames">Saman kumara</span>
          <span className="birthdayDate">Today</span>
        </div>
        <div className="birthdayContainer">
          <img src='/images/1.jpg' alt='' className='birthdayImg' />
          <span className="birthdayNames">Saman kumara</span>
          <span className="birthdayDate">Today</span>
        </div>

        <hr className='hr' />
        <span className='onlineFriends' >Online Friends</span>

        {/* online friends */}
        <div className="friendList">

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src='/images/4.png' alt='' className='onlineFriendImg' />
              <div className="onlineStatus"></div>
            </div>
            <div className="onlineFriendName">Sumedha perera</div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src='/images/4.png' alt='' className='onlineFriendImg' />
              <div className="onlineStatus"></div>
            </div>
            <div className="onlineFriendName">Sumedha perera</div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src='/images/4.png' alt='' className='onlineFriendImg' />
              <div className="onlineStatus"></div>
            </div>
            <div className="onlineFriendName">Sumedha perera</div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src='/images/4.png' alt='' className='onlineFriendImg' />
              <div className="onlineStatus"></div>
            </div>
            <div className="onlineFriendName">Sumedha perera</div>
          </li>
          
        </div>

      </div>
    </div>
  )
}
