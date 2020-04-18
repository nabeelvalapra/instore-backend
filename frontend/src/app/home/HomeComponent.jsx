
import React, { Component } from 'react';

class HomeComponent extends Component {
  componentDidMount() {
    this.props.requestStoreDetails()
  }
  render () {
    return (
        <div>
          Username: {}
          <br></br>
          <br></br>
          Logo: 
          <br></br>
          Store Name:
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

export default HomeComponent;