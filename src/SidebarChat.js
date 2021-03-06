import React from 'react';
import './SidebarChat.css';
import {Avatar, IconButton} from '@material-ui/core';


function SidebarChat () {
  return <div className='sidebarChat'>
      <Avatar src='https://www.ancient-origins.net/sites/default/files/field/image/eye-of-horus.jpg'/>
      <div className='sidebarChat_info'>
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
  </div>
};

export default SidebarChat;
