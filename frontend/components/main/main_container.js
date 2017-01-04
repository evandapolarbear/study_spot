import { connect } from 'react-redux';
//FIX component filter and import filter

import Main from './main';
import { updateFilter } from '../../actions/filter_actions';
import { requestSpots } from '../../actions/spot_actions';


const mapStateToProps = state => ({
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestSpots: () => dispatch(requestSpots())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Main);
