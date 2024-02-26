import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const FirstSetion = () => {
  return (
    <Box
    sx={{
      height: {l:"41px"},
      bgcolor: "#634C9F",
      display: "flex",
      flexDirection:{xs:"column",md:"row"},
      justifyContent:"space-around",
      alignItems: "center",
      textAlign:"center",
      color: "#FFFFFF",
    }}
  >
    <Typography variant="body1" color="inherit">
      FREE delivery & 40% Discount for next 3 orders! Place your 1st
      order in.
    </Typography>
    <Stack
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Typography variant="body1" color="inherit">
        Until the end of the sale:
      </Typography>
      <Typography variant="body1" color="inherit" sx={{ mx: 1 }}>
        47 days
      </Typography>
      <Typography variant="body1" color="inherit" sx={{ mx: 1 }}>
        06 hours
      </Typography>
      <Typography variant="body1" color="inherit" sx={{ mx: 1 }}>
        55 minutes
      </Typography>
    </Stack>
  </Box>
  );
}

export default FirstSetion;
