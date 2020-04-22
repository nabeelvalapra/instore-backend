import React, { Component } from 'react'
import { connect } from 'react-redux';
import Store from './Store';
import { fetchStoreDetails } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import Products from './Product';

class HomeContainer extends Component{

  componentDidMount() {
    if(!this.props.storeIsFetching && !this.props.store){
      this.props.fetchStoreDetails()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      storeIsFetching, store, productsIsFetching, products
    } = this.props

    return (
      <div>
        {(!storeIsFetching && store)
          ? <Store store={store}/>
          : <p>Fetching store details...</p>
        }
        {(!productsIsFetching && products)
          ? <Products products={products}/>
          : <p>Fetching products ...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { store } = state.store;
  const products = state.product.items;

  const storeIsFetching = state.store.isFetching;
  const productsIsFetching = state.product.isFetching;

  return { storeIsFetching, store, productsIsFetching, products } 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);