import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    positioner
}: {
    positioner: () => void;
}): JSX.Element {
    return <Button onClick={positioner}>Shove the Box</Button>;
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox();
    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    positioner={() => setPosition(4 + position)}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
