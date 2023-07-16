import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';

const CurrentUserMessage = ({message}) => {

  const {currentUser} = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"});
  }, [message]);
  
  const owner = message.senderId === currentUser.uid;
  
  

  return (
    <>
      {owner ? (
        <p ref={ref} className='current-user-message bg-secondary-subtle'>{message.text}</p>
      ) : (
        <p ref={ref} className='user-message bg-secondary'>{message.text}</p>
      )}
    </>
  )
  
}

export default CurrentUserMessage;