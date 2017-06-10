import {combineReducers} from 'redux';

import CommentReducer from './comment_reducer'
import SessionReducer from './session_reducer';
import SpotReducer from './spot_reducer';


const RootReducer = combineReducers({
  comments: CommentReducer,
  session: SessionReducer,
  spots: SpotReducer,
});

export default RootReducer;
