import React, { useState } from 'react';

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
  });

  const [btnChange, setBtnChange] = useState('Enable Dark Mode');

  const changeMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        transition: 'all 0.3s ease',
      });
      setBtnChange('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        transition: 'all 0.3s ease',
      });
      setBtnChange('Enable Dark Mode');
    }
  };

  return (
    <div style={myStyle} className="container p-4 rounded">
      <h1>About Page</h1>
      <p>
        Welcome to the About Page! Here you can learn more about our mission, values, and the story behind our organization.
        Toggle the button below to switch between Dark and Light modes for a comfortable viewing experience.
      </p>
      <button className="btn btn-primary my-3" onClick={changeMode}>{btnChange}</button>
    </div>
  );
}
