import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [takingQuiz, setTakingQuiz] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function updateAfterStart(): void {
        setTakingQuiz(true);
        attempts !== 0 ? setAttempts(attempts - 1) : attempts;
    }

    return (
        <div>
            <div>
                Attempts Left: {attempts}
                <Button
                    onClick={() => updateAfterStart()}
                    disabled={takingQuiz || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setTakingQuiz(false)}
                    disabled={!takingQuiz}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={takingQuiz}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
