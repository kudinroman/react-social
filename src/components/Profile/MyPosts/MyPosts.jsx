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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    );
}

export default MyPosts;