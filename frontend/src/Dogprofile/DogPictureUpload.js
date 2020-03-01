import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const imageMaxSize = 1000000000
const acceptedFileTypes ='image/x-png, image/png, image/jpg,image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item)=> {return item.trim()})
class ImgDropAndCrop extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc: null
        }
    }
    verifyFile = (files) => {
        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type 
            const currentFileSize = currentFile.size 
            if(currentFileSize > imageMaxSize){
                alert("This file is not allowed." + currentFileSize + "bytes is too large")
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)){
                alert("This file is not allowed. Only images are allowed")
                return false
            }
            return true
        }
    }

    handleOnDrop = (files,rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0){
            this.verifyFile(rejectedFiles)
        }
        if (files && files.length > 0){
            const isVerified = this.verifyFile(files)
            if (isVerified){
            }
        }
    }

    render (){
            const {imgSrc} = this.state
        return(
            <div>
                <h1>Drop and Crop</h1>
                {imgSrc !== null? <img src={imgSrc} />: ''}
                <Dropzone onDrop={this.handleOnDrop} accept = {acceptedFileTypes} multiple={false} maxSize={imageMaxSize}>Drop file here/>
            </div>
        )
    }
}

export default ImgDropAndCrop