import React, {useState} from 'react';
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat(props) {
  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
    message: input,
    name: "Demo",
    timestamp: "Just now",
    received: true
  });

  setInput('');
  }


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
        {
          props.message.map((message) => {
            return <p className={`chat_message ${message.received && 'chat_receive'}`}>
              <span className='chat_name'>{message.name}</span>
              {message.message}
              <span className='chat_timestamp'>
                {new Date().toUTCString()}
              </span>
            </p>
          })
        }



      </div>

      <div className='chat_footer'>
        <MoodIcon />
        <form >
          <input value={input}  onChange={e => setInput(e.target.value)} type='text' placeholder='Type a message' />
          <button onClick={sendMessage} type='submit' >Send a message</button>
        </form>
        <MicIcon />
      </div>

    </div>

  )
};

export default Chat;
