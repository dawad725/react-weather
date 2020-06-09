import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Today from "./pages/Today"
import Week from "./pages/Week"



function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todays-weather' exact component={Today} />
        <Route path='/weekly-forecast' exact component={Week} />
      </Switch>
    </Router>
  );
}

export default App;
