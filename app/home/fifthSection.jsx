import { Stack, Box, Typography, Button, Divider } from "@mui/material";

const FifthSection = () => {
  const myList = [
    {
      title: "Only This Week",
      paragraph: "Provides you experienced quality products",
      text: "Feed your family the best",
      icon: <img src={"/assets/image/banner-01.jpg.png"} alt="Payment" />,
      path: "/",
    },
    {
      title: "Only This Week",
      paragraph: "Shopping with us for better quality and the best price",
      text: "Only this week. Don’t miss...",
      icon: <img src={"/assets/image/banner-02.jpg.png"} alt="stocks" />,
      path: "/pages",
    },
    {
      title: "Only This Week",
      paragraph: "Get the best quality products at the lowest prices ",
      text: "A different kind of grocery store",
      icon: <img src={"/assets/image/banner-03.jpg.png"} alt="Quality" />,
      path: "/groups",
    },
    {
      title: "Only This Week",
      paragraph: "Where you get your all favorite brands under one roof",
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
}

export default FifthSection;
