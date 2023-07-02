import React from 'react';
import UserMessages from '../../utils/UserMessages';
import CurrentUserMessages from '../../utils/CurrentUserMessages';

const InboxBody = () => {
  return (
    <div className='inbox-body'>
        <UserMessages />
        <CurrentUserMessages />
        <UserMessages />
        <CurrentUserMessages />
    </div>
  )
}

export default InboxBody