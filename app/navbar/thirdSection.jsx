import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box } from "@mui/material";

const ThirdSection = () => {
  return (
    <Stack
      sx={{
        height:{md:"78px"} ,
        flexDirection: {xs:"column",md:"row"},
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        display:{md:"flex"},
      mt:{xs:3,md:0},
      mb:{xs:5,sm:0}
      }}
    >
      <img
        src={"/assets/image/grogin-logo-dark.png"}
        alt="logo"
        loading="lazy"
        width={"142px"}
        height={"34px"}
        
      />
      <Box sx={{display:"flex"}}>
      <RoomOutlinedIcon sx={{ width: "26px", height: "26px" }} />

<Typography
  variant="body1"
  color="#6B7280"
  sx={{ fontSize: "11px", fontWeight: 400, width: "70px" }}
>
  Deliver to
  <span
    
    color="initial"
    style={{ fontSize: "13px", fontWeight: 500 ,display:"block"}}
  >
    all
  </span>
</Typography>

<Paper
  component="form"
          sx={{
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: {xs:"270px",sm:"450px"},
    height: "46px",
    bgcolor: "#E5E7EB",
  }}
>
  <InputBase
    sx={{ ml: 1, flex: 1 }}
    placeholder="Search for products, categories or brands..."
    inputProps={{ "aria-label": "search google maps" }}
  />
  <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
    <SearchIcon />
  </IconButton>
</Paper>
      </Box>

    <Box sx={{display:{xs:"none",md:"flex"}}}>
    <IconButton
        type="button"
        sx={{ width: "26px", height: "26px" }}
        aria-label="search"
      >
        <PersonIcon />
      </IconButton>
      <Stack>
        <Button
          variant="text"
          sx={{
            fontSize: "11px",
            fontWeight: 400,
            width: "90px",
            display: "block",
            color: "#6B7280",
          }}
        >
          Sign In
          <Typography
            color="initial"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              display: "block",
            }}
          >
            Account
          </Typography>
        </Button>
      </Stack>
      <IconButton
        type="button"
        sx={{ width: "26px", height: "26px" }}
        aria-label="search"
      >
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton
        type="button"
        sx={{ width: "26px", height: "26px" }}
        aria-label="search"
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Box>
    </Stack>
  );
};

export default ThirdSection;
