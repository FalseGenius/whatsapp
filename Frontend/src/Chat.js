import React, {useState} from 'react';
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  const [input, setInput] = useState('');

  return (
    <div className='chat'>
      <div className='chat_header'>
      <Avatar />

      <div className='chat_headerInfo'>
        <h3>Room name</h3>
        <p>Last seen at.......</p>
      </div>

      <div className='chat_headerRight'>
        <IconButton>
          <SearchOutlined />
        </IconButton>

        <IconButton>
          <AttachFileIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>



      </div>

      <div className='chat_body'>

        <p className='chat_message'>
          <span className='chat_name'>Something</span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat_message chat_receive'>
          <span className='chat_name'>Something</span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat_message'>
          <span className='chat_name'>Something</span>
          This is a message
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

      </div>

      <div className='chat_footer'>
        <MoodIcon />
        <form >
          <input type='text' placeholder='Type a message' />
          <button type='submit' onChange={e => setInput(e.target.value)}>Send a message</button>
        </form>
        <MicIcon />
      </div>

    </div>

  )
};

export default Chat;
