import { useEffect, useState } from 'react'

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('똑딱똑딱')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <span>타이머를 시작합니다.</span>
    </>
  )
}

export default function StepTwo() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <>
      <h1>useEffect</h1>
      <div>
        {showTimer && <Timer />}
        <button onClick={(e) => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
    </>
  )
}
