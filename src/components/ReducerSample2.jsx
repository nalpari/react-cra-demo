import { useReducer } from 'react'

const reducer = (state, action) => {
  let result
  switch (action.type) {
    case 'INCREASE':
      result = state.count + 1 > 10 ? 10 : state.count + 1
      return { count: result }
    case 'DECREASE':
      result = state.count - 1 < 0 ? 0 : state.count - 1
      return { count: result }
    // default:
    //   return state;
  }

  throw new Error(`Unhandled action type: ${action.type}`)
}

export default function ReducerSample2() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <h1>useReducer 2</h1>
      <div>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>INCREASE</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>DECREASE</button>
        <button onClick={() => dispatch({ type: 'UNKNOWN' })}>UNKNOWN</button>
      </div>
    </>
  )
}
