import { Profile } from "./Profile.jsx"

export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile 
          person={{ 
            name: 'Lin Lanying', 
            imageId: '1bX5QH6'}}
          size={100}
        />
        <Profile 
          size={100}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Profile 
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
      </section>
    );
}