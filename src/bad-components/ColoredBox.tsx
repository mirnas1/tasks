import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({ color }: { color: () => void }): JSX.Element {
    return <Button onClick={color}>Next Color</Button>;
}

export function ColoredBox(): JSX.Element {
    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    color={() =>
                        setColorIndex((1 + colorIndex) % COLORS.length)
                    }
                ></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
