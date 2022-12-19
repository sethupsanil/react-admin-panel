import { Box } from "@mui/material";
import { BarChart, Header } from "../../components";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar" subtitle="Chart" />
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};
export default Bar;
