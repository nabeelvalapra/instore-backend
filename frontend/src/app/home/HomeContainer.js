import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { fetchStoreDetails } from './duck/actions';

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;