import './App.css';
import './styles/style.css';
import { BrowserRouter, Routes, Route, Redirect, Component } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase';
import useAuth from './authentication/useAuth';
import Home from './components/home';
import Header from './components/header';

function App() {

  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="">
          <Header />
          <div classname="">
            <Routes>
              <Route exact path='/' component={Home} />
            </Routes>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
