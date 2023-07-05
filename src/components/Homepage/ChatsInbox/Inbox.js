import React, { useContext } from 'react';
import InboxNav from './InboxNav';
import InboxBody from './InboxBody';
import InputText from './InputText';
import InboxPreview from './InboxPreview';
import { ChatContext } from '../../../context/ChatContext';

const Inbox = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className='inbox-container'>
      {data.user.displayName ? (
          <>
            <InboxNav />
            <InboxBody />
            <InputText />
          </>) : ( <InboxPreview /> )}
    </div>
  )
}

export default Inbox