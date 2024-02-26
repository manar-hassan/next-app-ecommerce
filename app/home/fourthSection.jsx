"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";



const FourthSection = () => {
  
  const [Products, setProducts] = useState([]);

  useEffect( () => {
    (async () => {
      const response= await fetch('https://fakestoreapi.com/products?limit=9');
    const result = await response.json();
    setProducts(result);
    })()
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
    <Stack>
      <Stack sx={{flexDirection:{xs:"column",md:"row"},gap:2,alignItems:"center",my:5,mx:10}}>
      <Typography variant="h4" color="initial">
      New Arrivals
      </Typography>
      <Typography variant="body1" sx={{color:"#9CA3AF",textAlign:"center"}}>
      Dont miss this opportunity at a special discount just for this week.
      </Typography>
      </Stack>
      <Stack sx={{mx:{xs:10,md:20}}}>
      <Typography variant="body1" color="initial">
      
      </Typography>
      <Carousel responsive={responsive}>
        {Products.map((item) => {
          return (
            <Card sx={{ minwidth:{xs:300,sm:300,md:250}, position: "relative" }} key={item.id}>
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
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  width={"200px"}
                  image={item.image}
                  alt="green iguana"
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 500,
                      textOverflow: "ellipsis",
                      width: { md: "170px" },
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
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
                      sx={{
                        textDecorationLine: "line-through",
                        fontWeight: 500,
                      }}
                    >
                      $56.67
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
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
            </Card>
          );
        })}
      </Carousel>
    </Stack>
    

    
    </Stack>
  );
};

export default FourthSection;
