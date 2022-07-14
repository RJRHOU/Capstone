
import './App.css';
//import Header from './Components/Navbar';

//import Products from './Components/Recall';
//import React, {useEffect, useState } from 'react';
import Recalls from './Components/Recalls';
import { 
  BrowserRouter as Router,
  
  Switch,
  Route,
  
} from 'react-router-dom';
//import Navbar from './Components/Navbar';
import Posts from './Components/Posts';




function App() {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(()=> {
  //   fetch("/may").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
      

  return (
    
    <Router>
      
      <Switch>
      <Route  path = "/Recalls" exact> <Recalls /> </Route>
      <Route  path = "/Posts" exact> <Posts /> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
