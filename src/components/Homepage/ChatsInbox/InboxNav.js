import React from 'react'

const InboxNav = () => {
  return (
    <div className='inbox-nav'>
        <div>Tommy</div>
        <div className='left-inbox-nav'>
            <img src={require('../../../assets/no-user-icon.jpg')} className='user-image' alt='User Avatar'/>
            <img src={require('../../../assets/kebab.png')} alt='Options kebab' />
        </div>
        
    </div>
  )
}

export default InboxNav