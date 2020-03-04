import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Card } from "react-bootstrap";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = <div>Please select an Image for Preview</div>;
    }

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {$imagePreview}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top"></Card.Img>
            <Card.Body>
              <Card.Title>Your Photo</Card.Title>
              <Card.Text>Take a quick review after uploading.</Card.Text>
            </Card.Body>
            <Card.Body>
              <form onSubmit={e => this._handleSubmit(e)}>
                <input type="file" onChange={e => this._handleImageChange(e)} />
                <Button
                  variant="success"
                  type="submit"
                  onClick={e => this._handleSubmit(e)}
                >
                  Upload Image
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
