import React from 'react';
import CurrentUserMessages from '../../utils/CurrentUserMessages';

const InboxBody = () => {
  return (
    <div className='inbox-body overflow-auto'>
        <CurrentUserMessages />
    </div>
  )
}

export default InboxBody;