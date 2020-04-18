import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { requestStoreDetails } from './duck/actions';

const mapStateToProps = state => {
    return { state } 
};

const mapDispatchToProps = dispatch => {
  return {
    requestStoreDetails: () => dispatch(requestStoreDetails())
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;