import { React, useContext } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Header, OptionWrapper } from "./style";
import LogoutIcon from "@mui/icons-material/Logout";
import { HandlerContext } from "../../context/handleProvider";
import { useNavigate } from "react-router-dom";
export default function PageHeader() {
  const { removeLocal } = useContext(HandlerContext);
  const navigate = useNavigate();
  function handleUserOrder() {
    const response = window.confirm("Do you want to log off ?");
    if (response) {
      removeLocal();
      navigate("/");
    }
  }
  return (
    <Header>
      <OptionWrapper>
        <div className="logo">
          <AssignmentIcon
            style={{ color: "#3F61D7", fontSize: "60px", marginRight: "5px" }}
          />

          <h3>
            Repo<span style={{ color: "#3F61D7" }}>Provas</span>
          </h3>
        </div>
        <LogoutIcon
          sx={{ fontSize: "35px" }}
          onClick={() => handleUserOrder()}
        />
      </OptionWrapper>
    </Header>
  );
}
