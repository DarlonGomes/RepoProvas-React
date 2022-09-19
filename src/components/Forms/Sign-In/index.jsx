/* eslint-disable no-unused-vars */
import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Ambient,
  Menu,
  Banner,
  SignInButton,
  FormWrapper,
  Options,
  GitHubButton,
  Divider,
  Separator,
} from "./style";
import { signIn } from "../../../services/api";
import HandleAlert from "../../Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {InputLabel, OutlinedInput, FormControl, InputAdornment, IconButton, Box} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HandlerContext } from "../../../context/handleProvider";
import { storeDataInLocalStorage } from "../../../utils";
export default function SignIn() {
  const [isDisabled, setDisabled] = useState(false);
  const { isAlertOpen, setIsAlertOpen } = useContext(HandlerContext);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);

    const form = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await signIn(form);
      storeDataInLocalStorage(response.data.config);
      setTimeout(() => {
        setDisabled(false);
        navigate("/home");
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setDisabled(false);
        setValues({
          email: "",
          password: "",
          showPassword: false,
        });
        setMessage(err.response.data);
        setIsAlertOpen(true);
      }, 1000);
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Ambient>
      <HandleAlert
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        message={message}
      />
      <Menu>
        <Banner>
          <AssignmentIcon
            style={{ color: "#3F61D7", fontSize: "60px", marginRight: "5px" }}
          />

          <h3>
            Repo<span style={{ color: "#3F61D7" }}>Provas</span>
          </h3>
        </Banner>
        <GitHubButton disabled={isDisabled}>
          Sign in with GitHub
          <GitHubIcon></GitHubIcon>
        </GitHubButton>
        <Separator>
          <Divider />
          or
          <Divider />
        </Separator>
        <FormWrapper>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormControl
              sx={{ marginBottom: "25px", width: "700px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
                label="Email"
                disabled={isDisabled}
                autoComplete="off"
                style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
              />
            </FormControl>
            <FormControl sx={{ width: "700px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                autoComplete="off"
                disabled={isDisabled}
                style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
              />
            </FormControl>

            <Options>
              <Link to="/sign-up">Doesn't have an account? Sign up</Link>
              <SignInButton status={isDisabled}>Sign In</SignInButton>
            </Options>
          </Box>
        </FormWrapper>
      </Menu>
    </Ambient>
  );
}
