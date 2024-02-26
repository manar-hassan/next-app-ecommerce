"use client";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
const myList = [
  {
    title: "Only This Week",
    paragraph: "Make your grocery shopping easy with us",
    text: "Only this week. Don’t miss...",
    icon: <img src={"/assets/image/banner-10.jpg.png"} alt="Payment" />,
    path: "/",
  },
  {
    title: "Only This Week",
    paragraph: "Get your everyday needs here with us",
    text: "A different kind of grocery store",
    icon: <img src={"/assets/image/banner-11.jpg.png"} alt="stocks" />,
    path: "/pages",
  },
];
const EighthSection = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const result = await response.json();
      setProducts(result);
    })();
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", alignItems: "center" },
        mx:10
      }}
    >
      <Box
        sx={{ flex: "35%", display: "grid", gridTemplateColumns: "auto auto" }}
      >
        {Products.map((item) => {
          return (
            <Card
              sx={{ maxWidth: 275, position: "relative", pt: 2 }}
              key={item.id}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                />
                <img
                  src="/assets/image/Icon (1).png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 1,
                    width: "30px",
                  }}
                />
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
                    top: 1,
                  }}
                >
                  75%
                </Typography>
                <Typography
                  className="text"
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 500, mt: 1 }}
                >
                  {item.title}
                </Typography>

                <Stack
                  sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
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
                    sx={{ textDecorationLine: "line-through", fontWeight: 500 }}
                  >
                    $56.67
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="outlined"
                  fullWidth
                  endIcon={<Add />}
                  sx={{
                    color: "#634C9F",
                    borderColor: "#634C9F",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "initial	",
                    justifyContent: "space-between",
                  }}
                >
                  Add to cart{" "}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
      <Box
        sx={{
          flex: "30%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        {myList.map((item) => {
          return (
            <Box
              sx={{
                position: "relative",
              }}
              key={item.paragraph}
            >
              {item.icon}
              <Box sx={{ position: "absolute", top: 20, left: 20 }}>
                <Stack>
                  <Typography
                    variant="body1"
                    color="#EA580C"
                    sx={{
                      borderRadius: "6px",
                      textAlign: "center",
                      fontWeight: 600,
                      width: "130px",
                      mb: 1,
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
                      lineHeight: "30px",
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
                      mt: 1,
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
      </Box>

      <Box
        sx={{ flex: "35%", display: "grid", gridTemplateColumns: "auto auto" }}
      >
        {Products.map((item) => {
          return (
            <Card
              sx={{ maxWidth: 275, pt: 2, position: "relative" }}
              key={item.id}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                />
                <img
                  src="/assets/image/Icon (1).png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 1,
                    width: "30px",
                  }}
                />
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
                    top: 1,
                  }}
                >
                  75%
                </Typography>
                <Typography
                  className="text"
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 500, mt: 1 }}
                >
                  {item.title}
                </Typography>
                <Stack
                  sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
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
                    sx={{ textDecorationLine: "line-through", fontWeight: 500 }}
                  >
                    $56.67
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="outlined"
                  fullWidth
                  endIcon={<Add />}
                  sx={{
                    color: "#634C9F",
                    borderColor: "#634C9F",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "initial	",
                    justifyContent: "space-between",
                  }}
                >
                  Add to cart{" "}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default EighthSection;
