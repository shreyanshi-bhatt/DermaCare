import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DoctorDetail from "../components/DoctorDetail";
import PatientDetails from "../components/PatientDetail";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userDetail);

  console.log("user", user);

  return (
    <Box>
      {user.isDoctor ? (
        <DoctorDetail doctor={user} />
      ) : (
        <PatientDetails patient={user} />
      )}
    </Box>
  );
};

export default Dashboard;
