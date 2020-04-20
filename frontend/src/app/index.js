import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomeContainer from './home/HomeContainer';
import ProductContainer from './product/ProductContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/product/:productSlug/' component={ProductContainer} />
        </div>
      </Router>
    );
  }
}

export default App;