import React from "react";

import { Box, Stack, Typography, Tab, Tabs } from "@mui/material";
import { useState } from "react";

import Codedet from "./Codedet";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import "../App.css";
import "../styles/Main.css";

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

export const TabluarSearch = ({ isValueSelected }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        classname="Tabularsearch"
        sx={{
          height: "590px",
          width: "100%",
          display: "flex",
          backgroundColor: "white",
          border: "0.5px solid grey",
        }}
      >
        {/* <Box
          className="wrapper"
          sx={{
            height: "20px",
            width: "65%",
            mt: "10px",
          }}
        >
          <Typography
            className="tabularsearch"
            variant="subtitle1"
            fontFamily={"sans-serif"}
            noWrap
            width="9px"
            sx={{
              backgroundColor: "#c8e2dd",
              color: "#4185d2",
              mt: "-10px",
            }}
          >
            Tabular Search
          </Typography>
        </Box>
        */}
        <Stack direction={"column"} ml={-30} mt={10}>
          {" "}
          <Typography
            className="codedetails"
            variant="subtitle1"
            fontFamily={"sans-serif"}
            color={" #4185d2"}
            fontWeight={600}
            sx={{
              borderBottom: "0.3px solid grey",
              width: "73%",
              marginLeft: "247px",
            }}
          >
            Code details
          </Typography>
          <Box sx={{ marginRight: "20px", marginLeft: "50px" }}>
            {isValueSelected && <Codedet />}
          </Box>
          <Box
            sx={{
              height: "300px",
              width: "100%",
              /// backgroundColor: "white",
            }}
          >
            <Box
              className="tabs"
              sx={{
                height: "35px",
                width: "670px",
                backgroundColor: "#c8e2dd",
                color: "black",
                fontFamily: "sans-serif",
                fontSize: "13px",
                marginLeft: "250px",
                mt: "20px",

                textAlign: "center",
              }}
            >
              <Stack direction={"row"} gap={"70px"} ml={5}>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      marginTop: "-13px",
                    }}
                  >
                    <Tabs
                      textColor="primary"
                      indicatorColor="primary"
                      className="tabs"
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      sx={{
                        marginLeft: "-45px",
                        "& .MuiTab-root.Mui-selected": {
                          color: "black",
                          textAlign: "center",
                          fontWeight: 520,
                          transition: "1s",
                        },
                      }}
                      TabIndicatorProps={{
                        style: {
                          marginLeft: "8px",
                          transition: "1s",
                          height: "70%",
                          backgroundColor: "#203fac",
                          opacity: 0.3,
                        },
                      }}
                    >
                      <Tab
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          cursor: "pointer",
                          variant: "subtitle1",
                          fontWeight: "700px",
                          color: "#4185d2",
                          textTransform: "none",
                          width: "150px",
                        }}
                        label=" Code notes"
                        {...a11yProps(0)}
                      />
                      <Tab
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          cursor: "pointer",
                          variant: "subtitle1",
                          fontWeight: "700px",
                          color: "#4185d2",
                          textTransform: "none",
                          width: "150px",
                        }}
                        variant="subtitle1"
                        fontWeight={"700"}
                        label="Section notes"
                        {...a11yProps(1)}
                      />
                      <Tab
                        className="tabs"
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          cursor: "pointer",
                          variant: "subtitle1",
                          fontWeight: "700px",
                          color: "#4185d2",
                          textTransform: "none",
                          width: "150px",
                        }}
                        variant="subtitle1"
                        fontWeight={"700"}
                        label="Chapter notes"
                        {...a11yProps(2)}
                      />
                      <Tab
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{
                          cursor: "pointer",
                          variant: "subtitle1",
                          fontWeight: "700px",
                          color: "#4185d2",
                          textTransform: "none",
                          width: "150px",
                        }}
                        variant="subtitle1"
                        fontWeight={"700"}
                        label="Chapter guidlines"
                        {...a11yProps(3)}
                      />
                    </Tabs>
                  </Box>
                  <div
                    className="tabpanels"
                    style={{
                      height: "180px",
                      width: "600px",
                      overflowY: "scroll",
                      paddingLeft: "30px",
                    }}
                  >
                    {" "}
                    <CustomTabPanel value={value} index={0}>
                      <Codenotes />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <Sectionnotes />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <Chapternotes />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}></CustomTabPanel>
                  </div>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
