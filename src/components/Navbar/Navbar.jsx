import React from 'react'
import s from './Navbar.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a>Profile</a></li>
                <li className={s.item}><a>Messages</a></li>
                <li className={s.item}><a>Main content</a></li>
            </ul>
        </nav>
    );
}

export default Nav;