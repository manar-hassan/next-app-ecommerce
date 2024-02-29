"use client";

import { useEffect, useState } from "react";

import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  BorderAllOutlined,
  Inbox,
  Mail,
  Add,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  Icon,
  IconButton,
  InputBase,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slider,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { green } from "@mui/material/colors";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    // backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    // '&:focus': {
    //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    //   borderColor: theme.palette.primary.main,
    // },
  },
}));

const myList = [
  {
    text: "Fruits & Vegetables",
    icon: <img src={"/assets/image/apple.svg.png"} alt="apple" />,
    id: 0,
    state: true,
  },
  {
    text: "Meats & Seafood",
    icon: <img src={"/assets/image/meat.svg.png"} alt="meat" />,
    id: 1,
    state: true,
  },
  {
    text: "Breaksfast & Dairy",
    icon: <img src={"/assets/image/boiled-egg.svg fill.png"} alt="egg" />,
    id: 2,
    state: true,
  },
  {
    text: "Breads & Bakery",

    icon: <img src={"/assets/image/toast-bread.svg.png"} alt="toast" />,
    id: 3,
    state: true,
  },
  {
    text: "Beverages",
    icon: <img src={"/assets/image/cup.svg.png"} alt="cup" />,
    id: 4,
    state: true,
  },
  {
    text: "Frozen Foods",
    icon: (
      <img src={"/assets/image/snowflake.svg fill.png"} alt="Frozen Foods" />
    ),
    path: "/",
  },
  {
    text: "Biscuits & Snacks",
    icon: <img src={"/assets/image/bar.svg.png"} alt="Biscuits" />,
    path: "/pages",
  },
  {
    text: "Grocery & Staples",
    icon: <img src={"/assets/image/wheat.svg.png"} alt="Grocery" />,

    path: "/groups",
  },
  {
    text: "Household Needs",
    icon: <img src={"/assets/image/scoop.svg.png"} alt="Household" />,

    path: "/pages",
  },
  {
    text: "Healthcare",
    icon: <img src={"/assets/image/toilet-paper.svg.png"} alt="Healthcare" />,
    path: "/friends",
  },
  {
    text: "Baby & Pregnancy",
    icon: <img src={"/assets/image/baby-boy.svg fill.png"} alt="Baby" />,
    path: "/setting",
  },
];

const LeftSide = ({ value, handleChange ,value1, setValue1,value2, setValue2}) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [openFruits, setOpenFruits] = useState([]);
  const handleFruitsClick = (item) => {
    setOpenFruits(
      openFruits.map((e) =>
        e.id === item.id ? { ...e, isOpen: !e.isOpen } : e
      )
    );
  };
  useEffect(() => {
    setOpenFruits(myList.map((e) => ({ ...e, isOpen: false })));
  }, [myList]);

  function valuetext(value) {
    return `${value}$`;
  }

  const drawerWidth = 300;

  const [blockOrNone, setblockOrNone] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");
  const showDrawer = () => {
    setblockOrNone("block");
    setdrawerType("temporary");
  };
  const closeDrawer = () => {
    setblockOrNone("none");
    setdrawerType("permanent");
  };
  return (
    <>
      <IconButton
        onClick={() => {
          showDrawer();
        }}
        sx={{
          mr: "9px",
          display: { md: "none" },
          position: "absolute",
          top: 90,
          left: 90,
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
        sx={{
          display: { xs: blockOrNone, md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: { md: "absolute" },
            top: { md: 145 },
            height: "auto",
            border: "none",
          },
        }}
        // @ts-ignore
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          closeDrawer();
        }}
      >
        <Stack sx={{ px: 2 }}>
          <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>
            Widget price filter
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              gap: 2,
              mt: 4,
              alignItems: "center",
            }}
          >
            <FormControl variant="outlined">
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ color: "#6B7280" }}
              >
                Min price
              </InputLabel>
              <BootstrapInput
                defaultValue={value[0]}
                id="bootstrap-input"
                sx={{ fontWeight: 500, color: "#020617" }}
                onChange={(eo) => {
                  setValue1(eo.target.value)
                }}
              />
            </FormControl>
            <Typography variant="body1" color="initial">
              -
            </Typography>
            <FormControl variant="outlined">
              <InputLabel htmlFor="bootstrap-input" sx={{ color: "#6B7280" }}>
                Max price{" "}
              </InputLabel>
              <BootstrapInput
                defaultValue={value[1]}
                id="bootstrap-input"
                sx={{ fontWeight: 500, color: "#020617" }}
                onChange={(eo) => {
                  setValue2(eo.target.value)
                }}
              />
            </FormControl>
          </Box>
          <Stack sx={{ alignItems: "center" }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={10000}
              sx={{ color: "black", fontWeight: 500, width: "90%" }}
            />
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" color="initial">
              Price: {valuetext(value)}
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "black",
                borderColor: "black",
                fontWeight: 700,
                bgcolor: "#E5E7EB",
                mb: 2,
              }}
              
              onClick={handleChange}
            >
              Filter
            </Button>
          </Stack>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600 }}
            >
              Product Categories
            </Typography>
            <List component="div" disablePadding>
              {openFruits.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    sx={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item.text}
                    />
                    {item.state == true ? (
                      <IconButton>
                        <Add sx={{ color: "#636363", fontSize: "14px" }} />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </Stack>
                );
              })}
            </List>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600 }}
            >
              Filter by Color
            </Typography>

            <Stack sx={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
              <IconButton>
                {" "}
                <Icon sx={{ bgcolor: "black", borderRadius: "10px" }}></Icon>
              </IconButton>
              <Typography variant="body1" color="initial">
                black
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600 }}
            >
              Filter by Brands
            </Typography>
            <List component="div" disablePadding>
              <FormControlLabel
                control={<Checkbox sx={{ mr: 2 }} />}
                label={"fresh"}
              />
            </List>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600 }}
            >
              Product Status{" "}
            </Typography>
            <Stack>
              <FormControlLabel
                control={<Checkbox sx={{ mr: 2 }} />}
                label={"In Stock"}
              />
              <FormControlLabel
                control={<Checkbox sx={{ mr: 2 }} />}
                label={"On Sale"}
              />
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

export default LeftSide;
