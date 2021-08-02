import React from "react";
import TimeHorizon from "../components/TimeHorizon";
import PowerKnob from "../components/PowerKnob"
import {Container, Row, Col} from "react-bootstrap"
import NineumValue from "../components/NineumValue";
import Users from "../components/Users";

function Landing () {
    return (
        <Container>
            <Row>
                <Col>
                <TimeHorizon />
                </Col>
                <Col>
                <NineumValue />
                </Col>
                <Col>
                <Users />
                </Col>
            </Row>
            <Row>
                <PowerKnob />
            </Row>

        </Container>

    )
};

export default Landing;