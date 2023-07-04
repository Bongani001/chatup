import React, { useContext, useEffect, useState } from 'react';
import CurrentUserMessage from './CurrentUserMessage';
import { ChatContext } from '../../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

const CurrentUserMessages = () => {
  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    })

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className='current-user-messages'>
      {messages.map((message) => <CurrentUserMessage message={message} key={message.id}/>)}
    </div>
  )
}

export default CurrentUserMessages