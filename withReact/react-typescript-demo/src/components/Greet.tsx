
type Greetprops = {
    name : string
}

const Greet  = (props: Greetprops) => {
  return(
    <div>
        <h1>Hi {props.name} , you have 10 messages</h1>
    </div>
  )
}

export default Greet

