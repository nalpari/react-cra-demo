import { useState } from 'react'

const initData = () => {
  console.log('겁나 무거운 작업!!!')
  return ['apple', 'banana', 'orange']
}

const StepOne = () => {
  const [names, setNames] = useState(initData)
  const [input, setInput] = useState('')

  console.log('StepOne render')

  const handleAddName = () => {
    input && setNames([...names, input])
    setInput('')
  }

  const handleDelName = (index) => {
    // setNames(names.filter((_, i) => i !== index))
    const result = [...names]
    result.splice(index, 1)
    setNames([...result])
  }

  return (
    <>
      <h1>useState</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddName}>추가</button>
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>
            {name}
            <button onClick={() => handleDelName(index)}>삭제</button>
          </div>
        ))}
      </div>
    </>
  )

  // return (
  //   <>
  //     <h1>useState</h1>
  //   </>
  // )
}

export default StepOne
