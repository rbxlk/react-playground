import { Button, List, Title } from "@mantine/core";
import { useState } from "react";
import { initialTravelPlan } from "./data";

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId]
        // Create a new version of the parent place
        // that doesn't include this child ID
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(
                id => id !== childId
            )
        };
        //Update the root state object...
        setPlan({
            ...plan,
            // ...so that is has the updated parents.
            [parentId]: nextParent
        })
    }

    const root = plan[0];
    const planetIds = root.childIds

    const listItems = planetIds.map(id => (
        <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
        />
    ))
    return (
        <>
            <Title order={2}>Places to visit</Title>
            <List withPadding type="ordered">
                {listItems}
            </List>
        </>
    )
}

function PlaceTree({id, parentId, placesById, onComplete}) {
    const place = placesById[id];
    const childIds = place.childIds;

    const childListItems = childIds.map(childId => (
        <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
    ))
    return(
        <List.Item>
            {place.title} 
            <Button compact color="gray"
                onClick={() => {
                    onComplete(parentId, id)
                }}
            >
                Complete
            </Button>
            {childIds.length > 0 &&
                <List withPadding type="ordered">
                    {childListItems}
                </List>
            }
        </List.Item>
    )
}