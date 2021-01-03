import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import female from '../images/m1.jpg';
import '../index.css';

let socket;
const CONNECTION_PORT = 'localhost:3000/';

function Dashboard() {
  const { t } = useTranslation();
  // Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);
  const [rooms, setRoomsList] = useState([]);

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
    socket.on('rooms', (data) => {
      setRoomsList(data);
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

    setRoom(room);
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
              <div className="roomSelector">
                <div className="logIn">
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder={t('name')}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder={t('room')}
                      value={room}
                      onChange={(e) => {
                        setRoom(e.target.value);
                      }}
                    />
                  </div>
                  <select
                    className="rooms"
                    onChange={(e) => {
                      setRoom(e.target.value);
                    }}
                  >
                    <option selected>{t('existing')}</option>
                    {rooms.map((element) => (
                      <option
                        value={element.room}
                      >
                        {element.room}
                      </option>
                    ))}
                  </select>

                  <button type="button" onClick={connectToRoom}>{t('chat')}</button>
                </div>
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
                    <button type="button" onClick={sendMessage}>{t('msg')}</button>
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
