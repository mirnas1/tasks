import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ double }: { double: () => void }): JSX.Element {
    return <Button onClick={double}>Double</Button>;
}

function Halver({ half }: { half: () => void }): JSX.Element {
    return <Button onClick={half}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                double={() => {
                    setDhValue(dhValue * 2);
                }}
            ></Doubler>
            <Halver
                half={() => {
                    setDhValue(dhValue * 0.5);
                }}
            ></Halver>
        </div>
    );
}
