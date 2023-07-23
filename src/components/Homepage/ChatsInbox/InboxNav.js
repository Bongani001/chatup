import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import { deleteDoc, deleteField, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { AuthContext } from '../../../context/AuthContext';

const InboxNav = () => {
  const {currentUser} = useContext(AuthContext);
  const {data, dispatch} = useContext(ChatContext);

  const handleUserRemoval = () => {
    dispatch({type: "REMOVE_CHAT", payload: "null"});
  }

  const handleDeleteChat = async () => {

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId]: deleteField()
    });

    await deleteDoc(doc(db, "chats", data.chatId));

    dispatch({type: "DELETE_USER", payload: "null"});

  }

  return (
    <div className='navbar inbox-nav bg-secondary-subtle py-3  shadow-lg'>
        <div className='container-fluid'>
          <div className='fs-5 d-flex align-items-center userName ms-3'>
            <i className='bi bi-backspace btn d-sm-none' onClick={handleUserRemoval} />
            <span>{data.user.displayName}</span>
          </div>
          <div className='right-inbox-nav'>
              <img src={data.user?.photoURL} className='user-image' alt='User Avatar'/>
              <div className='dropdown'>
                <button className='btn py-0 px-1 fs-5 m-0 me-3' id='inboxDropdown' data-bs-toggle='dropdown' aria-expanded="false">
                  <i className='bi bi-three-dots-vertical' />
                </button>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='inboxDropdown'>
                  <li className='dropdown-item d-flex  gap-2 disabled'>
                    <i className='bi bi-camera-video' />
                    <p>Video call</p>
                  </li>
                  <li className='dropdown-item btn d-flex gap-2' onClick={handleDeleteChat}>
                    <i className='bi bi-trash' />
                    <p>Delete chat</p>
                  </li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  )
}

export default InboxNav;