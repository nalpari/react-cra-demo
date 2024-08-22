import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

export default function ContextDemoGrandChild() {
  console.log('ContextDemoGrandChild render')
  const { state } = useContext(DataContext)
  return (
    <>
      <h1>ContextDemoGrandChild</h1>
      <div>{state.count}</div>
    </>
  )
}
