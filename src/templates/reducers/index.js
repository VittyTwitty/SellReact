import {combineReducers} from "redux";
import search from './search-reducer';
import users from './users-reducer';

export default combineReducers({
    users,
    search
});