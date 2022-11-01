import { Profile } from "./Profile.jsx"
import { people } from "./data.js"
import { Fragment } from "react";

export default function Gallery() {
    const listProfiles = people.map(person => 
      <Fragment key={person.id}>
        <Profile 
          person={{
            key: person.id,
            name: person.name,
            imageId: person.imageId,
            profession: person.profession,
            accomplishment: person.accomplishment,
          }}
        />
      </Fragment>
    )
    return (
      <section>
        <h1>Amazing scientists</h1>
        {listProfiles}
      </section>
    );
}