import { applyMiddleware } from 'redux';

import SpotMiddleware from './spot_middleware';


const RootMiddleware = applyMiddleware(
  SpotMiddleware
);

export default RootMiddleware;
