import { useCallback, useEffect, useState } from 'react'

export default function StepSix() {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  const handleClick = useCallback(() => {
    console.log('current number:', number)
  }, [number])

  useEffect(() => {
    console.log('handleClick 수정됨')
  }, [handleClick])

  useEffect(() => {
    console.log('rerendering')
  })

  return (
    <>
      <h1>useCallback</h1>
      <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>{toggle ? `true` : `false`}</button>
      </div>
    </>
  )
}
