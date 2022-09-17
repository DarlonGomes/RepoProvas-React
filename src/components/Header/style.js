import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  padding: 50px 80px 30px 80px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 34px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
  }
  h3 {
    font-family: Lexend;
    font-size: 36px;
    font-weight: 700;
    margin: 0;
  }
`;
