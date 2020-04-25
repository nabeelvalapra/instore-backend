import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import requireAuth from '../app/common/requireAuth';
import HomeContainer from './home/HomeContainer';
import ProductContainer from './product/ProductContainer';


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/product/:productSlug/' component={requireAuth(ProductContainer)}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;