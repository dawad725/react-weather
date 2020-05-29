import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Today from "./pages/Today"



function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todays-weather' exact component={Today} />
      </Switch>
    </Router>
  );
}

export default App;
