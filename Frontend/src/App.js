import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
    .then(res => {
      setMessages(res.data);
    })
  })

  useEffect(() => {
    var pusher = new Pusher(asdasdas, {
      cluster: 'ap1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
  }, [messages]);


  return <div className="app">
      <div className='appBody'>

      <Sidebar />
      <Chat />
      </div>
    </div>

}

export default App;
