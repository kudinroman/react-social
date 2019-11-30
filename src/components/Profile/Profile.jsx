import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <main className={s.content}>
            <div><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></div>
            <div>
                <img className={s.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw253VIyZUV8-bEanPBcAoWlGj-6ts7y3bUHSq9qWSzMumVW9R" />
                <span>ava + name</span>
            </div>
            <MyPosts />
        </main>
    );
}

export default Profile;