import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails, setTagFilter } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';

import Header from './components/Header';
import Spotlight from './components/Spotlight'
import { TagFilter, ProductList } from './components/ProductTab'


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
      productsIsFetching, products, productsError,
      tagFilter, setTagFilter
    } = this.props

    return (
      <>
        <section className="wrapp">
          <div className="right_content">
            {(!storeIsFetching && store)
              ? (
                <Header
                  backgroundColor={store.backgroundColor}
                />
              )
              : (
                (!storeIsFetching && storeError)
                  ? <p> { storeError } </p>
                  : <p> Fetching store details...</p>
              )
            }

            {(!productsIsFetching && products && store)
              ? (
		 	          <section id="content">
                  <Spotlight />
                  <TagFilter
                    setTagFilter={setTagFilter}
                    buttonColor={store.buttonColor}
                    activeTag={tagFilter}
                  />
                  <ProductList products={products} tagFilter={tagFilter}/>
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

  const { tagFilter } = state;

  return {
    storeIsFetching, store, storeError,
    productsIsFetching, products, productsError,
    tagFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: () => dispatch(fetchProducts()),
    setTagFilter: (tag) => dispatch(setTagFilter(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);