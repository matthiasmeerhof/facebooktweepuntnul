const initialState =
    {
        name : '',
        loggedIn : false
    }
;

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return action.payload;
        default:
            return state;
    }
};
export default ProfileReducer;