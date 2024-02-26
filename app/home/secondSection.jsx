import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const SecondSection = () => {
  const myList = [
    {
      text: "Payment only online",
      paragraph:
        "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
      icon: <img src={"/assets/image/Group.png"} alt="Payment" />,
      path: "/",
    },
    {
      text: "New stocks and sales",
      paragraph:
        "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
      icon: <img src={"/assets/image/Group (1).png"} alt="stocks" />,
      path: "/pages",
    },
    {
      text: "Quality assurance",
      paragraph:
        "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",

      icon: <img src={"/assets/image/SVG.png"} alt="Quality" />,

      path: "/groups",
    },
    {
      text: "Delivery from 1 hour",
      paragraph:
        "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
      icon: <img src={"/assets/image/Clip path group.png"} alt="Delivery" />,
      path: "/pages",
    },
  ];
  return (
    <Box sx={{ display:"grid",gridTemplateColumns:{sm:"auto auto",md:"auto auto auto auto"},mx:10 }}>
      {myList.map((item) => {
        return (
          <Box sx={{position:"relative" }}>
            <Stack sx={{ flexDirection: "row" ,height:130}}>
              <span style={{ position: "absolute", bottom: 10 }}>
                {item.icon}
              </span>

              <CardContent sx={{ ml: 7 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    textAlign: "left",
                  }}
                  color="#030712"
                  gutterBottom
                >
                  {item.text}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  color="#6B7280"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 400,
                    textTransform: "capitalize",
                    textAlign: "left",
                  }}
                >
                  {item.paragraph}
                </Typography>
              </CardContent>
            </Stack>
            <Divider sx={{mt:2}} />
          </Box>
        );
      })}
      
    </Box>
  );
};

export default SecondSection;
