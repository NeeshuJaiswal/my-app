//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode, setMode]=useState('light');// wheather dark mode enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
    }
     else{
       setMode('light');
       document.body.style.background='white';
       showAlert("Light mode has been enabled","primary");
     } 
  }
  return (
  <>
  {/* <Router> */}
  <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Switch> */}
        {/*user-->compenen1
  /user/home--> component2    react using partial matching so it's better to use exact path*/ }
          {/* <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */} 
            <Textform showAlert={showAlert} heading="Enter your text to Analyze" mode={mode}/>
          {/* </Route>
  </Switch> */}
  </div>
  {/* </Router> */}
  </>
  );
}


export default App;
