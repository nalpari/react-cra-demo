import { useState } from 'react'
import ContextDemoGrandChild from './ContextDemoGrandChild'
import ContextDemoOther from './ContextDemoOther'

export default function ContextDemoChild() {
  console.log('ContextDemoChild render')
  const [state, setState] = useState({ name: 'John' })
  return (
    <>
      <h1>ContextDemoChild</h1>
      <div>{state.name}</div>
      <button onClick={() => setState({ name: 'Jane' })}>Change Name</button>
      <div>
        <ContextDemoOther />
        <ContextDemoGrandChild />
      </div>
    </>
  )
}
