import { useTheme } from "@emotion/react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Header } from "../../components";
import { mockDataContacts } from "../../data/mockData";
import useHttp from "../../hooks/useHttp";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [contactsList, setContactsList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "postId",
      headerName: "Post Id",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    
  ];
  const { requestApi, data, error, loading } = useHttp();

  useEffect(() => {
    const requestConfig = {
      method: "get",
      redirect: "follow",
      url: "https://jsonplaceholder.typicode.com/comments",
    };

    requestApi(requestConfig, (response) => {
      setContactsList(response.data);
      setShowLoader(response.loading)
    });
  }, []);
  return (
    <Box m="20px">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
            rows={contactsList}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
      </Box>
    </Box>
  );
};
export default Contacts;
