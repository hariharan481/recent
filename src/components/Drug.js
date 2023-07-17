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
import { Padding } from "@mui/icons-material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    padding: "0px 12px 0px 0px",
    border: "1px solid grey",
    textAlign: "center",
    width: "30px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: "30px",
    border: "1px solid grey",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));
export default function DrugTable() {
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
  }, [global.values?.code]);
  console.log("our drug is", drug);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [search, setSearch] = useState("");
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
          position: "absolute",
          width: "845px",
          ml: "10PX",
          height: "300px",
          mt: "50PX",
        }}
      >
        <Table
          sx={{
            Width: "150px",
            height: "450px",
            position: "absolute",
            ml: "-10px",
          }}
        >
          <TableHead>
            <TableRow>
              <div>
                <div className="table">
                  <Box
                    sx={{
                      width: "100px",
                      height: "20%",
                    }}
                  >
                    <Stack direction={"row"}>
                      <Box
                        sx={{ width: "120px", height: "4px", marginTop: "1px" }}
                      >
                        <TextField
                          sx={{
                            width: "120px",
                            "& input": {
                              height: "4px",
                              bgcolor: "background.paper",
                              color: (theme) =>
                                theme.palette.getContrastText(
                                  theme.palette.background.paper
                                ),
                            },
                          }}
                          placeholder="filter"
                          onChange={(e) => setSearch(e.target.value)}
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
          <TableHead sx={{ height: "2px" }}>
            <TableRow>
              <StyledTableCell width={"20px"} align="center">
                D-Index
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                Accidental,Unindentional
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                Intentional,Selfharm
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                Assault
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                Undetermined
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                AdverseEffect
              </StyledTableCell>
              <StyledTableCell width={"20px"} align="center">
                underDosing
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "10px" }}>
            {drug
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    align="center"
                    width={"20px"}
                  >
                    {row.title}
                  </StyledTableCell>
                  {row.code.split(",").map((value, index) => (
                    <StyledTableCell
                      key={index}
                      sx={{
                        border: "1px solid grey",
                        height: "20px",
                      }}
                      align="center"
                    >
                      {value.trim()}{" "}
                      {/* Use .trim() to remove any leading/trailing spaces */}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
