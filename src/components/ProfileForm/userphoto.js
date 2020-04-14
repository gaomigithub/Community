import React from "react";
import { Button, Card } from "react-bootstrap";
import { Storage, API, graphqlOperation } from 'aws-amplify'
import config from '../../aws-exports'
import uuid from 'uuid/v4'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    const {
      aws_user_files_s3_bucket_region: region,
      aws_user_files_s3_bucket: bucket
    } = config
  
    const file = this.state.file
    console.log("handle uploading-", file);

    const extension = file.name.split(".")[1]
    const { type: mimeType } = file
    const key = `images/${uuid()}.${extension}`      
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`

    try {
      await Storage.put(key, file, {
        contentType: mimeType
      })
    } catch (err) {
      console.log('error: ', err)
    }
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
              <form>
                <input type="file" onChange={e => this._handleImageChange(e)} />
                <Button
                  variant="success"
                  type="submit"
                  onClick={e => this.handleSubmit(e)}
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
