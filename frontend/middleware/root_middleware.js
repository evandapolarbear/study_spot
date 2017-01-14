import { applyMiddleware } from 'redux';

import SpotMiddleware from './spot_middleware';
import SessionMiddleware from './session_middleware';


const RootMiddleware = applyMiddleware(
  SpotMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
