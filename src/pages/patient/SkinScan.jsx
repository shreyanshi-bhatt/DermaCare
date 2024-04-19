import React from 'react'
import {
    Box,
    Button,
    Input,
    Flex,
    Heading,
    Text,
    Image,
  } from "@chakra-ui/react";
import ImageUpload from '../../components/elements/ImageUpload';

const SkinScan = () => {
    const handleSubmissionQuery = () => {
        console.log("Pic Uploaded");
      };
  return (
    <>
      <Box>
        <Flex flexDir="row" justifyContent="space-around">
          <Box p={4} margin="10px" padding="10px" maxWidth="50%">
            <Flex flexDir={"column"}>
              <Heading as="h3" size="lg" m="10px" style={{ textAlign: "center" }}>
                Upload Image for AI Diagnosis
              </Heading>

              <Text fontSize="lg" m="10px" alignSelf="center" style={{ textAlign: "center" }}>
                Upload a clear image of your skin condition here, to get an AI powered skin diagnosis.
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
              <ImageUpload />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default SkinScan