import React, {Fragment} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './components/pages/About';
import Students from './components/students/Students';
import AddStudent from './components/students/AddStudent';
import EditStudent from './components/students/EditStudent';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/about" component={About} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/edit/:id" component={EditStudent} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
