import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { Pagin } from "./pagination";
import { Fragment } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    height: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height: 1,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));
export default function DrugTable2() {
  const [drug, setDrug] = useState(null);
  const [codes, setCodes] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/drug`);
          if (response.ok) {
            const data = await response.json();
            setDrug(data);
            const codeValues = global.values.code.split(",");
            setCodes(codeValues);
          } else {
            console.error("Failed to fetch data");
          }
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values.code]);
  console.log("our neo is", drug);
  console.log("our drug is", drug);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <Box
        sx={{
          height: "20px",
          width: "100%",
          textAlign: "left",

          ml: "10px",
        }}
      >
        <Pagin />
      </Box>
      <TableContainer
        sx={{
          display: "flex",
          position: "absolute",
          width: "980px",

          overflowY: "scroll",
        }}
      >
        <Table sx={{ minWidth: "100px" }}>
          <TableHead
            sx={{
              height: "7%",
              border: "1px solid grey",
              fontSize: "12px",
            }}
          >
            <TableRow
              sx={{
                border: "1px solid grey",
              }}
            >
              <div>
                <div className="table">
                  <Box
                    sx={{
                      width: "100px",
                      height: "20%",
                    }}
                  >
                    <Stack direction={"row"}>
                      <Box>
                        <Autocomplete
                          id="users"
                          defaultValue={null}
                          getOptionLabel={(result) =>
                            `${result.id} ${result.description}`
                          }
                          options={result}
                          sx={{
                            width: "150px",
                            backgroundColor: "white",
                            mt: "0.5px",
                            ml: "0.1px",
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
                            />
                          )}
                        />
                      </Box>
                      <Box>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{
                            backgroundColor: "#C8E2DD",
                            width: "168px",
                            textAlign: "center",
                            height: "37px",
                          }}
                        >
                          maligant
                        </Typography>
                      </Box>
                      <div className="box1">
                        <Box
                          sx={{
                            height: "30px",
                            width: "100px",
                            backgroundColor: "white",
                            border: "1px solid black",
                            height: "35px",
                          }}
                        ></Box>
                      </div>
                      <div>
                        <Box
                          sx={{
                            height: "30px",
                            width: "100px",
                            backgroundColor: "white",
                            border: "1px solid black",
                            height: "35px",
                          }}
                        ></Box>
                      </div>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          color="black"
                          sx={{
                            backgroundColor: "#C8E2DD",
                            width: "180px",
                            textAlign: "center",
                            height: "37px",
                          }}
                        >
                          Behaviour
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </div>
              </div>
            </TableRow>
          </TableHead>
          <TableHead
            sx={{
              height: "2px",
              borderTop: "1px solid grey",
              borderLeft: "1px solid grey",
              borderRight: "1px solid grey",
            }}
          >
            <TableRow>
              <StyledTableCell>D-Index</StyledTableCell>
              <StyledTableCell align="right">
                Accidental,Unindentional
              </StyledTableCell>
              <StyledTableCell align="right">
                Intentional,Selfharm
              </StyledTableCell>
              <StyledTableCell align="right">Assault</StyledTableCell>
              <StyledTableCell align="right">Undetermined</StyledTableCell>
              <StyledTableCell align="right">AdverseEffect</StyledTableCell>
              <StyledTableCell align="right">underDosing</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drug?.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
