import React from 'react'

//Import login functional
import { FormikErrors, Formik, Form } from "formik";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

//Import mui
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Niiaz-Gabidullin">
        Niiaz Gabidullin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

interface LoginFormValues {
  userName: string;
}

export default function Profile() {
  const initialValues: LoginFormValues = {
    userName: "",
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Profile
        </Typography>

        <Formik
          initialValues={initialValues}
          validate={(values) => {
            let errors: FormikErrors<LoginFormValues> = {};

            if (!values.userName) {
              errors.userName = "Required";
            } else if (values.userName.length < 3) {
              errors.userName =
                "Name should be of minimum 3 characters length";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                //type="email"
                //name="userEmail"
                autoComplete="email"
                autoFocus
                onChange={(event) => {
                  setFieldValue("userName", event.target.value);
                }}
                error={touched.userName && Boolean(errors.userName)}
                helperText={
                  touched.userName &&
                  errors.userName && <span>{errors.userName}</span>
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  )
}
