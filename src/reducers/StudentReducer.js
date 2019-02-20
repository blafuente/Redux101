// Reducers are functions that return a piece of state 
const students = [
    'Stanley',
    'Kyle',
    'Rob',
    'Ron',
    'JR',
    'Matt'
]
// All reducer functions have 2 params:
// 1. Current state
// 1b. Usually, you will want to prodive a default state
// 2. Into that come from the action
export default (state = students, action)=>{
    if(action.type === 'ADD_STUDENT'){
        // This means I care about this action. Update.
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents;
    }
    return state;
}