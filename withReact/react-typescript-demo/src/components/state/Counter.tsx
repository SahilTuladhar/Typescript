import { useReducer } from "react"

type StateType = {
    count : number
}

type UpdateAction = { 
  type : 'increment' | 'decrement'
  value : number
}

type ResetAction = {
  type : 'reset'
}

type ActionType = UpdateAction | ResetAction

const initialCount = {
    count : 0
}

const reducer = (state: StateType, action: ActionType) => {
   
    switch(action.type){
        case 'increment':
            return {count : state.count + (action.value)}
        
        case 'decrement':
            return {count : state.count - (action.value)}
        
        case 'reset':
            return initialCount
        
        
    }
}


const Counter = () => {

    const [counter , dispatch] = useReducer(reducer , initialCount)
  
    return (
        <> 
         <h1>Count : {counter.count}</h1>
        <button onClick={() => {
            dispatch({type : 'increment' , value : 5})
        }}>Increment</button>
        <button onClick={() => {
            dispatch({type : 'decrement' , value : 5})
        }}>Decrement</button>
         <button onClick={() => {
            dispatch({type : 'reset' })
        }}>Reset</button>
        </>
    )
}

export default Counter