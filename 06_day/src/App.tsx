import { useReducer } from "react"

const App = () => {

  type StateType = {
    count: number
  }

  type ActionType = {type: "Increment", payload: 1} | {type: "Decrement", payload: 1};

  const intialState: StateType = {
    count: 0
  }

  const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
      case "Increment":
        return {count: state.count + action.payload}
      case "Decrement":
        return {count: state.count - action.payload}
    
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState);

  const increment = () => {
    dispatch({
      type: "Increment",
      payload: 1
    })
  }
  const decrement = () => {
    dispatch({
      type: "Decrement",
      payload: 1
    })
  }

  return (
    <>
      <h4>{state.count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
