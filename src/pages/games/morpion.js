import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../index.css';

let socket;
const CONNECTION_PORT = 'localhost:3000/';

function Morpion() {
  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  const connectToRoom = () => {
    socket.emit('join_room', 12);
  };

  return (
    <div className="App">
      <body>
        <Header info="dash" gender="female" />
        <div className="page-wrapper">
          <div className="page-inner">
            <button type="button" onClick={connectToRoom}>
              Enter Chat
            </button>
            lol
          </div>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default Morpion;
