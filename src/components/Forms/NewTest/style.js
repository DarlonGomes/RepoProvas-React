import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  width: 88px;
  height: 36px;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  color: ${(props) => (props.status ? "#729BC3" : "#FFFFFF")};
  background: ${(props) => (props.status ? "#2E5D8C" : "#1976d2")};
  display: ${(props) => (props.shown ? "none" : "")};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: 0px;
`;
