import { useReducer } from 'react'

const reducer = (prevState, nextState) => {
  return { ...prevState, ...nextState }
}

export default function ReducerSample() {
  const [state, setState] = useReducer(reducer, { count: 0 })

  return (
    <>
      <h1>useReducer</h1>
      <div>
        <button onClick={() => setState({ count: state.count + 1 })}>INCREASE</button>
        <span>{state.count}</span>
        <button onClick={() => setState({ count: state.count - 1 })}>DECREASE</button>
      </div>
    </>
  )
}
