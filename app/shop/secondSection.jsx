"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SecondSection = (
  Products,
  value,
  value1,
  value2
) => {
  const drawerWidth = 300;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          sm: "auto auto auto",
          md: "auto auto auto auto auto",
        },
        width: { md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { md: `${drawerWidth}px` },
        p: 5,
      }}
    >
      {Products.Products.map((item, index) => {
      // console.log(value)
        if (item.price) {
          return (
            <Card
              key={index}
              sx={{ maxWidth: 345, position: "relative", mb: 1 }}
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
                  zIndex: 1,
                }}
              >
                75%
              </Typography>
              <CardMedia
                component="img"
                sx={{ height: 150, objectFit: "contain" }}
                image={item.image}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  className="text"
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textOverflow: "ellipsis" }}
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
              </CardContent>
              <CardActions sx={{ pb: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "#16A34A" }}
                >
                  <ShoppingCartOutlined sx={{ color: "white" }} />
                </Button>
                <Button size="small" sx={{ color: "#16A34A" }}>
                  {item.rating.count > 0 ? "In Stock" : "Out Of Stock"}
                </Button>
              </CardActions>
            </Card>
          );
        }
      })}
    </Box>
  );
};

export default SecondSection;
