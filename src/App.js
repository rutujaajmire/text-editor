// import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import { useState } from 'react'; 
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
     if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
     }
     else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
     }
  }
  return (
    <>
      
      <Navbar title="Shlok" aboutText="About Us" mode ={mode} toggleMode={toggleMode} />
      <Alert alert="This is alert" />
      <div className='container'> 
      <TextFrom heading="Enter your Text to Analyse below" mode = {mode} />
      </div> 

      {/* <About /> */}
      
    </>
  );
}

export default App;
