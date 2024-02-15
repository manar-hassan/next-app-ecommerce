import {
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
  return (
    <Stack>
      <Stack sx={{flexDirection:"row",gap:2,alignItems:"center",my:5}}>
      <Typography variant="h4" color="initial">
      New Arrivals
      </Typography>
      <Typography variant="body1" sx={{color:"#9CA3AF"}}>
      Dont miss this opportunity at a special discount just for this week.
      </Typography>
      </Stack>
    
    <Card sx={{ maxWidth: 300, position: "relative" }}>
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
          image="/assets/image/Link → 1-2-500x500.jpg.png"
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 500 }}
          >
            100 Percent Apple Juice – 64 fl oz Bottle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" color="#DC2626" sx={{ fontWeight: 800 }}>
              $27.99
            </Typography>
            <Typography
              color="#111827"
              sx={{ textDecorationLine: "line-through", fontWeight: 500 }}
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
    </Stack>
  );
};

export default FourthSection;
