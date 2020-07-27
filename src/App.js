import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './login-component/login';
import { AuthProvider } from "./login-component/Auth";
import PrivateRoute from './login-component/PrivateRoute';
import Admin from './admin/admin-panel';



function App() {


  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/admin' component={Admin} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
