import { Button, List } from "@mantine/core";
import { useState } from "react";
import { contacts } from "./data";

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);

    return (
        <div>
            <ContactList 
                contacts={contacts}
                selectedContact={to}
                onSelect={(contact)=>setTo(contact)}
            />
            {/* <Chat key={to.id} contact={to}/> */}
        </div>
    )
}

export function ContactList({
    contacts,
    selectedContact,
    onSelect
}){
    return(
            <List listStyleType="none">
                {contacts.map(contact=>
                    <List.Item key={contact.id}>
                        <Button 
                            style={{width: "100px"}} 
                            onClick={() => {
                                onSelect(contact)
                            }}
                        >
                            {contact.name}
                        </Button>
                    </List.Item>
                )}
            </List>
    )
}