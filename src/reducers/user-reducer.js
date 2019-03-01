import * as actions from '../actions/form-actions';

const initialState = {
    userName: '',
    description: '',
    topFruit: 'coconut' 
}
  
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_USER_DATA:
        {
            return { ...state, ...action.userData };
        }
        default:
            return state;
    }
}

export default usersReducer
