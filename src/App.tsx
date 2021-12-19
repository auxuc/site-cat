import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Register from './Module/Register';

export const routes = {
  home: '/home',
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
