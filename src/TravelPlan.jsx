import { Button, List, Title } from "@mantine/core";
import { useState } from "react";
import { initialTravelPlan } from "./data";

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId) {
        //Complete
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
            <List type="ordered">
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
                <List type="ordered">
                    {childListItems}
                </List>
            }
        </List.Item>
    )
}