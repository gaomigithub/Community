import React from "react";
import { Container, Button } from "react-bootstrap";

export default function ResultReport() {
  return (
    <div>
      <div
        class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        style={{ margin: "100px" }}
      >
        <h1 class="display-4">User Profile</h1>
        <div style={{ margin: "50px" }}>
          Done Successfully!
          <br />
          Information has been updated.
        </div>
        <div style={{ margin: "50px" }}>
          <Button variant="success" size="lg" href="/profile">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
