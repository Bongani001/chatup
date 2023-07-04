import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { ChatContext } from '../../context/ChatContext';

const CurrentUserMessage = ({message}) => {

  const {currentUser} = useContext(AuthContext);
  // const {data} = useContext(ChatContext);
  
  const owner = message.senderId === currentUser.uid;
  
  

  return (
    <>
      {owner ? (
        <div className='current-user-message'>{message.text}</div>
      ) : (
        <div className='user-message'>{message.text}</div>
      )}
    </>
  )
  
}

export default CurrentUserMessage;