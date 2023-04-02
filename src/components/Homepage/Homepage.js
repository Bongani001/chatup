import React from 'react';
import Header from './LeftBar/Header';
import Chats from './LeftBar/Chats';
import InboxPreview from './ChatsInbox/InboxPreview';
// import Inbox from './ChatsInbox/Inbox';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='left-bar'>
            <Header />
            <Chats />
        </div>
        <div className='chats-inbox'>
            <InboxPreview />
        </div>
    </div>
  )
}

export default Homepage