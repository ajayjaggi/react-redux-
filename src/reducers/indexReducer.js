import {combineReducers} from "redux";
import dataLoadReducer from './dataLoadReducer';
import submitFormReducer from './submitFormReducer';
import activeFlightReducer from './activeFlightReducer'

const allReducers=combineReducers({
    flights:dataLoadReducer,
    activeTimeline:submitFormReducer,
    activeFlight:activeFlightReducer
});

export default allReducers;