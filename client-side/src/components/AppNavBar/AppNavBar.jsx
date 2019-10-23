import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import nodatalogo from '../../noData.png';
import Avatarlogo from '../../Avatar.png';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 0,
    border:"none",
    boxShadow:"none"
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

export default function AppNavBar(props) {
  const classes = useStyles();
  const { onHandlerClick, allUsers, onHandleDelete } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Users
        </Typography>
        <List className={classes.list}>
          {
            allUsers.length > 0 ?(allUsers.map(({ _id, firstName, lastName, discription }) => (
              <React.Fragment>
                <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={Avatarlogo} />
                </ListItemAvatar>
                  <ListItemText
                    primary={`${firstName} ${lastName}`}
                    secondary={discription}
                  />
                  <DeleteForeverIcon
                    color="secondary"
                    fontSize="large"
                    onClick={id => onHandleDelete(_id)}
                  ></DeleteForeverIcon>
                </ListItem>
              </React.Fragment>
            ))):(<React.Fragment>
              <ListItem button style={{display: "flex",flexDirection: "column"}}>
                <img src={nodatalogo} alt="" style={{width:"50%",height:"450px"}}/>
              </ListItem>
            </React.Fragment>)
            }
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon onClick={onHandlerClick} />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
