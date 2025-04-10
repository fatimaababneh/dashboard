import React from 'react';
import {Routes, Route} from "react-router-dom"
import { Users } from './Pages/Users';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Layout/Navbar';
import { Footer } from './Components/Layout/Footer';
import { UserDetails } from './Pages/UserDetails';
import "./App.css";
import { AddUser } from './Pages/AddUser';

function App() {
  return (
    <div className='flex flex-col min-h-screen App-header'>
      <Navbar/>

      <main className='flex-grow py-6 px-4 main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/user/:id' element={<UserDetails/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<AddUser/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
