import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import CampusLeader from './pages/CampusLeader/CampusLeader';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Events" exact>
          <Events/>
        </Route>
        <Route path="/Courses" exact>
          <Courses/>
        </Route>
        <Route path="/CampusLeader" exact>
          <CampusLeader/>
        </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;