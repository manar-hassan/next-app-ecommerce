"use client";

import { useEffect, useState } from "react";

import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  BorderAllOutlined,
  Inbox,
  Mail,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
const myList = [
  {
    text: "Fruits & Vegetables",
    icon: <img src={"/assets/image/apple.svg.png"} alt="apple" />,
    id: 0,
  },
  {
    text: "Meats & Seafood",
    icon: <img src={"/assets/image/meat.svg.png"} alt="meat" />,
    id: 1,
  },
  {
    text: "Breaksfast & Dairy",
    icon: <img src={"/assets/image/boiled-egg.svg fill.png"} alt="egg" />,
    id: 2,
  },
  {
    text: "Breads & Bakery",
    icon: <img src={"/assets/image/toast-bread.svg.png"} alt="toast" />,
    id: 3,
  },
  {
    text: "Beverages",
    icon: <img src={"/assets/image/cup.svg.png"} alt="cup" />,
    id: 4,
  },
];
const LeftSide = () => {
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

  const myList2 = [
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
            maxHeight: { md: 501 },
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
        <List
          sx={
            {
              // width: "100%",
              // maxWidth: 300,
              // bgcolor: "background.paper",
              // overflow: "auto",
              // maxHeight: 501,
              // "& ul": { padding: 0 },
              // display: { xs: blockOrNone, md: "block" },
              // position: "absolute",
              // top: 145,
            }
          }
          subheader={<li />}
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
              {openFruits.map((item, index) => {
                return (
                  <List key={index}>
                    <ListItemButton
                      onClick={() => {
                        handleFruitsClick(item);
                      }}
                    >
                      <ListItemIcon>
                        <span>{item.icon}</span>
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                      {item.isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider />

                    <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                );
              })}

              {myList2.map((item) => {
                return (
                  <List key={item.text} component="div" disablePadding>
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton>
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
        </List>
      </Drawer>
    </>
  );
};

export default LeftSide;
