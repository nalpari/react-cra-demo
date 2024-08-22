import ContextDemoGrandChild from './ContextDemoGrandChild'
import ContextDemoOther from './ContextDemoOther'

export default function ContextDemoChild() {
  console.log('ContextDemoChild render')
  return (
    <>
      <h1>ContextDemoChild</h1>
      <div>
        <ContextDemoOther />
        <ContextDemoGrandChild />
      </div>
    </>
  )
}
