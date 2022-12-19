import { Box } from "@mui/material";
import { Header, ProgressCircle } from "../../components";

const Pie=()=>{
    return (
        <Box m="20px">
        <Header title="Pie" subtitle="Chart" />
        <Box height="75vh">
          <ProgressCircle  />
        </Box>
      </Box>
    )
}
export default Pie;