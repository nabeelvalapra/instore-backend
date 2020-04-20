import React, { Component } from 'react'
import { connect } from 'react-redux';
import Store from './Store';
import { fetchStoreDetails } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import Products from './Product';

class HomeContainer extends Component{

  componentDidMount() {
    this.props.fetchStoreDetails()
    this.props.fetchProducts()
  }

  render() {
    const {
      storeIsFetching, store, productIsFetching, products
    } = this.props

    var showStore = (
      (!storeIsFetching && store)
      ? <Store store={store}/>
      : <div> Fetching store details...</div>
    );
    var showProducts = (
      (!productIsFetching && products)
      ? <Products products={products}/>
      : <div> Fetching product details...</div>
    )
    return (
      <div>
        {showStore}
        {showProducts}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const storeIsFetching = state.store.isFetching;
  const { store } = state.store;
  const productIsFetching = state.store.isFetching;
  const { products } = state.product;
  return { storeIsFetching, store, productIsFetching, products } 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);