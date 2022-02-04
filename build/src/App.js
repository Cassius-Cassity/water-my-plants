import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';


import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import Header from './Components/Header';
import PlantList from './Components/PlantList';
import Home from './Components/Home';


function App() {

  return (

    <div className="App">
      <div className='Header'>
        <Header/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/plantlist' element={<PlantList/>}/>
            <Route path='/signup' element={<SignUpForm/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;