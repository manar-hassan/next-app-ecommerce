import { Box, Typography } from "@mui/material";
import React from "react";

const NinethSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FFF7ED",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        mx:10
      }}
    >
      <Box sx={{ pt: 2, pl: 2 }}>
        <Typography variant="body1" color="#EA580C" sx={{ fontWeight: 700 }}>
          In store or online your health & safety is our top priority
        </Typography>
        <Typography variant="body1" color="#6B7280">
          The only supermarket that makes your life easier, makes you enjoy life
          and makes it better
        </Typography>
      </Box>
      <Box>
        <Typography
          className="textGrid"
          sx={{
            textOverflow: "hidden",
            position: "sticky",
            fontWeight: 700,
            fontSize: "100px",
          }}
        >
          %50
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <img src="/assets/image/promo.png.png" alt="" />
      </Box>
    </Box>
  );
};

export default NinethSection;
