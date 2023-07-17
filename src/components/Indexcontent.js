import { Box, Button } from "@mui/material";
import React from "react";
import "../styles/Indexcontent.css";

export const Indexcontent = () => {
  return (
    <div>
      <div className="indexcontainer">
        <Box
          direction={"row"}
          width={"610px"}
          height={"7%"}
          justifyContent={"space-between"}
        >
          {/*   <Button
            variant="contained"
            className=""
            sx={{
              height: "17px",
              width: "80px",
            }}
        ></Button>*/}
          <input type="text" placeholder="Search"></input>

          <Button
            disableElevation
            disableTouchRipple
            disableFocusRipple
            variant="contained"
            className="buttons"
            sx={{
              height: "35px",
              width: "120px",
              ml: "15px",
              borderRadius: "60px",
              backgroundColor: "#203fac",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
              textTransform: "lowercase",
            }}
          >
            Show Table
          </Button>
        </Box>
      </div>
    </div>
  );
};
