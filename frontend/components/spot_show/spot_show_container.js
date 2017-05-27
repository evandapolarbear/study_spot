import { connect } from 'react-redux';

import SpotShow from './spot_show';
import { updateFilter } from '../../actions/filter_actions'; //for example
// import { deleteSpot } from '../../actions/spot_actions'; //for example

const mapStateToProps = state => ({
  spots: state.spots,
  currentSpot: state.spots.currentSpot
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  // deleteSpot: id => dispatch(deleteSpot(id)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
