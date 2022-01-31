import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';


import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import Header from './Components/Header';


function App() {

  return (

    <div className="App">
      <div className='Header'>
        <Header/>
          <Routes>
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/signup' element={<SignUpForm/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;