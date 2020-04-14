import React from "react";
import { Button, Container } from "react-bootstrap";
import UserForm from "./ProfileForm/userform";
import ImageUpload from "./ProfileForm/userphoto";

export default function MainProfile() {
  return (
    <div>
      <Container>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">User Profile</h1>
          <p className="lead">Quickly customize your detail information here.</p>
        </div>
        <div className="container">
          <ImageUpload />
        </div>
        <div className="container">
          <UserForm />
        </div>
      </Container>
    </div>
  );
}
