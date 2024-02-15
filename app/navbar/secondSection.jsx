"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const SecondSection = () => {
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const [curr, setCurr] = useState("USD");

  const handleChangeCurr = (event) => {
    setCurr(event.target.value);
  };
  return (
    
    <Box
    sx={{
      height: "41px",
      bgcolor: "#FFFFFF",
      display: "flex",
      justifyContent:"space-between",
      alignItems: "center",
      color: "#6B7280",
    }}
  >
    <Stack
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        fontWeight: 500,
        gap: 2,
        fontSize: "12px",
      
      }}
    >
      <Link className="link" href="#" color="inherit">
        About Us
      </Link>
      <Link className="link" href="#" color="inherit">
        My account{" "}
      </Link>
      <Link className="link" href="#" color="inherit">
        My account{" "}
      </Link>
      <Link className="link" href="#" color="inherit">
        Wishlist{" "}
      </Link>

      <Typography
    
        color="inherit"
        sx={{
          textDecoration: "none",
          mx: 1,
          fontWeight: 400,
          fontSize: "12px",
          ml: "12px",
        }}
      >
        We deliver to you every day from
        <span
          style={{
            color: "#EA580C",
            fontWeight: 700,
            marginLeft: "3px",
          }}
        >
          7:00 to 23:00
        </span>
      </Typography>
    </Stack>
    <Stack
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ height: "10px" }} />
          )}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={lang}
          label="English"
          onChange={handleChange}
          sx={{
            height: "15px",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            fontSize: "12px",
            color: "#6B7280",
            fontWeight: "500",
          }}
        >
          <MenuItem value="English">
            <em>English</em>
          </MenuItem>
          <MenuItem value={"Arabic"}>Arabic</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          IconComponent={() => (
            <KeyboardArrowDownIcon sx={{ height: "10px" }} />
          )}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={curr}
          label="USD"
          onChange={handleChangeCurr}
          sx={{
            height: "15px",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            fontSize: "12px",
            color: "#6B7280",
            fontWeight: "500",
            "& .muiselect-select:focus": {
              bgcolor: "red",
            },
          }}
        >
          <MenuItem value="USD">
            <em>USD</em>
          </MenuItem>
          <MenuItem value={"EGP"}>EGP</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="text"
        sx={{ fontWeight: "500", color: "#6B7280" }}
      >
        Order Tracking
      </Button>
    </Stack>
  </Box>
  );
}

export default SecondSection;
