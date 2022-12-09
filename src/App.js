import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height!')
    } 
    else if (weight === "" || height === "") {
      alert('Please enter a valid weight and height!')
     
    }
 
    else {
      let bmi = (weight / ((height/100) * (height/100)))
      setBmi(bmi.toFixed(1))
 
      // Logic for message
      
      if (bmi < 18.5) 
      {
        setMessage('You are underweight')
      } 
      else if (bmi >=18.5 && bmi<24.9) 
      {
        setMessage('You have normal weight')
      }
      else if (bmi>=25 && bmi<29.9) 
      {
        setMessage('You are overweight')
      } 
      
    
    }
  }
  let reload = () => {
    window.location.reload()
  }
  return (
    <div className="app">
    <div>
      <img src='bmilogo.png' className='bmilogo' alt=''></img>
      <p class="caption">Take care of your body.<br/>It's the only place you have to live.</p>
    </div>
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div className='headings'>
          <label>Weight (Kg)</label>
        </div>
        <input value={weight} placeholder="Enter weight(Kg)" onChange={(e) => setWeight(e.target.value)} />
 
        <div className='headings'>
          <label>Height (cm)</label>
        </div>
        <input value={height} placeholder="Enter height(cm)" onChange={(event) => setHeight(event.target.value)} />
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p className='Message'>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;
