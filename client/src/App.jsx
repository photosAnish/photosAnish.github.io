import React, { useState, useEffect } from 'react';
import arrow from './assets/websiteDesigns/arrow.png';
import oval from './assets/websiteDesigns/oval.png';
import purpleBoi from './assets/websiteDesigns/purpleBoi.png';
import { useMediaQuery } from 'react-responsive'
import testPicture from './assets/websiteDesigns/Screenshot (15).png';
//20230612_002623.jpg
// Screenshot (15).png
const Polaroid = ({ picture, description, isMobile }) => {
  console.log("PICTURE",picture);
  const polaroidLaptopStyle = {
    position: 'relative',
    width: '54.5vw',
    backgroundColor: '#fff',
    padding: '15px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const polaroidMobileStyle={
    position: 'relative',
    width: '90%',
    backgroundColor: '#fff',
    padding: '1vh',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const descriptionStyle = {
    fontFamily: 'RustyColaPen, sans-serif',
    fontSize: '2vw',
    marginBottom: 0,
    marginTop: '10px',
  };

  return (
    <div style={isMobile?polaroidMobileStyle:polaroidLaptopStyle} className="polaroid">
      <img src={picture} alt="Polaroid Picture" style={imageStyle} />
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const App = () => {
  const [randomPicture, setRandomPicture] = useState('');
  const [date,setDate] = useState('');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 720px)' })

  const fetchPicture=()=>{
    console.log('FETCHING')
    fetch('/random-image')
      .then(response => response.json())
      .then(data => {
        setRandomPicture(data.imageUrl);
        setDate(data.date)
      })
      .catch(error => console.error('Error fetching random image:', error));
  }

  useEffect(() => {
    fetchPicture()
  }, []);

  const madeByTextStyle = {
    fontFamily: 'KidPrint, sans-serif',
    fontSize: '3.2vh',
    position: 'absolute',
    top: '75%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
  };

  const arrowStyle1 = {
    width: 'auto',
    position: 'fixed',
    bottom: '14vh',
    right: '7vw',
    height: '7vh',
    borderRadius: '5px',
  };
  const arrowStyle2 = {
    width: 'auto',
    position: 'fixed',
    bottom: '15vh',
    right: '0vw',
    height: '7vh',
    borderRadius: '5px',
    transform: 'rotate(45deg)',
  };
  const arrowStyle3 = {
    width: 'auto',
    position: 'fixed',
    bottom: '2vh',
    right: '12vw',
    height: '7vh',
    borderRadius: '5px',
    transform: 'rotate(230deg) scaleX(-1)',
  };
  const ovalStyle = {
    width: 'auto',
    height: '25vh',
  };

  const madeByStyle = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    textAlign: 'center',
  };

  return (
    // (isTabletOrMobile)?
    // <p>HELLOOO</p>
    // :
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <Polaroid picture={testPicture} description={date} isMobile={isTabletOrMobile}/> */}
      <Polaroid picture={randomPicture} description={date} isMobile={isTabletOrMobile}/>
      {/* <img src={arrow} alt="Polaroid Picture" style={arrowStyle1} />
      <img src={arrow} alt="Polaroid Picture" style={arrowStyle2} />
      <img src={arrow} alt="Polaroid Picture" style={arrowStyle3} /> */}
      <button
        style={{
          backgroundColor: '#663399',
          color: '#efe6ff',
          width: '20vw',
          height: '10vh',
          borderRadius: '1.5vh',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(66, 165, 245, 0.2)',
          transition: 'background-color 0.3s ease-in-out',
          outline: 'none',
          margin: '10px',
          display: 'inline-block',
          fontWeight: 'bold',
          textDecoration: 'none',
          position:'absolute',
          top:"80%"
        }}
      onClick={()=>fetchPicture()}
      >
        Another random picture
      </button>
      <div style={madeByStyle}>
        <div style={madeByTextStyle}> Made by Purple Boi</div>
        <img src={purpleBoi} alt="Polaroid Picture" style={ovalStyle} />
      </div>
    </div>
  );
};

export default App;
