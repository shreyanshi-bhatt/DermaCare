import React, { useEffect, useState } from "react";
import axios from "axios";
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

import { IoIosCloseCircle } from "react-icons/io";
const ImageUpload = ({ handleAPI }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(image, "img");
  }, [image]);

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  // function handleAPI() {
  //   if (!image) {
  //     console.log("No image selected!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", image);

  //   axios
  //     .post("http://192.168.192.105:3000/predict", formData)
  //     .then((res) => {
  //       console.log(res);
  //       setModalResponse(res);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading image:", error);
  //     });
  // }

  return (
    <Box style={{ margin: "0 auto" }}>
      <label>
        <Box display={"flex"} flexDirection={"row"} gap={5}>
          <Box
            display={"flex"}
            margin={"0"}
            padding={3}
            height={10}
            width={"auto"}
            marginTop={3}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"#f0fbff"}
            rounded={"md"}
            fontWeight={"bolder"}
            gap={2}
          >
            <Text cursor={!image ? "pointer" : ""} fontWeight={"500"}>
              {image ? image.name : "Select Image"}
            </Text>
            {image && (
              <Box onClick={() => setImage(null)} cursor={"pointer"}>
                <IoIosCloseCircle size={22} color="red" />
              </Box>
            )}
          </Box>

          <input
            type="file"
            disabled={image}
            name="user_image"
            onChange={handleImage}
            style={{
              display: "none",
            }}
          />
          <Button
            bg="#2977ff"
            color="whitesmoke"
            alignSelf="center"
            width="fit-content"
            marginTop="5"
            m="10px"
            onClick={() => handleAPI(image)}
          >
            Upload
          </Button>
        </Box>
      </label>
    </Box>
  );
};

export default ImageUpload;
