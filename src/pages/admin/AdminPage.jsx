import { Box, Center, Divider, Text, useToast } from "@chakra-ui/react";
import Header from "../../components/elements/Header";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import AllPatient from "./AllPAtient";
import AllDoctor from "./AllDoctor";
import { LuLogOut } from "react-icons/lu";
import { LogOutUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast(); // Get the toast function

  const handleLogout = () => {
    toast({
      title: "logged out.",
      description: "You are logged out successfully.",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    console.log("logout");
    dispatch(LogOutUser());
    navigate("/");
  };
  const menuData = [
    {
      label: "Logout",
      link: "/",
    },
  ];
  return (
    <Box>
    <Box  mt="3" mb="3">
      <Text textAlign="center" color={"black"} fontSize={"18"} fontWeight={"bold"}>
          Logout <center><LuLogOut cursor="pointer"  onClick={handleLogout} size={20} /></center>
      </Text>
    </Box>
            
      {/* <Box mb={8}>
        <Header menuData={menuData} />
      </Box> */}
      {/* <Divider /> */}
      <Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          my={7}
          mx={8}
        >
          <Box width={"100%"}>
            <DataTabs data={tabData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function DataTabs({ data }) {
  return (
    <Tabs>
      <TabList gap={5}>
        {data.map((tab, index) => (
          <Tab
            fontSize={"lg"}
            fontWeight={"semibold"}
            key={index}
            pb={4}
            mx={2}
            transition={"all"}
            transitionDelay={"0.1s"}
            transitionDuration={"500ms"}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel
            transition={"all"}
            transitionDelay={"0.1s"}
            transitionDuration={"500ms"}
            p={4}
            key={index}
          >
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

const tabData = [
  {
    label: "Patients",
    content: <AllPatient />,
  },
  {
    label: "Doctors",
    content: <AllDoctor />,
  },
];
export default AdminPage;
