// In this file we made a reducer and store it in "store"


import {legacy_createStore as createStore} from 'redux'

// reducer START
const initState = {value: 0, showCounter: true};

const counterReducer = (state = initState, action) => {

    switch (action.type) {
        case 'Increase':
            state = {...state, value: state.value + action.payload }
            break;
    
        case 'Decrease':
            state = {...state, value: state.value - action.payload }
            
            break;

        case 'showCounter':
            state = {...state, showCounter: !state.showCounter}
            
            break;
        default:
            break;
    }

    return state;
};
// reducer END

//app init -> run store -> counter reducer -> 0
//user clicks increase -> action(increase) -> counter reducer -> 1


const store = createStore(counterReducer); // this is the line where we stored the reducer

export default store  // And then exported it 