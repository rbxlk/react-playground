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