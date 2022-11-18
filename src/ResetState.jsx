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
            <Chat key={to.id} contact={to}/>
        </div>
    )
}

export function ContactList({
    contacts,
    onSelect
}){
    return(
            <List listStyleType="none" style={{float: "left"}}>
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

export function Chat({contact}){
    const [text, setText] = useState('');
    return(
        <section style={{float: "left"}}>
            <textarea
                style={{height: "150px"}}
                placeholder={"Chat to " + contact.name}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br></br>
            <Button variant="default">
                Send to contact: {contact.name}
            </Button>
        </section>
    )
}