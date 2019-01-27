import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AddListing from './Components/ListingForm.js';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MapContainer from './MapComponent';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/addListing" component={AddListing} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(MapContainer, document.getElementById('mapTrial'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
