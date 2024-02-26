import { Box, Button, Stack, Typography } from "@mui/material";

const FirstSection = () => {
  const drawerWidth = 300;
  return (
    <Stack
      sx={{
        position: "relative",
        width: {md:`calc(100% - ${drawerWidth}px)`},
        marginLeft:{md: `${drawerWidth}px`},
        backgroundImage:`url(/assets/image/slider-01.jpg.png)`,
        height:"70vh",
        alignItems:"center"
      }}
    >
      
      <Box
        sx={{position: "absolute", top:{xs:"20px",sm:"60px"} , width:{sm:"470px"} , left: "60px" }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            color: "#166534",
            backgroundImage: "linear-gradient(to right, #16A34A80 , #22C55E00)",
            width: {xs:"40%",sm:"35%"},
            borderRadius:"6px",
            textAlign:{md:"center"},
            fontWeight:600,
            mb:{xs:"20px",md:"37px"}
          }}
        >
          Weekend Discount
        </Typography>
        <Typography variant="h3" color="#39245F" sx={{fontWeight:700}}>
          Get the best quality products at the lowest prices
        </Typography>
        <Typography variant="body1" color="initial"sx={{mt:3}}>
          We have prepared special discounts for you on grocery products. Don't
          miss these opportunities...
        </Typography>
        <Stack sx={{flexDirection:"row",alignItems:"center",mt:3,gap:2}} >
        <Button variant="contained" size="medium" sx={{width:"30%",bgcolor:"#634C9F"}}>
        Shop Now
        </Button>
        <Stack sx={{flexDirection:"column"}}>
        <Stack sx={{flexDirection:"row",alignItems:"center",gap:2}}>
        <Typography variant="h6" color="#DC2626" sx={{fontWeight:800}}>$27.99</Typography>
            <Typography
              color="#111827"
              sx={{ textDecorationLine: "line-through",fontWeight:500 }}
            >
              $56.67
            </Typography>
        </Stack>
        <Typography variant="body1" color="#030712" sx={{fontWeight:400,fontSize:"11px"}}>Don't miss this limited time offer.</Typography>
        </Stack>
    
      
        </Stack>
      </Box>
    </Stack>
  );
};

export default FirstSection;
