import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { fetchStoreDetails } from './duck/actions';

const mapStateToProps = state => {
    return { state } 
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