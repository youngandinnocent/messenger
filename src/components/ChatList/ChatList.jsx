import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import { messagesType } from 'components/MessageList';
import './ChatList.css';

export class ChatList extends Component {
  state = {
    formData: {
      name: { value: '', error: false },
      avatarSrc: { value: '' },
    },
  };

  handleClickItem = (index) => {
    const { linkTo } = this.props;
    linkTo(`/chats/${index}`);
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    const filedValue = event.target.value;
    if (fieldName === 'name') {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [fieldName]: { value: filedValue, error: !filedValue },
        },
      }));
    } else {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [fieldName]: { value: filedValue },
        },
      }));
    }
  };

  handleChatAdd = () => {
    const { formData } = this.state;
    if (formData.name.value) {
      const { addChat } = this.props;
      addChat({ ...formData });
      this.setState({
        formData: {
          name: { value: '', error: false },
          avatarSrc: { value: '' },
        },
      });
    } else {
      this.setState((prevState) => ({
        formData: {
          name: { ...prevState.formData.name, error: true },
          avatarSrc: { ...prevState.formData.avatarSrc },
        },
      }));
    }
  };

  handleChatDelete = (event, index) => {
    event.stopPropagation();
    const { deleteChat } = this.props;
    deleteChat(index);
  };

  render() {
    const { chats } = this.props;
    const { formData } = this.state;

    return (
      <List className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id}>
            <ListItem
              className={className('chat-item', {
                active: chat.marked,
                blink: chat.unread,
              })}
              alignItems="center"
              onClick={() => this.handleClickItem(chat.id)}
            >
              <ListItemAvatar>
                <Avatar src={chat.avatarSrc} />
              </ListItemAvatar>
              <ListItemText primary={chat.name} />
              <Fab
                variant="round"
                color="primary"
                size="small"
                onClick={(event) => this.handleChatDelete(event, chat.id)}
              >
                <RemoveIcon />
              </Fab>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
        <div className="chat-add">
          <TextField
            label="Chat name"
            name="name"
            value={formData.name.value}
            error={formData.name.error}
            autoFocus
            onChange={this.handleInputChange}
          />
          <TextField
            label="Avatar source"
            name="avatarSrc"
            value={formData.avatarSrc.value}
            onChange={this.handleInputChange}
          />
          <Fab variant="round" color="primary" onClick={this.handleChatAdd}>
            <AddIcon />
          </Fab>
        </div>
      </List>
    );
  }
}

export const chatsType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unread: PropTypes.bool,
    marked: PropTypes.bool,
    avatarSrc: PropTypes.string,
  }),
);

ChatList.propTypes = {
  addChat: PropTypes.func,
  deleteChat: PropTypes.func,
  linkTo: PropTypes.func,
  chats: chatsType,
};

ChatList.defaultProps = {
  addChat: () => {},
  deleteChat: () => {},
  linkTo: () => {},
  chats: [
    {
      id: 0,
      name: 'Chat0',
      unread: false,
      marked: true,
      avatarSrc: '',
    },
  ],
};
