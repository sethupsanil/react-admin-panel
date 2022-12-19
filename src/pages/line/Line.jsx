import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";

const Line=()=>{
    return (
        <Box m="20px">
        <Header title="Line" subtitle="Chart" />
        <Box height="75vh">
          <LineChart isDashboard={false} />
        </Box>
      </Box>
    )
}
export default Line;