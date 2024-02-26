"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const SecondSection = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=9");
      const result = await response.json();
      setProducts(result);
    })();
  });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Stack sx={{ mx: { xs: 10, md: 20 },my:10 }}>
      <Typography variant="body1" color="initial"></Typography>
      <Carousel responsive={responsive}>
        {Products.map((item) => {
          return (
            <Card
              sx={{
                minwidth: { xs: 300, sm: 300, md: 250 },
                border: "none",
                boxShadow: "none",
              }}
              key={item.id}
            >
              <Stack sx={{ alignItems: "center"}}>
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "999px",
                    objectFit:"contain"
                  }}
                />
              </Stack>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 500,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Carousel>
    </Stack>
  );
};

export default SecondSection;
