import { Button, List, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export default function AddRemoveArray(){
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

    return (
        <>
            <Title order={1}>Inspiring Sculptors:</Title>
            <TextInput
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button
                disabled={name === ''}
                onClick={ () => {
                    setName('');
                    setIndex(index + 1)
                    setArtists([...artists, {
                        id: index, name: name
                    }]);
                }}
            > Add </Button>
            <List> {listArtists} </List>
        </>
    )
}

export function ShapeEditor() {
    let initialShapes = [
        { id: 0, type: 'circle', x: 50, y: 100 },
        { id: 1, type: 'square', x: 150, y: 100 },
        { id: 2, type: 'circle', x: 250, y: 100}
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