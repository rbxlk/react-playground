import { Button, List, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export default function AddToArray(){
    const [index, setIndex] = useState(1);
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    const listArtists = artists.map(artist => 
        <List.Item key={artist.id}>{artist.name}</List.Item>
    )

    return (
        <>
            <Title order={1}>Inspiring Sculptors:</Title>
            <TextInput
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button
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