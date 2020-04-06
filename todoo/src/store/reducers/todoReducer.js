
const todoReducer = (state, action) => {
    console.log(state, 'from reducer')
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'COMPLETE_TODO':
            return state.map(x => 
                (x.id === Number(action.id)) ?
                { ...x, completed: !x.completed } : x
            )
        case 'CLEAR_TODO':
            return state.filter(x => x.completed === false)
        default:
            return state
    }
}

export default todoReducer;