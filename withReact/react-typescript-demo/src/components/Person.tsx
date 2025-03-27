
type personProps = {
    fullName : {
        first : string,
        last : string
    }
}

const Person = (props : personProps ) => {
    const {fullName} = props

  return(
    <div>
        {fullName.first} {fullName.last}
     </div>
  )
}

export default Person 