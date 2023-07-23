import React, { useContext } from 'react';
import Header from './LeftBar/Header';
import Chats from './LeftBar/Chats';
import Inbox from './ChatsInbox/Inbox';
import './homepage.css';
import { ChatContext } from '../../context/ChatContext';

const Homepage = () => {

  const {data} = useContext(ChatContext);

  const leftStyleExist = "col-4 left-bar p-0 d-none d-sm-block";
  const inboxStyleExist = "col-sm-8 chats-inbox p-0";

  const leftStyleNotExist = "col-sm-4 left-bar p-0";
  const inboxStyleNotExist = "col-sm-8 chats-inbox p-0 d-none d-sm-block";

  return (
    <div className='homepage vh-100 vw-100 container-fluid overflow-hidden p-0'>
      <div className='row'>
        <div className={(data.user !== "null") ? leftStyleExist : leftStyleNotExist}>
            <Header />
            <Chats />
        </div>
        <div className={(data.user !== "null") ? inboxStyleExist : inboxStyleNotExist}>
            <Inbox />
        </div>
      </div>
    </div>
  )
};

export default Homepage;