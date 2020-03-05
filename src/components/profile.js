import React from "react";
import { Button, Container } from "react-bootstrap";
import UserForm from "./ProfileForm/userform";
import ImageUpload from "./ProfileForm/userphoto";

export default function MainProfile() {
  return (
    <div>
      <Container>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">User Profile</h1>
          <p class="lead">Quickly customize your detail information here.</p>
        </div>
        {/* <div class="container">
          <ImageUpload />
        </div> */}
        <div class="container">
          <UserForm />
        </div>
      </Container>
    </div>
  );
}
