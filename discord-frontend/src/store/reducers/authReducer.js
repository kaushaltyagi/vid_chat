import { authActions } from '../actions/authActions';
const initState ={
    userDetails: null,
}

const reducer =(state = initState,action) => {
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return{
                ...state,
                userDetails: action.userDetails,
            };
        default:
            return state;    
    }
};//by that redux will be able to change store state

export default reducer;