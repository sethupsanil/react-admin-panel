import { useTheme } from "@emotion/react";
import { Backdrop, Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Header } from "../../components";
import { tokens } from "../../theme";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
    signIn({
      token: "sethu",
      tokenType: "Bearer",
      expiresIn: 3600,
      authState: values,
    });
  };
  useEffect(() => {
    if (isAuthenticated()) {
        navigate("/");
    }
  });

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        height={"100vh"}
        overflow="hidden"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          p="10px"
          width={"450px"}
          display="flex"
          flexDirection={"column"}
          borderRadius="5px"
          backgroundColor={colors.primary[600]}
        >
          <Header title="Login" />
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="10px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("Password required"),
});
const initialValues = {
  email: "sethu@gmail.com",
  password: "12345",
};
export default Login;
