import React, { Component } from 'react'
import { connect } from 'react-redux';
import Store from './Store';
import { fetchStoreDetails, fetchProducts } from './duck/actions';
import Products from './Product';

class HomeContainer extends Component{

  componentDidMount() {
    this.props.fetchStoreDetails()
    this.props.fetchProducts()
  }

  render() {
    const {
      storeIsFetching, storeDetails, productIsFetching, products
    } = this.props

    var store = (
      (!storeIsFetching && storeDetails)
      ? <Store storeDetails={storeDetails}/>
      : <div> Fetching store details...</div>
    );
    var product = (
      (!productIsFetching && products)
      ? <Products products={products}/>
      : <div> Fetching product details...</div>
    )
    return (
      <div>
        {store}
        {product}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const storeIsFetching = state.requestStoreDetail.isFetching;
  const storeDetails = state.requestStoreDetail.storeDetails;
  const productIsFetching = state.requestStoreDetail.isFetching;
  const products = state.requestProducts.products;
  return { storeIsFetching, storeDetails, productIsFetching, products } 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);