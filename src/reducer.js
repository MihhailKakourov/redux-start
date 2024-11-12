const initianState = {value:0}

const reducer = (state = initianState, action) =>{
    switch (action.type) {
        case "INC":
            return{
                ...state,
                value: state.value +1
            }
        case "DEC":
            return{
                ...state,
                value: state.value - 1
            }
        case "DEC5":
            return{
                ...state,
                value: state.value - 5
            }
        case "INC5":
            return{
                ...state,
                value: state.value + 5
            }
        case "RND":
            return{
                ...state,
                value: state.value * action.payload
            }
        default:
            return state;
    }
}

export default reducer;