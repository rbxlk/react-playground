import { Button } from "@mantine/core";
import { useState } from "react";
import { Avatar } from "./Avatar";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}
export function Profile({person, size=100}) {
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
      }
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
            </ul>
            <Button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} accomplishments
            </Button>
            { showMore && person.accomplishment && <p>Accomplishment: {person.accomplishment} </p> }
        </Card>
    );
  }