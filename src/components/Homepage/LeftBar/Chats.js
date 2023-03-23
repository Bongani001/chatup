import React from 'react'

const Chats = () => {
  return (
    <main className='chats-section-container'>
        <div className='chat-list-search-container'>
            <div className='search-container'>
                <img className='search-icon' src={require('../../../assets/search.png')} alt='Search icon'/>
                <input type='text' id='chat-list-search-input'placeholder='Search or start new chat' />
            </div>
        </div>
    </main>
  )
}

export default Chats