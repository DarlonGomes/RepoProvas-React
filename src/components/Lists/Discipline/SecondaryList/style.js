import styled from "styled-components";

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
  gap: 10px;
`;

export const TestText = styled.div`
  a {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 300;
    color: #878787;
  }
`;

export const EmptyBox = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 300;
    color: #878787;
  }
`;
