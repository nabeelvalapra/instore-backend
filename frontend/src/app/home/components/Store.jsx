import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Store extends Component {
  render() {
    return
    // return (
    //     <div>
    //       <br></br>
    //       Store Name: {this.props.store.name}
    //       <br></br>
    //       Logo: {this.props.store.logo}
    //       <br></br>
    //     </div>
    // );
  }
}

Store.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Store;