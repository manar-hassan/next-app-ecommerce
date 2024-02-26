import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import React from "react";

const SeventhSection = () => {
  const myList = [
    {
      title: "Only This Week",
      paragraph: "Make your grocery shopping easy with us",
      text: "Only this week. Don’t miss...",
      icon: <img src={"/assets/image/banner-08.jpg.png"} alt="Payment" />,
      path: "/",
    },
    {
      title: "Only This Week",
      paragraph: "Get your everyday needs here with us",
      text: "A different kind of grocery store",
      icon: <img src={"/assets/image/banner-09.jpg.png"} alt="stocks" />,
      path: "/pages",
    },
  ];
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        gap: 2,
        mx:10
      }}
    >
      {myList.map((item) => {
        return (
          <Box
            sx={{
              backgroundImage: `url("/assets/image/banner-09.jpg.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              flex: "50%",
              mb: { xs: 2 },
            }}
          >
            <Stack sx={{ pt: 3, ml: 2 }}>
              <Typography
                variant="body1"
                color="#7C2D12"
                sx={{
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: 600,
                  mb: "10px",
                  bgcolor: "#FFEDD5",
                  width: "130px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#111827"
                sx={{
                  fontWeight: 700,
                  fontSize: "28px",
                  width: { xs: "320px", sm: "auto", md: "320px" },
                  height: { sm: "200px", md: "auto" },
                }}
              >
                {item.paragraph}
              </Typography>
              <Typography variant="body1" color="#111827" sx={{ mt: 1 }}>
                {item.text}
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                p: 3,
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                size="medium"
                sx={{
                  bgcolor: "#FFFFFF",
                  color: "#212529",
                  border: "#E5E7EB",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                Shop Now
                <img
                  src={"/assets/image/icon.png"}
                  alt="Baby"
                  style={{ marginLeft: "7px" }}
                />
              </Button>
            </Stack>
          </Box>
        );
      })}
    </Box>
    //   <Box sx={{ mt: 5 ,display: "flex",
    //   gridTemplateColumns: { sm: "auto", md: "auto auto" },
    //   gap: 1,}}>
    //   {myList.map((item) => {
    //     return (
    //       <Box sx={{ position: "relative",flex:"50%"}}>
    //         {item.icon}
    //         <Box
    //           sx={{
    //             position: "absolute",
    //             top: "20px",
    //             // width: "470px",
    //             left: "30px",
    //           }}
    //         >
    //           <Typography
    //             variant="body1"
    //             color="#EA580C"
    //             sx={{
    //               // width: "35%",
    //               borderRadius: "6px",
    //               textAlign: "left",
    //               fontWeight: 500,
    //               mb: "10px",
    //             }}
    //           >
    //             {item.title}
    //           </Typography>
    //           <Typography
    //             variant="subtitle1"
    //             color="#111827"
    //             sx={{ fontWeight: 700, width: "200px" }}
    //           >
    //             {item.paragraph}
    //           </Typography>
    //           <Typography variant="body1" color="#6B7280" sx={{ mt: 1 }}>
    //             {item.text}
    //           </Typography>
    //           <Stack
    //             sx={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               mt: 3,
    //               gap: 2,
    //             }}
    //           >
    //             <Button
    //               variant="contained"
    //               size="medium"
    //               sx={{
    //                 // width: "30%",
    //                 bgcolor: "#FFFFFF",
    //                 color: "#212529",
    //                 border: "#E5E7EB",
    //                 borderRadius: "999px",
    //                 fontWeight: 700,
    //               }}
    //             >
    //               Shop Now
    //               <img
    //                 src={"/assets/image/icon.png"}
    //                 alt="Baby"
    //                 style={{ marginLeft: "7px" }}
    //               />
    //             </Button>
    //           </Stack>
    //         </Box>
    //       </Box>
    //     );
    //   })}
    //   <Divider />
    // </Box>
  );
};

export default SeventhSection;
