import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Tasks from './components/Tasks'
import React from 'react';
function App() {
  return(
  <div className='App'>
    <Signup/>
    <Login/>
    <Tasks/>
   
    </div>
  );

}
 
export default App;
