import React from "react";
import { Button, Card } from "react-bootstrap";
import { Storage, API, graphqlOperation } from "aws-amplify";
import config from "../../aws-exports";
import uuid from "uuid/v4";
import "../../styles/photo.css";
import headiconImg from "../../img/iconfinder_user_1902268.png";
import { Auth } from "aws-amplify";
import { getUser } from "../../graphql/queries";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null, imagePreviewUrl: "", userImageUrl: "" };
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    await this.getUserImage(user.attributes.sub)
  }

  async getUserImage(userID) {
    await API.graphql(graphqlOperation(getUser, { id: userID }))
      .then((data) => {
        if (data.data.getUser != null) {
          this.setState({
            userImageUrl: data.data.getUser.picture,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    const {
      aws_user_files_s3_bucket_region: region,
      aws_user_files_s3_bucket: bucket,
    } = config;

    const file = this.state.file;
    console.log("handle uploading-", file);

    if (file != null) {
      const extension = file.name.split(".")[1];
      const { type: mimeType } = file;
      const key = `images/${uuid()}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

      try {
        await Storage.put(key, file, {
          contentType: mimeType,
        });
        this.setState({ userImageUrl: url });
        this.props.handleImgChange(url);
        alert("Image Uploaded")
      } catch (err) {
        console.log("error: ", err);
        alert("Something Happened Wrong")
      }
    }
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleImgError(e) {
    e.target.src = headiconImg
  }

  render() {
    let { imagePreviewUrl, userImageUrl } = this.state;
    let $imagePreview = null;

    // if imagepreviewurl != null, display imagepreview
    // if api get user image = null, display headicon Img
    // if api get user image != null, display userImg

    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className="headicon" alt="user-preview-img"/>;
    } 
    else {
      if (userImageUrl) {
        $imagePreview = (
          <div>
            <img src={userImageUrl} className="headicon" onError={this.handleImgError} alt="user-img"/>
          </div>
        )
      } else {
        $imagePreview = (
          <div>
            <img src={headiconImg} className="headicon" alt="user-default-img"/>
          </div>
        );
      }
    }


    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "30rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {$imagePreview}
            </div>
            <Card.Body>
              <Card.Title>Your Photo</Card.Title>
              <Card.Text>Take a quick review after uploading.</Card.Text>
            </Card.Body>
            <Card.Body>
              <form>
                <input
                  type="file"
                  onChange={(e) => this._handleImageChange(e)}
                />
                <Button
                  variant="success"
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
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
