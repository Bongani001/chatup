import React from 'react';
import Header from './LeftBar/Header';
import Chats from './LeftBar/Chats';
import Preview from './ChatsInbox/Preview';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='left-bar'>
            <Header />
            <Chats />
        </div>
        <div className='chats-inbox'>
            <Preview />
        </div>
    </div>
  )
}

export default Homepage