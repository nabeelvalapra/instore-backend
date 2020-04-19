import React, { Component } from 'react';
import PropTypes from 'prop-types'

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchStoreDetails()
  }

  render () {
    if(this.props.isFetching){
      return (
        <div>Fetching details...</div>
      )
    }
    return (
        <div>
          Username:
          <br></br>
          <br></br>
          Store Name: {this.props.storeDetails.storeName}
          <br></br>
          Logo: {this.props.storeDetails.storeLogo}
          <br></br>
          <br></br>
          Spotlight Image:
          <br></br>
          - Spotlight Image 1
          <br></br>
          - Spotlight Image 2
          <br></br>
          <br></br>
          Product One:
          <br></br>
          - Product Name
          <br></br>
          - Product Image 1
          <br></br>
          - Product Image 2
          <br></br>
          - Product Price
          <br></br>
          <br></br>
          Product Two:
          <br></br>
          - Product Name
          <br></br>
          - Product Image 1
          <br></br>
          - Product Image 2
          <br></br>
          - Product Price
  
        </div>
      )
    }
}

HomeComponent.propTypes = {
    fetchStoreDetails: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    storeDetails: PropTypes.object.isRequired,
}
export default HomeComponent;