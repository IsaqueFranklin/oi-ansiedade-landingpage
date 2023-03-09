import './App.css';
import './styles/style.css';
import { BrowserRouter, Switch, Route, Redirect, Component } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase';
import useAuth from './authentication/useAuth';
import Home from './components/home';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="">
          <Header />
          <div classname="">
            <Switch>
              <Route exact path='/' Component={Home} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
