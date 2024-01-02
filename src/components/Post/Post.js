import React from 'react'
import './post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post() {
  return (

    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src='/images/2.png' alt='' className='postPic' />
                <span className="postUserName">Nuwantha Piumal</span>
                <span className="postTime">5 min ago</span>
            </div>

            <div className="postCenter">
              <div className="postCaption">
                Hello ...!
              </div>
              <img src='/images/2.png' alt='' className='postedImage' />
            </div>

            <div className="postButtom">
              <div className="postBottomLeft">
                <ThumbUpIcon className='likeIcon' />
                <TagFacesIcon className='hahaIcon' />
                <FavoriteIcon className='heartIcon' />
                <span className="likeCount">Nuwantha and 102 others</span>
              </div>
              <div className="postRight">
                <span className="commnetCount">15 comments</span>
              </div>
            </div>
        </div>
    </div>

  )
}
