import React, { Component } from 'react'
import { connect } from 'react-redux';
import Store from './Store';
import { fetchStoreDetails } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import Products from './Product';

class HomeContainer extends Component{

  componentDidMount() {
    if(!this.props.storeFetched){
      this.props.fetchStoreDetails()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      storeFetched, store, productFetched, products
    } = this.props

    return (
      <div>
        <Store hasFetched={storeFetched} store={store}/>
        <Products hasFetched={productFetched} products={products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const storeFetched = state.store.hasFetched;
  const { store } = state.store;
  const productFetched = state.product.hasFetched;
  const { products } = state.product;
  return { storeFetched, store, productFetched, products } 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);