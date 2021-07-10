import React from 'react';
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <Avatar src='https://i.pinimg.com/236x/b7/95/31/b795316c0be3ea7871d4bc2b05ceac42--horror-art-horror-films.jpg'/>
          <div className='sidebar_headerRight'>
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
      </div>

      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>

  )
};

export default Sidebar;
