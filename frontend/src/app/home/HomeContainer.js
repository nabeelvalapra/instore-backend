import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';

import Header from './components/Header';
import Spotlight from './components/Spotlight'
import { CategoryToggle, ProductList } from './components/ProductTab'

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
      <>
        <section className="wrapp">
          <div className="right_content">
            {(!storeIsFetching && store)
              ? (
                <Header />
              )
              : (
                (!storeIsFetching && storeError)
                  ? <p> { storeError } </p>
                  : <p> Fetching store details...</p>
              )
            }

            {(!productsIsFetching && products)
              ? (
		 	          <section id="content">
                  <Spotlight />
                  <CategoryToggle />
                  <ProductList products={products} />
                </section>
              )
              : (
                (!productsIsFetching && productsError)
                  ? <p> { productsError } </p>
                  : <p> Fetching product details ...</p>
              )
            }

          </div>
        </section>
      </>
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