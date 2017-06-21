import { connect } from 'react-redux';

import SpotShow from './spot_show';
import { updateFilter } from '../../actions/filter_actions';
import { deleteSpot, setCurrentSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  spots: state.spots,
  currentSpot: state.spots.currentSpot,
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  deleteSpot: id => dispatch(deleteSpot(id)),
  setCurrentSpot: spot => dispatch(setCurrentSpot(spot))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
