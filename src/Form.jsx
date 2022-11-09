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

    function handlePersonNameChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    function handlePersonArtworkChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                [e.target.name]: e.target.value
            }
        })
    }

    return(
        <>
            <label>
                Name:
                <input
                    name='name'
                    value={person.name}
                    onChange={handlePersonNameChange}
                />
            </label>
            <br></br>
            <label>
                Title:
                <input
                    name='title'
                    value={person.artwork.title}
                    onChange={handlePersonArtworkChange}
                />
            </label>
            <br></br>
            <label>
                City:
                <input
                    name='city'
                    value={person.artwork.city}
                    onChange={handlePersonArtworkChange}
                />
            </label>
            <br></br>
            <label>
                Image:
                <input
                    name='image'
                    value={person.artwork.image}
                    onChange={handlePersonArtworkChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                src={person.artwork.image} 
                alt={person.artwork.title}
            />
        </>
    )
}