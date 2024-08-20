import { useMemo, useState } from 'react'

const hardWork = (number) => {
  console.log('Hard work')
  for (let i = 0; i < 1000000; i++) {}
  return parseInt(number) + 10000
}

export default function StepFive() {
  const [hardNumber, setHardNumber] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const hardNumberInt = useMemo(() => {
    return hardWork(hardNumber)
  }, [hardNumber])

  return (
    <>
      <h1>useMemo</h1>
      <div>
        <input type="number" value={hardNumber} onChange={(e) => setHardNumber(e.target.value)} /> + 10000 ={' '}
        {hardNumberInt}
      </div>
      <div>
        <button onClick={() => setIsShow(!isShow)}>{isShow ? `true` : `false`}</button>
      </div>
    </>
  )
}
