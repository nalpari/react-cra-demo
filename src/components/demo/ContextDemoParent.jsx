import { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import ContextDemoChild from './ContextDemoChild'

export default function ContextDemoParent() {
  console.log('ContextDemoParent render')
  const [state, setState] = useState({ count: 0 })

  return (
    <>
      <DataContext.Provider value={{ state }}>
        <h1>ContextDemoParent</h1>
        <div>
          <ContextDemoChild />
        </div>
      </DataContext.Provider>
      <button onClick={() => setState({ count: state.count + 1 })}>Increment</button>
      <button onClick={() => setState({ count: state.count - 1 })}>Decrement</button>
    </>
  )
}
