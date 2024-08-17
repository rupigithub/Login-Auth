const initialState = {
    userData : {},
    error : ''
};

 const reducer = (state = initialState, action) =>{
switch(action.type){
    case 'SET-DATA':
        return{
            ...state,
            userData : action.payload,
            error: ''
        };

        case 'ERROR':
        return{
            ...state,
            userData:{},
            error : action.payload
        };

        default : return state;
}
}

export default reducer;
