import React, { Component } from 'react'
import { connect } from 'react-redux';
import HomeComponent from './Home';
import { fetchStoreDetails } from './duck/actions';

class HomeContainer extends Component{

  componentDidMount() {
    this.props.fetchStoreDetails()
  }

  render() {
    const { storeDetails, isFetching } = this.props
    return (
      <div>
        {(!isFetching && storeDetails)
          ? <HomeComponent storeDetails={storeDetails}/>
          : <div>Fetching details...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const isFetching = state.requestStoreDetail.isFetching;
  const storeDetails = state.requestStoreDetail.storeDetails;
  return { isFetching, storeDetails } 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);