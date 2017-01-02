import { connect } from 'react-redux';

import { createSpot } from '../../actions/spot_actions';

import SpotForm from './spot_form';

//FIX where is location coming from?
const mapStateToProps = (state, { location }) => ({
  lat: location.query.lat,
  lng: location.query.lng
});

const mapDispatchToProps = dispatch => ({
  createSpot: spot => dispatch(createSpot(spot))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
