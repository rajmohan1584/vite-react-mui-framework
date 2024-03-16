import { Paper } from "@mui/material";
import { Helmet } from "react-helmet-async";

const MUIWidtgets = () => {
  return (
    <>
      <Helmet>
        <title>MUI Widgets</title>
      </Helmet>
      <Paper elevation={3} style={{ width: "100vw", height: "100vh" }}></Paper>
    </>
  );
};

export default MUIWidtgets;
