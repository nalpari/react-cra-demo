import { memo } from 'react'

function GrandChildComp2() {
  console.log('GrandChildComp2 render')
  return (
    <>
      <h1>Other Grand Child Comp</h1>
    </>
  )
}

export default memo(GrandChildComp2)
