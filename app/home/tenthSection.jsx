"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const TenthSection = () => {
  const [Users, setUsers] = useState([]);
  const [Users2, setUsers2] = useState([]);
  const [Users3, setUsers3] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/users?limit=4");
      const result = await response.json();
      setUsers(result);
    })();
    (async () => {
      const response2 = await fetch("https://fakestoreapi.com/users?limit=2");
      const result2 = await response2.json();
      setUsers2(result2);
    })();

    (async () => {
      const response3 = await fetch("https://fakestoreapi.com/users?limit=1");
      const result3 = await response3.json();
      setUsers3(result3);
    })();
  });
  return (
    <Box sx={{mx:10}}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "center",
          my: 5,
        }}
      >
        <Typography variant="h4" color="initial">
          Popular Companies
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#9CA3AF", textAlign: "center" }}
        >
          Some of the new products arriving this weeks{" "}
        </Typography>
      </Stack>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-around" }}>
        {Users.map((item) => {
          return (
            <Card
              sx={{
                maxWidth: 275,
                display: { xs: "none", md: "flex" },
                flex: "25%",
              }}
              key={item.id}
            >
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  <img
                    src="/assets/image/user.png"
                    alt=""
                    style={{ borderRadius: "4px" }}
                  />
                  <Stack>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.name.firstname}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Featured
                    </Typography>
                  </Stack>
                </Box>

                <Typography
                  variant="body2"
                  color="#030712"
                  sx={{ fontWeight: 400, mt: 3 }}
                >
                  Good quality product can only be found in good stores
                </Typography>
              </CardContent>
            </Card>
          );
        })}
        {Users2.map((item) => {
          return (
            <Card
              sx={{
                maWidth: 300,
                display: { xs: "none", sm: "flex", md: "none" },
                flex: "50%",
              }}
              key={item.id}
            >
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  <img
                    src="/assets/image/user.png"
                    alt=""
                    style={{ borderRadius: "4px" }}
                  />
                  <Stack>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.name.firstname}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Featured
                    </Typography>
                  </Stack>
                </Box>

                <Typography
                  variant="body2"
                  color="#030712"
                  sx={{ fontWeight: 400, mt: 3 }}
                >
                  Good quality product can only be found in good stores
                </Typography>
              </CardContent>
            </Card>
          );
        })}

        {Users3.map((item) => {
          return (
            <Card sx={{ maWidth: 300, display: { sm: "none" } }} key={item.id}>
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  <img
                    src="/assets/image/user.png"
                    alt=""
                    style={{ borderRadius: "4px" }}
                  />
                  <Stack>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.name.firstname}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Featured
                    </Typography>
                  </Stack>
                </Box>

                <Typography
                  variant="body2"
                  color="#030712"
                  sx={{ fontWeight: 400, mt: 3 }}
                >
                  Good quality product can only be found in good stores
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TenthSection;
