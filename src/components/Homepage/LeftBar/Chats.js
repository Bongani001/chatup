import React, { useContext, useState } from 'react';
import Chat from './Chat';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';

const Chats = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  const handleSearch = async () => {
      setErr(true);
      setUser(null);
      const q = query(collection(db, "users"), where("lowerCaseDisplayName", "==", username.toLowerCase()));

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          setErr(false);
        });
      } catch(err) {
        setErr(true);
      };

      // if(user == null) {
      //   setErr(true);
      // }
  }


  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    dispatch({type: "CHANGE_USER", payload: user});
    
    try{
    const res = await getDoc(doc(db, "chats", combinedId));
    
    if(!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), { messages: [] });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [combinedId + ".date"] : serverTimestamp()
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        },
        [combinedId + ".date"] : serverTimestamp()
      });
    };

    }catch(err) {
      
    }

    setUser(null);
    setUsername('');
    setErr(false);
  }

  return (
    <main className='chats-section-container'>
        <div className='chat-list-search-container p-2 me-3  ms-3'>
            <div className='search-container bg-secondary-subtle d-flex rounded align-items-center ps-3 p-1 gap-2'>
                <i className='bi bi-search'></i>
                <input 
                  type='text' 
                  id='chat-list-search-input' 
                  placeholder='Search using full names'
                  value={username}
                  onKeyDown={handleKey}
                  onChange={(e) => setUsername(e.target.value)} />
            </div>
            {(err && user == null) && <p className='text-center pt-2 text-muted'>User not found!</p>}
           { user && <div className='user-inbox search' onClick={handleSelect}>
                        <img src={user.photoURL} className='user-avatar' alt="" />
                        <div className='user-preview'>
                          <div className='name-time'>
                              <p>{user.displayName}</p>
                          </div>
                        </div>
                      </div>}
        </div>
        <Chat setUser={setUser} setErr={setErr} />
    </main>
  )
}

export default Chats