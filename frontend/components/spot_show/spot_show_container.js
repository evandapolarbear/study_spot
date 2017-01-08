import { connect } from 'react-redux';

import SpotShow from './spot_show';
import { updateFilter } from '../../actions/filter_actions'; //for example

const mapStateToProps = state => ({
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
