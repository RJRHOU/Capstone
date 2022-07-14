
import './App.css';
import Header from './Components/Navbar';
import { useState } from 'react';
import Recall from './Components/Recall';

// import SearchBox from './Components/Searchbox';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import Home from './Components/Home';  
// import Recall from './Components/Recall';


function App() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}
 />
      {/* <Home/> */}
       {/* <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/recall' component={Recall}/>
         <Route exact path='/submit' component={Submit}/>
        <Route exact path='/signIn' component={Signin}/>
        
       </Switch>  */}

      <Recall searchValue={searchValue} setSearchValue={setSearchValue} />
      
    </div>
  );
}

export default App;
