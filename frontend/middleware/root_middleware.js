import { applyMiddleware } from 'redux';

import SpotMiddleware from './spot_middleware';
import SessionMiddleware from './session_middleware';
import CommentMiddleware from './comment_middleware';


const RootMiddleware = applyMiddleware(
  CommentMiddleware,
  SpotMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
