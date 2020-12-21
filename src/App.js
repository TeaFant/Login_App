import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { 
  setToLocalStr, 
  removeFromLclStorage, 
  getFromLclStorage 
} from './local-storage';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  };

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const userFromStorage = getFromLclStorage();
    if(userFromStorage && userFromStorage.name ){
      setUser(userFromStorage);
      setLoggedIn(true);
    }
  }, []);


  const validation = () => {
    let errors = {};
    if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(user.email))) {
      errors.email = "Email is invalid";
    } else if (user.email !== adminUser.email) {
      errors.email = "Email does not match"
    }
    if (user.password !== adminUser.password) {
      errors.password = "Password does not match";
    }
    return errors;
  };

  const checkbox = e => {
    setChecked(!checked);
  };

  const login = e => {
    e.preventDefault();
    if (user.email === adminUser.email && user.password === adminUser.password) {
      setLoggedIn(true);
    }
    setErrors(validation);
    if(checked) {
      setToLocalStr({
        name: user.name, email: user.email
      });
    }
  };

  const logout = e => {
    e.preventDefault();
    setUser({ name: "", email: "", password: "" });
    removeFromLclStorage("user");
    setLoggedIn(false);
    setChecked(false);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            loggedIn={loggedIn}
            logout={logout}
            name={user.name}
          />
          {!loggedIn ?
            <Route path="/login">
              <Form 
                login={login}
                user={user}
                setUser={setUser}
                checked={checked}
                checkbox={checkbox}
                errors={errors} 
              />
            </Route> : <Redirect to="dashboard" />}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
