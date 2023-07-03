import React from 'react'

const InputText = () => {
  return (
    <div className='input-text'>
        <input type='text' id='current-user-text' placeholder='Type your message here...' />
        <button className="btn send-message">Send</button>
    </div>
  )
}

export default InputText