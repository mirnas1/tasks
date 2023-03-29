import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const typeTransition: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        const newQuestion = typeTransition[question];
        setQuestion(newQuestion);
    }
    return (
        <div>
            Current Question:{" "}
            {question === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div></div>
        </div>
    );
}
