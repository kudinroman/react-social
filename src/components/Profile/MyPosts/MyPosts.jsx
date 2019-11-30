import React from 'react'
import s from './MyPosts.module.css'
import Post from '../MyPost/MyPost'

const MyPosts = () => {
    return (
        <div>
            <p>My posts</p>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="It's my post 1" likeCount='15' />
                <Post message="It's my post 2" likeCount='20' />
                <Post message="It's my post 3" likeCount='25' />
                <Post message="It's my post 4" likeCount='15' />
                <Post message="It's my post 5" likeCount='20' />
                <Post message="It's my post 6" likeCount='25' />
            </div>
        </div>

    );
}

export default MyPosts;