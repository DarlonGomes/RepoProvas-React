import React from "react";


export default function Test ({test}) {


    return(
        <ListItemButton >
            <ListItemIcon>
              <RadioButtonUnchecked sx={{fontSize: "10px"}}/>
            </ListItemIcon>
            <ListItemText  sx={{marginLeft: "-30px"}}>{test?.name || "Eai"}</ListItemText>
          </ListItemButton>
    )
}