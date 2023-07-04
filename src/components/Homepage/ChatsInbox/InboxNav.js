import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext';

const InboxNav = () => {
  const {data} = useContext(ChatContext);  

  return (
    <div className='inbox-nav'>
        <h3 className='userName'>{data.user.displayName}</h3>
        <div className='right-inbox-nav'>
            <img src={data.user?.photoURL} className='user-image' alt='User Avatar'/>
            <img src={require('../../../assets/kebab.png')} alt='Options kebab' />
        </div>
        
    </div>
  )
}

export default InboxNav;