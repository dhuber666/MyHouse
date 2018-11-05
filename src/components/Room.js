import React from "react";
import _ from "lodash";

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Room = props => {


    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Icon>
                            {"folder_icon"}
                        </Icon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.title} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <Icon>
                            delete_icon
                        </Icon>
                    </IconButton>
                </ListItemSecondaryAction>


            </ListItem>
            <Divider />
        </div>
    );
};

export default Room;
