import React, { useContext, useState } from 'react';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';


const InputText = () => {
  const [text, setText] = useState('')

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now()
      })
    });

    // Update the documents of the current user that is logged in
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })

    // Update the documents of the other user that the message is being sent to
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })

    setText('');
  }

  return (
    <div className='input-text'>
        <input 
        type='text'
        id='current-user-text'
        value={text} 
        placeholder='Type your message here...' 
        onChange={(e) => setText(e.target.value)}/>
        <button className="btn send-message" onClick={handleSend}>Send</button>
    </div>
  )
}

export default InputText