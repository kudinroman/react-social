import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" />
            <p>
            <span>post</span>
                </p>
                <p>Like</p>
        </div>
    );
}

export default Post;