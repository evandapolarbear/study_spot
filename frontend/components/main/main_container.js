import { connect } from 'react-redux';
//FIX component filter and import filter

import Main from './main';

const mapStateToProps = state => ({
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect (
  mapStateToProps
)(Main);
