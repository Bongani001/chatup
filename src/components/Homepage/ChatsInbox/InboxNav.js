import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext';

const InboxNav = () => {
  const {data} = useContext(ChatContext);  

  return (
    <div className='navbar inbox-nav bg-secondary-subtle py-3 shadow-lg'>
        <div className='container-fluid'>
          <div className='fs-5 userName'>{data.user.displayName}</div>
          <div className='right-inbox-nav'>
              <img src={data.user?.photoURL} className='user-image' alt='User Avatar'/>
              <img src={require('../../../assets/kebab.png')} alt='Options kebab' />
          </div>
        </div>
    </div>
  )
}

export default InboxNav;