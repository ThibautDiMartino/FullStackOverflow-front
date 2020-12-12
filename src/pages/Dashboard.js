import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faUniversity } from '@fortawesome/free-solid-svg-icons';
import {
  Chart, PieSeries, Title, Legend,
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import { Animation } from '@devexpress/dx-react-chart';
import { Link } from 'react-router-dom';
// import {
//   schemePaired,
// } from 'd3-scale-chromatic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import female from '../images/m1.jpg';
import male from '../images/m2.jpg';
import morpion from '../images/game.jpg';
import stick from '../images/stick.png';

const data = [
  { Status: 'draw', area: 10 },
  { Status: 'lose', area: 24 },
  { Status: 'win', area: 76 },
];

// const scheme = [
//   schemePaired,
// ];

function Dashboard() {
  const images = [morpion, stick];
  const links = ['/morpion', '/stick'];
  // const colors = [];
  // scheme.map((color) => (
  //   colors.push(color)
  // ));
  // const col = colors[0];
  // const chartData = useState({ data });
  const [currentSlide, setCurrentSlide] = useState(0);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  }

  function next() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 39) {
      next();
    } else if (event.keyCode === 37) {
      previous();
    }
  }

  return (
    <div className="App">
      <body>
        <Header info="dash" gender="female" />
        <div className="page-wrapper">
          <div className="page-inner">
            <section id="global-score">
              <div className="coins">
                <FontAwesomeIcon icon={faCoins} style={{ color: 'orange', marginRight: 10, fontSize: 30 }} />
                <span>9000</span>
              </div>
              <div className="ranking">
                <FontAwesomeIcon icon={faUniversity} style={{ color: 'grey', marginRight: 10, fontSize: 30 }} />
                <span>9000</span>
              </div>
              <div className="game-history">
                <span className="history">Game history</span>
                <win className="win"> </win>
                <lose className="lose"> </lose>
                <win className="win"> </win>
                <draw className="draw"> </draw>
                <lose className="lose"> </lose>
              </div>
            </section>
            <section id="main-infos">
              <input type="text" name="pseudo" placeholder="Nickname" />
              <div className="avatar">
                <img src={female} alt="avatar" className="user-avatar" />
              </div>
              <div className="game-selector">
                <div role="button" tabIndex={0} className="left-arrow" onClick={previous} onKeyDown={handleKeyDown}> </div>
                <div className="games-wrapper">
                  <img src={images[currentSlide]} alt="morpion game" className="game-img" />
                </div>
                <div role="button" tabIndex={0} className="right-arrow" onClick={next} onKeyDown={handleKeyDown}> </div>
                <div className="play-btn">
                  <Link to={links[currentSlide]}>
                    <input type="button" value="PLAY" />
                  </Link>
                </div>
              </div>
            </section>
            <section id="stats">
              <Paper>
                <Chart data={data} width="400" height="400">
                  <PieSeries valueField="area" argumentField="Status" color="color" />
                  <Legend />
                  <Title text="Total games stats" />
                  <Animation />
                </Chart>
              </Paper>
            </section>
            <section id="friends">
              <div className="connected">
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
              </div>
              <div className="disconnected">
                <img src={female} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={male} alt="friend" className="friend" />
                <img src={female} alt="friend" className="friend" />
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default Dashboard;
