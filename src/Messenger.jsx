import { Button, List } from "@mantine/core";
import { useReducer } from "react";
import { contacts } from "./data";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState)
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);

    return (
        <div>
            <ContactList 
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat 
                key={contact.id} 
                message={message}
                contact={contact}
                dispatch={dispatch}/>
        </div>
    )
}

export function ContactList({
    contacts,
    selectedId,
    dispatch
}){
    return(
            <List listStyleType="none" style={{float: "left"}}>
                {contacts.map(contact=>
                    <List.Item key={contact.id}>
                        <Button 
                            style={{width: "100px"}} 
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id
                                })
                            }}
                        >
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </Button>
                    </List.Item>
                )}
            </List>
    )
}

export function Chat({contact, message, dispatch}){
    return(
        <section style={{float: "left"}}>
            <textarea
                style={{height: "150px"}}
                placeholder={"Chat to " + contact.name}
                value={message}
                onChange={(e) => dispatch({
                    type: 'edited_message',
                    message: e.target.value
                })}
            />
            <br></br>
            <Button 
                variant="default"
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({type: 'sent_message'});
                }}>
                Send to contact: {contact.email}
            </Button>
        </section>
    )
}