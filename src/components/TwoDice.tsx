import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieLeft, setdieLeftVal] = useState<number>(0);
    const [dieRight, setdieRightVal] = useState<number>(1);

    return (
        <div>
            <div>
                {dieLeft === dieRight
                    ? dieRight === 1
                        ? "You Lose!"
                        : "You Win!"
                    : "Keep Rolling!"}
                ;
            </div>
            <div>
                <Button onClick={() => setdieLeftVal(d6())}>Roll Left</Button>
                <span data-testid="left-die">Die Left Value: {dieLeft}</span>
            </div>
            <div>
                <Button onClick={() => setdieRightVal(d6())}>Roll Right</Button>
                <span data-testid="right-die">Die Right Value: {dieRight}</span>
            </div>
        </div>
    );
}
