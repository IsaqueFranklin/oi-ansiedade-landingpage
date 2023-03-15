import React from 'react';
import "./App.css";
import './styles/style.css';
import { BrowserRouter, Routes, Route, Redirect, Router } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase';
import useAuth from './authentication/useAuth';
import Home from './components/home';
import Header from './components/header';
import Contato from './components/contato';
import Footer from './components/footer';


function App() {

  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div>
          <Header />
          <div>
            <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route exact path='/contato' element={ <Contato /> } />
            </Routes>
          </div>
          <Footer />
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
