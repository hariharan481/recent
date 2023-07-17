import React from "react";

import { Box, Button, fabClasses } from "@mui/material";
import { useState } from "react";

import PropTypes from "prop-types";

import "../App.css";
import "../styles/Main.css";

import CustomizedTables from "./Indextable";

import { Index1 } from "./Index1";
import DrugTable from "./Drug";

import DrugTable2 from "./DrugTable2";
import NeoplasmTable from "./Indextable";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const IndexSearch = () => {
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);
  const [showDrugs, setShowDrugs] = useState(false);
  const [showNeoplasm, setNeoplasm] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        classname="indexpage"
        sx={{
          height: "590px",
          width: "870px",
          display: "flex",
          border: "0.5px solid grey",
          ml: "10px",
        }}
      >
        {" "}
        <Button
          onClick={() => setShowIndex(!showIndx)}
          variant="contained"
          sx={{
            textAlign: "center",
            mt: "-30px",
            width: "100px",
            height: "30px",
            position: "absolute",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            textTransform: "lowercase",
            backgroundColor: "#90B2D8",
          }}
        >
          {showIndx ? "" : ""}
          Index
        </Button>
        <div
          style={{
            position: "absolute",
            marginTop: "30px",
            marginLeft: "80px",
          }}
        >
          {showIndx && <Index1 />}
        </div>
        <Button
          onClick={() => setShowTable(!showTable)}
          variant="contained"
          sx={{
            textAlign: "center",
            mt: "-30px",
            width: "100px",
            position: "absolute",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            height: "30px",
            ml: "100px",
            textTransform: "lowercase",
            backgroundColor: "#90B2D8",
          }}
        >
          {showTable ? "" : ""}
          Neoplasam
        </Button>
        <div
          style={{
            marginLeft: "80px",
          }}
        >
          {showTable && <NeoplasmTable />}
        </div>
        <Button
          onClick={() => setShowdrug(!showDrug)}
          variant="contained"
          sx={{
            textAlign: "center",
            mt: "-30px",
            width: "100px",
            position: "absolute",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            ml: "200px",
            textTransform: "lowercase",
            backgroundColor: "#90B2D8",
            height: "30px",
          }}
        >
          {showDrug ? "" : ""}
          Drugs
        </Button>
        <div
          style={{
            position: "absolute",
          }}
        >
          {showDrug && <DrugTable />}
        </div>
        *
        {/*
        <Button
          onClick={() => setShowDrugs(!showDrugs)}
          variant="contained"
          sx={{
            textAlign: "center",
            mt: "-30px",
            width: "100px",
            height: "30px",
            position: "absolute",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            textTransform: "lowercase",
            backgroundColor: "#90B2D8",
            ml: "100px",
          }}
        >
          {showDrugs ? "" : ""}
          drug
        </Button>
        <div
          style={{
            position: "absolute",
            marginTop: "30px",
          }}
        >
          {showDrugs && <DrugTable2 />}
        </div>

        */}
        {/* 
        <Button
          onClick={() => setNeoplasm(!showNeoplasm)}
          variant="contained"
          sx={{
            textAlign: "center",
            mt: "-30px",
            width: "100px",
            height: "30px",
            position: "absolute",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            textTransform: "lowercase",
            backgroundColor: "#90B2D8",
          }}
        >
          {showNeoplasm ? "" : ""}
          Neo
        </Button>
        <div
          style={{
            position: "absolute",
            marginTop: "30px",
            marginLeft: "80px",
          }}
        >
          {showNeoplasm && <NeoplasmTable />}
        </div>

        */}
      </Box>
    </div>
  );
};
