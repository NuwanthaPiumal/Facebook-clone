import React from 'react'
import './leftPane.css'
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedIcon from '@mui/icons-material/Feed';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import EventIcon from '@mui/icons-material/Event';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MessageIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Messages</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupsIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Groups</span>
          </li>
          <li className="leftPaneMenuItem">
            <FeedIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <AssistantPhotoIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <EventIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <SettingsSuggestIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <StorefrontIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Market</span>
          </li>

          <hr />

          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>

          <div className="pageList">
            <li className='pageListItem'>
              <img src='/images/1.jpg' alt='' className='pagePic' />
              <span className='pageName'>Page A</span>
            </li>
            <li className='pageListItem'>
              <img src='/images/1.jpg' alt='' className='pagePic' />
              <span className='pageName'>Page B</span>
            </li>
            <li className='pageListItem'>
              <img src='/images/1.jpg' alt='' className='pagePic' />
              <span className='pageName'>Page C</span>
            </li>
            <li className='pageListItem'>
              <img src='/images/1.jpg' alt='' className='pagePic' />
              <span className='pageName'>Page D</span>
            </li>
          </div>


        </div>
      </div>
    </div>
  )
}
