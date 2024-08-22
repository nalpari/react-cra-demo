import { useState } from 'react'
import ChildComp from './ChildComp'

export default function ParentComp() {
  console.log('ParentComp render')
  const [state, setState] = useState(0)
  return (
    <>
      <h1>Parent Comp</h1>
      <ChildComp count={state} />
      <div>
        <button onClick={() => setState(state + 1)}>INCREASE</button>
        <button onClick={() => setState(state - 1)}>DECREASE</button>
      </div>
    </>
  )
}
