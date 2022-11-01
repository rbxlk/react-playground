import { Profile } from "./Profile.jsx"

export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile 
          person={{ 
            name: 'Lin Lanying', 
            imageId: '1bX5QH6',
            profession: 'physicist and chemist',
            discovery: 'polonium (chemical element)',
            awards:[
              'Nobel Prize in Physics',
              'Nobel Prize in Chemistry',
              'Davy Medal',
              'Matteucci Medal'
            ]
          }}
        />
        <Profile 
          size={100}
          person={{
            imageId: 'YfeOqp2',
            name: 'Katsuko Saruhashi',
            profession: 'geochemist',
            discovery: 'a method for measuring carbon dioxide in seawater',
            awards: [
              'Miyake Prize for geochemistry',
              'Tanaka Prize'
            ]
          }}
        />
      </section>
    );
}