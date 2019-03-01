import * as actions from '../actions/form-actions';

const initialState = {
    gender: 2
}
  
function greetingReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER_DATA:
            return { ...state, ...action.gender };
        default:
            return state;
    }
};

export default greetingReducer
