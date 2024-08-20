import { useReducer, useState } from 'react'

const ACTION_TYPE = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

export default function StepThree() {
  const [number, setNumber] = useState(0)
  const [balance, dispatch] = useReducer((state, action) => {
    console.log(state, action)
    switch (action.type) {
      case ACTION_TYPE.DEPOSIT:
        return state + action.payload
      case ACTION_TYPE.WITHDRAW:
        return state - action.payload
      default:
        return state
    }
  }, 0)

  return (
    <>
      <h1>useRef</h1>
      <p>잔고: {balance}원</p>
      <div>
        <input type="number" value={number} step="1000" onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPE.DEPOSIT, payload: number })
            setNumber(0)
          }}
        >
          예금
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPE.WITHDRAW, payload: number })
            setNumber(0)
          }}
        >
          인출
        </button>
      </div>
    </>
  )
}
