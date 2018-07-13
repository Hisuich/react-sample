const reducer = (state = {action: 'ADDITION', values: [], result: ''}, action) => {
    switch(action.type) {
    case 'TEST':
        return {
            ...state,
            values: action.values,
        }
    case 'SUBSTRACTION':
        return {
            ...state,
            values: action.values,
            result: action.values.reduce((prev, cur) => {
                return prev - cur;
            }) 
        }
    case 'ADDITION':
    console.log(state);
        return {
            ...state,
            values: action.values,
            result: action.values.reduce((prev, cur) => {
                return +prev + +cur;
            })
        }
    case 'DIVIDING':
        return {
            ...state,
            values: action.values,
            result: action.values.reduce((prev, cur) => {
                return prev / cur;
            })
        }
    case 'MULTIPLICATION':
        return {
            ...state,
            values: action.values,
            result: action.values.reduce((prev, cur) => {
                return prev * cur;
            })
        }
    case 'SET_ACTION':
        console.log(state);
        return {
            ...state,
            action: action.action
        }
    default:
        return state;
}
}

export default reducer;