import React, { Component } from 'react';

class Store extends Component {

  render() {
    return (
        <div>
          <br></br>
          Store Name: {this.props.storeDetails.storeName}
          <br></br>
          Logo: {this.props.storeDetails.storeLogo}
          <br></br>
        </div>
      )
    }
}

export default Store;