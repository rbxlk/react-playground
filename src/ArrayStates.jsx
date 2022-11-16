import { Button, List, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export function AddRemoveInsertArray(){
    const [index, setIndex] = useState(1);
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    const listArtists = artists.map(artist => 
        <List.Item key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
            setArtists(
                artists.filter(a =>
                a.id !== artist.id
                )
            );
            }}>
            Delete
            </button>
        </List.Item>
    )

    function insertHandler(){
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0,insertAt),
            {id: index, name: name},
            ...artists.slice(insertAt)
        ]
        setName('');
        setArtists(nextArtists);
        setIndex(index + 1);
    }

    function addHandler(){
        setName('');
        setArtists([...artists, {
            id: index, name: name
        }]);
        setIndex(index + 1)

    }

    return (
        <>
            <Title order={1}>Inspiring Sculptors:</Title>
            <TextInput
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button
                disabled={name === ''}
                onClick={addHandler}
            > Add </Button>
            <Button
                disabled={name === ''}
                onClick={insertHandler}
            > Insert
            </Button>
            <List> {listArtists} </List>
        </>
    )
}

export function ShapeEditor() {
    let initialShapes = [
        { id: 0, type: 'circle', x: 250, y: 150 },
        { id: 1, type: 'square', x: 350, y: 150 },
        { id: 2, type: 'circle', x: 450, y: 150}
    ];

    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick(){
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // No change
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50
                };
            }
        });
        setShapes(nextShapes)
    }

    return (
        <>
            <Button onClick={handleClick}>
                Move circles down!
            </Button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                            ? '50%' : '',
                        width: 20,
                        height: 20
                    }}
                >
                </div>
            ))}
        </>
    )
}

export function CounterList(){
    let initialCounters = [
        0, 0, 0
    ];

    const [counters, setCounters] = useState(
        initialCounters
    )

    function handleIncrementClick(index){
        const nextCounter = counters.map((c, i) => {
            if(index === i){
                return c + 1;
            } else {
                return c;
            }
        })
        setCounters(nextCounter);
    }
    return(
        <List>
            {counters.map((counter, i) => (
                <List.Item key={i}>
                    {counter}
                    <Button onClick={ () => {
                        handleIncrementClick(i)
                    }}>
                        +1
                    </Button>
                </List.Item>
            ))}
        </List>
    )
}