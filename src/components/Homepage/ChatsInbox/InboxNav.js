import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext';

const InboxNav = () => {
  const {data} = useContext(ChatContext);  

  return (
    <div className='navbar inbox-nav bg-secondary-subtle py-3 shadow-lg'>
        <div className='container-fluid'>
          <div className='fs-5 userName'>{data.user.displayName}</div>
          <div className='right-inbox-nav'>
              <img src={data.user?.photoURL} className='user-image' alt='User Avatar'/>
              <div className='dropdown'>
                <button className='btn py-0 px-1 fs-5 m-0' id='inboxDropdown' data-bs-toggle='dropdown' aria-expanded="false">
                  <i className='bi bi-three-dots-vertical' />
                </button>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='inboxDropdown'>
                  <li className='dropdown-item d-flex  gap-2 disabled'>
                    <i className='bi bi-camera-video' />
                    <p>Video call</p>
                  </li>
                  <li className='dropdown-item btn d-flex gap-2'>
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