import { Avatar } from "./Avatar";

function Card({ children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}
export function Profile({person, size}) {
    return (
        <Card>
            <h2>{person.name}</h2>
            <Avatar 
                person={person}
                size={size}
            />
            <ul>
                <li><b>Profession:</b> {person.profession}</li>
                { person.awards &&
                    <li>
                        <b>Awards: {person.awards.length} </b>
                        ({person.awards.join(', ')})
                    </li>
                }
                <li>
                <b>Discovered: </b>
                {person.discovery}
                </li>
            </ul>
        </Card>
    );
  }