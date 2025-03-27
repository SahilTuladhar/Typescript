type personListProps = {
    persons : Array<string>
}

const PersonList = (props : personListProps) => {

    const {persons} = props
 
    return (
        <div>
            {
              persons.map((person) => (
                <div>
                    <h2>{person}</h2>
                </div>
              ))
            }
        </div>
    )

}

export default PersonList