import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas: 🎄"
        | "Eid: 🕋"
        | "New Years: 🎊"
        | "Black Friday: ⚫️🏷"
        | "Halloween: 🎃";

    const [holiday, setHoliday] = useState<Holiday>("Christmas: 🎄");

    function Alphabetical_Transition(): void {
        if (holiday === "Black Friday: ⚫️🏷") setHoliday("Christmas: 🎄");
        if (holiday === "Christmas: 🎄") setHoliday("Eid: 🕋");
        if (holiday === "Eid: 🕋") setHoliday("Halloween: 🎃");
        if (holiday === "Halloween: 🎃") setHoliday("New Years: 🎊");
        if (holiday === "New Years: 🎊") setHoliday("Black Friday: ⚫️🏷");
    }

    function Favorite_Transition(): void {
        if (holiday === "Christmas: 🎄") setHoliday("Eid: 🕋");
        if (holiday === "Eid: 🕋") setHoliday("New Years: 🎊");
        if (holiday === "New Years: 🎊") setHoliday("Black Friday: ⚫️🏷");
        if (holiday === "Black Friday: ⚫️🏷") setHoliday("Halloween: 🎃");
        if (holiday === "Halloween: 🎃") setHoliday("Christmas: 🎄");
    }

    return (
        <div>
            <div>
                <div>
                    <span>{"Holiday: " + holiday}</span>
                </div>
            </div>
            <div>
                <Button onClick={Favorite_Transition}>Advance By Year</Button>
                <Button onClick={Alphabetical_Transition}>
                    Advance Alphabetically
                </Button>
            </div>
        </div>
    );
}
