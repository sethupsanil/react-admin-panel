import { Box } from "@mui/system";
import { GeographyChart, Header } from "../../components";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Chart" />
      <Box height="75vh">
            <GeographyChart isDashboard={false} />
          </Box>
    </Box>
  );
};
export default Geography;
