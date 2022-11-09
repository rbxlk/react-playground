import { useState } from "react"

export default function Form() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

    function handleNameChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <label>
                Name:
                <input
                    name='name'
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
        </>
    )
}