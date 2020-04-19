import React, { Component } from 'react';
import PropTypes from 'prop-types'


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

Store.propTypes = {
  storeDetails: PropTypes.object.isRequired,
}
export default Store;