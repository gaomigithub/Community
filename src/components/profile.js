import React from "react";
import UserForm from "./ProfileForm/userform";
import ImageUpload from "./ProfileForm/userphoto";
export default function MainProfile() {
  return (
    <div>
      <ImageUpload />
      <UserForm />
    </div>
  );
}
