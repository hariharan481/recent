import {
  Autocomplete,
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import { Fragment } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Tableheader = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <div>
      <div className="table">
        <Box
          sx={{
            width: "100px",
            height: "50%",
          }}
        >
          <Stack direction={"row"}>
            <Fragment>
              <Autocomplete
                id="users"
                defaultValue={null}
                getOptionLabel={(result) =>
                  `${result.id} ${result.description}`
                }
                options={result}
                sx={{
                  display: "inline-block",
                  "& input": {
                    height: "5px",
                    bgcolor: "background.paper",

                    color: (theme) =>
                      theme.palette.getContrastText(
                        theme.palette.background.paper
                      ),
                  },
                }}
                isoptionequalToValue={(option, value) =>
                  option.description === value.description
                }
                noOptionsText={"PLEASE ENTER VALID CODES"}
                open={open}
                onInputChange={(_, value) => {
                  if (value.length === 0) {
                    if (open) setOpen(false);
                  } else {
                    if (!open) setOpen(true);
                  }
                }}
                onClose={() => setOpen(false)}
                popupIcon={<SearchIcon sx={{ marginLeft: "60px" }} />}
                onChange={(event, newValue) => {
                  setFirst(newValue);
                  setIsValueSelected(true);
                }}
                autoSelect
                renderOption={(props, result) => (
                  <Box {...props} key={result.id}>
                    {result.id} {result.description}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={handleChange}
                    placeholder="filter"
                    sx={{
                      width: "110px",
                    }}
                  />
                )}
              />
            </Fragment>
            <Box>
              {" "}
              <Typography
                variant="subtitle1"
                sx={{
                  backgroundColor: "#c8e2dd",
                  width: "200px",
                  textAlign: "center",
                  height: "37px",
                  ml: "1px",
                }}
              >
                maligant
              </Typography>
            </Box>
            <div className="box1">
              <Box
                sx={{
                  height: "30px",
                  width: "90px",
                  backgroundColor: "white",

                  height: "35px",
                }}
              ></Box>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <Box
                sx={{
                  height: "30px",
                  width: "83px",
                  backgroundColor: "white",

                  height: "35px",
                }}
              ></Box>
            </div>

            <Box>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  backgroundColor: "#c8e2dd",
                  width: "220px",
                  textAlign: "center",
                  height: "37px",
                  marginLeft: "5px",
                }}
              >
                Behaviour
              </Typography>
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  );
};
