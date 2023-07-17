import { Divider } from "@mui/material";
import React from "react";
import "../styles/Table2.css";
export const Table2 = () => {
  return (
    <div>
      <div className="tableTop">
        <div className="Tablecontent">
          <p>back reference:</p>
          <Divider
            sx={{
              width: "920px",
            }}
          />
          <p>Alert:</p>
          <Divider
            sx={{
              width: "920px",
              color: "blue",
            }}
          />
          <p>Clinical defination:</p>
          <Divider
            sx={{
              width: "920px",
              color: "blue",
            }}
          />
          <p>Code history:</p>
          <Divider
            sx={{
              width: "920px",
              color: "blue",
            }}
          />
        </div>
      </div>
    </div>
  );
};
