import React from "react";
import { Button, Card } from "react-bootstrap";
import { Storage, API, graphqlOperation } from "aws-amplify";
import config from "../../aws-exports";
import uuid from "uuid/v4";
import "../../styles/photo.css";
import headiconImg from "../../img/iconfinder_Puppy_5439767.png";
import { Auth } from "aws-amplify";
import { getDog } from "../../graphql/queries";

class DogImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null, imagePreviewUrl: "", dogImageUrl: "" };
  }

  async componentDidMount() {
    await this.getDogImage(this.props.dogId)
  }

  async getDogImage(dogID) {
    await API.graphql(graphqlOperation(getDog, { id: dogID }))
      .then((data) => {
        if (data.data.getDog != null) {
          this.setState({
            dogImageUrl: data.data.getDog.picture,
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
        this.setState({ dogImageUrl: url });
        this.props.handleDogImgChange(this.props.dogId, this.state.dogImageUrl)
      } catch (err) {
        console.log("error: ", err);
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
    let { imagePreviewUrl, dogImageUrl } = this.state;
    let $imagePreview = null;

    // if imagepreviewurl != null, display imagepreview
    // if api get user image = null, display headicon Img
    // if api get user image != null, display userImg

    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className="headicon" alt="dog-preview-img"/>;
    } 
    else {
      if (dogImageUrl) {
        $imagePreview = (
          <div>
            <img src={dogImageUrl} className="headicon" onError={this.handleImgError} alt="dog-img"/>
          </div>
        )
      } else {
        $imagePreview = (
          <div>
            <img src={headiconImg} className="headicon" alt="dog-default-img"/>
          </div>
        );
      }
    }


    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "15rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {$imagePreview}
            </div>
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
                  Upload
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default DogImageUpload;