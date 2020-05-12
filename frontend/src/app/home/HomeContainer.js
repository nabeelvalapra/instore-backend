import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails, fetchStoreSpotlight } from './duck/operations';
import { setTagFilter } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';

import Header from './components/Header';
import Spotlights from './components/Spotlight'
import { TagFilter, ProductList } from './components/ProductTab'


class HomeContainer extends Component{
  componentDidMount() {
    if(!this.props.storeIsFetching && !this.props.store){
      this.props.fetchStoreDetails()
      this.props.fetchStoreSpotlight()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      storeIsFetching, store, storeError,
      productsIsFetching, products, productsError,
      spotlightIsFetching, spotlight, spotlightError,
      tagFilter, setTagFilter
    } = this.props

    return (
      <>
        <section className="wrapp">
          <div className="right_content">

            {/* Displays <Header/> if store-fetch is success */}
            {(!storeIsFetching && store)
              ? (
                <Header
                  backgroundColor={store.backgroundColor}
                />
              )
              : (
                (!storeIsFetching && storeError)
                ? <p> { storeError } </p> : <p> Fetching store details...</p>
              )
            }

		 	      <section id="content">

              {/* Displays <Spotlight/> if spotlight-fetch is success */}
              {(!spotlightIsFetching && spotlight)
                ? (
                  <Spotlights spotlights={spotlight}/>
                )
                : (
                  (!spotlightIsFetching && spotlight)
                  ? <p> { spotlightError } </p> : <p> Fetching spotlight details...</p>
                )
              }

              {/* Displays <TagFilter/> & <ProductList/> if product-fetch is success */}
              {(!productsIsFetching && products && store)
                ? (
                  <>
                    <TagFilter
                      setTagFilter={setTagFilter}
                      buttonColor={store.buttonColor}
                      activeTag={tagFilter}
                    />
                    <ProductList
                      products={products}
                      tagFilter={tagFilter}
                    />
                  </>
                )
                : (
                  (!productsIsFetching && productsError)
                  ? <p> { productsError } </p> : <p> Fetching product details ...</p>
                )
              }

            </section>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  const store = state.store.details;
  const storeIsFetching = state.store.isFetching;
  const storeError = state.store.error;

  const spotlight = state.spotlight.images;
  const spotlightIsFetching = state.spotlight.isFetching;
  const spotlightError = state.spotlight.error;

  const products = state.product.items;
  const productsIsFetching = state.product.isFetching;
  const productsError = state.product.error;

  const { tagFilter } = state;

  return {
    storeIsFetching, store, storeError,
    productsIsFetching, products, productsError,
    spotlightIsFetching, spotlight, spotlightError,
    tagFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchStoreSpotlight: () => dispatch(fetchStoreSpotlight()),
    fetchProducts: () => dispatch(fetchProducts()),
    setTagFilter: (tag) => dispatch(setTagFilter(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);