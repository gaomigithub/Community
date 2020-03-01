import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const imageMaxSize = 1000000000
const acceptedFileTypes ='image/x-png, image/png, image/jpg,image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item)=> {return item.trim()})

    verifyFile = (files) => {
        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type 
            const currentFileSize = currentFile.size 
            if(currentFileSize > imageMaxSize){
                alert("This file is not allowed." + currentFileSize + "bytes is too large")
                return false
            }
        }
    }