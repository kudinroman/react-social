import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" />
            <p>
                {props.message}
            </p>
            <p>Like {props.likeCount}</p>
        </div>
    );
}

export default Post;