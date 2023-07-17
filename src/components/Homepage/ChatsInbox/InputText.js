import React, { useContext, useState } from 'react';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';
import Picker from '@emoji-mart/react';


const InputText = () => {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const onEmojiSelect= (emojiObject) => {
    setText(val => val + emojiObject.native);
  }

  const handleSend = async () => {
    if(text === "") return;

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

  const handleKeydown = (e) => {
    e.code === "Enter" && handleSend();
  }

  return (
    <div className='input-text gap-3 shadow-lg bg-body-secondary'>
        <img className="emojiImg" src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg" 
        alt='emoji'
        onClick={() => setShowPicker(val => !val)}/>
        <div className='emojiPicker'>
          {showPicker && <Picker set="apple" onEmojiSelect={onEmojiSelect}/>}
        </div> 
        <input 
            type='text'
            id='current-user-text'
            value={text} 
            placeholder='Type your message here...'
            onKeyDown={((e) => handleKeydown(e))} 
            onChange={(e) => setText(e.target.value)}
            className='form-control'/>
        <i className="btn btn-outline-primary bi bi-send" onClick={handleSend}></i>
    </div>
  )
}

export default InputText