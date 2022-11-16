import { Checkbox, List, TextInput, Title } from "@mantine/core";
import { useState } from "react";

let nextId = 3;

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList ] = useState(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        setMyList(myList.map( artwork => {
            if(artwork.id === artworkId){
                return {...artwork, seen: nextSeen}
            } else {
                return artwork
            }
        }))
    }

    function handleToggleYourList(artworkId, nextSeen) {
        setYourList(yourList.map(artwork => {
          if (artwork.id === artworkId) {
            return { ...artwork, seen: nextSeen };
          } else {
            return artwork;
          }
        }));
      }

      return (
        <>
            <Title order={1}>Art Bucket List</Title>
            <Title order={2}>My list of art to see:</Title>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <Title order={2}>Your list of art to see:</Title>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </>
      );

}

function ItemList({artworks, onToggle}){
    const itemLists = artworks.map(artwork => (
        <List.Item key={artwork.id}>
            <Checkbox
                label={artwork.title}
                checked={artwork.seen}
                onChange={e => {
                    onToggle(
                      artwork.id,
                      e.target.checked
                    );
                  }}
            />
        </List.Item>
    ))
    return (
        <List>
            {itemLists}
        </List>
    )
}