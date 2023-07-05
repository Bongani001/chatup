import React from 'react';
import Header from './LeftBar/Header';
import Chats from './LeftBar/Chats';
import Inbox from './ChatsInbox/Inbox';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='left-bar'>
            <Header />
            <Chats />
        </div>
        <div className='chats-inbox'>
            <Inbox />
        </div>
    </div>
  )
};

export default Homepage;