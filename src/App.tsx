import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD(Ameer was here :p) CISC275 with React Hooks and
                    TypeScript
                </header>
                <Container>
                    <Row>
                        <Col>
                            <div className="red-Rectangle">
                                <h1>get bizay</h1>
                                <img
                                    id="cat1"
                                    src="https://preview.redd.it/3zwqz4dvxqj81.jpg?width=640&crop=smart&auto=webp&s=5a834483764bf0adf7c95de160d1011a4f14df24"
                                    alt="picture of cat"
                                />
                                <ol className="center">
                                    <li>This is probably the best</li>
                                    <li>This is the second best!</li>
                                    <li>Third</li>
                                </ol>
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="red-Rectangle"></div>
                        </Col>
                    </Row>
                </Container>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World
                </p>
            </div>
        </>
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
>>>>>>> upstream/task-state
    );
}

export default App;
