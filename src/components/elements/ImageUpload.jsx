import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    Input,
    Flex,
    Heading,
    Text,
    Image,
  } from "@chakra-ui/react";

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(""); 

    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }

    function handleAPI() {
        if (!image) {
            console.log("No image selected!");
            return;
        }
        
        const formData = new FormData();
        formData.append('user_image', image);
        
        axios.post('http://127.0.0.1:8000/predict', formData)
            .then((res) => {
                console.log(res);
                setPrediction(res.data.prediction);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    }

    return (
        <div style={{ margin: '0 auto' }}>
            <input type="file" name="user_image" onChange={handleImage} />
            <Button
                bg="#2977ff"
                color="whitesmoke"
                alignSelf="center"
                width="fit-content"
                marginTop="5"
                m="10px"
                onClick={handleAPI}
              >
                Upload
              </Button>
              <Text fontSize="md" m="10px" alignSelf="center" style={{ textAlign: "center" }}>
              (Please remember that every AI model has its own limitations and less than 100% accuracy.)
              </Text>
              <Text fontSize="lg" m="10px" alignSelf="center" style={{ textAlign: "center" }}>
              {prediction ? `This might be your skin disease: ${prediction}` : ""}
              </Text>
        </div>
    );
}

export default ImageUpload;
