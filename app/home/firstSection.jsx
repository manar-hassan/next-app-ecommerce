import { Box, Button, Stack, Typography } from "@mui/material";

const FirstSection = () => {
  const drawerWidth = 300;
  return (
    <Stack
  
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { md: `${drawerWidth}px` },
        backgroundImage: `url(/assets/image/slider-01.jpg.png)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        justifyContent:"center"
      }}
    >
      <Stack
    
        sx={{
          maxWidth: { md: "370px", sm: "300px", xs: "220px" },
          m: { xs: 5, sm: 8, md: 10 },
        

        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            color: "#166534",
            backgroundImage: "linear-gradient(to right, #16A34A80 , #22C55E00)",
            borderRadius: "6px",
            textAlign: "center",
            fontWeight: 600,
            mb: 2,
            maxWidth: { xs: "100px", sm: "150px", md: "200px" },
            fontSize: { xs: "10px", sm: "14px", md: "16px" },
          }}
        >
          Weekend Discount
        </Typography>
        <Typography
          variant="h3"
          color="#39245F"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "14px", sm: "24px", md: "40px" },
          }}
        >
          Get the best quality products at the lowest prices
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            mt: { md: 1 },
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
          }}
        >
          We have prepared special discounts for you on grocery products. Don't
          miss these opportunities...
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            mt: { md: 3 },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            size="medium"
            sx={{
              bgcolor: "#634C9F",
              fontSize: { xs: "8px", sm: "12px", md: "16px" },
            }}
          >
            Shop Now
          </Button>
          <Stack sx={{ flexDirection: "column" }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h6"
                color="#DC2626"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                }}
              >
                $27.99
              </Typography>
              <Typography
                color="#111827"
                sx={{
                  textDecorationLine: "line-through",
                  fontWeight: 500,
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                $56.67
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color="#030712"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "8px", sm: "10", md: "12px" },
              }}
            >
              Don't miss this limited time offer.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FirstSection;
