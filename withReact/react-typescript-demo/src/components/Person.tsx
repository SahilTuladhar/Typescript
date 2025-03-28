
import { personProps } from "./Person.types"

const Person = (props : personProps ) => {
    const {fullName} = props

  return(
    <div>
        {fullName.first} {fullName.last}
     </div>
  )
}

export default Person 