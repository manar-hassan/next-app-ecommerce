import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const myList = [
    {
      title: "Make Money with Us",
      links: {
        1: "Sell on Grogin",
        2: "Sell Your Services on Grogin",
        3: "Sell on Grogin Business",
        4: "Sell Your Apps on Grogin",
        5: "Become an Affilate",
        6: "Advertise Your Products",
        7: "Sell-Publish with Us",
        8: "Become an Blowwe Vendor",
      },
    },
    {
      title: "Let Us Help You",
      links: {
        1: "Accessibility Statement",
        2: "Your Orders",
        3: "Returns & Replacements",
        4: "Shipping Rates & Policies",
        5: "Refund and Returns Policy",
        6: "Privacy Policy",
        7: "Terms and Conditions",
        8: "Cookie Settings",
        9: "Help Center",
      },
    },
    {
      title: "Get to Know Us",
      links: {
        1: "Careers for Grogin",
        2: "About Grogin",
        3: "Inverstor Relations",
        4: "Grogin Devices",
        5: "Customer reviews",
        6: "Social Responsibility",
        7: "Store Locations",
      },
    },
  ];
  return (
    <Box sx={{ bgcolor: "#F3F4F6" }}>
      <Stack
        sx={{
          flexDirection: "column",
          py: 10,
          pl: 5,
        }}
      >
        <Typography variant="h4" color="initial">
          Join our newsletter for £10 offs
        </Typography>
        <Typography variant="body1" sx={{ color: "#6B7280" }}>
          Register now to get latest updates on promotions & coupons.Don’t
          worry, we not spam!{" "}
        </Typography>
      </Stack>

      <Stack
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            sm: "auto auto",
            md: "auto auto auto auto auto",
          },
          justifyContent: "space-around",
          px: 2,
          borderTop: "1px solid #D1D5DB",
          borderBottom: "1px solid #D1D5DB",
          py: 3,
        }}
      >
        <Box>
          <Typography variant="h5" color="initial" sx={{ mb: 3 }}>
            Do You Need Help ?
          </Typography>
          <Typography variant="body1" color="#4B5563">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </Typography>
          <Box sx={{ display: "flex", mt: 4, gap: 3 }}>
            <Box>
              <img src="/assets/image/Vector.png" alt="" />
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                Monday-Friday: 08am-9pm
              </Typography>
              <Typography variant="h5" color="initial" sx={{ fontWeight: 700 }}>
                0 800 300-353
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mt: 4, gap: 3 }}>
            <Box>
              <img src="/assets/image/Vector (1).png" alt="" />
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                Need help with your order?
              </Typography>
              <Typography variant="h5" color="initial" sx={{ fontWeight: 700 }}>
                info@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
        {myList.map((item) => {
          return (
            <Box>
              <Typography variant="h5" color="initial" sx={{ mb: 3 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[1]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[2]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[3]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[4]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[5]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[6]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[7]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[8]}
              </Typography>
              <Typography variant="body1" color="#4B5563">
                {item.links[9]}
              </Typography>
            </Box>
          );
        })}
        <Box>
          <Typography variant="h5" color="initial" sx={{ mb: 3 }}>
            Do You Need Help ?
          </Typography>
          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <Button>
              <img
                src="/assets/image/Link → google-play-button-dark.png.png"
                alt=""
              />
            </Button>
            <Typography variant="body1" color="#6B7280">
              Download App Get -10% Discount
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button>
              <img
                src="/assets/image/Link → apple-store-button-dark.png.png"
                alt=""
              />
            </Button>
            <Typography variant="body1" color="#6B7280">
              Download App Get -20% Discount
            </Typography>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 400 }}
            >
              Follow us on social media:
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Link href={"#"}>
                <img
                  src="/assets/image/Icon (2).png"
                  alt=""
                  style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link href={"#"}>
                <img
                  src="/assets/image/Icon (3).png"
                  alt=""
                  style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link href={"#"}>
                <img
                  src="/assets/image/Icon (4).png"
                  alt=""
                  style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link href={"#"}>
                <img
                  src="/assets/image/Icon (5).png"
                  alt=""
                  style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: "4px",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ my: 3, mx: 3 }}>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" color="#6B7280">
            Copyright 2024 © Grogin WooCommerce WordPress Theme. All right
            reserved.{" "}
            <span style={{ color: "#634C9F", fontWeight: 600 }}>
              Powered by KLBTheme.
            </span>
          </Typography>
          <Box>
            <Link
              href={"#"}
              style={{ marginRight: "10px", borderBottom: "1px solid black" }}
            >
              Terms and Conditions
            </Link>
            <Link
              href={"#"}
              style={{ marginRight: "10px", borderBottom: "1px solid black" }}
            >
              Privacy Policy
            </Link>
            <Link
              href={"#"}
              style={{ marginRight: "10px", borderBottom: "1px solid black" }}
            >
              Order Tracking
            </Link>
          </Box>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <Link href="#">
            <img
              src="/assets/image/Vector (2).png"
              alt=""
              style={{ marginRight: "15px" }}
            />
          </Link>
          <Link href="#">
            <img
              src="/assets/image/Group (2).png"
              alt=""
              style={{ marginRight: "15px" }}
            />
          </Link>

          <Link href="#">
            <img
              src="/assets/image/Clip path group (2).png"
              alt=""
              style={{ marginRight: "15px" }}
            />
          </Link>
          <Link href="#">
            <img
              src="/assets/image/List → Item → SVG.png"
              alt=""
              style={{ marginRight: "15px" }}
            />
          </Link>
          <Link href="#">
            <img src="/assets/image/List → Item → SVG (1).png" alt="" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
