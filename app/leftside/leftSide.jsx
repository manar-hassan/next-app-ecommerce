"use client";

import { useState } from "react";

import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  ExpandLess,
  ExpandMore,
  StarBorder,
  BorderAllOutlined,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const LeftSide = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [openFruits, setOpenFruits] = useState(false);

  const handleFruitsClick = () => {
    setOpenFruits(!openFruits);
  };
  const [openMeats, setOpenMeats] = useState(false);

  const handleMeatsClick = () => {
    setOpenMeats(!openMeats);
  };
  const [openBreaksfast, setOpenBreaksfast] = useState(false);

  const handleBreaksfastClick = () => {
    setOpenBreaksfast(!openBreaksfast);
  };
  const [openBreads, setOpenBreads] = useState(false);

  const handleBreadsClick = () => {
    setOpenBreads(!openBreads);
  };
  const [openBeverages, setOpenBeverages] = useState(false);

  const handleBeveragesClick = () => {
    setOpenBeverages(!openBeverages);
  };

  const myList = [
    {
      text: "Fruits & Vegetables",
      icon: <img src={"/assets/image/apple.svg.png"} alt="apple" />,
    },
    {
      text: "Meats & Seafood",
      icon: <img src={"/assets/image/meat.svg.png"} alt="meat" />,
    },
    {
      text: "Breaksfast & Dairy",
      icon: <img src={"/assets/image/boiled-egg.svg fill.png"} alt="egg" />,
    },
    {
      text: "Breads & Bakery",
      icon: <img src={"/assets/image/toast-bread.svg.png"} alt="toast" />,
    },
    {
      text: "Beverages",
      icon: <img src={"/assets/image/cup.svg.png"} alt="cup" />,
    },
  ];
  const myList2 = [
    {
      text: "Frozen Foods",
      icon: <img src={"/assets/image/snowflake.svg fill.png"} alt="Frozen Foods" />,
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
  return (
    <Box
      flexGrow={1}
      className="listColor small"
      minWidth="300px"
      sx={{ display: { md: "block", position: "absolute", top: 135 } }}
    >
      {/* <List
        sx={{
          width: "300px",
          border: "1px solid #E5E7EB",
          borderRadius: "0px, 0px, 8px, 8px",
        }}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <BorderAllOutlined />
          </ListItemIcon>
          <ListItemText primary={"All Categories"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={handleFruitsClick}>
              <ListItemIcon>
                <img src={"/assets/image/apple.svg.png"} alt="apple"></img>
              </ListItemIcon>
              <ListItemText primary="Fruits & Vegetables" />
              {openFruits ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />
            <Collapse in={openFruits} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleMeatsClick}>
              <ListItemIcon>
                <img src={"/assets/image/meat.svg.png"} alt="apple"></img>
              </ListItemIcon>
              <ListItemText primary="Meats & Seafood" />
              {openMeats ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />
            <Collapse in={openMeats} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleBreaksfastClick}>
              <ListItemIcon>
                <img
                  src={"/assets/image/boiled-egg.svg fill.png"}
                  alt="apple"
                ></img>
              </ListItemIcon>
              <Divider />
              <ListItemText primary="Breaksfast & Dairy" />
              {openBreaksfast ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />
            <Collapse in={openBreaksfast} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleBreadsClick}>
              <ListItemIcon>
                <img
                  src={"/assets/image/toast-bread.svg.png"}
                  alt="apple"
                ></img>
              </ListItemIcon>
              <ListItemText primary="Breads & Bakery" />
              {openBreads ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />
            <Collapse in={openBreads} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleBeveragesClick}>
              <ListItemIcon>
                <img src={"/assets/image/cup.svg.png"} alt="Beverages"></img>
              </ListItemIcon>
              <ListItemText primary="Beverages" />
              {openBeverages ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />
            <Collapse in={openBeverages} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>

            {myList2.map((item) => {
              return (
                <List component="div" disablePadding>
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </List>
              );
            })}
          </List>
        </Collapse>
      </List> */}
    </Box>
  );
};

export default LeftSide;
