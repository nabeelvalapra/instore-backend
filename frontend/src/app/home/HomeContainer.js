import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => {
  return {} 
};

const mapDispatchToProps = dispatch => {
  return {}
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;