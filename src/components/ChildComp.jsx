import GrandChildComp from './GrandChildComp'
import GrandChildComp2 from './GrandChildComp2'

function ChildComp(props) {
  console.log('ChildComp render')
  return (
    <>
      <h1>Child Comp</h1>
      <GrandChildComp2 />
      <GrandChildComp {...props} />
    </>
  )
}

export default ChildComp
