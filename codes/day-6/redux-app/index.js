const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");
//states
const initialCounterState = {
    counter: 0
}

const initialTaskState = {
    tasks: []
}

//action types
const actionTypes = {
    INCREASE_COUNTER: 'INCREASE_COUNTER',
    DECREASE_COUNTER: 'DECREASE_COUNTER',
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK'
}


//action creators
const increaseCounterActionCreator = (data) => {
    return {
        type: actionTypes.INCREASE_COUNTER,
        payload: data
    }
}
const decreaseCounterActionCreator = (data) => {
    return {
        type: actionTypes.DECREASE_COUNTER,
        payload: data
    }
}

const addTaskActionCreator = (data) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: data
    }
}
const deleteTaskActionCreator = (data) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: data
    }
}

//reducers
const taskRedcuer = (state = initialTaskState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.ADD_TASK:
            const copy = [...state.tasks]
            copy.push(action.payload)
            newState = {
                ...state,
                tasks: copy
            }
            break;

        case actionTypes.DELETE_TASK:
            const copyTasks = [...state.tasks]
            const index = copyTasks.findIndex(t => t.id === action.payload)
            if (index > -1) {
                copyTasks.splice(index, 1)
            }
            newState = {
                ...state,
                tasks: copyTasks
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}
const counterReducer = (state = initialCounterState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter + action.payload
            }
            break;

        case actionTypes.DECREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter - action.payload
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}

//const store = legacy_createStore(counterReducer)
const rootReducer = combineReducers({
    counterState: counterReducer,
    taskState: taskRedcuer
})
const loggerMiddleware = createLogger()
const store = legacy_createStore(rootReducer, applyMiddleware(loggerMiddleware))

const wholeState = store.getState();
//wholeState


//dispatching
//console.log(store.getState());
const increaseByTwoAction = increaseCounterActionCreator(2)
store.dispatch(increaseByTwoAction)
//console.log(store.getState());

const decreaseByOneAction = decreaseCounterActionCreator(1)
store.dispatch(decreaseByOneAction)
//console.log(store.getState());


for (let index = 0; index < 2; index++) {
    const addTaskAction = addTaskActionCreator({ id: index + 1, title: 'learn redux' })
    store.dispatch(addTaskAction)
    //console.log(store.getState().taskState);
}

const deleteTaskAction = deleteTaskActionCreator(2)
store.dispatch(deleteTaskAction)
//console.log(store.getState().taskState);
