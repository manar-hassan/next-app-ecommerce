import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
const drawerWidth = 300;

const FourthSection = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        ml: { md: `${drawerWidth}px` },
        width: {md:`calc(100% - ${drawerWidth}px)`},
        height:"48px",
        display:{xs:"none",sm:"flex"},
        
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            fontWeight: 600,
            color: "#634C9F",
          }}
        >
          Home
        </Button>

        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            fontWeight: 600,

            color: "#030712",
          }}
        >
          Shop
        </Button>

        <Button
          variant="text"
          sx={{
            fontWeight: 600,

            color: "#030712",
          }}
        >
          Beverages
        </Button>

        <Button
          variant="text"
          sx={{
            fontWeight: 600,

            color: "#030712",
          }}
        >
          Contact
        </Button>
      </Stack>
      <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            fontWeight: 600,

            color: "#030712",
          }}
        >
          Trending Products
        </Button>

        <Button
          variant="text"
          sx={{
            fontWeight: 600,
            backgroundImage: "linear-gradient(to right, #DC2626 , #EA580C)",
            color: "#FFFFFF",
            height: "20px",
            width: "37.47px",
          }}
        >
          SALE
        </Button>
        <KeyboardArrowDownIcon sx={{ color: "#DC2626" }} />
      </Stack>
    </Stack>
  );
};

export default FourthSection;
