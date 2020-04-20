import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Store extends Component {
    render() {
        if(!this.props.hasFetched){return <div>Store Fetching...</div>}
        return (
            <div>
              <br></br>
              Store Name: {this.props.store.storeName}
              <br></br>
              Logo: {this.props.store.storeLogo}
              <br></br>
            </div>
          )
        }
}

Store.propTypes = {
  store: PropTypes.object,
}
export default Store;