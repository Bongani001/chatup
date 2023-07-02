import React from 'react';
import InboxNav from './InboxNav';
import InboxBody from './InboxBody';
import InputText from './InputText';

const Inbox = () => {
  return (
    <div className='inbox-container'>
      <InboxNav />
      <InboxBody />
      <InputText />
    </div>
  )
}

export default Inbox