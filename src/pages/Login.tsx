//Import react
import * as React from "react";
import { useDispatch } from "react-redux";

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

/**
 * Copyright
 */
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
  userEmail: string;
  userPass: string;
  userRemember: boolean;
}

//Main function
export default function Login() {
  //const dispatch = useDispatch;

  const initialValues: LoginFormValues = {
    userEmail: "",
    userPass: "",
    userRemember: false,
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
            Sign in
          </Typography>

          <Formik
            initialValues={initialValues}
            validate={(values) => {
              let errors: FormikErrors<LoginFormValues> = {};

              if (!values.userEmail) {
                errors.userEmail = "Required";
              } else {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.userEmail
                  )
                ) {
                  errors.userEmail = "Invalid email address";
                }
              }

              if (!values.userPass) {
                errors.userPass = "Required";
              } else if (values.userPass.length < 3) {
                errors.userPass =
                  "Password should be of minimum 3 characters length";
              }
              return errors;
            }}
            onSubmit={(values, actions) => {
              if (values.userEmail == "admin" && values.userPass == "12345") {
                console.log(values);
              }
              actions.setSubmitting(false);
            }}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userEmail"
                  label="Email Address"
                  //type="email"
                  //name="userEmail"
                  autoComplete="email"
                  autoFocus
                  onChange={(event) => {
                    setFieldValue("userEmail", event.target.value);
                  }}
                  error={touched.userEmail && Boolean(errors.userEmail)}
                  helperText={
                    touched.userEmail &&
                    errors.userEmail && <span>{errors.userEmail}</span>
                  }
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  //name="userPass"
                  label="Password"
                  type="password"
                  id="userPass"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setFieldValue("userPass", event.target.value);
                  }}
                  error={touched.userPass && Boolean(errors.userPass)}
                  helperText={
                    touched.userPass &&
                    errors.userPass && <span>{errors.userPass}</span>
                  }
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  onChange={(e) => {
                    setFieldValue("userRemember", !values.userRemember);
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
