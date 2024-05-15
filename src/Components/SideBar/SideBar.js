// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function Sidebar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         {/* <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography> */}
//       </Box>
//     </Box>
//   );
// }

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CurrencyRupeeTwoToneIcon from "@mui/icons-material/CurrencyRupeeTwoTone";
import TaskTwoToneIcon from "@mui/icons-material/TaskTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import Scrollbars from "react-custom-scrollbars";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";

import {
  faUserPlus,
  faAddressBook,
  faCalendar,
  faMoneyBill,
  faHandHoldingUsd,
  faMoneyCheck,
  faClipboardList,
  faFileDownload,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

// import Sidebar from "./SideBar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
// const CustomScrollbars = styled(Scrollbars)`
//   /* Add your custom scrollbar styles here */
//   width: 100%;
//   height: 100%;

//   /* Track */
//   .track-vertical {
//     background-color: transparent;
//   }

//   /* Thumb */
//   .thumb-vertical {
//     background-color: #888;
//     border-radius: 5px;
//   }

//   /* Thumb on hover */
//   .thumb-vertical:hover {
//     background-color: #555;
//   }
// `;

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activetab, setActivetab] = React.useState();
  // const navigate = useNavigate();
  const handleClick = (event, tab) => {
    // Pass tab as argument
    setAnchorEl(event.currentTarget);
    setActivetab(tab); // Update active tab state
  };

  // Function to handle closing menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // window.location.href = 'https://eventmanagement-qaii.onrender.com';
    // navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

       
      <AppBar position="fixed" open={open}>

        <div className="header-component flex items-center justify-between">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "black",
              }}
            >
              {activetab}
            </Typography>
          </Toolbar>

          <div className=" mr-8 gap-3 justify-between flex ">
            <div className="flex items-center justify-evenly gap-4">
              <div>News</div>
              <div>ChatBot</div>
            </div>
            <NotificationsIcon />
            <SettingsIcon />
          </div>
        </div>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        {/* <Scrollbars
          sx={{
            backgroundColor: "black",
          }}
        > */}
        <div className="two">
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: "black",
                "&:hover": {
                  // backgroundColor: "#ffccf6", // Adjust alpha for desired faintness
                },
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "DashBoard")}
            >
              <div className="menuitems-of-header "></div>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "Profile")}
            >
              <div className="menuitems-of-header ">
                <ListItemButton
                  className={
                    activetab === "Profile"
                      ? "menuitems-of-header active"
                      : "menuitems-of-header"
                  }
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Tooltip title="Profile">
                      {" "}
                      <span>
                        <PersonAddIcon sx={{ color: "#fff" }} />
                      </span>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </div>
            </ListItem>
            {/* <div className="Menu-items-styling">
              {activetab == "Profile" && (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}></MenuItem>

                  <MenuItem onClick={handleClose}> </MenuItem>
                  <MenuItem onClick={handleClose}> </MenuItem>
                  <MenuItem onClick={handleClose}> </MenuItem>
                </Menu>
              )}
            </div> */}
          </List>

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "Shore Jobs")}
            >
              <div className="menuitems-of-header ">
                <ListItemButton
                  className={
                    activetab === "Shore Jobs"
                      ? "menuitems-of-header active"
                      : "menuitems-of-header"
                  }
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Tooltip title="Shore Jobs">
                      <span>
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          size="lg"
                          color="#fff"
                        />
                      </span>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText
                    primary=" Shore Jobs"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </div>
            </ListItem>
            {/* {activetab == "Shore Jobs" && (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}></MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>
              </Menu>
            )} */}
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "Credits")}
            >
              <div className="menuitems-of-header ">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={
                    activetab === "Credits"
                      ? "menuitems-of-header active"
                      : "menuitems-of-header"
                  }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Tooltip title="Credits">
                      <span>
                        <FontAwesomeIcon
                          icon={faCalendar}
                          size="lg"
                          color="#fff"
                        />
                      </span>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText
                    primary="Credits"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </div>
            </ListItem>
            {/* {activetab == "Event management" && (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}></MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>
                <MenuItem onClick={handleClose}> </MenuItem>

                <MenuItem onClick={handleClose}></MenuItem>
              </Menu>
            )} */}
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "Supscription")}
            >
              <div className="menuitems-of-header ">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={
                    activetab === "Supscription"
                      ? "menuitems-of-header active"
                      : "menuitems-of-header"
                  }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Tooltip title="Supscription">
                      <span>
                        <FontAwesomeIcon
                          icon={faHandHoldingUsd}
                          size="lg"
                          color="#fff"
                        />
                      </span>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText
                    primary="Supscription"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </div>
            </ListItem>
          </List>

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={(event) => handleClick(event, "Logout")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Logout">
                    <span>
                      <LogoutOutlinedIcon
                        size="lg"
                        sx={{
                          color: "white",
                          "&:hover": {
                            color: " rgba(201, 141, 141)", // Adjust alpha for desired faintness
                          },
                        }}
                        onClick={handleLogout}
                      />{" "}
                    </span>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <button
                      variant="outlined"
                      color="error"
                      onClick={handleLogout}
                      style={{
                        color: "white",
                        backgroundColor: "",
                        "&:hover": {
                          backgroundColor: "", // Adjust alpha for desired faintness
                        },
                      }}
                    >
                      Logout
                    </button>
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
        </div>
        {/* </Scrollbars> */}
      </Drawer>

      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}
    </Box>
  );
}
