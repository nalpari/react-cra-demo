export default function GrandChildComp(props) {
  console.log('GrandChildComp render')
  const { count } = props
  return (
    <>
      <h1>Grand Child Comp</h1>
      <div>
        <span>{count}</span>
      </div>
    </>
  )
}
