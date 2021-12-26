import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {
    render() {
        return (
            <div className='post-card'>
                <img src='assets/img/images/trailer_image.jpg' alt='post'/>
                <div className='post-contents'>
                    <h4>
                        <a href='/#'>This is a title</a>
                    </h4>
                    <div className='post-date'>
                        <i className="far fa-clock"></i>
                        <span>29, October 2021</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
