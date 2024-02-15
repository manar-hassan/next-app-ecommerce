import {
  Stack,
  Box,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import React from "react";

const ThirdSection = () => {
  const myList = [
    {
      title: "Only This Week",
      paragraph: "Quality eggs at an affordable price",
      text: "Eat one every day",
      icon: <img src={"/assets/image/banner-01.jpg.png"} alt="Payment" />,
      path: "/",
    },
    {
      title: "Only This Week",
      paragraph: "Snacks that nourishes our mind and body",
      text: "Shine the morning...",
      icon: <img src={"/assets/image/banner-02.jpg.png"} alt="stocks" />,
      path: "/pages",
    },
    {
      title: "Only This Week",
      paragraph: "Unbeatable quality, unbeatable prices.",

      text: "Only this week. Don’t miss...",
      icon: <img src={"/assets/image/banner-03.jpg.png"} alt="Quality" />,

      path: "/groups",
    },
  ];
  return (
    <Stack sx={{ flexDirection: "row", mt: 5 }}>
      {myList.map((item) => {
        return (
          <Box sx={{ position: "relative" }}>
            {item.icon}
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                width: "470px",
                left: "30px",
              }}
            >
              <Typography
                variant="body1"
                color="#EA580C"
                sx={{
                  width: "35%",
                  borderRadius: "6px",
                  textAlign: "left",
                  fontWeight: 500,
                  mb: "10px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#111827"
                sx={{ fontWeight: 700, width: "200px" }}
              >
                {item.paragraph}
              </Typography>
              <Typography variant="body1" color="#6B7280" sx={{ mt: 1 }}>
                {item.text}
              </Typography>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  mt: 3,
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    width: "30%",
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
          </Box>
        );
      })}
      <Divider />
    </Stack>
  );
};

export default ThirdSection;
