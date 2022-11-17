import { Button, Text, Title } from "@mantine/core";
import { useState } from "react";

export default function ShareState(){
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <>
            <Title order={3}>Almaty, Kazakhstan </Title>
                <Panel
                    title="About"
                    isActive={activeIndex===0}
                    onShow={() => setActiveIndex(0)}
                >
                    <Text>
                        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its 
                        capital city.
                    </Text>
                </Panel>
                <Panel
                    title="Etymology"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                >
                    <Text>
                        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as 
                        "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the 
                        apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of 
                        the modern domestic apple.
                    </Text>
                </Panel>
        </>
    )
}

function Panel({title, isActive, onShow, children}){
    return(
        <section className="panel">
            <Title order={4}>
                {title}
            </Title>
            {isActive ? (
                children
            ) : (
                <Button onClick={onShow}>
                    Show
                </Button>
            )}
        
        </section>
    )
}