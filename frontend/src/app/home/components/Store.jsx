import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import Spotlight from './Spotlight'
import { CategoryToggle, ProductList } from './ProductTab'

class Store extends Component {
  render() {
    return(
      <>
        <section className="wrapp">
          <div className="right_content">
            <Header />
		 	      <section id="content">
              <Spotlight />
              <CategoryToggle />
              <ProductList />
            </section>
          </div>
        </section>
      </>
    )
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