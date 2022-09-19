import { React, useState } from "react";
import Box from "@mui/material/Box";
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
import { signUp } from "../../../services/api";
import HandleAlert from "../../Alert";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { InputLabel, OutlinedInput, FormControl } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUp() {
  const [isDisabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);

    const form = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    try {
      await signUp(form);

      setDisabled(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setDisabled(false);
        setValues({
          email: "",
          password: "",
          confirmPassword: "",
          showPassword: false,
        });
        setMessage(err.response.data);
        setIsOpen(true);
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
      <HandleAlert isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
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
          <a href="https://p20-repoprovas.herokuapp.com/user/sign-in/github">
            Sign in with GitHub
            <GitHubIcon></GitHubIcon>
          </a>
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
              <InputLabel htmlFor="outlined-adornment-email">
                Email *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
                label="Email"
                disabled={isDisabled}
                style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
                autoComplete="off"
              />
            </FormControl>
            <FormControl
              sx={{ marginBottom: "25px", width: "700px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-input"
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
                disabled={isDisabled}
                style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
                autoComplete="off"
              />
            </FormControl>
            <FormControl sx={{ width: "700px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-confirmPassword">
                Confirm password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirmPassword"
                type={values.showPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirmPassword visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                disabled={isDisabled}
                style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
                autoComplete="off"
              />
            </FormControl>

            <Options>
              <Link to="/">Already have an account? Sign in</Link>
              <SignInButton status={isDisabled}>Sign Up</SignInButton>
            </Options>
          </Box>
        </FormWrapper>
      </Menu>
    </Ambient>
  );
}
