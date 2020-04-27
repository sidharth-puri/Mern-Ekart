import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Myproducts from './Components/myproducts';
import Register from './Components/Register';
import Watch from './Components/watch';
import Laptop from './Components/laptop';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/myproducts"   roles={["user","admin"]} component={Myproducts}/>
      <Route path="/watch" component={Watch}/>
      <Route path="/laptop" component={Laptop}/>
    </Router>
  );
}

export default App;