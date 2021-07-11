import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [mymessages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
    .then(res => {
      setMessages(res.data);
    })

    // console.log(messages);
  })

  useEffect(() => {
    var pusher = new Pusher(someNumber, {
      cluster: x
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...mymessages, newMessage])
    });

    return () => {
      channel.unsubscribe();
    };


  }, [mymessages]);

  // console.log(mymessages);

  return <div className="app">
      <div className='appBody'>

      <Sidebar />
      <Chat message={mymessages} />


      </div>
    </div>

}

export default App;
