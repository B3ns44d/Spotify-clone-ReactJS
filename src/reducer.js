export const initialState = {
    user : null,
    playlists:[],
    playing: false,
    item: null,
    // remove after finished developing!
    token:
    "BQCFPVbUa1wAIBgwYYQNP8tw59Jy4LwbWK75HtghGbvMLYv_ZqJzB2JxTrppnahOtDyPpYwq-BZDsk34_X6TvjlnnVILD0TJn7T9pKmwrDWq727AjdhdjoiIfs0b2-_JDMmsQwf1kKxlino0RPItV5jw7u-Sjy_ziJY",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
             return {
                 ...state,
                 user:action.user
             };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
};

export default reducer;