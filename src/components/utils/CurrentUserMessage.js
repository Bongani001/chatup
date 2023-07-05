import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const CurrentUserMessage = ({message}) => {

  const {currentUser} = useContext(AuthContext);
  
  const owner = message.senderId === currentUser.uid;
  
  

  return (
    <>
      {owner ? (
        <p className='current-user-message'>{message.text}</p>
      ) : (
        <p className='user-message'>{message.text}</p>
      )}
    </>
  )
  
}

export default CurrentUserMessage;