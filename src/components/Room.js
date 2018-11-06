import React from "react";
import { connect } from "react-redux";
import { deleteRoom } from "../actions";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const Room = ({ title, uid, deleteRoom }) => {
  const handleDelete = () => {
   
    deleteRoom(uid);
  };

  const handleEdit = () => {
    // TODO: Edit the rooms title
  }

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon>{"folder_icon"}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <Icon>delete_icon</Icon>
          </IconButton>
          <IconButton aria-label="Delete" onClick={handleEdit}>
            <Icon>edit_icon</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
};

export default connect(
  null,
  { deleteRoom }
)(Room);
