import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { routes } from "../../../service/routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
  })
);

const findNameByPath = (path: string) => {
  const patnName = path.split("/")[1];
  const route = routes.find((r) => r.path === patnName);

  return route ? route.title : "";
};
export const Bar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const handleOpen = () => {
    setOpen(!open);
  };
  const [title, setTitle] = useState("Главная страница");
  const location = useLocation();
  useEffect(() => {
    setTitle(findNameByPath(location.pathname));
  }, [location]);

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        {routes.map((route) => {
          return route.path !== "login" ? (
            <ListItem
              button
              onClick={() => {
                history.push(`${route.path}`);
              }}
              key={route.id}
            >
              <ListItemIcon>
                {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                <MoodBadIcon />
              </ListItemIcon>
              <ListItemText primary={`${route.title}`} />
            </ListItem>
          ) : null;
        })}
        <ListItem
          button
          onClick={() => {
            history.push("/");
          }}
        >
          <ListItemIcon>
            {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            <MoodBadIcon />
          </ListItemIcon>
          <ListItemText primary={"Главная страница"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Drawer anchor={"left"} open={open} onClose={handleOpen}>
          {list()}
        </Drawer>
      </div>
    </>
  );
};
