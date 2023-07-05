import React from 'react'

const InboxPreview = () => {
  return (
    <div className='inbox-preview'>
        <div className='inbox-preview-box'>
            {/* <p className='inbox-app-name'>WhatsUp</p> */}
            <img className='whatsup-logo' src={require('../../../assets/whatsup-icon.png')} alt='WhatsUP logo' />
            <p>Send and Receive messages right here 😊</p> 
        </div>
    </div>
  )
};

export default InboxPreview;