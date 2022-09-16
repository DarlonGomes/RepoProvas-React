import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { red } from "@mui/material/colors";

const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fromBottom 1000ms;
  margin-top: 50px;
  z-index: 1;
  a {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 30px;
  }
  @keyframes fromBottom {
    0% {
      top: 900px;
    }
    100% {
      top: 0px;
    }
  }
`;

const Banner = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 230px;
  h3 {
    font-family: "Lexend";
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin: 0;
  }

  p {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
  }
`;

const GitHubButton = styled.button`
  width: 700px;
  height: 36px;
  background: ${(props) =>
    props.disabled ? "#696F72" : "#424445"};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  cursor: pointer;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const SignInButton = styled.button`
  border-radius: 4px;
  width: 88px;
  height: 36px;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  color: ${props => props.status ? "#729BC3" : "#FFFFFF"};
  background: ${props => props.status ? "#2E5D8C" :  "#1976d2"};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    color: rgba(70, 115, 202, 0.8);
  }
`;

const MaterialInput = styled(TextField)`
  border-radius: 5px;
`;

const FormWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const Divider = styled.div`
  width: 329px;
  height: 1px;
  background: #c4c4c4;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

export {
  Ambient,
  Menu,
  Banner,
  SignInButton,
  MaterialInput,
  FormWrapper,
  Options,
  GitHubButton,
  Separator,
  Divider,
};
