import { Text } from "@mantine/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { links } from "./data"

export default function SideBarLinks(){
    return(
        links.map(link =>
            <Fragment key={link.id}>
                <Text
                    component={Link}
                    variant="link"
                    to={link.linkPath}
                >
                    {link.title}
                </Text>
            </Fragment>
        )
    );
}