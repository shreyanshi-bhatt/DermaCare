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
import { SERVER_API } from "../../config";
import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

const UploadImageReport = () => {
  const [modelResponse, setModalResponse] = useState([]);
  const navigate = useNavigation();

  const timelineRedux = useSelector((state) => state.user.userDetail.Timeline);

  console.log(timelineRedux[timelineRedux.length - 1]._id, "timelineRedux");

  function handleAPI(image) {
    if (!image) {
      console.log("No image selected!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData, "fd");

    axios
      .post(
        `${SERVER_API}/upload-image/${
          timelineRedux[timelineRedux.length - 1]._id
        }`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // setModalResponse(res);
        console.error("uploading image: successfully");
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }

  return (
    <>
      <Box marginTop={12} padding={12}>
        <Flex flexDir="row" justifyContent="space-around">
          <Box p={4} margin="10px" padding="10px" maxWidth="50%">
            <Flex flexDir={"column"}>
              <Heading
                as="h3"
                size="lg"
                m="10px"
                style={{ textAlign: "center" }}
              >
                Upload Image of your report or skin
              </Heading>

              <Text
                fontSize="lg"
                m="10px"
                alignSelf="center"
                style={{ textAlign: "center" }}
              >
                Upload a clear image of your skin condition or report here, Wait
                for response from the doctor.
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
    </>
  );
};

export default UploadImageReport;
