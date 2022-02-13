import React, {useState, useEffect} from 'react';
import './App.css';
import Customer from './components/Customer';


const handleAlert = () => {
  alert('i am a button')
}

function App() {
  const [title, setTitle] = useState('Practicle React Enterprise')

  useEffect(() => {
    setTitle("Become an effective react developer from day1")
  },[title])
  return (
    <div className="App">

      <h1
         style={{
          color: "blue",
          marginBottom: "5rem",
        }} onClick={() => setTitle("Become an effective react developer from day1")}>
        {title}
      </h1>

      <button style={{
        color:"#ffff",
        height:"2rem",
        width:"10rem",
        backgroundColor:"tomato",
        borderRadius:"5px",
        fontSize:"18px"
      }}
      onClick={handleAlert}
      >click me</button>

      <Customer
        firstName='Denis'
        lastName='Kidagi'
        age={24}
        islegal={true}
      />
    </div>
  );
}

export default App;
