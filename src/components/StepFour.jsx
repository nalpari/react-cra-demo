import { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        count: state.count + 1,
        students: [...state.students, { id: Date.now(), name: action.payload.name, isHear: false }],
      }
    case 'REMOVE_STUDENT':
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.name !== action.payload.name),
      }
    case 'TOGGLE_HEAR':
      return {
        ...state,
        students: state.students.map((student) =>
          student.name === action.payload.name ? { ...student, isHear: !student.isHear } : student,
        ),
      }
    default:
      return state
  }
}

const initialState = {
  count: 0,
  students: [],
}

const Student = ({ name, dispatch, isHear }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHear ? 'line-through' : 'none',
          cursor: 'pointer',
          color: isHear ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_HEAR', payload: { name } })
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'REMOVE_STUDENT', payload: { name } })
        }}
      >
        삭제
      </button>
    </div>
  )
}

export default function StepFour() {
  const [name, setName] = useState('')
  const [studentsInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>useReducer</h1>
      <p>총 학생수: {studentsInfo.count}</p>
      <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: 'ADD_STUDENT', payload: { name } })
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => (
        <Student key={student.id} name={student.name} dispatch={dispatch} isHear={student.isHear} />
      ))}
    </>
  )
}
