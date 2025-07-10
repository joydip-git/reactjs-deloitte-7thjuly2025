import { useState } from "react"
type Person = {
    id: number, name: string
}
const Names = () => {
    const [people, setPeople] = useState<Person[]>([{ id: 1, name: 'anil' }, { id: 2, name: 'sunil' }, { id: 3, name: 'joydip' }])

    // const nameElements: JSX.Element[] = []
    // for (const name of nameList) {
    //     nameElements.push(<li>{name}</li>)
    // }
    const peopleElements = people.map(
        function (person) {
            return <li key={person.id}>{person.name}</li>
        }
    )
    const nameHandler = (newName: string) => {
        //people.push({id:4,name:''})
        const copyList = [...people]
        const copy = { ...copyList[1] }
        copy.name = newName
        copyList.splice(1, 1, copy)
        setPeople(copyList)
    }
    return (
        <>
            <h2>List of Names</h2>
            <ul>
                {
                    peopleElements
                }
            </ul>
            <br />
            <button onClick={() => nameHandler('sunil kumar')} type="button">Update</button>
        </>
    )
}

export default Names