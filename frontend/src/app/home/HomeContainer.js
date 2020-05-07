import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import Store from './components/Store';
import Products from './components/Product';

class HomeContainer extends Component{

  componentDidMount() {
    if(!this.props.storeIsFetching && !this.props.store){
      this.props.fetchStoreDetails()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      storeIsFetching, store, storeError,
      productsIsFetching, products, productsError
    } = this.props

    return (
      <div>
        <Store/>
        {(!storeIsFetching && store)
          ? <Store store={store}/>
          : ((!storeIsFetching && storeError)
              ? <p> { storeError } </p>
              : <p> Fetching store details...</p>)
        }
        {(!productsIsFetching && products)
          ? <Products products={products}/>
          : ((!productsIsFetching && productsError))
              ? <p> { productsError } </p>
              : <p> Fetching product details ...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { store } = state.store;
  const storeIsFetching = state.store.isFetching;
  const storeError = state.store.error;

  const products = state.product.items;
  const productsIsFetching = state.product.isFetching;
  const productsError = state.product.error;

  return { storeIsFetching, store, storeError, productsIsFetching, products, productsError}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);