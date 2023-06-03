import React from 'react';

const Chat = () => {
  return (
    <div className='user-inbox'>
        <img className='user-avatar' src={require('../../../assets/no-user-icon.jpg')} alt='User icon'/>
        <div className='user-preview'>
            <div className='name-time'>
                <div>Name</div>
                <div>20:00</div>
            </div>
            <p>How are you?</p>
        </div>
    </div>
    
  )
}

export default Chat