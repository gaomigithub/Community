import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Timetable() {
  return (
    <Container bg="white">
      <div className="mb-2">
        <Row className="justify-content-md-center">
          <h2>Pick your time</h2>
        </Row>
      </div>
      <div className="mb-2">
        <Row className="justify-content-md-center">
          <Col>
            <Button variant="success" as="input" type="button" value="6 ~ 7" />
          </Col>
          <Col>
            <Button variant="success" as="input" type="button" value="7 ~ 8" />
          </Col>
          <Col>
            <Button variant="success" as="input" type="button" value="8 ~ 9" />
          </Col>
          <Col>
            <Button variant="success" as="input" type="button" value="9 ~ 10" />
          </Col>
        </Row>
      </div>
      <div className="mb-2">
        <Row className="justify-content-md-center">
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="10 ~ 11"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="11 ~ 12"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="12 ~ 13"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="13 ~ 14"
            />
          </Col>
        </Row>
      </div>
      <div className="mb-2">
        <Row className="justify-content-md-center">
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="14 ~ 15"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="15 ~ 16"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="16 ~ 17"
            />
          </Col>
          <Col>
            <Button
              variant="success"
              as="input"
              type="button"
              value="17 ~ 18"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
