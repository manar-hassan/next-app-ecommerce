"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const SixthSection = () => {
  const [Products, setProducts] = useState([]);

  const deadline = "March, 31, 2024";
  const [Days, setDays] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      const result = await response.json();
      setProducts(result);
    })();

    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);
  });
  return (
    <Stack sx={{mx:10}}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "center",
          my: 5,
        }}
      >
        <Typography variant="h4" color="initial">
          Featured Products
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#9CA3AF", textAlign: "center" }}
        >
          Do not miss the current offers until the end of March.{" "}
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "auto auto", md: "auto auto auto" },
          gap: 1,
        }}
      >
        {Products.map((item) => {
          return (
            <Card
              sx={{
                position: "relative",
                my: 4,
                mx: 1,
                display: "flex",
              }}
              key={item.id}
            >
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  color: "#FEF2F2",
                  bgcolor: "#DC2626",
                  p: 1,
                  borderRadius: "14px 40px 40px 14px",
                  fontWeight: 800,
                  left: "8px",
                  zIndex: 1,
                }}
              >
                75%
              </Typography>

              <Box sx={{ flex: "48%" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="green iguana"
                  sx={{ objectFit: "contain", height: 250 }}
                />
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: 1,
                    ml: 2,
                    mt:1,
                    textAlign: "center",
                  
                  }}
                >
                  <Typography variant="body1" color="white" sx={{  bgcolor:"#DC2626",p:1,mb:1,borderRadius:"2px"}}>
                  {Days < 10 ? "0" + Days : Days}
                    :
                    {Hours < 10 ? "0" + Hours : Hours}
                    :
                    {Minutes < 10 ? "0" + Minutes : Minutes}
                    :
                    <span style={{color:"black"}}>
                    {Seconds < 10 ? "0" + Seconds : Seconds}

                    </span>
                  </Typography>
                
                </Stack>
              </Box>

              <Stack
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "52%",
                }}
              >
                <Typography
                  className="text"
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 500,
                    textOverflow: "ellipsis",
                    px: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="#DC2626"
                    sx={{ fontWeight: 800 }}
                  >
                    ${item.price}
                  </Typography>
                  <Typography
                    color="#111827"
                    sx={{
                      textDecorationLine: "line-through",
                      fontWeight: 500,
                      mx: 2,
                    }}
                  >
                    $56.67
                  </Typography>
                </Stack>
                <CardActions>
                  <Button
                    size="large"
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "#634C9F",
                      borderColor: "#634C9F",
                      borderRadius: "999px",
                      fontWeight: 600,
                      textTransform: "initial	",
                    }}
                  >
                    Add to cart{" "}
                  </Button>
                </CardActions>
              </Stack>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};

export default SixthSection;
