import { memo } from 'react'

function ContextDemoOther() {
  console.log('ContextDemoOther render')
  return (
    <>
      <h1>ContextDemoOther</h1>
    </>
  )
}

export default memo(ContextDemoOther)
