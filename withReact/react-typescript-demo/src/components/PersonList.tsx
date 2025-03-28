import { personListProps } from "./PersonList.types"

const PersonList = (props : personListProps) => {

    const {persons} = props
 
    return (
        <div>
            {
              persons.map((person) => (
                <div>
                    <h2>{person.first} {person.last}</h2>
                </div>
              ))
            }
        </div>
    )

}

export default PersonList