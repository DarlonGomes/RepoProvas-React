import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Header, OptionWrapper } from "./style";
import LogoutIcon from "@mui/icons-material/Logout";

export default function PageHeader() {
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
          <LogoutIcon sx={{ fontSize: "35px" }} />
        </OptionWrapper>
      </Header>
  );
}
