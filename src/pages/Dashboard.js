import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import female from '../images/m1.jpg';
import '../index.css';

let socket;
const CONNECTION_PORT = 'localhost:3000/';

function Dashboard() {
  // Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);

  // After Login
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList([...messageList, data]);
    });
    socket.on('receive_user', (data) => {
      setUserList([...userList, data]);
    });
  });
  const connectToRoom = async () => {
    const connection = {
      room,
      content: {
        user: userName,
        room,
      },
    };

    setLoggedIn(true);
    await socket.emit('join_room', connection);
    setUserList([...userList, connection.content]);
  };

  const sendMessage = async () => {
    const messageContent = {
      room,
      content: {
        author: userName,
        message,
      },
    };

    await socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage('');
  };

  return (
    <div className="App">
      <body>
        <Header info="dash" gender="female" />
        <div className="page-wrapper">
          <div className="page-inner">
            {!loggedIn ? (
              <div className="logIn">
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Name..."
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Room..."
                    onChange={(e) => {
                      setRoom(e.target.value);
                    }}
                  />
                </div>
                <button type="button" onClick={connectToRoom}>Enter Chat</button>
              </div>
            ) : (
              <div className="roomWrapper">
                <div className="chatContainer">
                  <div className="messages">
                    {messageList.map((val) => (
                      <div
                        className="messageContainer"
                        id={val.author === userName ? 'You' : 'Other'}
                      >
                        <div className="author">
                          <img src={female} alt="avatar" className="user-avatar" />
                          {val.author}
                        </div>
                        <div className="messageIndividual">
                          {val.message}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="messageInputs">
                    <input
                      type="text"
                      placeholder="Message..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    <button type="button" onClick={sendMessage}>Send</button>
                  </div>
                </div>
                <div className="connectedUsers">
                  {userList.map((val) => (
                    <div className="user">
                      {val.user}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default Dashboard;
