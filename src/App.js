import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

import Home from './components/Home';
import ErrorServer from './components/ErrorServer';
import NotFound from './components/NotFound';

export default function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/404" render={props => <NotFound {...props} />} />
          <Route exact path="/500" render={props => <ErrorServer {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
