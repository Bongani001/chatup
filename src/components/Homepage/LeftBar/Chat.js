import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { ChatContext } from '../../../context/ChatContext';

const Chat = () => {

  const [chats, setChats] = useState([]);

  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    const getChats= () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({type: "CHANGE_USER", payload: u})
  }

  return (
    <>
    {chats && Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => {
      return (
        <div className='user-inbox' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <img className='user-avatar' src={chat[1].userInfo.photoURL} alt='User icon'/>
            <div className='user-preview'>
                <div className='name-time'>
                    <div>{chat[1].userInfo.displayName}</div>
                </div>
                <p className='last-message'>{chat[1].lastMessage?.text}</p>
            </div>
        </div>
        )
    }
    )}
    </>
  )
}

export default Chat