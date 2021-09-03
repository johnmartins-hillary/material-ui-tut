import React from "react";
import {
  makeStyles,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)` 
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow: 1
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },

  ];

  return (
    <div className={classes.root}>

        <AppBar className={classes.appbar} elevation={0}> 
            <Toolbar>
                <Typography className={classes.date}>
                    {Date().toString()}
                </Typography>
                <Typography>
                    Mario
                </Typography>
                <Avatar className={classes.avatar} />
            </Toolbar>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5" className={classes.title}>
          Ninja Notes
        </Typography>

        {/* List / Links */}

        <List>
          {menuItems.map((item) => (
            <ListItem
              Key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {children}</div>
    </div>
  );
}

export default Layout;
