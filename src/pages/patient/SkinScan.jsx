import React, { useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import ImageUpload from "../../components/elements/ImageUpload";

const SkinScan = () => {
  const [modelResponse, setModalResponse] = useState([]);

  useEffect(() => {
    console.log(
      "res",
      Boolean(modelResponse.data),
      "res length",
      modelResponse.length
    );
  }, [modelResponse]);

  function handleAPI(image) {
    if (!image) {
      console.log("No image selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    console.log(formData, "fd");

    // http://192.168.192.105:3000/predict <---- original 
    axios
      .post("http://192.168.192.105:3000/predict", formData)
      .then((res) => {
        console.log(res);
        setModalResponse(res);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }

  return (
    <>
      <Box marginTop={12}>
        <Flex flexDir="row" justifyContent="space-around">
          <Box p={4} margin="10px" padding="10px" maxWidth="50%">
            <Flex flexDir={"column"}>
              <Heading
                as="h3"
                size="lg"
                m="10px"
                style={{ textAlign: "center" }}
              >
                Upload Image for AI Diagnosis
              </Heading>

              <Text
                fontSize="lg"
                m="10px"
                alignSelf="center"
                style={{ textAlign: "center" }}
              >
                Upload a clear image of your skin condition here, to get an AI
                powered skin diagnosis.
              </Text>

              {/* <Button
                bg="#2977ff"
                color="whitesmoke"
                alignSelf="center"
                width="fit-content"
                marginTop="5"
                m="10px"
                onClick={handleSubmissionQuery}
              >
                Upload
              </Button> */}
              <ImageUpload handleAPI={handleAPI} />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Divider orientation="horizontal" />

      {modelResponse.length !== 0 &&
        Number(modelResponse.data.confidence) > 80 && (
          <>
            <Box
              padding={"55px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"x-large"}
                maxWidth={"55%"}
                textAlign={"center"}
                fontWeight={"400"}
              >
                Probably you are suffring from{" "}
                <Box as="span" fontWeight={"500"}>
                  {" "}
                  {modelResponse?.data?.prediction}{" "}
                </Box>
                with
                <Box as="span" fontWeight={"500"}>
                  {" "}
                  {modelResponse?.data?.confidence.slice(0, 5) + "%"}{" "}
                </Box>
                accuracy you should consult the doctor for further evaluation
              </Text>
            </Box>
          </>
        )}
      {modelResponse.length !== 0 &&
        Number(modelResponse.data.confidence) <= 80 && (
          <>
            <Box
              padding={"55px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"x-large"}
                maxWidth={"55%"}
                textAlign={"center"}
                fontWeight={"400"}
              >
                Please upload a clear and valid image of your skin disease
              </Text>
            </Box>
          </>
        )}
    </>
  );
};

export default SkinScan;
