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
    if(!this.props.store.isFetching && !this.props.store.details){
      this.props.fetchStoreDetails()
      this.props.fetchStoreSpotlight()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      store, product, spotlight, tagFilter, setTagFilter
    } = this.props

    return (
      <>
        {/* Displays <Header/> if store-fetch is success */}
        {(!store.isFetching && store.details)
          ? (
            <Header
              backgroundColor={store.details.backgroundColor}
            />
          )
          : (
            (!store.isFetching && store.error)
            ? <p> { store.error } </p> : <p> Fetching store details...</p>
          )
        }

		 	  <section id="content">
          {/* Displays <Spotlight/> if spotlight-fetch is success */}
          {(!spotlight.isFetching && spotlight.images)
            ? (
              <Spotlights spotlights={spotlight.images}/>
            )
            : (
              (!spotlight.isFetching && spotlight.images)
              ? <p> { spotlight.error } </p> : <p> Fetching spotlight details...</p>
            )
          }

          {/* Displays <TagFilter/> & <ProductList/> if product-fetch is success */}
          {(!product.isFetching && product.items && store.details)
            ? (
              <>
                <TagFilter
                  setTagFilter={setTagFilter}
                  buttonColor={store.details.buttonColor}
                  activeTag={tagFilter}
                />
                <ProductList
                  products={product.items}
                  tagFilter={tagFilter}
                />
              </>
            )
            : (
              (!product.isFetching && product.error)
              ? <p> { product.error } </p> : <p> Fetching product details ...</p>
            )
          }
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { store, spotlight, product, tagFilter } = state;
  return {
    store, product, spotlight, tagFilter
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